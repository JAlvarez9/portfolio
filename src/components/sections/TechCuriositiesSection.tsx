import React, { useState } from 'react';
import { Dices, Sparkles, Newspaper } from 'lucide-react';
import { TRIVIA_DATA } from '../../data/portfolioData';

export const TechCuriositiesSection: React.FC = () => {
  const [currentTriviaIndex, setCurrentTriviaIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleRandomFact = () => {
    setIsFlipping(true);
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * TRIVIA_DATA.length);
      } while (nextIndex === currentTriviaIndex && TRIVIA_DATA.length > 1);
      setCurrentTriviaIndex(nextIndex);
      setIsFlipping(false);
    }, 250);
  };

  const currentFact = TRIVIA_DATA[currentTriviaIndex];

  return (
    <section id="news" className="scroll-mt-24 space-y-4">
      {/* Table Header Indicator */}
      <div className="flex items-center justify-between border-b border-db-border pb-3">
        <h2 className="text-lg lg:text-xl font-bold font-code flex items-center gap-2 text-gray-100">
          <span className="text-accent-purple">TABLE</span>
          <span className="text-primary">db.tech_curiosities</span>
        </h2>
        <span className="text-xs font-code text-accent-emerald bg-accent-emerald/10 px-2.5 py-1 rounded border border-accent-emerald/20 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse"></span>
          REALTIME FEED
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Random Generator Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-db-card to-db-dark border border-accent-purple/30 rounded-xl p-6 lg:p-8 backdrop-blur-md flex flex-col justify-between items-center text-center shadow-lg relative overflow-hidden">
          <div className="w-14 h-14 rounded-full bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-4 shadow-[0_0_20px_rgba(129,140,248,0.2)]">
            <Sparkles className="w-7 h-7" />
          </div>

          <div className={`transition-opacity duration-250 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-[10px] font-code font-bold mb-3">
              {currentFact.tag}
            </span>
            <p className="text-base text-gray-100 font-medium italic leading-relaxed mb-3">
              "{currentFact.fact}"
            </p>
            <p className="text-xs font-code text-primary">
              — {currentFact.authorOrSource}
            </p>
          </div>

          <button
            onClick={handleRandomFact}
            className="mt-6 px-4 py-2.5 rounded-lg bg-accent-purple hover:bg-accent-purple/90 text-white font-code text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(129,140,248,0.35)]"
          >
            <Dices className="w-4 h-4" />
            <span>Generar Dato Curioso</span>
          </button>
        </div>

        {/* Dev Facts Timeline */}
        <div className="lg:col-span-6 bg-db-card border border-db-border rounded-xl p-6 backdrop-blur-md space-y-4">
          <h3 className="text-sm font-bold font-code text-primary flex items-center gap-2 border-b border-white/5 pb-2">
            <Newspaper className="w-4 h-4 text-primary" />
            Hitos & Curiosidades de la Computación
          </h3>

          <div className="space-y-4 font-code text-xs">
            <div className="border-l-2 border-primary pl-3 space-y-1">
              <span className="text-gray-500 text-[10px]">MEMORIA & ARRAYS</span>
              <h4 className="text-gray-200 font-semibold">¿Por qué los índices inician en 0?</h4>
              <p className="text-gray-400 font-ui text-xs">
                En lenguaje C, <code>array[i]</code> traduce a <code>*(array + i)</code>. El 0 indica 0 desplazamiento de bytes desde el inicio de memoria.
              </p>
            </div>

            <div className="border-l-2 border-accent-purple pl-3 space-y-1">
              <span className="text-gray-500 text-[10px]">MICROSOFT & ANDERS HEJLSBERG</span>
              <h4 className="text-gray-200 font-semibold">El creador de TypeScript y C#</h4>
              <p className="text-gray-400 font-ui text-xs">
                Anders Hejlsberg lideró la arquitectura de Turbo Pascal, C# y luego TypeScript para dotar de tipado estático y robustez al desarrollo web moderno.
              </p>
            </div>

            <div className="border-l-2 border-accent-emerald pl-3 space-y-1">
              <span className="text-gray-500 text-[10px]">GOOGLE CONCURRENCY</span>
              <h4 className="text-gray-200 font-semibold">Origen de Golang</h4>
              <p className="text-gray-400 font-ui text-xs">
                Nació en Google buscando simplificar la concurrencia masiva (goroutines) y eliminar tiempos de compilación lentos de C++.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
