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
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {property.name}
        </h1>
      </div>
    </section>
  );
}
