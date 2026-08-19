import React from 'react';
import { User, Cpu, Database } from 'lucide-react';
import { SKILLS_DATA, TECH_BADGES } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 space-y-4">
      {/* Table Header Indicator */}
      <div className="flex items-center justify-between border-b border-db-border pb-3">
        <h2 className="text-lg lg:text-xl font-bold font-code flex items-center gap-2 text-gray-100">
          <span className="text-accent-purple">TABLE</span>
          <span className="text-primary">db.about_me</span>
        </h2>
        <span className="text-xs font-code text-gray-500 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
          1 RECORD FOUND
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-db-card border border-db-border rounded-xl p-6 backdrop-blur-md space-y-4 hover:border-primary/40 transition-all shadow-md">
          <h3 className="text-base font-bold font-code text-primary flex items-center gap-2 border-b border-white/5 pb-2">
            <User className="w-4 h-4 text-primary" />
            Perfil & Filosofía de Desarrollo
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            ¡Hola! Soy Jose Alvarez. Mi enfoque técnico se centra en el desarrollo de software mantenible, con especial énfasis en el desacoplamiento, la seguridad de tipos y la resiliencia en entornos de producción.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong className="text-gray-200">Filosofía de Trabajo:</strong> Diseño arquitecturas escalables antes de escribir código. Valoro las pruebas unitarias, la separación de responsabilidades y las interfaces claras.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Cuento con una mayor especialidad y experiencia en el ecosistema <strong>.NET (C#)</strong> y en <strong>TypeScript / React</strong>, dominando adicionalmente <strong>Go</strong> para herramientas de alta concurrencia y <strong>Python</strong> para procesamiento de datos.
          </p>
        </div>

        {/* Skills Metrics & Badges */}
        <div className="bg-db-card border border-db-border rounded-xl p-6 backdrop-blur-md space-y-5 hover:border-primary/40 transition-all shadow-md">
          <h3 className="text-base font-bold font-code text-primary flex items-center gap-2 border-b border-white/5 pb-2">
            <Cpu className="w-4 h-4 text-primary" />
            Dominio Técnico & Stack
          </h3>

          <div className="space-y-3.5">
            {SKILLS_DATA.map((skill) => (
              <div key={skill.name} className="space-y-1.5 font-code">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-200 font-semibold">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.levelPercentage}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent-purple rounded-full transition-all duration-1000"
                    style={{ width: `${skill.levelPercentage}%` }}
                  ></div>
                </div>
                <div className="text-[11px] text-gray-500">{skill.levelLabel}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/5">
            <div className="text-xs font-code text-gray-400 mb-2 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-primary" />
              Ecosistema de Bases de Datos & Herramientas:
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_BADGES.map((badge) => (
                <span 
                  key={badge}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-db-border text-xs font-code text-gray-300 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
