import React, { useState } from 'react';
import { Clock, Layers, Sword, Zap, BookOpen } from 'lucide-react';

const TABS = [
  { id: 'faz', name: 'Faz Sistemi', icon: Clock, color: 'text-blue-400', border: 'border-blue-500', bg: 'bg-blue-500/10' },
  { id: 'turler', name: 'Kart Türleri', icon: Layers, color: 'text-orange-400', border: 'border-orange-500', bg: 'bg-orange-500/10' },
  { id: 'ekstra', name: 'Ekstra Deste', icon: Sword, color: 'text-purple-400', border: 'border-purple-500', bg: 'bg-purple-500/10' },
  { id: 'chain', name: 'Chain Mantığı', icon: Zap, color: 'text-pink-400', border: 'border-pink-500', bg: 'bg-pink-500/10' }
];

export default function RulesScreen() {
  const [activeTab, setActiveTab] = useState('faz');

  const renderFazSistemi = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Faz (Aşama) Sistemi</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Bir oyuncunun turu sırasıyla çeşitli fazlardan oluşur. Ana stratejiler ve savaşlar genellikle Main Phase ve Battle Phase'de gerçekleşir.
        </p>
      </div>

      {/* 1. Main Phase 1 */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-l-4 border-l-emerald-500 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-emerald-400 font-bold text-base sm:text-lg">1. Main Phase 1 (Ana Aşama 1)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">Taktiklerini kurduğun asıl yerdir. Bu aşamada yapabileceklerin:</p>
        <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 list-disc list-inside">
          <li>Turda 1 kereye mahsus Normal Çağrı veya Kapalı Koyma yapabilirsin.</li>
          <li>Kart efektleriyle istediğin kadar Özel Çağrı yapabilirsin.</li>
          <li>Sihir kartlarını oynayabilir veya Tuzakları sahaya kapalı olarak koyabilirsin.</li>
          <li>Canavarların savaş pozisyonlarını değiştirebilirsin.</li>
        </ul>
      </div>

      {/* 2. Battle Phase */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-l-4 border-l-rose-500 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-rose-400 font-bold text-base sm:text-lg">2. Battle Phase (Savaş Aşaması)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">Saldırıların yapıldığı aşamadır. Düellonun ilk turunda bu aşamaya girilemez. Savaş aşamasına girmek zorunlu değildir.</p>
        <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 list-disc list-inside">
          <li>Saldırı konumundaki her canavarın ile (aksi yazmıyorsa) 1 kez saldırı ilan edebilirsin.</li>
          <li>Hızlı Büyüler ve Tuzak kartları bu aşamada aktifleştirilebilir.</li>
        </ul>
      </div>

      {/* 3. Main Phase 2 */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-l-4 border-l-amber-500 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-amber-400 font-bold text-base sm:text-lg">3. Main Phase 2 (Ana Aşama 2)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">Sadece Battle Phase'e girdiysen var olan bir aşamadır. Savaşa girmeden turunu bitirirsen MP2 oynanamaz.</p>
        <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 list-disc list-inside">
          <li>Main Phase 1'de Normal Çağrı hakkını kullanmadıysan burada kullanabilirsin.</li>
          <li>Savaştan sonra hayatta kalan canavarlarla Synchro/Xyz yapabilir, yeni tuzaklar kapatabilirsin.</li>
        </ul>
      </div>
    </div>
  );

  const renderKartTurleri = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Kart Türleri</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Yu-Gi-Oh'da kartlar temel olarak 3 ana sınıfa ayrılır: Canavarlar, Sihirler ve Tuzaklar.
        </p>
      </div>

      {/* Monsters */}
      <div className="bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl shadow-md space-y-3">
        <h3 className="text-orange-400 font-bold text-base sm:text-lg">Canavar Kartları (Monsters)</h3>
        <p className="text-slate-300 text-xs sm:text-sm"><strong className="text-white">Normal Canavarlar:</strong> Herhangi bir özel yeteneği olmayan, kaba kuvvete dayalı canavarlardır.</p>
        <p className="text-slate-300 text-xs sm:text-sm"><strong className="text-white">Efekt Canavarları:</strong> Oyunun gidişatını değiştiren özel yeteneklere sahiptirler.</p>
        <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/70 space-y-1.5">
          <p className="text-white font-bold text-xs sm:text-sm">Yıldız Sistemine Göre Normal Çağrı:</p>
          <ul className="text-slate-300 text-xs sm:text-sm space-y-1 list-disc list-inside">
            <li>1 - 4 Yıldızlılar: Bedel ödemeden sahaya direkt Normal Çağrılabilirler.</li>
            <li>5 - 6 Yıldızlılar: Sahadaki 1 canavar feda edilerek çağrılabilir.</li>
            <li>7 ve üzeri Yıldızlılar: Sahadaki 2 canavar feda edilerek çağrılabilir.</li>
          </ul>
        </div>
      </div>

      {/* Spells */}
      <div className="bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl shadow-md space-y-3">
        <h3 className="text-emerald-400 font-bold text-base sm:text-lg">Sihir Kartları (Spells)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">Kendi turunda, doğrudan elinden masaya koyarak çalıştırdığın destek kartlarıdır.</p>
        <ul className="text-slate-300 text-xs sm:text-sm space-y-2">
          <li><strong className="text-emerald-300">• Normal Spell:</strong> Oynarsın, efekti çalışır ve mezara gider.</li>
          <li><strong className="text-emerald-300">• Quick-Play Spell (⚡):</strong> Savaş aşamasında veya kapalıyken rakibin turunda bile oynanabilen en hızlı sihirdir.</li>
          <li><strong className="text-emerald-300">• Continuous Spell (∞):</strong> Çalıştırıldıktan sonra sahada açık kalmaya devam eder.</li>
          <li><strong className="text-emerald-300">• Field Spell (Alan):</strong> Sahadaki özel Alan bölgesine konur ve tüm sahayı etkiler.</li>
        </ul>
      </div>

      {/* Traps */}
      <div className="bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl shadow-md space-y-3">
        <h3 className="text-pink-400 font-bold text-base sm:text-lg">Tuzak Kartları (Traps)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">Rakibi durdurmak için kullanılan, oynamadan önce sahaya kapalı konması gereken kartlardır. Kapattığın tur açılamazlar.</p>
        <ul className="text-slate-300 text-xs sm:text-sm space-y-2">
          <li><strong className="text-pink-300">• Normal Trap:</strong> Kapalıyken şartlar sağlandığında açılır, efekti biter ve çöpe gider.</li>
          <li><strong className="text-pink-300">• Continuous Trap (∞):</strong> Açıldıktan sonra sahadan silinene kadar etkisini göstermeye devam eder.</li>
          <li><strong className="text-pink-300">• Counter Trap (↩):</strong> Oyunun en hızlı kartlarıdır. Rakibin hamlesini iptal eder. Counter Trap'e sadece başka bir Counter Trap ile yanıt verilebilir.</li>
          <li><strong className="text-pink-300">• Hand Trap (El Tuzağı):</strong> Sahan boşken bile elinden çöpe atarak (discard) çalışan ve rakibi hazırlıksız yakalayan canavarlardır (Örn: Ash Blossom).</li>
        </ul>
      </div>
    </div>
  );

  const renderEkstraDeste = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Ekstra Deste Çağrıları</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Elinize asla gelmeyen, koşulları sağlandığında Ekstra Desteden sahaya inen özel boss (patron) canavarları.
        </p>
      </div>

      {/* Fusion */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-t-4 border-t-purple-500 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-purple-400 font-bold text-base sm:text-lg">1. Fusion (Birleşim - Mor Kartlar)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">En klasik ekstra deste canavarıdır. Kartın üzerinde yazan materyallerin birleştirilmesiyle çağrılır.</p>
        <ul className="text-slate-300 text-xs sm:text-sm space-y-1 list-disc list-inside">
          <li><strong>Normal Fusion:</strong> Genellikle Polymerization kullanılarak çağrılır.</li>
          <li><strong>Contact Fusion:</strong> Polimerizasyona ihtiyaç duymaz, sahadaki materyalleri direkt mezara/sürgüne yollayarak çağrılırlar.</li>
        </ul>
      </div>

      {/* Synchro */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-t-4 border-t-slate-200 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-slate-100 font-bold text-base sm:text-lg">2. Synchro (Senkron - Beyaz Kartlar)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">
          Seviye (Yıldız) matematiğine dayanır. Sahanızda bulunan 1 Tuner canavarı ile 1 veya daha fazla Tuner Olmayan canavarı mezarlığa göndererek çağrılır. Gönderilen canavarların yıldız toplamı, Synchro canavarının yıldızına eşit olmalıdır.
        </p>
      </div>

      {/* Xyz */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-t-4 border-t-slate-950 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-slate-300 font-bold text-base sm:text-lg">3. Xyz (Siyah Kartlar)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">
          Aynı seviyeye sahip 2 veya daha fazla canavarı sahada üst üste koyarak çağrılır. Kullanılan canavarlar mezara gitmez, Xyz canavarının altına Materyal olarak girerler. Yetenek kullanırken bu materyaller sökülüp (detach) mezara yollanır.
        </p>
      </div>

      {/* Pendulum */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-t-4 border-t-emerald-500 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-emerald-400 font-bold text-base sm:text-lg">4. Pendulum (Sarkaç - Yarı Yeşil Kartlar)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">
          Hem Canavar hem de Sihir kartı olarak kullanılabilen melez kartlardır. Yok edildiklerinde Mezarlığa değil, Ekstra Destenin üstüne açık olarak giderler! İki adet Pendulum kartıyla Skala oluşturup elinizden/ekstra destenizden topluca Özel Çağrı yapmanızı sağlarlar.
        </p>
      </div>

      {/* Link */}
      <div className="bg-slate-800/90 border border-slate-700/80 border-t-4 border-t-blue-600 p-5 rounded-2xl shadow-md space-y-2">
        <h3 className="text-blue-400 font-bold text-base sm:text-lg">5. Link (Koyu Lacivert Kartlar)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">
          Seviye veya savunma puanı olmayan, ok yönleriyle sahayı yöneten canavarlardır. Savunma pozisyonuna geçirilemezler. Üzerinde istenen şarta uyan canavarları sahadan mezara yollayarak çağrılırlar.
        </p>
      </div>
    </div>
  );

  const renderChain = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Chain (Zincir) Mantığı</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Yu-Gi-Oh'da bir kart oynandığında, o kartın etkisi hemen gerçekleşmez. Rakibine "Buna bir yanıtın var mı?" hakkı doğar. Kartların birbirine yanıt olarak peş peşe oynanmasına Chain (Zincir) denir.
        </p>
      </div>

      <div className="bg-slate-800/90 border border-slate-700/80 p-5 sm:p-6 rounded-2xl shadow-md space-y-4">
        <h3 className="text-amber-400 font-bold text-base sm:text-lg">Altın Kural: LIFO (Last In, First Out)</h3>
        <p className="text-slate-300 text-xs sm:text-sm">
          Son giren, ilk çıkar! Zincir tamamlandığında, efektler sondan başa doğru (geriye doğru) çözülür.
        </p>

        <div className="bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-slate-700 space-y-3">
          <p className="text-emerald-400 font-bold text-sm">Örnek Bir Senaryo:</p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p><strong className="text-white">Chain 1:</strong> Sen "Monster Reborn" sihir kartını oynadın.</p>
            <p><strong className="text-white">Chain 2:</strong> Rakibin buna yanıt verip sihir iptal eden "Imperial Order" tuzağını açtı.</p>
            <p><strong className="text-white">Chain 3:</strong> Sen de buna yanıt verip elinden "Mystical Space Typhoon" (Hızlı Büyü) oynadın ve rakibin tuzağını hedef aldın.</p>
          </div>

          <div className="mt-4 bg-indigo-950/50 border border-indigo-500/40 p-3.5 rounded-lg space-y-2">
            <p className="text-indigo-300 font-bold text-xs sm:text-sm">Çözüm (Geriye Doğru):</p>
            <div className="text-xs sm:text-sm text-indigo-100 space-y-1.5">
              <p>1. Önce <strong className="text-white">Chain 3</strong> çözülür: Senin büyün rakibin tuzağını parçalar.</p>
              <p>2. Sonra <strong className="text-white">Chain 2</strong> çözülür: Rakibin tuzağı patladığı için iptal yeteneği çalışamaz.</p>
              <p>3. Son olarak <strong className="text-white">Chain 1</strong> çözülür: "Monster Reborn" sorunsuz çalışır ve canavarını diriltirsin!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-6 sm:py-8">
      {/* Rules Tabs */}
      <div className="border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:justify-center">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? `${tab.bg} ${tab.color} border-2 ${tab.border} shadow-lg`
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                <Icon size={16} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-in fade-in duration-200">
        {activeTab === 'faz' && renderFazSistemi()}
        {activeTab === 'turler' && renderKartTurleri()}
        {activeTab === 'ekstra' && renderEkstraDeste()}
        {activeTab === 'chain' && renderChain()}
      </div>
    </div>
  );
}
