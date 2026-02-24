"use client";

import { useRef, useState } from "react";
import Image from "next/image";
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
  const mousePos = useRef({ x: 0, y: 0 });
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  if (!cities || cities.length === 0) {
    return null;
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handleMarkerEnter(slug: string) {
    setHoveredCity(slug);
    setPopupPos({ ...mousePos.current });
  }

  function handleMarkerLeave() {
    setHoveredCity(null);
  }

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl" onMouseMove={handleMouseMove}>
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
          const isFeatured = city.featured;

          return (
            <Marker
              key={city.slug}
              coordinates={[city.lng, city.lat]}
              onMouseEnter={() => handleMarkerEnter(city.slug)}
              onMouseLeave={handleMarkerLeave}
            >
              <circle
                r={isHovered ? 6 : isFeatured ? 5 : 3}
                fill={isHovered ? "#b91c1c" : isFeatured ? "#dc2626" : "#a8a29e"}
                stroke="#fff"
                strokeWidth={isFeatured ? 1.5 : 1}
                className="cursor-pointer transition-all"
              />
              {isHovered && (
                <text
                  textAnchor="middle"
                  y={-12}
                  className="pointer-events-none fill-stone-800 text-[13px] font-bold"
                  style={{
                    paintOrder: "stroke",
                    stroke: "#fff",
                    strokeWidth: 3,
                    strokeLinejoin: "round",
                  }}
                >
                  {city.name}
                </text>
              )}
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Popup card */}
      {hoveredCity && (() => {
        const city = cities.find((c) => c.slug === hoveredCity);
        if (!city) return null;
        const containerWidth = containerRef.current?.clientWidth ?? 600;
        return (
          <div
            className="pointer-events-none absolute z-10 w-56 overflow-hidden rounded-lg border bg-white shadow-lg"
            style={{
              left: popupPos.x,
              top: popupPos.y,
              transform:
                popupPos.x > containerWidth / 2
                  ? "translate(-105%, -110%)"
                  : "translate(5%, -110%)",
            }}
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={`/photos/${city.slug}/_hero.jpg`}
                alt={city.name}
                fill
                className="object-cover"
                sizes="224px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2.5 right-2.5">
                <p className="text-sm font-bold text-white">{city.name}</p>
                <p className="text-[11px] text-white/80">
                  {city.region} &middot; {city.suggestedDays}
                </p>
              </div>
            </div>
            {city.description && (
              <div className="px-2.5 py-2">
                <p className="line-clamp-2 text-xs text-stone-600">
                  {city.description}
                </p>
              </div>
            )}
          </div>
        );
      })()}
    </div>
  );
}
