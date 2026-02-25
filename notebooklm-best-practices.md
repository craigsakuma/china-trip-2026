# NotebookLM Best Practices — City-Level Travel Research

Guide for building and querying city research notebooks for the China 2026 trip.
Derived from experience building the Beijing notebook.

---

## 1. Source Preparation

### Use Context-Dense Markdown Format
Raw blog articles (narrative prose, day-by-day itineraries, listicles) perform poorly as NLM sources. They bury actionable information in filler text that dilutes RAG retrieval quality.

**Full formatting specification:** See [`context-dense-markdown-guide.md`](context-dense-markdown-guide.md) for the complete standard including formatting principles, naming conventions, the quality checklist, and worked examples. The guide is the authoritative reference — use it when converting any source.

Key principles at a glance:
- H2 sections organized by topic/venue (not by day or time), each self-contained
- Entity-rich headers with proper names and Chinese characters: `## Peking Duck — Siji Minfu (四季民福) Wangfujing`
- Practical details (prices, hours, transit, booking lead times) co-located with the venue they describe
- Strip SEO filler, affiliate disclaimers, and generic scene-setting prose
- Frontmatter block with source, author, date, URL, and credentials
- End with `## Quick Facts` (top) and `## Practical Tips` (bottom)

**Original source archiving:**
If an article exists in non-context-dense format, archive it in `original-source/` and create a converted version at the top level. See the guide for the full archiving pattern.

---

## 2. Source Diversity Strategy

A strong city notebook needs **multiple perspectives** — not just more articles from the same type of author. Aim for:

| Source Type | What It Adds |
|---|---|
| City profile (`{city}.md`) | Curated overview, already synthesized |
| Photographer/visual traveler (Fabio Nodari) | Light, composition, timing, visual landmarks |
| Budget backpacker (Lost With Purpose, Grateful Gnomads) | Cost reality, hostel advice, DIY logistics |
| Food specialist (Lost Plate, I'm Still Hungry) | Restaurant names, prices, what to order |
| Logistics-focused (China Highlights, China Discovery) | Transport, booking, practical rules |
| Local/expat resident (Far West China, Chengdu Expat) | Ground truth, current conditions, cultural nuance |
| Mainstream media (NYT 36 Hours) | High-editorial quality, classic recommendations |
| Hiking/adventure (Nomadasaurus, Jenny Far Away) | Trail specifics, gear, difficulty ratings |

**Minimum for a useful notebook:** 6–8 sources covering at least 4 different source types.

**Watch for monoculture:** Five food blogs will produce confident but narrow answers. A logistics guide + backpacker guide + food specialist covers more dimensions.

---

## 3. The Instructions Note (Always Add This)

Every notebook must include a note titled **"Instructions for Answering Questions"** as the first action after creating the notebook. This note becomes a source NLM factors into all responses.

### Standard Template

```markdown
## How to Answer Questions from This Notebook

These resources represent the opinions and research of multiple independent travel
writers, photographers, and guides — each with their own experience level, travel
style, and time of visit. Diverging opinions are expected and healthy.

**When sources agree:** Summarize the consensus clearly.

**When sources conflict:** Do NOT resolve the disagreement or pick a winner. Instead:
- Present both (or all) points of view
- Attribute each perspective to its specific source by name
  (e.g., "Fabio Nodari recommends...", "The NYT 36 Hours piece argues...",
  "Lost in China cautions that...")
- Let the reader weigh the sources and draw their own conclusion
- Note any relevant context that might explain the disagreement
  (e.g., different travel styles, year written, type of traveler)

**Tone:** These resources are being used to plan a personal trip to China in
October 2026 by three friends — Craig, Kiran, and Hernane. Answers should be
practical, specific, and honest about uncertainty. Do not over-hedge or add
excessive caveats where sources are clear.

**Source attribution format:** Always name the source when citing a specific claim —
not just "one source says" but "the China Highlights hutong guide says" or
"Nomadasaurus notes." This helps readers evaluate credibility based on the
author's background and recency.
```

### Why This Matters
Without these instructions, NLM defaults to resolving conflicts by picking the majority view or the most confident-sounding source. For travel decisions — especially subjective ones like which neighborhood feels more authentic, or whether a tourist area has been over-commercialized — the right answer is often "it depends on your style, and here's what each source says."

---

## 4. Conflict Handling Philosophy

Diverging opinions between sources are a feature, not a problem. Common conflict patterns:

**Recency conflicts:** A 2015 NYT article and a 2026 blog post may disagree because a neighborhood has changed. Newer usually wins for logistics; older sources can still be valid for atmosphere and landmark descriptions.

**Style conflicts:** A budget backpacker and a fine dining specialist will legitimately disagree on where to eat. Both are correct for their audience.

**Local vs. tourist conflicts:** A resident expat and a first-time visitor will assess "how crowded is it really" very differently. The expat's view is usually more calibrated.

**Safety-critical conflicts:** When sources disagree on logistics with high stakes — Forbidden City booking lead time (3–5 days vs. 7+ days), trail closure status (Gubeikou military restriction), visa requirements — **surface the conflict explicitly** and flag it as requiring independent verification before the trip.

---

## 5. Query Strategies

### Questions That Work Well
- **Comparative:** "What are the tradeoffs between staying in Dongcheng vs. Chaoyang?"
- **Decision-focused:** "Which Great Wall section should we visit given we're serious hikers?"
- **Conflict surfacing:** "Are there any conflicting opinions between sources about X?"
- **Practical synthesis:** "What do sources say about booking Forbidden City tickets in October?"
- **Hidden gems:** "What do sources recommend that most tourists miss?"

### Questions That Work Poorly
- **Too broad:** "What should we do in Beijing?" — produces a generic listicle
- **Opinion fishing:** "What's the best restaurant?" — NLM will pick one; better to ask "How do sources compare Siji Minfu, Duck de Chine, and Li Qun for Peking duck?"
- **Verification requests:** "Is X still open in 2026?" — NLM can only report what sources say, not current ground truth

### Conflict Audit Query (Run on Every New Notebook)
After building a notebook, always run this as the first query:

> "Are there any conflicting opinions, contradictions, or disagreements between the different sources? Please identify all cases where sources give different advice about the same topic, attribute each view to its source, and note any safety-critical discrepancies."

This surfaces important caveats before you start using the notebook for planning.

---

## 6. Notebook Structure & Naming

### Naming Convention
`{city-slug}-travel-resources`

Examples: `beijing-travel-resources`, `zhangjiajie-travel-resources`, `yunnan-travel-resources`

### What to Include (Priority Order)
1. City profile (`{city}.md`) — always first; provides the synthesized overview
2. Logistics guide (transport, booking, practical rules)
3. Food/restaurant guide
4. Hiking/activities guide (if relevant)
5. Cultural/neighborhood deep-dive
6. Budget/backpacker perspective
7. High-quality editorial source (NYT, Condé Nast, etc.) — convert to context-dense first

### What to Exclude
- Sources older than ~5 years unless they're classics or for historical context (flag if including)
- Duplicate perspectives (two nearly identical China Highlights articles add little)
- Accommodation booking aggregators (TripAdvisor, Booking.com) — these are review aggregates, not curated guides

---

## 7. Maintenance

- **Rebuild when sources change:** If a context-dense file is updated (new info, corrections), re-upload to the notebook as a new source and delete the old one
- **Flag dated sources:** Add a note to the notebook when a source is 3+ years old: "Note: [source] was written in [year]. Logistics details (prices, hours, transport) may have changed."
- **Don't add too many sources:** 8–12 sources is the sweet spot. More sources don't always improve answers — they can dilute retrieval and produce muddier responses. Prioritize quality and diversity over volume.

---

## 8. Lessons Learned from Beijing Notebook

- **Nanluoguxiang conflict** surfaced immediately — multiple sources have directly contradictory takes. Good example of why attributing sources matters: the right answer depends entirely on what kind of experience you're after.
- **Gubeikou closure** was only mentioned in one source (the city profile). Without the conflict audit query, this safety-critical fact would have been easy to miss.
- **Forbidden City booking window** discrepancy (3–5 days vs. 7+ days) is the kind of conflict that could ruin a trip. Always verify high-stakes logistics independently.
- **The Instructions Note made a measurable difference** — responses before adding it resolved conflicts by picking one view; responses after attributed sources and presented both sides.
- **Context-dense format enables better retrieval** — the NYT 36 Hours article (narrative format) was the weakest source for RAG until converted; post-conversion it surfaced cleanly in responses.
