"use client";

import { useState } from "react";
import Image from "next/image";
import { PropertyImage } from "@/types";
import Lightbox from "@/components/ui/Lightbox";

interface PhotoGalleryProps {
  images: PropertyImage[];
  title?: string;
}

const MAX_VISIBLE = 5;

export default function PhotoGallery({
  images,
  title = "Galería",
}: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const visibleImages = images.slice(0, MAX_VISIBLE);
  const remainingCount = images.length - MAX_VISIBLE;

  return (
    <>
      <section className="section-padding bg-cream">
        <div className="max-w-wide mx-auto px-6">
          <div className="text-center mb-12">
            <p className="label mb-3">Fotos</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {visibleImages.map((image, i) => (
              <div
                key={i}
                className={`gallery-item relative cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
                }`}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />
                {/* Badge on last visible image if there are more */}
                {i === visibleImages.length - 1 && remainingCount > 0 && (
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center transition-opacity hover:bg-black/50">
                    <span className="text-white font-semibold text-sm md:text-base">
                      Ver {images.length} fotos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
