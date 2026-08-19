import React, { useState } from 'react';
import { Folder } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { Project } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'typescript' | 'dotnet' | 'go' | 'systems'>('all');

  const filters = [
    { id: 'all', label: 'TODOS (*)' },
    { id: 'typescript', label: 'TYPESCRIPT / REACT' },
    { id: 'dotnet', label: '.NET / C#' },
    { id: 'go', label: 'GO (GOLANG)' },
    { id: 'systems', label: 'SISTEMAS & COMPILADORES' },
  ] as const;

  const filteredProjects = PROJECTS_DATA.filter((p: Project) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter || p.techs.some(t => t.toLowerCase().includes(activeFilter));
  });

  return (
    <section id="projects" className="scroll-mt-24 space-y-4">
      {/* Table Header Indicator */}
      <div className="flex items-center justify-between border-b border-db-border pb-3">
        <h2 className="text-lg lg:text-xl font-bold font-code flex items-center gap-2 text-gray-100">
          <span className="text-accent-purple">TABLE</span>
          <span className="text-primary">db.projects</span>
        </h2>
        <span className="text-xs font-code text-gray-500 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
          {filteredProjects.length} ENTRIES
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`
              px-3.5 py-1.5 rounded-md font-code text-xs transition-all border
              ${activeFilter === f.id
                ? 'bg-primary text-db-dark border-primary font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'bg-white/[0.02] border-db-border text-gray-400 hover:text-white hover:border-primary/30'}
            `}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {filteredProjects.map((proj) => (
          <div 
            key={proj.id}
            className="group bg-db-card border border-db-border rounded-xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(56,189,248,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Folder className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-xs font-code text-gray-400 hover:text-primary transition-colors border border-white/10 rounded bg-white/5"
                    title="Ver repositorio en GitHub"
                  >
                    GitHub &rarr;
                  </a>
                </div>
              </div>

              <h3 className="text-base font-bold text-gray-100 group-hover:text-primary transition-colors mb-2">
                {proj.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {proj.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {proj.techs.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[11px] font-code text-accent-purple"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
