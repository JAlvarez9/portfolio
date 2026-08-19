import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { PROFILE_INFO } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useCustomHooks';

export const ContactSection: React.FC = () => {
  const { copied, copyToClipboard } = useClipboard();
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto Portafolio - ${senderName}`);
    const body = encodeURIComponent(`Hola Jose,\n\n${senderMessage}\n\nDe: ${senderName}`);
    window.location.href = `mailto:${PROFILE_INFO.email}?subject=${subject}&body=${body}`;

    setFeedback('🚀 Conexión establecida. Abriendo tu cliente de correo...');
    setTimeout(() => setFeedback(''), 4000);
    setSenderName('');
    setSenderMessage('');
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-4">
      {/* Table Header Indicator */}
      <div className="flex items-center justify-between border-b border-db-border pb-3">
        <h2 className="text-lg lg:text-xl font-bold font-code flex items-center gap-2 text-gray-100">
          <span className="text-accent-purple">TABLE</span>
          <span className="text-primary">db.connection_endpoints</span>
        </h2>
        <span className="text-xs font-code text-gray-500 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
          DIRECT ACCESS
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Endpoints List */}
        <div className="lg:col-span-5 bg-db-card border border-db-border rounded-xl p-6 backdrop-blur-md space-y-4">
          <h3 className="text-sm font-bold font-code text-primary border-b border-white/5 pb-2">
            Puntos de Enlace Directos
          </h3>

          <div className="space-y-3">
            {/* Email Endpoint */}
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-white/[0.02] border border-db-border hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">Email Principal</h4>
                  <p className="text-[11px] font-code text-gray-400 truncate max-w-[170px]">
                    {PROFILE_INFO.email}
                  </p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE_INFO.email)}
                className={`px-2.5 py-1.5 rounded text-xs font-code flex items-center gap-1 transition-all border ${
                  copied 
                    ? 'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/40' 
                    : 'bg-white/5 text-gray-300 border-white/10 hover:text-primary hover:border-primary/40'
                }`}
                title="Copiar correo"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>

            {/* LinkedIn Endpoint */}
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-white/[0.02] border border-db-border hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary font-bold text-xs">
                  in
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">LinkedIn</h4>
                  <p className="text-[11px] font-code text-gray-400">Jose Fernando Alvarez</p>
                </div>
              </div>
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded text-xs font-code bg-white/5 text-gray-300 border border-white/10 hover:text-primary hover:border-primary/40 transition-all"
              >
                Conectar
              </a>
            </div>

            {/* GitHub Endpoint */}
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-white/[0.02] border border-db-border hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary font-bold text-xs">
                  git
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">GitHub</h4>
                  <p className="text-[11px] font-code text-gray-400">github.com/JAlvarez9</p>
                </div>
              </div>
              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded text-xs font-code bg-white/5 text-gray-300 border border-white/10 hover:text-primary hover:border-primary/40 transition-all"
              >
                Seguir
              </a>
            </div>
          </div>
        </div>

        {/* Message Query Box */}
        <div className="lg:col-span-7 bg-db-card border border-db-border rounded-xl p-6 backdrop-blur-md space-y-4">
          <h3 className="text-sm font-bold font-code text-primary border-b border-white/5 pb-2">
            INSERT INTO contact_messages
          </h3>

          <form onSubmit={handleSendMessage} className="space-y-3 font-code text-xs">
            <div className="space-y-1">
              <label className="text-gray-400">NOMBRE / EMPRESA:</label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Ej. Tech Recruiter / Colega Desarrollador"
                className="w-full bg-db-dark/90 border border-db-border rounded-lg px-3.5 py-2.5 text-gray-200 focus:outline-none focus:border-primary transition-all font-ui text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-gray-400">PROPUESTA O MENSAJE:</label>
              <textarea
                required
                rows={4}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder="Escribe los detalles de tu proyecto o propuesta..."
                className="w-full bg-db-dark/90 border border-db-border rounded-lg px-3.5 py-2.5 text-gray-200 focus:outline-none focus:border-primary transition-all font-ui text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-db-dark font-code font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>EJECUTAR ENVÍO</span>
            </button>

            {feedback && (
              <p className="text-accent-emerald font-code text-xs text-center pt-2">
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
