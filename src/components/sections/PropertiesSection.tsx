import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/ui/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertiesSection() {
  return (
    <section id="propiedades" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Nuestras propiedades"
          subtitle="Dos apartamentos con encanto en el corazón de Nerja"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
