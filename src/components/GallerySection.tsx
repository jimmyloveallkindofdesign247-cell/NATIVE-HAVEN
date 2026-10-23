import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/fashionData';
import { LookbookItem } from '../types/fashion';
import { WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/fashion';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxLook, setLightboxLook] = useState<LookbookItem | null>(null);

  const filters = [
    { label: 'All Looks', value: 'all' },
    { label: 'Runway Showcase', value: 'runway' },
    { label: 'Editorial Series', value: 'editorial' },
    { label: 'Weddings & Celebrations', value: 'celebration' },
    { label: 'Casual Chic', value: 'casual-chic' },
  ];

  const filteredLooks = LOOKBOOK_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-[#121212] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E05A10]/15 border border-[#E05A10]/40 text-xs font-semibold uppercase tracking-widest text-[#FF6F00] mb-3">
              <Camera className="w-3.5 h-3.5 text-[#E05A10]" />
              <span>Editorial & Runway Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
              Lookbook & Gallery
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Immerse yourself in our latest runway highlights, high-fashion editorial captures, and iconic celebration styling.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setSelectedFilter(f.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === f.value
                    ? 'bg-[#0B3B17] text-white border border-[#FF6F00] shadow-md shadow-green-950/40'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              onClick={() => setLightboxLook(look)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#E05A10] transition-all duration-300 relative aspect-[3/4] shadow-xl hover:shadow-orange-950/20"
            >
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Season Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 text-[#FF6F00] border border-neutral-700 backdrop-blur-sm">
                  {look.collectionSeason}
                </span>
              </div>

              {/* Center Hover Action */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="p-3 rounded-full bg-[#E05A10] text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                <p className="text-[10px] uppercase tracking-wider text-[#FF6F00] font-semibold">
                  {look.subtitle}
                </p>
                <h3 className="text-lg font-serif-luxury font-bold text-white leading-tight">
                  {look.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-1">
                  {look.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxLook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#121212] border border-neutral-700 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95">
            <button
              type="button"
              onClick={() => setLightboxLook(null)}
              aria-label="Close lookbook details"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-[#E05A10] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[3/4] bg-black">
                <img
                  src={lightboxLook.image}
                  alt={lightboxLook.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#FF6F00] font-semibold">
                    {lightboxLook.collectionSeason} • {lightboxLook.category.toUpperCase()}
                  </span>

                  <h3 className="text-2xl font-serif-luxury font-bold text-white">
                    {lightboxLook.title}
                  </h3>
                  <p className="text-xs text-neutral-400">{lightboxLook.subtitle}</p>

                  <div className="pt-2 border-t border-neutral-800 space-y-2">
                    <p className="text-xs font-semibold text-neutral-300">Curator Description:</p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {lightboxLook.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <p className="text-[11px] font-semibold text-[#FF6F00] uppercase tracking-wider">
                      Designer Notes:
                    </p>
                    <p className="text-xs text-neutral-400 italic">
                      "{lightboxLook.designerNotes}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <a
                    href={createWhatsAppUrl(
                      '2348039876543',
                      `Hello NATIVE HAVEN! I am inquiring about the lookbook design: "${lightboxLook.title}" (${lightboxLook.collectionSeason}). Can you tailor this look for me?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#0B3B17] hover:bg-[#E05A10] transition-all flex items-center justify-center gap-2 border border-[#0B3B17] shadow-lg"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire About This Look on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
