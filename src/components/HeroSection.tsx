import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Scissors, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, BRAND_STATS } from '../data/fashionData';
import { WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/fashion';

interface HeroSectionProps {
  onExploreCollection: () => void;
  onOpenBespokeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollection,
  onOpenBespokeModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D0D0D] via-[#121212] to-[#0D0D0D] border-b border-neutral-800/60"
    >
      {/* Decorative Subtle Background Gradients with Dark Green & Terracotta warmth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0B3B17]/25 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#E05A10]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#6E3B19]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & Headlines */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline / Motto Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0B3B17]/40 via-[#6E3B19]/30 to-[#E05A10]/20 border border-[#0B3B17] text-xs sm:text-sm font-medium tracking-wide text-neutral-200 shadow-inner">
              <Sparkles className="w-4 h-4 text-[#FF6F00] animate-pulse" />
              <span className="text-[#FF6F00] font-semibold">Native Haven Haute Couture:</span>
              <span className="italic text-neutral-200">"Celebrating African fashion in traditional and modern style."</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="block font-serif-luxury">NATIVE HAVEN</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-display-royal font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E05A10] via-[#FF6F00] to-[#E05A10] mt-1 tracking-wider">
                FASHION ZONE
              </span>
            </h1>

            {/* Sub-headline / Brand Motto Callout */}
            <div className="relative pl-0 lg:pl-4 border-l-0 lg:border-l-2 border-[#E05A10]/60">
              <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bridging rich ancestral heritage with sleek, cutting-edge contemporary silhouettes. From handcrafted royal Aso-Oke and Bonwire Kente to tailored urban blazers and bespoke couture.
              </p>
            </div>

            {/* Call To Action Buttons (Dark Green with Orange Hover as specified) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary Button */}
              <button
                type="button"
                onClick={onExploreCollection}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md text-sm sm:text-base font-semibold tracking-wider uppercase text-white bg-[#0B3B17] hover:bg-[#E05A10] transition-all duration-300 shadow-xl shadow-green-950/40 hover:shadow-orange-950/50 group border border-[#0B3B17] hover:border-[#FF6F00]"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary Button: Official WhatsApp Click-to-Chat */}
              <a
                href={createWhatsAppUrl(
                  '2348039876543',
                  'Hello NATIVE HAVEN Fashion Zone! I would like to explore your collections and inquire about custom orders.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md text-sm sm:text-base font-semibold tracking-wider text-white bg-neutral-900/90 hover:bg-[#25D366]/20 border border-neutral-700 hover:border-[#25D366] transition-all duration-300 group shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Bespoke Quick Action */}
              <button
                type="button"
                onClick={onOpenBespokeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md text-sm font-medium tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-800/60 border border-dashed border-neutral-700/80 transition-colors"
              >
                <Scissors className="w-4 h-4 text-[#E05A10]" />
                <span>Custom Fitting</span>
              </button>
            </div>

            {/* Quick Guarantees & Features */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400 border-t border-neutral-800/80">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#0B3B17]"></span>
                <span className="text-neutral-300 font-medium">100% Authentic Handloom</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#E05A10]"></span>
                <span className="text-neutral-300 font-medium">Master Tailor Craftsmanship</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-[#6E3B19]"></span>
                <span className="text-neutral-300 font-medium">Worldwide Express Courier</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Resolution Fashion Carousel Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Golden/Terracotta Accent Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#0B3B17] via-[#6E3B19] to-[#E05A10] opacity-35 blur-lg"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl aspect-[4/5] group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 pointer-events-none"></div>

                {/* Slide Tag Badge */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0B3B17]/90 text-white border border-green-500/30 backdrop-blur-sm">
                    {slide.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-neutral-900/80 text-[#FF6F00] border border-[#FF6F00]/30 backdrop-blur-sm">
                    {slide.accentText}
                  </span>
                </div>

                {/* Bottom Slide Info Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 shadow-xl">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-xs uppercase tracking-widest text-[#FF6F00] font-semibold">
                      {slide.category}
                    </p>
                    <div className="flex items-center gap-1.5">
                      {HERO_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-1.5 transition-all duration-300 rounded-full ${
                            idx === currentSlide ? 'w-6 bg-[#E05A10]' : 'w-2 bg-neutral-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-serif-luxury font-bold text-white leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Slide Controls */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
                  }
                  aria-label="Previous look"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#E05A10] transition-colors border border-white/20 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  aria-label="Next look"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[#E05A10] transition-colors border border-white/20 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Floating Floating Heritage Seal */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-[#0D0D0D]/95 border border-[#0B3B17] shadow-2xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-[#0B3B17] flex items-center justify-center text-[#FF6F00]">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Heirloom Handcraft</p>
                  <p className="text-[10px] text-neutral-400">Bonwire • Lagos • Dakar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Metric Stats Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {BRAND_STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center md:text-left border-l-0 md:border-l border-neutral-800 md:pl-6 first:border-l-0"
            >
              <div className="text-2xl sm:text-3xl font-display-royal font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF6F00]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-0.5 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
