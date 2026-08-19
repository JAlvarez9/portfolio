import React from 'react';
import { Award, Hourglass, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="scroll-mt-24 space-y-4">
      {/* Table Header Indicator */}
      <div className="flex items-center justify-between border-b border-db-border pb-3">
        <h2 className="text-lg lg:text-xl font-bold font-code flex items-center gap-2 text-gray-100">
          <span className="text-accent-purple">TABLE</span>
          <span className="text-primary">db.certifications</span>
        </h2>
        <span className="text-xs font-code text-gray-500 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
          UPCOMING VAULT
        </span>
      </div>

      {/* Generic Upcoming State Container */}
      <div className="bg-db-card border border-dashed border-primary/30 hover:border-primary/60 rounded-2xl p-8 lg:p-12 backdrop-blur-md flex flex-col items-center justify-center text-center space-y-4 transition-all hover:bg-primary/[0.02] shadow-lg">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-md">
          <h3 className="text-lg font-bold text-gray-100 font-code">
            Certificaciones & Acreditaciones Profesionales
          </h3>
          <p className="text-sm text-gray-400 font-ui leading-relaxed">
            Esta sección se encuentra en preparación y estará disponible próximamente con los certificados y logros técnicos en curso.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-amber/10 border border-accent-amber/30 text-accent-amber text-xs font-code font-semibold">
          <Hourglass className="w-3.5 h-3.5 animate-spin" />
          <span>Próximamente / In Progress</span>
        </div>

        <div className="pt-2 text-[11px] font-code text-gray-500 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>STATUS: PENDING_INGESTION</span>
        </div>
      </div>
    </section>
  );
};
