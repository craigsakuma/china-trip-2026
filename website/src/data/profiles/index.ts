import type { CityProfile } from "@/types";
import { beijingProfile } from "./beijing";
import { hongKongProfile } from "./hong-kong";
import { stubProfiles } from "./stubs";

// Registry of all city profiles.
// Full profiles override stubs when available.
const fullProfiles: Record<string, CityProfile> = {
  beijing: beijingProfile,
  "hong-kong": hongKongProfile,
};

export function getProfile(slug: string): CityProfile | null {
  return fullProfiles[slug] ?? stubProfiles[slug] ?? null;
}

export function hasFullProfile(slug: string): boolean {
  return slug in fullProfiles;
}
