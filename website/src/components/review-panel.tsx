"use client";

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { ChevronDown, Heart } from "lucide-react";
import StarRating from "@/components/star-rating";
import { useUser, type UserInfo } from "@/lib/user-context";
import type { Neighborhood, Activity, Restaurant } from "@/types";

interface Review {
  userId: string;
  displayName: string;
  color: string;
  stars: number | null;
  notes: string | null;
}

interface Favorite {
  userId: string;
  citySlug: string;
  itemSlug: string;
  section: string;
  color: string;
  displayName: string;
}

interface NamedItem {
  slug: string;
  name: string;
}

interface ReviewPanelProps {
  citySlug: string;
  neighborhoods: Neighborhood[];
  activities: Activity[];
  restaurants: Restaurant[];
  favorites: Favorite[];
}

// Kiran first, Hernan second, Craig last
const ALL_USERS: UserInfo[] = [
  { id: "kiran", displayName: "Kiran", color: "#22c55e" },
  { id: "hernan", displayName: "Hernan", color: "#f97316" },
  { id: "craig", displayName: "Craig", color: "#3b82f6" },
];

const SECTION_LABELS: Record<string, string> = {
  neighborhood: "Where to Stay",
  activity: "Activities",
  restaurant: "Restaurants",
};

export default function ReviewPanel({
  citySlug,
  neighborhoods,
  activities,
  restaurants,
  favorites,
}: ReviewPanelProps) {
  const { user } = useUser();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fetchReviews = useCallback(async () => {
    const res = await fetch(`/api/reviews?city=${citySlug}`);
    if (res.ok) {
      setReviews(await res.json());
      setLoaded(true);
    }
  }, [citySlug]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const merged = ALL_USERS.map((u) => {
    const r = reviews.find((rev) => rev.userId === u.id);
    return {
      userId: u.id,
      displayName: u.displayName,
      color: u.color,
      stars: r?.stars ?? null,
      notes: r?.notes ?? null,
    };
  });

  async function saveReview(
    userId: string,
    stars: number | null,
    notes: string | null
  ) {
    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, citySlug, stars, notes }),
    });
    fetchReviews();
  }

  // Build favorites summary grouped by section
  const itemMap: Record<string, NamedItem> = {};
  for (const n of neighborhoods) itemMap[`neighborhood:${n.slug}`] = n;
  for (const a of activities) itemMap[`activity:${a.slug}`] = a;
  for (const r of restaurants) itemMap[`restaurant:${r.slug}`] = r;

  type FavGroup = {
    section: string;
    itemSlug: string;
    name: string;
    users: { userId: string; color: string }[];
  };

  const favGroups: FavGroup[] = [];
  const seen = new Map<string, FavGroup>();
  for (const f of favorites) {
    const key = `${f.section}:${f.itemSlug}`;
    const item = itemMap[key];
    if (!item) continue;
    let group = seen.get(key);
    if (!group) {
      group = { section: f.section, itemSlug: f.itemSlug, name: item.name, users: [] };
      seen.set(key, group);
      favGroups.push(group);
    }
    group.users.push({ userId: f.userId, color: f.color });
  }
  // Sort: most favorites first, then alphabetical
  favGroups.sort((a, b) => b.users.length - a.users.length || a.name.localeCompare(b.name));

  // Group by section for display
  const favsBySection: Record<string, FavGroup[]> = {};
  for (const g of favGroups) {
    if (!favsBySection[g.section]) favsBySection[g.section] = [];
    favsBySection[g.section].push(g);
  }

  return (
    <section className="mx-auto mt-6 max-w-4xl px-4">
      {/* Collapsed bar */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-left transition-colors hover:bg-muted/50"
      >
        <span className="text-sm font-semibold">Notes, Favorites &amp; Reviews</span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded content */}
      {open && (
        <div className="rounded-b-lg border border-t-0 bg-stone-50 p-4 space-y-4">
          {/* User review cards */}
          {merged.map((r) => (
            <UserReviewCard
              key={r.userId}
              review={r}
              isCurrentUser={user?.id === r.userId}
              onSave={(stars, notes) => saveReview(r.userId, stars, notes)}
            />
          ))}

          {/* Favorites summary */}
          {favGroups.length > 0 && (
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-3 text-sm font-semibold">Favorited Items</h3>
              {(["neighborhood", "activity", "restaurant"] as const).map((sec) => {
                const items = favsBySection[sec];
                if (!items || items.length === 0) return null;
                return (
                  <div key={sec} className="mb-3 last:mb-0">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      {SECTION_LABELS[sec]}
                    </p>
                    <ul className="space-y-1">
                      {items.map((g) => (
                        <li key={g.itemSlug} className="flex items-center gap-2 text-sm">
                          <span className="flex gap-0.5">
                            {g.users.map((u) => (
                              <Heart
                                key={u.userId}
                                size={12}
                                className="fill-current"
                                style={{ color: u.color }}
                              />
                            ))}
                          </span>
                          <a
                            href={`#${sec}-${g.itemSlug}`}
                            onClick={() => {
                              // Dispatch event to open the target card
                              window.dispatchEvent(
                                new CustomEvent("open-item-card", {
                                  detail: { id: `${sec}-${g.itemSlug}` },
                                })
                              );
                            }}
                            className="text-primary underline-offset-2 hover:underline"
                          >
                            {g.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function UserReviewCard({
  review,
  isCurrentUser,
  onSave,
}: {
  review: Review;
  isCurrentUser: boolean;
  onSave: (stars: number | null, notes: string | null) => void;
}) {
  const [notes, setNotes] = useState(review.notes ?? "");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cursorRef = useRef<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const raw = review.notes ?? "";
    setNotes(raw ? normalizeNotes(raw) : "");
  }, [review.notes]);

  // Restore cursor position after state update (needed for mid-text Enter)
  useLayoutEffect(() => {
    if (cursorRef.current !== null && textareaRef.current) {
      textareaRef.current.selectionStart = cursorRef.current;
      textareaRef.current.selectionEnd = cursorRef.current;
      cursorRef.current = null;
    }
  });

  function normalizeNotes(value: string): string {
    return value
      .split("\n")
      .map((line) => {
        if (line.startsWith("• ")) return line;
        if (line.startsWith("•")) return "• " + line.slice(1);
        return "• " + line;
      })
      .join("\n");
  }

  function notesOrNull(value: string) {
    // Return null only if there's no real content; preserve bullets in the saved value
    const content = value.replace(/^•\s*/gm, "").trim();
    return content ? value : null;
  }

  function scheduleSave(value: string) {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSave(review.stars, notesOrNull(value));
    }, 2000);
  }

  function handleNotesChange(value: string) {
    const normalized = normalizeNotes(value);
    setNotes(normalized);
    scheduleSave(normalized);
  }

  function handleNotesFocus() {
    if (!notes) {
      setNotes("• ");
    } else {
      const normalized = normalizeNotes(notes);
      if (normalized !== notes) setNotes(normalized);
    }
  }

  function handleNotesKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    const el = e.currentTarget;
    const { selectionStart, selectionEnd, value } = el;

    if (e.key === "Enter") {
      e.preventDefault();
      const newValue =
        value.substring(0, selectionStart) + "\n• " + value.substring(selectionEnd);
      cursorRef.current = selectionStart + 3;
      setNotes(newValue);
      scheduleSave(newValue);
      return;
    }

    // Only handle single-cursor (no selection) key presses below
    if (selectionStart !== selectionEnd) return;

    const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
    const posInLine = selectionStart - lineStart;

    if (e.key === "Backspace") {
      if (posInLine > 2) return; // Normal backspace, allow
      e.preventDefault();

      if (posInLine === 2) {
        // Cursor is right after "• " — remove the line if it's empty
        const lineEnd = value.indexOf("\n", lineStart);
        const lineContent = value.substring(
          lineStart + 2,
          lineEnd === -1 ? value.length : lineEnd
        );
        if (lineContent.trim() !== "") return; // Has content, just block backspace

        if (lineStart === 0 && lineEnd === -1) return; // Only line, keep it

        let newValue: string;
        let newCursor: number;
        if (lineStart === 0) {
          newValue = value.substring(lineEnd + 1);
          newCursor = 0;
        } else {
          const removeUntil = lineEnd === -1 ? value.length : lineEnd;
          newValue = value.substring(0, lineStart - 1) + value.substring(removeUntil);
          newCursor = lineStart - 1;
        }
        cursorRef.current = newCursor;
        setNotes(newValue);
        scheduleSave(newValue);
      }
      // posInLine 0 or 1: cursor inside bullet prefix — already prevented
      return;
    }

    if (e.key === "Delete") {
      // Prevent deleting the bullet prefix characters
      if (posInLine < 2) {
        e.preventDefault();
        return;
      }
      // Prevent merging this line into the next (would expose next bullet prefix)
      const lineEnd = value.indexOf("\n", lineStart);
      if (lineEnd !== -1 && selectionStart === lineEnd) {
        e.preventDefault();
      }
    }
  }

  function handleNotesBlur() {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Remove blank lines (only bullets/spaces) on blur
    const cleaned = notes
      .split("\n")
      .filter((line) => line.replace(/^•\s*/, "").trim() !== "")
      .join("\n");
    if (cleaned !== notes) setNotes(cleaned);
    if (cleaned !== (review.notes ?? "")) {
      onSave(review.stars, notesOrNull(cleaned));
    }
  }

  return (
    <div
      className="rounded-lg border bg-white p-4"
      style={{ borderLeftWidth: 4, borderLeftColor: review.color }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: review.color }}
          >
            {review.displayName[0]}
          </span>
          <span className="font-semibold">{review.displayName}</span>
        </div>
        <StarRating
          value={review.stars}
          editable={isCurrentUser}
          onChange={(s) => onSave(s, review.notes)}
        />
      </div>

      {isCurrentUser ? (
        <textarea
          ref={textareaRef}
          className="mt-3 w-full rounded-md border bg-muted/30 px-3 py-2 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          rows={3}
          placeholder="Add your notes about this city..."
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          onFocus={handleNotesFocus}
          onKeyDown={handleNotesKeyDown}
          onBlur={handleNotesBlur}
        />
      ) : (
        review.notes && (
          <ul className="mt-3 space-y-0.5 text-sm text-muted-foreground">
            {review.notes.split("\n").map((line, i) => {
              const content = line.replace(/^•\s*/, "").trim();
              if (!content) return null;
              return (
                <li key={i} className="flex gap-1.5">
                  <span className="mt-px shrink-0 text-stone-400">•</span>
                  <span>{content}</span>
                </li>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
}
