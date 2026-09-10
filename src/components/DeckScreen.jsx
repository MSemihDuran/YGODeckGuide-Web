import React, { useState, useEffect, useRef } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import {
  Sword,
  Wand2,
  ShieldAlert,
  Layers,
  Flame,
  Settings2,
  X,
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react';
import CardImage from './CardImage';
import { getCombosForDeck } from '../data/deckCombos';

const CATEGORIES = [
  { id: 'Canavar', label: 'Canavar', icon: Sword },
  { id: 'Sihir', label: 'Sihir', icon: Wand2 },
  { id: 'Tuzak', label: 'Tuzak', icon: ShieldAlert },
  { id: 'Ekstra Deste', label: 'Ekstra Deste', icon: Layers },
  { id: 'Kombolar', label: 'Kombolar', icon: Flame },
  { id: 'Araçlar', label: 'Araçlar', icon: Settings2 }
];

export default function DeckScreen({ deckId, deckName }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Canavar');
  const [selectedCard, setSelectedCard] = useState(null);

  // Düello Araçları State
  const [lp, setLp] = useState(8000);
  const [coinSide, setCoinSide] = useState('DM'); // 'DM' veya 'BE'
  const [coinAngle, setCoinAngle] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [diceNum, setDiceNum] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [diceRotations, setDiceRotations] = useState({ x: 0, y: 0, z: 0 });

  // Firestore Real-time Listener for Cards
  useEffect(() => {
    setLoading(true);
    const q = query(
      collection(db, 'cards'),
      where('deckId', '==', deckId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const cardList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCards(cardList);
      setLoading(false);
    }, (err) => {
      console.error("Cards fetch error:", err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [deckId]);

  const filteredCards = cards.filter(c => c.category === activeCategory);
  const combos = getCombosForDeck(deckId, deckName);

  // YAZI TURA ATMA (Coin Flip)
  const flipCoin = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    const isHeads = Math.random() > 0.5; // 0: DM, 1: BE
    const nextSide = isHeads ? 'DM' : 'BE';
    
    // Rastgele 4-6 tam tur dönüş + taraf açısı
    const fullSpins = 360 * 5;
    const sideAngle = isHeads ? 0 : 180;
    const newTargetAngle = coinAngle + fullSpins + sideAngle - (coinAngle % 360);

    setCoinAngle(newTargetAngle);

    setTimeout(() => {
      setCoinSide(nextSide);
      setIsFlipping(false);
    }, 1200);
  };

  // ALTIN ZAR ATMA (Dice Roll)
  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);

    const newNum = Math.floor(Math.random() * 6) + 1;
    const randomRotX = 720 + Math.floor(Math.random() * 360);
    const randomRotY = 720 + Math.floor(Math.random() * 360);
    const randomRotZ = 360 + Math.floor(Math.random() * 360);

    setDiceRotations({
      x: randomRotX,
      y: randomRotY,
      z: randomRotZ
    });

    setTimeout(() => {
      setDiceNum(newNum);
      setIsRolling(false);
    }, 1000);
  };

  // ZAR NOKTALARI (1-6)
  const renderDiceFace = (num) => {
    const dot = (key) => (
      <div key={key} className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-950 shadow-inner" />
    );

    switch (num) {
      case 1:
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-600 shadow-inner" />
          </div>
        );
      case 2:
        return (
          <div className="w-full h-full flex flex-col justify-between p-2">
            <div className="flex justify-start">{dot(1)}</div>
            <div className="flex justify-end">{dot(2)}</div>
          </div>
        );
      case 3:
        return (
          <div className="w-full h-full flex flex-col justify-between p-2">
            <div className="flex justify-start">{dot(1)}</div>
            <div className="flex justify-center">{dot(2)}</div>
            <div className="flex justify-end">{dot(3)}</div>
          </div>
        );
      case 4:
        return (
          <div className="w-full h-full flex flex-col justify-between p-2">
            <div className="flex justify-between">{dot(1)}{dot(2)}</div>
            <div className="flex justify-between">{dot(3)}{dot(4)}</div>
          </div>
        );
      case 5:
        return (
          <div className="w-full h-full flex flex-col justify-between p-2">
            <div className="flex justify-between">{dot(1)}{dot(2)}</div>
            <div className="flex justify-center">{dot(3)}</div>
            <div className="flex justify-between">{dot(4)}{dot(5)}</div>
          </div>
        );
      case 6:
        return (
          <div className="w-full h-full flex flex-col justify-between p-2">
            <div className="flex justify-between">{dot(1)}{dot(2)}</div>
            <div className="flex justify-between">{dot(3)}{dot(4)}</div>
            <div className="flex justify-between">{dot(5)}{dot(6)}</div>
          </div>
        );
      default:
        return null;
    }
  };

  // DÜELLO ARAÇLARI SEKME İÇERİĞİ
  const renderDuelTools = () => (
    <div className="max-w-2xl mx-auto w-full space-y-8 py-4">
      {/* LP Sayacı */}
      <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col items-center">
        <h3 className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider font-semibold mb-4">
          Can Puanı (Life Points)
        </h3>

        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => setLp(l => l + 1000)}
            className="px-4 py-2 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/50 text-emerald-400 font-bold rounded-xl text-sm transition-all"
          >
            +1000
          </button>
          <button
            onClick={() => setLp(l => l + 100)}
            className="px-4 py-2 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/50 text-emerald-400 font-bold rounded-xl text-sm transition-all"
          >
            +100
          </button>
        </div>

        <div className="text-5xl sm:text-6xl font-black tracking-tight text-white my-3 select-none filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {lp} <span className="text-2xl text-amber-400">LP</span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => setLp(l => Math.max(0, l - 100))}
            className="px-4 py-2 bg-rose-950/50 hover:bg-rose-900/50 border border-rose-500/50 text-rose-400 font-bold rounded-xl text-sm transition-all"
          >
            -100
          </button>
          <button
            onClick={() => setLp(l => Math.max(0, l - 1000))}
            className="px-4 py-2 bg-rose-950/50 hover:bg-rose-900/50 border border-rose-500/50 text-rose-400 font-bold rounded-xl text-sm transition-all"
          >
            -1000
          </button>
        </div>

        <button
          onClick={() => setLp(8000)}
          className="flex items-center gap-2 mt-6 text-xs text-slate-400 hover:text-amber-400 bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-700 transition-colors"
        >
          <RotateCcw size={14} />
          <span>Sıfırla (8000)</span>
        </button>
      </div>

      {/* Yazı Tura & Altın Zar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Yazı Tura */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col items-center">
          <h4 className="text-white font-bold text-base mb-4">Yazı Tura</h4>

          <div
            onClick={flipCoin}
            className="perspective-1000 cursor-pointer w-28 h-28 my-2 flex items-center justify-center select-none"
            title="Para atmak için tıkla"
          >
            <div
              className="relative w-24 h-24 rounded-full preserve-3d transition-transform duration-1000 ease-out coin-glow"
              style={{
                transform: `rotateY(${coinAngle}deg) ${isFlipping ? 'scale(1.2)' : 'scale(1)'}`
              }}
            >
              {/* Kara Büyücü (Tura / Ön) */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-amber-400 backface-hidden bg-slate-900 shadow-xl">
                <img
                  src="https://images.ygoprodeck.com/images/cards/46986414.jpg"
                  alt="Kara Büyücü"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mavi Gözlü (Yazı / Arka) */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-amber-400 backface-hidden bg-slate-900 shadow-xl"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <img
                  src="https://images.ygoprodeck.com/images/cards/89631139.jpg"
                  alt="Mavi Gözlü"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <button
            onClick={flipCoin}
            disabled={isFlipping}
            className="mt-3 px-5 py-2 bg-amber-500/20 hover:bg-amber-500/30 active:bg-amber-500/40 text-amber-300 font-semibold text-xs sm:text-sm rounded-xl border border-amber-500/40 transition-all"
          >
            {isFlipping ? 'Atılıyor...' : 'Parayı Çevir'}
          </button>

          <p className="mt-3 text-sm font-bold text-slate-200">
            {isFlipping ? (
              <span className="text-amber-400 animate-pulse">Atılıyor...</span>
            ) : coinSide === 'DM' ? (
              'Kara Büyücü (DM)'
            ) : (
              'Mavi Gözlü (BE)'
            )}
          </p>
        </div>

        {/* Altın Zar */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col items-center">
          <h4 className="text-white font-bold text-base mb-4">Altın Zar</h4>

          <div
            onClick={rollDice}
            className="cursor-pointer w-28 h-28 my-2 flex items-center justify-center select-none"
            title="Zar atmak için tıkla"
          >
            <div
              className={`w-20 h-20 rounded-2xl p-2 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 dice-glow border-2 border-amber-200 flex items-center justify-center transition-all duration-700 ${
                isRolling ? 'scale-110 animate-bounce' : 'hover:scale-105 active:scale-95'
              }`}
              style={{
                transform: isRolling
                  ? `rotateX(${diceRotations.x}deg) rotateY(${diceRotations.y}deg) rotateZ(${diceRotations.z}deg)`
                  : 'none'
              }}
            >
              {renderDiceFace(diceNum)}
            </div>
          </div>

          <button
            onClick={rollDice}
            disabled={isRolling}
            className="mt-3 px-5 py-2 bg-amber-500/20 hover:bg-amber-500/30 active:bg-amber-500/40 text-amber-300 font-semibold text-xs sm:text-sm rounded-xl border border-amber-500/40 transition-all"
          >
            {isRolling ? 'Yuvarlanıyor...' : 'Zarı Yuvarla'}
          </button>

          <p className="mt-3 text-sm font-bold text-slate-200">
            {isRolling ? (
              <span className="text-amber-400 animate-pulse">Zar Atılıyor...</span>
            ) : (
              `Gelen Zar: ${diceNum}`
            )}
          </p>
        </div>
      </div>
    </div>
  );

  // KOMBOLAR SEKME İÇERİĞİ
  const renderCombos = () => (
    <div className="max-w-3xl mx-auto w-full space-y-6 py-4">
      <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-5 text-center">
        <h3 className="text-amber-400 text-lg sm:text-xl font-bold mb-1">
          Deste Kombo Rehberi
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm">
          Bu desteyle sahada kurabileceğiniz en etkili, adım adım hamleler:
        </p>
      </div>

      {combos.length === 0 ? (
        <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-sm">
          Bu deste için henüz özel kombo rehberi eklenmedi.
        </div>
      ) : (
        combos.map((combo, idx) => (
          <div
            key={combo.id || idx}
            className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
              <h4 className="text-white font-bold text-base sm:text-lg">
                {combo.title}
              </h4>
              {combo.difficulty && (
                <span
                  className={`self-start sm:self-auto text-xs font-bold px-2.5 py-1 rounded-full border ${
                    combo.difficulty.includes('İleri')
                      ? 'bg-rose-950/60 text-rose-300 border-rose-800/40'
                      : combo.difficulty.includes('Orta')
                      ? 'bg-amber-950/60 text-amber-300 border-amber-800/40'
                      : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40'
                  }`}
                >
                  {combo.difficulty}
                </span>
              )}
            </div>

            {/* Gereken Kartlar */}
            {combo.cardsNeeded && combo.cardsNeeded.length > 0 && (
              <div>
                <p className="text-slate-400 text-xs font-semibold mb-2">Gereken Kartlar:</p>
                <div className="flex flex-wrap gap-2">
                  {combo.cardsNeeded.map((c, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 bg-slate-900/90 text-indigo-300 text-xs px-2.5 py-1 rounded-lg border border-slate-700"
                    >
                      🃏 {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Adım Adım Hamleler */}
            <div className="space-y-2.5 pt-1">
              <p className="text-slate-400 text-xs font-semibold">Adım Adım Hamleler:</p>
              {combo.steps.map((step, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                    {sIdx + 1}
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Sonuç / Saha Durumu */}
            {combo.result && (
              <div className="bg-emerald-950/30 border border-emerald-600/40 p-4 rounded-xl">
                <p className="text-emerald-400 font-bold text-xs sm:text-sm mb-1">
                  🎯 Sonuç / Saha Durumu:
                </p>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  {combo.result}
                </p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-4 sm:py-6">
      {/* Category Tabs (Horizontally scrollable on mobile, compact pills on desktop) */}
      <div className="border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar sm:justify-center">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-slate-400'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content based on Active Tab */}
      {activeCategory === 'Araçlar' ? (
        renderDuelTools()
      ) : activeCategory === 'Kombolar' ? (
        renderCombos()
      ) : (
        /* Cards Grid */
        <div>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-400 text-sm mt-4 font-medium">Kartlar yükleniyor...</p>
            </div>
          ) : filteredCards.length === 0 ? (
            <div className="text-center py-16 bg-slate-800/40 rounded-2xl border border-slate-800 p-8">
              <p className="text-slate-400 text-sm">Bu kategoride kart bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filteredCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedCard(card)}
                  className="group flex flex-col items-center bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl p-2.5 shadow-md hover:shadow-indigo-500/10 transition-all duration-200 hover:-translate-y-1 text-center focus:outline-none"
                >
                  <div className="w-full aspect-[300/430] rounded-xl overflow-hidden mb-2 bg-slate-900/70 border border-slate-700/50">
                    <CardImage
                      item={card}
                      className="w-full h-full"
                      imgClassName="group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-2 w-full group-hover:text-amber-300 transition-colors">
                    {card.name}
                  </h4>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Card Detail Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg max-h-[90vh] bg-slate-900 border border-slate-700/90 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-5 border-b border-slate-800 bg-slate-900/90">
              <h3 className="text-white font-bold text-base sm:text-lg truncate max-w-[80%]">
                {selectedCard.name}
              </h3>
              <button
                onClick={() => setSelectedCard(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-5 space-y-4">
              {/* Card Artwork */}
              <div className="w-40 sm:w-48 aspect-[300/430] mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-indigo-500/30">
                <CardImage item={selectedCard} className="w-full h-full" />
              </div>

              {/* Official Text */}
              <div>
                <h4 className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                  Resmi Açıklama
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-800/60 p-3 rounded-xl border border-slate-800">
                  {selectedCard.officialText || 'Resmi açıklama bulunmuyor.'}
                </p>
              </div>

              {/* Summon Condition */}
              {selectedCard.summonCondition && (
                <div>
                  <h4 className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                    Çağırılma Koşulu
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-800/60 p-3 rounded-xl border border-slate-800">
                    {selectedCard.summonCondition}
                  </p>
                </div>
              )}

              {/* Effect Summary */}
              {selectedCard.effectSummary && (
                <div>
                  <h4 className="text-indigo-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                    Efekt Özeti
                  </h4>
                  <div className="bg-indigo-950/40 border border-indigo-500/40 p-3.5 rounded-xl">
                    <p className="text-indigo-200 text-xs sm:text-sm leading-relaxed font-medium">
                      {selectedCard.effectSummary}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
