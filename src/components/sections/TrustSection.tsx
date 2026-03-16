import Link from "next/link";
import { florence } from "@/data/properties";

export default function TrustSection() {
  return (
    <section className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Reviews — links to real Airbnb reviews */}
          <div className="flex flex-col justify-center">
            <p className="label mb-4">Reseñas verificadas</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6">
              Lo que dicen nuestros huéspedes
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Nuestras reseñas están verificadas por Airbnb. Consulta las
              opiniones reales de huéspedes anteriores en nuestros perfiles.
            </p>
            <div className="space-y-3">
              <Link
                href={`${florence.airbnbUrl}#reviews`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 bg-cream rounded-xl hover:bg-sand/15 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-navy text-sm">Casa Florence</p>
                  <p className="text-muted text-xs mt-0.5">Ver reseñas en Airbnb</p>
                </div>
                <svg
                  className="w-5 h-5 text-muted group-hover:text-navy transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <Link
                href="https://es.airbnb.com/rooms/1438473117240724145#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 bg-cream rounded-xl hover:bg-sand/15 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-navy text-sm">Casa Isolde</p>
                  <p className="text-muted text-xs mt-0.5">Ver reseñas en Airbnb</p>
                </div>
                <svg
                  className="w-5 h-5 text-muted group-hover:text-navy transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Trust points */}
          <div className="flex flex-col justify-center">
            <p className="label mb-6">¿Por qué ZeltmannHome?</p>
            <div className="space-y-8">
              {[
                {
                  title: "Trato directo",
                  description:
                    "Sin plataformas, sin comisiones ocultas. Hablas directamente con nosotros por WhatsApp.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  ),
                },
                {
                  title: "Ubicación privilegiada",
                  description:
                    "Calle Joaquín Herrera, en el centro de Nerja. A minutos a pie de playas, restaurantes y el Balcón de Europa.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  ),
                },
                {
                  title: "Mejor precio garantizado",
                  description:
                    "Reserva por WhatsApp y obtén un precio mejor que en cualquier plataforma. Sin recargos ni comisiones.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                },
              ].map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sand/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {point.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">
                      {point.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
