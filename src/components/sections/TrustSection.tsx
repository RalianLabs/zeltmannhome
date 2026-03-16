import { florence } from "@/data/properties";

export default function TrustSection() {
  const review = florence.reviewHighlight;

  return (
    <section className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Review */}
          <div className="flex flex-col justify-center">
            <p className="label mb-4">Lo que dicen nuestros huéspedes</p>
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {review && (
                <>
                  <blockquote className="font-serif text-xl md:text-2xl text-navy leading-relaxed mb-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <p className="text-muted text-sm">— {review.author}</p>
                </>
              )}
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
                    "En el centro de Nerja, a minutos a pie de playas, restaurantes y el Balcón de Europa.",
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
                    "Reserva directa = mejor precio. Sin recargos de plataformas externas.",
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
