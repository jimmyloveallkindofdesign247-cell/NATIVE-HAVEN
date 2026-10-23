import React, { useState, useMemo } from 'react';
import { Search, Filter, Eye, Star, Sparkles, X, ChevronRight } from 'lucide-react';
import { GarmentCategory, GarmentItem } from '../types/fashion';
import { GARMENT_COLLECTIONS } from '../data/fashionData';
import { filterCollection, createWhatsAppUrl, buildProductWhatsAppMessage } from '../utils/fashion';
import { WhatsAppIcon } from './SocialIcons';
import { ProductDetailModal } from './ProductDetailModal';

interface CollectionCatalogProps {
  selectedCategory: GarmentCategory;
  onSelectCategory: (category: GarmentCategory) => void;
  onOpenBespokeModal: () => void;
}

export const CollectionCatalog: React.FC<CollectionCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenBespokeModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<GarmentItem | null>(null);

  const categoryTabs: { label: string; value: GarmentCategory }[] = [
    { label: 'All Collections', value: 'all' },
    { label: 'Traditional Couture', value: 'traditional' },
    { label: 'Modern Fusion', value: 'modern' },
    { label: 'Bespoke Atelier', value: 'bespoke' },
    { label: 'Accessories', value: 'accessories' },
  ];

  const filteredItems = useMemo(() => {
    return filterCollection(GARMENT_COLLECTIONS, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="collection" className="py-20 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E05A10]/15 border border-[#E05A10]/40 text-xs font-semibold uppercase tracking-widest text-[#FF6F00] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E05A10]" />
              <span>Haute African Wardrobe</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
              Signature Collection
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Authentic textiles woven with royal precision, tailored into timeless traditional regalia and modern metropolitan couture.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80 relative">
            <label htmlFor="catalog-search" className="sr-only">Search collection</label>
            <input
              id="catalog-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by fabric, style, origin..."
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E05A10] transition-colors"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categoryTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => onSelectCategory(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                selectedCategory === tab.value
                  ? 'bg-[#0B3B17] text-white border border-[#FF6F00] shadow-lg shadow-green-950/50'
                  : 'bg-neutral-900/90 text-neutral-300 border border-neutral-800 hover:border-neutral-600 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Garment Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const whatsAppOrderUrl = createWhatsAppUrl(
                '2348039876543',
                buildProductWhatsAppMessage(item)
              );

              return (
                <div
                  key={item.id}
                  className="group rounded-2xl overflow-hidden bg-neutral-900/80 border border-neutral-800 hover:border-[#0B3B17] transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-green-950/20"
                >
                  {/* Image container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {item.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-[#0B3B17] text-white border border-green-500/30 shadow-md">
                          {item.badge}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/75 text-[#FF6F00] backdrop-blur-sm border border-neutral-700">
                        {item.culturalOrigin}
                      </span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                      <button
                        type="button"
                        onClick={() => setActiveModalItem(item)}
                        className="px-4 py-2 rounded-lg bg-neutral-900/90 hover:bg-[#E05A10] text-white text-xs font-semibold tracking-wider uppercase border border-white/20 transition-all flex items-center gap-2 shadow-xl"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Quick View</span>
                      </button>
                    </div>

                    {/* Bottom Price on Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between z-10">
                      <div className="flex items-baseline gap-1 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-neutral-800">
                        <span className="text-lg font-bold font-display-royal text-[#E05A10]">
                          ${item.price}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium">
                          {item.currency}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-black/75 backdrop-blur-sm px-2 py-1 rounded-lg border border-neutral-800 text-[11px] text-amber-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="font-semibold text-white">{item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Garment Card Information */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#FF6F00] font-semibold">
                        {item.fabricType}
                      </p>
                      <h3 className="text-base font-serif-luxury font-bold text-white mt-1 group-hover:text-[#FF6F00] transition-colors leading-snug line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={whatsAppOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Order ${item.title} on WhatsApp`}
                        className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wide text-white bg-[#0B3B17] hover:bg-[#E05A10] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-orange-950/40 border border-[#0B3B17] hover:border-[#FF6F00]"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                        <span>Order via WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setActiveModalItem(item)}
                        aria-label={`View details and sizing for ${item.title}`}
                        className="w-full py-2 px-3 rounded-lg text-[11px] font-medium tracking-wide text-neutral-300 hover:text-white bg-neutral-800/60 hover:bg-neutral-800 border border-neutral-700/60 transition-colors"
                      >
                        View Details & Sizing
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-900/50 rounded-2xl border border-neutral-800 max-w-lg mx-auto">
            <p className="text-lg font-serif-luxury text-white">No pieces found matching your criteria</p>
            <p className="text-xs text-neutral-400 mt-2 mb-6">
              Try searching for "Kente", "Agbada", "Blazer", or reset your category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-6 py-2.5 rounded-lg bg-[#0B3B17] hover:bg-[#E05A10] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bespoke Tailor Banner Callout */}
        <div className="mt-16 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0B3B17]/40 via-[#6E3B19]/40 to-[#E05A10]/20 border border-[#0B3B17] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#FF6F00] font-bold">
              Bespoke Atelier Service
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
              Do You Desire A Custom Made-to-Measure Piece?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl">
              From personal fabric selection to bespoke embroidery of your family crest, our master tailors craft custom attire for weddings, galas, and celebrations.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBespokeModal}
            className="flex-shrink-0 px-8 py-3.5 rounded-xl bg-[#E05A10] hover:bg-[#FF6F00] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl shadow-orange-950/50 flex items-center gap-2"
          >
            <span>Book Bespoke Consultation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal instance */}
      <ProductDetailModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onBookFitting={onOpenBespokeModal}
      />
    </section>
  );
};
