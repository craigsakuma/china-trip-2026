import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { users } from "./schema";

async function seed() {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle(sql);

  await db
    .insert(users)
    .values([
      { id: "craig", displayName: "Craig", color: "#3b82f6" },
      { id: "kiran", displayName: "Kiran", color: "#22c55e" },
      { id: "hernan", displayName: "Hernan", color: "#f97316" },
    ])
    .onConflictDoNothing();

  console.log("Seeded 3 users");
}

seed().catch(console.error);
