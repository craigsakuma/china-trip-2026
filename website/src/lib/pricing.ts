const TIERS = ["Free", "$", "$$", "$$$", "$$$$"] as const;

export function formatPriceTier(tier: number): string {
  return TIERS[tier] ?? "";
}
