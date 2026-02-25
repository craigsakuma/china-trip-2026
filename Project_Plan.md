# China Trip 2026 — Project Plan

Living roadmap for all work across the website, research infrastructure, and tooling.
For website implementation details see [`WEBSITE-PLAN.md`](WEBSITE-PLAN.md).

**Trip:** Craig, Kiran & Hernane · October 10–25, 2026 · 15 days

---

## What's Complete

### Website (china-trip-2026/website)
- Phases 1–7 fully built and running locally
- All 24 city profiles with full data (neighborhoods, activities, restaurants, tips, sources)
- Hero photos for all 24 cities (Wikimedia Commons)
- Interactive China map with hover popups
- Collaborative features: star ratings, favorites, notes — all three users
- Feedback page: shows cities with ratings/notes, sorted by group enthusiasm
- Database: Neon Postgres + Drizzle ORM, cookie-based user picker

### Research Infrastructure
- 131 context-dense markdown articles across 20 city folders
- 20 city master indexes
- `context-dense-markdown-guide.md` — RAG formatting standard (includes transcript rules)
- `notebooklm-best-practices.md` — guide for building and querying city notebooks
- `/format-into-context-dense` skill — converts any URL (including YouTube) to context-dense markdown
- Beijing NotebookLM notebook built and validated (`beijing-travel-resources`)
- Instructions Note pattern established for source attribution in NLM

### Content Sources Catalogued
- 12 YouTube channels documented with video listings and URLs (`youtube-channels.md`)
- Reading list of 10 travel blogs with 40+ articles (`china-travel-blog-reading-list.md`)
- NYT 36 Hours Beijing converted to context-dense format

---

## Active Work

### Phase 8: Images & Polish (website)
Remaining items from WEBSITE-PLAN.md:
- [ ] Neighborhood images (1 per neighborhood across 24 cities)
- [ ] Activity images (1 per activity)
- [ ] Restaurant images (optional)
- [ ] Card sort by rating on homepage
- [ ] Responsive refinements (mobile bottom bar)
- [ ] Loading skeleton states
- [ ] Vercel deployment

### NotebookLM City Notebooks
- [ ] Build notebooks for remaining high-priority cities (Chengdu, Guilin, Yunnan circuit, Xi'an, Hong Kong)
- [ ] Run conflict audit query on each new notebook
- [ ] Add Instructions Note to every notebook

### YouTube Transcript Conversions
- [ ] Convert high-priority YouTube videos to context-dense markdown using `/format-into-context-dense`
- `youtube-transcript-api` installed and ready
- Priority: Food Ranger Beijing, Mark Wiens Kunming/Yunnan series, Two Mad Explorers arrival video

---

## Planned Features

### Brave Search MCP Tool
Add a Brave Search MCP server to Claude Code so all research sessions have direct web search access — faster YouTube URL lookups, real-time logistics verification, and current travel advisories without needing separate search agents.

**Setup:**
1. Get API key at api.search.brave.com (free tier: 2,000 queries/month)
2. Add to `~/.claude/mcp.json`:
   ```json
   {
     "mcpServers": {
       "brave-search": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-brave-search"],
         "env": {
           "BRAVE_API_KEY": "your-key-here"
         }
       }
     }
   }
   ```
**Why:** Resolves the remaining ~30 unconfirmed YouTube URLs in `youtube-channels.md` and enables real-time research for trip logistics closer to departure.

---

## Backlog / Ideas

*Not yet prioritized — capture here for future sessions.*

- **Itinerary builder** — drag-and-drop day planner on the website (Phase 9?)
- **Budget tracker** — estimate costs per city based on profile data (flights, hotels, activities)
- **Packing list** — generated from city profiles (weather, activities, cultural norms)
- **Offline export** — PDF or printable itinerary to carry without phone/data
- **City comparison view** — side-by-side two cities for when we're deciding between them
- **"Should we go?" vote** — quick yes/no/maybe per city, tallied across all three travelers
- **NotebookLM notebooks** for all 24 cities (currently only Beijing complete)
- **Transcript library** — all YouTube videos converted to context-dense markdown, added to city NLM notebooks
