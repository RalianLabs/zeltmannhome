import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-navy mb-4">404</h1>
        <p className="text-muted text-lg mb-8">
          Esta página no existe. Vuelve al inicio y descubre nuestros
          apartamentos en Nerja.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-sand text-navy font-semibold rounded-lg hover:bg-sand-dark transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
