import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createWhatsAppUrl,
  buildProductWhatsAppMessage,
  filterCollection,
  calculateBespokeEstimate,
  validateBespokeForm,
  WHATSAPP_PHONE_NUMBER,
} from './fashion';
import { GarmentItem, BespokeFormData } from '../types/fashion';

const mockGarments: GarmentItem[] = [
  {
    id: 'g1',
    title: 'The Sovereign Agbada Three-Piece Set',
    subtitle: 'Regal Yoruba royal ceremonial robe',
    category: 'traditional',
    price: 340,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    gallery: [],
    description: 'Triple-stitched hand embroidery on emerald green damask.',
    fabricType: 'Damask & Aso-Oke',
    culturalOrigin: 'Nigeria (Yoruba)',
    details: ['Hand embroidered', 'Dry clean only'],
    availableSizes: ['M', 'L', 'XL'],
    rating: 4.9,
    reviewsCount: 38,
  },
  {
    id: 'g2',
    title: 'Modern Kente Peplum Blazer & Trouser',
    subtitle: 'High-fashion corporate boardroom silhouette',
    category: 'modern',
    price: 260,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    gallery: [],
    description: 'Structured fit blending Ghanaian woven accents with wool crepe.',
    fabricType: 'Authentic Bonwire Kente & Crepe',
    culturalOrigin: 'Ghana (Ashanti)',
    details: ['Structured shoulder pads', 'Gold-plated buttons'],
    availableSizes: ['XS', 'S', 'M', 'L'],
    rating: 5.0,
    reviewsCount: 42,
  },
  {
    id: 'g3',
    title: 'Bespoke Royal Coronation Kaftan',
    subtitle: 'Custom tailored senegalese boubou silhouette',
    category: 'bespoke',
    price: 410,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    gallery: [],
    description: 'Made-to-measure brocade with intricate neckline corded needlework.',
    fabricType: 'Bazin Riche Brocade',
    culturalOrigin: 'Senegal / Mali',
    details: ['Bespoke fittings', 'Custom monogram'],
    availableSizes: ['Custom Fitting'],
    rating: 4.9,
    reviewsCount: 19,
  },
];

test('createWhatsAppUrl creates valid wa.me link with encoded params', () => {
  const url = createWhatsAppUrl('2348039876543', 'Hello Native Haven');
  assert.match(url, /^https:\/\/wa\.me\/2348039876543\?text=Hello%20Native%20Haven/);
});

test('buildProductWhatsAppMessage formats item details cleanly', () => {
  const msg = buildProductWhatsAppMessage(mockGarments[0], 'XL');
  assert.ok(msg.includes('The Sovereign Agbada Three-Piece Set'));
  assert.ok(msg.includes('$340 USD'));
  assert.ok(msg.includes('Selected Size: XL'));
});

test('filterCollection correctly filters by category', () => {
  const traditionalOnly = filterCollection(mockGarments, 'traditional');
  assert.equal(traditionalOnly.length, 1);
  assert.equal(traditionalOnly[0].id, 'g1');

  const modernOnly = filterCollection(mockGarments, 'modern');
  assert.equal(modernOnly.length, 1);
  assert.equal(modernOnly[0].id, 'g2');

  const all = filterCollection(mockGarments, 'all');
  assert.equal(all.length, 3);
});

test('filterCollection searches across title, fabric, origin, and description', () => {
  const kenteMatches = filterCollection(mockGarments, 'all', 'Kente');
  assert.equal(kenteMatches.length, 1);
  assert.equal(kenteMatches[0].id, 'g2');

  const yorubaMatches = filterCollection(mockGarments, 'all', 'Yoruba');
  assert.equal(yorubaMatches.length, 1);
  assert.equal(yorubaMatches[0].id, 'g1');
});

test('calculateBespokeEstimate adjusts pricing and timeline for complex garments and fabrics', () => {
  const estimateAgbadaKente = calculateBespokeEstimate('Agbada Royal Suite', 'Authentic Kente');
  const estimateSimpleKaftan = calculateBespokeEstimate('Simple Kaftan', 'Cotton');

  assert.ok(estimateAgbadaKente.estimatedPriceMin > estimateSimpleKaftan.estimatedPriceMin);
  assert.ok(estimateAgbadaKente.turnaroundDays >= estimateSimpleKaftan.turnaroundDays);

  const expressEstimate = calculateBespokeEstimate('Agbada Royal Suite', 'Authentic Kente', 'express');
  assert.ok(expressEstimate.turnaroundDays < estimateAgbadaKente.turnaroundDays);
  assert.ok(expressEstimate.estimatedPriceMin > estimateAgbadaKente.estimatedPriceMin);
});

test('validateBespokeForm validates required fields', () => {
  const invalidData: BespokeFormData = {
    fullName: '',
    email: 'not-an-email',
    phone: '',
    contactMethod: 'whatsapp',
    garmentType: '',
    fabricPreference: '',
    occasion: 'Wedding',
    measurementType: 'standard',
  };

  const validation = validateBespokeForm(invalidData);
  assert.equal(validation.isValid, false);
  assert.ok(validation.errors.fullName);
  assert.ok(validation.errors.email);
  assert.ok(validation.errors.phone);

  const validData: BespokeFormData = {
    fullName: 'Amara Adeyemi',
    email: 'amara@example.com',
    phone: '+2348012345678',
    contactMethod: 'whatsapp',
    garmentType: 'Royal Couture Gown',
    fabricPreference: 'Aso-Oke & Silk',
    occasion: 'Gala Dinner',
    measurementType: 'virtual_session',
  };

  const validResult = validateBespokeForm(validData);
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
