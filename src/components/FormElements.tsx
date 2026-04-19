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
    ? (correct ? "border-green-500 text-green-700 bg-green-50" : "border-red-400 text-red-600 bg-red-50 line-through")
    : "border-separator text-accent bg-surface focus:border-accent";

  return (
    <span className="inline align-middle mx-1 whitespace-normal">
      <input 
        type="text" 
        placeholder={placeholder}
        value={val}
        onChange={(e) => { setVal(e.target.value); setBlurred(false); }}
        onBlur={() => setBlurred(true)}
        className={`inline-block border px-3 py-1 font-bold text-[16px] outline-none transition-colors w-24 sm:w-28 text-center placeholder-muted/40 rounded-lg shadow-sm box-border ${colorClass}`}
        style={{ marginBottom: '2px' }}
        autoComplete="off"
      />
      {isWrong && (
        <span className="inline-block bg-green-50 text-green-700 border border-green-400 font-bold text-[14px] px-2 py-0.5 rounded shadow-sm ml-1 align-middle box-border" style={{ marginBottom: '2px' }}>
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
    ? (correct ? "border-green-500 text-green-700 bg-green-50" : "border-red-400 text-red-600 bg-red-50 line-through")
    : "border-separator text-accent bg-surface focus:border-accent";

  return (
    <div className="mt-4 mb-2 flex flex-col gap-2 w-full box-border">
      <textarea 
        placeholder={placeholder}
        value={val}
        onChange={(e) => { 
          setVal(e.target.value); 
          setBlurred(false); 
          e.target.style.height = 'auto'; 
          e.target.style.height = e.target.scrollHeight + 'px'; 
        }}
        onBlur={() => setBlurred(true)}
        className={`block border px-4 py-2 font-bold text-[16px] outline-none transition-colors w-full placeholder-muted/40 rounded-xl resize-none overflow-hidden shadow-sm box-border ${colorClass}`}
        autoComplete="off"
        rows={1}
        style={{ minHeight: '44px' }}
      />
      {isWrong && (
        <div className="bg-green-50 text-green-700 border border-green-400 font-bold text-[15px] px-4 py-2 rounded-xl shadow-sm break-words text-left box-border w-full">
          {correctionText}
        </div>
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
    ? (correct ? "border-green-500 text-green-700 bg-green-50" : "border-red-400 text-red-600 bg-red-50")
    : isOpen 
      ? "border-accent text-accent bg-surface"
      : "border-separator text-accent bg-surface";

  return (
    <span className="inline align-middle mx-1 whitespace-normal">
      <span className="relative inline-block align-middle box-border" ref={wrapperRef} style={{ marginBottom: '2px' }}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex items-center justify-between gap-1 border px-3 py-1 min-w-[70px] font-bold text-[16px] outline-none transition-colors cursor-pointer rounded-lg shadow-sm box-border ${colorClass}`}
        >
          <span className={`text-left block truncate max-w-[120px] ${val ? (isWrong ? "line-through opacity-80" : "opacity-100") : "opacity-40"}`}>{val || "..."}</span>
          <ChevronDown size={16} className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''} ${isWrong ? 'hidden' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute z-50 top-full mt-1 left-0 min-w-full w-max max-w-[85vw] bg-white border border-separator rounded-lg overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-1 duration-200 text-left">
            <div className="max-h-48 overflow-y-auto">
              {options.map((opt, i) => (
                <div 
                  key={i} 
                  onClick={() => { setVal(opt); setIsOpen(false); }}
                  className={`px-4 py-2 hover:bg-highlight cursor-pointer font-bold text-[15px] text-ink whitespace-normal break-words leading-snug transition-colors ${val === opt ? 'bg-highlight text-accent' : ''}`}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        )}
      </span>
      
      {isWrong && (
        <span className="inline-block bg-green-50 text-green-700 border border-green-400 font-bold text-[14px] px-2 py-0.5 rounded shadow-sm ml-1 align-middle box-border" style={{ marginBottom: '2px' }}>
          {correctionText}
        </span>
      )}
    </span>
  );
};

export const Question = ({ num, children }: { num?: string | number, children: React.ReactNode }) => {
  return (
    <div className="mb-5 p-4 sm:p-5 bg-white/50 border border-separator/40 hover:bg-white shadow-sm transition-colors rounded-2xl w-full box-border">
      <div className="flex flex-row items-start gap-2 sm:gap-3 w-full">
        {num && (
          <div className="font-extrabold text-[16px] sm:text-lg text-accent shrink-0 min-w-[24px] pt-1">
            {num}.
          </div>
        )}
        <div className="text-[16px] sm:text-lg leading-[2.2] text-ink flex-1 min-w-0" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row items-center gap-3 mb-6 mt-10 w-full box-border">
      <div className="h-3 w-3 shrink-0 rounded-full bg-accent"></div>
      <b className="text-[15px] font-extrabold uppercase text-accent tracking-wider leading-snug break-words flex-1 min-w-0">
        {children}
      </b>
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
    <div className="w-full my-6 min-w-0 box-border">
      <div className="mb-4 flex justify-end">
        <button 
          onClick={toggleFullscreenAndRotate}
          className="flex items-center gap-2 bg-white hover:bg-accent hover:text-white text-accent px-4 py-2 rounded-xl font-bold transition-colors border border-accent/20 hover:border-accent text-sm"
        >
          <RotateCw size={16} />
          <span>Format paysage</span>
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-separator/50 box-border w-full text-sm">
        {children}
      </div>
    </div>
  );
};
