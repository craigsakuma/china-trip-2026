import {
  pgTable,
  text,
  serial,
  integer,
  timestamp,
  pgEnum,
  unique,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(), // "craig" | "kiran" | "hernan"
  displayName: text("display_name").notNull(),
  color: text("color").notNull(), // hex color
});

export const reviews = pgTable(
  "reviews",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    citySlug: text("city_slug").notNull(),
    stars: integer("stars"), // 0-3, nullable
    notes: text("notes"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [unique().on(t.userId, t.citySlug)]
);

export const sectionEnum = pgEnum("section", [
  "neighborhood",
  "activity",
  "restaurant",
]);

export const favorites = pgTable(
  "favorites",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    citySlug: text("city_slug").notNull(),
    itemSlug: text("item_slug").notNull(),
    section: sectionEnum("section").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [unique().on(t.userId, t.citySlug, t.itemSlug, t.section)]
);
