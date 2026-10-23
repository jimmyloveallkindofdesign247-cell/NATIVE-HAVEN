import React from 'react';
import { Compass, Sparkles, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/fashion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative Warm Terracotta & Green Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#6E3B19]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#0B3B17]/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Multiple Editorial Layers */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing Accent Border */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#0B3B17] via-[#6E3B19] to-[#E05A10] opacity-30 blur-md"></div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-neutral-700/80 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="NATIVE HAVEN Artisan Textile Craft"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80"></div>

                {/* Inset Motto Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-[#E05A10]/50 shadow-xl">
                  <p className="text-xs uppercase tracking-widest text-[#FF6F00] font-semibold">
                    The Native Haven Creed
                  </p>
                  <p className="text-sm font-serif-luxury italic text-white mt-1">
                    "Celebrating African fashion in traditional and modern style."
                  </p>
                </div>
              </div>

              {/* Floating Stat Chip */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-xl bg-[#0D0D0D]/95 border border-[#0B3B17] shadow-2xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-[#0B3B17] flex items-center justify-center text-[#FF6F00]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">45+ Master Weavers</p>
                  <p className="text-[10px] text-neutral-400">Generational African Artisans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B3B17]/30 border border-[#0B3B17] text-xs font-semibold uppercase tracking-widest text-[#FF6F00]">
              <Compass className="w-3.5 h-3.5 text-[#E05A10]" />
              <span>Brand Heritage & Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white leading-tight">
              Honoring Ancestral Pride, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E05A10] via-[#FF6F00] to-amber-400">
                Innovating for Global Runways.
              </span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded on the belief that African apparel is not merely clothing but living historical literature, 
                <strong className="text-white font-semibold"> NATIVE HAVEN Fashion Zone</strong> was conceived to preserve the sanctity of ancestral African textiles while pioneering innovative, sharp silhouettes for the global cosmopolitan citizen.
              </p>
              <p>
                Every thread tells a story. From the legendary weavers of <span className="text-[#FF6F00]">Bonwire, Ghana</span> who hand-weave Kente strip by strip on wooden foot-looms, to the centuries-old indigo and metallic <span className="text-[#FF6F00]">Aso-Oke</span> looms of Yorubaland and the glazed <span className="text-[#FF6F00]">Bazin Riche</span> craft of Mali and Senegal — our ateliers partner directly with indigenous craft communities.
              </p>
              <p>
                By blending traditional handloom artistry with architectural tailoring, modern bias cuts, and luxury linings, we empower our global clientele to walk into any boardroom, diplomatic reception, red carpet, or wedding celebration feeling deeply anchored in cultural pride and breathtaking elegance.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3B17]" />
                  <span>Ethical Fair-Trade Sourcing</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Direct revenue sharing with artisan weaving families in Bonwire, Oyo, and Bamako.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E05A10]" />
                  <span>Zero-Compromise Tailoring</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Every stitch, French seam, and embroidery cord checked through a 3-tier fitting process.
                </p>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={createWhatsAppUrl(
                  '2348039876543',
                  'Hello NATIVE HAVEN! I loved reading your brand story and would like to learn more about your upcoming collections.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B3B17] hover:bg-[#E05A10] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg border border-[#0B3B17]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Connect With Our Creative Director</span>
              </a>

              <a
                href="#collection"
                className="text-xs font-semibold text-[#FF6F00] hover:text-white uppercase tracking-wider underline underline-offset-4"
              >
                Explore Current Collections →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
