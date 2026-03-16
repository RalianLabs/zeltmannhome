import type { Metadata } from "next";
import NerjaHero from "@/components/sections/NerjaHero";
import NerjaContent from "@/components/sections/NerjaContent";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Descubre Nerja — Playas, cultura y gastronomía",
  description:
    "Nerja es un pueblo costero en Málaga con playas cristalinas, el Balcón de Europa, gastronomía mediterránea y más de 320 días de sol al año. Descubre por qué Nerja es el destino perfecto para tus vacaciones.",
  openGraph: {
    title: "Descubre Nerja — Playas, cultura y gastronomía",
    description:
      "Nerja: playas cristalinas, Balcón de Europa, gastronomía mediterránea y 320 días de sol al año.",
    images: [{ url: "/images/nerja/hero-nerja.webp" }],
  },
};

export default function NerjaPage() {
  return (
    <>
      <NerjaHero />
      <ScrollReveal>
        <NerjaContent />
      </ScrollReveal>

      {/* CTA to properties */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="label mb-3">Tu estancia</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
            Vive Nerja desde nuestras casas
          </h2>
          <p className="text-muted text-base leading-loose mb-10">
            Dos apartamentos con encanto en el centro de Nerja, perfectos para
            descubrir todo lo que este pueblo mágico tiene para ofrecerte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/florence"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-sand text-navy font-semibold text-sm hover:bg-sand-dark transition-colors duration-300"
            >
              Casa Florence
            </Link>
            <Link
              href="/isolde"
              className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-navy/15 text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-all duration-300"
            >
              Casa Isolde
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
