#!/usr/bin/env node

/**
 * Batch download photos for ALL cities using Wikipedia article search.
 * For each item (activity/neighborhood/restaurant), searches Wikipedia
 * by name, collects images from the article, and downloads the best match.
 *
 * Usage:
 *   node scripts/batch-download-all.mjs                    # all cities except beijing
 *   node scripts/batch-download-all.mjs --city chengdu     # single city
 *   node scripts/batch-download-all.mjs --dry-run          # preview searches without downloading
 */

import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";

const PHOTOS_DIR = path.resolve(import.meta.dirname, "..", "website", "public", "photos");
const PROFILES_DIR = path.resolve(import.meta.dirname, "..", "website", "src", "data", "profiles");
const UA = "ChinaTripPlanner/1.0 (trip planning; craigsakuma@gmail.com)";

// ── Helpers ──────────────────────────────────────────────────────────

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

function readSources(city) {
  const file = path.join(PHOTOS_DIR, city, "_sources.json");
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function writeSources(city, data) {
  const dir = path.join(PHOTOS_DIR, city);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "_sources.json");
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ── Parse profiles to extract items ──────────────────────────────────

function parseProfile(city) {
  const file = path.join(PROFILES_DIR, `${city}.ts`);
  if (!fs.existsSync(file)) return [];

  const content = fs.readFileSync(file, "utf-8");
  const items = [];

  // Match slug/name pairs in sequence
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const nameRegex = /name:\s*"([^"]+)"/g;

  const slugs = [...content.matchAll(slugRegex)].map((m) => ({ match: m[1], index: m.index }));
  const names = [...content.matchAll(nameRegex)].map((m) => ({ match: m[1], index: m.index }));

  // Pair each slug with the closest preceding or following name
  for (const s of slugs) {
    // Find the name closest to this slug (within ~200 chars)
    let bestName = null;
    let bestDist = Infinity;
    for (const n of names) {
      const dist = Math.abs(n.index - s.index);
      if (dist < bestDist && dist < 300) {
        bestDist = dist;
        bestName = n.match;
      }
    }
    if (bestName) {
      items.push({ slug: s.match, name: bestName });
    }
  }

  return items;
}

// ── Wikipedia API ────────────────────────────────────────────────────

async function searchWikipediaArticles(query, limit = 5) {
  const params = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: query,
    srlimit: String(limit),
    format: "json",
    origin: "*",
  });

  const res = await fetch(`https://en.wikipedia.org/w/api.php?${params}`, {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`Wikipedia API error: ${res.status}`);
  const data = await res.json();
  return data.query?.search || [];
}

async function getWikipediaPageImages(title) {
  const images = [];
  let continueToken = null;

  do {
    const params = new URLSearchParams({
      action: "query",
      titles: title,
      prop: "images",
      imlimit: "500",
      format: "json",
      origin: "*",
    });
    if (continueToken) params.set("imcontinue", continueToken);

    const res = await fetch(`https://en.wikipedia.org/w/api.php?${params}`, {
      headers: { "User-Agent": UA },
    });
    if (!res.ok) throw new Error(`Wikipedia API error: ${res.status}`);
    const data = await res.json();

    for (const page of Object.values(data.query?.pages || {})) {
      if (page.images) {
        images.push(...page.images.map((img) => img.title));
      }
    }
    continueToken = data.continue?.imcontinue || null;
  } while (continueToken);

  const EXCLUDE = [
    "icon", "logo", "flag", "symbol", "edit-clear", "commons-logo",
    "wikidata", "wikiquote", "wikisource", "wikivoyage", "question_book",
    "ambox", "padlock", "map", "locator", "location_dot", "red_pog",
    "increase", "decrease", "steady2", "gnome", "crystal_clear", "nuvola",
    "stub", "disambig", "folder_hexagon", "china_edcp_location_map",
    "blank_map", "relief_map", "administrative_map", "china_location",
  ];

  return images.filter((t) => {
    const lower = t.toLowerCase();
    if (!lower.endsWith(".jpg") && !lower.endsWith(".jpeg") && !lower.endsWith(".png"))
      return false;
    return !EXCLUDE.some((ex) => lower.includes(ex));
  });
}

async function getCommonsImageInfo(fileTitles) {
  const results = [];

  for (let i = 0; i < fileTitles.length; i += 50) {
    const batch = fileTitles.slice(i, i + 50);
    const params = new URLSearchParams({
      action: "query",
      titles: batch.join("|"),
      prop: "imageinfo",
      iiprop: "url|size|extmetadata|mime",
      iiurlwidth: "1600",
      format: "json",
      origin: "*",
    });

    const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
      headers: { "User-Agent": UA },
    });
    if (!res.ok) throw new Error(`Commons API error: ${res.status}`);
    const data = await res.json();

    for (const page of Object.values(data.query?.pages || {})) {
      const info = page.imageinfo?.[0];
      if (!info) continue;
      if (info.width < 1200 || info.width < info.height) continue;

      const meta = info.extmetadata || {};
      results.push({
        source: "wikipedia",
        title: page.title?.replace("File:", "") || "",
        width: info.width,
        height: info.height,
        author: stripHtml(meta.Artist?.value || "Unknown"),
        license: meta.LicenseShortName?.value || "Unknown",
        license_url: meta.LicenseUrl?.value || "",
        description: stripHtml(meta.ImageDescription?.value || "").slice(0, 120),
        page_url: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`,
        download_url: info.thumburl || info.url,
        thumb_url: info.thumburl,
      });
    }

    if (i + 50 < fileTitles.length) await sleep(500);
  }

  return results.sort((a, b) => b.width * b.height - a.width * a.height);
}

// ── Search + Download for one item ───────────────────────────────────

async function findAndDownload(city, slug, name, dryRun) {
  // Build search query: use the item name + city for context
  const cityName = city.replace(/-/g, " ");
  const query = `${name} ${cityName} China`;

  const articles = await searchWikipediaArticles(query, 3);
  if (articles.length === 0) return { status: "no-articles", query };

  // Try the top article
  const article = articles[0];
  const imageFiles = await getWikipediaPageImages(article.title);
  if (imageFiles.length === 0) return { status: "no-images", query, article: article.title };

  const candidates = await getCommonsImageInfo(imageFiles);
  if (candidates.length === 0) return { status: "no-candidates", query, article: article.title };

  if (dryRun) {
    return {
      status: "would-download",
      query,
      article: article.title,
      photo: candidates[0].title,
      size: `${candidates[0].width}x${candidates[0].height}`,
      license: candidates[0].license,
      candidates: candidates.length,
    };
  }

  // Download the best candidate
  const picked = candidates[0];
  const destDir = path.join(PHOTOS_DIR, city);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const destFile = path.join(destDir, `${slug}.jpg`);
  const res = await fetch(picked.download_url, {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  await pipeline(res.body, createWriteStream(destFile));

  return {
    status: "downloaded",
    query,
    article: article.title,
    photo: picked.title,
    size: `${picked.width}x${picked.height}`,
    license: picked.license,
    picked,
  };
}

// ── Main ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const cityIdx = args.indexOf("--city");
const targetCity = cityIdx !== -1 ? args[cityIdx + 1] : null;
const dryRun = args.includes("--dry-run");
const skipExisting = !args.includes("--force");

// Get all city slugs
const allCities = fs
  .readdirSync(PROFILES_DIR)
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(".ts", ""))
  .filter((c) => c !== "beijing" && c !== "index") // Skip beijing (done) and index (not a city)
  .filter((c) => !targetCity || c === targetCity)
  .sort();

if (allCities.length === 0) {
  console.error(`No cities found${targetCity ? ` matching "${targetCity}"` : ""}.`);
  process.exit(1);
}

console.log(`\n${"=".repeat(60)}`);
console.log(`Photo Batch Download${dryRun ? " (DRY RUN)" : ""}`);
console.log(`Cities: ${allCities.length} | Skip existing: ${skipExisting}`);
console.log(`${"=".repeat(60)}\n`);

const summary = { downloaded: 0, skipped: 0, failed: 0, noResult: 0 };

for (const city of allCities) {
  const items = parseProfile(city);
  const sources = readSources(city);
  const destDir = path.join(PHOTOS_DIR, city);

  console.log(`\n${"─".repeat(40)}`);
  console.log(`${city.toUpperCase()} (${items.length} items)`);
  console.log(`${"─".repeat(40)}`);

  for (const item of items) {
    // Skip if already has a photo
    if (skipExisting) {
      const destFile = path.join(destDir, `${item.slug}.jpg`);
      if (fs.existsSync(destFile) && fs.statSync(destFile).size > 1000) {
        console.log(`  ✓ SKIP ${item.slug}`);
        summary.skipped++;
        continue;
      }
    }

    console.log(`  ● ${item.slug}`);
    console.log(`    Name: ${item.name}`);

    try {
      const result = await findAndDownload(city, item.slug, item.name, dryRun);

      if (result.status === "downloaded") {
        // Update sources
        sources[`${item.slug}.jpg`] = {
          title: result.picked.title,
          author: result.picked.author,
          source: result.picked.page_url,
          license: result.picked.license,
          license_url: result.picked.license_url,
          alt: result.picked.description || result.picked.title,
          status: "needs-review",
        };
        const fileSize = fs.statSync(path.join(destDir, `${item.slug}.jpg`)).size;
        console.log(`    ✓ Downloaded: ${result.photo}`);
        console.log(`      Article: "${result.article}" | ${result.size} | ${result.license} | ${(fileSize / 1024).toFixed(0)}KB`);
        summary.downloaded++;
      } else if (result.status === "would-download") {
        console.log(`    → Would download: ${result.photo}`);
        console.log(`      Article: "${result.article}" | ${result.size} | ${result.license} | ${result.candidates} candidates`);
        summary.downloaded++;
      } else {
        console.log(`    ✗ ${result.status} (query: "${result.query}"${result.article ? `, article: "${result.article}"` : ""})`);
        summary.noResult++;
      }

      // Rate limit: 2s between items to be kind to Wikipedia
      await sleep(2000);
    } catch (err) {
      console.log(`    ✗ ERROR: ${err.message}`);
      summary.failed++;
      await sleep(2000);
    }
  }

  // Save sources after each city
  if (!dryRun) {
    writeSources(city, sources);
  }
}

console.log(`\n${"=".repeat(60)}`);
console.log(`SUMMARY${dryRun ? " (DRY RUN)" : ""}`);
console.log(`  Downloaded: ${summary.downloaded}`);
console.log(`  Skipped (existing): ${summary.skipped}`);
console.log(`  No result: ${summary.noResult}`);
console.log(`  Failed: ${summary.failed}`);
console.log(`${"=".repeat(60)}\n`);
