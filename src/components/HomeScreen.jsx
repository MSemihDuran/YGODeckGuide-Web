import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { BookOpen, X, Sparkles, Layers } from 'lucide-react';
import { MILLENNIUM_ITEMS } from '../data/millenniumItems';

export default function HomeScreen({ onSelectDeck, onOpenRules }) {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLogoId, setActiveLogoId] = useState('puzzle');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const activeLogo = MILLENNIUM_ITEMS.find(item => item.id === activeLogoId) || MILLENNIUM_ITEMS[0];

  useEffect(() => {
    // Realtime Firestore listener: any deck additions/edits/deletions reflect instantly!
    const unsubscribe = onSnapshot(collection(db, 'decks'), (snapshot) => {
      const deckList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDecks(deckList);
      setLoading(false);
    }, (error) => {
      console.error("Firestore decks error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-[calc(100vh-60px)] flex flex-col justify-between pb-24 sm:pb-16">
      <div className="max-w-5xl mx-auto w-full px-4 pt-6 sm:pt-8">
        
        {/* Millennium Emblem Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <button
            onClick={() => setIsModalVisible(true)}
            className="group relative p-2 focus:outline-none"
            title="Milenyum Eşyalarını İncele ve Değiştir"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-amber-500/10 border-2 border-amber-500/40 millennium-glow flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
              <img
                src={activeLogo.image}
                alt={activeLogo.name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
              />
            </div>
            <span className="absolute bottom-1 right-1 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow">
              Seç
            </span>
          </button>
          <h2 className="text-amber-400 font-bold text-lg sm:text-xl tracking-wider mt-3 flex items-center gap-2">
            <span>{activeLogo.name}</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-md line-clamp-2 px-4">
            {activeLogo.desc}
          </p>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Layers className="text-amber-400" size={18} />
            <h3 className="text-slate-200 font-semibold text-sm sm:text-base uppercase tracking-wider">
              Kayıtlı Desteler ({decks.length})
            </h3>
          </div>
          <span className="text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
            Canlı Senkronize
          </span>
        </div>

        {/* Decks Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm mt-4 font-medium">Desteler yükleniyor...</p>
          </div>
        ) : decks.length === 0 ? (
          <div className="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-800 p-8">
            <p className="text-slate-400 text-base mb-2">Henüz veritabanında kayıtlı deste bulunamadı.</p>
            <p className="text-xs text-slate-500">Sağ üstteki ayarlar simgesine tıklayarak yeni deste veya kartlar yükleyebilirsiniz.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {decks.map((deck) => (
              <button
                key={deck.id}
                onClick={() => onSelectDeck(deck.id, deck.name)}
                className="group flex flex-col items-center text-center p-4 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-indigo-500/10 focus:outline-none"
              >
                <span className="text-4xl sm:text-5xl mb-3 transition-transform duration-200 group-hover:scale-110">
                  {deck.icon || '🃏'}
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-amber-300 transition-colors line-clamp-1 w-full">
                  {deck.name}
                </h4>
                <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                  {deck.desc || 'Açıklama belirtilmemiş.'}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Bottom Footer for General Rules */}
      <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 z-30">
        <div className="max-w-md mx-auto">
          <button
            onClick={onOpenRules}
            className="w-full flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700/90 active:bg-slate-800 text-emerald-400 font-bold text-base sm:text-lg py-3 sm:py-3.5 px-6 rounded-2xl border border-emerald-500/50 hover:border-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/10"
          >
            <BookOpen size={22} className="text-emerald-400" />
            <span>Genel Kurallar Rehberi</span>
          </button>
        </div>
      </div>

      {/* Millennium Items Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 transition-all">
          <div className="w-full sm:max-w-xl max-h-[85vh] bg-slate-800 border border-slate-700 rounded-t-3xl sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-700/80 bg-slate-800/90">
              <div className="flex items-center gap-2">
                <Sparkles className="text-amber-400" size={22} />
                <h3 className="text-amber-400 text-xl font-bold tracking-wide">
                  Milenyum Eşyaları
                </h3>
              </div>
              <button
                onClick={() => setIsModalVisible(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content / List */}
            <div className="overflow-y-auto p-4 space-y-3 divide-y divide-slate-700/50">
              {MILLENNIUM_ITEMS.map((item) => {
                const isSelected = activeLogoId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveLogoId(item.id);
                      setIsModalVisible(false);
                    }}
                    className={`w-full flex items-start gap-4 p-3.5 pt-4 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-amber-500/15 border border-amber-500/40 millennium-glow'
                        : 'hover:bg-slate-700/50 border border-transparent'
                    }`}
                  >
                    <div className="w-14 h-14 shrink-0 rounded-full bg-slate-900 border border-amber-400/40 p-2 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-bold text-base mb-1">
                          {item.name}
                        </h4>
                        {isSelected && (
                          <span className="text-[11px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                            Aktif
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
