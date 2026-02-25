import type { Metadata } from "next";
import Link from "next/link";
import FeedbackList from "@/components/feedback-list";

export const metadata: Metadata = {
  title: "Feedback | China 2026",
  description: "Consolidated ratings, notes, and favorites from the group",
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 pt-6">
        <Link
          href="/"
          className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; All Destinations
        </Link>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight">Group Feedback</h1>
        <p className="mt-1 text-muted-foreground">
          Cities we&apos;ve rated, ordered by total stars
        </p>
      </section>

      <FeedbackList />
    </div>
  );
}
