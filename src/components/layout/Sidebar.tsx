import React from 'react';
import { 
  Database, 
  Server, 
  UserCheck, 
  FolderGit2, 
  Terminal, 
  Award, 
  Radio 
} from 'lucide-react';
import { useLiveUptime } from '../../hooks/useCustomHooks';

interface SidebarProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, isOpen, onClose }) => {
  const { timeString, uptimeFormatted } = useLiveUptime();

  const navItems = [
    { id: 'hero', label: 'db.cluster_status', icon: Server },
    { id: 'about', label: 'db.about_me', icon: UserCheck, count: 'profile' },
    { id: 'projects', label: 'db.projects', icon: FolderGit2, count: '4' },
    { id: 'news', label: 'db.tech_curiosities', icon: Terminal, count: 'live' },
    { id: 'certifications', label: 'db.certifications', icon: Award, count: 'vault' },
    { id: 'contact', label: 'db.connection_endpoints', icon: Radio },
  ];

  return (
    <aside className={`
      fixed top-0 left-0 bottom-0 w-72 bg-db-sidebar border-r border-db-border flex flex-col z-50 transition-transform duration-300 backdrop-blur-xl
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Header */}
      <div className="p-5 border-b border-db-border flex items-center gap-3">
        <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(56,189,248,0.25)]">
          <Database className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-100 tracking-wide font-ui">JoseAlvarez_DB</h2>
          <div className="flex items-center gap-1.5 text-xs text-accent-emerald font-code">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
            CLUSTER_HEALTHY
          </div>
        </div>
      </div>

      {/* Schemas List */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
        <div className="text-[11px] font-code text-gray-500 uppercase tracking-wider px-2 py-1">
          SCHEMAS & TABLES
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onClose}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-code transition-all
                ${isActive 
                  ? 'bg-primary/10 text-primary border border-primary/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]' 
                  : 'text-gray-400 hover:text-primary hover:bg-white/[0.02] border border-transparent'}
              `}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-gray-500'}`} />
              <span className="truncate">{item.label}</span>
              {item.count && (
                <span className="ml-auto text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-gray-400">
                  {item.count}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Node Metrics Footer */}
      <div className="p-4 border-t border-db-border bg-db-dark/40 font-code text-[11px] space-y-1 text-gray-500">
        <div className="flex justify-between">
          <span>Engine:</span>
          <span className="text-gray-300">PostgreSQL v16.4</span>
        </div>
        <div className="flex justify-between">
          <span>Uptime:</span>
          <span className="text-primary">{uptimeFormatted}</span>
        </div>
        <div className="flex justify-between">
          <span>Local GT:</span>
          <span className="text-gray-300">{timeString}</span>
        </div>
      </div>
    </aside>
  );
};
