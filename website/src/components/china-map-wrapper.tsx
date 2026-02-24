"use client";

import dynamic from "next/dynamic";
import type { City } from "@/types";

const ChinaMap = dynamic(() => import("@/components/china-map"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto aspect-[800/550] max-w-3xl animate-pulse rounded-xl bg-muted" />
  ),
});

export default function ChinaMapWrapper({ cities }: { cities: City[] }) {
  return <ChinaMap cities={cities} />;
}
