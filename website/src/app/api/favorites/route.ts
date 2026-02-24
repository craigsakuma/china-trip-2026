import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { favorites, users } from "@/lib/schema";
import { eq, and } from "drizzle-orm";
import { cities } from "@/data/cities";

const VALID_USERS = ["craig", "kiran", "hernan"] as const;
const VALID_SLUGS = new Set(cities.map((c) => c.slug));
const VALID_SECTIONS = ["neighborhood", "activity", "restaurant"] as const;

export async function GET(req: NextRequest) {
  const city = req.nextUrl.searchParams.get("city");
  const user = req.nextUrl.searchParams.get("user");

  if (city) {
    if (!VALID_SLUGS.has(city)) {
      return NextResponse.json({ error: "Invalid city slug" }, { status: 400 });
    }
    const rows = await db
      .select({
        id: favorites.id,
        userId: favorites.userId,
        citySlug: favorites.citySlug,
        itemSlug: favorites.itemSlug,
        section: favorites.section,
        createdAt: favorites.createdAt,
        displayName: users.displayName,
        color: users.color,
      })
      .from(favorites)
      .innerJoin(users, eq(favorites.userId, users.id))
      .where(eq(favorites.citySlug, city));
    return NextResponse.json(rows);
  }

  if (user) {
    if (!VALID_USERS.includes(user as (typeof VALID_USERS)[number])) {
      return NextResponse.json({ error: "Invalid user" }, { status: 400 });
    }
    const rows = await db
      .select({
        id: favorites.id,
        userId: favorites.userId,
        citySlug: favorites.citySlug,
        itemSlug: favorites.itemSlug,
        section: favorites.section,
        createdAt: favorites.createdAt,
        displayName: users.displayName,
        color: users.color,
      })
      .from(favorites)
      .innerJoin(users, eq(favorites.userId, users.id))
      .where(eq(favorites.userId, user));
    return NextResponse.json(rows);
  }

  return NextResponse.json(
    { error: "Provide ?city=slug or ?user=id" },
    { status: 400 }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, citySlug, itemSlug, section } = body;

  if (!userId || !VALID_USERS.includes(userId)) {
    return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
  }
  if (!citySlug || !VALID_SLUGS.has(citySlug)) {
    return NextResponse.json({ error: "Invalid citySlug" }, { status: 400 });
  }
  if (!itemSlug) {
    return NextResponse.json({ error: "itemSlug required" }, { status: 400 });
  }
  if (
    !section ||
    !VALID_SECTIONS.includes(section as (typeof VALID_SECTIONS)[number])
  ) {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  // Toggle: delete if exists, insert if not
  const existing = await db
    .select({ id: favorites.id })
    .from(favorites)
    .where(
      and(
        eq(favorites.userId, userId),
        eq(favorites.citySlug, citySlug),
        eq(favorites.itemSlug, itemSlug),
        eq(favorites.section, section)
      )
    );

  if (existing.length > 0) {
    await db.delete(favorites).where(eq(favorites.id, existing[0].id));
    return NextResponse.json({ action: "removed" });
  }

  const [row] = await db
    .insert(favorites)
    .values({ userId, citySlug, itemSlug, section })
    .returning();

  return NextResponse.json({ action: "added", ...row });
}
