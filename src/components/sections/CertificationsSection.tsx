import React from 'react';
import { Hourglass, Sparkles } from 'lucide-react';

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
          UPCOMING
        </span>
      </div>

      {/* Single Clean Minimalist Container */}
      <div className="bg-db-card border border-dashed border-primary/30 rounded-xl p-8 lg:p-12 backdrop-blur-md flex flex-col items-center justify-center text-center space-y-3 shadow-md">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-amber/10 border border-accent-amber/30 text-accent-amber font-code text-sm font-semibold shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <Hourglass className="w-4 h-4 animate-spin" />
          <span>Próximamente</span>
        </div>

        <p className="text-xs lg:text-sm text-gray-400 font-ui max-w-sm pt-1">
          Módulo en desarrollo. Las certificaciones y acreditaciones estarán disponibles aquí muy pronto.
        </p>

        <div className="pt-2 text-[10px] font-code text-gray-600 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-primary/60" />
          <span>STATUS: IN_PROGRESS</span>
        </div>
      </div>
    </section>
  );
};
