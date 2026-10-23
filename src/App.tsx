/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCategories } from './components/FeaturedCategories';
import { CollectionCatalog } from './components/CollectionCatalog';
import { BespokeFittingSection } from './components/BespokeFittingSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { FabricHeritageSection } from './components/FabricHeritageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { GarmentCategory } from './types/fashion';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<GarmentCategory>('all');
  const [isBespokeModalOpen, setIsBespokeModalOpen] = useState(false);

  const handleExploreCollection = () => {
    const el = document.querySelector('#collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: GarmentCategory) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-neutral-100 flex flex-col font-sans selection:bg-[#E05A10] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenBespokeModal={() => setIsBespokeModalOpen(true)} />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreCollection={handleExploreCollection}
          onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
        />

        {/* Featured Categories (Traditional Couture, Modern Fusion, Bespoke) */}
        <FeaturedCategories
          onSelectCategory={handleSelectCategory}
          onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
        />

        {/* Interactive Collection Catalog & Modals */}
        <CollectionCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
        />

        {/* Bespoke / Custom Fitting Studio */}
        <BespokeFittingSection />

        {/* Brand Story / About Us */}
        <AboutSection />

        {/* Gallery / Lookbook Slider */}
        <GallerySection />

        {/* Fabric & Textile Cultural Heritage Guide */}
        <FabricHeritageSection />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Contact, Ateliers & FAQs */}
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Direct WhatsApp Concierge */}
      <WhatsAppFloatingButton onOpenBespokeModal={() => setIsBespokeModalOpen(true)} />

      {/* Modal instance for Bespoke Fitting when triggered from Nav / Catalog */}
      {isBespokeModalOpen && (
        <BespokeFittingSection
          isOpenModal={true}
          onCloseModal={() => setIsBespokeModalOpen(false)}
        />
      )}
    </div>
  );
}
