import SectionHeading from "@/components/ui/SectionHeading";
import { florence, isolde } from "@/data/properties";

const specs = [
  { label: "Huéspedes", key: "capacity" as const },
  { label: "Habitaciones", key: "bedrooms" as const },
  { label: "Camas", key: "beds" as const },
  { label: "Baños", key: "bathrooms" as const },
];

export default function ComparisonSection() {
  return (
    <section id="comparativa" className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading
          title="Florence vs Isolde"
          subtitle="Compara y elige la que mejor se adapte a ti"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-sand/30">
                <th className="text-left py-3 pr-4 text-muted font-medium"></th>
                <th className="text-center py-3 px-4 font-serif text-lg text-navy">
                  {florence.name}
                </th>
                <th className="text-center py-3 px-4 font-serif text-lg text-navy">
                  {isolde.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec) => (
                <tr key={spec.key} className="border-b border-bg">
                  <td className="py-3 pr-4 text-muted font-medium">
                    {spec.label}
                  </td>
                  <td className="py-3 px-4 text-center text-navy">
                    {florence[spec.key] ?? "—"}
                  </td>
                  <td className="py-3 px-4 text-center text-navy">
                    {isolde[spec.key] ?? "Consultar"}
                  </td>
                </tr>
              ))}
              <tr className="border-b border-bg">
                <td className="py-3 pr-4 text-muted font-medium">
                  Amenidades
                </td>
                <td className="py-3 px-4 text-center text-navy">
                  {florence.amenities.length > 0
                    ? florence.amenities.join(", ")
                    : "—"}
                </td>
                <td className="py-3 px-4 text-center text-navy">
                  {isolde.amenities.length > 0
                    ? isolde.amenities.join(", ")
                    : "Consultar en Airbnb"}
                </td>
              </tr>
              <tr className="border-b border-bg">
                <td className="py-3 pr-4 text-muted font-medium">Host</td>
                <td className="py-3 px-4 text-center text-navy">
                  {florence.host ?? "—"}
                </td>
                <td className="py-3 px-4 text-center text-navy">
                  {isolde.host ?? "Consultar"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
