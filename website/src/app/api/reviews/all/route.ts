import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reviews, users, favorites } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const [allReviews, allFavorites] = await Promise.all([
    db
      .select({
        userId: reviews.userId,
        citySlug: reviews.citySlug,
        stars: reviews.stars,
        notes: reviews.notes,
        updatedAt: reviews.updatedAt,
        displayName: users.displayName,
        color: users.color,
      })
      .from(reviews)
      .innerJoin(users, eq(reviews.userId, users.id)),
    db
      .select({
        userId: favorites.userId,
        citySlug: favorites.citySlug,
        itemSlug: favorites.itemSlug,
        section: favorites.section,
        displayName: users.displayName,
        color: users.color,
      })
      .from(favorites)
      .innerJoin(users, eq(favorites.userId, users.id)),
  ]);

  return NextResponse.json({ reviews: allReviews, favorites: allFavorites });
}
