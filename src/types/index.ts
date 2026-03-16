export interface PropertyImage {
  src: string;
  alt: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  capacity: number | null;
  bedrooms: number | null;
  beds: number | null;
  bathrooms: number | null;
  amenities: Amenity[];
  images: PropertyImage[];
  smoobuId: number;
  airbnbUrl: string;
  bookingUrl?: string;
  whatsappMessage: string;
  coordinates: { lat: number; lng: number } | null;
  host: string | null;
  reviewHighlight?: { text: string; author: string; rating: number };
}

export interface Amenity {
  name: string;
  icon: string;
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

export interface Review {
  id: string;
  text: string;
  author: string;
  platform: "airbnb" | "booking" | "google";
  rating: number;
  date: string;
  propertyId: string;
}

export interface NerjaSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: PropertyImage;
}
