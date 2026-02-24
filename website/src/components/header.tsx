import { UserAvatar } from "@/components/user-picker";

export default function Header() {
  return (
    <header className="border-b bg-gradient-to-b from-stone-50 to-white py-6">
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <UserAvatar />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">China 2026</h1>
        <p className="mt-1.5 text-lg text-muted-foreground">
          October 10&ndash;25 &middot; Kiran&apos;s 50th Birthday
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Craig &middot; Kiran &middot; Hernane
        </p>
      </div>
    </header>
  );
}
