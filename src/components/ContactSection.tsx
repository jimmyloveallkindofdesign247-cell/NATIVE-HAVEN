import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Check, ChevronDown } from 'lucide-react';
import { SocialIconsBar, WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/fashion';
import { FAQ_LIST } from '../data/fashionData';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Fashion Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const directWhatsAppUrl = createWhatsAppUrl(
    '2348039876543',
    `Hello NATIVE HAVEN! My name is ${form.name || 'a fashion enthusiast'}. I have an inquiry regarding: ${form.subject}. Message: ${form.message || 'I would like to speak with a stylist.'}`
  );

  return (
    <section id="contact" className="py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B3B17]/30 border border-[#0B3B17] text-xs font-semibold uppercase tracking-widest text-[#FF6F00]">
            <MessageCircle className="w-3.5 h-3.5 text-[#E05A10]" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
            Visit Our Ateliers or Chat Live
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Whether booking an in-person measurement fitting, commissioning a bridal party, or requesting custom fabric swatches, our stylists are at your service.
          </p>
        </div>

        {/* Main Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Studio Locations & WhatsApp Direct (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Connect Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B3B17]/60 via-neutral-900 to-[#151515] border border-[#0B3B17] shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-white">
                    Instant WhatsApp Concierge
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Average response: Under 15 minutes
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect directly with our master stylists on WhatsApp for instant fabric videos, real-time sizing assistance, and bespoke order updates.
              </p>

              <a
                href={createWhatsAppUrl(
                  '2348039876543',
                  'Hello NATIVE HAVEN Fashion Zone! I am visiting your website and would love assistance with styling / ordering.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#0B3B17] hover:bg-[#E05A10] transition-all flex items-center justify-center gap-2 shadow-lg border border-green-500/30"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Start WhatsApp Conversation</span>
              </a>
            </div>

            {/* Showroom Locations */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-[#FF6F00] font-semibold">
                Flagship Showrooms & Fitting Salons
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E05A10] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Lagos Atelier & Headquarters</p>
                    <p className="text-neutral-400">14 Adeola Odeku St, Victoria Island, Lagos, Nigeria</p>
                    <p className="text-neutral-500 mt-0.5">Mon - Sat: 9:00 AM – 7:00 PM (WAT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0B3B17] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">London Private Fitting Suite</p>
                    <p className="text-neutral-400">Mayfair Fashion Arcade, London W1K, United Kingdom</p>
                    <p className="text-neutral-500 mt-0.5">By Private Appointment Only</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#6E3B19] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Atlanta Consultation Showroom</p>
                    <p className="text-neutral-400">Buckhead Design District, Atlanta, GA, USA</p>
                    <p className="text-neutral-500 mt-0.5">Wed - Sun: 10:00 AM – 6:00 PM (EST)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels Bar */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-300">Follow Our Runway:</span>
                <SocialIconsBar variant="navbar" iconClassName="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Right: Message Form (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#0B3B17] text-white flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-white">
                  Message Sent With Honor!
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{form.name}</span>. An atelier representative will reply to <span className="text-[#FF6F00]">{form.email}</span> within 24 hours.
                </p>

                <div className="pt-4">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B3B17] hover:bg-[#E05A10] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Also Forward Via WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-serif-luxury font-bold text-white">
                  Send A Message to Our Styling Salon
                </h3>
                <p className="text-xs text-neutral-400">
                  Fill in your details below for custom orders, press inquiries, or wholesale partnerships.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Folake Alabi"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E05A10]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E05A10]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-neutral-300 mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E05A10]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-300 mb-1">
                      Inquiry Focus
                    </label>
                    <select
                      id="contact-subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E05A10]"
                    >
                      <option value="General Fashion Inquiry">General Fashion Inquiry</option>
                      <option value="Wedding / Aso-Ebi Group Order">Wedding / Aso-Ebi Group Order</option>
                      <option value="Bespoke Traditional Regalia">Bespoke Traditional Regalia</option>
                      <option value="Modern Ready-To-Wear Sizing">Modern Ready-To-Wear Sizing</option>
                      <option value="Press / Fashion Week Runway">Press / Fashion Week Runway</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us about the piece you have in mind, required dates, or event specifications..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E05A10]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-xl bg-[#0B3B17] hover:bg-[#E05A10] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-[#0B3B17]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Atelier Message</span>
                  </button>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-xl bg-neutral-800 hover:bg-[#25D366] text-white hover:text-black text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-neutral-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif-luxury font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Everything you need to know about our fabrics, fittings, and shipping.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-white hover:text-[#FF6F00] transition-colors"
                  >
                    <span className="font-serif-luxury text-sm sm:text-base font-semibold">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#FF6F00]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
