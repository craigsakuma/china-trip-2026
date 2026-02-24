import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reviews, users } from "@/lib/schema";
import { eq, and } from "drizzle-orm";
import { cities } from "@/data/cities";

const VALID_USERS = ["craig", "kiran", "hernane"] as const;
const VALID_SLUGS = new Set(cities.map((c) => c.slug));

export async function GET(req: NextRequest) {
  const city = req.nextUrl.searchParams.get("city");
  if (!city || !VALID_SLUGS.has(city)) {
    return NextResponse.json({ error: "Invalid city slug" }, { status: 400 });
  }

  const rows = await db
    .select({
      id: reviews.id,
      userId: reviews.userId,
      citySlug: reviews.citySlug,
      stars: reviews.stars,
      notes: reviews.notes,
      createdAt: reviews.createdAt,
      updatedAt: reviews.updatedAt,
      displayName: users.displayName,
      color: users.color,
    })
    .from(reviews)
    .innerJoin(users, eq(reviews.userId, users.id))
    .where(eq(reviews.citySlug, city));

  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, citySlug, stars, notes } = body;

  if (!userId || !VALID_USERS.includes(userId)) {
    return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
  }
  if (!citySlug || !VALID_SLUGS.has(citySlug)) {
    return NextResponse.json({ error: "Invalid citySlug" }, { status: 400 });
  }
  if (stars !== undefined && stars !== null && (stars < 0 || stars > 3)) {
    return NextResponse.json(
      { error: "stars must be 0-3 or null" },
      { status: 400 }
    );
  }

  const [row] = await db
    .insert(reviews)
    .values({
      userId,
      citySlug,
      stars: stars ?? null,
      notes: notes ?? null,
    })
    .onConflictDoUpdate({
      target: [reviews.userId, reviews.citySlug],
      set: {
        stars: stars ?? null,
        notes: notes ?? null,
        updatedAt: new Date(),
      },
    })
    .returning();

  return NextResponse.json(row);
}
