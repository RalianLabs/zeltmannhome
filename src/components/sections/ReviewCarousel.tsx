"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Review } from "@/types";
import { reviews as allReviews } from "@/data/reviews";

interface ReviewCarouselProps {
  propertyId?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: Review["platform"] }) {
  const config = {
    airbnb: { label: "Airbnb", bg: "bg-[#FF5A5F]/10", text: "text-[#FF5A5F]" },
    booking: { label: "Booking.com", bg: "bg-[#003580]/10", text: "text-[#003580]" },
    google: { label: "Google", bg: "bg-[#4285F4]/10", text: "text-[#4285F4]" },
  };
  const c = config[platform];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}

export default function ReviewCarousel({ propertyId }: ReviewCarouselProps) {
  const reviews = propertyId
    ? allReviews.filter((r) => r.propertyId === propertyId)
    : allReviews;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 320;
    el.scrollBy({ left: direction === "left" ? -cardWidth - 16 : cardWidth + 16, behavior: "smooth" });
  }, []);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 5000);
  }, [scroll]);

  useEffect(() => {
    updateScrollState();
    resetAutoplay();
    const el = scrollRef.current;
    el?.addEventListener("scroll", updateScrollState, { passive: true });
    return () => {
      el?.removeEventListener("scroll", updateScrollState);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [updateScrollState, resetAutoplay]);

  if (reviews.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => { if (autoplayRef.current) clearInterval(autoplayRef.current); }}
      onMouseLeave={resetAutoplay}
    >
      {/* Carousel track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`[data-review-carousel]::-webkit-scrollbar { display: none; }`}</style>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] snap-start"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/15 h-full flex flex-col">
              <StarRating rating={review.rating} />
              <p className="text-navy/80 text-sm leading-relaxed mt-4 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-sand/10">
                <div>
                  <p className="font-semibold text-navy text-sm">{review.author}</p>
                  <p className="text-muted text-xs mt-0.5">{review.date}</p>
                </div>
                <PlatformBadge platform={review.platform} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {reviews.length > 1 && (
        <>
          <button
            onClick={() => { scroll("left"); resetAutoplay(); }}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white shadow-md border border-sand/20 flex items-center justify-center transition-opacity ${canScrollLeft ? "opacity-100 hover:bg-cream" : "opacity-0 pointer-events-none"}`}
            aria-label="Anterior reseña"
          >
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => { scroll("right"); resetAutoplay(); }}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white shadow-md border border-sand/20 flex items-center justify-center transition-opacity ${canScrollRight ? "opacity-100 hover:bg-cream" : "opacity-0 pointer-events-none"}`}
            aria-label="Siguiente reseña"
          >
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
