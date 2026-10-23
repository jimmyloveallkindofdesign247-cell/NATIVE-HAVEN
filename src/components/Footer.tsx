import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { SocialIconsBar, SOCIAL_LINKS, WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/fashion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090909] text-neutral-400 border-t border-neutral-800/80 relative">
      {/* Top Banner Bar */}
      <div className="bg-[#0B3B17]/40 border-b border-[#0B3B17]/60 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#E05A10] animate-pulse"></span>
            <span className="font-semibold text-white">NATIVE HAVEN Fashion Zone</span>
            <span>—</span>
            <span className="italic">"Celebrating African fashion in traditional and modern style."</span>
          </div>

          <a
            href={createWhatsAppUrl(
              '2348039876543',
              'Hello NATIVE HAVEN! I am connecting with your team from the website.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-white transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat With Head Stylist on WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Identity & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block group focus:outline-none">
              <div className="flex items-center gap-2">
                <span className="font-display-royal text-2xl font-bold tracking-wider text-white">
                  NATIVE <span className="text-[#E05A10]">HAVEN</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0B3B17] inline-block border border-[#FF6F00]/50"></span>
              </div>
              <p className="text-[10px] tracking-[0.28em] uppercase font-semibold text-[#FF6F00]">
                FASHION ZONE
              </p>
            </a>

            <p className="text-sm text-neutral-300 leading-relaxed font-light max-w-sm">
              Celebrating African fashion in traditional and modern style. Handcrafted royal couture, authentic handwoven Kente and Aso-Oke textiles, and precision-tailored modern afro-chic silhouettes.
            </p>

            {/* Direct Social Media Icons Bar */}
            <div className="pt-2 space-y-2">
              <p className="text-xs uppercase tracking-wider text-[#FF6F00] font-semibold">
                Official Social Channels:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 text-xs text-neutral-300 transition-all ${social.color} ${social.bgColor}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#E05A10] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#E05A10] transition-colors">
                  Signature Collection
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#E05A10] transition-colors">
                  Featured Categories
                </a>
              </li>
              <li>
                <a href="#bespoke" className="hover:text-[#E05A10] transition-colors">
                  Bespoke / Custom Fitting
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E05A10] transition-colors">
                  Brand Story & Heritage
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E05A10] transition-colors">
                  Runway Lookbook & Gallery
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-[#E05A10] transition-colors">
                  Textile Symbolism Guide
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E05A10] transition-colors">
                  Atelier Showrooms & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Collections & Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collection" className="hover:text-[#FF6F00] transition-colors">
                  Traditional Royal Agbada
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#FF6F00] transition-colors">
                  Bonwire Woven Kente Gowns
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#FF6F00] transition-colors">
                  Yoruba Aso-Oke Ceremonial Sets
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#FF6F00] transition-colors">
                  Modern Sculpted Blazers
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#FF6F00] transition-colors">
                  Contemporary Wax Wrap Dresses
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#FF6F00] transition-colors">
                  Beaded Coral Royal Regalia
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Showrooms & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact & Ateliers
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p>
                <strong className="text-white">Lagos Atelier:</strong>
                <br />14 Adeola Odeku, Victoria Island
              </p>
              <p>
                <strong className="text-white">London Suite:</strong>
                <br />Mayfair, London W1K
              </p>
              <p>
                <strong className="text-white">WhatsApp Direct:</strong>
                <br />+234 803 987 6543
              </p>
              <p>
                <strong className="text-white">Email:</strong>
                <br />concierge@nativehaven.fashion
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-neutral-500">
            © 2026 NATIVE HAVEN Fashion Zone. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-neutral-500">
              Crafted with ancestral reverence & modern tailoring mastery.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neutral-900 hover:bg-[#E05A10] text-neutral-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
