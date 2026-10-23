export type GarmentCategory = 'all' | 'traditional' | 'modern' | 'bespoke' | 'accessories';

export interface GarmentItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'traditional' | 'modern' | 'bespoke' | 'accessories';
  price: number;
  currency: string;
  badge?: string;
  image: string;
  gallery: string[];
  description: string;
  fabricType: string;
  culturalOrigin: string;
  details: string[];
  availableSizes: string[];
  rating: number;
  reviewsCount: number;
  featured?: boolean;
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  collectionSeason: string;
  image: string;
  category: 'runway' | 'editorial' | 'celebration' | 'casual-chic';
  description: string;
  designerNotes: string;
}

export interface FabricHeritage {
  id: string;
  name: string;
  aka: string;
  origin: string;
  colorSymbolism: string;
  history: string;
  image: string;
  patterns: string[];
}

export interface BespokeFormData {
  fullName: string;
  email: string;
  phone: string;
  contactMethod: 'whatsapp' | 'phone' | 'email';
  garmentType: string;
  fabricPreference: string;
  occasion: string;
  measurementType: 'standard' | 'custom' | 'virtual_session';
  standardSize?: string;
  measurements?: {
    chestBust?: string;
    waist?: string;
    hips?: string;
    shoulderWidth?: string;
    sleeveLength?: string;
    garmentLength?: string;
  };
  eventDate?: string;
  notes?: string;
}

export interface BespokeEstimate {
  estimatedPriceMin: number;
  estimatedPriceMax: number;
  currency: string;
  turnaroundDays: number;
  fittingsIncluded: number;
  summary: string;
}
