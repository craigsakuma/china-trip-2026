#!/usr/bin/env node

/**
 * Download better photos from travel blogs for weak Beijing images.
 * Each photo gets attribution + blog link in _sources.json.
 */

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

const REPLACEMENTS = [
  {
    slug: "jingshan-park",
    url: "https://www.babagoeschina.com/content/images/2024/08/IMG_3226-1.jpeg",
    alt: "Panoramic view of the Forbidden City from Jingshan Park hilltop",
    author: "Magda Sawyer",
    blog: "Baba Goes China",
    blogUrl: "https://www.babagoeschina.com/forbidden-city-best-view-jingshan-park/",
  },
  {
    slug: "dongsi-central-dongcheng",
    url: "https://www.thebeijinger.com/sites/default/files/styles/800_width/public/un000895.jpg",
    alt: "Historic Shijia Hutong neighborhood model near Dongsi",
    author: "The Beijinger",
    blog: "The Beijinger",
    blogUrl: "https://www.thebeijinger.com/blog/2023/09/27/hidden-plain-sight-exploring-historical-and-artsy-near-dongsi",
  },
  {
    slug: "beihai-park",
    url: "https://www.tour-beijing.com/blog/wp-content/uploads/Bald-trees-the-lake-and-the-white-pagoda.jpg",
    alt: "Beihai Park lake with White Dagoba pagoda at dusk",
    author: "Tour Beijing",
    blog: "Tour Beijing",
    blogUrl: "https://www.tour-beijing.com/blog/beijing-travel/photos-of-beihai-park-at-dusk",
  },
  {
    slug: "lama-temple-and-guozijian-street",
    url: "https://images.squarespace-cdn.com/content/v1/507328ece4b0b0f8a33e85e8/1532917300036-REH6R52VKKK4T73GOWK9/Lama+Temple+in+Beijing",
    alt: "Yonghe Lama Temple courtyard and traditional architecture",
    author: "The Anthrotorian",
    blog: "The Anthrotorian",
    blogUrl: "https://theanthrotorian.com/culture/2018/07/31/the-youghe-lama-temple-beijing-china",
  },
  {
    slug: "wudaoying-yonghegong-area",
    url: "https://images.squarespace-cdn.com/content/v1/507328ece4b0b0f8a33e85e8/1532924005419-AQGICAAG3COB5XKV2MT7/Yonghe+Temple+%28Lama+Temple%29+in+Beijing",
    alt: "Yonghe Temple entrance area near Wudaoying Hutong",
    author: "The Anthrotorian",
    blog: "The Anthrotorian",
    blogUrl: "https://theanthrotorian.com/culture/2018/07/31/the-youghe-lama-temple-beijing-china",
  },
  {
    slug: "fragrant-hills-park",
    url: "https://urbanchinatravelogue.com/wp-content/uploads/2025/11/fragrant-hills-park-beijing-autumn-red-leaves-scenery.webp",
    alt: "Fragrant Hills Park autumn red leaves scenery",
    author: "Urban China Travelogue",
    blog: "Urban China Travelogue",
    blogUrl: "https://urbanchinatravelogue.com/fragrant-hills-park-beijing/",
  },
  {
    slug: "798-art-district",
    url: "https://museumofwander.com/wp-content/uploads/2023/03/DSC00712-2.jpg",
    alt: "798 Art District gallery and industrial architecture",
    author: "Museum of Wander",
    blog: "Museum of Wander",
    blogUrl: "https://museumofwander.com/798-art-zone-beijing/",
  },
];

const CITY = "beijing";
const destDir = path.join(PHOTOS_DIR, CITY);
const sources = readSources(CITY);

let downloaded = 0;
let failed = 0;

for (const item of REPLACEMENTS) {
  const ext = item.url.endsWith(".webp") ? "jpg" : "jpg"; // we'll save everything as jpg
  const destFile = path.join(destDir, `${item.slug}.jpg`);

  console.log(`\n── ${item.slug} ──`);
  console.log(`  From: ${item.blog}`);
  console.log(`  URL: ${item.url.slice(0, 80)}...`);

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
      console.log(`  ✗ File too small (${size} bytes), likely blocked`);
      fs.unlinkSync(destFile);
      failed++;
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
    downloaded++;

    await new Promise((r) => setTimeout(r, 1000));
  } catch (err) {
    console.log(`  ✗ ERROR: ${err.message}`);
    failed++;
  }
}

writeSources(CITY, sources);

console.log(`\n── Summary ──`);
console.log(`  Downloaded: ${downloaded}`);
console.log(`  Failed: ${failed}`);
console.log(`  Total: ${REPLACEMENTS.length}`);
