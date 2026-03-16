export interface PropertyImage {
  src: string;
  alt: string;
}

export interface Property {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: number | null;
  bedrooms: number | null;
  beds: number | null;
  bathrooms: number | null;
  amenities: string[];
  images: PropertyImage[];
  airbnbUrl: string;
  whatsappMessage: string;
  coordinates: { lat: number; lng: number } | null;
  host: string | null;
  reviewHighlight?: { text: string; author: string };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Experience {
  title: string;
  description: string;
  icon: string;
}
