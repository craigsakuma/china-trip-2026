#!/usr/bin/env node

/**
 * Inject photo references into city profile .ts files.
 * For each activity/restaurant that has a downloaded .jpg in the photos dir,
 * adds a `photo: { src: "...", alt: "..." }` property after the slug line.
 *
 * Usage:
 *   node scripts/inject-photos.mjs                # all cities
 *   node scripts/inject-photos.mjs --city chengdu # single city
 *   node scripts/inject-photos.mjs --dry-run      # preview changes
 */

import fs from "node:fs";
import path from "node:path";

const PHOTOS_DIR = path.resolve(import.meta.dirname, "..", "website", "public", "photos");
const PROFILES_DIR = path.resolve(import.meta.dirname, "..", "website", "src", "data", "profiles");

const args = process.argv.slice(2);
const cityIdx = args.indexOf("--city");
const targetCity = cityIdx !== -1 ? args[cityIdx + 1] : null;
const dryRun = args.includes("--dry-run");

// Get all city profile files
const allCities = fs
  .readdirSync(PROFILES_DIR)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .map((f) => f.replace(".ts", ""))
  .filter((c) => !targetCity || c === targetCity)
  .sort();

let totalInjected = 0;
let totalSkipped = 0;
let totalAlready = 0;

for (const city of allCities) {
  const profilePath = path.join(PROFILES_DIR, `${city}.ts`);
  const photosDir = path.join(PHOTOS_DIR, city);
  const sourcesPath = path.join(photosDir, "_sources.json");

  if (!fs.existsSync(photosDir)) {
    console.log(`${city}: no photos dir, skipping`);
    continue;
  }

  // Get list of available photo files
  const photoFiles = new Set(
    fs.readdirSync(photosDir)
      .filter((f) => f.endsWith(".jpg") && !f.startsWith("_"))
      .map((f) => f.replace(".jpg", ""))
  );

  // Load sources for alt text
  const sources = fs.existsSync(sourcesPath)
    ? JSON.parse(fs.readFileSync(sourcesPath, "utf-8"))
    : {};

  let content = fs.readFileSync(profilePath, "utf-8");
  let injected = 0;
  let skipped = 0;
  let already = 0;

  // Find each slug in activities/restaurants and inject photo if file exists
  // Only inject in activities and restaurants sections (not neighborhoods)
  const lines = content.split("\n");
  const newLines = [];
  let i = 0;
  let inSection = ""; // track which section we're in

  while (i < lines.length) {
    const line = lines[i];
    newLines.push(line);

    // Track which section we're in
    if (line.match(/^\s*\/\/.*Neighborhood/i) || line.match(/^\s*neighborhoods:\s*\[/)) {
      inSection = "neighborhood";
    } else if (line.match(/^\s*\/\/.*Activit/i) || line.match(/^\s*activities:\s*\[/)) {
      inSection = "activity";
    } else if (line.match(/^\s*\/\/.*Restaurant/i) || line.match(/^\s*restaurants:\s*\[/)) {
      inSection = "restaurant";
    } else if (line.match(/^\s*\/\/.*Tip/i) || line.match(/^\s*practicalTips:/)) {
      inSection = "tips";
    }

    // Check if this line has a slug definition (only in activity/restaurant sections)
    const slugMatch = line.match(/^(\s*)slug:\s*"([^"]+)"/);
    if (slugMatch && (inSection === "activity" || inSection === "restaurant")) {
      const indent = slugMatch[1];
      const slug = slugMatch[2];

      // Check if there's already a photo property within the next 15 lines of this object
      let hasPhoto = false;
      let braceDepth = 0;
      for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
        if (lines[j].includes("photo:") && lines[j].match(/^\s*photo:/)) {
          hasPhoto = true;
          break;
        }
        // Stop if we hit the end of this object
        if (lines[j].trim() === "},") {
          braceDepth--;
          if (braceDepth < 0) break;
        }
        if (lines[j].trim().endsWith("{")) braceDepth++;
      }

      if (hasPhoto) {
        already++;
      } else if (photoFiles.has(slug)) {
        // Inject photo after the name line (find the next `name:` line)
        // Actually, let's find where to inject — after the slug's name line
        // Look ahead for the `name:` line
        let nameLineIdx = -1;
        for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
          if (lines[j].match(/^\s*name:/)) {
            nameLineIdx = j;
            break;
          }
        }

        if (nameLineIdx !== -1) {
          // Extract the item name from the name line
          const nameMatch = lines[nameLineIdx].match(/name:\s*"([^"]+)"/);
          const itemName = nameMatch ? nameMatch[1] : null;

          // Copy lines up to and including name line
          for (let j = i + 1; j <= nameLineIdx; j++) {
            newLines.push(lines[j]);
          }
          i = nameLineIdx;

          // Build alt text: use item name + city as a clean, reliable alt
          const cityDisplay = city.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          const alt = itemName
            ? `${itemName}, ${cityDisplay}`
            : slug.replace(/-/g, " ");

          // Inject photo line
          newLines.push(`${indent}photo: { src: "/photos/${city}/${slug}.jpg", alt: "${alt.replace(/"/g, '\\"')}" },`);
          injected++;
        } else {
          skipped++;
        }
      } else {
        skipped++;
      }
    }

    i++;
  }

  if (injected > 0) {
    console.log(`${city}: +${injected} photos injected, ${skipped} no file, ${already} already had photo`);
    if (!dryRun) {
      fs.writeFileSync(profilePath, newLines.join("\n"));
    }
  } else {
    console.log(`${city}: no changes (${already} already, ${skipped} no file)`);
  }

  totalInjected += injected;
  totalSkipped += skipped;
  totalAlready += already;
}

console.log(`\n${"=".repeat(50)}`);
console.log(`TOTAL${dryRun ? " (DRY RUN)" : ""}: ${totalInjected} injected, ${totalAlready} already had photo, ${totalSkipped} no file`);
console.log(`${"=".repeat(50)}`);
