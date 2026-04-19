import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export type AnswerType = string | string[];

const checkIsCorrect = (val: string, answer?: AnswerType) => {
  if (answer === undefined || answer === null) return null;
  if (!val) return null;
  
  const normalize = (s: string) => String(s).replace(/[\.\,\!\?‘’']/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  const nVal = normalize(val);
  if (!nVal) return null;

  if (Array.isArray(answer)) {
    return answer.some(a => normalize(a) === nVal);
  }
  return normalize(answer as string) === nVal;
};

export const Input = ({ placeholder = "...", answer }: { placeholder?: string, answer?: AnswerType }) => {
  const [val, setVal] = useState("");
  const [blurred, setBlurred] = useState(false);
  
  const correct = checkIsCorrect(val, answer);
  const showColor = val && blurred && answer !== undefined;
  const isWrong = showColor && !correct;
  const correctionText = Array.isArray(answer) ? answer[0] : answer;

  const colorClass = showColor
    ? (correct ? "border-green-400 text-green-700 bg-green-100 shadow-[0_4px_0_0_rgb(74,222,128)]" : "border-red-400 text-red-700 bg-red-100 shadow-[0_4px_0_0_rgb(248,113,113)] line-through")
    : "border-separator text-accent bg-surface hover:border-accent/40 shadow-[0_2px_0_0_var(--color-separator)] focus:shadow-[0_4px_0_0_var(--color-accent)] focus:border-accent focus:-translate-y-1";

  return (
    <span className="inline-flex items-center mx-1 align-middle gap-2 flex-wrap justify-center sm:justify-start">
      <input 
        type="text" 
        placeholder={placeholder}
        value={val}
        onChange={(e) => { setVal(e.target.value); setBlurred(false); }}
        onBlur={() => setBlurred(true)}
        className={`border-2 px-3 py-1.5 font-bold text-[16px] outline-none transition-all duration-200 w-28 text-center placeholder-muted/40 rounded-xl ${colorClass}`}
        autoComplete="off"
      />
      {isWrong && (
        <span className="inline-flex items-center justify-center bg-green-100 text-green-700 border-2 border-green-400 font-bold text-[16px] px-3 py-1.5 rounded-xl shadow-[0_4px_0_0_rgb(74,222,128)] whitespace-normal break-words text-left leading-snug">
          {correctionText}
        </span>
      )}
    </span>
  );
};

export const LongInput = ({ placeholder = "...", answer }: { placeholder?: string, answer?: AnswerType }) => {
  const [val, setVal] = useState("");
  const [blurred, setBlurred] = useState(false);

  const correct = checkIsCorrect(val, answer);
  const showColor = val && blurred && answer !== undefined;
  const isWrong = showColor && !correct;
  const correctionText = Array.isArray(answer) ? answer[0] : answer;

  const colorClass = showColor
    ? (correct ? "border-green-400 text-green-700 bg-green-100 shadow-[0_4px_0_0_rgb(74,222,128)]" : "border-red-400 text-red-700 bg-red-100 shadow-[0_4px_0_0_rgb(248,113,113)] line-through")
    : "border-separator text-accent bg-surface hover:border-accent/40 shadow-[0_2px_0_0_var(--color-separator)] focus:shadow-[0_4px_0_0_var(--color-accent)] focus:border-accent focus:-translate-y-1";

  return (
    <div className="mt-4 w-full mb-3 flex flex-col gap-2">
      <input 
        type="text" 
        placeholder={placeholder}
        value={val}
        onChange={(e) => { setVal(e.target.value); setBlurred(false); }}
        onBlur={() => setBlurred(true)}
        className={`border-2 px-4 py-3 font-bold text-[16px] outline-none transition-all w-full placeholder-muted/40 rounded-xl ${colorClass}`}
        autoComplete="off"
      />
      {isWrong && (
        <span className="inline-flex items-center justify-start bg-green-100 text-green-700 border-2 border-green-400 font-bold text-[16px] px-4 py-3 rounded-xl shadow-[0_4px_0_0_rgb(74,222,128)] whitespace-normal break-words text-left leading-snug w-full">
          {correctionText}
        </span>
      )}
    </div>
  );
};

export const Select = ({ options, answer }: { options: string[], answer?: AnswerType }) => {
  const [val, setVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const correct = checkIsCorrect(val, answer);
  const showColor = val && answer !== undefined;
  const isWrong = showColor && !correct;
  const correctionText = Array.isArray(answer) ? answer[0] : answer;

  const colorClass = showColor
    ? (correct ? "border-green-400 text-green-800 bg-green-100 shadow-[0_4px_0_0_rgb(74,222,128)]" : "border-red-400 text-red-800 bg-red-100 shadow-[0_4px_0_0_rgb(248,113,113)]")
    : isOpen 
      ? "border-accent text-accent bg-surface shadow-[0_4px_0_0_var(--color-accent)]"
      : "border-separator text-accent bg-surface hover:border-accent/40 shadow-[0_2px_0_0_var(--color-separator)] focus:-translate-y-1";

  return (
    <div className="relative inline-block mx-1 align-middle" ref={wrapperRef}>
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2 flex-wrap">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`border-2 px-4 py-1.5 min-w-[80px] font-bold text-[16px] outline-none transition-all duration-200 cursor-pointer rounded-xl flex items-center justify-between gap-2 select-none ${colorClass} ${isOpen || showColor ? '-translate-y-1' : ''}`}
        >
          <div className="flex items-center gap-2">
            <span className={val ? (isWrong ? "line-through opacity-80" : "opacity-100") : "opacity-40"}>{val || "..."}</span>
          </div>
          <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isWrong ? 'hidden' : ''}`} />
        </div>
        {isWrong && (
          <span className="inline-flex items-center justify-center bg-green-100 text-green-800 border-2 border-green-400 font-bold text-[16px] px-3 py-1.5 rounded-xl shadow-[0_4px_0_0_rgb(74,222,128)] whitespace-normal break-words text-left leading-snug">
            {correctionText}
          </span>
        )}
      </div>
      
      {isOpen && (
        <div className="absolute z-50 top-full mt-2 left-0 min-w-[200px] max-w-[85vw] bg-surface border-2 border-separator rounded-xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-48 overflow-y-auto">
            {options.map((opt, i) => (
              <div 
                key={i} 
                onClick={() => { setVal(opt); setIsOpen(false); }}
                className={`px-4 py-2 hover:bg-highlight cursor-pointer font-bold text-ink whitespace-normal break-words leading-snug transition-colors ${val === opt ? 'bg-highlight text-accent' : ''}`}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Question = ({ num, children }: { num?: string | number, children: React.ReactNode }) => {
  return (
    <div className="mb-5 p-4 sm:p-5 bg-surface/80 border-2 border-separator/50 shadow-sm transition-all hover:bg-surface rounded-2xl w-full">
      <div className="font-bold text-base sm:text-lg leading-loose text-ink whitespace-normal break-words" style={{ overflowWrap: 'anywhere' }}>
        {num && <span className="mr-2 text-accent">{num}.</span>}
        {children}
      </div>
    </div>
  );
};

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-3 mb-5 mt-8">
      <div className="h-3 w-3 rounded-full bg-accent shadow-[0_2px_0_0_var(--color-accent-dark)]"></div>
      <span className="text-sm font-extrabold uppercase text-accent tracking-widest leading-tight">
        {children}
      </span>
    </div>
  );
};

import { RotateCw } from 'lucide-react';

export const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  const toggleFullscreenAndRotate = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        if (window.screen && window.screen.orientation && (window.screen.orientation as any).lock) {
          await (window.screen.orientation as any).lock('landscape');
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (error) {
      console.error(error);
      alert("La rotation automatique n'est pas supportée par votre navigateur actuel. Veuillez pencher votre téléphone manuellement.");
    }
  };

  return (
    <div className="w-full my-6">
      <div className="mb-4 flex justify-end">
        <button 
          onClick={toggleFullscreenAndRotate}
          className="flex items-center gap-2 bg-highlight hover:bg-accent hover:text-white text-accent px-4 py-2 rounded-xl font-bold transition-colors border-2 border-accent/20 hover:border-accent"
        >
          <RotateCw size={18} />
          <span>Rotation écran</span>
        </button>
      </div>
      <div className="overflow-x-auto text-sm bg-surface rounded-2xl shadow-sm border-2 border-separator/50">
        {children}
      </div>
    </div>
  );
};
