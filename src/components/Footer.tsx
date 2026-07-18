import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, ArrowUpRight, AtSign } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

/**
 * Símbolo da Meta (o laço do infinito). Herda a cor via `currentColor`.
 * Marca registrada da Meta Platforms — ver observação no README sobre o uso
 * do selo oficial do programa de parceiros.
 */
const MetaMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Meta" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.34 1.283-2.031 2.14-2.59 3.358-2.59zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327 1.001 1.196 1.634 2.075l.324.448-.657 1.077c-.19.31-.38.62-.573.926-1.586 2.478-2.32 3.575-3.128 4.4-.845.865-1.516 1.09-2.135 1.09-1.416 0-2.29-1.16-2.29-3.263 0-1.99.523-4.24 1.503-5.88.53-.89 1.183-1.6 1.808-2.02.44-.297.788-.43 1.14-.43z" />
  </svg>
);

/** Mesmo número comercial usado no formulário e nas páginas /crm e /agenda. */
const WHATSAPP_LINK =
  'https://wa.me/5575982938031?text=' +
  encodeURIComponent('Olá! Vim pelo site da Infuse e gostaria de mais informações.');

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#020203] text-zinc-400 text-xs border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo className="w-[172px]" />

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Especialistas em sites, e-commerces, automações de processos, CRM de vendas e chatbots com Inteligência Artificial no WhatsApp para negócios que querem vender mais.
            </p>

            <div className="pt-2 space-y-2 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Conexão Oficial WhatsApp Business API</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-300">
                <MetaMark className="w-4 h-4 shrink-0 text-[#0081FB]" />
                <span>Empresa verificada pela Meta</span>
              </div>
            </div>
          </div>

          {/* Soluções Links */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono text-white font-bold tracking-wider block">
              Soluções
            </span>
            <ul className="space-y-2 text-zinc-400 font-medium">
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Chatbots & IA no WhatsApp</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Sites & E-Commerce</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Automação de Processos</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">CRM de Vendas</a></li>
              <li><a href="#solucoes" className="hover:text-cyan-400 transition-colors">Agendamento Inteligente</a></li>
            </ul>
          </div>

          {/* Produtos — páginas próprias, fora da LP */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono text-white font-bold tracking-wider block">
              Produtos
            </span>
            <ul className="space-y-2 text-zinc-400 font-medium">
              <li>
                <a href="/crm/" className="fluid-hover flex items-center gap-1.5 hover:text-cyan-400">
                  <span>Infuse CRM</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 text-cyan-400" />
                </a>
              </li>
              <li>
                <a href="/agenda/" className="fluid-hover flex items-center gap-1.5 hover:text-cyan-400">
                  <span>Infuse Agenda</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 text-cyan-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa Links */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono text-white font-bold tracking-wider block">
              Navegação
            </span>
            <ul className="space-y-2 text-zinc-400 font-medium">
              <li><a href="#proposta" className="hover:text-cyan-400 transition-colors">Proposta de Valor</a></li>
              <li><a href="#arquitetura" className="hover:text-cyan-400 transition-colors">Tecnologia Infuse</a></li>
              <li><a href="#casos" className="hover:text-cyan-400 transition-colors">Casos de Sucesso</a></li>
              <li><a href="#metodologia" className="hover:text-cyan-400 transition-colors">Metodologia</a></li>
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Visão Geral</a></li>
            </ul>
          </div>

          {/* Contato & Escritórios */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono text-white font-bold tracking-wider block">
              Contato
            </span>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <a
                  href="mailto:contato@infusesoftware.com"
                  className="fluid-hover flex items-center gap-2 hover:text-cyan-400"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                  <span className="break-all">contato@infusesoftware.com</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fluid-hover flex items-center gap-2 hover:text-cyan-400"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                  <span>WhatsApp Atendimento 24/7</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/infuse.software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fluid-hover flex items-center gap-2 hover:text-cyan-400"
                >
                  <AtSign className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                  <span>@infuse.software</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Atendimento Nacional • Feira de Santana, BA & Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Infuse Software Ltda. Todos os direitos reservados.
          </div>

          <button onClick={onOpenContact} className="hover:text-cyan-400 transition-colors">
            Falar com Consultor
          </button>
        </div>

      </div>
    </footer>
  );
};
