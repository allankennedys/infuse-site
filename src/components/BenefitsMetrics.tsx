import React from 'react';
import { METRICS } from '../data/infuseData';
import { TrendingUp, Target, Clock, Lock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const BenefitsMetrics: React.FC = () => {
  const panelRef = useScrollReveal<HTMLDivElement>();
  const metricsRef = useScrollReveal<HTMLDivElement>();
  const benefitsRef = useScrollReveal<HTMLDivElement>();
  const benefits = [
    {
      icon: TrendingUp,
      title: "Escalabilidade Sem Sobressaltos",
      desc: "Sua plataforma preparada para absorver de 1.000 a 10.000.000 de usuários simultâneos sem quebras de serviço."
    },
    {
      icon: Clock,
      title: "Redução do Time-to-Market",
      desc: "Lançamento de novas funcionalidades em semanas, com uma equipe dedicada ao seu projeto e publicação automatizada."
    },
    {
      icon: Lock,
      title: "Segurança & DevSecOps",
      desc: "Conformidade rigorosa com normas internacionais (ISO 27001, SOC2, LGPD) inserida na arquitetura do software."
    },
    {
      icon: Target,
      title: "Acurácia & Governança",
      desc: "Dashboards em tempo real para acompanhamento da produtividade da equipe e de indicadores operacionais."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#f5f5f7] relative border-t border-slate-200 text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Counter Grid */}
        <div
          ref={panelRef}
          className="reveal p-6 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl mb-20 relative overflow-hidden"
        >

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
              PROVA SOCIAL & NÚMEROS COMPROVADOS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 mt-2">
              Resultados de Grande Porte Entregues a Clientes Globais
            </h2>
          </div>

          <div ref={metricsRef} className="reveal-group reveal-group-tight grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="fluid-hover flex flex-col items-center text-center p-4 rounded-2xl bg-[#f5f5f7] border border-slate-200 hover:border-cyan-500/50"
              >
                <div className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-2 font-heading">
                  {metric.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div ref={benefitsRef} className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, bIdx) => {
            const IconComp = benefit.icon;
            return (
              <div
                key={bIdx}
                className="fluid-hover group p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/40 hover:-translate-y-1"
              >
                <div className="fluid-hover p-3 rounded-xl bg-slate-100 border border-slate-200 w-fit text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="fluid-hover text-lg font-bold text-slate-950 mb-2 group-hover:text-cyan-600">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
