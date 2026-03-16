import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end">
      <Image
        src="/images/nerja/hero-home.webp"
        alt="Vista panorámica de la costa de Nerja, Costa del Sol"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 w-full max-w-wide mx-auto px-6 pb-16 md:pb-24">
        <p className="label text-sand mb-4">Costa del Sol, Málaga</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Vive Nerja
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
          Apartamentos con encanto en uno de los pueblos más bonitos del
          Mediterráneo. Trato directo, sin intermediarios.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#propiedades"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-sand text-navy font-semibold text-sm hover:bg-sand-dark transition-colors duration-300"
          >
            Descubre nuestras casas
          </Link>
          <Link
            href="/nerja"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm border border-white/25 hover:bg-white/20 transition-colors duration-300"
          >
            Explorar Nerja
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
