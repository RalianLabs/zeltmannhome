import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6 pt-20">
      <div className="text-center">
        <p className="label mb-4">Página no encontrada</p>
        <h1 className="font-serif text-7xl md:text-8xl font-bold text-navy mb-6">404</h1>
        <p className="text-muted text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Esta página no existe. Vuelve al inicio y descubre nuestros
          apartamentos en Nerja.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3.5 bg-sand text-navy font-semibold rounded-full hover:bg-sand-dark transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
