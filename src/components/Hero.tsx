import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareCode, ShoppingBag, ArrowRight, Bot, CheckCircle, Send, ShieldCheck, Zap } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'bot' | 'ecommerce'>('bot');
  
  // Mouse interactive tilt states
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Ambient video drifts slower than the page; the benefit cards fade up on load.
  const videoParallaxRef = useParallax<HTMLDivElement>(0.14);
  const benefitsRef = useScrollReveal<HTMLDivElement>();

  // WhatsApp Chatbot Live Simulation States
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'bot', text: 'Olá! Sou a IA da Infuse 👋 Como posso ajudar seu negócio hoje?', time: '10:00' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Below `md` the demo stacks, so the prompts sit above the phone instead of
  // beside it — and the hero drops its background media entirely.
  // Initialised from matchMedia rather than defaulting to false: a first render
  // as "desktop" would mount the <video> and start the download on phones.
  const [isStacked, setIsStacked] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsStacked(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const handlePromptClick = (questionText: string, botAnswer: string) => {
    if (isTyping) return;
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    setChatMessages((prev) => [...prev, { sender: 'user', text: questionText, time: timeStr }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages((prev) => [...prev, { sender: 'bot', text: botAnswer, time: timeStr }]);
    }, 1200);
  };

  // Mouse Move tracking for the subtle interactive 3D card tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg tilt
    const rotateY = ((x - centerX) / centerX) * 7;

    setTilt({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Interactive Particle Mesh Canvas in Background or Interactive Video
  useEffect(() => {
    if (activeTab !== 'bot') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1
      });
    }

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.fillStyle = '#05070c';
      ctx.fillRect(0, 0, width, height);

      // Cyber grid background
      ctx.strokeStyle = 'rgba(64, 156, 255, 0.035)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Connecting Particle Mesh
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(64, 156, 255, 0.55)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(64, 156, 255, ${0.22 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeTab]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between overflow-hidden bg-[#030305]">
      {/* Ambient Background Looping Video */}
      {/* No background media on phones: it is the heaviest asset on the page and
          the hero reads cleaner without it on a small screen. */}
      {!isStacked && (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Bleeds past the frame so the parallax drift never exposes an edge. */}
        <div ref={videoParallaxRef} className="absolute inset-[-14%] will-change-transform">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/video/hero-bg-poster.jpg"
            aria-hidden="true"
            className="w-full h-full object-cover"
            // Single inline filter: the Tailwind filter utilities would each
            // need their own variable and fight over the same property.
            // hue-rotate pulls the clip's magenta towards the brand blue.
            style={{
              opacity: 0.45,
              filter: 'brightness(0.62) contrast(1.12) saturate(1.05) hue-rotate(-65deg)',
            }}
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Keeps the text legible over whatever frame is playing. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/80 via-[#030305]/55 to-[#030305]" />
      </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        {/* Main Title & Apple-Style Story Narrative */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            Da Primeira Página ao Pós-Venda: <br className="hidden sm:inline" />
            <span className="text-cyan-glow-gradient">
              Sua Empresa Vendendo 24h por Dia.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            Construímos sites ultrarrápidos, lojas virtuais e automações com Inteligência Artificial no WhatsApp para empresas que querem vender mais e operar sem esforço manual.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-base transition-colors duration-300 flex items-center justify-center gap-3 group active:scale-98"
            >
              <span>Começar Meu Projeto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#solucoes"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900/90 border border-white/15 text-white font-semibold text-base hover:bg-zinc-800 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Ver Soluções</span>
            </a>
          </div>
        </div>

        {/* Dynamic Interactive Looping Container with Cursor Hover Dynamics */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl mx-auto w-full my-6 group transition-transform duration-700 ease-out will-change-transform motion-reduce:transition-none"
          style={{
            transform: `perspective(1600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          }}
        >
          {/* Glowing Outline Box responding to cursor glare */}
          <div
            className="absolute -inset-1 rounded-3xl opacity-70 group-hover:opacity-100 transition duration-500 blur-xl pointer-events-none"
            style={{
              background: 'rgba(24, 119, 242, 0.14)',
            }}
          />

          <div className="relative rounded-2xl overflow-hidden bg-[#07090e] border border-cyan-500/30 shadow-2xl min-h-[460px] flex flex-col">
            
            {/* Visual Control Bar Header */}
            <div className="bg-zinc-950/90 border-b border-white/10 px-3 sm:px-4 py-3 flex flex-wrap items-center justify-between gap-3 z-20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline-block">
                  infuse-software // live-interactive-experience
                </span>
              </div>

              {/* Tab selector for live interactive views */}
              <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10 text-[11px] sm:text-xs font-mono min-w-0">
                <button
                  onClick={() => setActiveTab('bot')}
                  className={`px-2.5 sm:px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                    activeTab === 'bot'
                      ? 'bg-cyan-400 text-black font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5 shrink-0" />
                  <span>IA WhatsApp</span>
                </button>

                <button
                  onClick={() => setActiveTab('ecommerce')}
                  className={`px-2.5 sm:px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                    activeTab === 'ecommerce'
                      ? 'bg-cyan-400 text-black font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                  <span>E-Commerce</span>
                </button>
              </div>
            </div>

            {/* TAB 1: Live Interactive WhatsApp AI Chatbot Simulation */}
            {activeTab === 'bot' && (
              <div className="p-4 sm:p-8 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#06080e] via-[#080d1a] to-[#04050a] relative">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />

                <div className="md:col-span-6 space-y-4 z-10 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Simule o Atendimento da IA em Tempo Real
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Clique nos cenários abaixo para ver como o Agente de IA da Infuse qualifica clientes, responde perguntas e realiza agendamentos direto no WhatsApp:
                  </p>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => handlePromptClick(
                        'Como funciona a integração com meu WhatsApp?',
                        'Conectamos a IA direto ao seu número oficial do WhatsApp Business! Ela lê sua lista de produtos ou serviços, tira dúvidas de clientes e salva tudo no CRM automaticamente 24h por dia.'
                      )}
                      className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 text-xs text-zinc-200 flex items-center justify-between gap-3 transition-all group"
                    >
                      <span>"Como funciona a integração com meu WhatsApp?"</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => handlePromptClick(
                        'Quero agendar uma consulta ou serviço sem faltas.',
                        'Com a Infuse, seu cliente escolhe a data disponível e a IA envia lembrete automático 2 horas antes no WhatsApp. O no-show cai em até 70%!'
                      )}
                      className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 text-xs text-zinc-200 flex items-center justify-between gap-3 transition-all group"
                    >
                      <span>"Quero agendar consultas ou reuniões automaticamente"</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => handlePromptClick(
                        'Qual o prazo para criar meu e-commerce com IA?',
                        'Sua infraestrutura completa de E-Commerce e Chatbot fica pronta em média em 7 a 14 dias úteis, com suporte e acompanhamento diário.'
                      )}
                      className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 text-xs text-zinc-200 flex items-center justify-between gap-3 transition-all group"
                    >
                      <span>"Qual o prazo para ter meu e-commerce com IA?"</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Simulated WhatsApp Phone Interface */}
                <div className="md:col-span-6 z-10 flex justify-center">
                  <div className="w-full max-w-sm rounded-2xl bg-[#0b101b] border border-emerald-500/40 shadow-2xl overflow-hidden font-sans">
                    {/* WhatsApp Header */}
                    <div className="bg-[#121b2d] p-3 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-xs">
                          IA
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            Infuse AI Assistant
                            <CheckCircle className="w-3 h-3 text-emerald-400 fill-emerald-400/20" />
                          </div>
                          <div className="text-[10px] text-emerald-400 font-mono">
                            Online • Atendimento Oficial
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages Body */}
                    <div className="p-4 h-64 overflow-y-auto space-y-3 bg-[#080d18]">
                      {chatMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                              msg.sender === 'user'
                                ? 'bg-cyan-600 text-white rounded-br-none'
                                : 'bg-[#182236] border border-white/10 text-zinc-200 rounded-bl-none'
                            }`}
                          >
                            <p>{msg.text}</p>
                            <span className="text-[9px] text-zinc-400 font-mono block text-right mt-1">
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-[#182236] border border-white/10 text-emerald-400 p-2.5 rounded-2xl text-xs flex items-center gap-2 font-mono">
                            <span className="animate-bounce">●</span>
                            <span className="animate-bounce delay-100">●</span>
                            <span className="animate-bounce delay-200">●</span>
                            <span>IA digitação em andamento...</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chat Input Footer */}
                    <div className="p-2.5 bg-[#101726] border-t border-white/10 flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        placeholder={
                          isStacked
                            ? 'Clique nas perguntas acima para testar...'
                            : 'Clique nas perguntas ao lado para testar...'
                        }
                        className="flex-1 bg-black/50 border border-white/10 rounded-xl px-3 py-1.5 text-[11px] text-zinc-400 focus:outline-none"
                      />
                      <div className="p-2 rounded-xl bg-emerald-500 text-black">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: E-Commerce Digital Store Preview */}
            {activeTab === 'ecommerce' && (
              <div className="relative w-full h-full flex-1 flex flex-col justify-between p-4 sm:p-10 bg-gradient-to-br from-[#060810] via-[#0d1424] to-[#04060b]">
                <img
                  src="/images/infuse-ecommerce-crm.jpg"
                  alt="Infuse E-Commerce Engine"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />

                <div className="relative z-10 max-w-2xl">
                  <span className="text-xs uppercase font-mono text-cyan-400 font-bold tracking-widest">
                    INFUSE E-COMMERCE & SITES
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
                    Lojas Virtuais de Alta Performance & Conversão
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    Acelere suas vendas digitais com e-commerce integrado a meios de pagamento, cálculo automático de frete e recuperação de vendas via WhatsApp.
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                  <div className="p-3.5 rounded-xl bg-black/70 border border-cyan-500/30 backdrop-blur-md">
                    <span className="text-xs text-zinc-400 font-mono block">Velocidade SEO:</span>
                    <span className="text-base font-bold text-emerald-400">0.8s Total</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/70 border border-cyan-500/30 backdrop-blur-md">
                    <span className="text-xs text-zinc-400 font-mono block">Recuperação WhatsApp:</span>
                    <span className="text-base font-bold text-cyan-300">+32% Carrinhos</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/70 border border-cyan-500/30 backdrop-blur-md">
                    <span className="text-xs text-zinc-400 font-mono block">Integração Estoque:</span>
                    <span className="text-base font-bold text-indigo-300">100% Automática</span>
                  </div>
                </div>
              </div>
            )}



          </div>
        </div>

        {/* Bottom Benefits Cards */}
        <div
          ref={benefitsRef}
          className="reveal-group reveal-group-tight mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full"
        >
          {[
            { icon: MessageSquareCode, label: "IA no WhatsApp", val: "Atendimento 24/7" },
            { icon: ShoppingBag, label: "Lojas Virtuais", val: "Checkout Otimizado" },
            { icon: Zap, label: "Automação CRM", val: "Zero Trabalho Manual" },
            { icon: ShieldCheck, label: "Sites Responsivos", val: "SEO no Google" },
          ].map((item, index) => (
            <div
              key={index}
              className="liquid-glass p-4 rounded-xl text-center flex flex-col items-center justify-center group"
            >
              <item.icon className="fluid-media w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110" />
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">{item.val}</span>
              <span className="text-xs text-zinc-400 mt-0.5 font-medium">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
