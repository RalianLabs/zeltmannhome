"use client";

import { Property } from "@/types";
import { SITE } from "@/data/site";

interface BookingSectionProps {
  property: Property;
}

export default function BookingSection({ property }: BookingSectionProps) {
  const iframeSrc = `https://login.smoobu.com/es/booking-tool/iframe/${SITE.smoobuAccountId}/${property.smoobuId}`;
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(property.whatsappMessage)}`;

  return (
    <section id="reserva" className="section-padding">
      <div className="max-w-wide mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="label mb-3">Reserva directa</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
            Reserva {property.name}
          </h2>
          {/* Best price banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sand/20 border border-sand/30">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-navy">
              Mejor precio — reserva directa sin comisiones
            </span>
          </div>
        </div>

        {/* Smoobu iframe */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-sand/20 overflow-hidden">
            <iframe
              src={iframeSrc}
              title={`Calendario de reservas - ${property.name}`}
              className="w-full border-0"
              style={{ height: "600px", minHeight: "500px" }}
              loading="lazy"
              allow="payment"
            />
          </div>
        </div>

        {/* Secondary links */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp for questions */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp text-white font-semibold text-sm hover:brightness-110 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              ¿Dudas? Escríbenos por WhatsApp
            </a>

            {/* Platform links */}
            <div className="flex items-center gap-3 text-sm text-muted">
              <span>También en</span>
              <a
                href={property.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#FF5A5F] hover:underline font-medium"
              >
                Airbnb
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              {property.bookingUrl && (
                <>
                  <span>|</span>
                  <a
                    href={property.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#003580] hover:underline font-medium"
                  >
                    Booking.com
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
