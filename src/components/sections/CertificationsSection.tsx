import React from 'react';
import { Award, Hourglass } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div 
            key={cert.id}
            className="bg-db-card border border-dashed border-primary/30 hover:border-primary rounded-xl p-6 backdrop-blur-md flex flex-col items-center justify-center text-center space-y-3 transition-all hover:bg-primary/[0.03] group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>

            <h4 className="text-sm font-bold text-gray-100">{cert.title}</h4>
            <p className="text-xs text-gray-400 font-ui leading-relaxed">{cert.description}</p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/30 text-accent-amber text-[10px] font-code font-semibold">
              <Hourglass className="w-3 h-3 animate-spin" />
              <span>Próximamente</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
