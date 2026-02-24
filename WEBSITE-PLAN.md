# Website Build Plan — China Trip 2026

> Living document. Check off tasks as completed. Last updated: 2026-02-24.

---

## Overview

A collaborative trip-planning website where Craig, Kiran, and Hernane can browse city profiles, rate destinations, favorite activities/restaurants/neighborhoods, and leave notes for each other.

**MVP (Phases 1–5):** Static browsable site with homepage, map, and city profile pages. Deployed to Vercel.
**Full Build (Phases 6–8):** Ratings, favorites, reviews, real-time collaboration, curated images.

---

## Tech Stack

| Layer | Tool | Why |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Vercel-native, file-based routing |
| **UI Components** | shadcn/ui + Tailwind CSS | Pre-built, copy-to-repo components — no runtime dependency |
| **Database** | Neon Postgres (via Vercel Marketplace) | Free tier, serverless, replaces deprecated @vercel/postgres |
| **ORM** | Drizzle ORM | Lightweight, type-safe, great Neon support |
| **Map** | react-simple-maps | Lightweight SVG map, ~40 lines of code |
| **Auth** | Cookie-based name picker | 3 users, no passwords, no auth library |
| **Hosting** | Vercel (free tier) | Push-to-deploy from GitHub |
| **Package Manager** | npm | Standard, widely supported (with legacy-peer-deps for react-simple-maps) |

### Key Dependencies

```
next, react, react-dom          — framework
tailwindcss, @tailwindcss/typography — styling
shadcn/ui (copied components)   — UI
react-simple-maps               — China map
drizzle-orm, drizzle-kit        — ORM + migrations
@neondatabase/serverless         — Postgres driver
```

### shadcn Components Needed

```bash
npx shadcn@latest add card badge button tooltip collapsible accordion tabs separator avatar toggle textarea dialog scroll-area
```

---

## File Structure

```
china-trip-2026/
├── README.md                        # Trip overview (existing)
├── candidate-cities.md              # City research (existing)
├── traveler-profile.md              # Traveler profile (existing)
├── youtube-channels.md              # YouTube research (existing)
├── cities/
│   └── beijing.md                   # City profile markdown (existing)
├── WEBSITE-PLAN.md                  # This file
│
└── website/                         # ← Next.js project root
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx           # Root layout (fonts, metadata, user context)
    │   │   ├── page.tsx             # Homepage
    │   │   ├── city/
    │   │   │   └── [slug]/
    │   │   │       └── page.tsx     # City profile page
    │   │   └── api/
    │   │       ├── reviews/
    │   │       │   └── route.ts     # CRUD for reviews/ratings
    │   │       └── favorites/
    │   │           └── route.ts     # CRUD for favorites
    │   │
    │   ├── components/
    │   │   ├── ui/                  # shadcn components (auto-generated)
    │   │   ├── header.tsx           # Site header with user picker
    │   │   ├── china-map.tsx        # Interactive China map
    │   │   ├── city-card.tsx        # Homepage city card
    │   │   ├── city-hero.tsx        # City page hero image + title
    │   │   ├── weather-table.tsx    # October weather cards
    │   │   ├── item-card.tsx        # Expandable card (neighborhoods, activities, restaurants)
    │   │   ├── restaurant-filters.tsx # Category filter pills
    │   │   ├── star-rating.tsx      # 0-3 star rating component
    │   │   ├── favorite-button.tsx  # Heart toggle
    │   │   ├── review-panel.tsx     # Collapsible review/notes panel
    │   │   ├── user-picker.tsx      # Name selection (Craig/Kiran/Hernane)
    │   │   └── group-consensus.tsx  # "2+ people favorited" highlights
    │   │
    │   ├── data/
    │   │   ├── cities.ts            # All 24 cities — metadata + full content
    │   │   └── regional-circuits.ts # Circuit groupings for homepage
    │   │
    │   ├── lib/
    │   │   ├── db.ts                # Drizzle + Neon connection
    │   │   ├── schema.ts            # Database schema (users, reviews, favorites)
    │   │   └── utils.ts             # Shared utilities
    │   │
    │   └── types/
    │       └── index.ts             # TypeScript interfaces
    │
    ├── drizzle.config.ts            # Drizzle migration config
    ├── public/
    │   └── images/                  # Curated city/activity photos
    ├── package.json
    ├── tailwind.config.ts
    ├── next.config.ts
    └── .env.local                   # DATABASE_URL (not committed)
```

---

## Phase 1: Project Scaffolding & Deployment Pipeline

> Get a skeleton deployed to Vercel so we have a working CI/CD loop from day one.

- [x] **Create GitHub repository** ✅
  - `gh repo create china-trip-2026 --public --source=. --remote=origin`
  - Pushed to https://github.com/craigsakuma/china-trip-2026

- [x] **Scaffold Next.js project** ✅
  - Next.js 16.1.6 with TypeScript, Tailwind CSS v4, ESLint, App Router
  - `.npmrc` with `legacy-peer-deps=true` for react-simple-maps React 19 compat

- [x] **Initialize shadcn/ui** ✅
  - New York style, Zinc base color, CSS variables
  - Components: card, badge, button, tooltip, collapsible, accordion, tabs, separator, avatar, scroll-area

- [x] **Install additional dependencies** ✅
  - react-simple-maps, lucide-react
  - Custom type declarations for react-simple-maps (`src/types/react-simple-maps.d.ts`)

- [ ] **Deploy to Vercel**
  - Push to GitHub ✅
  - Import project in Vercel dashboard (vercel.com → New Project → Import from GitHub)
  - Set root directory to `website/` in Vercel project settings
  - Verify auto-deploy on push

- [ ] **Verify deployment pipeline**
  - Make a small change, push, confirm Vercel rebuilds automatically
  - Share preview URL with Kiran and Hernane

---

## Phase 2: Data Layer

> Define TypeScript types and create the static city data that powers all pages.

- [x] **Define TypeScript interfaces** (`src/types/index.ts`) ✅
  - City, Neighborhood, Activity, Restaurant, WeatherRow, PracticalTips, CityProfile

- [x] **Create cities metadata** (`src/data/cities.ts`) ✅
  - 24 cities with coordinates, descriptions, bestFor tags, tiers, hue values
  - 12 featured cities on homepage grid

- [x] **Create regional circuits data** (`src/data/regional-circuits.ts`) ✅
  - 8 circuits with city chains, total days, color codes

- [x] **Port Beijing content to structured data** ✅
  - `src/data/profiles/beijing.ts` — 3 exec summary paragraphs, 7 famousFor, 5 whyItFits
  - 3 weather rows, 4 neighborhoods, 17 activities, 14 restaurants, 4 practical tip categories, 28 sources
  - All Top Pick flags preserved, Chinese names included

- [x] **Create stub profiles for all remaining cities** ✅
  - `src/data/profiles/stubs.ts` — 22 stub profiles with exec summaries and weather data
  - Reusable weather templates by region (Yunnan, Sichuan, Hunan, Shanxi, Eastern, Fujian, Tibet)
  - `src/data/profiles/index.ts` — profile registry with getProfile() fallback to stubs

---

## Phase 3: Homepage

> Build the homepage: header, map, city cards, more destinations, regional circuits, footer.

### Header
- [x] **Header component** (`src/components/header.tsx`) ✅
  - Title, subtitle, traveler names, stats line

### China Map
- [x] **Map component** (`src/components/china-map.tsx` + `china-map-wrapper.tsx`) ✅
  - react-simple-maps with Mercator projection centered on China
  - Featured cities: red dots with always-visible labels; non-featured: gray dots, labels on hover
  - Client wrapper component for Next.js 16 SSR compatibility

### City Cards
- [x] **City card component** (`src/components/city-card.tsx`) ✅
  - HSL gradient placeholder, tier badge, description, bestFor tags, link to city page

- [x] **Featured destinations grid** on homepage ✅
  - 3 columns on desktop, 2 on tablet, 1 on mobile

### More Destinations
- [x] **"More Destinations" section** ✅
  - Flowing pill/chip links for 12 non-featured cities

### Regional Circuits
- [x] **Regional circuits section** ✅
  - Color-coded cards with city chains and total days

### Footer
- [x] **Footer** ✅

### Interactions
- [ ] **Map ↔ Card hover sync** (deferred to Phase 8)
  - Hovering a city card highlights the corresponding map dot
  - Hovering a map dot highlights the corresponding card

---

## Phase 4: City Profile Page Template

> Build the `/city/[slug]` page template. Design once, reuse for all 24 cities.

### Page Layout
- [x] **Dynamic route setup** (`src/app/city/[slug]/page.tsx`) ✅
  - `generateStaticParams()` builds all 24 city pages at build time
  - Next.js 16 Promise params pattern
  - Stub page ("Coming soon") when no full profile exists
  - Full profile page when data available

### Hero Section
- [x] **City hero** (inline in page.tsx) ✅
  - HSL gradient with city name, region, suggested days, famousFor tags as pills

### Executive Summary
- [x] **Summary section** ✅
  - Multi-paragraph overview + "Why it fits us" highlighted callout

### Weather Table
- [x] **Weather component** (`src/components/weather-table.tsx`) ✅
  - Three side-by-side cards with temps, rain days, AQI, conditions
  - "What to pack" note below

### Content Sections (Neighborhoods, Activities, Restaurants)
- [x] **Expandable item card** (`src/components/item-card.tsx`) ✅
  - Shared component for all three types with type-safe narrowing
  - Collapsed: title, key stat, Top Pick badge, chevron
  - Expanded: full description, type-specific fields (tips, location, whatToOrder, etc.)
  - amber-400 left border for Top Pick items

- [x] **Neighborhoods section** ✅
- [x] **Activities section** ✅
- [x] **Restaurants section** ✅
  - Restaurant category filter pills built (`src/components/restaurant-filters.tsx`) — not yet wired into city page

### Practical Tips
- [x] **Tips section** ✅
  - Organized by sub-category with bullet points

### Sources
- [x] **Sources/footnotes section** ✅
  - Collapsible `<details>` with numbered source list

---

## Phase 5: Content Pipeline

> Port existing markdown content into structured data. Create new city profiles.

### All 24 City Profiles — Complete ✅
- [x] Beijing — 4 neighborhoods, 17 activities, 24 restaurants, 28 sources ✅
- [x] Hong Kong — 4 neighborhoods, 11 activities, 15 restaurants, 50 sources ✅
- [x] All 22 remaining cities — full profiles with neighborhoods, activities, restaurants, practical tips, sources ✅
- [x] Hero photos for all 24 cities from Wikimedia Commons ✅
- [x] Removed stubs.ts, all profiles use direct imports ✅
- [x] Removed "coming soon" stub page — all cities render full profiles ✅

---

## Phase 6: Database & User System

> Add Neon Postgres for persisting ratings, favorites, and reviews. Add cookie-based user identification.

### Database Setup
- [ ] **Neon Postgres via Vercel Marketplace**
  - Add Neon integration from Vercel dashboard (free tier)
  - Vercel auto-injects `DATABASE_URL` into environment
  - Pull env vars locally: `vercel env pull .env.local`

- [ ] **Install database dependencies**
  - `pnpm add drizzle-orm @neondatabase/serverless`
  - `pnpm add -D drizzle-kit`

- [ ] **Database connection** (`src/lib/db.ts`)
  - Drizzle + Neon serverless driver
  - Connection via `DATABASE_URL` environment variable

- [ ] **Schema** (`src/lib/schema.ts`)
  ```
  users (3 rows — seeded once)
  ├── id: text (primary key: "craig", "kiran", "hernane")
  ├── display_name: text ("Craig", "Kiran", "Hernane")
  └── color: text (hex color for avatar/UI accents)

  reviews (1 per user per city)
  ├── id: serial (primary key)
  ├── user_id: text → users.id
  ├── city_slug: text
  ├── stars: integer (0-3, nullable)
  ├── notes: text (markdown bullet points)
  ├── created_at: timestamp
  └── updated_at: timestamp

  favorites (1 per user per item)
  ├── id: serial (primary key)
  ├── user_id: text → users.id
  ├── city_slug: text
  ├── item_slug: text
  ├── section: text ("neighborhood" | "activity" | "restaurant")
  └── created_at: timestamp
  ```

- [ ] **Run initial migration**
  - `pnpm drizzle-kit generate`
  - `pnpm drizzle-kit migrate`
  - Seed the 3 user rows

### API Routes
- [ ] **Reviews API** (`src/app/api/reviews/route.ts`)
  - `GET /api/reviews?city=beijing` — returns all 3 users' reviews for a city
  - `POST /api/reviews` — upsert a review (stars and/or notes)

- [ ] **Favorites API** (`src/app/api/favorites/route.ts`)
  - `GET /api/favorites?city=beijing` — returns all 3 users' favorites for a city
  - `POST /api/favorites` — toggle a favorite on/off
  - `GET /api/favorites?user=craig` — returns all of a user's favorites across all cities (for homepage card ratings)

### User Identification
- [ ] **User picker component** (`src/components/user-picker.tsx`)
  - Three buttons: Craig, Kiran, Hernane (each with unique color)
  - Shown on first visit (no cookie set)
  - Selection stored in cookie (`china-trip-user`)
  - Small avatar in header showing current user, click to switch

- [ ] **User context provider**
  - React context providing current user ID throughout the app
  - Read from cookie on page load
  - Used by star-rating, favorite-button, and review-panel components

---

## Phase 7: Interactive Features

> Make the site collaborative: ratings, favorites, reviews visible across all 3 users.

### Star Ratings
- [ ] **Star rating component** (`src/components/star-rating.tsx`)
  - 0-3 stars, click to rate (your own), display-only for others
  - Shows on: homepage city cards (all 3 users) and city page hero (all 3 users)
  - POST to `/api/reviews` on change

### Favorites
- [ ] **Favorite button component** (`src/components/favorite-button.tsx`)
  - Heart icon toggle (filled = favorited, outline = not)
  - Each user's heart is their unique color (Craig = blue, Kiran = green, Hernane = orange)
  - Shows on every item card (neighborhoods, activities, restaurants)
  - POST to `/api/favorites` on toggle

- [ ] **Favorites float to top**
  - Items favorited by the current user sort to top of their section
  - Items favorited by 2+ users get a subtle highlight

- [ ] **Group consensus component** (`src/components/group-consensus.tsx`)
  - Auto-highlights items favorited by 2+ people
  - "Craig & Kiran both favorited this" label
  - Shown at top of each section as a summary row

### Reviews Panel
- [ ] **Review panel component** (`src/components/review-panel.tsx`)
  - Collapsible section at bottom of each city page
  - **Collapsed:** Shows 3 user names, their star ratings, and favorite count
  - **Expanded:** Full notes + favorites table for each user
  - Each user's panel shows:
    - Star rating (editable if current user)
    - Bullet-point notes (editable textarea if current user, read-only for others)
    - Favorites table: auto-populated from hearts, grouped by section

- [ ] **Inline notes editor**
  - Textarea with markdown support (bullets auto-format)
  - Auto-saves on blur or after 2 seconds of no typing
  - POST to `/api/reviews` on save

### Homepage Ratings Integration
- [ ] **City card ratings**
  - Fetch all ratings for featured cities on homepage load
  - Show 3 small avatars + stars below each card
  - Cards sort by: Must Visit tier first, then average star rating, then alphabetical

---

## Phase 8: Images & Polish

> Replace gradient placeholders with curated photos. Final UX polish.

### Image Curation
- [x] **Hero images** — 1 per city (24 total) ✅
  - Sourced from Wikimedia Commons via curation script
  - Stored in `public/photos/[slug]/_hero.jpg` with `_sources.json` attribution
  - Rendered with Next.js `<Image>` component on city pages and homepage cards

- [ ] **Neighborhood images** — 1 per neighborhood
  - Representative street-level or aerial shots

- [ ] **Activity images** — 1 per activity
  - Show the experience (Great Wall trail, temple interior, cooking class, etc.)

- [ ] **Restaurant images** — 1 per restaurant (optional, food shots)
  - Dish photos where available, exterior shots otherwise

### UX Polish
- [x] **Map hover popup** ✅
  - City names hidden by default, shown on hover (larger, bold, white outline)
  - Popup card with hero photo, city name, region, and description on marker hover

- [ ] **Card sort by rating**
  - Homepage: sort featured cities by average group rating
  - Unrated cities appear last

- [ ] **Responsive refinements**
  - Desktop (1024px+): 3-column card grid, full map
  - iPad (768-1023px): 2-column grid, slightly smaller map
  - Mobile (< 768px): single column, map above cards, sticky bottom bar with Rate/Favorites/Notes

- [ ] **Mobile bottom bar** (stretch goal)
  - Sticky bar: `⭐ Rate | ♡ Favorites (4) | 📝 Notes`
  - Quick access on phone screens

- [ ] **Loading states**
  - Skeleton cards while data loads
  - Map placeholder while topojson downloads

- [ ] **Performance**
  - Static generation for all city pages (`generateStaticParams`)
  - Only ratings/favorites/reviews fetched at request time
  - Images optimized via Next.js Image component
  - Lazy load map component

---

## Quick Reference: Commands

```bash
# --- Phase 1: Setup ---
# Create GitHub repo and push
gh repo create china-trip-2026 --public --source=. --remote=origin --push

# Scaffold Next.js project
npx create-next-app@latest website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm

# Initialize shadcn
cd website && pnpm dlx shadcn@latest init

# Add shadcn components
pnpm dlx shadcn@latest add card badge button tooltip collapsible accordion tabs separator avatar toggle textarea dialog scroll-area

# Install map library
pnpm add react-simple-maps

# --- Phase 6: Database ---
# Install DB dependencies
pnpm add drizzle-orm @neondatabase/serverless
pnpm add -D drizzle-kit

# Pull Vercel env vars locally (after adding Neon integration)
vercel env pull .env.local

# Run migrations
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

---

## Suggested Build Order

| Session | Phases | What you get |
|---|---|---|
| **Session 1** | Phase 1 + 2 | Deployed skeleton with data layer |
| **Session 2** | Phase 3 | Working homepage with map + cards |
| **Session 3** | Phase 4 | City profile page template (Beijing renders) |
| **Session 4** | Phase 5 | Hong Kong + stub pages for all cities |
| **Session 5** | Phase 6 + 7 | Ratings, favorites, reviews — fully collaborative |
| **Session 6** | Phase 8 | Curated images, polish, responsive tweaks |

---

## Design Decisions Log

| Decision | Choice | Rationale |
|---|---|---|
| Auth approach | Cookie-based name picker | 3 users, zero complexity, no auth library |
| Database | Neon Postgres (Vercel Marketplace) | Free, serverless, auto-configured on Vercel |
| ORM | Drizzle | Lightweight, type-safe, great DX |
| Map library | react-simple-maps | Lightweight SVG, ~40 lines of code, no API key |
| Static content | TypeScript data objects | Fast (build-time), no CMS dependency, type-safe |
| Dynamic content | API routes + Postgres | Only ratings/favorites/reviews need runtime DB |
| Image placeholder | HSL gradient by city hue | Looks intentional, easy to swap for real photos later |
| Primary target | Desktop / iPad | Trip planning is a lean-back, big-screen activity |
| Featured cities | 12 of 24 | Focused homepage, all 24 still have pages |
