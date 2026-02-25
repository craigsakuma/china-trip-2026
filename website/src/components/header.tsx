import Link from "next/link";
import { UserAvatar } from "@/components/user-picker";

export default function Header() {
  return (
    <header className="relative z-[50] border-b bg-gradient-to-b from-stone-50 to-white py-6">
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-3">
          <Link
            href="/feedback"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Feedback
          </Link>
          <UserAvatar />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">China 2026</h1>
        <p className="mt-1.5 text-lg text-muted-foreground">
          October 10&ndash;25 &middot; Kiran&apos;s 50th Birthday
        </p>
      </div>
    </header>
  );
}
