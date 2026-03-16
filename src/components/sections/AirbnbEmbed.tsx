import { Property } from "@/types";
import { SITE } from "@/data/site";

interface AirbnbEmbedProps {
  property: Property;
}

export default function AirbnbEmbed({ property }: AirbnbEmbedProps) {
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(property.whatsappMessage)}`;

  return (
    <section className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        <div className="text-center mb-12">
          <p className="label mb-3">Reservas</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">
            Reserva {property.name}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* Airbnb card */}
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

          {/* Best price WhatsApp nudge */}
          <div className="bg-cream rounded-2xl p-6 text-center border border-sand/15">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-label text-gold">
                Mejor precio garantizado
              </span>
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-sm text-navy/80 mb-4">
              Reserva directamente por WhatsApp y obtén un <strong>precio mejor que en plataformas</strong>. Sin comisiones, trato directo con nosotros.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp text-white font-semibold text-sm hover:brightness-110 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
