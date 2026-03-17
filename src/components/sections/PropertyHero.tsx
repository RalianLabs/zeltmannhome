import Image from "next/image";
import { Property } from "@/types";

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end">
      <Image
        src={property.images[0].src}
        alt={property.images[0].alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 w-full max-w-wide mx-auto px-6 pb-12 md:pb-16">
        <p className="label text-sand mb-3">{property.tagline}</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {property.name}
        </h1>
        <a
          href="#reserva"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-sand text-navy font-semibold text-sm hover:bg-sand-dark transition-all duration-300 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Reservar ahora
        </a>
      </div>
    </section>
  );
}
