#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";

const PHOTOS_DIR = path.resolve(import.meta.dirname, "..", "website", "public", "photos");

function readSources(city) {
  const file = path.join(PHOTOS_DIR, city, "_sources.json");
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function writeSources(city, data) {
  const file = path.join(PHOTOS_DIR, city, "_sources.json");
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

const FIXES = [
  {
    slug: "jingshan-park",
    url: "https://www.chinadiscovery.com/assets/images/beijing/forbidden-city/forbidden-city-facts-5.jpg",
    alt: "Panoramic view of the Forbidden City golden rooftops from Jingshan Park",
    author: "China Discovery",
    blog: "China Discovery",
    blogUrl: "https://www.chinadiscovery.com/beijing/jingshan-park.html",
  },
  {
    slug: "dongsi-central-dongcheng",
    url: "https://architectureontheroad.com/wp-content/uploads/2020/07/Exploring-the-hutong-of-old-Beijing_Architecture-on-the-road_-6-of-38.jpg",
    alt: "Traditional Beijing hutong alleyway in Dongcheng district",
    author: "Architecture on the Road",
    blog: "Architecture on the Road",
    blogUrl: "https://architectureontheroad.com/hutong-alleys-the-soul-of-old-beijing/",
  },
  {
    slug: "wudaoying-yonghegong-area",
    url: "https://img-rs.huanqiucdn.cn/dp/api/files/image/5459cefdcc0101255cf9c08b664634bbc5.jpg",
    alt: "Wudaoying Hutong street scene near Yonghegong",
    author: "Visit Beijing",
    blog: "Visit Beijing Official",
    blogUrl: "https://english.visitbeijing.com.cn/article/47OOhBvmflW",
  },
];

const CITY = "beijing";
const destDir = path.join(PHOTOS_DIR, CITY);
const sources = readSources(CITY);

for (const item of FIXES) {
  const destFile = path.join(destDir, `${item.slug}.jpg`);
  console.log(`\n── ${item.slug} ──`);
  console.log(`  From: ${item.blog}`);

  try {
    const res = await fetch(item.url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
        "Referer": item.blogUrl,
      },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await pipeline(res.body, createWriteStream(destFile));

    const size = fs.statSync(destFile).size;
    if (size < 5000) {
      console.log(`  ✗ File too small (${size} bytes)`);
      continue;
    }

    sources[`${item.slug}.jpg`] = {
      title: item.alt,
      author: item.author,
      source: item.blogUrl,
      license: `Photo by ${item.blog}`,
      license_url: item.blogUrl,
      alt: item.alt,
      status: "needs-review",
    };

    console.log(`  ✓ Downloaded (${(size / 1024).toFixed(0)} KB)`);
    await new Promise((r) => setTimeout(r, 1000));
  } catch (err) {
    console.log(`  ✗ ERROR: ${err.message}`);
  }
}

writeSources(CITY, sources);
console.log("\nDone.");
