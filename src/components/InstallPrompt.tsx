import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare } from 'lucide-react';

export const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    // Detect if app is already installed
    const md = window.matchMedia('(display-mode: standalone)');
    if (md.matches || (window.navigator as any).standalone === true) {
      setIsStandalone(true);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsStandalone(true);
    };
    
    md.addEventListener('change', handleChange);

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      md.removeEventListener('change', handleChange);
    };
  }, []);

  if (isStandalone) return null;

  // Only show the banner if we have a prompt available OR it's iOS
  const canInstall = deferredPrompt !== null || isIOS;
  if (!canInstall) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else if (isIOS) {
      setShowTip(true);
    }
  };

  return (
    <>
      <div className="bg-highlight/80 border-b-2 border-accent/20 py-3 px-4 flex justify-between items-center text-sm shadow-sm relative z-40 backdrop-blur-sm">
        <div className="font-bold text-accent flex-1 pr-4 leading-tight">
          Installer "Sir Diedhiou" sur cet appareil (Hors-ligne)
        </div>
        <button 
          onClick={handleInstallClick}
          className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-xl font-bold shadow-[0_3px_0_0_var(--color-accent-dark)] active:translate-y-[3px] active:shadow-none transition-all shrink-0"
        >
          <Download size={18} />
          <span>Installer</span>
        </button>
      </div>
      
      {showTip && isIOS && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-end justify-center sm:items-center p-4 animate-in fade-in duration-200">
          <div className="bg-surface w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <h3 className="text-xl font-extrabold text-ink mb-4">Installation sur iPhone/iPad</h3>
            <ol className="list-none space-y-4 font-medium text-ink/80 text-base">
              <li className="flex gap-4 items-start">
                <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <p>Appuyez sur l'icône de <b>Partage</b> dans la barre de navigation Safari.</p>
                  <div className="mt-2 text-accent bg-accent/10 w-fit p-2 rounded-lg"><Share size={20} /></div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <p>Faites défiler vers le bas et sélectionnez <b>Sur l'écran d'accueil</b>.</p>
                  <div className="mt-2 text-ink bg-gray-100 border border-gray-200 w-fit px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <PlusSquare size={18} />
                    <span className="text-sm font-bold">Sur l'écran d'accueil</span>
                  </div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                <span>Appuyez sur <b>Ajouter</b> en haut à droite.</span>
              </li>
            </ol>
            <button 
              onClick={() => setShowTip(false)}
              className="mt-8 w-full py-3 bg-accent text-white font-bold text-lg rounded-xl shadow-[0_4px_0_0_var(--color-accent-dark)] active:translate-y-1 active:shadow-none transition-all"
            >
              J'ai compris
            </button>
          </div>
        </div>
      )}
    </>
  );
};
