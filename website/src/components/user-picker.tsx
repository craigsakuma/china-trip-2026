"use client";

import { useUser } from "@/lib/user-context";

export function UserPickerOverlay() {
  const { user, setUser, allUsers } = useUser();

  if (user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="text-center text-2xl font-bold tracking-tight">
          Who are you?
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Pick your name to save ratings &amp; favorites
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {allUsers.map((u) => (
            <button
              key={u.id}
              onClick={() => setUser(u)}
              className="flex items-center gap-3 rounded-xl border-2 px-5 py-3 text-left font-medium transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
              style={{ borderColor: u.color }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: u.color }}
              >
                {u.displayName[0]}
              </span>
              <span className="text-lg">{u.displayName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UserAvatar() {
  const { user, setUser, allUsers } = useUser();

  if (!user) return null;

  return (
    <div className="relative group">
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white transition-transform hover:scale-110"
        style={{ backgroundColor: user.color }}
        aria-label={`Logged in as ${user.displayName}`}
      >
        {user.displayName[0]}
      </button>
      <div className="invisible absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border bg-white py-1 shadow-lg group-hover:visible">
        {allUsers.map((u) => (
          <button
            key={u.id}
            onClick={() => setUser(u)}
            className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-stone-50"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: u.color }}
            >
              {u.displayName[0]}
            </span>
            <span className={user.id === u.id ? "font-semibold" : ""}>
              {u.displayName}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
