---
name: format-into-context-dense
description: Convert a URL into context-dense markdown optimized for RAG (NotebookLM, vector search, etc.). Extracts article content, restructures for chunking, and saves to the appropriate city reference folder.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, WebFetch, WebSearch
argument-hint: <url> [city-slug]
---

# Format Into Context-Dense Markdown

Convert web content from a URL into RAG-optimized markdown. The output is designed for ingestion by NotebookLM, vector databases, or any retrieval-augmented generation system.

> **Formatting standard:** Follow `context-dense-markdown-guide.md` in the project root for the full specification including principles, examples, naming conventions, and the quality checklist.

## Arguments

- `$ARGUMENTS` — The URL to convert, optionally followed by a city slug (e.g., `beijing`, `hong-kong`). If no city slug is provided, infer it from the article content.

**For YouTube URLs**, skip directly to Step 1b — use transcript extraction instead of WebFetch.

## Step 1: Extract Content

### 1a. Web articles (non-YouTube)

Fetch the full text content from the URL.

1. First try `WebFetch` to get the page content.
2. If WebFetch returns insufficient content (dynamic/JS-rendered pages), fall back to:
   ```bash
   curl -sL "<url>" | python3 -c "
   import sys, re
   html = sys.stdin.read()
   # Remove script/style blocks
   html = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.DOTALL)
   # Remove HTML tags
   text = re.sub(r'<[^>]+>', '\n', html)
   # Collapse whitespace
   text = re.sub(r'\n{3,}', '\n\n', text)
   text = re.sub(r'[ \t]+', ' ', text)
   print(text.strip())
   "
   ```
3. If both fail, report the issue and stop.

### 1b. YouTube videos

Extract the transcript using `youtube-transcript-api` (installed):

```bash
python3 -c "
from youtube_transcript_api import YouTubeTranscriptApi
import re, sys

url = '<youtube-url>'
video_id = re.search(r'(?:v=|youtu\.be/)([^&?/]+)', url).group(1)
try:
    transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['en', 'en-US'])
except Exception:
    # Fall back to any available language
    transcript = YouTubeTranscriptApi.get_transcript(video_id)
text = ' '.join(chunk['text'] for chunk in transcript)
print(text)
"
```

Also fetch the video page with `WebFetch` to extract the video title, channel name, upload date, and video description — these are needed for the extended frontmatter.

Apply the **Transcript Sources** rules from `context-dense-markdown-guide.md` throughout Steps 2–3: strip speech filler, camera directions, and video filler; preserve first-person logistics and crowd observations; add `filmed`, `media-type`, and `transcript-quality` fields to frontmatter; add a Recency Note if the video is 2+ years old.

## Step 2: Identify Metadata

From the extracted content, identify:
- **Title** — The article's headline
- **Author** — Who wrote it (person or blog name)
- **Source** — Domain name and URL
- **Publication date** — When published (and updated, if noted)
- **Author credentials** — Why this source is credible (lived in China, photographer, etc.)
- **City/region** — Which city or region the article covers

## Step 3: Structure as RAG-Optimized Markdown

Apply these principles to maximize retrieval quality:

### 3a. Flat Hierarchy

- Use H2 (`##`) as the primary section level. Avoid H3/H4 nesting deeper than one level.
- Each H2 section should be **self-contained** — a RAG chunk at any section boundary should make sense on its own without needing surrounding sections.

### 3b. Entity-Rich Headers

- Include the **proper name** and **Chinese characters** (if applicable) in every header.
- Bad: `### Day 1 Morning`
- Good: `### Forbidden City (故宫)`

### 3c. Co-located Practical Details

- Keep logistics (how to get there, hours, cost, subway lines) directly under the place they describe — never in a separate "logistics" section.
- Include subway directions inline: `Line 5 to Tiantan Dongmen Station (天坛东门站), Exit A`
- Include Chinese names for locations, apps, and mini-programs inline.

### 3d. Dense, Not Verbose

- Strip filler, SEO padding, "in this article you'll learn" intros, and affiliate disclaimers.
- Preserve **all** practical facts: prices, hours, directions, booking tips, Chinese app names.
- Preserve the author's **first-hand opinions and recommendations** — these are high-value signals.
- Convert listicle formatting into flowing prose where it improves density.

### 3e. Frontmatter Block

Start the file with a clear attribution block:

```markdown
# [Article Title]

**Source:** [Author name] ([domain]), [credentials]. Published [date]. [Update info if any]. [Credibility note].
```

### 3f. Quick Facts Section

If the article covers a city, include a `## Quick Facts` section near the top with location, history, population notes, and key landmarks. This gives RAG systems a high-level anchor.

### 3g. Practical Tips Section

Consolidate scattered tips into a `## Practical Tips` section at the end — VPN, payments, transport, food recommendations, etc.

## Step 4: Determine Save Location

Check if a city reference folder exists:

1. Look for `cities/{city-slug}/` directory.
2. If it exists, save there.
3. If it doesn't exist, create the folder structure:
   ```
   cities/{city-slug}/
   ├── {city-slug}-master-index.md
   └── {filename}.md
   ```

### Filename Convention

Use the pattern: `{author-or-blog-slug}-{city}-{short-descriptor}.md`

Examples:
- `fabio-nodari-beijing-3-days.md`
- `nyt-36-hours-hong-kong.md`
- `bucketlistly-zhangjiajie-3-day-itinerary.md`
- `lost-with-purpose-guizhou-villages.md`

## Step 5: Update Master Index

After saving the markdown file, update (or create) the city's master index at `cities/{city-slug}/{city-slug}-master-index.md`.

Add an entry in the `## Articles & Guides` section with this format:

```markdown
- **[filename.md](filename.md)** — "[Article title]" by [Author] ([Source], [Date]). [1-2 sentence description of what the article covers, highlighting unique value].
```

## Step 6: Report

After saving, report:
- File path saved
- Number of sections created
- Key topics covered
- Any content that couldn't be extracted or was ambiguous

Do NOT automatically commit. The user will ask to commit when ready.
