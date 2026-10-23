import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, Scissors, Send } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/fashion';

interface WhatsAppFloatingButtonProps {
  onOpenBespokeModal: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  onOpenBespokeModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: '👗 Inquire About Collection Availability',
      message: 'Hello NATIVE HAVEN! I would like to inquire about the availability of your collection pieces.',
    },
    {
      title: '👑 Book Bespoke Fitting Consultation',
      message: 'Hello! I am planning an upcoming event and want to book a bespoke tailoring consultation.',
    },
    {
      title: '🧵 Request Authentic Fabric Video Swatches',
      message: 'Hello Native Haven! Can you share close-up video swatches of your current Kente and Aso-Oke fabrics?',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Concierge Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-[#121212] border border-[#25D366]/50 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B3B17] to-[#135c25] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#0B3B17]"></span>
              </div>
              <div>
                <p className="font-serif-luxury font-bold text-sm">Native Haven Concierge</p>
                <p className="text-[11px] text-green-200">Online • Typically replies in 15m</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp concierge chat widget"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-neutral-950 space-y-3">
            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
              👋 Welcome to <strong className="text-white">NATIVE HAVEN Fashion Zone</strong>! How may our styling team assist your wardrobe today?
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                Quick Inquiries:
              </p>
              {quickPrompts.map((item, idx) => (
                <a
                  key={idx}
                  href={createWhatsAppUrl('2348039876543', item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-lg bg-neutral-900 hover:bg-[#0B3B17]/40 border border-neutral-800 hover:border-[#25D366] text-xs text-neutral-200 hover:text-white transition-all"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-neutral-800 flex gap-2">
              <a
                href={createWhatsAppUrl(
                  '2348039876543',
                  'Hello NATIVE HAVEN! I am connecting to chat directly with your styling team.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenBespokeModal();
                }}
                className="py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium flex items-center justify-center gap-1.5"
                title="Bespoke Studio"
              >
                <Scissors className="w-3.5 h-3.5 text-[#E05A10]" />
                <span>Bespoke</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        aria-expanded={isOpen}
        className="relative group p-3.5 rounded-full bg-[#0B3B17] hover:bg-[#25D366] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 border-2 border-white/20 hover:border-[#25D366]"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"></span>
        <WhatsAppIcon className="w-7 h-7 text-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
