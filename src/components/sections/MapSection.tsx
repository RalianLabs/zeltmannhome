"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/data/site";
import { florence, isolde } from "@/data/properties";

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return;

    const loadMap = async () => {
      const L = (await import("leaflet")).default;
      const map = L.map(mapRef.current!, {
        scrollWheelZoom: false,
      }).setView([SITE.coordinates.lat, SITE.coordinates.lng], 14);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const defaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      if (florence.coordinates) {
        L.marker([florence.coordinates.lat, florence.coordinates.lng], { icon: defaultIcon })
          .addTo(map)
          .bindPopup(`<strong>${florence.name}</strong><br/>${florence.tagline}`);
      }

      if (isolde.coordinates) {
        L.marker([isolde.coordinates.lat, isolde.coordinates.lng], { icon: defaultIcon })
          .addTo(map)
          .bindPopup(`<strong>${isolde.name}</strong><br/>${isolde.tagline}`);
      }

      mapInstanceRef.current = map;
    };

    loadMap();
  }, []);

  return (
    <section id="ubicacion" className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        <SectionHeading
          title="Ubicación"
          subtitle="En el corazón de Nerja, a pocos pasos de todo"
          label="Mapa"
        />
        <div
          ref={mapRef}
          className="w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-sm"
        />
      </div>
    </section>
  );
}
