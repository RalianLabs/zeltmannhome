import type { Metadata } from "next";
import { isolde } from "@/data/properties";
import PropertyHero from "@/components/sections/PropertyHero";
import PropertyDetails from "@/components/sections/PropertyDetails";
import PhotoGallery from "@/components/sections/PhotoGallery";
import AirbnbEmbed from "@/components/sections/AirbnbEmbed";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { generateVacationRentalSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Casa Isolde — Tu refugio en Nerja",
  description: isolde.description,
  openGraph: {
    title: "Casa Isolde — Tu refugio en Nerja",
    description: isolde.description,
    images: [{ url: isolde.images[0].src }],
  },
};

export default function IsoldePage() {
  const schema = generateVacationRentalSchema(isolde);

  return (
    <>
      <PropertyHero property={isolde} />
      <ScrollReveal>
        <PropertyDetails property={isolde} />
      </ScrollReveal>
      <ScrollReveal>
        <PhotoGallery images={isolde.images} title="Galería de Casa Isolde" />
      </ScrollReveal>
      <ScrollReveal>
        <AirbnbEmbed property={isolde} />
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
