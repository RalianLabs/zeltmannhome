import Image from "next/image";
import Button from "@/components/ui/Button";
import { florence } from "@/data/properties";
import { SITE } from "@/data/site";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[60vh] md:min-h-[72vh] flex items-end">
      <Image
        src={florence.images[0].src}
        alt={florence.images[0].alt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-12 md:pb-16">
        <p className="text-sand font-semibold text-sm uppercase tracking-widest mb-2">
          {SITE.tagline}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Casa Florence
          <span className="block text-2xl md:text-3xl font-normal text-white/80 mt-2">
            Céntrica en Nerja
          </span>
        </h1>
        <p className="text-white/80 text-lg max-w-xl mb-6">
          {florence.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="#propiedades" variant="solid">
            Ver propiedades
          </Button>
          <Button
            href={`${SITE.whatsappUrl}?text=${encodeURIComponent(florence.whatsappMessage)}`}
            variant="outline"
            external
          >
            Reserva directa
          </Button>
        </div>
      </div>
    </section>
  );
}
