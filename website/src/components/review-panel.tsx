"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import StarRating from "@/components/star-rating";
import { useUser, type UserInfo } from "@/lib/user-context";

interface Review {
  userId: string;
  displayName: string;
  color: string;
  stars: number | null;
  notes: string | null;
}

interface ReviewPanelProps {
  citySlug: string;
}

const ALL_USERS: UserInfo[] = [
  { id: "craig", displayName: "Craig", color: "#3b82f6" },
  { id: "kiran", displayName: "Kiran", color: "#22c55e" },
  { id: "hernan", displayName: "Hernan", color: "#f97316" },
];

export default function ReviewPanel({ citySlug }: ReviewPanelProps) {
  const { user } = useUser();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fetchReviews = useCallback(async () => {
    const res = await fetch(`/api/reviews?city=${citySlug}`);
    if (res.ok) {
      const data = await res.json();
      setReviews(data);
      setLoaded(true);
    }
  }, [citySlug]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Merge fetched reviews with all users so everyone always shows
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

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border p-4 text-left transition-colors hover:bg-muted/50"
      >
        <div>
          <h2 className="text-lg font-semibold">Our Reviews</h2>
          {loaded && (
            <div className="mt-1 flex gap-3">
              {merged.map((r) => (
                <span key={r.userId} className="flex items-center gap-1 text-sm">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: r.color }}
                  />
                  {r.stars !== null && r.stars > 0
                    ? `${"★".repeat(r.stars)}${"☆".repeat(3 - r.stars)}`
                    : "—"}
                </span>
              ))}
            </div>
          )}
        </div>
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-4 space-y-6">
          {merged.map((r) => (
            <UserReviewCard
              key={r.userId}
              review={r}
              isCurrentUser={user?.id === r.userId}
              onSave={(stars, notes) => saveReview(r.userId, stars, notes)}
            />
          ))}
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

  // Sync external changes
  useEffect(() => {
    setNotes(review.notes ?? "");
  }, [review.notes]);

  function handleNotesChange(value: string) {
    setNotes(value);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSave(review.stars, value || null);
    }, 2000);
  }

  function handleNotesBlur() {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (notes !== (review.notes ?? "")) {
      onSave(review.stars, notes || null);
    }
  }

  return (
    <div
      className="rounded-lg border p-4"
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
          className="mt-3 w-full rounded-md border bg-muted/30 px-3 py-2 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          rows={3}
          placeholder="Add your notes about this city..."
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          onBlur={handleNotesBlur}
        />
      ) : (
        review.notes && (
          <p className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground">
            {review.notes}
          </p>
        )
      )}
    </div>
  );
}
