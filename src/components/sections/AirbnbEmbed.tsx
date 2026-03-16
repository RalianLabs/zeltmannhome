import { Property } from "@/types";

interface AirbnbEmbedProps {
  property: Property;
}

export default function AirbnbEmbed({ property }: AirbnbEmbedProps) {
  return (
    <section className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        <div className="text-center mb-12">
          <p className="label mb-3">Reservas</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">
            Reserva en Airbnb
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <a
            href={property.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-sm border border-sand/20 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2 13h-4v-1h4v1zm1.43-3.57A5.003 5.003 0 0114 13h-4a5.003 5.003 0 01-1.43-1.57A4.98 4.98 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .97-.28 1.88-.57 2.43z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                {property.name} en Airbnb
              </h3>
              <p className="text-muted text-sm mb-6">
                Consulta disponibilidad, fotos y reseñas en nuestro perfil de Airbnb
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5A5F] text-white font-semibold text-sm group-hover:bg-[#e04e52] transition-colors">
                Ver en Airbnb
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
