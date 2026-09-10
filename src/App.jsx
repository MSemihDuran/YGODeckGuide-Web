import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import DeckScreen from './components/DeckScreen';
import RulesScreen from './components/RulesScreen';
import AdminScreen from './components/AdminScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'deck' | 'rules' | 'admin'
  const [selectedDeck, setSelectedDeck] = useState(null); // { id, name }
  const [screenHistory, setScreenHistory] = useState(['home']);

  // Handle browser back button (history navigation)
  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.screen) {
        setCurrentScreen(e.state.screen);
        if (e.state.deck) setSelectedDeck(e.state.deck);
      } else {
        setCurrentScreen('home');
        setSelectedDeck(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (screen, deck = null) => {
    setCurrentScreen(screen);
    if (deck) setSelectedDeck(deck);
    window.history.pushState({ screen, deck }, '', `/#${screen}${deck ? `-${deck.id}` : ''}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (window.history.state) {
      window.history.back();
    } else {
      navigateTo('home');
    }
  };

  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'deck':
        return selectedDeck?.name || 'Deste Detayı';
      case 'rules':
        return 'Genel Kurallar Rehberi';
      case 'admin':
        return 'Deste & Kart Yönetimi';
      default:
        return 'YGO Düellocu Rehberi';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <Navbar
        currentScreen={currentScreen}
        screenTitle={getScreenTitle()}
        onBack={handleBack}
        onNavigate={(screen) => navigateTo(screen)}
      />

      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onSelectDeck={(deckId, deckName) => navigateTo('deck', { id: deckId, name: deckName })}
            onOpenRules={() => navigateTo('rules')}
          />
        )}

        {currentScreen === 'deck' && selectedDeck && (
          <DeckScreen
            deckId={selectedDeck.id}
            deckName={selectedDeck.name}
          />
        )}

        {currentScreen === 'rules' && (
          <RulesScreen />
        )}

        {currentScreen === 'admin' && (
          <AdminScreen onBack={handleBack} />
        )}
      </main>
    </div>
  );
}
