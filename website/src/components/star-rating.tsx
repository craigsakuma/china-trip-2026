"use client";

import { useState, useOptimistic, useTransition } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  value: number | null; // 0-3 or null
  editable?: boolean;
  onChange?: (stars: number | null) => void;
  size?: "sm" | "md";
}

export default function StarRating({
  value,
  editable = false,
  onChange,
  size = "md",
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const stars = value ?? 0;
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <div
      className="inline-flex gap-0.5"
      onMouseLeave={() => editable && setHovered(null)}
    >
      {[1, 2, 3].map((i) => {
        // When hovering the exact star that matches current rating, preview clearing
        const effectiveHovered =
          hovered !== null ? (hovered === stars ? 0 : hovered) : stars;
        const filled = i <= effectiveHovered;
        return (
          <button
            key={i}
            type="button"
            disabled={!editable}
            className={`transition-colors ${
              editable
                ? "cursor-pointer hover:scale-110"
                : "cursor-default"
            }`}
            onMouseEnter={() => editable && setHovered(i)}
            onClick={() => {
              if (!editable || !onChange) return;
              // Click same star to toggle off (returns null = no rating)
              onChange(i === stars ? null : i);
            }}
          >
            <Star
              size={iconSize}
              className={
                filled
                  ? "fill-amber-400 text-amber-400"
                  : "fill-none text-stone-300"
              }
            />
          </button>
        );
      })}
    </div>
  );
}

/** Compact display: colored avatar circle + stars for one user */
export function UserStars({
  displayName,
  color,
  stars,
}: {
  displayName: string;
  color: string;
  stars: number | null;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {displayName[0]}
      </span>
      {stars !== null && stars > 0 ? (
        <StarRating value={stars} size="sm" />
      ) : (
        <span className="text-xs text-muted-foreground">--</span>
      )}
    </div>
  );
}
