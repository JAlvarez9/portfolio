import React, { useState } from 'react';
import { Play, Menu } from 'lucide-react';
import { PROFILE_INFO } from '../../data/portfolioData';

interface QueryBarProps {
  onToggleSidebar: () => void;
  onExecuteQuery: (query: string) => void;
}

export const QueryBar: React.FC<QueryBarProps> = ({ onToggleSidebar, onExecuteQuery }) => {
  const [query, setQuery] = useState("SELECT * FROM dev_profile WHERE engineer = 'Jose Alvarez';");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onExecuteQuery(query);
  };

  return (
    <header className="sticky top-0 z-40 bg-db-main/85 backdrop-blur-md border-b border-db-border px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={onToggleSidebar}
        className="lg:hidden p-2 text-gray-400 hover:text-white rounded-md border border-db-border bg-white/[0.02]"
        aria-label="Toggle Navigation"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Interactive SQL Query Input */}
      <form onSubmit={handleSubmit} className="flex-1 max-w-2xl relative flex items-center">
        <span className="absolute left-3.5 text-primary font-code font-bold text-xs pointer-events-none">
          SQL&gt;
        </span>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escribe: SELECT * FROM projects / about / news..."
          className="w-full bg-db-panel/90 border border-db-border rounded-lg pl-14 pr-20 py-2 text-xs lg:text-sm font-code text-accent-emerald placeholder-gray-600 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all"
        />
        <button 
          type="submit"
          className="absolute right-1.5 bg-primary hover:bg-primary/90 text-db-dark px-3 py-1 rounded text-xs font-code font-bold flex items-center gap-1 transition-all shadow-[0_0_10px_rgba(56,189,248,0.3)]"
        >
          <Play className="w-3 h-3 fill-current" /> RUN
        </button>
      </form>

      {/* Direct Social Links */}
      <div className="flex items-center gap-2">
        <a 
          href={PROFILE_INFO.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-db-border bg-white/[0.02] hover:bg-primary/10 hover:border-primary/40 text-gray-300 hover:text-primary text-xs font-code transition-all"
        >
          <span>GitHub</span>
        </a>
        <a 
          href={PROFILE_INFO.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-primary/50 bg-primary text-db-dark font-bold text-xs font-code hover:bg-primary/90 transition-all shadow-[0_0_12px_rgba(56,189,248,0.25)]"
        >
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
};
