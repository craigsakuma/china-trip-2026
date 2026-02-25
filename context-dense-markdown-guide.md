# Context-Dense Markdown Guide — RAG Optimization Standard

Reference standard for converting travel articles and guides into RAG-optimized markdown.
Used by the `format-into-context-dense` skill and referenced in `notebooklm-best-practices.md`.

---

## What Is Context-Dense Markdown?

Context-dense markdown is structured prose optimized for retrieval-augmented generation (RAG) systems — NotebookLM, vector databases, or any system that chunks and retrieves text semantically. The goal is to ensure every retrievable chunk is self-contained and entity-rich, so a retrieval system can surface useful answers without needing surrounding context.

Raw blog articles perform poorly as RAG sources because they:
- Bury actionable facts in narrative filler
- Organize by time (Day 1, Day 2) rather than by topic
- Separate logistics from the places they describe
- Use SEO padding and generic intros that dilute signal density

---

## Formatting Principles

### 1. Flat H2 Hierarchy

Use `##` as the primary section level. Avoid deep nesting (H3/H4) unless a single topic genuinely has sub-components.

Every H2 section must be **self-contained** — a RAG chunk at any section boundary should make complete sense without the surrounding sections. If you need to read the previous section to understand the current one, the chunking will produce bad retrieval.

### 2. Entity-Rich Headers

Include the **proper name** and **Chinese characters** in every section header.

```
BAD:  ## Day 1 Morning
BAD:  ## Lunch Spot
GOOD: ## Peking Duck — Siji Minfu (四季民福) Wangfujing Branch
GOOD: ## Forbidden City (故宫 Gùgōng) — Tickets, Timing & Navigation
GOOD: ## Lama Temple (雍和宫 Yōnghé Gōng) — Active Buddhist Temple
```

The header should answer: *what is this about, and where/who specifically?*

### 3. Co-located Practical Details

Keep logistics directly under the place they describe — **never** in a separate generic tips section.

```
BAD:
## Tianmen Mountain
A breathtaking peak with a natural arch...

## Practical Tips
- Tianmen Mountain tickets: 288 CNY
- Take cable car route B

GOOD:
## Tianmen Mountain (天门山) — Glass Skywalks & 999 Steps
A breathtaking peak with a natural 131.5m arch...
**Tickets:** 288 CNY. **Recommended route:** Route B (Middle Station → cable car up,
walk down via 99 Bends). **Transit:** Bus from Zhangjiajie city center, 20 min.
Line 2, Tianmen Mountain Station (天门山站).
```

Inline elements to always co-locate:
- Ticket prices (in CNY and approximate USD)
- Opening hours
- Metro/bus lines with Chinese station names
- Booking lead time and daily caps
- Chinese app names for booking (WeChat mini-programs, etc.)

### 4. Dense Prose, Not Verbose

**Strip:**
- "In this article you'll learn..." intros
- SEO filler ("Beijing is a city with a rich history and culture...")
- Affiliate disclaimers and cookie notices
- Repetitive calls-to-action
- Vague qualifiers ("some say," "many visitors feel")

**Preserve:**
- All concrete facts: prices, hours, distances, directions
- Author's specific first-hand recommendations ("I prefer X over Y because...")
- Named venues with Chinese characters
- Warnings and caveats (e.g., "scam taxis near X")
- Seasonal/timing advice

### 5. Frontmatter Block

Every converted file starts with a YAML frontmatter block followed by a title line:

```yaml
---
source: Publication — "Article Title"
author: Author Name
date: Month Year
url: https://original-url.com
credentials: Why this source is credible (e.g., "Resident expat in Xinjiang 10+ years")
original: original-source/filename.md   # only if an original was archived
---

# Article Title — Subtitle With Entity Names
```

### 6. Quick Facts Section

For city-level articles, include a `## Quick Facts` section near the top with:
- Location (province, region)
- How to get there (nearest airport, HSR station)
- Best time to visit
- Key landmarks (3–5 max)
- Approx daily budget range

This gives RAG systems a high-level anchor when the full article is chunked.

### 7. Practical Tips Section

Consolidate scattered logistics into a `## Practical Tips` section at the **end**:
- VPN and connectivity
- Payment methods (WeChat Pay, Alipay, cash requirements)
- Transport cards
- Language tips (key phrases, translation apps)
- Safety notes
- Crowd avoidance strategies

This section is the one exception to the co-location rule — it's for cross-cutting logistics that don't belong to a single place.

---

## File Naming Convention

Pattern: `{author-or-blog-slug}-{city-slug}-{short-descriptor}.md`

```
fabio-nodari-beijing-3-days.md
nyt-36-hours-hong-kong.md
bucketlistly-zhangjiajie-3-day-itinerary.md
lost-with-purpose-guizhou-villages.md
chinahighlights-beijing-hutong-guide.md
```

Rules:
- All lowercase, hyphens only (no underscores or spaces)
- Author/blog slug first so files sort by source
- City slug must match the city's folder name exactly
- Descriptor is 2–4 words max

---

## Archiving Original Sources

If an existing source is in non-context-dense format (narrative prose, day-by-day itinerary, raw scraped HTML), archive it before converting:

```
cities/beijing/
├── nyt-36-hours-beijing.md           ← context-dense version (top level)
└── original-source/
    └── nyt-36-hours-beijing.md       ← original preserved here
```

Reference the original in the frontmatter: `original: original-source/nyt-36-hours-beijing.md`

---

## Master Index Entry Format

After creating a context-dense file, add an entry to `{city}-master-index.md`:

```markdown
- **[filename.md](filename.md)** — "Article Title" by Author (source.com, Date).
  [1–2 sentences describing unique value: what topics, what specificity, what the author's
  perspective adds that others don't.]
```

The description should highlight what's **uniquely useful** about this source — not just list topics, but say what's distinctive (e.g., "Only guide covering the Gubeikou military restriction closure in mid-2025").

---

## Quality Checklist

Before considering a conversion complete:

- [ ] Every H2 header contains a proper name and Chinese characters where applicable
- [ ] Prices, hours, and transit info are co-located with their venue
- [ ] Frontmatter block is complete with source, author, date, and credentials
- [ ] File starts with `## Quick Facts` (for city-level articles)
- [ ] File ends with `## Practical Tips`
- [ ] Filler prose and SEO intros have been stripped
- [ ] Author's first-hand recommendations are preserved
- [ ] Filename follows `{author}-{city}-{descriptor}.md` convention
- [ ] Master index entry added with distinctive description
- [ ] If original was non-context-dense, it's archived in `original-source/`
