#!/usr/bin/env node

/**
 * Batch search + download Beijing landmark photos from Wikimedia Commons.
 * Searches for each item, shows the top result, and downloads it.
 */

import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";

const PHOTOS_DIR = path.resolve(import.meta.dirname, "..", "website", "public", "photos");

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

async function searchWikimedia(query, limit = 8) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrnamespace: "6",
    gsrsearch: query,
    gsrlimit: String(limit),
    prop: "imageinfo",
    iiprop: "url|size|extmetadata|mime",
    iiurlwidth: "1600",
    format: "json",
    origin: "*",
  });

  const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: { "User-Agent": "ChinaTripPlanner/1.0 (trip planning; craigsakuma@gmail.com)" },
  });
  if (!res.ok) throw new Error(`Wikimedia API error: ${res.status}`);
  const data = await res.json();
  if (!data.query?.pages) return [];

  return Object.values(data.query.pages)
    .filter((p) => {
      const info = p.imageinfo?.[0];
      if (!info) return false;
      const ext = p.title?.toLowerCase() || "";
      if (!ext.endsWith(".jpg") && !ext.endsWith(".jpeg") && !ext.endsWith(".png")) return false;
      return info.width >= 1200 && info.width >= info.height;
    })
    .map((p) => {
      const info = p.imageinfo[0];
      const meta = info.extmetadata || {};
      return {
        title: p.title?.replace("File:", "") || "",
        width: info.width,
        height: info.height,
        author: stripHtml(meta.Artist?.value || "Unknown"),
        license: meta.LicenseShortName?.value || "Unknown",
        license_url: meta.LicenseUrl?.value || "",
        description: stripHtml(meta.ImageDescription?.value || "").slice(0, 120),
        page_url: `https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title)}`,
        download_url: info.thumburl || info.url,
        full_url: info.url,
      };
    })
    // Prefer higher resolution
    .sort((a, b) => b.width * b.height - a.width * a.height);
}

function readSources(city) {
  const file = path.join(PHOTOS_DIR, city, "_sources.json");
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function writeSources(city, data) {
  const file = path.join(PHOTOS_DIR, city, "_sources.json");
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

// ── Items to search ──────────────────────────────────────────────

const ITEMS = [
  // Neighborhoods
  { slug: "gulou-drum-tower-nanluoguxiang-area", query: "Drum Tower Beijing Gulou" },
  { slug: "dongsi-central-dongcheng", query: "Dongsi hutong Beijing" },
  { slug: "qianmen-dashilar", query: "Qianmen Beijing street" },
  { slug: "wudaoying-yonghegong-area", query: "Yonghe Temple Lama Temple Beijing exterior" },

  // Activities — landmarks
  { slug: "gubeikou-to-jinshanling-wild-wall-hike", query: "Gubeikou Great Wall hiking" },
  { slug: "fragrant-hills-park", query: "Xiangshan Park Beijing autumn" },
  { slug: "temple-of-heaven-and-morning-park-culture", query: "Temple of Heaven Beijing" },
  { slug: "jingshan-park", query: "Jingshan Park Beijing view Forbidden City" },
  { slug: "beihai-park", query: "Beihai Park Beijing White Pagoda" },
  { slug: "lama-temple-and-guozijian-street", query: "Yonghe Temple Lama Temple Beijing" },
  { slug: "798-art-district", query: "798 Art District Beijing" },
  { slug: "panjiayuan-antique-market", query: "Panjiayuan antique market Beijing" },
  { slug: "wudaoying-hutong", query: "Wudaoying Hutong Beijing" },
];

const CITY = "beijing";

// ── Main ─────────────────────────────────────────────────────────

const destDir = path.join(PHOTOS_DIR, CITY);
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const sources = readSources(CITY);
let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const item of ITEMS) {
  // Skip if already has a photo
  const destFile = path.join(destDir, `${item.slug}.jpg`);
  if (fs.existsSync(destFile) && fs.statSync(destFile).size > 1000) {
    console.log(`✓ SKIP ${item.slug} (already has photo)`);
    skipped++;
    continue;
  }

  console.log(`\n── ${item.slug} ──`);
  console.log(`  Search: "${item.query}"`);

  try {
    const results = await searchWikimedia(item.query);
    if (results.length === 0) {
      // Try a broader search
      const broader = item.query.split(" ").slice(0, 2).join(" ") + " Beijing";
      console.log(`  No results. Trying broader: "${broader}"`);
      const retry = await searchWikimedia(broader);
      if (retry.length === 0) {
        console.log(`  ✗ NO RESULTS FOUND`);
        failed++;
        continue;
      }
      results.push(...retry);
    }

    const picked = results[0];
    console.log(`  Found: ${picked.title} (${picked.width}x${picked.height})`);
    console.log(`  By: ${picked.author} | ${picked.license}`);
    console.log(`  Downloading...`);

    const res = await fetch(picked.download_url, {
      headers: { "User-Agent": "ChinaTripPlanner/1.0 (trip planning; craigsakuma@gmail.com)" },
    });
    if (!res.ok) throw new Error(`Download failed: ${res.status}`);
    await pipeline(res.body, createWriteStream(destFile));

    sources[`${item.slug}.jpg`] = {
      title: picked.title,
      author: picked.author,
      source: picked.page_url,
      license: picked.license,
      license_url: picked.license_url,
      alt: picked.description || picked.title,
      status: "needs-review",
    };

    const size = fs.statSync(destFile).size;
    console.log(`  ✓ Downloaded (${(size / 1024).toFixed(0)} KB)`);
    downloaded++;

    // Longer delay to avoid Wikimedia rate limits
    await new Promise((r) => setTimeout(r, 3000));
  } catch (err) {
    console.log(`  ✗ ERROR: ${err.message}`);
    failed++;
  }
}

writeSources(CITY, sources);

console.log(`\n── Summary ──`);
console.log(`  Downloaded: ${downloaded}`);
console.log(`  Skipped (already had): ${skipped}`);
console.log(`  Failed: ${failed}`);
console.log(`  Total items: ${ITEMS.length}`);
