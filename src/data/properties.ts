import { Property } from "@/types";

export const florence: Property = {
  id: "florence",
  slug: "florence",
  name: "Casa Florence",
  tagline: "Céntrica en Nerja",
  description:
    "Apartamento acogedor y luminoso en Nerja, situado en una zona tranquila y de fácil acceso, a pocos pasos de playas, calas escondidas y los miradores más bonitos de la Costa del Sol.",
  longDescription:
    "Casa Florence es un apartamento cuidadosamente decorado que combina el encanto mediterráneo con todas las comodidades modernas. Situado en una calle tranquila del centro de Nerja, te permite llegar a pie a las mejores playas, restaurantes y al emblemático Balcón de Europa en pocos minutos. Ideal para parejas y familias pequeñas que buscan una estancia auténtica, lejos del turismo masivo pero cerca de todo.",
  capacity: 6,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  amenities: [
    { name: "Cocina equipada", icon: "kitchen" },
    { name: "WiFi de alta velocidad", icon: "wifi" },
    { name: "TV de pantalla plana", icon: "tv" },
    { name: "Lavadora", icon: "washer" },
    { name: "Aire acondicionado", icon: "ac" },
    { name: "Ropa de cama premium", icon: "bed" },
    { name: "Toallas incluidas", icon: "towel" },
    { name: "Secador de pelo", icon: "hairdryer" },
  ],
  images: [
    {
      src: "/images/properties/florence/hero.webp",
      alt: "Interior luminoso de Casa Florence en Nerja",
    },
    {
      src: "/images/properties/florence/salon.webp",
      alt: "Salón acogedor con sofá y luz natural en Casa Florence",
    },
    {
      src: "/images/properties/florence/cocina.webp",
      alt: "Cocina totalmente equipada en Casa Florence",
    },
    {
      src: "/images/properties/florence/dormitorio.webp",
      alt: "Dormitorio principal con ropa de cama premium en Casa Florence",
    },
    {
      src: "/images/properties/florence/bano.webp",
      alt: "Baño moderno y limpio en Casa Florence",
    },
    {
      src: "/images/properties/florence/terraza.webp",
      alt: "Terraza con vistas en Casa Florence, Nerja",
    },
  ],
  smoobuId: 2897896,
  airbnbUrl: "https://es.airbnb.com/rooms/1492273417273197297",
  whatsappMessage:
    "Hola, me gustaría reservar Casa Florence en Nerja. ¿Qué disponibilidad tenéis? [web]",
  coordinates: { lat: 36.7515, lng: -3.8777 },
  host: "Mike",
};

export const isolde: Property = {
  id: "isolde",
  slug: "isolde",
  name: "Casa Isolde",
  tagline: "Tu refugio en Nerja",
  description:
    "Segundo apartamento de la familia Zeltmann en Nerja. Cómodo, bien situado y con todo lo necesario para unas vacaciones perfectas en la Costa del Sol.",
  longDescription:
    "Casa Isolde es nuestro segundo hogar en Nerja, pensado para quienes buscan tranquilidad sin renunciar a estar cerca de todo. Un espacio cómodo y funcional donde sentirte como en casa mientras disfrutas del mejor clima de Europa y la magia de la Costa del Sol oriental.",
  capacity: 4,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  amenities: [
    { name: "Cocina equipada", icon: "kitchen" },
    { name: "WiFi de alta velocidad", icon: "wifi" },
    { name: "TV de pantalla plana", icon: "tv" },
    { name: "Lavadora", icon: "washer" },
    { name: "Aire acondicionado", icon: "ac" },
    { name: "Ropa de cama premium", icon: "bed" },
    { name: "Toallas incluidas", icon: "towel" },
    { name: "Secador de pelo", icon: "hairdryer" },
  ],
  images: [
    {
      src: "/images/properties/isolde/hero.webp",
      alt: "Interior de Casa Isolde en Nerja",
    },
    {
      src: "/images/properties/isolde/salon.webp",
      alt: "Salón luminoso y confortable en Casa Isolde",
    },
    {
      src: "/images/properties/isolde/cocina.webp",
      alt: "Cocina totalmente equipada en Casa Isolde",
    },
    {
      src: "/images/properties/isolde/dormitorio.webp",
      alt: "Dormitorio acogedor con ropa de cama premium en Casa Isolde",
    },
    {
      src: "/images/properties/isolde/bano.webp",
      alt: "Baño moderno en Casa Isolde",
    },
    {
      src: "/images/properties/isolde/terraza.webp",
      alt: "Terraza con vistas en Casa Isolde, Nerja",
    },
  ],
  smoobuId: 2897901,
  airbnbUrl: "https://es.airbnb.com/rooms/1438473117240724145",
  whatsappMessage:
    "Hola, me gustaría reservar Casa Isolde en Nerja. ¿Qué disponibilidad tenéis? [web]",
  coordinates: { lat: 36.7515, lng: -3.8777 },
  host: "Mike",
};

export const properties: Property[] = [florence, isolde];
