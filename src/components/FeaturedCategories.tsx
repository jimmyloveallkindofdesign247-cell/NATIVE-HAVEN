import React from 'react';
import { Sparkles, ArrowRight, Scissors, Crown, Compass } from 'lucide-react';
import { GarmentCategory } from '../types/fashion';

interface FeaturedCategoriesProps {
  onSelectCategory: (category: GarmentCategory) => void;
  onOpenBespokeModal: () => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onSelectCategory,
  onOpenBespokeModal,
}) => {
  const categories = [
    {
      id: 'traditional',
      title: 'Traditional Couture',
      subtitle: 'Ancestral Elegance & Handloom Mastery',
      tagline: 'Timeless cultural attire, rich textures, and classic heritage designs.',
      highlights: ['Imperial Agbada Sets', 'Authentic Bonwire Kente', 'Handwoven Aso-Oke', 'Grand Boubous'],
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      actionText: 'View Traditional Couture',
      accentColor: 'from-[#0B3B17] to-emerald-950',
      badgeColor: 'bg-[#0B3B17]',
      borderColor: 'border-[#0B3B17]/60 hover:border-[#0B3B17]',
      icon: Crown,
      categoryKey: 'traditional' as GarmentCategory,
    },
    {
      id: 'modern',
      title: 'Modern Fusion',
      subtitle: 'Contemporary Runway & Afro-Chic Poise',
      tagline: 'Contemporary urban wear, chic dresses, suits, and everyday African print fashion.',
      highlights: ['Sculpted Power Blazers', 'Asymmetric Midi Dresses', 'Urban Dashiki Outerwear', 'Wax Print Jumpsuits'],
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      actionText: 'Explore Modern Fusion',
      accentColor: 'from-[#E05A10] to-orange-950',
      badgeColor: 'bg-[#E05A10]',
      borderColor: 'border-[#E05A10]/60 hover:border-[#FF6F00]',
      icon: Sparkles,
      categoryKey: 'modern' as GarmentCategory,
    },
    {
      id: 'bespoke',
      title: 'Bespoke / Custom Fitting',
      subtitle: 'Heirloom Made-to-Measure Atelier',
      tagline: 'Custom tailors and made-to-measure orders. Personal styling consultations and video fittings.',
      highlights: ['1-on-1 Virtual Measurements', 'Handpicked Fabric Selection', 'Family Crest Embroidery', 'Express 14-Day Tailoring'],
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      actionText: 'Book Custom Fitting',
      accentColor: 'from-[#6E3B19] to-amber-950',
      badgeColor: 'bg-[#6E3B19]',
      borderColor: 'border-[#6E3B19]/60 hover:border-[#8B4513]',
      icon: Scissors,
      categoryKey: 'bespoke' as GarmentCategory,
    },
  ];

  return (
    <section id="categories" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0B3B17]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E05A10]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B3B17]/30 border border-[#0B3B17] text-xs font-semibold uppercase tracking-widest text-[#FF6F00]">
            <Compass className="w-3.5 h-3.5 text-[#E05A10]" />
            <span>Pillars of Native Haven</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
            Curated Fashion Categories
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Whether seeking traditional ceremonial regalia for a milestone celebration or modern tailored garments for everyday sophistication, our collections honor African artistry.
          </p>
        </div>

        {/* 3 Featured Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`group relative rounded-2xl overflow-hidden border bg-neutral-900/90 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-2xl ${cat.borderColor}`}
              >
                {/* Image Header with Aspect Ratio */}
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white tracking-wide shadow-md ${cat.badgeColor}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.id.toUpperCase()}</span>
                    </span>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs uppercase tracking-wider text-[#FF6F00] font-semibold">
                      {cat.subtitle}
                    </p>
                    <h3 className="text-2xl font-serif-luxury font-bold text-white mt-0.5">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {cat.tagline}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-4 pt-4 border-t border-neutral-800 space-y-2">
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Key Signatures:
                      </p>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-neutral-200">
                        {cat.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E05A10]"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (cat.id === 'bespoke') {
                        onOpenBespokeModal();
                      } else {
                        onSelectCategory(cat.categoryKey);
                        const catalog = document.querySelector('#collection');
                        if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 text-white shadow-md ${
                      cat.id === 'traditional'
                        ? 'bg-[#0B3B17] hover:bg-[#E05A10]'
                        : cat.id === 'modern'
                        ? 'bg-[#E05A10] hover:bg-[#FF6F00]'
                        : 'bg-[#6E3B19] hover:bg-[#0B3B17]'
                    }`}
                  >
                    <span>{cat.actionText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
