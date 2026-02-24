"use client";

import { Droplets, Sunrise, Sunset, Thermometer, CloudRain } from "lucide-react";
import type { WeatherRow } from "@/types";

function TempBar({ high, low, globalMin, globalMax }: { high: number; low: number; globalMin: number; globalMax: number }) {
  const range = globalMax - globalMin || 1;
  const leftPct = ((low - globalMin) / range) * 100;
  const widthPct = ((high - low) / range) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="w-10 text-right text-sm text-muted-foreground">{low}°</span>
      <div className="relative h-2.5 flex-1 rounded-full bg-muted">
        <div
          className="absolute h-full rounded-full"
          style={{
            left: `${leftPct}%`,
            width: `${Math.max(widthPct, 4)}%`,
            background: `linear-gradient(90deg, hsl(210 80% 60%), hsl(30 90% 55%))`,
          }}
        />
      </div>
      <span className="w-10 text-sm font-medium">{high}°</span>
    </div>
  );
}

function RainIndicator({ chance, precip }: { chance: number; precip: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-sky-500">
        <CloudRain className="size-3.5" />
        <span className="text-sm font-medium">{chance}%</span>
      </div>
      <span className="text-xs text-muted-foreground">{precip}″</span>
    </div>
  );
}

export default function WeatherTable({ rows }: { rows: WeatherRow[] }) {
  if (!rows || rows.length === 0) return null;

  const globalMin = Math.min(...rows.map((r) => r.avgLow)) - 5;
  const globalMax = Math.max(...rows.map((r) => r.avgHigh)) + 5;

  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div
          key={row.period}
          className="rounded-xl border bg-card p-4 transition-shadow hover:shadow-sm"
        >
          {/* Header row: period + conditions */}
          <div className="mb-3 flex items-baseline justify-between gap-2">
            <h3 className="text-sm font-semibold">{row.period}</h3>
            <span className="text-right text-xs leading-tight text-muted-foreground">
              {row.conditions}
            </span>
          </div>

          {/* Temperature bar */}
          <TempBar
            high={row.avgHigh}
            low={row.avgLow}
            globalMin={globalMin}
            globalMax={globalMax}
          />

          {/* Stats row */}
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
            <RainIndicator chance={row.rainChance} precip={row.precip} />

            <div className="flex items-center gap-1">
              <Sunrise className="size-3.5 text-amber-400" />
              <span>{row.sunrise}</span>
            </div>

            <div className="flex items-center gap-1">
              <Sunset className="size-3.5 text-orange-400" />
              <span>{row.sunset}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
