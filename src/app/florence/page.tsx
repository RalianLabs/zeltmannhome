import type { Metadata } from "next";
import { florence } from "@/data/properties";
import PropertyHero from "@/components/sections/PropertyHero";
import PropertyDetails from "@/components/sections/PropertyDetails";
import PhotoGallery from "@/components/sections/PhotoGallery";
import AirbnbEmbed from "@/components/sections/AirbnbEmbed";
import FAQSection from "@/components/sections/FAQSection";
import MapWrapper from "@/components/sections/MapWrapper";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { generateVacationRentalSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Casa Florence — Apartamento céntrico en Nerja",
  description: florence.description,
  openGraph: {
    title: "Casa Florence — Apartamento céntrico en Nerja",
    description: florence.description,
    images: [{ url: florence.images[0].src }],
  },
};

export default function FlorencePage() {
  const schema = generateVacationRentalSchema(florence);

  return (
    <>
      <PropertyHero property={florence} />
      <ScrollReveal>
        <PropertyDetails property={florence} />
      </ScrollReveal>
      <ScrollReveal>
        <PhotoGallery images={florence.images} title="Galería de Casa Florence" />
      </ScrollReveal>
      <ScrollReveal>
        <AirbnbEmbed property={florence} />
      </ScrollReveal>
      <ScrollReveal>
        <MapWrapper />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
