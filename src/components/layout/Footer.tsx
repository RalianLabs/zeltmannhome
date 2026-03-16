import Link from "next/link";
import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-wide mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              {SITE.name}
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              Alquiler vacacional en Nerja, Costa del Sol. Trato directo,
              sin intermediarios.
            </p>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-label text-sand mb-4">
              Propiedades
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/florence"
                  className="text-sm hover:text-white transition-colors"
                >
                  Casa Florence
                </Link>
              </li>
              <li>
                <Link
                  href="/isolde"
                  className="text-sm hover:text-white transition-colors"
                >
                  Casa Isolde
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-label text-sand mb-4">
              Explorar
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/nerja"
                  className="text-sm hover:text-white transition-colors"
                >
                  Descubre Nerja
                </Link>
              </li>
              <li>
                <Link
                  href="https://es.airbnb.com/rooms/1492273417273197297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Florence en Airbnb
                </Link>
              </li>
              <li>
                <Link
                  href="https://es.airbnb.com/rooms/1438473117240724145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Isolde en Airbnb
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-label text-sand mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  +34 609 549 664
                </Link>
              </li>
              <li className="text-sm text-white/40">Nerja, Málaga, España</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30">
            Nerja, Costa del Sol — Málaga, España
          </p>
        </div>
      </div>
    </footer>
  );
}
