"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export interface UserInfo {
  id: string;
  displayName: string;
  color: string;
}

const USERS: UserInfo[] = [
  { id: "craig", displayName: "Craig", color: "#3b82f6" },
  { id: "kiran", displayName: "Kiran", color: "#22c55e" },
  { id: "hernane", displayName: "Hernane", color: "#f97316" },
];

const COOKIE_NAME = "china-trip-user";

interface UserContextValue {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
  allUsers: UserInfo[];
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
  allUsers: USERS,
});

function getCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<UserInfo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = getCookie(COOKIE_NAME);
    if (saved) {
      const found = USERS.find((u) => u.id === saved);
      if (found) setUserState(found);
    }
    setMounted(true);
  }, []);

  const setUser = (u: UserInfo) => {
    setCookie(COOKIE_NAME, u.id);
    setUserState(u);
  };

  if (!mounted) return null;

  return (
    <UserContext.Provider value={{ user, setUser, allUsers: USERS }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
