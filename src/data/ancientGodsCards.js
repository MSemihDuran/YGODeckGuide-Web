export const ancientGodsCards = [
  // --- CANAVARLAR (ORİJİNAL) ---
  {
    name: 'Dark Beckoning Beast',
    apiName: 'Dark Beckoning Beast',
    category: 'Canavar',
    officialText: 'Bu kart Normal Çağrıldığında: Destenizden "Uria, Lord of Searing Flames", "Hamon, Lord of Striking Thunder" veya "Raviel, Lord of Phantasms" ya da metninde bu kartlardan birinden bahseden 1 canavarı ("Dark Beckoning Beast" hariç) elinize ekleyebilirsiniz. Bu kart açıkken, Ana Aşamanız sırasında Normal Çağrınıza ek olarak 1 adet 0 ATK/DEF İblis (Fiend) canavarı daha Normal Çağırabilirsiniz.',
    summonCondition: 'Özel bir çağrılma koşulu yoktur (Seviye 2).',
    effectSummary: 'Sahaya indiğinde Kutsal Canavarları veya destekçilerini elinize aratır ve fazladan 1 Normal Çağrı hakkı kazandırır.'
  },
  {
    name: 'Dark Summoning Beast',
    apiName: 'Dark Summoning Beast',
    category: 'Canavar',
    officialText: 'Bu kartı Feda edebilirsiniz; elinizden veya destenizden 1 "Uria, Lord of Searing Flames", "Hamon, Lord of Striking Thunder" veya "Raviel, Lord of Phantasms" canavarını çağırma koşullarını yok sayarak Özel Çağırın. Bu efekti çalıştırdığınız tur canavarlarınız saldıramaz. Bu kartı Mezarlığınızdan oyundan çıkararak; destenizden 1 Kutsal Canavarı elinize ekleyebilirsiniz.',
    summonCondition: '1 Feda ile Normal Çağrılabilir (Seviye 5) veya kart efektleriyle Özel Çağrılır.',
    effectSummary: 'Kendini feda ederek desteden veya elden koşulsuz Kutsal Canavar indirir; mezardayken desteden Kutsal Canavar arar.'
  },
  {
    name: 'Hamon, Lord of Striking Thunder',
    apiName: 'Hamon, Lord of Striking Thunder',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Kontrolünüzdeki 3 açık Sürekli Sihir kartını Mezarlığa göndererek Özel Çağrılmalıdır. Bu kart bir rakip canavarını savaşta yok edip Mezarlığa gönderirse: Rakibinize 1000 hasar verin. Bu kart açık Savunma Konumundayken, rakibiniz başka canavarları saldırı hedefi olarak seçemez.',
    summonCondition: 'Sahanızdaki 3 açık Sürekli Büyü kartını mezara göndererek elden Özel Çağrılır (veya Dark Summoning Beast ile).',
    effectSummary: 'Yıldırım Kutsal Canavarı (4000/4000). Savunmadayken diğer canavarlarınızı korur ve yok ettiği her rakip için 1000 LP doğrudan hasar vurur.'
  },
  {
    name: 'Calamity of the Sacred Beasts - Hamon, Lord of Striking Thunder',
    apiName: 'Calamity of the Sacred Beasts - Hamon, Lord of Striking Thunder',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Bir "Sacred Beast" kartının efektiyle Özel Çağrılmalıdır. Bu kartı elinizden gösterebilirsiniz; destenizden 1 "Sacred Beast" Sihir kartını elinize ekleyin, ardından 1 kart atın. Bu efekti turda sadece 1 kez kullanabilirsiniz. Turda 1 kez, rakibinizin Mezarlığına bir canavar gönderilirse: Rakibinize 1000 hasar verin. Bu kart savaş veya kart efektiyle yok edilirse: Bu efekti çalıştırabilirsiniz; bu tur hiç hasar almazsınız.',
    summonCondition: 'Bir "Sacred Beast" kartı efektiyle Özel Çağrılır (Seviye 10, 4000/4000).',
    effectSummary: 'Elden gösterilerek desteden Kutsal Canavar Büyüsü aratır. Rakibin mezara giden her canavarı için 1000 hasar vurur ve patlatılırsa o tur alınan tüm hasarları sıfırlar.'
  },
  {
    name: 'Raviel, Lord of Phantasms',
    apiName: 'Raviel, Lord of Phantasms',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Kontrolünüzdeki 3 İblis (Fiend) canavarını Feda ederek Özel Çağrılmalıdır. Rakibiniz her canavar Normal Çağırdığında: Sahaya 1 "Phantasm Token" (İblis/KARANLIK/Seviye 1/ATK 1000/DEF 1000) Özel Çağırın. Turda 1 kez: Sahanızdaki 1 canavarı Feda edebilirsiniz; bu kart o turun sonuna kadar feda edilen canavarın orijinal ATK\'si kadar ATK kazanır.',
    summonCondition: 'Sahanızdaki 3 İblis (Fiend) canavarını feda ederek elden Özel Çağrılır.',
    effectSummary: 'Serapların Efendisi (4000/4000). Rakip canavar çağırdıkça sahanıza tokenlar üretir ve kendi canavarlarını feda ederek saldırı gücünü katlar.'
  },
  {
    name: 'Raviel, Lord of Phantasms - Shimmering Scraper',
    apiName: 'Raviel, Lord of Phantasms - Shimmering Scraper',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Sadece kart efektleriyle Özel Çağrılabilir. (Hızlı Efekt): Bu kartı elinizden atıp sahanızdaki 1 "Raviel, Lord of Phantasms"ı hedef alabilirsiniz; bu tur onun ATK\'si iki katına çıkar (8000 ATK) ve rakibin tüm canavarlarına birer kez saldırabilir. Bu kart Mezarlığınızdayken: Sahanızdan 1 canavar Feda ederek bu kartı elinize ekleyebilirsiniz.',
    summonCondition: 'Elden atılarak Hızlı Efekt olarak çalıştırılır.',
    effectSummary: 'Raviel\'in gücünü anında 8000 ATK\'ye katlayan ve tüm rakip ordusuna saldırmasını sağlayan tek vuruşluk (OTK) gizli silah.'
  },
  {
    name: 'Infinity of the Sacred Beasts - Raviel, Lord of Phantasms',
    apiName: 'Infinity of the Sacred Beasts - Raviel, Lord of Phantasms',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Bir "Sacred Beast" kartının efektiyle Özel Çağrılmalıdır. Bu kartı elinizden gösterebilirsiniz; destenizden "Infinity of the Sacred Beasts - Raviel, Lord of Phantasms" hariç 1 "Sacred Beast" canavarını elinize ekleyin, ardından 1 kart atın. Bu efekti turda sadece 1 kez kullanabilirsiniz. Turda 1 kez (Hızlı Efekt): Sahanızdaki diğer 2 "Sacred Beast" canavarını Feda edebilirsiniz; rakibinizin kontrol ettiği tüm canavarları yok edin ve yok edilen her canavar için bu kart 1000 ATK kazanır.',
    summonCondition: 'Bir "Sacred Beast" kartı efektiyle Özel Çağrılır (Seviye 10, 4000/4000).',
    effectSummary: 'Elden gösterilerek desteden Kutsal Canavar aratır (el tazeler). Hızlı efektle sahadaki 2 Kutsal Canavarı feda edip rakibin tüm canavarlarını yok eder ve yok edilen her kart için 1000 ATK kazanır.'
  },
  {
    name: 'Uria, Lord of Searing Flames',
    apiName: 'Uria, Lord of Searing Flames',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Kontrolünüzdeki 3 açık Tuzak kartını Mezarlığa göndererek Özel Çağrılmalıdır. Bu kart Mezarlığınızdaki her Sürekli Tuzak kartı için 1000 ATK kazanır. Turda 1 kez: Rakibinizin kontrol ettiği kapalı 1 Sihir/Tuzak kartını hedef alıp yok edebilirsiniz. Bu efektin aktivasyonuna karşı hiçbir oyuncu Sihir/Tuzak kartı çalıştıramaz.',
    summonCondition: 'Sahanızdaki 3 açık Tuzak kartını mezara göndererek elden Özel Çağrılır.',
    effectSummary: 'Ateş Kutsal Canavarı. Mezardaki her Sürekli Tuzak başına 1000 ATK kazanır ve rakibin kapalı büyü/tuzaklarını yanıt verilemez şekilde patlatır.'
  },
  {
    name: 'Inferno of the Sacred Beasts - Uria, Lord of Searing Flames',
    apiName: 'Inferno of the Sacred Beasts - Uria, Lord of Searing Flames',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Bir "Sacred Beast" kartının efektiyle Özel Çağrılmalıdır. Bu kartı elinizden gösterebilirsiniz; destenizden 1 "Sacred Beast" Tuzak kartını elinize ekleyin, ardından 1 kart atın. Bu efekti turda sadece 1 kez kullanabilirsiniz. İki oyuncunun Mezarlığındaki her Tuzak kartı için 1000 ATK/DEF kazanır. Turda 1 kez (Hızlı Efekt): Sahadaki 1 Sihir/Tuzak kartını hedef alıp yok edebilirsiniz; bu efektin aktivasyonuna hiçbir oyuncu yanıt veremez.',
    summonCondition: 'Bir "Sacred Beast" kartı efektiyle Özel Çağrılır (Seviye 10).',
    effectSummary: 'Elden gösterilerek desteden Kutsal Canavar Tuzağı aratır. Mezarlıklardaki her tuzak için 1000 ATK kazanır ve hızlı efektle rakip büyü/tuzaklarını yanıtsız patlatır.'
  },
  {
    name: 'Holactie the Creator of Light',
    apiName: 'Holactie the Creator of Light',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Sahanızdaki orijinal isimleri "Slifer the Sky Dragon", "Obelisk the Tormentor" ve "The Winged Dragon of Ra" olan 3 canavarı Feda ederek Özel Çağrılmalıdır. Bu kartın Özel Çağrısı engellenemez. Bu kartı Özel Çağıran oyuncu DÜELLOYU ANINDA KAZANIR.',
    summonCondition: 'Sahadaki 3 asıl Mısır Tanrısı (Slifer, Obelisk, Ra) feda edilerek elden Özel Çağrılır.',
    effectSummary: '3 Mısır Tanrısının birleşimi olan Işık Yaratıcısı. Sahaya indiği anda koşulsuz şartsız düelloyu anında kazandırır (Otomatik Galibiyet).'
  },
  {
    name: 'Martyr of the Sacred Beasts',
    apiName: 'Martyr of the Sacred Beasts',
    category: 'Canavar',
    officialText: 'Bu kart Normal veya Özel Çağrılırsa: Destenizden 1 "Sacred Beast" Alan Büyüsünü veya 1 "Sacred Beast" Sürekli Büyü/Tuzağını sahanıza açık olarak koyabilirsiniz. Başka bir "Sacred Beast" canavarı kontrol ediyorsanız: Elinizden, destenizden ve/veya Mezarlığınızdan 2 "Martyr of the Sacred Beasts" Özel Çağırabilirsiniz. Rakibin Son Aşamasında, Mezarlığınızda bu kart ve Seviye 10 bir "Sacred Beast" canavarı varsa: Bu kartı elinize ekleyebilirsiniz. "Martyr of the Sacred Beasts"in her bir efektini turda sadece 1 kez kullanabilirsiniz.',
    summonCondition: 'Normal Çağrı veya kart efektleriyle Özel Çağrılabilir (Seviye 1).',
    effectSummary: 'Sahaya indiğinde desteden Kutsal Canavar Alan Büyüsü veya Sürekli Büyü/Tuzak açar. Sahada başka Kutsal Canavar varken 2 kopya daha çağırıp feda hazırlar; mezardan ele geri döner.'
  },
  {
    name: 'Summoner of the Sacred Beasts',
    apiName: 'Summoner of the Sacred Beasts',
    category: 'Canavar',
    officialText: 'Elinizden gösterip 1 kart atarak: Elinizden Seviye 8 olmayan 1 "Sacred Beast" canavarını Savunma Konumunda Özel Çağırabilirsiniz. Elinizden 1 kart atarak: Elinizden veya Mezarlığınızdan Seviye 8 olmayan 1 "Sacred Beast" canavarını Savunma Konumunda Özel Çağırabilirsiniz. Bu kartı Mezarlığınızdan oyundan çıkararak: Mezarlığınızdan Seviye 8 olmayan 1 "Sacred Beast" canavarını Savunma Konumunda Özel Çağırabilirsiniz. "Summoner of the Sacred Beasts"in her bir efektini turda sadece 1 kez kullanabilirsiniz.',
    summonCondition: '2 Feda ile Normal Çağrılabilir veya kart efektleriyle Özel Çağrılır (Seviye 8, 2300/3000).',
    effectSummary: 'Elden veya mezarlıktan Kutsal Canavarları (Raviel, Hamon, Uria) savunmada bedavaya sahaya fırlatır; mezardan kendini sürgün ederek de diriltme yapar.'
  },
  {
    name: 'The Wicked Avatar',
    apiName: 'The Wicked Avatar',
    category: 'Canavar',
    officialText: 'Normal Çağrılması/Kapalı Konması için 3 Feda gerekir. Bu kart Normal Çağrıldığında, rakibiniz sonraki 2 turun sonuna kadar Sihir/Tuzak kartı çalıştıramaz. Bu kartın ATK ve DEF\'si, sahadaki en yüksek ATK\'ye sahip canavarın ATK\'sinden 100 daha fazladır (The Wicked Avatar hariç).',
    summonCondition: '3 canavar Feda edilerek Normal Çağrılır.',
    effectSummary: 'Karanlık Tanrı formu. Sahadaki en güçlü canavardan daima 100 ATK daha güçlüdür; yani savaşta ASLA YENİLEMEZ! Ayrıca 2 tur rakibin büyü/tuzaklarını kilitler.'
  },
  {
    name: 'The Wicked Dreadroot',
    apiName: 'The Wicked Dreadroot',
    category: 'Canavar',
    officialText: 'Normal Çağrılması/Kapalı Konması için 3 Feda gerekir. Sahadaki bu kart hariç tüm diğer canavarların ATK ve DEF değerleri kalıcı olarak yarıya iner.',
    summonCondition: '3 canavar Feda edilerek Normal Çağrılır (4000/4000).',
    effectSummary: 'Korkunun Kökü (4000 ATK). Sahadaki diğer TÜM canavarların saldırı ve savunmasını yarı yarıya düşürerek rakip ordusunu aciz bırakır.'
  },
  {
    name: 'The Wicked Eraser',
    apiName: 'The Wicked Eraser',
    category: 'Canavar',
    officialText: 'Normal Çağrılması/Kapalı Konması için 3 Feda gerekir. Bu kartın ATK ve DEF\'si rakibinizin kontrol ettiği kart sayısı x 1000 olur. Bu kart yok edilip Mezarlığa gönderilirse: Sahadaki TÜM kartları yok edin.',
    summonCondition: '3 canavar Feda edilerek Normal Çağrılır.',
    effectSummary: 'Silici Tanrı. Rakibin sahasındaki kart sayısına göre güçlenir ve yok edildiği an sahadaki TÜM kartları patlatarak haritadan siler.'
  },

  // --- SİHİRLER (ORİJİNAL) ---
  {
    name: 'Called by the Grave',
    apiName: 'Called by the Grave',
    category: 'Sihir',
    officialText: 'Rakibinizin Mezarlığındaki 1 canavarı hedef alın; onu oyundan çıkarın ve sonraki turun sonuna kadar onun ve aynı orijinal ada sahip canavarların efektlerini geçersiz kılın.',
    summonCondition: 'Hızlı Büyü (Savaşta veya rakip turunda çalıştırılabilir).',
    effectSummary: 'Rakibin mezarlıktan tetiklenen kartlarını ve el tuzaklarını (Hand Trap) anında sürgüne yollayıp geçersiz kılan evrensel savunma büyüsü.'
  },
  {
    name: 'Cerulean Skyfire',
    apiName: 'Cerulean Skyfire',
    category: 'Sihir',
    officialText: '"Hamon, Lord of Striking Thunder"ı kendi çağırma koşuluyla çağırmak için kapalı Sihir kartlarını da kullanabilirsiniz. "Hamon" Saldırı Konumundayken rakibinizin çalıştırdığı bir Sihir/Tuzak kartının efektini geçersiz kılabilir, ardından 1 "Hamon"ı Savunma Konumuna çevirebilirsiniz. Kontrolünüzdeki bir "Hamon" veya "Uria" sahadan ayrılırsa: Bu tur savaş veya efekt hasarı almazsınız.',
    summonCondition: 'Sürekli Büyü (Sahada aktif kalır).',
    effectSummary: 'Hamon\'un kapalı büyülerle bile kolayca çağrılmasını sağlar, rakip büyü/tuzaklarını iptal eder ve hasar almanızı engeller.'
  },
  {
    name: 'Dimension Fusion Destruction',
    apiName: 'Dimension Fusion Destruction',
    category: 'Sihir',
    officialText: 'Elinizden, sahanızdan ve/veya Mezarlığınızdan bir "Phantasm" Füzyon Canavarı üzerinde listelenen Füzyon Malzemelerini oyundan çıkarın, ardından çağırma koşullarını yok sayarak o Füzyon Canavarını Ekstra Destenizden Özel Çağırın. Bu efektle Özel Çağrılan canavarın dahil olduğu saldırılardan siz savaş hasarı almazsınız. Kontrolünüzde "Uria, Lord of Searing Flames", "Hamon, Lord of Striking Thunder" veya "Raviel, Lord of Phantasms" varsa, rakibiniz bu kartın aktivasyonuna yanıt olarak kart veya efekt etkinleştiremez.',
    summonCondition: 'Normal Büyü kartı.',
    effectSummary: 'Elden, sahadan ve mezarlıktan malzemeleri sürgün ederek Armityle\'ı bedavaya sahaya fırlatır; Kutsal Canavar kontrol ederken rakip buna yanıt veremez.'
  },
  {
    name: 'Divine Evolution',
    apiName: 'Divine Evolution',
    category: 'Sihir',
    officialText: 'Bu kartın aktivasyonu ve efektleri iptal edilemez. Sahanızdaki orijinal Türü İlahi-Canavar olan 1 canavarı hedef alın; o canavar kalıcı olarak 1000 ATK/DEF kazanır ve efektlerinin aktivasyonu engellenemez. Ayrıca o canavar saldırdığında rakibiniz canavar feda etmek zorunda kalır.',
    summonCondition: 'Normal Büyü kartı (Aktivasyonu engellenemez).',
    effectSummary: 'Mısır Tanrılarını evrimleştirerek +1000 ATK/DEF verir ve yeteneklerini kesinlikle engellenemez kılar.'
  },
  {
    name: 'Fallen Paradise of the Sacred Beasts',
    apiName: 'Fallen Paradise of the Sacred Beasts',
    category: 'Sihir',
    officialText: 'Ana Aşamanız sırasında turda 3 keze kadar: Elinizden ve/veya açık sahanızdan aynı türde (Canavar, Büyü veya Tuzak) 3 kartı Mezarlığa gönderip elinizden, destenizden, mezarlığınızdan veya sürgünden 1 "Sacred Beast" canavarı Özel Çağırabilirsiniz ve bu çağrılan canavar rakibin çalıştırdığı Büyü/Tuzak efektlerinden ETKİLENMEZ. Orijinal Seviyesi 10 olan bir "Sacred Beast" kontrol ediyorsanız: Turda 1 kez 2 kart çekebilirsiniz.',
    summonCondition: 'Alan Büyüsü (Field Spell).',
    effectSummary: 'Aynı türden 3 kart atarak turda 3 keze kadar elden/desteden/mezardan Kutsal Canavar çağırır ve onları rakibin büyü/tuzaklarına karşı dokunulmaz yapar; ayrıca her tur 2 kart çektirir.'
  },
  {
    name: "Joker's Straight",
    apiName: "Joker's Straight",
    category: 'Sihir',
    officialText: 'Elinizden 1 kart atın, destenizden 1 "Queen\'s Knight" Özel Çağırın, elinize 1 "King\'s Knight" veya "Jack\'s Knight" ekleyin, ardından hemen 1 canavarı Normal Çağırabilirsiniz. Bu turun Son Aşamasında bu kartı elinize geri alabilirsiniz.',
    summonCondition: 'Normal Büyü kartı.',
    effectSummary: 'Tek bir kartla sahaya anında 3 şövalye toplayarak Tanrı kartları için gereken 3 Fedayı tek hamlede hazırlar.'
  },
  {
    name: 'Lightning Storm',
    apiName: 'Lightning Storm',
    category: 'Sihir',
    officialText: 'Kontrolünüzde açık kart yoksa çalıştırılabilir. Şu efektlerden birini uygulayın: • Rakibinizin kontrol ettiği tüm Saldırı Konumundaki canavarları yok edin. • Rakibinizin kontrol ettiği tüm Sihir ve Tuzak kartlarını yok edin.',
    summonCondition: 'Açık kartınız yokken çalıştırılabilir.',
    effectSummary: 'İkinci başlayan oyuncu için rakibin tüm ordusunu veya tüm arka sırasını tek hamlede süpüren ölümcül yıldırım fırtınası.'
  },
  {
    name: 'Phantasmal Martyrs',
    apiName: 'Phantasmal Martyrs',
    category: 'Sihir',
    officialText: 'Elinizde en az 2 kart daha varken ve sahada "Uria" veya "Hamon" varken: Elinizdeki tüm kartları Mezarlığa gönderin; sahaya 3 "Phantasmal Martyr Token" (İblis/KARANLIK/Seviye 1/ATK 0/DEF 0) Savunma Konumunda Özel Çağırın.',
    summonCondition: 'Eldeki kartları mezara atarak çalıştırılır.',
    effectSummary: 'Sahaya tek seferde 3 adet token çağırarak Raviel\'in çağrılması veya diğer büyük feda maliyetleri için zemin hazırlar.'
  },
  {
    name: 'Sacred Beasts Thunderclap',
    apiName: 'Sacred Beasts Thunderclap',
    category: 'Sihir',
    officialText: 'Ana Aşamanız sırasında: Elinizden, Destenizden ve/veya Mezarlığınızdan 2 adet "Sacred Beasts Thunderclap" kartını sahanıza açık olarak koyabilir, ardından elinizdeki 1 Seviye 10 "Sacred Beast" canavarını gösterip Destenizden 1 "Fallen Paradise of the Sacred Beasts" kartını Alan Bölgenize açık olarak koyabilirsiniz. Rakibin Son Aşamasında bu kart Mezarlığınızdaysa: Bu kartı elinize ekleyebilirsiniz. Her efekti turda sadece 1 kez kullanabilirsiniz.',
    summonCondition: 'Sürekli Büyü (Continuous Spell).',
    effectSummary: 'Ana Aşamada desteden anında 2 kopya daha sahaya koyarak Hamon için gereken 3 Sürekli Büyüyü tek kartla tamamlar ve Fallen Paradise alan büyüsünü desteden bedavaya açar.'
  },
  {
    name: 'Soul Crossing',
    apiName: 'Soul Crossing',
    category: 'Sihir',
    officialText: 'Ana Aşama sırasında (Hızlı Efekt): Hemen bir İlahi-Canavar canavarını Feda Çağrısıyla çağırabilirsiniz; bu çağrı için RAKİBİNİZİN kontrol ettiği canavarları da kendi canavarınız gibi Feda edebilirsiniz! Sonraki turun sonuna kadar sadece 1 kart efekti çalıştırabilirsiniz.',
    summonCondition: 'Hızlı Büyü (Rakibin turunda bile açılabilir).',
    effectSummary: 'Rakibin tüm güçlü patron canavarlarını tek hamlede feda edip onların canavarlarıyla kendi sahanıza Mısır Tanrısı dikmenizi sağlayan en güçlü büyü.'
  },
  {
    name: 'Soul Exchange',
    apiName: 'Soul Exchange',
    category: 'Sihir',
    officialText: 'Rakibinizin kontrol ettiği 1 canavarı hedef alın; bu tur bir canavarı Feda edecekseniz, kendi canavarınız yerine o hedef canavarı Feda etmelisiniz. Bu kartı etkinleştirdiğiniz tur Savaş Aşaması yürütemezsiniz.',
    summonCondition: 'Normal Büyü kartı.',
    effectSummary: 'Rakibin canavarını çalarak kendi feda çağrınız için kurban etmenizi sağlar (O tur savaş aşaması yapılamaz).'
  },
  {
    name: 'Super Polymerization',
    apiName: 'Super Polymerization',
    category: 'Sihir',
    officialText: 'Elinizden 1 kart atın; iki sahadan da Fusion Malzemelerini Mezarlığa göndererek Ekstra Destenizden 1 Fusion Canavarı Fusion Çağırın. Bu kartın aktivasyonuna karşı hiçbir oyuncu kart veya efekt çalıştıramaz.',
    summonCondition: 'Hızlı Büyü (Aktivasyonuna zincir başlatılamaz/yanıt verilemez).',
    effectSummary: 'Rakibin sahasındaki canavarları kullanarak birleşim yapan ve kesinlikle iptal edilemeyen efsanevi süper füzyon büyüsü.'
  },
  {
    name: 'Triple Tactics Talent',
    apiName: 'Triple Tactics Talent',
    category: 'Sihir',
    officialText: 'Eğer rakibiniz bu turun Ana Aşaması sırasında bir canavar efekti çalıştırdıysa: Şu efektlerden 1\'ini seçin: • Desteden 2 kart çekin. • Rakibin kontrol ettiği 1 canavarın kontrolünü turun sonuna kadar alın. • Rakibin eline bakın ve içinden 1 kartı destesine geri karıştırın.',
    summonCondition: 'Rakip canavar efekti açtığında çalıştırılabilir.',
    effectSummary: 'Rakip hamle yaptığında oyunu anında lehinize çeviren 3 güçlü seçenek (2 kart çekme, canavar çalma veya elden kart silme).'
  },
  {
    name: 'Triple Tactics Thrust',
    apiName: 'Triple Tactics Thrust',
    category: 'Sihir',
    officialText: 'Eğer rakibiniz bu tur bir canavar efekti etkinleştirdiyse: Destenizden "Triple Tactics Thrust" hariç 1 Normal Büyü/Tuzak kartını doğrudan sahanıza Set edin, VEYA rakibiniz bir canavar kontrol ediyorsa bunun yerine onu elinize ekleyebilirsiniz. Bu efektle Set edilen kart bu tur etkinleştirilemez. Turda sadece 1 "Triple Tactics Thrust" etkinleştirebilirsiniz.',
    summonCondition: 'Normal Büyü Kartı.',
    effectSummary: 'Rakip canavar efekti açtığında desteden istediğiniz herhangi bir Normal Büyü veya Tuzağı doğrudan sahaya kapatır veya rakip sahada canavar varsa doğrudan ele verir.'
  },
  {
    name: 'Sacred Beasts Released',
    apiName: 'Sacred Beasts Released',
    category: 'Sihir',
    officialText: 'Destenizden farklı isimlere sahip 3 "Sacred Beast" canavarını elinize ekleyin, ardından 2 kart atın. Bu kart Mezarlığınızdaysa, oraya gönderildiği tur hariç: Bu kartı oyundan çıkarabilirsiniz; destenizden Normal Çağrılamayan/Kapalı Konamayan 1 Seviye 10 Pyro, Thunder veya Fiend canavarını elinize ekleyin. "Sacred Beasts Released"in her bir efektini turda sadece 1 kez kullanabilirsiniz.',
    summonCondition: 'Normal Büyü Kartı.',
    effectSummary: 'Desteden 3 farklı Kutsal Canavarı ele ekleyip 2 kart attırır; mezarlıktan kendisini sürgüne yollayarak desteden Seviye 10 özel bir canavar (Uria, Hamon, Raviel vb.) aratır.'
  },

  // --- TUZAKLAR (ORİJİNAL) ---
  {
    name: 'Awakening of the Sacred Beasts',
    apiName: 'Awakening of the Sacred Beasts',
    category: 'Tuzak',
    officialText: 'Bu kart, kontrol ettiğiniz farklı isimlere sahip "Uria, Lord of Searing Flames", "Hamon, Lord of Striking Thunder" ve/veya "Raviel, Lord of Phantasms" sayısına bağlı olarak şu efektleri kazanır:\n● 1+: Rakibiniz her canavar Normal veya Özel Çağırdığında: O canavarın/canavarların ATK\'si kadar LP kazanın.\n● 2+: Rakibinizin kontrol ettiği canavarların etkinleştirilen efektlerini geçersiz kılın.\n● 3: Rakibinizin Mezarlığına gönderilecek tüm canavarlar bunun yerine oyundan çıkarılır.\nKendi turunuzda bir kez, Seviye 10 bir canavar kontrol ediyorsanız: Mezarlığınızdan 1 Sürekli Tuzak kartını elinize ekleyebilirsiniz.',
    summonCondition: 'Sürekli Tuzak Kartı (Continuous Trap).',
    effectSummary: 'Sahadaki Kutsal Canavar sayısına göre can puanı kazandıran, rakip canavar efektlerini tamamen kitleyen, mezarını sürgüne yollayan ve mezardan Sürekli Tuzak geri alan nihai kilit tuzağı.'
  },
  {
    name: 'Sacred Beasts Combined Assault',
    apiName: 'Sacred Beasts Combined Assault',
    category: 'Tuzak',
    officialText: 'Elinizden veya Mezarlığınızdan 1 "Sacred Beast" canavarını Savunma Konumunda Özel Çağırın, ardından orijinal Seviyesi 10 olan 2 veya daha fazla "Sacred Beast" canavarı kontrol ediyorsanız: Rakibinizin kontrol ettiği 1 açık kartın efektlerini geçersiz kılabilir, ve ederseniz onu yok edebilirsiniz. Bu kartı Mezarlığınızdan oyundan çıkararak: Elinizden veya sahanızdaki canavarları kullanarak Ekstra Destenizden 1 "Phantasm" Fusion Canavarını Fusion Çağırın. Her efekti turda sadece 1 kez kullanabilirsiniz.',
    summonCondition: 'Normal Tuzak kartı.',
    effectSummary: 'Elden veya mezardan Kutsal Canavar canlandırır, sahada 2 Seviye 10 canavar varken rakibin açık kartını geçersiz kılıp patlatır; mezardan sürgün edilerek Armityle füzyonu yaptırır.'
  },
  {
    name: 'Abyss of the Sacred Beasts',
    apiName: 'Abyss of the Sacred Beasts',
    category: 'Tuzak',
    officialText: 'Kontrolünüzdeki 3 açık "Abyss of the Sacred Beasts" kartını (bu kart dâhil) Mezarlığa gönderip rakibinizin kontrol ettiği açık 1 canavarı hedef alabilirsiniz; onu kapalı Savunma Konumuna çevirin. Ana Aşama sırasında: Elinizden, Destenizden ve/veya Mezarlığınızdan 2 adet "Abyss of the Sacred Beasts" kartını sahanıza açık olarak koyabilirsiniz. Rakibin Son Aşamasında bu kart Mezarlığınızdaysa: Bu kartı destenizin en altına koyabilirsiniz. Her efekti turda sadece 1 kez kullanabilirsiniz.',
    summonCondition: 'Sürekli Tuzak (Continuous Trap).',
    effectSummary: 'Ana Aşamada desteden ve elden anında 2 kopya daha açarak Uria için gereken 3 Sürekli Tuzağı tek başına tamamlar; rakip canavarı kapatabilir ve mezardan desteye döner.'
  },
  {
    name: 'Hyper Blaze',
    apiName: 'Hyper Blaze',
    category: 'Tuzak',
    officialText: '"Uria, Lord of Searing Flames"ı çağırmak için kapalı Tuzak kartlarını da kullanabilirsiniz. "Uria"nız savaştığında el veya desteden 1 Tuzak mezara gönderip onun ATK/DEF\'sini sahadaki ve mezardaki tüm tuzaklar x 1000 yapabilirsiniz. Elinizden 1 kart atarak mezardan Uria, Hamon veya Raviel\'i diriltebilirsiniz.',
    summonCondition: 'Sürekli Tuzak.',
    effectSummary: 'Uria\'yı kapalı tuzaklarla çağırmayı sağlar, savaşta ATK\'sini on binlere çıkarır ve mezardan Kutsal Canavarları bedavaya diriltir.'
  },

  // --- CUSTOM KARTLAR (ÖZEL) ---
  {
    name: 'Egyptian God Guardian',
    apiName: '',
    category: 'Canavar',
    officialText: 'Elinizden veya destenizden 1 İLAHİ (DIVINE) canavarı Mezarlığa göndererek bu kartı elinizden Özel Çağırabilirsiniz; ardından destenizden veya Mezarlığınızdan metninde "Divine-Beast" geçen 1 Tuzak kartını sahanıza kapalı koyabilirsiniz (bu tur çalıştırılabilir). Rakibiniz sahada bir kart veya efekt çalıştırdığında, sahada veya mezarlıkta bir İlahi-Canavarınız varsa (Hızlı Efekt): Bu kartı elden veya mezardan oyundan çıkarıp o efekti iptal edebilirsiniz. ATK/ 0 DEF/ 3000.',
    summonCondition: 'Elden/Desteden 1 İlahi canavar mezara gönderilerek elden Özel Çağrılır.',
    effectSummary: 'Tanrıları mezara hazırlarken anında desteden tuzak kurar ve mezardan kendini sürgün ederek rakip efektlerini iptal eden muazzam koruyucu.'
  },
  {
    name: "Egyptian Gods' Disciple",
    apiName: '',
    category: 'Canavar',
    officialText: 'Bu kart bir İlahi-Canavar (Divine-Beast) canavarının Feda Çağrısı için tek başına 3 Feda yerine sayılabilir. Ana Aşama sırasında (Hızlı Efekt): Elinizdeki 1 İLAHİ canavarı göstererek bu kartı elden Özel Çağırabilir ve destenizden metninde "Divine-Beast" geçen 1 Sihir kartını kapalı koyabilirsiniz (bu tur açılabilir). Normal veya Özel Çağrıldığında: Desteden veya mezardan 1 İLAHİ canavarı elinize ekleyebilirsiniz. ATK/ 1100 DEF/ 600.',
    summonCondition: 'Elden Tanrı kartı gösterilerek Hızlı Efekt ile Özel Çağrılır.',
    effectSummary: 'Tek başına 3 Feda yerine geçen, gelir gelmez Tanrı arayan ve Tanrı büyülerini anında sahaya kuran en kritik mürid.'
  },
  {
    name: "Egyptian God's Knight",
    apiName: '',
    category: 'Canavar',
    officialText: 'Bu kart Normal veya Özel Çağrılırsa: Destenizden "Egyptian God\'s Knight" hariç metninde "Divine-Beast" geçen 1 canavarı Savunma Konumunda Özel Çağırabilirsiniz. Ana Aşama sırasında (Hızlı Efekt): Bu kartı elden veya sahadan Feda edebilirsiniz; bu tur sahanızdaki İlahi-Canavarlar 1000 ATK kazanır, ardından hemen 1 İLAHİ canavarı Feda Çağrısıyla çağırabilirsiniz. ATK/ 1600 DEF/ 1400.',
    summonCondition: 'Normal Çağrı veya Özel Çağrı yapılabilir.',
    effectSummary: 'Sahaya indiğinde desteden diğer tanrı yardımcılarını çağırır ve kendini feda ederek anında Tanrı çağırma hakkı sağlar.'
  },
  {
    name: 'Obelisk The Tormentor GOD',
    apiName: 'Obelisk the Tormentor',
    category: 'Canavar',
    officialText: '3 canavar Feda edilerek Normal Çağrılır. Bu kartın çağırması iptal edilemez. Rakibinizin Sihir ve Tuzak kartlarının efektlerinden tamamen ETKİLENMEZ. Hiçbir oyuncu bu kartı kart efektleriyle hedef alamaz. Sahanızdaki 2 canavarı feda ederek rakibinizin kontrol ettiği tüm canavarları yok edebilirsiniz. ATK/ 4000 DEF/ 4000.',
    summonCondition: 'Sahanızdan 3 canavar feda edilerek Normal Çağrılır.',
    effectSummary: 'Rakibin büyü ve tuzaklarından asla etkilenmeyen, hedef alınamayan ve 2 feda ile tüm rakip ordusunu yok eden yenilmez Yıkıcı Tanrı formu.'
  },
  {
    name: 'Slifer The Sky Dragon GOD',
    apiName: 'Slifer the Sky Dragon',
    category: 'Canavar',
    officialText: '3 canavar Feda edilerek Normal Çağrılır. Bu kartın çağırması iptal edilemez. Rakibinizin Sihir ve Tuzak kartlarının efektlerinden tamamen ETKİLENMEZ. Elinizdeki her kart için 1000 ATK ve DEF kazanır. Rakibiniz Saldırı Konumunda bir canavar çağırdığında onun ATK\'sini 2000 düşürür, ATK 0 olursa o canavarı anında yok eder.',
    summonCondition: 'Sahanızdan 3 canavar feda edilerek Normal Çağrılır.',
    effectSummary: 'Rakibin büyü ve tuzaklarından etkilenmeyen, el sayısıyla sınırsız güçlenen ve rakibin çağırdığı her canavarı anında eriten yenilmez Gökyüzü Ejderhası formu.'
  },
  {
    name: 'The Winged Dragon of Ra GOD',
    apiName: 'The Winged Dragon of Ra',
    category: 'Canavar',
    officialText: '3 canavar Feda edilerek Normal Çağrılır. Bu kartın çağırması iptal edilemez. Rakibinizin Sihir ve Tuzak kartlarının efektlerinden tamamen ETKİLENMEZ. Çağrıldığında LP\'nizi 100 kalacak şekilde ödeyip ödenen miktar kadar ATK/DEF kazandırabilirsiniz. 1000 LP ödeyerek sahadaki 1 canavarı yok edebilirsiniz.',
    summonCondition: 'Sahanızdan 3 canavar feda edilerek Normal Çağrılır.',
    effectSummary: 'Rakibin büyü ve tuzaklarından etkilenmeyen, tüm can puanınızı saf saldırı gücüne çeviren ve 1000 can ile canavarları yok eden nihai Güneş Tanrısı formu.'
  },
  {
    name: 'Slifer The Sky Dragon - Immortal Chaos',
    apiName: '',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Kendi efektiyle Özel Çağrılmalıdır. Tüm düello boyunca yalnızca 1 kez çağrılabilir. Bu kart mezarlıktayken sahadaki "Slifer the Sky Dragon" mezara gönderilirse: El veya sahadan 1 Chaos canavarı feda ederek bu kartı Özel Çağırın (Aktivasyonuna zincir başlatılamaz). Diğer kartların efektlerinden tamamen ETKİLENMEZ. Sahada 2 tur kalır ve mezara döner. Çağrıldığında mezarlığı karıştırıp 2 rastgele kartı elinize ekler. Elinizdeki her kart için 2000 ATK/DEF kazanır. Turda 1 kez rakip canavarın ATK\'sini 1000 düşürür, 0 olursa yok eder.',
    summonCondition: 'Slifer sahadan mezara gittiğinde mezardan Hızlı Efektle Özel Çağrılır.',
    effectSummary: 'Tüm kart efektlerinden bağımsız, her kart için 2000 ATK kazanan ve mezardan rastgele 2 kart çektiren kaos ejderhası.'
  },
  {
    name: 'Obelisk The Tormentor - Immortal Chaos',
    apiName: '',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Kendi efektiyle Özel Çağrılmalıdır. Tüm düello boyunca yalnızca 1 kez çağrılabilir. Bu kart mezarlıktayken sahadaki "Obelisk the Tormentor" mezara giderse: 1 Chaos canavarı feda ederek bu kartı Özel Çağırın (Yanıt verilemez). Diğer kart efektlerinden ETKİLENMEZ. Sahada 2 tur kalır. Çağrıldığında 2 canavar feda ederseniz bu kart 2000 ATK/DEF kazanır ve rakibin TÜM canavarlarını yok eder (bu tur saldıramaz).',
    summonCondition: 'Obelisk sahadan mezara gittiğinde mezardan Özel Çağrılır.',
    effectSummary: 'Tüm efektlerden bağımsız, sahaya indiğinde 2 feda ile rakibin tüm sahasını yok eden ölümsüz kaos devi.'
  },
  {
    name: 'The Winged Dragon of Ra - Immortal Chaos',
    apiName: '',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapalı Konamaz. Kendi efektiyle Özel Çağrılmalıdır. Tüm düello boyunca 1 kez çağrılabilir. Sahadaki Ra mezara gittiğinde 1 Chaos feda ederek mezardan Özel Çağrılır. Diğer efektlerden ETKİLENMEZ. Sahada 2 tur kalır. 2000 LP ödeyerek sahadan 2 canavarı mezara ve rakibin elinden 1 kartı mezara gönderebilirsiniz. İlk turunun Son Aşamasında bu kartı mezara gönderip elden, desteden veya mezardan koşulsuz "The Winged Dragon of Ra - Rusty Black" Özel Çağırabilirsiniz.',
    summonCondition: 'Ra sahadan mezara gittiğinde mezardan Özel Çağrılır.',
    effectSummary: '2000 LP ile rakibin sahasını ve elini temizleyen, tur sonunda ise Rusty Black formunu çağıran kaos tanrısı.'
  },
  {
    name: 'The Winged Dragon of Ra - Rusty Black',
    apiName: '',
    category: 'Canavar',
    officialText: '[DIVINE-BEAST / EFFECT] Seviye 10. ATK/ 3000 DEF/ 0. Normal Çağrılamaz/Kapalı Konamaz. Sadece "The Winged Dragon of Ra - Immortal Chaos"un ilk turunda sahadan mezara gitmesiyle elden, desteden veya mezardan Özel Çağrılır. Rakibiniz bu kartı saldırı hedefi seçemez. 500 LP ödeyebilirsiniz; sahadaki 1 sihir/tuzak kartını mezara gönderin VEYA rakibiniz destesini karıştırıp 2 rastgele kart çekip oyundan çıkarsın. Bu kart mezara giderse anında 500 LP kaybedersiniz.',
    summonCondition: 'Immortal Chaos sahadan mezara gittiğinde koşulsuz Özel Çağrılır.',
    effectSummary: 'Saldırı hedefi olamayan, 500 LP ile büyü/tuzak silen veya rakibin destesini karıştırıp 2 kartını sürgüne yollayan paslı Ra formu.'
  },
  {
    name: 'Prayers to the Egyptian Gods',
    apiName: '',
    category: 'Sihir',
    officialText: 'Bu kart çalıştırıldığında: Destenizden veya Mezarlığınızdan 1 İLAHİ (DIVINE) canavarı ve/veya metninde "Divine-Beast" geçen 1 canavarı elinize ekleyin, ardından 1 kart atın. Ana Aşamanız sırasında Normal Çağrınıza ek olarak 1 İLAHİ canavarı daha Normal Çağırabilirsiniz. Sahanızdaki ve mezarlığınızdaki İlahi-Canavarlar rakibinizin canavar efektlerinden ETKİLENMEZ. Turda sadece 1 "Prayers to the Egyptian Gods" çalıştırabilirsiniz.',
    summonCondition: 'Normal Büyü kartı.',
    effectSummary: 'Desteden Tanrı aratan, fazladan Normal Çağrı hakkı veren ve tüm Tanrılarınızı rakip canavar efektlerine karşı dokunulmaz yapan kutsal dua büyüsü.'
  },
  {
    name: "Egyptian God's Anger",
    apiName: '',
    category: 'Tuzak',
    officialText: 'Rakibiniz sizden daha fazla canavar kontrol ediyorsa veya bir İlahi-Canavar kontrol ediyorsanız bu kartı ELİNİZDEN çalıştırabilirsiniz. Sahada ve mezarlığınızdaki İlahi-Canavar sayısı kadar sahadaki kartları seçip yok edin, ardından şu efektlerden 1\'ini uygulayın: • Rakip tur sonuna kadar canavarlarını Saldırı Konumunda çağırmak zorundadır. • Sahaya 2 "Egyptian God Servant Token" (Seviye 4/ATK 0/DEF 0) çağırın. • Sahadaki tüm canavarların kontrolünü gerçek sahiplerine iade edin.',
    summonCondition: 'Tanrı kontrol ediyorsanız veya rakip sayıca üstünse doğrudan elden çalıştırılabilir.',
    effectSummary: 'Doğrudan elden oynanabilen, sahadaki kartları topluca yok eden ve duruma göre token çağıran veya pozisyonları kilitleyen öfke tuzağı.'
  },

  // --- GÜNEŞ TANRISI (SUN GOD) SERİSİ ---
  {
    name: "The Sun God's Poet - Helpoemer",
    apiName: '',
    category: 'Canavar',
    officialText: 'Elinizden başka 1 kart atarak bu kartı elinizden Özel Çağırabilirsiniz. Bu kart Özel Çağrılırsa: Destenizden "The Sun God\'s Poet - Helpoemer" hariç 1 "Sun God" kartını elinize ekleyin; ardından rakibinizin LP\'si sizinkinden en az 2000 fazlaysa rakibin elinden 1 rastgele kartı mezara atabilirsiniz. Turun Son Aşamasında, eğer bu tur mezarlığınıza "The Immortal Sun God" gönderildiyse: Bu kartı mezarlıktan elinize geri ekleyebilirsiniz. Her bir efektini turda bir kez kullanabilirsiniz. ATK/ 2000 DEF/ 1400.',
    summonCondition: 'Elden 1 kart atılarak Özel Çağrılır (Seviye 5 KARANLIK İblis).',
    effectSummary: 'Elden fırlayarak desteden herhangi bir "Sun God" kartını (Büyü/Tuzak/Canavar) arar, rakibin elini eksiltir ve mezardan sonsuz döngüyle geri döner.'
  },
  {
    name: "The Sun God's Destructor - Makyura",
    apiName: '',
    category: 'Canavar',
    officialText: 'Bu kart Normal veya Özel Çağrıldığında, ya da elden veya sahadan Mezarlığa gönderildiğinde: Elinizden veya destenizden 1 "Sun God" Büyü/Tuzak kartını sahaya kapalı koyabilirsiniz; koyduğunuz kart bir Tuzak veya Hızlı Büyü ise AYNI TUR ÇALIŞTIRILABİLİR! Turun Son Aşamasında, eğer bu tur mezara "The Immortal Sun God" gittiyse: Bu kartı mezardan elinize geri ekleyebilirsiniz. Her efektini turda bir kez kullanabilirsiniz. ATK/ 1600 DEF/ 1200.',
    summonCondition: 'Normal Çağrı, Özel Çağrı veya mezara gitme durumunda tetiklenir (Seviye 4).',
    effectSummary: 'Sahaya indiğinde veya mezara düştüğünde desteden Tuzak veya Hızlı Büyü kurar ve beklemeden aynı tur hemen açtırır (Tuzak hızlandırıcı).'
  },
  {
    name: "The Sun God's Terror Machine - Gil Garth",
    apiName: '',
    category: 'Canavar',
    officialText: 'Elinizdeyken sahada bir "Sun God" kartı kontrol ediyorsanız: Bu kartı elden Özel Çağırabilirsiniz. Bu kartı Feda edip iki oyuncunun mezarlığındaki 1 diğer kartı hedef alabilirsiniz; destenizden 1 "Sun God" kartını mezara gönderin, ve gönderirseniz hedeflenen kartı destenin en altına yollayın. Turun Son Aşamasında, eğer bu tur mezara "The Immortal Sun God" gittiyse: Bu kartı mezardan elinize geri ekleyebilirsiniz. ATK/ 1800 DEF/ 1200.',
    summonCondition: 'Sahada Sun God kartı varken elden bedava Özel Çağrılır (Seviye 4).',
    effectSummary: 'Bedava sahaya iner, kendini feda ederek desteden mezara kart hazırlar (Makyura veya kombo parçaları) ve rakip mezarındaki kritik kartı destenin altına kilitler.'
  },
  {
    name: "The Sun God's Torture Device - Viser Des Shock",
    apiName: '',
    category: 'Canavar',
    officialText: 'Savaşta yok edilemez. "The Sun God\'s Torture Device - Viser Des Shock"ın her bir efektini turda sadece bir kez kullanabilirsiniz. Rakibinizin mezarlığına bir canavar gönderildiğinde ve siz bir "Sun God" kartı kontrol ediyorsanız (Hasar Adımında bile): Bu kartı elden Özel Çağırabilirsiniz, ve çağırırsanız sahadaki başka 1 kartı ele/Ekstra Desteye geri gönderin, ardından rakibinize 800 hasar verin. Son Aşamada "The Immortal Sun God" mezara gittiyse bu kartı mezardan elinize ekleyebilirsiniz. ATK/ 800 DEF/ 1200.',
    summonCondition: 'Rakibin canavarı mezara gittiğinde elden Hızlı Efektle fırlar (Seviye 4 Makine).',
    effectSummary: 'Savaşta yok edilemez. Rakip canavar mezara gittiği an sahaya inip sahadaki herhangi bir rakip kartını ele/ekstra desteye fırlatır ve 800 hasar vurur.'
  },
  {
    name: 'The Sun God Leading Down into Darkness',
    apiName: '',
    category: 'Sihir',
    officialText: 'Elinizden, Destenizden veya açık sahanızdan 1 "The Winged Dragon of Ra" canavarını Mezarlığa göndererek bu kartı aktifleştirin. Bu kartın açıldığı tur Ana Aşamanızda: Destenizden 1 "Sun God" canavarını elinize ekleyebilirsiniz. Bir canavar savaşta yok edildiğinde: Kontrol edeni o canavarın orijinal ATK\'si kadar hasar alır, ardından mezarlığınızda "The Winged Dragon of Ra" varsa 1000 LP kazanırsınız. Her efektini turda 1 kez kullanabilirsiniz.',
    summonCondition: 'Desteden Ra\'yı mezara göndererek açılan Sürekli Büyü (Continuous Spell).',
    effectSummary: 'Açılışta Ra\'yı doğrudan mezara yollar, desteden Sun God canavarı aratır, savaşta yok olan canavarın sahibine ATK\'si kadar hasar verip size 1000 can doldurur.'
  },
  {
    name: 'The Immortal Sun God',
    apiName: '',
    category: 'Sihir',
    officialText: '(1): Mezarlığınızdan veya sürgünden 1 "The Winged Dragon of Ra" canavarını çağırma koşullarını yok sayarak Özel Çağırın; ardından bu efektle orijinal "The Winged Dragon of Ra" çağırdıysanız, onu Mezarlığa gönderip Ekstra Destenizden 1 "The Winged Dragon of Ra" canavarını ("Sun God of Darkness, The Winged Dragon of Ra") Özel Çağırabilirsiniz! Turun Son Aşamasında bu efektle çağrılan canavarlar mezara gider. (2): Ana Aşamanızda bu kart mezarlıktayken: Elinizden 1 "Sun God" kartı atarak bu kartı elinize geri ekleyebilirsiniz. Her efektini turda 1 kez kullanabilirsiniz.',
    summonCondition: 'Hızlı Büyü (Quick-Play Spell).',
    effectSummary: 'Mezardan veya sürgünden Ra\'yı koşulsuz çağırıp anında Ekstra Desteden Karanlık Ra Füzyonuna dönüştürür! Mezardan sonsuz geri alınabilir.'
  },
  {
    name: 'Protector of the Sun God, Egyptian God Slime',
    apiName: '',
    category: 'Tuzak',
    officialText: 'Bu kart çalıştırıldığında bir Canavar Kartı olarak Savunma Konumunda Özel Çağrılabilir (Aqua/SU/Seviye 10/ATK 0/DEF 3000; hâlâ bir Tuzak kartı sayılır). Bu kart bir İlahi Canavarın (DIVINE / Divine-Beast) Feda Çağrısı için tek başına 3 Feda yerine sayılabilir. Rakibiniz diğer canavarlarınızı saldırı veya efekt hedefi olarak seçemez. Sahadaki bir "Sun God" kartı yok edilecekse bunun yerine bu kartı Feda edebilir veya mezarlıktan oyundan çıkarabilirsiniz.',
    summonCondition: 'Sürekli Tuzak (Continuous Trap).',
    effectSummary: '3000 DEF\'lik devasa bir canlı kalkan olarak sahaya iner, tek başına Tanrılar için 3 Feda sayılır, rakibin saldırılarını üzerine çeker ve Tanrı kartlarınızı yıkımdan korur.'
  },
  {
    name: 'Reign of the Sun God',
    apiName: '',
    category: 'Tuzak',
    officialText: 'Sahada bir "The Winged Dragon of Ra" canavarı varsa: Sırasıyla şu efektleri uygulayın: • Her iki oyuncunun Mezarlığından 1\'er canavarı sahanıza Özel Çağırın. • Sahada "The Winged Dragon of Ra" varsa, rakibinizin kontrol ettiği TÜM CANAVARLARIN KONTROLÜNÜ ALIN! Bu kartı mezarlıktan sürgün edip sahanızdaki 1 "The Winged Dragon of Ra" canavarını Feda edebilirsiniz; onun sahadaki ATK\'si kadar LP kazanın. "Reign of the Sun God"ın her bir efektini turda sadece 1 kez kullanabilirsiniz.',
    summonCondition: 'Normal / Sürekli Tuzak (Sahada Ra varken açılır).',
    effectSummary: 'İki mezardan da canavar diriltir ve RAKİBİN TÜM CANAVARLARINI ÇALARAK SAHANIZA GEÇİRİR! Mezardan sürgün edildiğinde Ra\'nın gücünü yaşam puanına çevirir.'
  },
  {
    name: "The Sun God's Steelcage - Lava Golem",
    apiName: '',
    category: 'Ekstra Deste',
    officialText: '[İblis / Füzyon / Efekt] Seviye 8. ATK/ 3000 DEF/ 2500. Kontrol ettiğiniz 1 "Sun God" canavarı + Sahadaki 2 açık canavar. Füzyon Malzemesi olarak kullanılamaz. Füzyon Çağrısıyla veya yukarıdaki malzemeleri sahadan Mezarlığa göndererek doğrudan rakibinizin Ana Canavar Bölgesine Özel Çağrılmalıdır (Bu yöntemle çağırırsanız o tur başka sadece 1 Özel Çağrı yapabilirsiniz). Bu kartı kontrol eden oyuncu her Hazırlık Aşamasında (Standby Phase) 1000 hasar alır.',
    summonCondition: 'Sahanızdaki 1 Sun God canavarı + Sahadaki 2 açık canavar mezara gönderilerek rakip sahaya Özel Çağrılır.',
    effectSummary: 'Rakibin dokunulmaz patronları dâhil 2 canavarını feda edip rakibin sahasına hapseder (Hedef almaz, efektle yok etmez, dokunulmazlıkları delip geçer)! Her tur rakibe 1000 yakma hasarı verir.'
  },
  {
    name: 'The Sun God of Darkness - The Winged Dragon of Ra',
    apiName: 'Sun God of Darkness, The Winged Dragon of Ra',
    category: 'Ekstra Deste',
    officialText: '[İlahi-Canavar / Füzyon / Efekt] Seviye 10. ATK/ ? DEF/ ?.\n"The Winged Dragon of Ra" + 1 veya daha fazla "Sun God" canavarı.\nBu kart ayrıca "The Immortal Sun God" efektiyle Ekstra Desteden doğrudan Özel Çağrılabilir. Bu kartın Özel Çağrısı engellenemez. Sahanızdaki ve Mezarlığınızdaki her "Sun God" canavarı için 1000 ATK/DEF kazanır. Turda 1 kez (Hızlı Efekt): 1000 LP ödeyerek; sahadaki 1 kartı Mezarlığa gönderebilirsiniz (hedef almaz, yok etmez). Rakibiniz bir kart veya efekt çalıştırdığında: Mezarlığınızdan 1 "Sun God" kartını sürgün ederek o efekti geçersiz kılabilirsiniz. Bu kart sahadan ayrılırsa: Mezarlığınızdan çağırma koşullarını yok sayarak 1 "The Winged Dragon of Ra" veya "The Winged Dragon of Ra - Immortal Phoenix" Özel Çağırın.',
    summonCondition: '"The Immortal Sun God" büyüsüyle ya da "The Winged Dragon of Ra" + 1 veya daha fazla "Sun God" canavarı birleştirilerek Ekstra Desteden Çağrılır.',
    effectSummary: 'Mezarlıktaki her Sun God kartı başına 1000 ATK kazanan, 1000 LP ile hedef almadan rakip kartını mezara silen, mezardan Sun God sürgün ederek rakip efektlerini iptal eden ve yok edildiğinde mezardan ölümsüz Ra dirilten nihai Karanlık Güneş Tanrısı Füzyonu.'
  }
];
