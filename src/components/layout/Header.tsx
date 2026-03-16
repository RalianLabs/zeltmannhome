"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/florence", label: "Casa Florence" },
  { href: "/isolde", label: "Casa Isolde" },
  { href: "/nerja", label: "Descubre Nerja" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-solid border-b"
          : "nav-transparent"
      }`}
    >
      <div className="max-w-wide mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`font-serif text-xl font-bold transition-colors duration-500 ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          ZeltmannHome
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? isActive(link.href)
                    ? "text-navy"
                    : "text-navy/60 hover:text-navy"
                  : isActive(link.href)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/34609549664?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20vuestros%20apartamentos%20en%20Nerja."
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-sand text-navy hover:bg-sand-dark"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
            }`}
          >
            Reservar
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors duration-500 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-bg/95 backdrop-blur-md px-6 py-6 space-y-4 border-t border-sand/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-navy" : "text-navy/60 hover:text-navy"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/34609549664?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20vuestros%20apartamentos%20en%20Nerja."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold text-white bg-sand px-5 py-2.5 rounded-full text-center hover:bg-sand-dark transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Reservar por WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
}
