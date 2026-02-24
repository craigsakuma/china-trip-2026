"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import type { Neighborhood, Activity, Restaurant } from "@/types";

type ItemType = "neighborhood" | "activity" | "restaurant";
type Item = Neighborhood | Activity | Restaurant;

interface ItemCardProps {
  item: Item;
  type: ItemType;
}

function isActivity(item: Item, type: ItemType): item is Activity {
  return type === "activity";
}

function isRestaurant(item: Item, type: ItemType): item is Restaurant {
  return type === "restaurant";
}

function isNeighborhood(item: Item, type: ItemType): item is Neighborhood {
  return type === "neighborhood";
}

export default function ItemCard({ item, type }: ItemCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className={`overflow-hidden py-0 ${
        item.topPick ? "border-l-4 border-l-amber-400" : ""
      }`}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="w-full text-left">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-semibold">{item.name}</h3>
                {item.topPick && (
                  <Badge
                    variant="outline"
                    className="shrink-0 border-amber-300 bg-amber-50 text-amber-700"
                  >
                    Top Pick
                  </Badge>
                )}
              </div>

              {/* Key info line based on type */}
              <p className="mt-0.5 truncate text-sm text-muted-foreground">
                {isActivity(item, type) && item.cost}
                {isRestaurant(item, type) && item.priceRange}
                {isNeighborhood(item, type) && item.nearby}
              </p>
            </div>

            <ChevronDown
              className={`size-4 shrink-0 text-muted-foreground transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </CardContent>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-3 border-t px-4 pb-4 pt-3">
            {/* Description */}
            {item.description && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            )}

            {/* Activity-specific fields */}
            {isActivity(item, type) && (
              <>
                {item.location && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Location
                    </span>
                    <p className="text-sm">{item.location}</p>
                  </div>
                )}

                {item.time && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Time
                    </span>
                    <p className="text-sm">{item.time}</p>
                  </div>
                )}

                {item.costBreakdown && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Cost Breakdown
                    </span>
                    <p className="text-sm">{item.costBreakdown}</p>
                  </div>
                )}

                {item.tips && item.tips.length > 0 && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Tips
                    </span>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                      {item.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {/* Restaurant-specific fields */}
            {isRestaurant(item, type) && (
              <>
                {item.cuisine && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Cuisine
                    </span>
                    <p className="text-sm">{item.cuisine}</p>
                  </div>
                )}

                {item.location && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Location
                    </span>
                    <p className="text-sm">{item.location}</p>
                  </div>
                )}

                {item.whatToOrder && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      What to Order
                    </span>
                    <p className="text-sm">{item.whatToOrder}</p>
                  </div>
                )}

                {item.bestFor && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Best For
                    </span>
                    <p className="text-sm">{item.bestFor}</p>
                  </div>
                )}

                {item.reviews && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Reviews
                    </span>
                    <p className="text-sm">{item.reviews}</p>
                  </div>
                )}
              </>
            )}

            {/* Neighborhood-specific fields */}
            {isNeighborhood(item, type) && (
              <>
                {item.whyItFitsUs && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Why It Fits Us
                    </span>
                    <p className="text-sm">{item.whyItFitsUs}</p>
                  </div>
                )}

                {item.hotels && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Hotels
                    </span>
                    <p className="text-sm">{item.hotels}</p>
                  </div>
                )}

                {item.nearby && (
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                      Nearby
                    </span>
                    <p className="text-sm">{item.nearby}</p>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
