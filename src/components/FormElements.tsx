import React, { useState } from 'react';

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
  const colorClass = showColor
    ? (correct ? "border-green-400 text-green-700 bg-green-100 shadow-[0_4px_0_0_rgb(74,222,128)]" : "border-red-400 text-red-700 bg-red-100 shadow-[0_4px_0_0_rgb(248,113,113)]")
    : "border-separator text-accent focus:border-accent bg-surface shadow-[0_4px_0_0_var(--color-highlight)]";

  return (
    <input 
      type="text" 
      placeholder={placeholder}
      value={val}
      onChange={(e) => { setVal(e.target.value); setBlurred(false); }}
      onBlur={() => setBlurred(true)}
      className={`border-2 px-3 py-1.5 mx-1 font-bold text-base outline-none transition-all w-28 text-center placeholder-muted/40 rounded-xl ${colorClass}`}
      autoComplete="off"
    />
  );
};

export const LongInput = ({ placeholder = "...", answer }: { placeholder?: string, answer?: AnswerType }) => {
  const [val, setVal] = useState("");
  const [blurred, setBlurred] = useState(false);

  const correct = checkIsCorrect(val, answer);
  const showColor = val && blurred && answer !== undefined;
  const colorClass = showColor
    ? (correct ? "border-green-400 text-green-700 bg-green-100 shadow-[0_4px_0_0_rgb(74,222,128)]" : "border-red-400 text-red-700 bg-red-100 shadow-[0_4px_0_0_rgb(248,113,113)]")
    : "border-separator text-accent focus:border-accent bg-surface shadow-[0_4px_0_0_var(--color-highlight)]";

  return (
    <div className="mt-3 w-full">
      <input 
        type="text" 
        placeholder={placeholder}
        value={val}
        onChange={(e) => { setVal(e.target.value); setBlurred(false); }}
        onBlur={() => setBlurred(true)}
        className={`border-2 px-4 py-3 font-bold text-base outline-none transition-all w-full placeholder-muted/40 rounded-xl ${colorClass} mb-2`}
        autoComplete="off"
      />
    </div>
  );
};

export const Select = ({ options, answer }: { options: string[], answer?: AnswerType }) => {
  const [val, setVal] = useState("");
  const correct = checkIsCorrect(val, answer);
  const showColor = val && answer !== undefined;
  const colorClass = showColor
    ? (correct ? "border-green-400 text-green-700 bg-green-100 shadow-[0_4px_0_0_rgb(74,222,128)]" : "border-red-400 text-red-700 bg-red-100 shadow-[0_4px_0_0_rgb(248,113,113)]")
    : "border-separator text-accent focus:border-accent bg-surface shadow-[0_4px_0_0_var(--color-highlight)]";

  return (
    <select 
      value={val}
      onChange={(e) => setVal(e.target.value)}
      className={`border-2 px-3 py-1.5 mx-1 font-bold text-base outline-none transition-all cursor-pointer rounded-xl mb-1 ${colorClass}`}
    >
      <option value=""></option>
      {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
    </select>
  );
};

export const Question = ({ num, children }: { num?: string | number, children: React.ReactNode }) => {
  return (
    <div className="mb-5 p-5 bg-surface/80 border-2 border-separator/50 shadow-sm transition-all hover:bg-surface rounded-2xl">
      <div className="font-bold text-base sm:text-lg leading-loose text-ink">
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
