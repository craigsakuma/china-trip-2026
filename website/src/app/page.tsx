import Header from "@/components/header";
import CityCard from "@/components/city-card";
import ChinaMap from "@/components/china-map-wrapper";
import { featuredCities, moreCities, cities } from "@/data/cities";
import { regionalCircuits } from "@/data/regional-circuits";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ── Map ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 pt-6 pb-8">
        <ChinaMap cities={cities} />
      </section>

      {/* ── Featured Destinations ────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Destinations
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      {/* ── More Destinations ────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          More Destinations
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreCities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      {/* ── Regional Circuits ────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Regional Circuits
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regionalCircuits.map((circuit) => (
            <div
              key={circuit.name}
              className="flex flex-col gap-1.5 rounded-lg border p-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: circuit.color }}
                />
                <span className="font-semibold">{circuit.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {circuit.cities.join(" \u2192 ")}
              </p>
              <p className="text-sm font-medium">{circuit.totalDays} days</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        China 2026 &middot; Built for Craig, Kiran &amp; Hernane
      </footer>
    </div>
  );
}
