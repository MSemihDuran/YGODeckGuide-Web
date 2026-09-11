// Her deste için anlaşılır, kısa ve adım adım kombo rehberleri (Sıralı kart akışı destekli)
export const DECK_COMBOS = {
  "red-eyes": [
    {
      "id": "re-1",
      "title": "Örnek Kombo 1: Tek Kartla Red-Eyes Dark Dragoon Çağrısı",
      "cardsNeeded": [
        "Red-Eyes Fusion (veya Red-Eyes Insight)"
      ],
      "sequence": [
        "Red-Eyes Fusion",
        "Red-Eyes Black Dragon",
        "Dark Magician",
        "Red-Eyes Dark Dragoon"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Elinizdeki \"Red-Eyes Fusion\" kartını doğrudan çalıştırın.",
        "Desteden malzeme olarak 1 \"Red-Eyes Black Dragon\" ve 1 \"Dark Magician\"ı doğrudan Mezarlığa gönderin.",
        "Ekstra Destenizden \"Red-Eyes Dark Dragoon\" canavarını Fusion Çağrısı ile sahaya indirin.",
        "Dragoon sahaya geldiğinde rakibin 1 canavarını yok edip o canavarın ATK'si kadar rakibe yakma hasarı verin."
      ],
      "result": "Hedef alınamaz, efektle patlamaz, rakip kartlarını yok eden ve her şeyi iptal edebilen (omni-negate) 4000 ATK'lik nihai patron sahadadır."
    },
    {
      "id": "re-2",
      "title": "Örnek Kombo 2: Red-Eyes Flare Metal Dragon ile LP Yakma Baskısı",
      "cardsNeeded": [
        "Red-Eyes Black Meteor Dragon",
        "The Black Stone of Legend (veya Seviye 7 Red-Eyes)"
      ],
      "sequence": [
        "Red-Eyes Black Meteor Dragon",
        "The Black Stone of Legend",
        "Red-Eyes Black Dragon",
        "Red-Eyes Flare Metal Dragon"
      ],
      "difficulty": "Kolay / Orta",
      "steps": [
        "Desteden Seviye 5+ Normal canavarı (Red-Eyes Black Dragon) Mezara göndererek \"Red-Eyes Black Meteor Dragon\"ı elden Özel Çağırın (Seviyesi 7 olur).",
        "\"The Black Stone of Legend\"ı Normal Çağırın ve feda ederek desteden 2. \"Red-Eyes Black Dragon\"ı Özel Çağırın.",
        "Sahadaki 2 adet Seviye 7 canavarı birleştirerek Ekstra Desteden \"Red-Eyes Flare Metal Dragon\"ı Xyz Çağrısı ile çağırın."
      ],
      "result": "Kart efektleriyle yok edilemeyen ve rakip her kart/efekt çalıştırdığında anında rakibe 500 hasar vuran kilit bir canavar sahadadır."
    },
    {
      "id": "re-3",
      "title": "Örnek Kombo 3: Black Metal Dragon ile Arama ve Diriltme",
      "cardsNeeded": [
        "Black Metal Dragon",
        "Red-Eyes Darkness Metal Dragon"
      ],
      "sequence": [
        "Black Metal Dragon",
        "Red-Eyes Darkness Metal Dragon",
        "Red-Eyes Fang with Chain"
      ],
      "difficulty": "Orta",
      "steps": [
        "\"Black Metal Dragon\"ı Normal Çağırın.",
        "Sahanızdaki Black Metal Dragon'u oyundan çıkararak (banish) elinizden \"Red-Eyes Darkness Metal Dragon\"ı Özel Çağırın.",
        "Black Metal Dragon mezara gittiği için efekti tetiklenir: Destenizden \"Red-Eyes Fang with Chain\" veya \"Red-Eyes Insight\"ı elinize ekleyin.",
        "Red-Eyes Darkness Metal Dragon'un efektiyle mezarlıktaki herhangi bir Ejderhayı sahaya geri diriltin."
      ],
      "result": "2800 ATK ejderha + mezardan diriltilen canavar + ele aranan koruyucu tuzak ile muazzam saha avantajı."
    },
    {
      "id": "re-4",
      "title": "Örnek Kombo 4: Max Metalmorph ile Fullmetal Dragon Baskını",
      "cardsNeeded": [
        "Max Metalmorph",
        "Sahada Seviye 5+ Ejderha (Örn: Red-Eyes Black Dragon)"
      ],
      "sequence": [
        "Red-Eyes Black Dragon",
        "Max Metalmorph",
        "Red-Eyes Black Fullmetal Dragon"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Max Metalmorph\" tuzağını sahaya kapalı koyun.",
        "Rakip hamle yaparken veya ana aşamada tuzağı aktifleştirin.",
        "Sahadaki Seviye 7 Red-Eyes canavarınızı feda edin; desteden doğrudan \"Red-Eyes Black Fullmetal Dragon\" çağırın ve tuzağı ona donatın.",
        "Fullmetal Dragon sahaya indiğinde rakip bir kart/efekt çalıştırırsa anında iptal edin ve rakibe canavarının ATK'si kadar hasar vurun."
      ],
      "result": "Sihir ve canavar efektlerinden etkilenmeyen, +400 ATK/DEF kazanan ve rakip hamlelerini iptal edip can yakan zırhlı ejderha."
    },
    {
      "id": "re-5",
      "title": "Örnek Kombo 5: Neo Red-Eyes Ultimate Dragon ile Çoklu Bitiriş",
      "cardsNeeded": [
        "3 \"Red-Eyes\" Canavarı (veya Red-Eyes Fusion)"
      ],
      "sequence": [
        "Red-Eyes Black Dragon",
        "Red-Eyes Fusion",
        "Neo Red-Eyes Ultimate Dragon"
      ],
      "difficulty": "İleri Seviye",
      "steps": [
        "3 adet Red-Eyes canavarını birleştirerek Ekstra Desteden \"Neo Red-Eyes Ultimate Dragon\"ı Fusion Çağırın.",
        "Savaş Aşamasına geçip saldırı ilan edin.",
        "Saldırı sonunda Ekstra Destenizden 1 Red-Eyes Fusion veya Xyz canavarını mezara göndererek arka arkaya 2 kez daha saldırın.",
        "Rakip bir Red-Eyes canavarınızı hedef alan efekt açarsa, mezardaki bu kartı oyundan çıkarıp o efekti iptal edin ve o kartı yok edin."
      ],
      "result": "Tek turda 3 kez saldırabilen ve mezardayken bile takımı koruyan 4500 ATK devasa füzyon ejderhası."
    },
    {
      "id": "re-6",
      "title": "Örnek Kombo 6: Dark Time Wizard ile Rakip Sahasını Yok Etme ve Dragoon Diriltme",
      "cardsNeeded": [
        "Dark Time Wizard",
        "Red-Eyes Baby Dragon (veya Mezarlıkta Büyücü/Ejderha)"
      ],
      "sequence": [
        "Dark Time Wizard",
        "Red-Eyes Baby Dragon",
        "Red-Eyes Black Dragon",
        "Red-Eyes Dark Dragoon"
      ],
      "difficulty": "Orta / Şans & Güç",
      "steps": [
        "\"Dark Time Wizard\"ı sahaya Normal Çağırın.",
        "Efektini aktifleştirip yazı-tura / zar atın: Başarılı sonuçta rakibin kontrol ettiği TÜM canavarları anında yok edin!",
        "Bu patlamayla birlikte mezarlığınızdaki \"Red-Eyes Black Dragon\" veya \"Red-Eyes Dark Dragoon\"ı bedelsiz Özel Çağırın.",
        "Yok edilen canavarların toplam ATK'sinin yarısı kadar rakibe doğrudan etki hasarı verin."
      ],
      "result": "Rakibin tüm sahasını sıfırlayan, rakibe ağır yakma hasarı veren ve en güçlü ejderhanızı bedelsiz sahaya döndüren efsanevi zaman büyüsü."
    },
    {
      "id": "re-7",
      "title": "Örnek Kombo 7: Graceful & Skull Dice + Red-Eyes Soul ile Sürpriz Savaş Tuzağı",
      "cardsNeeded": [
        "Red-Eyes Soul (Elde)",
        "Graceful & Skull Dice (Kapalı)"
      ],
      "sequence": [
        "Red-Eyes Soul",
        "Red-Eyes Black Dragon",
        "Graceful & Skull Dice",
        "Red-Eyes Black Dragon Shield"
      ],
      "difficulty": "Kolay / Taktiksel",
      "steps": [
        "Rakip canavar çağırıp saldırı ilan ettiğinde elinizden \"Red-Eyes Soul\" Hızlı Efektini tetikleyin: Desteden \"Red-Eyes Black Dragon\"ı doğrudan sahaya Özel Çağırın.",
        "Hasar Adımında (Damage Step) kapalı \"Graceful & Skull Dice\" kartını açarak zar atın.",
        "Rakibin saldıran canavarının ATK'sini zar sonucu x 1000 kadar düşürün, kendi Red-Eyes canavarınızın ATK'sini zar sonucu x 500 artırın.",
        "Rakip canavar kendi saldırısında ezilerek yok olur ve aradaki devasa fark doğrudan rakibin LP'sinden düşer."
      ],
      "result": "Rakibin beklemediği anda sahaya inen ejderha ve zar manipülasyonuyla rakibin saldırısını felakete dönüştüren koruma hattı."
    }
  ],
  "harpie": [
    {
      "id": "hp-1",
      "title": "Örnek Kombo 1: Channeler & Perfumer ile Cyber Slash Harpie Lady",
      "cardsNeeded": [
        "Harpie Channeler",
        "Elde 1 Harpie kartı"
      ],
      "sequence": [
        "Harpie Channeler",
        "Harpie Perfumer",
        "Elegant Egotist",
        "Cyber Slash Harpie Lady"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Harpie Channeler\"ı sahaya Normal Çağırın.",
        "Elinizden 1 Harpie kartı atarak Channeler'ın efektini çalıştırın: Desteden \"Harpie Perfumer\"ı Savunma Konumunda Özel Çağırın.",
        "Perfumer sahaya indiğinde efekti devreye girer: Destenizden \"Elegant Egotist\"i elinize ekleyin.",
        "Channeler sahadayken Tuner sayılabildiğinden Perfumer ile birleşip Seviye 8 Synchro yapın: \"Cyber Slash Harpie Lady\"!",
        "\"Elegant Egotist\" büyüsünü çalıştırıp desteden \"Harpie Lady 1\" Özel Çağırın."
      ],
      "result": "Sahada Cyber Slash Harpie Lady (büyü/tuzak açıldığında rakip canavarı ele zıplatır) + Harpie Lady 1 (+300 ATK bonusu)."
    },
    {
      "id": "hp-2",
      "title": "Örnek Kombo 2: Harpies' Hunting Ground ile Arka Sırayı Süpürme",
      "cardsNeeded": [
        "Harpies' Hunting Ground",
        "Harpie Channeler",
        "Elegant Egotist"
      ],
      "sequence": [
        "Harpies' Hunting Ground",
        "Harpie Channeler",
        "Elegant Egotist",
        "Harpie Conductor"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Harpies' Hunting Ground\" alan büyüsünü aktifleştirin.",
        "\"Harpie Channeler\"ı çağırın: Alan büyüsü tetiklenir ve rakibin 1 Sihir/Tuzak kartı yok edilir.",
        "\"Elegant Egotist\" oynayarak desteden 2. bir Harpie çağırın: Alan büyüsü tekrar tetiklenir ve rakibin 2. arka sıra kartı yok edilir.",
        "Sahadaki 2 Harpie canavarını birleştirerek Link-2 \"Harpie Conductor\" veya Seviye 4 Xyz çağırın."
      ],
      "result": "Rakibin tuzak ve büyüleri tamamen temizlenir, güvenli bir şekilde doğrudan saldırı ve oyun kontrolü sağlanır."
    },
    {
      "id": "hp-3",
      "title": "Örnek Kombo 3: Elden Harpie's Feather Storm ile Rakibi Kilitleme (Turn Skip)",
      "cardsNeeded": [
        "Sahada herhangi 1 \"Harpie\" canavarı",
        "Elde \"Harpie's Feather Storm\""
      ],
      "sequence": [
        "Harpie Lady 1",
        "Harpie's Feather Storm"
      ],
      "difficulty": "Kolay / Stratejik",
      "steps": [
        "Sahanızda herhangi bir Harpie canavarı varken \"Harpie's Feather Storm\" tuzağı sahaya kapalı konulmaya gerek kalmadan doğrudan ELDEN oynanabilir.",
        "Rakibin turunda, rakip ilk canavar efektini açtığı an elinizden Feather Storm'u çalıştırın.",
        "Tur sonuna kadar rakibin tüm canavar efektleri nerede çalıştırılırsa çalıştırılsın (saha, el, mezarlık) tamamen geçersiz kılınır."
      ],
      "result": "Rakip hiçbir kombo hamlesi yapamaz ve turunu oynamadan pas geçmek zorunda kalır."
    },
    {
      "id": "hp-4",
      "title": "Örnek Kombo 4: Harpie's Pet Phantasmal Dragon ile Dokunulmazlık & Doğrudan Saldırı",
      "cardsNeeded": [
        "3 Seviye 4 RÜZGAR Harpie canavarı (Channeler + Egotist + Oracle vb.)"
      ],
      "sequence": [
        "Harpie Channeler",
        "Harpie Perfumer",
        "Harpie Lady 1",
        "Harpie's Pet Phantasmal Dragon"
      ],
      "difficulty": "Orta",
      "steps": [
        "Channeler, Perfumer ve Elegant Egotist kombolarıyla sahaya tam 3 adet 4. Seviye Harpie canavarı dizin.",
        "3 canavarı birleştirerek Seviye 4 Xyz Çağrısı yapın: \"Harpie's Pet Phantasmal Dragon\".",
        "Phantasmal Dragon üzerinde materyal olduğu sürece rakip hiçbir Harpie canavarınızı kart efektleriyle hedef alamaz ve onlara saldıramaz."
      ],
      "result": "Tüm takımınız koruma kalkanına girer ve Phantasmal Dragon her tur doğrudan rakip LP'sine 2000 hasar vurabilir."
    },
    {
      "id": "hp-5",
      "title": "Örnek Kombo 5: Harpie Perfumer & Feather Rest ile Sınırsız Kaynak Yenileme (+3 Kart)",
      "cardsNeeded": [
        "Harpie Perfumer",
        "Harpie's Feather Rest",
        "Mezarlıkta 3 Harpie Canavarı"
      ],
      "sequence": [
        "Harpie Perfumer",
        "Harpie's Feather Rest",
        "Cyber Slash Harpie Lady"
      ],
      "difficulty": "Kolay / Avantaj",
      "steps": [
        "Sahaya \"Harpie Perfumer\" çağrıldığında destenizden \"Harpie's Feather Rest\" kartını elinize ekleyin.",
        "Sahada Seviye 5 veya üzeri bir Harpie (\"Cyber Slash Harpie Lady\") varken \"Harpie's Feather Rest\" büyüsünü çalıştırın.",
        "Mezarlığınızdan 3 Harpie kartını destenize geri karıştırın ve desteden tam 3 kart birden çekin!"
      ],
      "result": "Deste kaynakları sıfır kayıpla yenilenir, el avantajı 3 yeni kartla zirveye ulaşır."
    },
    {
      "id": "hp-6",
      "title": "Örnek Kombo 6: Alluring Mirror Split ile Yok Edilmez Harpie Ordusu",
      "cardsNeeded": [
        "Alluring Mirror Split",
        "Harpie Channeler"
      ],
      "sequence": [
        "Alluring Mirror Split",
        "Harpie Channeler",
        "Harpie Harpist",
        "Cyber Slash Harpie Lady"
      ],
      "difficulty": "Orta",
      "steps": [
        "\"Alluring Mirror Split\" sürekli büyüsünü sahaya açın.",
        "Bir Harpie canavarınız savaşta yok edildiğinde, destenizden farklı isimde bir Harpie canavarını anında sahaya Özel Çağırın.",
        "Eğer rakip bu kartı efektle yok ederse: Mezarlığınızdan herhangi bir Harpie canavarını doğrudan sahaya diriltin."
      ],
      "result": "Rakibin canavarlarınızı yok etmesini anlamsız kılan ve sahayı sürekli dolu tutan kusursuz ayna döngüsü."
    }
  ],
  "ancient-gods": [
    {
      "id": "aeg-1",
      "title": "Örnek Kombo 1: Dark Beckoning Beast ile 1 Turda 4000 ATK Sacred Beast",
      "cardsNeeded": [
        "Dark Beckoning Beast"
      ],
      "sequence": [
        "Dark Beckoning Beast",
        "Dark Summoning Beast",
        "Raviel, Lord of Phantasms"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Dark Beckoning Beast\"ı Normal Çağırın.",
        "Efektiyle destenizden \"Dark Summoning Beast\" canavarını elinize ekleyin.",
        "Dark Beckoning Beast sahadayken 1 ek Normal Çağrı hakkı verir: \"Dark Summoning Beast\"ı feda ödemeden Normal Çağırın.",
        "Dark Summoning Beast'i feda edin: Desteden çağırma koşullarını yok sayarak doğrudan \"Raviel, Lord of Phantasms\" veya \"Hamon, Lord of Striking Thunder\"ı Özel Çağırın!"
      ],
      "result": "Tek bir kartla desteden feda ödemeden anında 4000 ATK'lik devasa bir Kutsal Canavar sahaya iner."
    },
    {
      "id": "aeg-2",
      "title": "Örnek Kombo 2: Egyptian Gods' Disciple & Guardian ile Tek Hamlede Tanrı İndirme",
      "cardsNeeded": [
        "Egyptian Gods' Disciple",
        "Elde 1 Tanrı Kartı (Slifer/Obelisk/Ra)"
      ],
      "sequence": [
        "Egyptian Gods' Disciple",
        "Prayers to the Egyptian Gods",
        "Obelisk the Tormentor"
      ],
      "difficulty": "Kolay / Hızlı",
      "steps": [
        "Elinizdeki Tanrı canavarını göstererek \"Egyptian Gods' Disciple\" canavarını elden Özel Çağırın.",
        "Disciple sahaya indiğinde destenizden \"Prayers to the Egyptian Gods\" büyüsünü kapalı koyar ve bu tur açılabilir.",
        "\"Egyptian Gods' Disciple\" kurallara göre tek başına 3 Feda yerine geçer.",
        "Disciple'ı feda ederek elinizdeki Mısır Tanrısını (Obelisk the Tormentor veya Slifer the Sky Dragon) tek hamlede sahaya Normal Çağırın."
      ],
      "result": "3 ayrı canavar toplamaya gerek kalmadan tek turda nihai Mısır Tanrısı sahaya iner ve Prayers büyüsüyle rakip efektlerine karşı dokunulmaz olur."
    },
    {
      "id": "aeg-3",
      "title": "Örnek Kombo 3: Fallen Paradise ile Dokunulmazlık ve Her Tur +2 Kart Çekme",
      "cardsNeeded": [
        "Sahada Uria, Hamon veya Raviel",
        "Fallen Paradise of the Sacred Beasts"
      ],
      "sequence": [
        "Raviel, Lord of Phantasms",
        "Fallen Paradise of the Sacred Beasts"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Sahada en az bir Kutsal Canavar varken \"Fallen Paradise of the Sacred Beasts\" alan büyüsünü aktifleştirin.",
        "Alan büyüsü sahadayken rakibiniz Kutsal Canavarlarınızı kart efektleriyle hedef alamaz ve efektlerle yok edemez.",
        "Her turun Ana Aşamasında Fallen Paradise'ın efektini çalıştırarak destenizden BEDAVA 2 kart çekin."
      ],
      "result": "Yenilmez, hedef alınamayan 4000 ATK canavarlar ve her tur desteden çekilen +2 kart ile ezici el üstünlüğü."
    },
    {
      "id": "aeg-4",
      "title": "Örnek Kombo 4: Slifer the Sky Dragon - Immortal Chaos Uyanışı",
      "cardsNeeded": [
        "Slifer the Sky Dragon (Sahada)",
        "Mezarlıkta \"Slifer - Immortal Chaos\""
      ],
      "sequence": [
        "Slifer the Sky Dragon",
        "Slifer the Sky Dragon - Immortal Chaos"
      ],
      "difficulty": "İleri Seviye",
      "steps": [
        "Sahadaki \"Slifer the Sky Dragon\" herhangi bir sebeple Mezarlığa gittiğinde mezardaki Immortal Chaos'un efekti tetiklenir.",
        "Elden veya sahadan 1 Chaos canavarı feda ederek \"Slifer the Sky Dragon - Immortal Chaos\"ı mezardan Özel Çağırın (Bu çağrıya zincir başlatılamaz).",
        "Immortal Chaos çağrıldığında mezarlığı karıştırıp 2 rastgele kartı elinize çeker.",
        "Elinizdeki her kart için 2000 ATK/DEF kazanır ve rakibin açık saldırı canavarlarının ATK'sini düşürüp 0 olunca yok eder."
      ],
      "result": "Diğer tüm kart efektlerinden tamamen etkilenmeyen, tek vuruşta oyunu bitirebilecek güçte bir antik kaos ejderhası sahayı ele geçirir."
    },
    {
      "id": "aeg-5",
      "title": "Örnek Kombo 5: The True Sun God & Sun God Unification ile Ra'nın Sonsuz LP Döngüsü",
      "cardsNeeded": [
        "The True Sun God",
        "Sun God Unification",
        "The Winged Dragon of Ra"
      ],
      "sequence": [
        "The True Sun God",
        "The Winged Dragon of Ra",
        "Sun God Unification",
        "The Winged Dragon of Ra - Immortal Phoenix"
      ],
      "difficulty": "Orta / Güneş Tanrısı Gücü",
      "steps": [
        "\"The True Sun God\" sürekli büyüsünü açarak destenizden \"Sun God Unification\" veya \"The Winged Dragon of Ra\"yı elinize ekleyin.",
        "Ra sahaya indiğinde \"Sun God Unification\" tuzağını açıp LP'nizi 100 kalacak şekilde Ra'nın ATK'sine aktarın.",
        "Saldırı sonrası veya rakip Ra'yı hedef aldığında Unification'ın 2. efektini kullanın: Ra'yı mezara gönderip harcadığınız tüm LP'yi fazlasıyla geri kazanın!",
        "Ra mezara düştüğü an mezarlıktan \"The Winged Dragon of Ra - Immortal Phoenix\" anında sahaya fırlar."
      ],
      "result": "Önce devasa ATK ile vuran, ardından can puanınızı geri dolduran ve ölümsüz Anka Kuşunu sahaya süren durdurulamaz tanrısal döngü."
    },
    {
      "id": "aeg-6",
      "title": "Örnek Kombo 6: The Sun God's Steelcage - Lava Golem & Viser Des Shock ile Rakip Sahasını Kilitleme",
      "cardsNeeded": [
        "The Sun God's Steelcage - Lava Golem",
        "The Sun God's Torture Device - Viser Des Shock"
      ],
      "sequence": [
        "The Sun God's Steelcage - Lava Golem",
        "The Sun God's Torture Device - Viser Des Shock",
        "The Sun God's Destructor - Makyura"
      ],
      "difficulty": "Kolay / Baskıcı",
      "steps": [
        "Rakibin sahasındaki 2 güçlü canavarı feda ederek \"The Sun God's Steelcage - Lava Golem\"ı rakip sahaya hediye edin.",
        "Rakip her tur hazırlık aşamasında 1000 yakma hasarı alır ve kafese hapsolur.",
        "Kendi sahanıza \"The Sun God's Torture Device - Viser Des Shock\" indirerek rakibin kalan canavarlarını felç edin.",
        "\"The Sun God's Destructor - Makyura\" mezara gittiğinde elinizden sürpriz tuzakları rakip turunda doğrudan tetikleyin."
      ],
      "result": "Rakibin iki canavarını silen, kalanları donduran ve her tur rakibin canını eriten antik güneş hapishanesi."
    },
    {
      "id": "aeg-7",
      "title": "Örnek Kombo 7: Opening of the Spirit Gates ile 10.000 ATK Armityle - Phantom of Fury",
      "cardsNeeded": [
        "Opening of the Spirit Gates",
        "3 Kutsal Canavar (Uria, Hamon, Raviel)"
      ],
      "sequence": [
        "Opening of the Spirit Gates",
        "Uria, Lord of Searing Flames",
        "Hamon, Lord of Striking Thunder",
        "Raviel, Lord of Phantasms",
        "Armityle the Chaos Phantasm - Phantom of Fury"
      ],
      "difficulty": "İleri Seviye / Yıkıcı Patron",
      "steps": [
        "\"Opening of the Spirit Gates\" sürekli büyüsünü açarak Kutsal Canavarları ve malzemeleri mezardan her tur bedelsiz diriltin.",
        "Sahadaki 3 Kutsal Canavarı (\"Uria\", \"Hamon\", \"Raviel\") oyundan çıkararak \"Armityle the Chaos Phantasm - Phantom of Fury\"yi Füzyon Çağrısıyla çağırın.",
        "Phantom of Fury'nin efektini tetikleyin: Kendisini banish ederek rakibin sahasındaki TÜM KARTLARI haritadan silin!",
        "Ardından Ekstra Destenizden tam 10.000 ATK gücündeki orijinal \"Armityle the Chaos Phantasm\"ı doğrudan sahaya indirin ve boş sahaya saldırın!"
      ],
      "result": "Rakibin tüm sahasını sıfırlayan ve 10.000 ATK ile tek bir vuruşta düelloyu kazandıran nihai kaos gücü."
    }
  ],
  "blue-eyes": [
    {
      "id": "be-1",
      "title": "Örnek Kombo 1: Sage with Eyes of Blue ile Hızlı Mavi Gözlü",
      "cardsNeeded": [
        "Sage with Eyes of Blue",
        "Herhangi bir Efekt Canavarı"
      ],
      "sequence": [
        "Sage with Eyes of Blue",
        "Blue-Eyes White Dragon",
        "Monster Reborn"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Sage with Eyes of Blue\"ı elden mezara atarak sahanızdaki 1 efekt canavarını hedef alın.",
        "O canavarı Mezarlığa gönderin ve destenizden doğrudan \"Blue-Eyes White Dragon\" Özel Çağırın.",
        "Daha sonra mezarlıktaki ejderhayı \"Monster Reborn\" veya diğer kartlarla tekrar sahaya getirebilirsiniz."
      ],
      "result": "Tek hamlede 3000 ATK'lik efsanevi beyaz ejderha sahaya kurulur."
    },
    {
      "id": "be-2",
      "title": "Örnek Kombo 2: Blue-Eyes Alternative White Dragon ile Savaşsız Yok Etme",
      "cardsNeeded": [
        "Blue-Eyes Alternative White Dragon",
        "Elde 1 \"Blue-Eyes White Dragon\""
      ],
      "sequence": [
        "Blue-Eyes White Dragon",
        "Blue-Eyes Alternative White Dragon"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Elinizdeki orijinal \"Blue-Eyes White Dragon\"ı rakibe gösterin.",
        "\"Blue-Eyes Alternative White Dragon\"ı elinizden bedelsiz olarak Özel Çağırın.",
        "Efektini çalıştırın: Rakibin kontrol ettiği 1 canavarı hedef alıp anında yok edin."
      ],
      "result": "Savaş ilan etmeden rakibin en güçlü canavarı temizlenir ve sahada 3000 ATK'lik bir ejderha kalır."
    },
    {
      "id": "be-3",
      "title": "Örnek Kombo 3: Blue-Eyes Spirit Dragon ile Mezarlık Kilidi & Azure-Eyes Çağrısı",
      "cardsNeeded": [
        "1 Seviye 1 IŞIK Tuner (Sage/White Stone)",
        "1 Seviye 8 \"Blue-Eyes\" canavarı"
      ],
      "sequence": [
        "Sage with Eyes of Blue",
        "Blue-Eyes White Dragon",
        "Blue-Eyes Spirit Dragon",
        "Azure-Eyes Silver Dragon"
      ],
      "difficulty": "Orta",
      "steps": [
        "Sahadaki Seviye 1 Tuner ve Seviye 8 Blue-Eyes canavarını birleştirerek Seviye 9 Synchro Çağrısı yapın: \"Blue-Eyes Spirit Dragon\"!",
        "Spirit Dragon sahadayken: Rakip aynı anda 2 veya daha fazla canavar Özel Çağıramaz ve mezarlık efektlerini iptal eder.",
        "Rakip bir tahta silme kartı açtığında: Spirit Dragon'u feda edin ve Ekstra Desteden anında \"Azure-Eyes Silver Dragon\" çağırın.",
        "Azure-Eyes sahaya indiğinde ejderhalarınız bir sonraki turun sonuna kadar hedef alınamaz ve kart efektleriyle yok edilemez."
      ],
      "result": "Rakibin mezar hamlelerini ve çoklu çağırmalarını kilitler, ejderhalarınıza tam dokunulmazlık sağlar."
    },
    {
      "id": "be-4",
      "title": "Örnek Kombo 4: Neo Blue-Eyes Ultimate Dragon ile 4500 ATK Üçlü Saldırı (OTK)",
      "cardsNeeded": [
        "Polymerization (veya Dragon's Mirror)",
        "3 \"Blue-Eyes White Dragon\""
      ],
      "sequence": [
        "Blue-Eyes White Dragon",
        "Polymerization",
        "Neo Blue-Eyes Ultimate Dragon"
      ],
      "difficulty": "İleri Seviye",
      "steps": [
        "Elden, sahadan veya mezardan (Dragon's Mirror ile) 3 adet \"Blue-Eyes White Dragon\"ı birleştirin.",
        "Ekstra Destenizden \"Neo Blue-Eyes Ultimate Dragon\"ı Füzyon Çağrısıyla sahaya indirin.",
        "Saldırı ilan edin; her başarılı saldırıdan sonra Ekstra Destenizden 1 \"Blue-Eyes\" Füzyon canavarını Mezarlığa gönderin.",
        "Neo Blue-Eyes bu sayede tek bir Savaş Aşamasında tam 3 kez arka arkaya saldırabilir (4500 x 3 = 13500 Hasar!)."
      ],
      "result": "Tek bir turda rakibin sahasındaki tüm savunmaları ezip tek hamlede oyunu bitiren nihai zafer saldırısı (OTK)."
    },
    {
      "id": "be-5",
      "title": "Örnek Kombo 5: Blue-Eyes Chained Dragon & Ultimate Spirit Dragon ile Ekstra Deste İstilası",
      "cardsNeeded": [
        "Blue-Eyes Chained Dragon",
        "Blue-Eyes White Dragon"
      ],
      "sequence": [
        "Blue-Eyes White Dragon",
        "Blue-Eyes Chained Dragon",
        "Blue-Eyes Ultimate Spirit Dragon",
        "The Ultimate Creature of Destruction"
      ],
      "difficulty": "İleri Seviye / Destansı",
      "steps": [
        "\"Blue-Eyes Chained Dragon\" zincirleme efektiyle rakibin hamlelerine anında karşılık verip sahaya Özel Çağrılır.",
        "Sahadaki mavi gözlü canavarlar birleştirilerek \"Blue-Eyes Ultimate Spirit Dragon\" sahaya indirilir.",
        "Spirit Dragon mezarlık efektlerini dondururken \"The Ultimate Creature of Destruction\" ile desteklenerek tüm kart efektlerine karşı mutlak dokunulmaz kılınır."
      ],
      "result": "4500 ATK gücünde, yok edilemeyen, rakip mezarlığını tamamen felç eden ve sahadaki tüm tehditleri ezen ejderha hakimiyeti."
    },
    {
      "id": "be-6",
      "title": "Örnek Kombo 6: Dictator of D. & True Light ile Sonsuz Ejderha Dirilişi",
      "cardsNeeded": [
        "Dictator of D.",
        "True Light"
      ],
      "sequence": [
        "Dictator of D.",
        "Blue-Eyes White Dragon",
        "True Light",
        "Blue-Eyes Jet Dragon"
      ],
      "difficulty": "Kolay / Sürekli Saha Baskısı",
      "steps": [
        "\"Dictator of D.\" canavarını elden bir \"Blue-Eyes White Dragon\" mezara göndererek bedelsiz sahaya Özel Çağırın.",
        "\"True Light\" sürekli tuzağını açarak mezara giden Blue-Eyes White Dragon'u veya \"Blue-Eyes Jet Dragon\"ı anında sahaya geri diriltin.",
        "Her tur True Light ile mezardan bedava bir Blue-Eyes çağırın ve Dictator of D. ile rakibin hangi canavara saldıracağını siz seçin."
      ],
      "result": "Mezarlıktan her tur geri dönen 3000 ATK ejderhalar ve rakibin saldırılarını zorla yönlendiren sarsılmaz bir kale."
    }
  ],
  "magician-god": [
    {
      "id": "mg-1",
      "title": "Örnek Kombo 1: Illusion of Chaos & Magician's Rod ile Arama Motoru",
      "cardsNeeded": [
        "Illusion of Chaos (Elde)"
      ],
      "sequence": [
        "Illusion of Chaos",
        "Magician's Rod",
        "Dark Magical Circle"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Elinizdeki \"Illusion of Chaos\" kartını gösterin.",
        "Destenizden \"Magician's Rod\" canavarını elinize ekleyin, elinizden herhangi 1 kartı destenin en üstüne koyun.",
        "\"Magician's Rod\"ı Normal Çağırın; sahaya geldiğinde efektini çalıştırın.",
        "Destenizden \"Secrets of Dark Magic\", \"The Eye of Timaeus\" veya \"Dark Magical Circle\" kartını doğrudan elinize ekleyin."
      ],
      "result": "Tek bir kartla desteyi tarayarak elinizi istediğiniz büyü ve kombo parçalarıyla doldurun."
    },
    {
      "id": "mg-2",
      "title": "Örnek Kombo 2: The Eye of Timaeus ile Tek Kartla Füzyon Patronu",
      "cardsNeeded": [
        "Dark Magician (Sahada)",
        "The Eye of Timaeus (Elde)"
      ],
      "sequence": [
        "Dark Magician",
        "The Eye of Timaeus",
        "Red-Eyes Dark Dragoon"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Sahadaki \"Dark Magician\"ı hedef alarak \"The Eye of Timaeus\" büyüsünü çalıştırın.",
        "Başka hiçbir malzeme gerekmeden doğrudan \"Red-Eyes Dark Dragoon\" veya \"Dark Magician the Dragon Knight\"ı Ekstra Desteden Füzyon Çağırın.",
        "Eğer Dragon Knight çağırdıysanız, sahadaki tüm Sürekli Sihir ve Tuzaklarınız rakip tarafından hedef alınamaz ve yok edilemez."
      ],
      "result": "Tek bir büyüyle ekstra malzeme harcamadan en güçlü füzyon büyücüsü sahaya dikilir."
    },
    {
      "id": "mg-3",
      "title": "Örnek Kombo 3: Millennium Revelation ile The Winged Dragon of Ra Diriltme",
      "cardsNeeded": [
        "Millennium Revelation",
        "Elde 1 İlahi-Canavar (Ra)",
        "Monster Reborn"
      ],
      "sequence": [
        "The Winged Dragon of Ra",
        "Millennium Revelation",
        "Monster Reborn"
      ],
      "difficulty": "Orta",
      "steps": [
        "\"Millennium Revelation\" sürekli büyüsünü açın ve elinizden \"The Winged Dragon of Ra\"yı mezara gönderin.",
        "Efektiyle mezarlığınızdan veya destenizden \"Monster Reborn\" kartını elinize ekleyin.",
        "Sahadaki \"Millennium Revelation\"ı mezara gönderin: Bu tur Monster Reborn ile Ra'yı çağırma hakkı kazanırsınız.",
        "\"Monster Reborn\" çalıştırarak mezardaki \"The Winged Dragon of Ra\"yı kuralları yok sayarak sahaya diriltin!"
      ],
      "result": "Normalde mezardan çağrılamayan güneş tanrısı Ra, doğrudan sahaya iner ve 1000 LP ile rakip canavarları yok edebilir."
    },
    {
      "id": "mg-4",
      "title": "Örnek Kombo 4: Sphere Mode ile Rakibin 3 Canavarını Yutma ve 4000 ATK Ra",
      "cardsNeeded": [
        "The Winged Dragon of Ra - Sphere Mode"
      ],
      "sequence": [
        "The Winged Dragon of Ra - Sphere Mode",
        "The Winged Dragon of Ra"
      ],
      "difficulty": "Kolay / Cezalandırıcı",
      "steps": [
        "Rakibin sahasında kurduğu 3 tehlikeli patron canavarı feda ederek rakip sahaya \"Sphere Mode\"u Normal Çağırın.",
        "Rakibin tüm sahası ve savunması feda edilerek anında silinir.",
        "Kendi sonraki turunuzda: Sphere Mode'u feda ederek destenizden orijinal \"The Winged Dragon of Ra\"yı 4000 ATK/DEF ile Özel Çağırın!"
      ],
      "result": "Rakibin emek verdiği tahtayı tek hamlede sıfırlayıp kendi tarafınıza 4000 ATK gücünde Mısır Tanrısını kazandırır."
    },
    {
      "id": "mg-5",
      "title": "Örnek Kombo 5: Millennium Ankh ile Doğrudan The Legendary Exodia Incarnate",
      "cardsNeeded": [
        "Millennium Ankh",
        "Deste/Elde 5 Kapatılmış Parça"
      ],
      "sequence": [
        "Millennium Ankh",
        "The Legendary Exodia Incarnate"
      ],
      "difficulty": "Kolay / Efsanevi",
      "steps": [
        "\"Millennium Ankh\" büyü kartını çalıştırın.",
        "Elinizden, destenizden veya mezarlığınızdan 5 farklı Exodia parçasını gösterin.",
        "Ekstra Destenizden \"The Legendary Exodia Incarnate\" canavarını doğrudan sahaya indirin.",
        "Exodia diğer kartların efektlerinden tamamen etkilenmez ve her tur sonu mezardan parça ekleyerek ATK kazanır."
      ],
      "result": "Elde 5 parça beklemek yerine destedeki parçalarla anında sahaya inen dokunulmaz ve devasa bir Exodia."
    },
    {
      "id": "mg-6",
      "title": "Örnek Kombo 6: Master of Magicians & Magician of Dark Arkanes ile Çift Büyücü Hakimiyeti",
      "cardsNeeded": [
        "Dark Magician",
        "Master of Magicians",
        "Magician of Dark Arkanes"
      ],
      "sequence": [
        "Dark Magician",
        "Master of Magicians",
        "Magician of Dark Arkanes",
        "Magicalized Fusion"
      ],
      "difficulty": "Orta / Büyücü Gücü",
      "steps": [
        "Sahaya \"Master of Magicians\" çağrıldığında mezarlığınızdan istenen Büyü kartı ele geri alınır.",
        "\"Magician of Dark Arkanes\" devreye sokularak rakibin sahadaki ve mezarlıktaki büyü/tuzakları mühürlenir.",
        "İki kudretli büyücü birleştirilerek \"Magicalized Fusion\" ile Ekstra Desteden en güçlü Kara Büyücü füzyon patronu sahaya iner."
      ],
      "result": "Rakibin büyü/tuzak hamlelerini kitleyerek destenizin en yıkıcı büyücü patronlarını sahaya indiren antik büyü kontrolü."
    },
    {
      "id": "mg-7",
      "title": "Örnek Kombo 7: Soul Servant & Dark Magical Circle ile Kart Sürgünü ve Garanti Çekiş",
      "cardsNeeded": [
        "Soul Servant",
        "Dark Magical Circle"
      ],
      "sequence": [
        "Soul Servant",
        "Magician's Souls",
        "Dark Magical Circle",
        "Dark Magician"
      ],
      "difficulty": "Kolay / Kontrol",
      "steps": [
        "\"Soul Servant\" büyü kartını çalıştırarak destenizden istediğiniz bir Dark Magician veya Tanrı kartını destenin en tepesine koyun.",
        "\"Magician's Souls\" ile desteden Dark Magician'ı mezara yollayıp sahaya Özel Çağırın.",
        "\"Dark Magical Circle\" sahadayken Dark Magician indiği an: Rakibin sahasındaki herhangi 1 kartı koşulsuz oyundan çıkarın (banish)!",
        "Mezardaki Soul Servant'ı banish ederek sahadaki farklı isimli büyücüleriniz kadar (2-3 kart) doğrudan kart çekin."
      ],
      "result": "Rakibin en kilit kartını hedefsiz oyundan silen ve elinizi anında 2-3 yeni kartla dolduran mükemmel döngü."
    }
  ],
  "toon": [
    {
      "id": "tn-1",
      "title": "Örnek Kombo 1: Toon Bookmark & Table of Contents ile Kusursuz Arama",
      "cardsNeeded": [
        "Toon Table of Contents (veya Toon Bookmark)"
      ],
      "sequence": [
        "Toon Table of Contents",
        "Toon Bookmark",
        "Toon Kingdom"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Toon Table of Contents\" kartını çalıştırarak 2. Table of Contents'i, ardından 3.sünü desteden çekin (deste 3 kart incelir).",
        "Son kopyayla desteden \"Toon Bookmark\"ı elinize ekleyin.",
        "\"Toon Bookmark\" çalıştırarak destenizden \"Toon Kingdom\" saha büyüsünü elinize alın.",
        "\"Toon Kingdom\"ı sahaya açın (destenin en üstünden 3 kart kapalı sürgün edilir)."
      ],
      "result": "Toon canavarlarınızı hedef alınmaktan ve yok edilmekten koruyan aşılmaz kale Toon Kingdom kurulur ve mezarlıkta koruyucu Bookmark hazır bekler."
    },
    {
      "id": "tn-2",
      "title": "Örnek Kombo 2: Toon Page-Flip ile Desteden Sürpriz Çağrı",
      "cardsNeeded": [
        "Toon Kingdom (Sahada)",
        "Toon Page-Flip (Elde)"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon Page-Flip",
        "Toon Black Luster Soldier"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Sahada Toon Kingdom açıkken Hızlı Büyü olan \"Toon Page-Flip\"i çalıştırın.",
        "Destenizden 3 güçlü Toon gösterin (Örn: Toon Black Luster Soldier, Red-Eyes Toon Dragon, Blue-Eyes Toon Dragon).",
        "Rakip rastgele 1 tanesini seçer; seçilen dev canavar çağırma koşulları yok sayılarak sahaya Özel Çağrılır.",
        "Çağrılan canavar Toon Kingdom koruması altına girer."
      ],
      "result": "Feda ödemeden tek bir hızlı büyüyle 3000 ATK'lik yıkıcı bir Toon canavarı sahaya kurulur."
    },
    {
      "id": "tn-3",
      "title": "Örnek Kombo 3: Comic Hand ile Rakibin Boss Canavarını Çalma",
      "cardsNeeded": [
        "Toon Kingdom (Sahada)",
        "Comic Hand (Elde)"
      ],
      "sequence": [
        "Toon Kingdom",
        "Comic Hand"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Rakibin sahasındaki en güçlü ve en yüksek ATK'li canavara \"Comic Hand\" ekipman büyüsünü donatın.",
        "O canavarın kontrolünü kalıcı olarak kendi sahanıza geçirin.",
        "Canavar artık bir Toon sayılır; Toon Kingdom sayesinde hedef alınamaz ve savaşta yok edilemez.",
        "Rakibin sahasında Toon yoksa bu çaldığınız canavarla doğrudan rakibin can puanına saldırın!"
      ],
      "result": "Rakibin en büyük kozunu çalarak kendi silahınız yaparsınız ve doğrudan hasar vurursunuz."
    },
    {
      "id": "tn-4",
      "title": "Örnek Kombo 4: Toon Terror & Briefcase ile Çifte Savunma Hattı",
      "cardsNeeded": [
        "Sahada 1 Toon Canavarı",
        "Toon Terror (veya Toon Briefcase)"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon Briefcase",
        "Toon Terror"
      ],
      "difficulty": "Kolay / Kontrol",
      "steps": [
        "\"Toon Terror\" ve \"Toon Briefcase\" tuzaklarını sahaya kapalı koyun.",
        "Rakip bir canavar çağırdığı an \"Toon Briefcase\" açın: O canavar mezara bile gitmeden sahibinin destesine geri karıştırılır.",
        "Rakip sahanızı temizlemek için büyü/tuzak veya efekt açtığında \"Toon Terror\" Karşı Tuzağını açın.",
        "Rakibin efektini anında geçersiz kılıp kartını patlatın."
      ],
      "result": "Rakibin hem canavar çağırması hem de kart efektleri tamamen felç edilir."
    },
    {
      "id": "tn-5",
      "title": "Örnek Kombo 5: Shadow Toon & Toon Cannon Soldier ile Doğrudan Can Puanı Eritme",
      "cardsNeeded": [
        "Shadow Toon",
        "Toon Cannon Soldier"
      ],
      "sequence": [
        "Toon World",
        "Shadow Toon",
        "Toon Cannon Soldier"
      ],
      "difficulty": "Kolay / Yakma Hasarı",
      "steps": [
        "Rakibin sahasında yüksek ATK'li bir canavar varken \"Shadow Toon\" büyü kartını çalıştırın.",
        "O canavarın orijinal ATK'si kadar rakibin can puanına anında doğrudan etki hasarı vurun.",
        "Sahadaki diğer Toon canavarlarınızı \"Toon Cannon Soldier\" ile feda ederek her biri için rakibe 500 hasar daha indirin."
      ],
      "result": "Savaş ilan etmeden rakibin can puanını sıfırlayan doğrudan hasar taktiği."
    },
    {
      "id": "tn-6",
      "title": "Örnek Kombo 6: Toon Mask ile Rakip Turunda Sürpriz Toon İndirme",
      "cardsNeeded": [
        "Toon Mask (Kapalı)",
        "Sahada Toon World / Kingdom"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon Mask",
        "Toon Dark Magician"
      ],
      "difficulty": "Kolay / Sürpriz",
      "steps": [
        "\"Toon Mask\" tuzağını sahaya kapalı yerleştirin.",
        "Rakip turunda rakip bir canavar çağırdığında tuzağı çalıştırın: O canavarın Seviyesine eşit veya daha düşük bir Toon canavarını elden veya desteden doğrudan Özel Çağırın!",
        "\"Toon Dark Magician\" çağırıp rakip turunda bile elden Toon kartları aramaya başlayın."
      ],
      "result": "Rakip sırasındayken sahaya bedava devasa bir Toon indirip savunma ve kontra atağı başlatır."
    }
  ],
  "pendulum": [
    {
      "id": "pen-1",
      "title": "Örnek Kombo 1: Pendulum Call & Harmonizing Magician ile Seri Çağrı",
      "cardsNeeded": [
        "Pendulum Call",
        "Elde 1 kart"
      ],
      "sequence": [
        "Pendulum Call",
        "Harmonizing Magician",
        "Timebreaker Magician"
      ],
      "difficulty": "Kolay / Orta",
      "steps": [
        "Elden 1 kart atarak \"Pendulum Call\" büyüsünü çalıştırın: Destenizden ölçekleri 1 ve 8 olan 2 Pendulum Büyücüsü arayın (Örn: Black Fang ve Harmonizing Magician).",
        "Pendulum ölçeklerinizi (1 ve 8) sol ve sağ bölgelere yerleştirin.",
        "Seviye 2 ile 7 arasındaki tüm canavarlarınızı tek seferde Pendulum Çağrısıyla sahaya indirin!",
        "Harmonizing Magician sahaya indiğinde desteden ek olarak 1 \"Magician\" canavarını Özel Çağırır."
      ],
      "result": "Tek turda el ve Ekstra Desteden 3-4 canavar aynı anda sahaya yayılır ve Synchro/Xyz zeminini hazırlar."
    },
    {
      "id": "pen-2",
      "title": "Örnek Kombo 2: Timestar Magician ile Arama ve Pendulum Kalkanı",
      "cardsNeeded": [
        "2 Seviye 4 Pendulum Canavarı"
      ],
      "sequence": [
        "Harmonizing Magician",
        "Timestar Magician",
        "Astrograph Sorcerer"
      ],
      "difficulty": "Orta",
      "steps": [
        "Sahadaki iki adet Seviye 4 Pendulum canavarını birleştirerek Seviye 4 Xyz \"Timestar Magician\"ı çağırın.",
        "1 materyal ayırarak Timestar'ın efektini çalıştırın: Destenizden \"Astrograph Sorcerer\"ı elinize ekleyin.",
        "Sahadaki herhangi bir kartınız yok edilirse, Timestar malzemenin yerine desteden 1 Büyücü mezara yollayarak kartlarınızı korur."
      ],
      "result": "Astrograph Sorcerer gibi kilit kartları ele getirir ve ölçeklerinizin patlamasını engeller."
    },
    {
      "id": "pen-3",
      "title": "Örnek Kombo 3: Astrograph Sorcerer ile Supreme King Z-ARC İndirme",
      "cardsNeeded": [
        "Astrograph Sorcerer",
        "Mezarlık/Sahada 4 Farklı Boyut Ejderhası (Fusion, Synchro, Xyz, Pendulum)"
      ],
      "sequence": [
        "Astrograph Sorcerer",
        "Odd-Eyes Pendulum Dragon",
        "Supreme King Z-ARC"
      ],
      "difficulty": "İleri Seviye",
      "steps": [
        "\"Astrograph Sorcerer\"ın özel yeteneğini çalıştırın.",
        "Elinizden, sahanızdan ve/veya Mezarlığınızdan 4 Ejderhayı (Pendulum Dragon, Xyz Dragon, Synchro Dragon, Fusion Dragon) oyundan çıkarın.",
        "Ekstra Destenizden nihai patron \"Supreme King Z-ARC\"ı Özel Çağırın!",
        "Z-ARC sahaya indiği saniye: Rakibin kontrol ettiği TÜM kartları havaya uçurun!"
      ],
      "result": "4000 ATK/DEF, hedef alınamaz, kart efektiyle yok edilemez ve sahaya iner inmez rakibin tüm sahasını sıfırlayan nihai tanrı ejderha."
    },
    {
      "id": "pen-4",
      "title": "Örnek Kombo 4: Supreme King Dragon Starving Venom ile Efekt Çalma",
      "cardsNeeded": [
        "2 KARANLIK Pendulum Canavarı"
      ],
      "sequence": [
        "Harmonizing Magician",
        "Supreme King Dragon Starving Venom"
      ],
      "difficulty": "Orta",
      "steps": [
        "Sahadaki 2 KARANLIK Pendulum canavarını feda ederek Polimerizasyon olmadan Ekstra Desteden \"Supreme King Dragon Starving Venom\"ı çağırın.",
        "Mezarlıktaki veya sahadaki herhangi bir güçlü canavarı hedef alın.",
        "O canavarın adını ve tüm efektlerini tur sonuna kadar Starving Venom'a kopyalayın.",
        "Tüm canavarlarınıza savunma delen (piercing) savaş hasarı yeteneği kazandırın."
      ],
      "result": "Rakibin veya kendi en güçlü mezarlık efektini bedava kopyalayıp rakibin savunmasını delerek bitirici vuruş yapar."
    },
    {
      "id": "pen-5",
      "title": "Örnek Kombo 5: Supreme King Dragon Darkwurm & Gate Zero ile Ölümcül Sarkaç Kurulumu",
      "cardsNeeded": [
        "Dragon Shrine",
        "Supreme King Dragon Darkwurm"
      ],
      "sequence": [
        "Dragon Shrine",
        "Supreme King Dragon Darkwurm",
        "Supreme King Gate Zero",
        "Supreme King Dragon Clear Wing"
      ],
      "difficulty": "Kolay / Hızlı",
      "steps": [
        "\"Dragon Shrine\" ile desteden \"Supreme King Dragon Darkwurm\" canavarını doğrudan mezara gönderin.",
        "Sahada canavarınız yokken Darkwurm'un mezarlık efektini çalıştırıp sahaya Özel Çağırın.",
        "Darkwurm sahaya indiğinde destenizden ölçeği 0 olan \"Supreme King Gate Zero\"yu elinize ekleyin.",
        "Ölçek 0 ile Seviye 1-9 arası canavarları tek hamlede Pendulum Çağrısıyla sahaya yayın ve \"Supreme King Dragon Clear Wing\" ile rakip canavarlarını patlatın."
      ],
      "result": "Sıfır kart kaybıyla kurulan 0-8 Pendulum ölçeği ve tüm rakip canavarlarını yok eden Synchro ejderha baskısı."
    },
    {
      "id": "pen-6",
      "title": "Örnek Kombo 6: Supreme King Gate Infinity ile Hasar Emme ve Yenilmez Ölçek",
      "cardsNeeded": [
        "Supreme King Gate Infinity",
        "Supreme King Gate Zero"
      ],
      "sequence": [
        "Supreme King Gate Zero",
        "Supreme King Gate Infinity",
        "Astrograph Sorcerer",
        "Supreme King Z-ARC"
      ],
      "difficulty": "İleri Seviye",
      "steps": [
        "Ölçek 0 \"Supreme King Gate Zero\" ve Ölçek 13 \"Supreme King Gate Infinity\"yi sarkaç bölgelerine kurun.",
        "Gate Infinity sahadayken aldığınız tüm etki hasarları can puanınıza eklenir (hasar yerine LP kazanırsınız).",
        "Her tur sahadaki canavarlarınızın seviyesine bakılmaksızın tüm desteyi sahaya boşaltıp Z-ARC ile oyunu mühürleyin."
      ],
      "result": "Sizi hasara karşı bağışık kılan ve her tur LP kazandıran, aşılamaz 0-13 sarkaç koridoru."
    }
  ],
  "toon-gods": [
    {
      "id": "tg-1",
      "title": "Örnek Kombo 1: Toon God Collision ile Koşulsuz Toon Slifer / Obelisk İndirme",
      "cardsNeeded": [
        "Toon God Collision (Elde)"
      ],
      "sequence": [
        "Toon God Collision",
        "Toon Slifer the Sky Dragon",
        "Toon Terror"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Elinizdeki \"Toon God Collision\" kartını doğrudan etkinleştirin.",
        "Destenizden orijinal adı \"Toon Slifer the Sky Dragon\" veya \"Toon Obelisk The Tormentor\" olan Tanrı kartını seçin.",
        "Hiçbir feda ödemeden ve çağırma koşulunu yok sayarak o Tanrıyı açık Saldırı Konumunda sahaya Özel Çağırın ve kartı ona donatın!",
        "Donatılan tanrı savaşta yok edilemez. İstenirse sonraki aşamada Collision mezara gönderilerek desteden \"Toon Terror\" tuzağı ele alınabilir."
      ],
      "result": "Tek bir kartla desteden feda ödemeden 4000 ATK'lik yok edilemez Toon Tanrısı sahaya iner ve doğrudan rakibe vurabilir."
    },
    {
      "id": "tg-2",
      "title": "Örnek Kombo 2: Funny Dark Rabbit & Comic Cat ile Rakip Canavarı Feda Ederek Tanrı Çağırma",
      "cardsNeeded": [
        "Funny Dark Rabbit",
        "Comic Cat",
        "Toon Kingdom (Sahada)"
      ],
      "sequence": [
        "Funny Dark Rabbit",
        "Comic Cat",
        "The Toon Winged Dragon of Ra"
      ],
      "difficulty": "Orta",
      "steps": [
        "\"Funny Dark Rabbit\"ı Normal Çağırın; efektiyle ek bir Normal Çağrı hakkı kazanın ve desteden Toon Kingdom'ı sahaya açın.",
        "Ek hakkınızla \"Comic Cat\"i sahaya Normal Çağırın.",
        "Comic Cat'in Hızlı Efektini çalıştırın: Sahada Toon World/Kingdom varken RAKİBİN kontrolündeki 1 canavarı Feda edin!",
        "Desteden veya elinizden \"The Toon Winged Dragon of Ra\" veya \"Toon Obelisk The Tormentor\"ı çağrı koşullarını yok sayarak Özel Çağırın."
      ],
      "result": "Rakibin en tehlikeli canavarı feda edilip yok edilirken kendi tarafınıza efsanevi bir Toon Mısır Tanrısı bedelsiz katılır."
    },
    {
      "id": "tg-3",
      "title": "Örnek Kombo 3: Toon World Fusion ile Desteden Blue-Eyes Ultimate Toon Dragon",
      "cardsNeeded": [
        "Toon World Fusion",
        "Toon World veya Toon Kingdom (Sahada)"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon World Fusion",
        "Blue-Eyes Toon Dragon",
        "Blue-Eyes Ultimate Toon Dragon"
      ],
      "difficulty": "Kolay / Güçlü",
      "steps": [
        "Sahada \"Toon World\" veya \"Toon Kingdom\" açıkken \"Toon World Fusion\" büyüsünü çalıştırın.",
        "Sahada Toon World olduğu için malzemeleri sahadan değil DOĞRUDAN DESTENİZDEN gönderin: 1 \"Blue-Eyes Toon Dragon\" ve 2 Toon canavarı.",
        "Ekstra Destenizden devasa 4500 ATK'lik \"Blue-Eyes Ultimate Toon Dragon\"ı Füzyon Çağrısı ile sahaya indirin.",
        "Daha sonra mezarlıktaki \"Toon World Fusion\"ı sürgün ederek mezardaki canavarlarla 2. bir füzyon olan \"Toon Bickuribox\"ı çağırın."
      ],
      "result": "Sıfır el kartı kaybıyla desteden malzeme harcayarak 4500 ATK doğrudan saldırabilen füzyon ejderhası ve ekstra füzyon canavarı sahada yerini alır."
    },
    {
      "id": "tg-4",
      "title": "Örnek Kombo 4: Dark-Eyes Illusionist & Mind Scan ile Rakibin Elini Açıp Toon Terror Kilidi",
      "cardsNeeded": [
        "Dark-Eyes Illusionist Faceless Mage",
        "Toon Terror (veya Evil Box)"
      ],
      "sequence": [
        "Dark-Eyes Illusionist Faceless Mage",
        "Mind Scan",
        "Toon Terror"
      ],
      "difficulty": "Kolay / Stratejik",
      "steps": [
        "Elinizdeki \"Dark-Eyes Illusionist Faceless Mage\"i mezara atın.",
        "Efektini kullanarak destenizden \"Mind Scan\" sürekli tuzağını sahanıza açık olarak koyun.",
        "Artık rakibin elindeki tüm kartları ve sahasındaki tüm kapalı kartları her an görebilirsiniz.",
        "Elinizdeki veya \"Evil Box\" ile çektiğiniz \"Toon Terror\"ı sahaya kurun.",
        "Rakip ne oynarsa oynasın önceden görüp en kritik hamlesini Toon Terror veya Mind Scan ile iptal edin."
      ],
      "result": "Rakibin gizli kartları tamamen açığa çıkar ve her hamlesi önceden engellenerek kusursuz kontrol kurulur."
    },
    {
      "id": "tg-5",
      "title": "Örnek Kombo 5: Toon Rollback & The Toon Winged Dragon of Ra ile Tek Turda OTK",
      "cardsNeeded": [
        "The Toon Winged Dragon of Ra (Sahada)",
        "Toon Rollback (Elde)"
      ],
      "sequence": [
        "The Toon Winged Dragon of Ra",
        "Toon Rollback"
      ],
      "difficulty": "İleri Seviye / Tek Vuruş",
      "steps": [
        "Toon Ra sahaya geldiğinde LP'nizi 100 kalacak şekilde ödeyin (Örn: 7900 LP ödeyerek Ra'nın ATK'sini 7900 yapın).",
        "Elinizdeki \"Toon Rollback\" büyü kartını çalıştırıp Toon Ra'yı hedef alın.",
        "Savaş Aşamasına geçin: Rakip Toon canavarı kontrol etmediği için Toon Ra doğrudan rakip can puanına saldırabilir.",
        "Rollback sayesinde Ra ikinci kez saldırır (7900 x 2 = 15800 doğrudan hasar!)."
      ],
      "result": "Rakibin hiçbir şansı kalmadan tek turda 15000+ doğrudan hasar vurularak oyun saniyeler içinde kazanılır (OTK)."
    },
    {
      "id": "tg-6",
      "title": "Örnek Kombo 6: Comic Hand & Toon Briefcase ile Rakip Patronunu Çalma ve Kapatma",
      "cardsNeeded": [
        "Comic Hand",
        "Toon Briefcase",
        "Toon Kingdom"
      ],
      "sequence": [
        "Toon Kingdom",
        "Comic Hand",
        "Toon Briefcase",
        "The Toon Winged Dragon of Ra"
      ],
      "difficulty": "Kolay / Kontrol",
      "steps": [
        "\"Toon Kingdom\" açıkken rakibin en güçlü patron canavarına \"Comic Hand\" donatıp kendi tarafınıza geçirin.",
        "Canavar artık dokunulmaz bir Toon haline gelir ve doğrudan rakibe saldırabilir.",
        "Rakip durumu kurtarmak için yeni bir canavar indirdiğinde \"Toon Briefcase\" tuzağını açıp onu destesine geri tıkın."
      ],
      "result": "Rakibin kozunu elinden alıp kendi ordunuza katan ve yeni hamlelerini anında boğan kusursuz kilit."
    },
    {
      "id": "tg-7",
      "title": "Örnek Kombo 7: Shadow Toon & Toon Cannon Soldier ile Doğrudan Can Puanı Eritme",
      "cardsNeeded": [
        "Shadow Toon",
        "Toon Cannon Soldier"
      ],
      "sequence": [
        "Toon Kingdom",
        "Shadow Toon",
        "Toon Cannon Soldier",
        "Toon Dark Magician"
      ],
      "difficulty": "Kolay / Bitirici",
      "steps": [
        "Rakibin sahasında yüksek ATK'li bir canavar varken \"Shadow Toon\" oynayarak onun ATK'si kadar doğrudan rakibe hasar verin.",
        "\"Toon Cannon Soldier\" çağırarak sahadaki diğer Toon canavarlarınızı feda edin ve her biriyle 500 hasar daha vurun.",
        "Savaş ilan etmeye gerek kalmadan rakibin kalan son can puanlarını anında sıfırlayın."
      ],
      "result": "Rakibin savunma duvarını tamamen baypas edip doğrudan düelloyu kazandıran yakma hasarı kombosu."
    }
  ],
  "ekstralar": [
    {
      "id": "ex-1",
      "title": "Örnek Kombo 1: Legend of Heart ile 3 Efsanevi Şövalye ve Timaeus the Knight of Destiny",
      "cardsNeeded": [
        "Legend of Heart",
        "1 Savaşçı Canavar",
        "3 Efsanevi Ejderha Büyüsü (veya Mezardayken)"
      ],
      "sequence": [
        "Legend of Heart",
        "Legendary Knight Timaeus",
        "Legendary Knight Critias",
        "Legendary Knight Hermos",
        "Timaeus the Knight of Destiny"
      ],
      "difficulty": "İleri Seviye / Destansı",
      "steps": [
        "1000 LP ödeyip sahadaki Savaşçı canavarınızı feda ederek \"Legend of Heart\"ı aktifleştirin.",
        "Elinizden veya mezarlığınızdan \"The Eye of Timaeus\", \"The Fang of Critias\" ve \"The Claw of Hermos\"u banish edin.",
        "Destenizden 3 efsanevi şövalyeyi (\"Legendary Knight Timaeus\", \"Critias\", \"Hermos\") aynı anda sahaya indirin.",
        "Sahadaki 3 şövalyeyi birleştirerek kart efektlerinden etkilenmeyen ve sahadaki en yüksek ATK'ye eşitlenen nihai patron \"Timaeus the Knight of Destiny\"yi çağırın!"
      ],
      "result": "Kart efektlerinden etkilenmeyen, savaş hasarı aldırmayan ve yok edildiğinde 3 şövalyeyi yeniden sahaya getiren ölümsüz birleşik güç."
    },
    {
      "id": "ex-2",
      "title": "Örnek Kombo 2: The Fang of Critias ve Mirror Force ile Tüm Rakip Sahayı Silme",
      "cardsNeeded": [
        "The Fang of Critias (veya Critias the United Dragon)",
        "Mirror Force"
      ],
      "sequence": [
        "Critias the United Dragon",
        "The Fang of Critias",
        "Mirror Force",
        "Mirror Force Dragon"
      ],
      "difficulty": "Kolay / Etkili",
      "steps": [
        "\"Critias the United Dragon\"ı elden özel çağırıp desteden \"Mirror Force\" set edin veya \"The Fang of Critias\" ile elden/sahadan Mirror Force'u mezara gönderin.",
        "Ekstra Destenizden \"Mirror Force Dragon\"ı Özel Çağırın.",
        "Rakip herhangi bir canavarınıza saldırdığında veya bir kart efektiyle hedef aldığında Hızlı Efektini tetikleyin."
      ],
      "result": "Rakibin sahasındaki tüm açık ve kapalı kartlar tek hamlede tamamen yok edilerek rakip savunması sıfırlanır."
    },
    {
      "id": "ex-3",
      "title": "Örnek Kombo 3: Guardian Eatos ve Dreadscythe ile Yıkıcı Saldırı Gücü",
      "cardsNeeded": [
        "Guardian Eatos",
        "Celestial Sword - Eatos (veya Dreadscythe)"
      ],
      "sequence": [
        "Guardian Eatos",
        "Celestial Sword - Eatos",
        "Guardian Dreadscythe",
        "Reaper Scythe - Dreadscythe"
      ],
      "difficulty": "Orta",
      "steps": [
        "Mezarlığınızda canavar yokken \"Guardian Eatos\"u elinizden bedelsiz Özel Çağırın ve \"Celestial Sword - Eatos\" donatın.",
        "Donanımı mezara yollayarak rakip mezarlıktan 3 canavarı banish edip Eatos'un ATK'sini 4000'e çıkarın.",
        "Eatos mezara gittiğinde desteden \"Guardian Dreadscythe\" çağırıp doğrudan \"Reaper Scythe - Dreadscythe\" kuşanın."
      ],
      "result": "İki mezarlıktaki her canavar başına +500 ATK kazanan ve yok edilmeye karşı elden kart atarak sahada kalan durdurulamaz bir patron."
    },
    {
      "id": "ex-4",
      "title": "Örnek Kombo 4: Orichalcos Deuteros & Tritos ile Tam Saha Dokunulmazlığı",
      "cardsNeeded": [
        "The Seal of Orichalcos",
        "Orichalcos Deuteros",
        "Orichalcos Tritos"
      ],
      "sequence": [
        "The Seal of Orichalcos",
        "Orichalcos Deuteros",
        "Orichalcos Tritos"
      ],
      "difficulty": "Orta",
      "steps": [
        "\"The Seal of Orichalcos\" sahadayken \"Orichalcos Deuteros\"u devreye sokarak her tur canavar sayınız x 500 LP kazanın.",
        "Sahadaki Deuteros'u mezara göndererek \"Orichalcos Tritos\"u kurun.",
        "Tritos ile dost canavarlarınızı hedef alan rakip büyü/tuzaklarını bedelsiz iptal edip yok edin."
      ],
      "result": "Rakip büyü ve tuzaklarını engelleyen, canavar saldırılarını savuşturan ve her tur can puanınızı dolduran sarsılmaz Orichalcos kalkanı."
    },
    {
      "id": "ex-5",
      "title": "Örnek Kombo 5: Egyptian, The Ultimate Lord Of Duel Monster ile Tek Vuruşta Zafer",
      "cardsNeeded": [
        "Egyptian, The Ultimate Lord Of Duel Monster",
        "Mezarlıkta/Sahada Ra + Obelisk + Slifer"
      ],
      "sequence": [
        "The Winged Dragon of Ra",
        "Obelisk the Tormentor",
        "Slifer the Sky Dragon",
        "Egyptian, The Ultimate Lord Of Duel Monster"
      ],
      "difficulty": "İleri Seviye / Tek Hamle",
      "steps": [
        "3 Mısır Tanrısını (\"Winged Dragon of Ra\", \"Obelisk The Tormentor\", \"Slifer The Sky Dragon\") oyundan çıkarın.",
        "Çağrısı engellenemeyen \"Egyptian, The Ultimate Lord Of Duel Monster\"ı sahaya indirin.",
        "Sahadaki tüm diğer kartları oyundan çıkarıp 100.000 ATK ile doğrudan saldırı yapın."
      ],
      "result": "Kart efektlerinden etkilenmeyen, tek bir doğrudan saldırısıyla düelloyu kazandıran mutlak tanrısal güç."
    },
    {
      "id": "ex-6",
      "title": "Örnek Kombo 6: Divine Serpent Geh - Infinity End ile Yenilmezlik ve Sonsuz Saldırı",
      "cardsNeeded": [
        "The Seal of Orichalcos",
        "Divine Serpent Geh - Infinity End"
      ],
      "sequence": [
        "The Seal of Orichalcos",
        "Divine Serpent Geh - Infinity End",
        "Seven Seas Apocalypse"
      ],
      "difficulty": "İleri Seviye / Antik Yılan",
      "steps": [
        "Sahadaki güçlü canavarlarınız yok edildiğinde elinizden \"Divine Serpent Geh - Infinity End\" canavarını Özel Çağırın.",
        "Sahadayken savaş hasarı almazsınız ve rakibin en güçlü canavarıyla savaştığında onun ATK'sini yarıya indirip kendi gücüne katar.",
        "\"Seven Seas Apocalypse\" desteğiyle sahadaki tüm zayıf kartları temizleyip tek başına rakip can puanını ezin."
      ],
      "result": "Sizi yenilgiden koruyan, rakibin saldırı gücünü emip savaşı lehinize çeviren antik ve yenilmez yılan."
    },
    {
      "id": "ex-7",
      "title": "Örnek Kombo 7: Wicked Chain & Orichalcos Kyutora ile Rakip Hamlelerini Zincirleme Felç Etme",
      "cardsNeeded": [
        "Orichalcos Kyutora",
        "Wicked Chain",
        "Orichalcos Protos"
      ],
      "sequence": [
        "Orichalcos Kyutora",
        "Wicked Chain",
        "Orichalcos Protos",
        "The Great Leviathan"
      ],
      "difficulty": "Orta / Zincir Kilidi",
      "steps": [
        "\"Orichalcos Kyutora\"yı sahaya sürerek aldığınız tüm savaş hasarını 0'a indirin.",
        "Rakip en büyük hamlesini yaparken \"Wicked Chain\" tuzağını açın: Rakip canavarın efektlerini tamamen kapatın ve saldırmasını engelleyin.",
        "Kyutora yok edildiğinde \"Orichalcos Protos\" ve ardından \"The Great Leviathan\"ı sahaya serbest bırakın."
      ],
      "result": "Hasarı sıfırlayan, rakibin patron canavarını zincirleyen ve devasa kadim gücü sahaya indiren kilit kombosu."
    }
  ]
};

// Deste ID veya Adına göre komboları getiren yardımcı fonksiyon
export function getCombosForDeck(deckId, deckName = '') {
  if (deckId && DECK_COMBOS[deckId]) {
    return DECK_COMBOS[deckId];
  }

  const normalizedName = (deckName || '').toLowerCase();
  const normalizedId = (deckId || '').toLowerCase();

  // Ekstralar kontrolü
  if (normalizedId === 'ekstralar' || normalizedName.includes('ekstra') || normalizedName.includes('extra')) {
    return DECK_COMBOS['ekstralar'] || [];
  }

  // Toon GODs kontrolü (önce yapılmalı ki düz toon ile karışmasın)
  if (
    normalizedId === 'toon-gods' ||
    (normalizedName.includes('toon') && (normalizedName.includes('god') || normalizedName.includes('tanrı')))
  ) {
    return DECK_COMBOS['toon-gods'] || [];
  }

  // Düz Toon kontrolü
  if (normalizedId === 'toon' || normalizedName.includes('toon')) {
    return DECK_COMBOS['toon'] || [];
  }

  // Red-Eyes
  if (normalizedId === 'red-eyes' || normalizedName.includes('red-eyes') || normalizedName.includes('kırmızı')) {
    return DECK_COMBOS['red-eyes'] || [];
  }

  // Harpie Lady
  if (normalizedId === 'harpie' || normalizedName.includes('harpie') || normalizedName.includes('arpi')) {
    return DECK_COMBOS['harpie'] || [];
  }

  // Ancient Egyptian GODs
  if (
    normalizedId === 'aiacosvu4mz5h1se8zek' ||
    normalizedId === 'ancient-gods' ||
    normalizedName.includes('ancient') ||
    normalizedName.includes('antik') ||
    normalizedName.includes('egyptian')
  ) {
    return DECK_COMBOS['ancient-gods'] || [];
  }

  // Magician & God
  if (
    normalizedId === 'magician-god' ||
    normalizedName.includes('magician') ||
    normalizedName.includes('kara büyücü')
  ) {
    return DECK_COMBOS['magician-god'] || [];
  }

  // Blue-Eyes
  if (normalizedId === 'blue-eyes' || normalizedName.includes('blue-eyes') || normalizedName.includes('mavi')) {
    return DECK_COMBOS['blue-eyes'] || [];
  }

  // Pendulum / Supreme King
  if (
    normalizedId === 'pendulum' ||
    normalizedName.includes('pendulum') ||
    normalizedName.includes('supreme') ||
    normalizedName.includes('z-arc') ||
    normalizedName.includes('sarkaç')
  ) {
    return DECK_COMBOS['pendulum'] || [];
  }

  return [];
}
