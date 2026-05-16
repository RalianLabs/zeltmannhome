"use client";

import { useState } from "react";

const languages = {
  es: {
    flag: "🇪🇸",
    label: "Español",
    tagline: "Apartamentos en Nerja",
    cta: "Escanea y descubre nuestras casas",
    print: "Imprimir / Guardar PDF",
  },
  en: {
    flag: "🇬🇧",
    label: "English",
    tagline: "Holiday apartments in Nerja",
    cta: "Scan and discover our homes",
    print: "Print / Save as PDF",
  },
  de: {
    flag: "🇩🇪",
    label: "Deutsch",
    tagline: "Ferienwohnungen in Nerja",
    cta: "Scannen und unsere Häuser entdecken",
    print: "Drucken / Als PDF speichern",
  },
  fr: {
    flag: "🇫🇷",
    label: "Français",
    tagline: "Appartements de vacances à Nerja",
    cta: "Scannez et découvrez nos maisons",
    print: "Imprimer / Enregistrer en PDF",
  },
} as const;

type Lang = keyof typeof languages;

export default function QRPage() {
  const [lang, setLang] = useState<Lang>("es");
  const t = languages[lang];

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-8 print:p-0">
      <div className="flex flex-col items-center gap-6 max-w-sm w-full">

        {/* Selector de idioma — oculto al imprimir */}
        <div className="print:hidden flex gap-2 flex-wrap justify-center">
          {(Object.keys(languages) as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                lang === l
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy border-navy/20 hover:border-navy/50"
              }`}
            >
              <span>{languages[l].flag}</span>
              <span>{languages[l].label}</span>
            </button>
          ))}
        </div>

        {/* Card imprimible */}
        <div className="w-full bg-white border border-sand/30 rounded-3xl shadow-lg p-10 flex flex-col items-center gap-6 print:shadow-none print:border-none print:rounded-none">
          {/* Logo / nombre */}
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-navy tracking-tight">
              ZeltmannHome
            </p>
            <p className="text-sm text-muted mt-1">{t.tagline}</p>
          </div>

          {/* QR */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/qr-zeltmannhome.svg"
            alt="QR ZeltmannHome Nerja"
            width={224}
            height={224}
            className="w-56 h-56"
          />

          {/* Llamada a la acción */}
          <div className="text-center space-y-1">
            <p className="font-semibold text-navy text-sm">{t.cta}</p>
            <p className="text-xs text-muted">zeltmannhome-nerja.vercel.app</p>
          </div>

          <div className="w-12 h-px bg-sand/40" />

          {/* Flag del idioma activo */}
          <span className="text-2xl">{t.flag}</span>
        </div>

        {/* Botón imprimir */}
        <button
          onClick={() => window.print()}
          className="print:hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors"
        >
          {t.print}
        </button>
      </div>
    </main>
  );
}
