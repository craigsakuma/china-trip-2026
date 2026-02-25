"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, Star } from "lucide-react";
import { cities } from "@/data/cities";
import { getProfile } from "@/data/profiles";
import type { City } from "@/types";

const TIER_RANK: Record<City["tier"], number> = {
  "must-visit": 0,
  "strong-match": 1,
  "worth-considering": 2,
};

const SECTION_LABELS: Record<string, string> = {
  neighborhood: "Where to Stay",
  activity: "Activities",
  restaurant: "Restaurants",
};

// Kiran first, Hernan second, Craig last
const USER_ORDER = ["kiran", "hernan", "craig"];

interface Review {
  userId: string;
  citySlug: string;
  stars: number | null;
  notes: string | null;
  displayName: string;
  color: string;
}

interface Favorite {
  userId: string;
  citySlug: string;
  itemSlug: string;
  section: string;
  displayName: string;
  color: string;
}

interface CityFeedback {
  city: City;
  reviews: Review[];
  favorites: Favorite[];
  totalStars: number;
}

export default function FeedbackList() {
  const [data, setData] = useState<CityFeedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/reviews/all")
      .then((r) => r.json())
      .then(({ reviews, favorites }: { reviews: Review[]; favorites: Favorite[] }) => {
        // Group by city
        const cityMap = new Map<string, { reviews: Review[]; favorites: Favorite[] }>();
        for (const r of reviews) {
          if (!cityMap.has(r.citySlug)) cityMap.set(r.citySlug, { reviews: [], favorites: [] });
          cityMap.get(r.citySlug)!.reviews.push(r);
        }
        for (const f of favorites) {
          if (!cityMap.has(f.citySlug)) cityMap.set(f.citySlug, { reviews: [], favorites: [] });
          cityMap.get(f.citySlug)!.favorites.push(f);
        }

        // Build feedback list — only cities with actual feedback
        const result: CityFeedback[] = [];
        for (const [slug, { reviews: revs, favorites: favs }] of cityMap) {
          const hasStars = revs.some((r) => r.stars !== null && r.stars > 0);
          const hasNotes = revs.some((r) => r.notes);
          const hasFavs = favs.length > 0;
          if (!hasStars && !hasNotes && !hasFavs) continue;

          const city = cities.find((c) => c.slug === slug);
          if (!city) continue;

          const totalStars = revs.reduce((sum, r) => sum + (r.stars ?? 0), 0);
          result.push({ city, reviews: revs, favorites: favs, totalStars });
        }

        // Sort: total stars desc, then tier rank asc, then name
        result.sort((a, b) => {
          if (b.totalStars !== a.totalStars) return b.totalStars - a.totalStars;
          const tierDiff = TIER_RANK[a.city.tier] - TIER_RANK[b.city.tier];
          if (tierDiff !== 0) return tierDiff;
          return a.city.name.localeCompare(b.city.name);
        });

        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center text-muted-foreground">
        Loading feedback...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center text-muted-foreground">
        No feedback yet. Visit a city page to add ratings and notes.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16">
      <div className="space-y-3">
        {data.map((item) => (
          <FeedbackCard
            key={item.city.slug}
            item={item}
            expanded={expandedSlug === item.city.slug}
            onToggle={() =>
              setExpandedSlug(
                expandedSlug === item.city.slug ? null : item.city.slug
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

function FeedbackCard({
  item,
  expanded,
  onToggle,
}: {
  item: CityFeedback;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { city, reviews, favorites, totalStars } = item;

  // Sorted reviews: Kiran, Hernan, Craig
  const sortedReviews = [...reviews].sort(
    (a, b) => USER_ORDER.indexOf(a.userId) - USER_ORDER.indexOf(b.userId)
  );

  // Resolve item names from profile
  const profile = getProfile(city.slug);
  const itemNames: Record<string, string> = {};
  if (profile) {
    for (const n of profile.neighborhoods) itemNames[`neighborhood:${n.slug}`] = n.name;
    for (const a of profile.activities) itemNames[`activity:${a.slug}`] = a.name;
    for (const r of profile.restaurants) itemNames[`restaurant:${r.slug}`] = r.name;
  }

  // Group favorites by section, sorted by number of users desc
  type FavGroup = { section: string; itemSlug: string; name: string; users: { color: string }[] };
  const favMap = new Map<string, FavGroup>();
  for (const f of favorites) {
    const key = `${f.section}:${f.itemSlug}`;
    if (!favMap.has(key)) {
      favMap.set(key, {
        section: f.section,
        itemSlug: f.itemSlug,
        name: itemNames[key] ?? f.itemSlug,
        users: [],
      });
    }
    favMap.get(key)!.users.push({ color: f.color });
  }
  const favGroups = [...favMap.values()].sort(
    (a, b) => b.users.length - a.users.length || a.name.localeCompare(b.name)
  );
  const favsBySection: Record<string, FavGroup[]> = {};
  for (const g of favGroups) {
    if (!favsBySection[g.section]) favsBySection[g.section] = [];
    favsBySection[g.section].push(g);
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      {/* Collapsed row */}
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-3 text-left transition-colors hover:bg-muted/30"
      >
        {/* Hero thumbnail */}
        <div
          className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md"
          style={{
            background: `linear-gradient(135deg, hsl(${city.hue}, 45%, 35%), hsl(${city.hue + 30}, 40%, 55%))`,
          }}
        >
          <Image
            src={`/photos/${city.slug}/_hero.jpg`}
            alt={city.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{city.name}</h3>
            <span className="text-xs text-muted-foreground">{city.region}</span>
          </div>
          <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
            {city.description}
          </p>
        </div>

        {/* Total stars */}
        <div className="flex shrink-0 items-center gap-1.5">
          <Star size={16} className="fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold">{totalStars}</span>
        </div>

        <ChevronDown
          className={`size-4 shrink-0 text-muted-foreground transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="border-t bg-stone-50 p-4 space-y-4">
          {/* Reviews */}
          {sortedReviews.map((r) => (
            <div
              key={r.userId}
              className="rounded-lg border bg-white p-4"
              style={{ borderLeftWidth: 4, borderLeftColor: r.color }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.displayName[0]}
                  </span>
                  <span className="text-sm font-semibold">{r.displayName}</span>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        r.stars !== null && i <= r.stars
                          ? "fill-amber-400 text-amber-400"
                          : "fill-none text-stone-300"
                      }
                    />
                  ))}
                </div>
              </div>
              {r.notes && (
                <p className="mt-2 whitespace-pre-wrap text-sm text-muted-foreground">
                  {r.notes}
                </p>
              )}
            </div>
          ))}

          {/* Users who haven't reviewed yet */}
          {USER_ORDER.filter((uid) => !reviews.some((r) => r.userId === uid)).length > 0 && null}

          {/* Favorites */}
          {favGroups.length > 0 && (
            <div className="rounded-lg border bg-white p-4">
              <h4 className="mb-3 text-sm font-semibold">Favorited Items</h4>
              {(["neighborhood", "activity", "restaurant"] as const).map((sec) => {
                const items = favsBySection[sec];
                if (!items) return null;
                return (
                  <div key={sec} className="mb-3 last:mb-0">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      {SECTION_LABELS[sec]}
                    </p>
                    <ul className="space-y-1">
                      {items.map((g) => (
                        <li key={g.itemSlug} className="flex items-center gap-2 text-sm">
                          <span className="flex gap-0.5">
                            {g.users.map((u, i) => (
                              <Heart
                                key={i}
                                size={12}
                                className="fill-current"
                                style={{ color: u.color }}
                              />
                            ))}
                          </span>
                          <Link
                            href={`/city/${city.slug}#${sec}-${g.itemSlug}`}
                            className="text-primary underline-offset-2 hover:underline"
                          >
                            {g.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {/* Link to city page */}
          <div className="text-center">
            <Link
              href={`/city/${city.slug}`}
              className="text-sm text-primary underline-offset-2 hover:underline"
            >
              View full city page &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
