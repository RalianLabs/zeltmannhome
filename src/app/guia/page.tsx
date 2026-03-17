import type { Metadata } from "next";
import GuideContent from "@/components/sections/GuideContent";
import GuideChatbot from "@/components/sections/GuideChatbot";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Guía del huésped — ZeltmannHome Nerja",
  description:
    "Guía completa para huéspedes de ZeltmannHome: check-in, WiFi, restaurantes, playas, excursiones y emergencias en Nerja.",
  openGraph: {
    title: "Guía del huésped — ZeltmannHome Nerja",
    description:
      "Todo lo que necesitas saber para disfrutar tu estancia en Nerja.",
  },
};

export default function GuiaPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sand text-sm font-semibold tracking-widest uppercase mb-4">
            ZeltmannHome
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Guía del huésped
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Todo lo que necesitas para disfrutar al máximo tu estancia en Nerja
          </p>
        </div>
      </section>

      <ScrollReveal>
        <GuideContent />
      </ScrollReveal>

      <ContactSection />

      <GuideChatbot />
    </>
  );
}
