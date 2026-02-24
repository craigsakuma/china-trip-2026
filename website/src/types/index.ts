export interface City {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  description: string;
  bestFor: string[];
  suggestedDays: string;
  featured: boolean;
  tier: "must-visit" | "strong-match" | "worth-considering";
  hue: number; // HSL hue for gradient placeholder (0-360)
}

export interface WeatherRow {
  period: string;
  avgHigh: string;
  avgLow: string;
  rainDays: string;
  aqi: string;
  conditions: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  topPick: boolean;
  description: string;
  whyItFitsUs: string;
  nearby: string;
  hotels: string;
}

export interface Activity {
  slug: string;
  name: string;
  topPick: boolean;
  description: string;
  time: string;
  location: string;
  cost: string;
  costBreakdown?: string;
  tips: string[];
}

export interface Restaurant {
  slug: string;
  name: string;
  chineseName?: string;
  category: string;
  topPick: boolean;
  location: string;
  priceRange: string;
  cuisine: string;
  description: string;
  reviews?: string;
  whatToOrder: string;
  bestFor: string;
}

export interface PracticalTips {
  [category: string]: string[];
}

export interface CityProfile {
  slug: string;
  executiveSummary: string[];
  famousFor: string[];
  whyItFits: string[];
  weather: WeatherRow[];
  whatToPack?: string;
  neighborhoods: Neighborhood[];
  activities: Activity[];
  restaurants: Restaurant[];
  practicalTips: PracticalTips;
  sources: string[];
}
