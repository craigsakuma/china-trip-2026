"use client";

import { Button } from "@/components/ui/button";

interface RestaurantFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function RestaurantFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: RestaurantFiltersProps) {
  const allCategories = ["All", ...categories];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {allCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <Button
            key={category}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="shrink-0"
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
}
