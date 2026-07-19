import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, ChevronRight, Gamepad2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useMorphIndicator } from '../hooks/useMorphIndicator';

interface NavbarProps {
  onOpenContact: () => void;
}

const navLinks = [
  { name: 'Visão Geral', id: 'hero' },
  { name: 'Proposta', id: 'proposta' },
  { name: 'Soluções', id: 'solucoes' },
  { name: 'Tecnologia', id: 'arquitetura' },
  { name: 'Casos Reais', id: 'casos' },
  { name: 'Metodologia', id: 'metodologia' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].id);
  const [logoSpinning, setLogoSpinning] = useState(false);
  const spinTimer = useRef<number | undefined>(undefined);

  /**
   * Seção alvo enquanto uma rolagem por clique está em curso.
   *
   * A rolagem suave atravessa todas as seções do caminho, e o scroll spy
   * reposicionaria o destaque em cada uma delas — clicar em "Metodologia"
   * fazia o indicador parar em 5 destinos intermediários, reiniciando a
   * transição a cada parada. Travando o alvo, ele viaja uma vez só.
   */
  const navLock = useRef<string | null>(null);
  const navLockTimer = useRef<number | undefined>(undefined);

  const goToSection = (id: string) => {
    navLock.current = id;
    setActiveSection(id);
    window.clearTimeout(navLockTimer.current);
    // Rede de segurança: se a rolagem nunca alcançar a seção (âncora no fim da
    // página, por exemplo), o spy volta a mandar.
    navLockTimer.current = window.setTimeout(() => {
      navLock.current = null;
      // Força uma medição: se a rolagem foi interrompida e parou, não haveria
      // mais nenhum evento de scroll para corrigir o destaque.
      window.dispatchEvent(new Event('scroll'));
    }, 1800);
  };

  const { containerRef, indicatorRef } = useMorphIndicator<HTMLElement, HTMLSpanElement>(
    activeSection,
    'horizontal'
  );

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);

      // The section that owns the upper third of the viewport is "current".
      const probeLine = window.innerHeight * 0.35;
      let current = navLinks[0].id;

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= probeLine) current = link.id;
      }

      // At the very bottom the last section can never reach the probe line.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      if (atBottom) current = navLinks[navLinks.length - 1].id;

      if (navLock.current) {
        // Chegou ao destino: devolve o controle ao scroll spy.
        if (current === navLock.current) {
          navLock.current = null;
          window.clearTimeout(navLockTimer.current);
        }
      } else {
        setActiveSection(current);
      }

      // A logo gira só enquanto há rolagem acontecendo E o hero ainda está na
      // tela; para pouco depois que a rolagem cessa.
      const hero = document.getElementById('hero');
      const insideHero = hero ? hero.getBoundingClientRect().bottom > 100 : false;

      window.clearTimeout(spinTimer.current);
      if (insideHero) {
        setLogoSpinning(true);
        spinTimer.current = window.setTimeout(() => setLogoSpinning(false), 260);
      } else {
        setLogoSpinning(false);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
      window.clearTimeout(spinTimer.current);
      window.clearTimeout(navLockTimer.current);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#030305]/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.9)]'
            : 'py-5 bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="group flex items-center shrink-0" aria-label="Infuse — início">
            <BrandLogo spinning={logoSpinning} className="w-[130px] sm:w-[166px] transition-opacity group-hover:opacity-80" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            ref={containerRef}
            className="liquid-glass relative hidden md:flex items-center gap-1 p-1.5 rounded-full"
          >
            {/* Single highlight that morphs between links. */}
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="morph-indicator rounded-full bg-cyan-500/90 shadow-[0_8px_24px_-10px_rgba(24,119,242,0.9)]"
            />

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  data-morph-item={link.id}
                  onClick={() => goToSection(link.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`fluid-hover relative z-10 px-4 py-1.5 text-xs rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-300 font-medium hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA — o game aparece a partir do md; no mobile ele
              vive só no rodapé, para não competir com o CTA de contato. */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://game.infusesoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fluid-hover flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-zinc-200 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-colors"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Game</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden rounded-full p-px text-xs font-semibold text-white transition-all duration-300 active:scale-95"
            >
              <span className="absolute inset-0 bg-cyan-500" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0d14] group-hover:bg-transparent transition-colors duration-300">
                <span>Falar no WhatsApp</span>
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden shrink-0 p-2 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030305]/95 backdrop-blur-2xl md:hidden flex flex-col overflow-y-auto overflow-x-hidden pt-24 px-6 pb-8 border-b border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4 mb-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    goToSection(link.id);
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className={`fluid-hover text-lg py-2 border-b border-white/5 flex items-center justify-between ${
                    isActive
                      ? 'text-cyan-400 font-semibold pl-3 border-l-2 border-l-cyan-400'
                      : 'text-zinc-200 font-medium hover:text-cyan-400'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-zinc-600'}`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Falar com Consultor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
