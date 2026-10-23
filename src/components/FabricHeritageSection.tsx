import React, { useState } from 'react';
import { BookOpen, Sparkles, ChevronRight, Check } from 'lucide-react';
import { FABRIC_HERITAGE_LIST } from '../data/fashionData';
import { FabricHeritage } from '../types/fashion';

export const FabricHeritageSection: React.FC = () => {
  const [activeFabric, setActiveFabric] = useState<FabricHeritage>(
    FABRIC_HERITAGE_LIST[0]
  );

  return (
    <section id="heritage" className="py-24 bg-[#0D0D0D] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B3B17]/30 border border-[#0B3B17] text-xs font-semibold uppercase tracking-widest text-[#FF6F00]">
            <BookOpen className="w-3.5 h-3.5 text-[#E05A10]" />
            <span>Sacred Looms & Royal Weaves</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
            African Textile Heritage
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            In African couture, cloth is historical archive, royal status, and spiritual blessing. Learn about the legendary textiles that anchor our collections.
          </p>
        </div>

        {/* Interactive Tabs + Active Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Fabric Selector Navigation (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {FABRIC_HERITAGE_LIST.map((fabric) => (
              <button
                key={fabric.id}
                type="button"
                onClick={() => setActiveFabric(fabric)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                  activeFabric.id === fabric.id
                    ? 'bg-[#0B3B17]/40 border-[#FF6F00] shadow-xl text-white'
                    : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                <div>
                  <h4 className="font-serif-luxury text-base font-bold text-white">
                    {fabric.name}
                  </h4>
                  <p className="text-xs text-[#FF6F00] mt-0.5">{fabric.origin}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeFabric.id === fabric.id ? 'translate-x-1 text-[#FF6F00]' : 'text-neutral-600'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Active Fabric Detailed Spotlight (8 Cols) */}
          <div className="lg:col-span-8 bg-neutral-900/90 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Image Preview (5 Cols) */}
              <div className="md:col-span-5 relative h-72 md:h-auto min-h-[320px]">
                <img
                  src={activeFabric.image}
                  alt={activeFabric.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:hidden"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0B3B17] text-white border border-green-500/30">
                    {activeFabric.aka}
                  </span>
                </div>
              </div>

              {/* Text & Meaning (7 Cols) */}
              <div className="md:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#FF6F00] font-semibold">
                      Provenance: {activeFabric.origin}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mt-1">
                      {activeFabric.name}
                    </h3>
                  </div>

                  {/* Color Symbolism */}
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
                    <p className="font-semibold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                      Royal Color & Symbolism:
                    </p>
                    <p className="text-[#FF6F00] leading-relaxed font-medium">
                      {activeFabric.colorSymbolism}
                    </p>
                  </div>

                  {/* Historical Narrative */}
                  <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-2">
                    <p>{activeFabric.history}</p>
                  </div>

                  {/* Iconic Pattern Motifs */}
                  <div className="space-y-1.5 pt-2">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Celebrated Motifs & Meanings:
                    </p>
                    <div className="space-y-1">
                      {activeFabric.patterns.map((pattern, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                          <Check className="w-3.5 h-3.5 text-[#0B3B17] bg-green-500/20 rounded p-0.5 flex-shrink-0" />
                          <span>{pattern}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <a
                    href="#collection"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6F00] hover:text-white"
                  >
                    <span>View Pieces Crafted in {activeFabric.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
