import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "QR Code — ZeltmannHome Nerja",
  description: "Escanea el código QR para visitar la web de ZeltmannHome en Nerja.",
  robots: { index: false },
};

export default function QRPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-8 print:p-0">
      <div className="flex flex-col items-center gap-8 max-w-sm w-full">
        {/* Card imprimible */}
        <div className="w-full bg-white border border-sand/30 rounded-3xl shadow-lg p-10 flex flex-col items-center gap-6 print:shadow-none print:border-none print:rounded-none">
          {/* Logo / nombre */}
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-navy tracking-tight">
              ZeltmannHome
            </p>
            <p className="text-sm text-muted mt-1">Apartamentos en Nerja</p>
          </div>

          {/* QR */}
          <div className="w-56 h-56 relative">
            <Image
              src="/qr-zeltmannhome.svg"
              alt="Código QR que lleva a la web de ZeltmannHome Nerja"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Llamada a la acción */}
          <div className="text-center space-y-1">
            <p className="font-semibold text-navy text-sm">
              Escanea y descubre nuestras casas
            </p>
            <p className="text-xs text-muted">
              zeltmannhome-nerja.vercel.app
            </p>
          </div>

          {/* Separador decorativo */}
          <div className="w-12 h-px bg-sand/40" />

          {/* Flags / idiomas */}
          <div className="flex gap-3 text-lg">
            <span title="Español">🇪🇸</span>
            <span title="English">🇬🇧</span>
            <span title="Deutsch">🇩🇪</span>
            <span title="Français">🇫🇷</span>
          </div>
        </div>

        {/* Botón de impresión — oculto al imprimir */}
        <button
          onClick={() => window.print()}
          className="print:hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors"
        >
          Imprimir / Guardar PDF
        </button>

        {/* Descarga SVG */}
        <a
          href="/qr-zeltmannhome.svg"
          download="qr-zeltmannhome.svg"
          className="print:hidden text-xs text-muted underline underline-offset-2 hover:text-navy transition-colors"
        >
          Descargar SVG (alta resolución)
        </a>
      </div>
    </main>
  );
}
