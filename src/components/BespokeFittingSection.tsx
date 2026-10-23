import React, { useState } from 'react';
import { Scissors, Check, Sparkles, Clock, Calendar, ShieldCheck, Video, Send, ArrowRight } from 'lucide-react';
import { BespokeFormData } from '../types/fashion';
import { calculateBespokeEstimate, validateBespokeForm, buildBespokeWhatsAppMessage, createWhatsAppUrl } from '../utils/fashion';
import { WhatsAppIcon } from './SocialIcons';

interface BespokeFittingSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const BespokeFittingSection: React.FC<BespokeFittingSectionProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState<BespokeFormData>({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'whatsapp',
    garmentType: 'Royal Agbada Three-Piece Set',
    fabricPreference: 'Handwoven Aso-Oke & Damask',
    occasion: 'Traditional Wedding / Coronation',
    measurementType: 'virtual_session',
    standardSize: 'L',
    measurements: {
      chestBust: '',
      waist: '',
      hips: '',
      shoulderWidth: '',
      sleeveLength: '',
      garmentLength: '',
    },
    eventDate: '',
    notes: '',
  });

  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const estimate = calculateBespokeEstimate(
    formData.garmentType,
    formData.fabricPreference,
    urgency
  );

  const garmentOptions = [
    'Royal Agbada Three-Piece Set (Grand Robe, Buba & Sokoto)',
    'Bonwire Kente Corseted Couture Bridal Gown',
    'Executive African Jacquard Dinner Tuxedo',
    'Grand Boubou & Woven Stole Set',
    'Modern Ankara Tailored Power Suit',
    'Custom Celebration Jumpsuit & Train',
  ];

  const fabricOptions = [
    'Handwoven Aso-Oke & Damask (Yoruba Heritage)',
    'Authentic Bonwire Kente (Ashanti Royal Weave)',
    'Glazed Bazin Riche Brocade (Senegalese Luster)',
    'Premium 100% Dutch Wax Cotton (Ankara)',
    'Virgin Wool Crepe with Wax Print Paneling',
  ];

  const handleInputChange = (
    field: keyof BespokeFormData,
    value: any
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleMeasurementChange = (field: string, val: string) => {
    setFormData((prev) => ({
      ...prev,
      measurements: {
        ...prev.measurements,
        [field]: val,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBespokeForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitted(true);
  };

  const whatsAppDirectUrl = createWhatsAppUrl(
    '2348039876543',
    buildBespokeWhatsAppMessage(formData)
  );

  const content = (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E3B19]/30 border border-[#8B4513] text-xs font-semibold uppercase tracking-widest text-[#FF6F00]">
          <Scissors className="w-3.5 h-3.5 text-[#E05A10]" />
          <span>Made-to-Measure Haute Atelier</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
          Bespoke Custom Fitting
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
          Commission a one-of-a-kind ensemble crafted strictly to your anatomical measurements, cultural heritage preferences, and event timeline.
        </p>
      </div>

      {/* Main Grid: Form + Live Estimator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Form (7 Cols) */}
        <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#0B3B17] text-[#25D366] flex items-center justify-center mx-auto border border-green-500/30">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-serif-luxury font-bold text-white">
                  Consultation Request Received!
                </h3>
                <p className="text-neutral-300 text-sm mt-2 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Our master tailor has received your specifications for the <span className="text-[#FF6F00]">{formData.garmentType}</span>.
                </p>
              </div>

              {/* Immediate WhatsApp Forward CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsAppDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3B17] hover:bg-[#E05A10] text-white text-sm font-semibold transition-all duration-300 shadow-xl border border-[#0B3B17]"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  <span>Forward Details to Head Tailor on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    if (onCloseModal) onCloseModal();
                  }}
                  className="px-6 py-3.5 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white text-sm font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Silhouette & Fabric Selection */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-[#FF6F00] font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0B3B17] text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Garment Style & Fabric Selection</span>
                </h4>

                <div>
                  <label htmlFor="garmentType" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Garment Silhouette <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="garmentType"
                    value={formData.garmentType}
                    onChange={(e) => handleInputChange('garmentType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#E05A10]"
                  >
                    {garmentOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.garmentType && (
                    <p className="text-xs text-rose-400 mt-1">{errors.garmentType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="fabricPreference" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Heritage Fabric Preference <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="fabricPreference"
                    value={formData.fabricPreference}
                    onChange={(e) => handleInputChange('fabricPreference', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#E05A10]"
                  >
                    {fabricOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.fabricPreference && (
                    <p className="text-xs text-rose-400 mt-1">{errors.fabricPreference}</p>
                  )}
                </div>
              </div>

              {/* Step 2: Fitting Preference */}
              <div className="space-y-4 pt-2 border-t border-neutral-800">
                <h4 className="text-xs uppercase tracking-wider text-[#FF6F00] font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0B3B17] text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Fitting & Measurement Mode</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`p-3.5 rounded-xl border cursor-pointer text-left transition-all ${
                      formData.measurementType === 'virtual_session'
                        ? 'border-[#E05A10] bg-[#E05A10]/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="measurementType"
                      value="virtual_session"
                      checked={formData.measurementType === 'virtual_session'}
                      onChange={() => handleInputChange('measurementType', 'virtual_session')}
                      className="sr-only"
                    />
                    <Video className="w-4 h-4 text-[#FF6F00] mb-2" />
                    <p className="text-xs font-semibold text-white">Virtual Video Session</p>
                    <p className="text-[10px] text-neutral-400 mt-1">Guided live via WhatsApp</p>
                  </label>

                  <label
                    className={`p-3.5 rounded-xl border cursor-pointer text-left transition-all ${
                      formData.measurementType === 'standard'
                        ? 'border-[#E05A10] bg-[#E05A10]/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="measurementType"
                      value="standard"
                      checked={formData.measurementType === 'standard'}
                      onChange={() => handleInputChange('measurementType', 'standard')}
                      className="sr-only"
                    />
                    <Sparkles className="w-4 h-4 text-[#FF6F00] mb-2" />
                    <p className="text-xs font-semibold text-white">Standard Size Chart</p>
                    <p className="text-[10px] text-neutral-400 mt-1">US/UK/EU with height mod</p>
                  </label>

                  <label
                    className={`p-3.5 rounded-xl border cursor-pointer text-left transition-all ${
                      formData.measurementType === 'custom'
                        ? 'border-[#E05A10] bg-[#E05A10]/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="measurementType"
                      value="custom"
                      checked={formData.measurementType === 'custom'}
                      onChange={() => handleInputChange('measurementType', 'custom')}
                      className="sr-only"
                    />
                    <Scissors className="w-4 h-4 text-[#FF6F00] mb-2" />
                    <p className="text-xs font-semibold text-white">Custom Tape Numbers</p>
                    <p className="text-[10px] text-neutral-400 mt-1">Provide exact inches/cm</p>
                  </label>
                </div>

                {formData.measurementType === 'custom' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
                    <div>
                      <label className="text-neutral-400 block mb-1">Chest / Bust (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 40 in"
                        value={formData.measurements?.chestBust}
                        onChange={(e) => handleMeasurementChange('chestBust', e.target.value)}
                        className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">Waist (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 34 in"
                        value={formData.measurements?.waist}
                        onChange={(e) => handleMeasurementChange('waist', e.target.value)}
                        className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">Hips (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 42 in"
                        value={formData.measurements?.hips}
                        onChange={(e) => handleMeasurementChange('hips', e.target.value)}
                        className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Contact & Timeline Details */}
              <div className="space-y-4 pt-2 border-t border-neutral-800">
                <h4 className="text-xs uppercase tracking-wider text-[#FF6F00] font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0B3B17] text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Contact & Target Celebration Date</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Amara Adeyemi"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#E05A10]"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Phone / WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#E05A10]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#E05A10]"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Target Event Date (Optional)
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#E05A10]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold text-neutral-300 mb-1">
                    Custom Monogramming, Colors, or Special Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    placeholder="e.g. Please embroider family initials on cap, preferred emerald & gold tones..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#E05A10]"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#0B3B17] hover:bg-[#E05A10] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl shadow-green-950/40 hover:shadow-orange-950/50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>

                <a
                  href={whatsAppDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-neutral-800 hover:bg-[#25D366] text-white hover:text-black text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border border-neutral-700"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Instant WhatsApp Connect</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Right: Real-time Price & Turnaround Estimator (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900 via-[#151515] to-neutral-900 border border-[#8B4513]/60 shadow-2xl relative overflow-hidden">
            {/* Top accent badge */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs uppercase tracking-widest text-[#FF6F00] font-bold">
                Live Atelier Calculation
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#0B3B17] text-white border border-green-500/30">
                Master Tailor
              </span>
            </div>

            {/* Estimated Price Range */}
            <div className="py-6 space-y-1">
              <p className="text-xs text-neutral-400">Estimated Investment:</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-display-royal font-bold text-white">
                  ${estimate.estimatedPriceMin} - ${estimate.estimatedPriceMax}
                </span>
                <span className="text-xs text-[#FF6F00] font-semibold uppercase">
                  {estimate.currency}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 mt-1">
                *Final price confirmed after precise fabric yardage & embroidery complexity review.
              </p>
            </div>

            {/* Timeline & Urgency Toggle */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400">Production Timeline:</span>
                <span className="text-[#FF6F00] font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{estimate.turnaroundDays} Business Days</span>
                </span>
              </div>

              {/* Urgency Mode Switch */}
              <div className="pt-2 flex items-center justify-between border-t border-neutral-800/80">
                <span className="text-xs text-neutral-300">Rush / Express Service:</span>
                <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      urgency === 'standard' ? 'bg-[#0B3B17] text-white' : 'text-neutral-400'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('express')}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      urgency === 'express' ? 'bg-[#E05A10] text-white' : 'text-neutral-400'
                    }`}
                  >
                    Express Rush
                  </button>
                </div>
              </div>
            </div>

            {/* Bespoke Benefits */}
            <div className="pt-6 space-y-3">
              <p className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                What Your Bespoke Order Includes:
              </p>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B3B17] bg-green-500/20 rounded p-0.5 mt-0.5 flex-shrink-0" />
                  <span>{estimate.fittingsIncluded} tailored fitting checkpoints (virtual or in-person).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B3B17] bg-green-500/20 rounded p-0.5 mt-0.5 flex-shrink-0" />
                  <span>Authentic heritage African fabric with certified provenance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B3B17] bg-green-500/20 rounded p-0.5 mt-0.5 flex-shrink-0" />
                  <span>Custom monogramming and hand-stitched detailing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B3B17] bg-green-500/20 rounded p-0.5 mt-0.5 flex-shrink-0" />
                  <span>Worldwide express courier delivery in luxury keepsake garment box.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bespoke-modal-title"
      >
        <div className="relative w-full max-w-5xl bg-[#121212] border border-neutral-700/80 rounded-2xl shadow-2xl p-6 sm:p-10 my-6 sm:my-10 animate-in fade-in zoom-in-95 duration-200">
          <button
            type="button"
            onClick={onCloseModal}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-[#E05A10] transition-colors border border-neutral-700 backdrop-blur-sm"
            aria-label="Close custom fitting window"
          >
            <span className="text-lg leading-none font-bold">✕</span>
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="bespoke" className="py-20 bg-[#121212] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
};
