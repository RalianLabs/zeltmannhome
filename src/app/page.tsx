import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroSection from "@/components/sections/HeroSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FAQSection from "@/components/sections/FAQSection";
import MapWrapper from "@/components/sections/MapWrapper";
import ContactSection from "@/components/sections/ContactSection";
import { generateVacationRentalSchema } from "@/lib/schema";
import { florence, isolde } from "@/data/properties";

export default function Home() {
  const schemas = [florence, isolde].map(generateVacationRentalSchema);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal>
          <PropertiesSection />
        </ScrollReveal>
        <ScrollReveal>
          <ComparisonSection />
        </ScrollReveal>
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal>
          <MapWrapper />
        </ScrollReveal>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />

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
