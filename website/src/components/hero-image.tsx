"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/types";

interface HeroImageProps {
  photo: Photo;
  hue: number;
}

export default function HeroImage({ photo, hue }: HeroImageProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 70% 40%), hsl(${hue} 60% 25%))`,
        }}
      />
    );
  }

  return (
    <>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 896px) 100vw, 896px"
        onError={() => setHidden(true)}
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalWidth < 10 || img.naturalHeight < 10) setHidden(true);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    </>
  );
}
