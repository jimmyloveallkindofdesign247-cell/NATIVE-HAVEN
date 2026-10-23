import React, { useState } from 'react';
import { X, Star, Check, Sparkles, Scissors, ShieldCheck, Heart } from 'lucide-react';
import { GarmentItem } from '../types/fashion';
import { WhatsAppIcon } from './SocialIcons';
import { buildProductWhatsAppMessage, createWhatsAppUrl } from '../utils/fashion';

interface ProductDetailModalProps {
  item: GarmentItem | null;
  onClose: () => void;
  onBookFitting: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onBookFitting,
}) => {
  if (!item) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    item.availableSizes[0] || 'M'
  );
  const [activeImage, setActiveImage] = useState<string>(item.image);
  const [savedToWishlist, setSavedToWishlist] = useState<boolean>(false);

  const images = [item.image, ...(item.gallery || [])].filter(
    (img, index, self) => self.indexOf(img) === index
  );

  const whatsAppUrl = createWhatsAppUrl(
    '2348039876543',
    buildProductWhatsAppMessage(item, selectedSize)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-garment-title"
    >
      <div className="relative w-full max-w-4xl bg-[#121212] border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close garment details"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-[#E05A10] transition-colors border border-neutral-700 backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Preview Gallery */}
          <div className="relative bg-neutral-950 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-800">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-neutral-800">
              <img
                src={activeImage}
                alt={item.title}
                className="w-full h-full object-cover object-top"
              />
              {item.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B3B17] text-white border border-green-500/30">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImage === img
                        ? 'border-[#E05A10] scale-95'
                        : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Garment Information & WhatsApp Order */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Origin */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#FF6F00] font-semibold">
                  {item.category.toUpperCase()} • {item.culturalOrigin}
                </span>

                <button
                  type="button"
                  onClick={() => setSavedToWishlist(!savedToWishlist)}
                  className={`p-2 rounded-full border transition-colors ${
                    savedToWishlist
                      ? 'bg-rose-500/20 border-rose-500 text-rose-500'
                      : 'border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${savedToWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Title & Price */}
              <div>
                <h3
                  id="modal-garment-title"
                  className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white leading-tight"
                >
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">{item.subtitle}</p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-display-royal text-[#E05A10]">
                      ${item.price}
                    </span>
                    <span className="text-xs uppercase text-neutral-400">
                      {item.currency}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800 text-xs text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-semibold text-white">{item.rating}</span>
                    <span className="text-neutral-500">({item.reviewsCount})</span>
                  </div>
                </div>
              </div>

              {/* Fabric & Provenance Details */}
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Fabric Composition:</span>
                  <span className="text-white font-medium">{item.fabricType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Cultural Origin:</span>
                  <span className="text-[#FF6F00] font-medium">{item.culturalOrigin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Tailoring Lead Time:</span>
                  <span className="text-neutral-200">5-12 Business Days</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>

              {/* Artisan Features Checklist */}
              <div className="space-y-1.5 pt-2">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Handcrafted Artisan Details:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-300">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0B3B17] bg-green-500/20 rounded-full p-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="size-select-group" className="font-semibold text-neutral-300">
                    Select Your Size:
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onBookFitting();
                    }}
                    className="text-[#FF6F00] hover:underline flex items-center gap-1"
                  >
                    <Scissors className="w-3 h-3" />
                    <span>Need Custom Measurements?</span>
                  </button>
                </div>

                <div id="size-select-group" className="flex flex-wrap gap-2">
                  {item.availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedSize === size
                          ? 'bg-[#0B3B17] text-white border border-[#FF6F00] shadow-md shadow-green-950/40'
                          : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold tracking-wider text-white bg-[#0B3B17] hover:bg-[#E05A10] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-green-950/50 hover:shadow-orange-950/50 border border-[#0B3B17] hover:border-[#FF6F00]"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>Order on WhatsApp (Size: {selectedSize})</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookFitting();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-medium tracking-wide text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors flex items-center justify-center gap-2"
              >
                <Scissors className="w-4 h-4 text-[#E05A10]" />
                <span>Request Custom Tailoring Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
