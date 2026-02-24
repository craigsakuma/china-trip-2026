"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import type { City } from "@/types";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const CHINA_ISO = "156";

export default function ChinaMap({ cities }: { cities: City[] }) {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  if (!cities || cities.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [104, 35],
          scale: 550,
        }}
        width={800}
        height={550}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isChina = geo.id === CHINA_ISO;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isChina ? "#e7e5e4" : "#fafaf9"}
                  stroke="#d6d3d1"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {cities.map((city) => {
          const isHovered = hoveredCity === city.slug;

          if (city.featured) {
            return (
              <Marker
                key={city.slug}
                coordinates={[city.lng, city.lat]}
                onMouseEnter={() => setHoveredCity(city.slug)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <circle
                  r={isHovered ? 6 : 5}
                  fill="#dc2626"
                  stroke="#fff"
                  strokeWidth={1.5}
                  className="cursor-pointer transition-all"
                />
                <text
                  textAnchor="middle"
                  y={-10}
                  className="fill-stone-700 text-[10px] font-semibold"
                >
                  {city.name}
                </text>
              </Marker>
            );
          }

          return (
            <Marker
              key={city.slug}
              coordinates={[city.lng, city.lat]}
              onMouseEnter={() => setHoveredCity(city.slug)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <circle
                r={isHovered ? 4 : 3}
                fill="#a8a29e"
                stroke="#fff"
                strokeWidth={1}
                className="cursor-pointer transition-all"
              />
              {isHovered && (
                <text
                  textAnchor="middle"
                  y={-8}
                  className="fill-stone-600 text-[10px] font-medium"
                >
                  {city.name}
                </text>
              )}
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}
