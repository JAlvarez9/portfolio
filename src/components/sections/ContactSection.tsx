import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Loader2 } from 'lucide-react';
import { PROFILE_INFO } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useCustomHooks';

export const ContactSection: React.FC = () => {
  const { copied, copyToClipboard } = useClipboard();
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fb0ff855-1997-492e-af51-ff2ad2aa2eea',
          name: senderName,
          email: senderEmail,
          message: senderMessage,
          subject: `⚡ Nuevo Mensaje Portafolio - ${senderName}`,
          from_name: 'Portafolio Web (Jose Alvarez)',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFeedback({
          type: 'success',
          message: '🚀 ¡Mensaje enviado con éxito! Te responderé a la brevedad.',
        });
        setSenderName('');
        setSenderEmail('');
        setSenderMessage('');
      } else {
        setFeedback({
          type: 'error',
          message: '⚠️ Ocurrió un problema al enviar el mensaje. Por favor intenta de nuevo.',
        });
      }
    } catch {
      setFeedback({
        type: 'error',
        message: '⚠️ Error de conexión al enviar el mensaje. Puedes escribirme directamente a mi correo.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFeedback(null), 6000);
    }
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
                <div className="p-2 rounded-md bg-primary/10 text-primary font-bold text-xs font-code">
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
                <div className="p-2 rounded-md bg-primary/10 text-primary font-bold text-xs font-code">
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

        {/* Realtime API Message Form */}
        <div className="lg:col-span-7 bg-db-card border border-db-border rounded-xl p-6 backdrop-blur-md space-y-4">
          <h3 className="text-sm font-bold font-code text-primary border-b border-white/5 pb-2 flex items-center justify-between">
            <span>INSERT INTO contact_messages</span>
            <span className="text-[10px] text-accent-emerald">API_READY</span>
          </h3>

          <form onSubmit={handleSendMessage} className="space-y-3 font-code text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-gray-400">NOMBRE / EMPRESA:</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Ej. Tech Recruiter / Colega"
                  className="w-full bg-db-dark/90 border border-db-border rounded-lg px-3.5 py-2.5 text-gray-200 focus:outline-none focus:border-primary transition-all font-ui text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400">TU CORREO (RESPUESTA):</label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full bg-db-dark/90 border border-db-border rounded-lg px-3.5 py-2.5 text-gray-200 focus:outline-none focus:border-primary transition-all font-ui text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-gray-400">PROPUESTA O CONSULTA:</label>
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
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-db-dark font-code font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>TRANSMITIENDO QUERY...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>EJECUTAR ENVÍO DIRECTO</span>
                </>
              )}
            </button>

            {feedback && (
              <div 
                className={`p-2.5 rounded-lg text-center font-code text-xs ${
                  feedback.type === 'success'
                    ? 'bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald'
                    : 'bg-accent-rose/10 border border-accent-rose/30 text-accent-rose'
                }`}
              >
                {feedback.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
