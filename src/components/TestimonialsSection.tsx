import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/fashionData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0D0D0D] relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E05A10]/15 border border-[#E05A10]/40 text-xs font-semibold uppercase tracking-widest text-[#FF6F00]">
            <Award className="w-3.5 h-3.5 text-[#E05A10]" />
            <span>Client Praise & Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
            Worn By Royalty & Visionaries
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            From regal traditional ceremonies to international fashion weeks, hear from clients who celebrate African grandeur with Native Haven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between space-y-6 relative hover:border-[#0B3B17] transition-all duration-300 shadow-xl"
            >
              <Quote className="w-8 h-8 text-[#0B3B17] absolute top-6 right-6 opacity-40" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <p className="font-serif-luxury font-bold text-white text-base">
                  {test.name}
                </p>
                <p className="text-xs text-[#FF6F00] font-medium">{test.role}</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">Event: {test.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
