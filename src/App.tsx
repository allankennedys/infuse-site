import { Component, lazy, Suspense, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Só a barra de navegação e o Hero vêm no primeiro pacote. O resto da página
// fica em blocos separados, baixados logo depois da primeira pintura, para o
// que o visitante vê primeiro não esperar por código de seções mais abaixo.
const load = {
  ValueProposition: () => import('./components/ValueProposition').then((m) => ({ default: m.ValueProposition })),
  ServicesGrid: () => import('./components/ServicesGrid').then((m) => ({ default: m.ServicesGrid })),
  TechDeepDive: () => import('./components/TechDeepDive').then((m) => ({ default: m.TechDeepDive })),
  BenefitsMetrics: () => import('./components/BenefitsMetrics').then((m) => ({ default: m.BenefitsMetrics })),
  StorytellingSections: () => import('./components/StorytellingSections').then((m) => ({ default: m.StorytellingSections })),
  SocialProof: () => import('./components/SocialProof').then((m) => ({ default: m.SocialProof })),
  Methodology: () => import('./components/Methodology').then((m) => ({ default: m.Methodology })),
  FAQ: () => import('./components/FAQ').then((m) => ({ default: m.FAQ })),
  FinalCTA: () => import('./components/FinalCTA').then((m) => ({ default: m.FinalCTA })),
  TrustedClients: () => import('./components/TrustedClients').then((m) => ({ default: m.TrustedClients })),
  Footer: () => import('./components/Footer').then((m) => ({ default: m.Footer })),
  ContactDrawerModal: () => import('./components/ContactDrawerModal').then((m) => ({ default: m.ContactDrawerModal })),
};

const ValueProposition = lazy(load.ValueProposition);
const ServicesGrid = lazy(load.ServicesGrid);
const TechDeepDive = lazy(load.TechDeepDive);
const BenefitsMetrics = lazy(load.BenefitsMetrics);
const StorytellingSections = lazy(load.StorytellingSections);
const SocialProof = lazy(load.SocialProof);
const Methodology = lazy(load.Methodology);
const FAQ = lazy(load.FAQ);
const FinalCTA = lazy(load.FinalCTA);
// const TrustedClients = lazy(load.TrustedClients);
const Footer = lazy(load.Footer);
const ContactDrawerModal = lazy(load.ContactDrawerModal);

/**
 * Rede de segurança do carregamento em blocos: se uma publicação nova trocar os
 * nomes dos arquivos enquanto a página está aberta, o bloco antigo some (404) e
 * o React desmontaria tudo. Aqui a página é recarregada uma vez para pegar a
 * versão atual; a marca em sessionStorage evita um laço de recarregamentos.
 */
class ChunkGuard extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    try {
      if (!sessionStorage.getItem('chunk-reload')) {
        sessionStorage.setItem('chunk-reload', '1');
        window.location.reload();
      }
    } catch {
      /* sessionStorage indisponível: segue sem recarregar */
    }
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** Espera o navegador ficar ocioso (ou um tempo máximo) antes de montar o resto. */
const whenIdle = (cb: () => void) => {
  const w = window as Window & { requestIdleCallback?: (fn: () => void, o?: { timeout: number }) => number };
  if (w.requestIdleCallback) w.requestIdleCallback(cb, { timeout: 1200 });
  else window.setTimeout(cb, 300);
};

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [restReady, setRestReady] = useState(false);
  const [contactMounted, setContactMounted] = useState(false);
  const [contactInitialMsg, setContactInitialMsg] = useState('');

  // O restante da página monta quando o navegador ficar ocioso. Com um link
  // direto para uma seção (#solucoes etc.), monta de uma vez para o âncora existir.
  useEffect(() => {
    if (window.location.hash) {
      setRestReady(true);
      return;
    }
    whenIdle(() => setRestReady(true));
  }, []);

  // Se havia um âncora na URL, rola até ele assim que a seção existir.
  useEffect(() => {
    if (!restReady || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 400);
    return () => window.clearTimeout(t);
  }, [restReady]);

  // Baixa o painel de contato com antecedência, para abrir sem espera.
  useEffect(() => {
    if (restReady) whenIdle(() => void load.ContactDrawerModal());
  }, [restReady]);

  const handleOpenContact = (solutionTitle?: string) => {
    if (solutionTitle) {
      setContactInitialMsg(`Gostaria de agendar uma apresentação focada em: ${solutionTitle}`);
    } else {
      setContactInitialMsg('');
    }
    setContactMounted(true);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030305] text-[#f5f5f7] selection:bg-cyan-500 selection:text-white font-sans antialiased">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main>
        {/* Fullscreen Hero with looping video space */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {restReady ? (
          <ChunkGuard>
          <Suspense fallback={<div className="min-h-screen bg-[#030305]" aria-hidden="true" />}>
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

        {/* Grayscale client logo marquee (oculto temporariamente) */}
        {/* <TrustedClients /> */}
          </Suspense>
          </ChunkGuard>
        ) : (
          <div className="min-h-screen bg-[#030305]" aria-hidden="true" />
        )}
      </main>

      {restReady && (
        <ChunkGuard>
        <Suspense fallback={null}>
          {/* Footer */}
          <Footer
            onOpenContact={() => handleOpenContact()}
          />
        </Suspense>
        </ChunkGuard>
      )}

      {/* Slide-over Contact / Schedule Meeting Drawer Modal */}
      {contactMounted && (
        <ChunkGuard>
        <Suspense fallback={null}>
          <ContactDrawerModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            initialMessage={contactInitialMsg}
          />
        </Suspense>
        </ChunkGuard>
      )}
    </div>
  );
}

export default App;
