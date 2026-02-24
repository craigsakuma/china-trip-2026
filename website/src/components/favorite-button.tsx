"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useUser } from "@/lib/user-context";

interface FavoriteButtonProps {
  citySlug: string;
  itemSlug: string;
  section: "neighborhood" | "activity" | "restaurant";
  /** All user favorites for this item: { userId, color }[] */
  favoritedBy: { userId: string; color: string }[];
  onToggle?: (added: boolean) => void;
}

export default function FavoriteButton({
  citySlug,
  itemSlug,
  section,
  favoritedBy,
  onToggle,
}: FavoriteButtonProps) {
  const { user } = useUser();
  const [saving, setSaving] = useState(false);
  const isMine = user ? favoritedBy.some((f) => f.userId === user.id) : false;

  async function toggle() {
    if (!user || saving) return;
    setSaving(true);
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, citySlug, itemSlug, section }),
      });
      if (res.ok) {
        const data = await res.json();
        onToggle?.(data.action === "added");
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {/* Other users' hearts */}
      {favoritedBy
        .filter((f) => f.userId !== user?.id)
        .map((f) => (
          <Heart
            key={f.userId}
            size={14}
            className="fill-current"
            style={{ color: f.color }}
          />
        ))}

      {/* Current user's heart (clickable) */}
      {user && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          disabled={saving}
          className="transition-transform hover:scale-125 disabled:opacity-50"
          aria-label={isMine ? "Remove favorite" : "Add favorite"}
        >
          <Heart
            size={16}
            className={
              isMine ? "fill-current" : "fill-none"
            }
            style={{ color: user.color }}
          />
        </button>
      )}
    </div>
  );
}
