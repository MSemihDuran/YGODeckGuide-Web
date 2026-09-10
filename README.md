# YGO Düellocu Rehberi - Web Sürümü (YGODeckGuide-Web)

Yu-Gi-Oh Düellocu Rehberi mobil uygulamasının birebir tüm ekranlarını, özelliklerini ve veritabanını içeren modern, responsive (mobil, tablet ve masaüstü uyumlu) web sitesi sürümüdür.

## 🌟 Özellikler

- **Aynı Veritabanı & Gerçek Zamanlı (Real-Time) Senkronizasyon:**
  - Mobil uygulamanın kullandığı Firebase Firestore projesine (`ygodeckguide`) doğrudan bağlıdır.
  - Kart açıklaması, görseli, deste bilgisi mobil veya web üzerinden güncellendiğinde `onSnapshot` sayesinde anında tüm açık tarayıcılarda canlı güncellenir (sayfayı yenilemeye gerek yoktur).
- **Milenyum Eşyaları:**
  - Ana sayfada altın parıltılı aktif Milenyum eşyası rozeti.
  - Tıklandığında 7 Milenyum eşyasının kadim hikayelerini ve güçlerini listeleyen seçim modalı.
- **Desteler & Kartlar:**
  - Firestore'daki tüm desteleri canlı listeleme.
  - Deste içi kategori filtreleri: *Canavar, Sihir, Tuzak, Ekstra Deste, Kombolar, Araçlar*.
  - Özel kart çizimleri (`/assets/custom_cards/`), Firestore görselleri ve YGOPRODeck API dinamik çekim desteği.
  - Kart detay penceresi (Büyük kart görseli, Resmi Açıklama, Çağırılma Koşulu ve Efekt Özeti).
- **Kombo Rehberi:**
  - Adım adım hamleler, zorluk rozetleri, gereken kartlar ve sonuç/saha durumunu gösteren deste komboları.
- **Düello Araçları:**
  - **LP Sayacı:** +1000, +100, -100, -1000 ve sıfırlama butonları.
  - **3D Yazı-Tura:** Kara Büyücü ve Mavi Gözlü ejderha sikkeli 3D dönme animasyonu.
  - **3D Altın Zar:** 1-6 nokta dizilimli ve yuvarlanma animasyonlu altın zar.
- **Genel Kurallar Rehberi:**
  - *Faz Sistemi*, *Kart Türleri*, *Ekstra Deste*, *Chain (LIFO) Mantığı*.
- **Yönetici (Admin) Paneli:**
  - Yeni deste ekleme
  - Yeni kart ekleme (cihazdan görsel yükleme / Base64 veya URL ile)
  - Mevcut kartı düzenleme (anında Firestore senkronizasyonu)
  - 170+ kartlık toplu yükleme ve veritabanı temizleme

---

## 🚀 Çalıştırma Talimatları

### 1. Geliştirici Sunucusu (Development Server)
```bash
cd E:\RemakeProject\YGODeckGuide-Web
npm run dev
```
Konsolda verilen adresi (genellikle `http://localhost:5173`) tarayıcınızda açabilirsiniz.

### 2. Canlı Önizleme & Üretim Derlemesi (Build & Preview)
```bash
npm run build
npm run preview
```

---

## 📱 Mobil Uyumluluk (Responsive Design)
Uygulama telefon ekranlarında bir mobil uygulama gibi kompakt ve dokunmatik uyumlu çalışırken, tablet ve geniş ekranlarda ferah bir gösterge paneli (dashboard) düzenine otomatik adapte olur.
