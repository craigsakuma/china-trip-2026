#!/usr/bin/env node

/**
 * Photo curation pipeline for china-trip-2026 website.
 *
 * Usage:
 *   node scripts/curate-photos.mjs search "Forbidden City Beijing" --source wikimedia
 *   node scripts/curate-photos.mjs search "Peking opera" --source wikipedia
 *   node scripts/curate-photos.mjs search "Peking duck" --source unsplash
 *   node scripts/curate-photos.mjs download --city beijing --slug the-forbidden-city-palace-museum --pick 3
 *   node scripts/curate-photos.mjs status beijing
 *   node scripts/curate-photos.mjs status
 */

import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";

const PHOTOS_DIR = path.resolve(
  import.meta.dirname,
  "..",
  "website",
  "public",
  "photos"
);

// ── Helpers ──────────────────────────────────────────────────────────

function readSources(city) {
  const file = path.join(PHOTOS_DIR, city, "_sources.json");
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function writeSources(city, data) {
  const file = path.join(PHOTOS_DIR, city, "_sources.json");
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

function getCities() {
  return fs
    .readdirSync(PHOTOS_DIR)
    .filter(
      (d) =>
        fs.statSync(path.join(PHOTOS_DIR, d)).isDirectory() &&
        !d.startsWith(".")
    );
}

function getItemSlugs(city) {
  // Read from the data profile to find all activity/restaurant slugs
  const profilePath = path.resolve(
    import.meta.dirname,
    "..",
    "website",
    "src",
    "data",
    "profiles",
    `${city}.ts`
  );
  if (!fs.existsSync(profilePath)) return [];
  const content = fs.readFileSync(profilePath, "utf-8");
  const slugs = [];
  for (const m of content.matchAll(/slug:\s*"([^"]+)"/g)) {
    slugs.push(m[1]);
  }
  return slugs;
}

// ── Search: Wikimedia Commons ────────────────────────────────────────

async function searchWikimedia(query, limit = 10) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrnamespace: "6", // File namespace
    gsrsearch: query,
    gsrlimit: String(limit),
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: "1600",
    format: "json",
    origin: "*",
  });

  const url = `https://commons.wikimedia.org/w/api.php?${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Wikimedia API error: ${res.status}`);
  const data = await res.json();

  if (!data.query?.pages) return [];

  return Object.values(data.query.pages)
    .filter((p) => {
      const info = p.imageinfo?.[0];
      if (!info) return false;
      // Filter: landscape, >= 1200px wide, image files only
      const ext = p.title?.toLowerCase() || "";
      if (
        !ext.endsWith(".jpg") &&
        !ext.endsWith(".jpeg") &&
        !ext.endsWith(".png")
      )
        return false;
      return info.width >= 1200 && info.width >= info.height;
    })
    .map((p) => {
      const info = p.imageinfo[0];
      const meta = info.extmetadata || {};
      return {
        source: "wikimedia",
        title: p.title?.replace("File:", "") || "",
        width: info.width,
        height: info.height,
        author: stripHtml(meta.Artist?.value || "Unknown"),
        license: meta.LicenseShortName?.value || "Unknown",
        license_url: meta.LicenseUrl?.value || "",
        description: stripHtml(
          meta.ImageDescription?.value || ""
        ).slice(0, 120),
        page_url: `https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title)}`,
        download_url: info.url,
        thumb_url: info.thumburl,
      };
    });
}

// ── Search: Unsplash ─────────────────────────────────────────────────

async function searchUnsplash(query, limit = 10) {
  const params = new URLSearchParams({
    query,
    per_page: String(limit),
    orientation: "landscape",
  });

  const url = `https://unsplash.com/napi/search/photos?${params}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  if (!res.ok) {
    if (res.status === 403) {
      console.error(
        "Unsplash API returned 403. Try wikimedia source instead, or use a browser."
      );
      return [];
    }
    throw new Error(`Unsplash API error: ${res.status}`);
  }

  const data = await res.json();
  if (!data.results) return [];

  return data.results
    .filter((r) => r.width >= 1200 && r.width >= r.height)
    .map((r) => ({
      source: "unsplash",
      title: r.description || r.alt_description || "Untitled",
      width: r.width,
      height: r.height,
      author: r.user?.name || "Unknown",
      license: "Unsplash License",
      license_url: "https://unsplash.com/license",
      description: (r.alt_description || "").slice(0, 120),
      page_url: r.links?.html || "",
      download_url: r.urls?.full || r.urls?.regular || "",
      thumb_url: r.urls?.small || "",
    }));
}

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

const UA = "ChinaTripPlanner/1.0 (trip planning; craigsakuma@gmail.com)";

// ── Search: Wikipedia Article Images ────────────────────────────────

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

  // Keep only real photos — skip SVGs, icons, logos, flags, maps, UI elements
  const EXCLUDE = [
    "icon", "logo", "flag", "symbol", "edit-clear", "commons-logo",
    "wikidata", "wikiquote", "wikisource", "wikivoyage", "question_book",
    "ambox", "padlock", "map", "locator", "location_dot", "red_pog",
    "increase", "decrease", "steady2", "gnome", "crystal_clear", "nuvola",
    "stub", "disambig", "folder_hexagon",
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

    if (i + 50 < fileTitles.length) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  return results.sort((a, b) => b.width * b.height - a.width * a.height);
}

async function searchWikipedia(query) {
  console.log(`  Searching Wikipedia for articles matching: "${query}"`);
  const articles = await searchWikipediaArticles(query);

  if (articles.length === 0) {
    console.log("  No Wikipedia articles found.");
    return [];
  }

  console.log(`  Found ${articles.length} articles:`);
  articles.forEach((a, i) => {
    console.log(`    ${i + 1}. ${a.title}`);
  });

  const article = articles[0];
  console.log(`\n  Using: "${article.title}"`);
  console.log(`  https://en.wikipedia.org/wiki/${encodeURIComponent(article.title)}\n`);

  const imageFiles = await getWikipediaPageImages(article.title);
  console.log(`  Found ${imageFiles.length} image files on the page`);

  if (imageFiles.length === 0) return [];

  console.log(`  Fetching metadata from Wikimedia Commons...\n`);
  const results = await getCommonsImageInfo(imageFiles);

  return results;
}

// ── Commands ─────────────────────────────────────────────────────────

let lastSearchResults = [];

async function cmdSearch(query, source) {
  console.log(`\nSearch: "${query}" (${source})`);
  console.log("Filtering: >= 1200px wide, landscape orientation\n");

  let results;
  if (source === "wikimedia") {
    results = await searchWikimedia(query);
  } else if (source === "unsplash") {
    results = await searchUnsplash(query);
  } else if (source === "wikipedia") {
    results = await searchWikipedia(query);
  } else {
    console.error(`Unknown source: ${source}. Use "wikimedia", "wikipedia", or "unsplash".`);
    process.exit(1);
  }

  if (results.length === 0) {
    console.log("No candidates found matching criteria.");
    return;
  }

  lastSearchResults = results;

  console.log(`Found ${results.length} candidates:\n`);
  results.forEach((r, i) => {
    console.log(`  ${i + 1}. ${r.title}`);
    console.log(
      `     ${r.width}x${r.height} | ${r.license} | by: ${r.author}`
    );
    console.log(`     ${r.page_url}`);
    console.log();
  });

  // Save results for download command
  const cacheFile = path.join(PHOTOS_DIR, ".last-search.json");
  fs.writeFileSync(cacheFile, JSON.stringify(results, null, 2));
  console.log(
    `Results cached. Use: node scripts/curate-photos.mjs download --city <city> --slug <slug> --pick <number>`
  );
}

async function cmdDownload(city, slug, pickIndex) {
  const cacheFile = path.join(PHOTOS_DIR, ".last-search.json");
  if (!fs.existsSync(cacheFile)) {
    console.error("No search results cached. Run a search first.");
    process.exit(1);
  }

  const results = JSON.parse(fs.readFileSync(cacheFile, "utf-8"));
  if (pickIndex < 1 || pickIndex > results.length) {
    console.error(
      `Invalid pick: ${pickIndex}. Must be 1-${results.length}.`
    );
    process.exit(1);
  }

  const picked = results[pickIndex - 1];
  const destDir = path.join(PHOTOS_DIR, city);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const destFile = path.join(destDir, `${slug}.jpg`);
  console.log(`\nDownloading: ${picked.title}`);
  console.log(`  From: ${picked.download_url}`);
  console.log(`  To:   ${destFile}`);

  const res = await fetch(picked.download_url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);

  await pipeline(res.body, createWriteStream(destFile));

  // Update _sources.json
  const sources = readSources(city);
  sources[`${slug}.jpg`] = {
    title: picked.title,
    author: picked.author,
    source: picked.page_url,
    license: picked.license,
    license_url: picked.license_url,
    alt: picked.description || picked.title,
    status: "needs-review",
  };
  writeSources(city, sources);

  console.log(`\nDone. Updated _sources.json. Review the photo and set status to "approved".`);
}

function cmdStatus(city) {
  const cities = city ? [city] : getCities();

  for (const c of cities) {
    const slugs = getItemSlugs(c);
    const sources = readSources(c);
    const photoDir = path.join(PHOTOS_DIR, c);

    // Check which slugs have actual photo files
    const existing = new Set(
      fs.existsSync(photoDir)
        ? fs
            .readdirSync(photoDir)
            .filter(
              (f) =>
                !f.startsWith("_") &&
                !f.startsWith(".") &&
                (f.endsWith(".jpg") || f.endsWith(".png") || f.endsWith(".webp"))
            )
            .map((f) => f.replace(/\.(jpg|png|webp)$/, ""))
        : []
    );

    // Partition into activity-like vs neighborhood slugs
    // Neighborhoods don't get photos, so filter them out
    const itemSlugs = slugs.filter((s) => {
      // Check if it appears in sources or existing photos, or just list all
      return true;
    });

    const hasPhoto = [];
    const needsPhoto = [];
    const hasHero = fs.existsSync(path.join(photoDir, "_hero.jpg"));
    const heroSize = hasHero
      ? fs.statSync(path.join(photoDir, "_hero.jpg")).size
      : 0;
    const heroReal = heroSize > 1000;

    for (const s of itemSlugs) {
      if (existing.has(s)) {
        const fileSize = fs.statSync(
          path.join(
            photoDir,
            `${s}.${
              fs.existsSync(path.join(photoDir, `${s}.jpg`))
                ? "jpg"
                : fs.existsSync(path.join(photoDir, `${s}.png`))
                  ? "png"
                  : "webp"
            }`
          )
        ).size;
        // Only count as "has photo" if > 1KB (not a 1x1 placeholder)
        if (fileSize > 1000) {
          hasPhoto.push(s);
        } else {
          needsPhoto.push(s);
        }
      } else {
        needsPhoto.push(s);
      }
    }

    console.log(`\n── ${c} ──`);
    console.log(`  Hero: ${heroReal ? "YES" : "NEEDS PHOTO"}`);
    console.log(
      `  Items with photos: ${hasPhoto.length}/${itemSlugs.length}`
    );

    if (hasPhoto.length > 0) {
      console.log(`  Has photo:`);
      hasPhoto.forEach((s) => {
        const status = sources[`${s}.jpg`]?.status || "unknown";
        console.log(`    [${status}] ${s}`);
      });
    }

    if (needsPhoto.length > 0) {
      console.log(`  Needs photo:`);
      needsPhoto.forEach((s) => console.log(`    - ${s}`));
    }
  }
  console.log();
}

// ── Main ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const command = args[0];

if (!command || command === "--help" || command === "-h") {
  console.log(`
Photo Curation Pipeline

Usage:
  node scripts/curate-photos.mjs search "<query>" --source wikimedia|wikipedia|unsplash
  node scripts/curate-photos.mjs download --city <city> --slug <slug> --pick <n>
  node scripts/curate-photos.mjs status [city]

Commands:
  search    Search for photo candidates from various sources
  download  Download a photo from the last search results
  status    Show which items have photos and which need them

Sources:
  wikimedia   Search Wikimedia Commons directly by keyword (default)
  wikipedia   Search Wikipedia articles by keyword, then collect all photos from the page
  unsplash    Search Unsplash by keyword

Examples:
  node scripts/curate-photos.mjs search "Forbidden City Beijing" --source wikimedia
  node scripts/curate-photos.mjs search "Peking opera" --source wikipedia
  node scripts/curate-photos.mjs search "Peking duck carving" --source unsplash
  node scripts/curate-photos.mjs download --city beijing --slug siji-minfu --pick 2
  node scripts/curate-photos.mjs status beijing
  node scripts/curate-photos.mjs status
`);
  process.exit(0);
}

if (command === "search") {
  const query = args[1];
  if (!query) {
    console.error('Usage: search "<query>" --source wikimedia|wikipedia|unsplash');
    process.exit(1);
  }
  const sourceIdx = args.indexOf("--source");
  const source = sourceIdx !== -1 ? args[sourceIdx + 1] : "wikimedia";
  await cmdSearch(query, source);
} else if (command === "download") {
  const cityIdx = args.indexOf("--city");
  const slugIdx = args.indexOf("--slug");
  const pickIdx = args.indexOf("--pick");
  if (cityIdx === -1 || slugIdx === -1 || pickIdx === -1) {
    console.error(
      "Usage: download --city <city> --slug <slug> --pick <number>"
    );
    process.exit(1);
  }
  await cmdDownload(args[cityIdx + 1], args[slugIdx + 1], parseInt(args[pickIdx + 1]));
} else if (command === "status") {
  cmdStatus(args[1]);
} else {
  console.error(`Unknown command: ${command}. Use --help for usage.`);
  process.exit(1);
}
