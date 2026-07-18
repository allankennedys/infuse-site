import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface ContactDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Sends a GA4 event, if the tag is present.
 *
 * Optional-chained on purpose: ad blockers keep gtag from ever being defined,
 * and an unguarded call would throw inside the submit handler and stop the
 * visitor from reaching WhatsApp. Analytics must never break the lead.
 *
 * Never pass name, e-mail or phone here — sending personally identifiable
 * information to Analytics breaks Google's terms and can get the property
 * purged. Only non-identifying context.
 */
function track(eventName: string, params?: Record<string, unknown>) {
  window.gtag?.('event', eventName, params);
}

/** Número comercial da Infuse (mesmo usado nas páginas /crm e /agenda). */
const WHATSAPP_NUMBER = '5575982938031';

const SERVICES = [
  'Inteligência Artificial & Chatbot no WhatsApp',
  'Sites Institucionais & E-Commerce',
  'Automação de Processos & CRM de Vendas',
  'Agendamento Automático + Lembrete Anti-Falta',
  'Softwares & Sistemas Sob Medida',
  'Outro',
];

const TIMES = ['09:00', '11:00', '14:00', '16:00', 'Outro'];

const FIELD_CLASS =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white ' +
  'placeholder-zinc-500 focus:border-cyan-400 focus:bg-white/[0.06] focus:outline-none transition-colors';

const LABEL_CLASS = 'block text-sm font-medium text-zinc-300 mb-1.5';

export const ContactDrawerModal: React.FC<ContactDrawerModalProps> = ({
  isOpen,
  onClose,
  initialMessage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: SERVICES[0],
    message: '',
    preferredDate: '',
    preferredTime: '10:00',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // The modal stays mounted between openings, so the initial message has to be
  // synced on every open — reading it once at mount would leave the field empty
  // whenever the drawer is opened from a specific solution.
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, message: initialMessage || '' }));
    }
  }, [isOpen, initialMessage]);

  if (!isOpen) return null;

  const buildWhatsappUrl = () => {
    // <input type="date"> yields ISO (2026-07-25); nobody reads that in a chat.
    const [year, month, day] = formData.preferredDate.split('-');
    const readableDate = formData.preferredDate ? `${day}/${month}/${year}` : '';

    // "25/07/2026 às Outro" não se lê. Com "Outro", o horário vira algo que
    // faz sentido numa conversa.
    const readableTime =
      formData.preferredTime === 'Outro' ? 'horário a combinar' : formData.preferredTime;

    const schedule = [readableDate, readableTime]
      .filter(Boolean)
      .join(readableTime === 'horário a combinar' ? ', ' : ' às ');

    const lines = [
      'Olá! Vim pelo site da Infuse e gostaria de falar com um consultor.',
      '',
      `*Nome:* ${formData.name}`,
      `*WhatsApp:* ${formData.phone}`,
      `*E-mail:* ${formData.email}`,
      formData.company ? `*Empresa/ramo:* ${formData.company}` : null,
      `*Interesse:* ${formData.service}`,
      schedule ? `*Melhor momento:* ${schedule}` : null,
      formData.message ? `\n*Detalhes:* ${formData.message}` : null,
    ].filter((line): line is string => line !== null);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url = buildWhatsappUrl();
    setWhatsappUrl(url);

    // GA4's recommended event for a captured lead.
    track('generate_lead', {
      method: 'whatsapp',
      service: formData.service,
      has_company: Boolean(formData.company),
      has_schedule: Boolean(formData.preferredDate),
      has_details: Boolean(formData.message),
    });

    // Opened synchronously inside the submit handler: deferring it (a timeout,
    // an await) makes the browser treat it as an unsolicited popup and block it.
    window.open(url, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const update = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [field]: e.target.value });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-[#0a0d16] border border-white/10 rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">

        <button
          onClick={onClose}
          aria-label="Fechar"
          className="fluid-hover absolute top-5 right-5 p-2 rounded-full text-zinc-500 hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Tudo certo!</h3>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
              Abrimos o WhatsApp com a sua solicitação já preenchida. É só enviar
              a mensagem para falar com nosso time.
            </p>

            <div className="flex flex-col items-center gap-3 pt-2">
              {/* Fallback: if the browser blocked the new tab, this still works. */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                // Signals that the popup was blocked — if this fires often,
                // the automatic open is not reaching people.
                onClick={() => track('whatsapp_fallback_click')}
                className="fluid-hover inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Não abriu? Abrir o WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="fluid-hover px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 pr-10">
              Falar com um consultor
            </h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Preencha seus dados e receba uma apresentação personalizada para o seu negócio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className={LABEL_CLASS}>
                  Nome completo *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={formData.name}
                  onChange={update('name')}
                  className={FIELD_CLASS}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className={LABEL_CLASS}>
                    WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="(75) 99999-9999"
                    value={formData.phone}
                    onChange={update('phone')}
                    className={FIELD_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={LABEL_CLASS}>
                    E-mail *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    value={formData.email}
                    onChange={update('email')}
                    className={FIELD_CLASS}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-company" className={LABEL_CLASS}>
                  Empresa ou ramo
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Clínica, barbearia, e-commerce..."
                  value={formData.company}
                  onChange={update('company')}
                  className={FIELD_CLASS}
                />
              </div>

              <div>
                <label htmlFor="contact-service" className={LABEL_CLASS}>
                  Interesse principal
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={update('service')}
                  className={`${FIELD_CLASS} bg-[#12151f]`}
                >
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-date" className={LABEL_CLASS}>
                    Melhor data
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={update('preferredDate')}
                    className={FIELD_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="contact-time" className={LABEL_CLASS}>
                    Melhor horário
                  </label>
                  <select
                    id="contact-time"
                    value={formData.preferredTime}
                    onChange={update('preferredTime')}
                    className={`${FIELD_CLASS} bg-[#12151f]`}
                  >
                    {TIMES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={LABEL_CLASS}>
                  Conte um pouco sobre o que precisa
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Opcional"
                  value={formData.message}
                  onChange={update('message')}
                  className={`${FIELD_CLASS} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="fluid-hover w-full py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Enviar no WhatsApp</span>
              </button>

              <p className="text-xs text-zinc-500 text-center leading-relaxed">
                Ao enviar, abrimos uma conversa no WhatsApp com seus dados já preenchidos.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
