import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CityRatings } from "@/components/city-ratings";
import type { City } from "@/types";

function tierBadge(tier: City["tier"]) {
  switch (tier) {
    case "must-visit":
      return <Badge variant="destructive">Must Visit</Badge>;
    case "strong-match":
      return <Badge variant="default">Strong Match</Badge>;
    case "worth-considering":
      return <Badge variant="secondary">Worth Considering</Badge>;
  }
}

export default function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/city/${city.slug}`} className="group block">
      <Card className="overflow-hidden py-0 transition-shadow hover:shadow-lg">
        <div
          className="relative aspect-[16/10]"
          style={{
            background: `linear-gradient(135deg, hsl(${city.hue}, 45%, 35%), hsl(${city.hue + 30}, 40%, 55%))`,
          }}
        >
          <Image
            src={`/photos/${city.slug}/_hero.jpg`}
            alt={city.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-3 left-3">{tierBadge(city.tier)}</div>
        </div>

        <CardContent className="space-y-3 p-4">
          {/* City name and meta */}
          <div>
            <h3 className="text-lg font-semibold">{city.name}</h3>
            <p className="text-sm text-muted-foreground">
              {city.region} &middot; {city.suggestedDays}
            </p>
          </div>

          {/* Description */}
          {city.description && (
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {city.description}
            </p>
          )}

          {/* Best-for tags */}
          {city.bestFor && city.bestFor.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {city.bestFor.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Ratings */}
          <CityRatings citySlug={city.slug} variant="light" />
        </CardContent>
      </Card>
    </Link>
  );
}
