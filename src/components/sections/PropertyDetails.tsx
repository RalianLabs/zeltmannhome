import { Property } from "@/types";
import { SITE } from "@/data/site";

interface PropertyDetailsProps {
  property: Property;
}

function AmenityIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    kitchen: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm3 6h12M9 3v6m6-6v6M6 15h4v6H6v-6z" />
    ),
    wifi: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
    ),
    tv: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    washer: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm4 3h.01M12 3h.01M12 16a4 4 0 100-8 4 4 0 000 8z" />
    ),
    ac: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
    ),
    bed: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-4 9 4M3 7v3h18V7M6 14h.01M18 14h.01" />
    ),
    towel: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18h14V3M5 3h14M5 9h14M9 3v6M15 3v6" />
    ),
    hairdryer: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    ),
  };

  return (
    <svg
      className="w-5 h-5 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      {icons[icon] || (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      )}
    </svg>
  );
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(property.whatsappMessage)}`;

  return (
    <section className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6">
              Sobre {property.name}
            </h2>
            <p className="text-muted leading-loose text-base mb-10">
              {property.longDescription}
            </p>

            {/* Specs */}
            {property.capacity && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                  { label: "Huéspedes", value: property.capacity, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                  { label: "Dormitorios", value: property.bedrooms, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { label: "Camas", value: property.beds, icon: "M4 12V7a2 2 0 012-2h12a2 2 0 012 2v5M2 12h20v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5zM6 8h.01M18 8h.01" },
                  { label: "Baños", value: property.bathrooms, icon: "M12 3v18m-4.5-5.5h9M7 3h10v4a5 5 0 01-10 0V3z" },
                ].filter(s => s.value).map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-cream rounded-xl p-5 text-center"
                  >
                    <svg
                      className="w-6 h-6 text-gold mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={spec.icon} />
                    </svg>
                    <p className="font-serif text-2xl font-bold text-navy">
                      {spec.value}
                    </p>
                    <p className="text-muted text-xs uppercase tracking-wider mt-1">
                      {spec.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <div>
                <h3 className="font-serif text-xl font-bold text-navy mb-6">
                  Comodidades
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-center gap-3 py-3 px-4 rounded-lg bg-cream"
                    >
                      <AmenityIcon icon={amenity.icon} />
                      <span className="text-sm text-navy">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {property.amenities.length === 0 && (
              <div className="bg-cream rounded-xl p-8 text-center">
                <p className="text-muted text-sm">
                  Estamos preparando la información detallada de esta propiedad.
                  Contacta por WhatsApp para más detalles.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* CTA card */}
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="font-serif text-xl font-bold text-navy mb-2">
                  Reserva {property.name}
                </h3>
                <p className="text-muted text-sm mb-6">
                  Contacta directamente para obtener el mejor precio.
                </p>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-whatsapp text-white font-semibold text-sm hover:brightness-110 transition-all duration-300 mb-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Reservar por WhatsApp
                </a>

                <a
                  href={property.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border-2 border-navy/15 text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-all duration-300"
                >
                  Ver en Airbnb
                </a>
              </div>

              {/* Reviews link */}
              <a
                href={`${property.airbnbUrl}#reviews`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
                  </svg>
                  <span className="text-sm font-semibold text-navy">Reseñas en Airbnb</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Consulta las opiniones verificadas de huéspedes anteriores
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-medium text-navy/60 group-hover:text-navy transition-colors">
                  Ver reseñas
                  <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>

              {/* Best price nudge */}
              <div className="bg-sand/10 rounded-xl px-5 py-4 text-center">
                <p className="text-xs text-navy/70 leading-relaxed">
                  <strong className="text-gold">Mejor precio por WhatsApp</strong> — reserva
                  directa y ahorra frente a plataformas
                </p>
              </div>

              {/* Host */}
              {property.host && (
                <div className="text-center py-4">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    Tu anfitrión
                  </p>
                  <p className="font-serif text-lg font-bold text-navy">
                    {property.host}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
