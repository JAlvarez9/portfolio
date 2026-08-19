import React from 'react';
import { Sparkles, Terminal, ArrowRight, Activity } from 'lucide-react';
import { PROFILE_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="relative rounded-2xl bg-db-card border border-db-border p-6 lg:p-10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Top Gradient Border Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent-purple to-accent-emerald"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald font-code text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
              {PROFILE_INFO.status}
            </div>

            <h1 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Jose Fernando <br />
              <span className="text-gradient">Alvarez Morales</span>
            </h1>

            <p className="font-code text-sm lg:text-base text-primary flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              {PROFILE_INFO.title}
            </p>

            <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-xl">
              Estudiante / Graduado en <strong>{PROFILE_INFO.university}</strong> ({PROFILE_INFO.degree}). Especializado en el desarrollo de arquitecturas escalables, diseño de microservicios con <strong>.NET</strong> y aplicaciones web frontend de alto rendimiento con <strong>TypeScript & React</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#projects" 
                className="px-4 py-2.5 rounded-lg bg-primary text-db-dark font-code font-bold text-xs lg:text-sm flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-db-border text-gray-300 hover:text-primary hover:border-primary/40 font-code text-xs lg:text-sm transition-all"
              >
                <span>Iniciar Conexión</span>
              </a>
            </div>
          </div>

          {/* Cluster Status Console */}
          <div className="lg:col-span-5 bg-db-dark/90 border border-db-border/80 rounded-xl p-5 font-code text-xs space-y-3.5 shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-gray-500">
              <span className="flex items-center gap-1.5 text-gray-300">
                <Activity className="w-4 h-4 text-primary" />
                SYSTEM_DIAGNOSTICS
              </span>
              <span className="text-[10px] text-accent-emerald bg-accent-emerald/10 px-2 py-0.5 rounded border border-accent-emerald/20">ONLINE</span>
            </div>

            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span className="text-gray-500">Availability:</span>
                <span className="text-accent-emerald font-bold">99.99%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Core Specialty:</span>
                <span className="text-primary font-semibold">.NET &bull; TypeScript</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Secondary:</span>
                <span className="text-accent-purple font-semibold">Go &bull; Python &bull; Java</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Alma Mater:</span>
                <span className="text-gray-200">USAC (Sistemas)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pattern Focus:</span>
                <span className="text-accent-emerald">Clean Architecture</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 text-[11px] text-gray-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>Engine Status: Ready to deploy & scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
