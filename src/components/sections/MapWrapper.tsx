"use client";

import dynamic from "next/dynamic";

const MapSection = dynamic(
  () => import("@/components/sections/MapSection"),
  { ssr: false }
);

export default function MapWrapper() {
  return <MapSection />;
}
