import { GarmentItem, BespokeFormData, BespokeEstimate } from '../types/fashion';

export const WHATSAPP_PHONE_NUMBER = '2348039876543'; // Standard official brand WhatsApp

/**
 * Encodes a text message for WhatsApp Web and Mobile deep links
 */
export function createWhatsAppUrl(
  phoneNumber: string = WHATSAPP_PHONE_NUMBER,
  message: string
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

/**
 * Builds prefilled WhatsApp order message for a garment
 */
export function buildProductWhatsAppMessage(
  item: GarmentItem,
  selectedSize?: string
): string {
  return `Hello NATIVE HAVEN Fashion Zone! ✨\n\nI am interested in ordering the following piece:\n• Item: ${item.title}\n• Price: $${item.price} ${item.currency}\n• Fabric: ${item.fabricType}\n• Selected Size: ${selectedSize || 'Need Fitting Consultation'}\n\nPlease confirm availability and next steps for measurement / delivery. Thank you!`;
}

/**
 * Builds prefilled WhatsApp consultation inquiry for Bespoke tailoring
 */
export function buildBespokeWhatsAppMessage(data: BespokeFormData): string {
  const measurementNote =
    data.measurementType === 'virtual_session'
      ? 'Virtual Fitting Session Requested'
      : data.measurementType === 'standard'
      ? `Standard Size (${data.standardSize || 'M'})`
      : 'Custom Measurements Provided';

  return `Hello NATIVE HAVEN Fashion Zone! 👑\n\nI would like to book a Bespoke / Custom Fitting consultation:\n• Name: ${data.fullName}\n• Garment Type: ${data.garmentType}\n• Fabric: ${data.fabricPreference}\n• Occasion: ${data.occasion || 'Special Celebration'}\n• Fitting Mode: ${measurementNote}\n• Target Event Date: ${data.eventDate || 'Flexible'}\n• Notes: ${data.notes || 'None'}\n\nPlease let me know when your head tailor is available to proceed.`;
}

/**
 * Filter catalog items by category, search term, and max price
 */
export function filterCollection(
  items: GarmentItem[],
  category: string,
  searchQuery: string = '',
  maxPrice?: number
): GarmentItem[] {
  return items.filter((item) => {
    // Category match
    if (category !== 'all' && item.category !== category) {
      return false;
    }

    // Price match
    if (typeof maxPrice === 'number' && item.price > maxPrice) {
      return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle.toLowerCase().includes(q);
      const matchFabric = item.fabricType.toLowerCase().includes(q);
      const matchOrigin = item.culturalOrigin.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);

      return matchTitle || matchSubtitle || matchFabric || matchOrigin || matchDesc;
    }

    return true;
  });
}

/**
 * Calculates dynamic price estimates and turnaround days for bespoke orders
 */
export function calculateBespokeEstimate(
  garmentType: string,
  fabricPreference: string,
  urgency: 'standard' | 'express' = 'standard'
): BespokeEstimate {
  let baseMin = 180;
  let baseMax = 320;
  let turnaroundDays = 14;

  // Garment type multiplier
  const lowerGarment = garmentType.toLowerCase();
  if (lowerGarment.includes('agbada') || lowerGarment.includes('royal')) {
    baseMin += 120;
    baseMax += 220;
    turnaroundDays += 4;
  } else if (lowerGarment.includes('bridal') || lowerGarment.includes('couture gown')) {
    baseMin += 250;
    baseMax += 450;
    turnaroundDays += 7;
  } else if (lowerGarment.includes('suit') || lowerGarment.includes('blazer')) {
    baseMin += 90;
    baseMax += 160;
  } else if (lowerGarment.includes('jumpsuit') || lowerGarment.includes('kaftan')) {
    baseMin += 40;
    baseMax += 80;
  }

  // Fabric multiplier
  const lowerFabric = fabricPreference.toLowerCase();
  if (lowerFabric.includes('aso-oke') || lowerFabric.includes('handwoven')) {
    baseMin += 80;
    baseMax += 140;
    turnaroundDays += 3;
  } else if (lowerFabric.includes('kente')) {
    baseMin += 90;
    baseMax += 150;
    turnaroundDays += 3;
  } else if (lowerFabric.includes('brocade') || lowerFabric.includes('jacquard')) {
    baseMin += 60;
    baseMax += 110;
  }

  // Urgency adjustment
  if (urgency === 'express') {
    turnaroundDays = Math.max(5, Math.round(turnaroundDays * 0.55));
    baseMin = Math.round(baseMin * 1.3);
    baseMax = Math.round(baseMax * 1.35);
  }

  return {
    estimatedPriceMin: baseMin,
    estimatedPriceMax: baseMax,
    currency: 'USD',
    turnaroundDays,
    fittingsIncluded: baseMax > 350 ? 3 : 2,
    summary: `${turnaroundDays} business days turnaround • Includes ${
      baseMax > 350 ? '3' : '2'
    } fitting reviews & master tailor hand-finishing.`,
  };
}

/**
 * Validate customer consultation inputs
 */
export function validateBespokeForm(data: BespokeFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = 'Please provide a reachable phone or WhatsApp number';
  }

  if (!data.garmentType) {
    errors.garmentType = 'Please select a garment type';
  }

  if (!data.fabricPreference) {
    errors.fabricPreference = 'Please select your preferred fabric';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
