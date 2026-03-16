import HomeHero from "@/components/sections/HomeHero";
import PropertyPreview from "@/components/sections/PropertyPreview";
import NerjaTeaser from "@/components/sections/NerjaTeaser";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { generateVacationRentalSchema } from "@/lib/schema";
import { florence, isolde } from "@/data/properties";

export default function Home() {
  const schemas = [florence, isolde].map(generateVacationRentalSchema);

  return (
    <>
      <HomeHero />
      <ScrollReveal>
        <PropertyPreview />
      </ScrollReveal>
      <ScrollReveal>
        <NerjaTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>
      <ContactSection />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
