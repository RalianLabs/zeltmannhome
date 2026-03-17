import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Reserva confirmada — ZeltmannHome Nerja",
  description:
    "Tu reserva en ZeltmannHome Nerja ha sido confirmada. Recibirás un email con todos los detalles de tu estancia.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReservaConfirmadaPage() {
  const whatsappUrl = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hola, acabo de confirmar mi reserva en ZeltmannHome Nerja y tengo una pregunta."
  )}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">

        {/* Check icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-sand/20 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <p className="text-sand text-sm font-semibold tracking-widest uppercase mb-3">
          ZeltmannHome
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-5">
          ¡Reserva confirmada!
        </h1>
        <p className="text-navy/80 text-base leading-loose mb-3">
          Hemos recibido tu reserva correctamente. En breve recibirás un correo electrónico con todos los detalles de tu estancia.
        </p>
        <p className="text-muted text-sm leading-relaxed mb-10">
          Si tienes alguna pregunta o necesitas ayuda antes de tu llegada, estamos disponibles por WhatsApp. También puedes consultar nuestra guía del huésped para preparar tu visita a Nerja.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-whatsapp text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-300"
          >
            {/* WhatsApp icon */}
            <svg
              className="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.5.5 0 0 0 .614.614l5.783-1.516A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.374l-.36-.213-3.733.978.998-3.645-.234-.374A9.818 9.818 0 1 1 12 21.818z" />
            </svg>
            Escribir por WhatsApp
          </Link>
          <Link
            href="/guia"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-navy/15 text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-all duration-300"
          >
            Ver guía del huésped
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-navy/10 pt-8">
          <p className="text-muted text-sm mb-4">
            ¿Quieres volver al inicio?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver a ZeltmannHome
          </Link>
        </div>

      </div>
    </div>
  );
}
