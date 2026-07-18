import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ServicesGrid } from './components/ServicesGrid';
import { TechDeepDive } from './components/TechDeepDive';
import { BenefitsMetrics } from './components/BenefitsMetrics';
import { StorytellingSections } from './components/StorytellingSections';
import { SocialProof } from './components/SocialProof';
import { Methodology } from './components/Methodology';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactDrawerModal } from './components/ContactDrawerModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialMsg, setContactInitialMsg] = useState('');

  const handleOpenContact = (solutionTitle?: string) => {
    if (solutionTitle) {
      setContactInitialMsg(`Gostaria de agendar uma apresentação focada em: ${solutionTitle}`);
    } else {
      setContactInitialMsg('');
    }
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030305] text-[#f5f5f7] selection:bg-cyan-500 selection:text-white font-sans antialiased">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main>
        {/* Fullscreen Hero with looping video space */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* AirPods Pro Inspired Storytelling Value Proposition */}
        <ValueProposition
          onOpenContact={() => handleOpenContact()}
        />

        {/* Solutions & Services Bento Grid */}
        <ServicesGrid
          onOpenContact={(title) => handleOpenContact(title)}
        />

        {/* Technical Deep Dive (Tabbed & Visual Slider) */}
        <TechDeepDive />

        {/* Quantifiable Benefits & Metric Counters */}
        <BenefitsMetrics />

        {/* Visual Storytelling Blocks (Dark & Titanium Light Contrast) */}
        <StorytellingSections
          onOpenContact={() => handleOpenContact()}
        />

        {/* Client Logos & Detailed Case Studies */}
        <SocialProof
          onOpenContact={() => handleOpenContact()}
        />

        {/* Methodology & Consultative Framework */}
        <Methodology
          onOpenContact={() => handleOpenContact()}
        />

        {/* FAQ — mirrors the FAQPage structured data in index.html */}
        <FAQ
          onOpenContact={() => handleOpenContact()}
        />

        {/* High-Impact Launch Style Final CTA */}
        <FinalCTA
          onOpenContact={() => handleOpenContact()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
      />

      {/* Slide-over Contact / Schedule Meeting Drawer Modal */}
      <ContactDrawerModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialMessage={contactInitialMsg}
      />
    </div>
  );
}

export default App;
