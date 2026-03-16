import Link from "next/link";
import { SITE } from "@/data/site";
import { properties } from "@/data/properties";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              {SITE.name}
            </h3>
            <p className="text-sm text-white/60">
              {SITE.tagline}
            </p>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Propiedades
            </h4>
            <ul className="space-y-2">
              {properties.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {p.name} en Airbnb
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <Link
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              WhatsApp: +34 609 549 664
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
