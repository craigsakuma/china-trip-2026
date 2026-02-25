import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cities, getCityBySlug } from "@/data/cities";
import { getProfile } from "@/data/profiles";
import WeatherTable from "@/components/weather-table";
import HeroImage from "@/components/hero-image";
import { CityRatings } from "@/components/city-ratings";
import {
  CityInteractiveProvider,
  CityReviewSlot,
  CityItemSections,
} from "@/components/city-sections";

/* ── Static params for all city slugs ─────────────────────── */
export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

/* ── Metadata ─────────────────────────────────────────────── */
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `${city.name} | China 2026`,
    description: city.description,
  };
}

/* ── Page ─────────────────────────────────────────────────── */
export default async function CityPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const profile = getProfile(slug);
  if (!profile) notFound();
  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="mx-auto max-w-4xl px-4 pt-6">
        <Link
          href="/"
          className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; All Destinations
        </Link>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="mx-auto mt-4 max-w-4xl px-4">
        <div
          className="relative flex flex-col justify-end overflow-hidden rounded-xl p-8 md:p-12"
          style={
            profile.heroPhoto
              ? { minHeight: 260 }
              : {
                  background: `linear-gradient(135deg, hsl(${city.hue} 70% 40%), hsl(${city.hue} 60% 25%))`,
                  minHeight: 260,
                }
          }
        >
          {profile.heroPhoto ? (
            <HeroImage photo={profile.heroPhoto} hue={city.hue} />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, hsl(${city.hue} 70% 40%), hsl(${city.hue} 60% 25%))`,
              }}
            />
          )}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white">{city.name}</h1>
            <p className="mt-1 text-white/80">
              {city.region} &middot; {city.suggestedDays} days
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.famousFor.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <CityRatings citySlug={slug} variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Client interactive boundary ───────────────────── */}
      <CityInteractiveProvider citySlug={slug}>
        {/* Notes, Favorites & Reviews — between hero and overview */}
        <CityReviewSlot
          citySlug={slug}
          neighborhoods={profile.neighborhoods}
          activities={profile.activities}
          restaurants={profile.restaurants}
        />

        {/* ── Executive Summary ───────────────────────────── */}
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {profile.executiveSummary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Why it fits callout */}
          <div className="mt-6 rounded-lg border-l-4 border-primary bg-muted/50 p-4">
            <h3 className="mb-2 font-semibold">Why it fits us</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {profile.whyItFits.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Weather ─────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            October Weather
          </h2>
          <WeatherTable rows={profile.weather} />
          {profile.whatToPack && (
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                What to pack:
              </span>{" "}
              {profile.whatToPack}
            </p>
          )}
        </section>

        {/* ── Neighborhoods / Activities / Restaurants ─────── */}
        <CityItemSections
          citySlug={slug}
          neighborhoods={profile.neighborhoods}
          activities={profile.activities}
          restaurants={profile.restaurants}
        />
      </CityInteractiveProvider>

      {/* ── Practical Tips ────────────────────────────────── */}
      {Object.keys(profile.practicalTips).length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Practical Tips
          </h2>
          <div className="space-y-6">
            {Object.entries(profile.practicalTips).map(
              ([category, tips]) => (
                <div key={category}>
                  <h3 className="mb-2 font-semibold">{category}</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* ── Sources ───────────────────────────────────────── */}
      {profile.sources.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-12">
          <details className="group rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">
              Sources ({profile.sources.length})
            </summary>
            <ol className="mt-4 list-inside list-decimal space-y-1 text-sm text-muted-foreground">
              {profile.sources.map((source, i) => (
                <li key={i}>{source}</li>
              ))}
            </ol>
          </details>
        </section>
      )}
    </div>
  );
}
