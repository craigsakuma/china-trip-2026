# Photo Curation Guide

## Folder Structure

```
public/photos/
  {city-slug}/
    _hero.jpg              # City hero image
    _sources.json          # Attribution for all photos (TASL format)
    {item-slug}.jpg        # One photo per activity/restaurant
```

- Folder names match the `slug` field in the data profiles
- Hero images are always `_hero.jpg`
- Each item gets one flat file: `{item-slug}.jpg`
- Items without photos simply show no image (components handle this gracefully)

## Adding Photos via Curation Script

```bash
# Search for candidates
node scripts/curate-photos.mjs search "Forbidden City Beijing" --source wikimedia
node scripts/curate-photos.mjs search "Peking duck carving" --source unsplash

# Download a result (by index from search output)
node scripts/curate-photos.mjs download --city beijing --slug siji-minfu --pick 2

# Check status across all cities
node scripts/curate-photos.mjs status

# Check one city
node scripts/curate-photos.mjs status beijing
```

## Image Requirements

- **Minimum width:** 1200px (curation script filters automatically)
- **Aspect ratio:** Landscape (wider than tall)
- **Format:** `.jpg` preferred
- Photos should accurately represent the actual place

## Source Tracking (_sources.json) — TASL Format

Every photo has attribution following the **TASL** pattern (Title, Author, Source, License):

```json
{
  "the-forbidden-city-palace-museum.jpg": {
    "title": "Forbidden City corner tower reflected in moat",
    "author": "Wikimedia Commons user",
    "source": "https://commons.wikimedia.org/wiki/File:...",
    "license": "CC BY-SA 4.0",
    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/",
    "alt": "Forbidden City corner tower with moat reflection",
    "status": "approved"
  }
}
```

### Status Values

| Status | Meaning |
|---|---|
| `needs-review` | Photo downloaded, not yet verified |
| `approved` | Photo verified as accurate and appropriate |
| `placeholder` | No real photo yet |

## Licensed Sources

- **Wikimedia Commons** — best for landmarks, temples, parks. CC licenses.
- **Unsplash** — best for food, vibes, modern scenes. Unsplash License.

### Vibe Search Tips

For restaurants and hard-to-photograph venues, search by vibe:

| Item | Search for |
|---|---|
| Siji Minfu | "Peking duck carving" or "Chinese roast duck" |
| Ghost Street | "Beijing night food street lanterns" |
| Hutong cooking class | "Chinese home cooking dumplings" |
| Tim Ho Wan | "dim sum bamboo steamer" |
