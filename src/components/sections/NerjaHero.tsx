import Image from "next/image";

export default function NerjaHero() {
  return (
    <section className="relative h-[80vh] min-h-[550px] flex items-end">
      <Image
        src="/images/nerja/hero-nerja.webp"
        alt="Vista panorámica de Nerja y el Mediterráneo"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 w-full max-w-wide mx-auto px-6 pb-16 md:pb-24">
        <p className="label text-sand mb-4">Costa del Sol, Málaga</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
          Descubre Nerja
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl font-light leading-relaxed">
          El secreto mejor guardado de la Costa del Sol
        </p>
      </div>
    </section>
  );
}
