import Image from "next/image";
import Link from "next/link";

const teaserImages = [
  {
    src: "/images/nerja/playa-burriana.webp",
    alt: "Playa de Burriana en Nerja",
    label: "Playas",
  },
  {
    src: "/images/nerja/pueblo.webp",
    alt: "Calles del centro de Nerja",
    label: "Pueblo",
  },
  {
    src: "/images/nerja/naturaleza.webp",
    alt: "Acantilados de Maro, Nerja",
    label: "Naturaleza",
  },
];

export default function NerjaTeaser() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-wide mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="label mb-3">El destino</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Nerja, el secreto de la Costa del Sol
            </h2>
            <p className="text-muted leading-loose mb-8 text-base">
              Playas de aguas cristalinas, acantilados que quitan el aliento,
              gastronomía mediterránea y más de 320 días de sol al año. Nerja es
              mucho más que un destino: es una forma de vivir.
            </p>
            <Link
              href="/nerja"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors duration-300"
            >
              Descubre Nerja
              <svg
                className="w-4 h-4 ml-2"
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
            </Link>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="gallery-item aspect-[3/4] col-span-1 row-span-2">
              <Image
                src={teaserImages[0].src}
                alt={teaserImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy/60 to-transparent">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  {teaserImages[0].label}
                </span>
              </div>
            </div>
            <div className="gallery-item aspect-square relative">
              <Image
                src={teaserImages[1].src}
                alt={teaserImages[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-navy/60 to-transparent">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  {teaserImages[1].label}
                </span>
              </div>
            </div>
            <div className="gallery-item aspect-square relative">
              <Image
                src={teaserImages[2].src}
                alt={teaserImages[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-navy/60 to-transparent">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  {teaserImages[2].label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
