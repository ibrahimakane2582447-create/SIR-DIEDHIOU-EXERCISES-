import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Pronouns } from './sections/Pronouns';
import { Auxiliaries } from './sections/Auxiliaries';
import { Tags } from './sections/Tags';
import { YesNoQuestions } from './sections/YesNoQuestions';
import { Tenses } from './sections/Tenses';
import { IfClauses } from './sections/IfClauses';
import { Modals } from './sections/Modals';
import { PassiveActive } from './sections/PassiveActive';
import { ReportedSpeech } from './sections/ReportedSpeech';
import { InfinitiveGerund } from './sections/InfinitiveGerund';
import { WordFormation } from './sections/WordFormation';
import { LinkingWords } from './sections/LinkingWords';

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden bg-surface rounded-3xl shadow-sm border border-separator/60 transition-all duration-300 hover:shadow-md">
      <button
        className="w-full py-5 px-6 flex justify-between items-center bg-transparent transition-colors text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">{title}</h2>
        <div className={`transform transition-transform duration-300 flex items-center justify-center bg-highlight rounded-full p-2 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-accent flex-shrink-0" size={20} strokeWidth={3} />
        </div>
      </button>
      {isOpen && (
        <div className="py-6 px-6 border-t border-separator/60 bg-surface/50">
          {children}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div 
      className="min-h-screen bg-paper font-sans select-none pb-24 text-ink"
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <header className="px-6 py-12 md:px-8 bg-accent text-white flex flex-col justify-center items-center shadow-md rounded-b-[40px] mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
        
        <span className="font-bold text-xs uppercase tracking-widest mb-3 opacity-90 block bg-white/20 px-4 py-1.5 rounded-full z-10 backdrop-blur-sm">
          Mr Diedhiou • Rahman Courses
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-center z-10">
          English Masterclass
        </h1>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-6">
        <AccordionSection title="I. The Pronouns">
          <Pronouns />
        </AccordionSection>
        
        <AccordionSection title="II. Auxiliaries">
          <Auxiliaries />
        </AccordionSection>

        <AccordionSection title="III. Tags">
          <Tags />
        </AccordionSection>

        <AccordionSection title="IV. Questions & Answers">
          <YesNoQuestions />
        </AccordionSection>

        <AccordionSection title="V. Tenses & Verb Forms">
          <Tenses />
        </AccordionSection>

        <AccordionSection title="VI. If Clauses">
          <IfClauses />
        </AccordionSection>

        <AccordionSection title="VII. The Modals">
          <Modals />
        </AccordionSection>

        <AccordionSection title="VIII. Active & Passive Voice">
          <PassiveActive />
        </AccordionSection>

        <AccordionSection title="IX. Direct & Indirect Speeches">
          <ReportedSpeech />
        </AccordionSection>

        <AccordionSection title="X. Infinitive & Gerund">
          <InfinitiveGerund />
        </AccordionSection>

        <AccordionSection title="XI. Word Formation">
          <WordFormation />
        </AccordionSection>

        <AccordionSection title="XII. Linking Words">
          <LinkingWords />
        </AccordionSection>
      </main>
    </div>
  );
}
