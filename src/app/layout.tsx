import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZeltmannHome — Alquiler vacacional en Nerja",
    template: "%s | ZeltmannHome",
  },
  description:
    "Apartamentos boutique en Nerja, Málaga. Casa Florence y Casa Isolde: estancias acogedoras cerca de playas y miradores de la Costa del Sol.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "ZeltmannHome",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
