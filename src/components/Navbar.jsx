import React from 'react';
import { Settings, BookOpen, ChevronLeft, ShieldCheck } from 'lucide-react';

export default function Navbar({ currentScreen, screenTitle, onBack, onNavigate }) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-3 sm:px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {currentScreen !== 'home' ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors p-1.5 rounded-lg hover:bg-slate-800"
              title="Geri Dön"
            >
              <ChevronLeft size={22} />
              <span className="text-sm font-semibold hidden sm:inline">Geri</span>
            </button>
          ) : (
            <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <span className="text-base">𓂀</span>
            </div>
          )}
          <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide truncate max-w-[200px] sm:max-w-md">
            {screenTitle || 'YGO Düellocu Rehberi'}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {currentScreen !== 'rules' && (
            <button
              onClick={() => onNavigate('rules')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-600/30 rounded-lg transition-all"
              title="Genel Kurallar Rehberi"
            >
              <BookOpen size={16} />
              <span className="hidden sm:inline">Kurallar</span>
            </button>
          )}

          {currentScreen !== 'admin' && (
            <button
              onClick={() => onNavigate('admin')}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-all"
              title="Deste & Kart Yönetimi"
            >
              <Settings size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
