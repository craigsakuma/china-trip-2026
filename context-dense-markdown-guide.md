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

## Transcript Sources (YouTube & Video)

When converting a YouTube video or podcast transcript, apply these rules on top of the standard formatting principles above. Raw transcripts are stream-of-consciousness speech — converting them requires heavier restructuring than blog articles, but the first-hand observations they contain are high-value signals that don't appear in written guides.

### Extended Frontmatter for Video Sources

Add two additional fields:

```yaml
---
source: Channel Name — "Video Title"
author: Channel/Creator Name
date: Month Year (published)
filmed: Month Year (when footage was recorded, if stated or inferable)
url: https://youtube.com/watch?v=VIDEO_ID
credentials: Why this creator is credible (visited 10+ times, lives in China, food specialist, etc.)
media-type: video
transcript-quality: auto-generated | manual captions | transcribed
---
```

`filmed` is separate from `date` because prices, hours, and crowd conditions are tied to when the footage was recorded, not when the video was uploaded. A video published in 2025 may have been filmed in 2023.

### What to Strip

Remove all of the following from raw transcripts:

**Video filler:**
- "Today we're going to...", "In this video I'll show you...", "Welcome back to the channel"
- "Don't forget to subscribe / hit that like button / leave a comment"
- Sponsor reads, merchandise plugs, Patreon callouts
- "Link in the description", "Check out my previous video on..."

**Spoken hesitations and filler words:**
- um, uh, like (as filler), you know, I mean, right, okay so, basically, literally
- "So anyway...", "Moving on...", "Alright so..."

**Camera directions — extract the fact, drop the reference:**
- "As you can see here..." → state what is being seen as a direct fact
- "Let me show you...", "Look at this...", "Over here you can see..."
- "I'm pointing the camera at..." → just describe what it shows

**Emotional reactions without informational content:**
- "Oh wow!", "This is incredible!", "I can't believe it!", "Amazing!"
- Keep reactions only when tied to a specific, attributable observation ("I was shocked — we paid only 15 CNY for three dishes")

### What to Keep

Never strip these from travel transcripts — they are the primary value of video sources:

**First-person logistics (preserve verbatim as data points):**
- "I paid 80 yuan", "they charged us an extra 20 for the cable car"
- "we waited about 40 minutes in line", "there was no wait when we arrived at 7:30am"
- "the taxi driver tried to charge us 200 — the meter fare was 45"

**Crowd and timing observations:**
- "we arrived at 8am and it was already packed with tour groups"
- "Tuesday afternoon was nearly empty compared to the weekend"
- "the place clears out completely after 4pm"

**Spoken warnings and scam alerts:**
- "watch out for", "be careful with", "we almost got scammed at"
- "the fake monks near X", "don't take taxis from outside Y station"

**Practical ordering and navigation advice:**
- "ask for the English menu — they have one", "you need to book through the WeChat mini-program"
- "go left when you exit the gate, not right — right takes you to the tourist trap area"

**Date-anchored facts (always preserve the anchor):**
- "as of October 2024", "they just renovated this section", "it's under construction until next year"

**Spoken disagreements with common advice:**
- "everyone says X is the best but we actually preferred Y" — valuable as conflict signal for NLM

### Converting Speech to Dense Prose

| Raw transcript | Context-dense version |
|---|---|
| "So we walked in and, um, you know, the line was actually not that bad, I think we waited maybe like 20 minutes?" | Waited approximately 20 minutes to enter. |
| "The noodles here — oh my god — they are so good, hand-pulled right in front of you, and they cost, let me think, I think it was like 28 yuan?" | Hand-pulled noodles made to order. **Price:** 28 CNY. |
| "As you can see there's this really beautiful ancient-looking gate at the entrance" | Traditional gate at the entrance. |
| "Everyone told us to go to X but honestly we found Y was way better and like half the price" | Creator recommends Y over the more commonly cited X; found Y comparable quality at roughly half the price. |
| "I'm not sure exactly but I think you need to book like a week in advance or something" | Booking lead time unclear — creator suggests approximately one week. Verify independently. |

### Recency Note Callout

When a transcript contains time-sensitive logistics, add a **RECENCY NOTE** immediately after the frontmatter header if the video is 2+ years old, or inline within the relevant section if only specific facts are dated:

```markdown
> **RECENCY NOTE:** Filmed [month/year]. Prices, hours, booking requirements, and crowd
> conditions may have changed. Treat logistics as directional, not current ground truth.
```

### Reconstructing Entity Names

Speakers often say place names phonetically in English only. Add Chinese characters and pinyin where you can identify the place confidently:

- "the Temple of Heaven" → Temple of Heaven (天坛 Tiāntán)
- "Qian Men street" → Qianmen (前门)
- Speaker says something phonetically unclear → use `[name unclear from audio]` — do not guess

Do not fabricate Chinese characters. If the English name is sufficient for identification, use English only.

**Auto-generated captions and Chinese names:** YouTube auto-captions frequently mis-transcribe Chinese place names as phonetically similar English words or gibberish. If a name looks wrong (e.g., "the young her gong temple"), cross-reference with the city profile or master index to identify the correct place (Yonghegong / Lama Temple 雍和宫 in this case).

### Video Description as Supplemental Source

The video description and pinned comments often contain structured information more reliable than the spoken transcript (addresses, hours, booking links, prices). If the description contains practical details:
- Incorporate them into the relevant H2 section alongside the transcript content
- Note the source inline: "**Address** (from video description): ..."
- Description content supersedes vague spoken estimates when they conflict

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

**Additional checks for transcript sources (YouTube/video):**

- [ ] Frontmatter includes `filmed`, `media-type: video`, and `transcript-quality`
- [ ] Recency note added if video is 2+ years old or logistics are time-sensitive
- [ ] All camera directions stripped; factual content extracted as direct statements
- [ ] Video filler, sponsor reads, and subscription CTAs removed
- [ ] First-person pricing, wait times, and crowd observations preserved as data points
- [ ] Mis-transcribed Chinese place names identified and corrected
- [ ] Video description checked for structured logistics data and incorporated
