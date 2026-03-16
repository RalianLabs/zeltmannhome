import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropertyPreview() {
  return (
    <section id="propiedades" className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        <div className="text-center mb-16">
          <p className="label mb-3">Nuestros apartamentos</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Elige tu casa en Nerja
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/${property.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={property.images[0].src}
                  alt={property.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="px-1">
                <p className="label mb-2">{property.tagline}</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
                  {property.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-md mb-4">
                  {property.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                  Descubrir
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
