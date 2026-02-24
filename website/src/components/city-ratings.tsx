"use client";

import { useState, useEffect } from "react";
import { UserStars } from "@/components/star-rating";

const ALL_USERS = [
  { id: "craig", displayName: "Craig", color: "#3b82f6" },
  { id: "kiran", displayName: "Kiran", color: "#22c55e" },
  { id: "hernan", displayName: "Hernan", color: "#f97316" },
];

interface Review {
  userId: string;
  displayName: string;
  color: string;
  stars: number | null;
}

/** Shows all 3 users' star ratings for a city. Used in hero and cards. */
export function CityRatings({
  citySlug,
  variant = "dark",
}: {
  citySlug: string;
  variant?: "dark" | "light";
}) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(`/api/reviews?city=${citySlug}`)
      .then((r) => r.json())
      .then(setReviews)
      .catch(() => {});
  }, [citySlug]);

  const merged = ALL_USERS.map((u) => {
    const r = reviews.find((rev) => rev.userId === u.id);
    return { ...u, stars: r?.stars ?? null };
  });

  const hasAny = merged.some((u) => u.stars !== null && u.stars > 0);
  if (!hasAny) return null;

  return (
    <div className="flex gap-3">
      {merged.map((u) => (
        <UserStars
          key={u.id}
          displayName={u.displayName}
          color={u.color}
          stars={u.stars}
        />
      ))}
    </div>
  );
}
