import ReviewCarousel from "@/components/sections/ReviewCarousel";

export default function TrustSection() {
  return (
    <section className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        {/* Reviews carousel */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="label mb-4">Reseñas verificadas</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
              Lo que dicen nuestros huéspedes
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              Opiniones reales de huéspedes que han disfrutado de nuestros
              apartamentos en Nerja.
            </p>
          </div>
          <ReviewCarousel />
        </div>

        {/* Trust points */}
        <div className="max-w-3xl mx-auto">
          <p className="label mb-8 text-center">¿Por qué ZeltmannHome?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trato directo",
                description:
                  "Sin intermediarios, sin comisiones ocultas. Hablas directamente con nosotros.",
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
                  "Centro de Nerja. A minutos de playas, restaurantes y el Balcón de Europa.",
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
                  "Reserva directa y ahorra frente a cualquier plataforma. Sin recargos.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
            ].map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-sand/20 flex items-center justify-center mx-auto mb-4">
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
                <h3 className="font-semibold text-navy mb-1">{point.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
