"use client";

import { useState, useEffect, useCallback } from "react";
import ItemCard from "@/components/item-card";
import ReviewPanel from "@/components/review-panel";
import { useUser } from "@/lib/user-context";
import type { Neighborhood, Activity, Restaurant } from "@/types";

interface Favorite {
  userId: string;
  citySlug: string;
  itemSlug: string;
  section: string;
  color: string;
}

type Section = "neighborhood" | "activity" | "restaurant";

interface CitySectionsProps {
  citySlug: string;
  neighborhoods: Neighborhood[];
  activities: Activity[];
  restaurants: Restaurant[];
}

export default function CitySections({
  citySlug,
  neighborhoods,
  activities,
  restaurants,
}: CitySectionsProps) {
  const { user } = useUser();
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const fetchFavorites = useCallback(async () => {
    const res = await fetch(`/api/favorites?city=${citySlug}`);
    if (res.ok) setFavorites(await res.json());
  }, [citySlug]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  function favoritedBy(itemSlug: string, section: Section) {
    return favorites
      .filter((f) => f.itemSlug === itemSlug && f.section === section)
      .map((f) => ({ userId: f.userId, color: f.color }));
  }

  function sortByFavorites<T extends { slug: string }>(
    items: T[],
    section: Section
  ): T[] {
    if (!user) return items;
    const copy = [...items];
    copy.sort((a, b) => {
      const aFav = favorites.some(
        (f) => f.itemSlug === a.slug && f.section === section && f.userId === user.id
      );
      const bFav = favorites.some(
        (f) => f.itemSlug === b.slug && f.section === section && f.userId === user.id
      );
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      return 0;
    });
    return copy;
  }

  function consensusLabel(itemSlug: string, section: Section): string | null {
    const users = favoritedBy(itemSlug, section);
    if (users.length < 2) return null;
    // Resolve display names from the known users list
    const names: Record<string, string> = {
      craig: "Craig",
      kiran: "Kiran",
      hernan: "Hernan",
    };
    const who = users.map((u) => names[u.userId] ?? u.userId);
    if (who.length === 3) return "Everyone favorited this!";
    return `${who.join(" & ")} both favorited this`;
  }

  function renderSection<T extends { slug: string; name: string }>(
    items: T[],
    section: Section,
    title: string
  ) {
    if (items.length === 0) return null;
    const sorted = sortByFavorites(items, section);
    return (
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">{title}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {sorted.map((item) => {
            const label = consensusLabel(item.slug, section);
            return (
              <div key={item.slug}>
                {label && (
                  <div className="mb-1 rounded-t-md bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 border border-b-0 border-amber-200">
                    {label}
                  </div>
                )}
                <ItemCard
                  type={section}
                  item={item as never}
                  citySlug={citySlug}
                  favoritedBy={favoritedBy(item.slug, section)}
                  onFavoriteToggle={fetchFavorites}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <>
      {renderSection(neighborhoods, "neighborhood", "Where to Stay")}
      {renderSection(activities, "activity", "Activities")}
      {renderSection(restaurants, "restaurant", "Restaurants")}
      <ReviewPanel citySlug={citySlug} />
    </>
  );
}
