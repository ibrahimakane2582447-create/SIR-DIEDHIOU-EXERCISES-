import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { InstallPrompt } from './components/InstallPrompt';
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
    <div className="mb-4 overflow-hidden bg-surface rounded-2xl sm:rounded-3xl shadow-sm border border-separator/60 transition-all duration-300 w-full box-border">
      <button
        className="w-full py-4 sm:py-5 px-5 sm:px-6 flex flex-row justify-between items-center bg-transparent text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-[17px] sm:text-xl font-extrabold text-ink pr-3 break-words flex-1 min-w-0">{title}</h2>
        <div className={`transform transition-transform duration-300 flex items-center justify-center p-1.5 sm:p-2 shrink-0 ${isOpen ? 'rotate-180 text-accent' : 'text-muted'}`}>
          <ChevronDown size={20} strokeWidth={2.5} />
        </div>
      </button>
      {isOpen && (
        <div className="py-5 px-4 sm:px-6 border-t border-separator/50 bg-paper/30 box-border w-full">
          {children}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div 
      className="min-h-screen bg-paper font-sans select-none pb-24 text-ink flex flex-col w-full relative m-0 p-0 overflow-x-hidden"
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <InstallPrompt />
      <header className="px-5 py-10 sm:px-8 bg-accent text-white flex flex-col justify-center items-center shadow-md mb-8 relative rounded-b-[32px] sm:rounded-b-[40px]">
        <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2 opacity-90 block bg-white/20 px-4 py-1.5 rounded-full z-10 backdrop-blur-sm">
          Mr DIEDHIOU
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight text-center z-10 break-words">
          EXERCICES ANGLAIS
        </h1>
      </header>

      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 flex-1 box-border">
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
