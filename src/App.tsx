import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { QueryBar } from './components/layout/QueryBar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechCuriositiesSection } from './components/sections/TechCuriositiesSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { PROFILE_INFO } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scrollspy detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'news', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExecuteQuery = (rawQuery: string) => {
    const query = rawQuery.toLowerCase();
    let target = 'projects';

    if (query.includes('about') || query.includes('profile') || query.includes('skill')) {
      target = 'about';
    } else if (query.includes('project')) {
      target = 'projects';
    } else if (query.includes('news') || query.includes('curiosities') || query.includes('trivia')) {
      target = 'news';
    } else if (query.includes('cert')) {
      target = 'certifications';
    } else if (query.includes('contact') || query.includes('connect')) {
      target = 'contact';
    } else if (query.includes('status') || query.includes('cluster')) {
      target = 'hero';
    }

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-db-main flex">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Studio Area */}
      <div className="flex-1 lg:ml-72 flex flex-col min-w-0">
        <QueryBar 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onExecuteQuery={handleExecuteQuery}
        />

        <main className="p-4 lg:p-10 max-w-6xl w-full mx-auto space-y-16 lg:space-y-24">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TechCuriositiesSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <footer className="mt-16 border-t border-db-border py-8 px-4 text-center font-code text-xs text-gray-500 space-y-1 bg-db-dark/30">
          <p>&copy; {new Date().getFullYear()} {PROFILE_INFO.name} &bull; {PROFILE_INFO.university}</p>
          <p className="text-gray-600">Built with React, TypeScript, Vite & Tailwind CSS &bull; Hosted on GitHub Pages</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
