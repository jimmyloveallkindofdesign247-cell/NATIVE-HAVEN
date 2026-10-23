import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, Scissors, ChevronRight } from 'lucide-react';
import { SocialIconsBar, WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/fashion';

interface NavbarProps {
  onOpenBespokeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBespokeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'Categories', href: '#categories' },
    { name: 'Bespoke Fitting', href: '#bespoke' },
    { name: 'Brand Story', href: '#about' },
    { name: 'Lookbook & Gallery', href: '#gallery' },
    { name: 'Heritage Fabrics', href: '#heritage' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#0B3B17] text-white border-b border-[#0B3B17]/60 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Tagline / Shipping */}
          <div className="flex items-center gap-1.5 sm:gap-2 tracking-wide text-neutral-200 text-center sm:text-left text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E05A10] animate-pulse flex-shrink-0"></span>
            <span className="font-semibold text-white">NATIVE HAVEN:</span>
            <span className="italic text-neutral-200">"Celebrating African fashion in traditional and modern style."</span>
            <span className="hidden md:inline text-neutral-400">• Worldwide Express</span>
          </div>

          {/* Social Icons & WhatsApp Quick Connect */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <span className="hidden lg:inline text-neutral-300 text-[11px] font-medium tracking-wider uppercase">
              Connect:
            </span>
            <SocialIconsBar variant="navbar" iconClassName="w-3.5 h-3.5" />
            <a
              href={createWhatsAppUrl(
                '2348039876543',
                'Hello NATIVE HAVEN! I would like to inquire about your collections.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp consultation"
              className="flex items-center gap-1.5 bg-[#E05A10] hover:bg-[#FF6F00] text-white text-[11px] font-semibold px-3 py-1 rounded-full transition-all duration-200 shadow-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
            : 'bg-[#0D0D0D]/85 backdrop-blur-sm border-b border-neutral-800/40 py-4'
        }`}
        aria-label="Primary Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none"
            aria-label="NATIVE HAVEN Fashion Zone Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-display-royal text-xl sm:text-2xl font-bold tracking-wider text-white">
                NATIVE <span className="text-[#E05A10] transition-colors group-hover:text-[#FF6F00]">HAVEN</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B3B17] inline-block border border-[#E05A10]/40"></span>
            </div>
            <span className="text-[10px] tracking-[0.26em] uppercase font-semibold text-[#FF6F00] flex items-center gap-1">
              FASHION <span className="text-neutral-400 font-normal">ZONE</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide text-neutral-300 hover:text-[#E05A10] transition-colors duration-200 rounded-md hover:bg-neutral-800/30"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBespokeModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase rounded-md border border-[#0B3B17] bg-[#0B3B17]/20 text-neutral-200 hover:text-white hover:bg-[#0B3B17] transition-all duration-300"
            >
              <Scissors className="w-3.5 h-3.5 text-[#E05A10]" />
              <span>Book Bespoke</span>
            </button>

            <a
              href={createWhatsAppUrl(
                '2348039876543',
                'Hello NATIVE HAVEN Fashion Zone! I am contacting you from the website.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-md bg-[#0B3B17] hover:bg-[#E05A10] text-white transition-all duration-300 shadow-md hover:shadow-orange-950/40"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D0D0D] border-b border-neutral-800 shadow-2xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            <div className="pb-3 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <p className="font-display-royal text-lg font-bold text-white">
                  NATIVE <span className="text-[#E05A10]">HAVEN</span>
                </p>
                <p className="text-[10px] uppercase tracking-widest text-[#FF6F00]">
                  Fashion Zone
                </p>
              </div>
              <SocialIconsBar variant="navbar" iconClassName="w-3.5 h-3.5" />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between py-2.5 text-base font-medium text-neutral-200 hover:text-[#E05A10] border-b border-neutral-800/40"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBespokeModal) onOpenBespokeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#0B3B17] hover:bg-[#0B3B17]/90 text-white font-semibold text-sm tracking-wide"
              >
                <Scissors className="w-4 h-4 text-[#FF6F00]" />
                <span>Book Bespoke Consultation</span>
              </button>

              <a
                href={createWhatsAppUrl(
                  '2348039876543',
                  'Hello NATIVE HAVEN! I am browsing from mobile and would love to connect.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#E05A10] hover:bg-[#FF6F00] text-white font-semibold text-sm tracking-wide shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
