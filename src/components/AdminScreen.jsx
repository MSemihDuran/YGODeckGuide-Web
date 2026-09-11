import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  writeBatch,
  doc,
  updateDoc,
  query,
  where
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import {
  Plus,
  Edit3,
  Upload,
  Trash2,
  ChevronLeft,
  Image as ImageIcon,
  CheckCircle,
  AlertTriangle,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { cardDatabase, deckInfo } from '../data/bulkUploadData';
import { getCustomCardImage } from '../data/customCardImages';

export default function AdminScreen({ onBack }) {
  const [mode, setMode] = useState('menu'); // 'menu' | 'addDeck' | 'cardForm' | 'editSelectDeck' | 'editSelectCard'
  const [decks, setDecks] = useState([]);
  const [deckCards, setDeckCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error' | 'info', text: '' }

  // Form states
  const [deckName, setDeckName] = useState('');
  const [deckDesc, setDeckDesc] = useState('');
  const [deckIcon, setDeckIcon] = useState('');

  const [selectedDeckId, setSelectedDeckId] = useState('');
  const [editingCardId, setEditingCardId] = useState(null);

  const [cardCategory, setCardCategory] = useState('Canavar');
  const [cardName, setCardName] = useState('');
  const [cardApiName, setCardApiName] = useState('');
  const [cardText, setCardText] = useState('');
  const [cardSummon, setCardSummon] = useState('');
  const [cardSummary, setCardSummary] = useState('');
  const [imageUri, setImageUri] = useState('');

  // Wipe confirmation modal state
  const [showWipeModal, setShowWipeModal] = useState(false);

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'decks'));
      setDecks(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error("fetchDecks error:", err);
    }
  };

  const fetchCardsForDeck = async (id) => {
    setLoading(true);
    try {
      const q = query(collection(db, 'cards'), where('deckId', '==', id));
      const snap = await getDocs(q);
      setDeckCards(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error("fetchCardsForDeck error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 600;
        const MAX_HEIGHT = 860;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setImageUri(compressedDataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleAddDeck = async (e) => {
    e.preventDefault();
    if (!deckName.trim()) {
      setStatusMessage({ type: 'error', text: 'Deste adı boş olamaz.' });
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'decks'), {
        name: deckName.trim(),
        desc: deckDesc.trim(),
        icon: deckIcon.trim() || '🃏'
      });
      setStatusMessage({ type: 'success', text: 'Yeni deste başarıyla eklendi!' });
      setDeckName('');
      setDeckDesc('');
      setDeckIcon('');
      await fetchDecks();
      setMode('menu');
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Hata: ' + err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCard = async (e) => {
    e.preventDefault();
    if (!selectedDeckId || !cardName.trim()) {
      setStatusMessage({ type: 'error', text: 'Lütfen hedef deste ve kart adı girin.' });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        deckId: selectedDeckId,
        name: cardName.trim(),
        apiName: cardApiName.trim() || cardName.trim(),
        category: cardCategory,
        officialText: cardText.trim(),
        summonCondition: cardSummon.trim() || 'Özel bir çağrılma koşulu yoktur.',
        effectSummary: cardSummary.trim(),
        imageUrl: imageUri || ''
      };

      if (editingCardId) {
        await updateDoc(doc(db, 'cards', editingCardId), payload);
        setStatusMessage({ type: 'success', text: `"${cardName}" başarıyla güncellendi!` });
      } else {
        await addDoc(collection(db, 'cards'), payload);
        setStatusMessage({ type: 'success', text: `"${cardName}" başarıyla eklendi!` });
      }

      // Reset form
      setCardName('');
      setCardApiName('');
      setCardText('');
      setCardSummon('');
      setCardSummary('');
      setImageUri('');
      setEditingCardId(null);
      setMode('menu');
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Hata: ' + err.message });
    } finally {
      setLoading(false);
    }
  };

  const openEditMode = (card) => {
    setEditingCardId(card.id);
    setSelectedDeckId(card.deckId);
    setCardName(card.name || '');
    setCardApiName(card.apiName || '');
    setCardCategory(card.category || 'Canavar');
    setCardText(card.officialText || '');
    setCardSummon(card.summonCondition || '');
    setCardSummary(card.effectSummary || '');
    setImageUri(card.imageUrl || '');
    setMode('cardForm');
  };

  // TOPLU KART YÜKLEME
  const handleBulkUpload = async () => {
    if (!window.confirm("Tüm orijinal desteler ve 170+ kart Firestore veritabanına aktarılacak. Onaylıyor musunuz?")) {
      return;
    }

    setLoading(true);
    setStatusMessage({ type: 'info', text: '170+ kart yükleniyor, lütfen bekleyin...' });

    try {
      // Desteleri ekle
      const batch1 = writeBatch(db);
      deckInfo.forEach((deck) => {
        const deckRef = doc(collection(db, 'decks'), deck.id);
        batch1.set(deckRef, { name: deck.name, desc: deck.desc, icon: deck.icon });
      });
      await batch1.commit();

      // Firestore batch sınırı 500'dür, kartları parça parça yüklüyoruz
      const chunkSize = 200;
      for (let i = 0; i < cardDatabase.length; i += chunkSize) {
        const chunk = cardDatabase.slice(i, i + chunkSize);
        const cardBatch = writeBatch(db);
        chunk.forEach((card) => {
          const cardRef = doc(collection(db, 'cards'));
          cardBatch.set(cardRef, {
            deckId: card.deck,
            name: card.name,
            apiName: card.apiName || card.name,
            category: card.category,
            officialText: card.officialText,
            summonCondition: card.summonCondition || 'Özel bir çağrılma koşulu yoktur.',
            effectSummary: card.effectSummary,
            imageUrl: ''
          });
        });
        await cardBatch.commit();
      }

      setStatusMessage({ type: 'success', text: 'Tüm desteler ve 170+ kart başarıyla yüklendi!' });
      await fetchDecks();
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Hata oluştu: ' + err.message });
    } finally {
      setLoading(false);
    }
  };

  // VERİTABANI KOMPLE SİL
  const handleWipeDatabase = async () => {
    setShowWipeModal(false);
    setLoading(true);
    setStatusMessage({ type: 'info', text: 'Tüm veriler siliniyor...' });

    try {
      const decksSnap = await getDocs(collection(db, 'decks'));
      const cardsSnap = await getDocs(collection(db, 'cards'));

      const batch = writeBatch(db);
      decksSnap.forEach(d => batch.delete(d.ref));
      cardsSnap.forEach(c => batch.delete(c.ref));
      await batch.commit();

      setStatusMessage({ type: 'success', text: 'Veritabanı tertemiz oldu!' });
      setDecks([]);
      setDeckCards([]);
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Hata oluştu: ' + err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-6 sm:py-8">
      {/* Toast Notification */}
      {statusMessage && (
        <div
          className={`mb-6 p-4 rounded-2xl border flex items-center justify-between gap-3 animate-in fade-in duration-200 ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
              : statusMessage.type === 'error'
              ? 'bg-rose-950/60 border-rose-500/50 text-rose-300'
              : 'bg-indigo-950/60 border-indigo-500/50 text-indigo-300'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {statusMessage.type === 'success' ? (
              <CheckCircle size={20} className="shrink-0 text-emerald-400" />
            ) : (
              <AlertTriangle size={20} className="shrink-0 text-amber-400" />
            )}
            <span className="text-sm font-medium">{statusMessage.text}</span>
          </div>
          <button
            onClick={() => setStatusMessage(null)}
            className="text-slate-400 hover:text-white p-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col items-center shadow-2xl">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-sm font-semibold mt-4">İşlem yapılıyor, lütfen bekleyin...</p>
          </div>
        </div>
      )}

      {/* Main Admin Menu */}
      {mode === 'menu' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Deste & Kart Yönetimi</h2>
            <button
              onClick={onBack}
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700"
            >
              <ArrowLeft size={14} />
              <span>Ana Sayfaya Dön</span>
            </button>
          </div>

          <button
            onClick={() => setMode('addDeck')}
            className="w-full flex items-center justify-between p-5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl transition-all shadow-md group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">Yeni Deste Ekle</h3>
                <p className="text-slate-400 text-xs mt-0.5">Deste adı, açıklaması ve simgesi oluştur</p>
              </div>
            </div>
            <span className="text-slate-400 text-lg">→</span>
          </button>

          <button
            onClick={() => {
              setEditingCardId(null);
              setCardName('');
              setImageUri('');
              setMode('cardForm');
            }}
            className="w-full flex items-center justify-between p-5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl transition-all shadow-md group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">Yeni Kart Ekle</h3>
                <p className="text-slate-400 text-xs mt-0.5">Mevcut destelere yeni canavar, sihir veya tuzak kartı ekle</p>
              </div>
            </div>
            <span className="text-slate-400 text-lg">→</span>
          </button>

          <button
            onClick={() => setMode('editSelectDeck')}
            className="w-full flex items-center justify-between p-5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl transition-all shadow-md group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Edit3 size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">Var Olan Kartı Düzenle</h3>
                <p className="text-slate-400 text-xs mt-0.5">Mevcut bir kartın açıklamasını, görselini veya efektini güncelle</p>
              </div>
            </div>
            <span className="text-slate-400 text-lg">→</span>
          </button>

          {/* Database Operations */}
          <div className="pt-6 space-y-3">
            <button
              onClick={handleBulkUpload}
              className="w-full flex items-center justify-center gap-2.5 p-4 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 font-bold rounded-2xl transition-all shadow-md"
            >
              <Upload size={18} />
              <span>⚠️ Tüm Kartları Yükle (170+ Kart Toplu Aktarım)</span>
            </button>

            <button
              onClick={() => setShowWipeModal(true)}
              className="w-full flex items-center justify-center gap-2.5 p-4 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-500/50 hover:border-rose-400 text-rose-300 font-bold rounded-2xl transition-all shadow-md"
            >
              <Trash2 size={18} />
              <span>🔥 VERİTABANINI KOMPLE SİL</span>
            </button>
          </div>
        </div>
      )}

      {/* Add Deck Form */}
      {mode === 'addDeck' && (
        <form onSubmit={handleAddDeck} className="space-y-5 bg-slate-800/90 border border-slate-700 p-6 rounded-3xl shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <h3 className="text-white font-bold text-lg">Yeni Deste Bilgileri</h3>
            <button
              type="button"
              onClick={() => setMode('menu')}
              className="text-xs text-indigo-400 hover:text-indigo-300"
            >
              ← Menüye Dön
            </button>
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">Deste Adı *</label>
            <input
              type="text"
              required
              value={deckName}
              onChange={(e) => setDeckName(e.target.value)}
              placeholder="Örn: Blue-Eyes White Dragon"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">Deste İkonu (Emoji)</label>
            <input
              type="text"
              value={deckIcon}
              onChange={(e) => setDeckIcon(e.target.value)}
              placeholder="Örn: 🐉 veya 🔮"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">Kısa Açıklama</label>
            <textarea
              rows={3}
              value={deckDesc}
              onChange={(e) => setDeckDesc(e.target.value)}
              placeholder="Deste hakkında kısa bir açıklama..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
          >
            Desteyi Kaydet
          </button>
        </form>
      )}

      {/* Select Deck for Editing Cards */}
      {mode === 'editSelectDeck' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <h3 className="text-white font-bold text-lg">Hangi Desteyi Düzenleyelim?</h3>
            <button
              onClick={() => setMode('menu')}
              className="text-xs text-indigo-400 hover:text-indigo-300"
            >
              ← Menüye Dön
            </button>
          </div>

          <div className="space-y-2">
            {decks.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDeckId(d.id);
                  fetchCardsForDeck(d.id);
                  setMode('editSelectCard');
                }}
                className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{d.icon || '🃏'}</span>
                  <span className="text-white font-bold text-sm sm:text-base">{d.name}</span>
                </div>
                <span className="text-slate-400 text-sm">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Select Card for Editing */}
      {mode === 'editSelectCard' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <h3 className="text-white font-bold text-lg">Düzenlenecek Kartı Seç</h3>
            <button
              onClick={() => setMode('editSelectDeck')}
              className="text-xs text-indigo-400 hover:text-indigo-300"
            >
              ← Destelere Dön
            </button>
          </div>

          {deckCards.length === 0 ? (
            <div className="text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-800 p-6 text-slate-400 text-sm">
              Bu destede henüz kayıtlı kart bulunmuyor.
            </div>
          ) : (
            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
              {deckCards.map((c) => (
                <button
                  key={c.id}
                  onClick={() => openEditMode(c)}
                  className="w-full flex items-center justify-between p-3.5 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-colors text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-900 text-indigo-300 border border-slate-700 shrink-0">
                      {c.category || 'Kart'}
                    </span>
                    <span className="text-white font-semibold text-sm truncate">{c.name}</span>
                  </div>
                  <span className="text-indigo-400 text-xs font-bold shrink-0 ml-2">Düzenle ✎</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Add / Edit Card Form */}
      {mode === 'cardForm' && (
        <form onSubmit={handleSaveCard} className="space-y-5 bg-slate-800/90 border border-slate-700 p-6 rounded-3xl shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <h3 className="text-white font-bold text-lg">
              {editingCardId ? 'Kartı Düzenle' : 'Yeni Kart Ekle'}
            </h3>
            <button
              type="button"
              onClick={() => setMode('menu')}
              className="text-xs text-indigo-400 hover:text-indigo-300"
            >
              ← Menüye Dön
            </button>
          </div>

          {/* Deste Seçimi */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-2">Hedef Deste Seçin *</label>
            <div className="flex flex-wrap gap-2">
              {decks.map((d) => (
                <button
                  type="button"
                  key={d.id}
                  onClick={() => setSelectedDeckId(d.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedDeckId === d.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  {d.icon} {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Kategori Seçimi */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-2">Kart Türü</label>
            <div className="flex flex-wrap gap-2">
              {['Canavar', 'Sihir', 'Tuzak', 'Ekstra Deste'].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCardCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    cardCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Görsel Seçimi */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-2">Kart Görseli</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-semibold cursor-pointer border border-slate-600 transition-colors">
                <ImageIcon size={16} />
                <span>Görsel Dosyası Yükle</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {imageUri ? (
                <div className="flex items-center gap-2">
                  <img
                    src={imageUri}
                    alt="Kart Önizleme"
                    className="w-12 h-16 object-cover rounded-lg border border-amber-400 shadow"
                  />
                  <button
                    type="button"
                    onClick={() => setImageUri('')}
                    className="text-xs text-rose-400 hover:underline"
                  >
                    Kaldır
                  </button>
                </div>
              ) : (
                (() => {
                  const fallbackCustom = getCustomCardImage(cardName) || getCustomCardImage(cardApiName);
                  if (fallbackCustom) {
                    return (
                      <div className="flex items-center gap-2">
                        <img
                          src={fallbackCustom}
                          alt="Mevcut Özel Görsel"
                          className="w-12 h-16 object-cover rounded-lg border border-slate-600 shadow opacity-80"
                        />
                        <span className="text-[11px] text-slate-400">Varsayılan Özel Kart Görseli Aktif (Değiştirmek için dosya seçin)</span>
                      </div>
                    );
                  }
                  return (
                    <span className="text-xs text-slate-500">Özel görsel seçilmediyse YGOPRODeck API'den otomatik çekilir.</span>
                  );
                })()
              )}
            </div>
          </div>

          {/* Kart Adı */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">Kart Adı *</label>
            <input
              type="text"
              required
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Örn: Dark Magician"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* API Adı (İsteğe bağlı) */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">
              API İngilizce Adı (YGOPRODeck resmi çekimi için)
            </label>
            <input
              type="text"
              value={cardApiName}
              onChange={(e) => setCardApiName(e.target.value)}
              placeholder="Kart adı İngilizce ise boş bırakabilirsiniz"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Resmi Açıklama */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">Resmi Açıklama</label>
            <textarea
              rows={3}
              value={cardText}
              onChange={(e) => setCardText(e.target.value)}
              placeholder="Kartın tam resmi kural metni..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          {/* Çağırılma Koşulu */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">Çağırılma Koşulu</label>
            <textarea
              rows={2}
              value={cardSummon}
              onChange={(e) => setCardSummon(e.target.value)}
              placeholder="Örn: 2 Canavar feda edilerek Normal Çağrılır."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          {/* Efekt Özeti */}
          <div>
            <label className="block text-slate-300 text-xs font-semibold mb-1.5">Efekt Özeti</label>
            <textarea
              rows={2}
              value={cardSummary}
              onChange={(e) => setCardSummary(e.target.value)}
              placeholder="Kartın düellodaki ana işlevi ve avantajı..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
          >
            {editingCardId ? 'Değişiklikleri Kaydet' : 'Kartı Desteye Ekle'}
          </button>
        </form>
      )}

      {/* Wipe Confirmation Modal */}
      {showWipeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-rose-500/50 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-rose-400">
              <AlertTriangle size={28} />
              <h4 className="text-lg font-black tracking-wide text-white">🔥 DİKKAT TEHLİKE!</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tüm desteler, kartlar ve ayarlar Firestore veritabanından <strong className="text-rose-400">kalıcı olarak SİLİNECEK</strong>! Bu işlem geri alınamaz. Devam etmek istiyor musunuz?
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowWipeModal(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl"
              >
                İptal Et
              </button>
              <button
                onClick={handleWipeDatabase}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-rose-600/30"
              >
                Evet, Hepsini Temizle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
