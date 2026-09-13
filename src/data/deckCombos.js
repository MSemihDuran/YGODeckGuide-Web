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
        "Elinizdeki \"Red-Eyes Fusion\" büyüsünü doğrudan çalıştırın: Kart metnindeki özel kural gereği füzyon malzemelerini elden veya sahadan değil, doğrudan DESTEMİZDEN (\"Red-Eyes Black Dragon\" + \"Dark Magician\") Mezarlığa gönderin.",
        "Ekstra Destenizden \"Red-Eyes Dark Dragoon\" canavarını Fusion Çağrısı ile sahaya indirin.",
        "Dragoon sahaya geldiğinde, füzyon malzemesi olarak kullanılan Normal Canavar sayısı kadar (2 adet) canavar yok etme efekti (Ignition) devreye girer: Rakibin 1 veya 2 canavarını yok edip yok edilen canavarların orijinal ATK'si kadar rakibe doğrudan yakma hasarı verin.",
        "Dragoon sahada açık kaldığı sürece hedef alınamaz, kart efektiyle yok edilemez ve turda 1 kez elden 1 kart atarak rakibin herhangi bir kart veya efekt aktivasyonunu iptal edip (omni-negate) yok eder ve kalıcı 1000 ATK kazanır."
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
        "\"Red-Eyes Black Meteor Dragon\"ın eldeki tetikleyici Özel Çağrı efektini çalıştırın: Desteden Seviye 5+ Normal canavarı (\"Red-Eyes Black Dragon\") mezarlığa göndererek kendisini sahaya Özel Çağırın; bu efektiyle kendi seviyesi Seviye 7 olur.",
        "\"The Black Stone of Legend\"ı Normal Çağırın; kartın kendi ateşleme efekti (Ignition) gereği kendini feda ederek desteden 2. \"Red-Eyes Black Dragon\"ı (Seviye 7) doğrudan sahaya Özel Çağırın.",
        "Sahadaki 2 adet Seviye 7 ejderhayı birleştirerek Ekstra Destenizden \"Red-Eyes Flare Metal Dragon\"ı 7. Derece Xyz Çağrısı ile sahaya indirin.",
        "Flare Metal Dragon üzerinde materyal olduğu sürece kart efektleriyle yok edilemez; ayrıca rakip her kart veya efekt çalıştırdığında tetiklenen zorunlu efektiyle rakibe anında 500 LP yakma hasarı vurur."
      ],
      "result": "Kart efektleriyle yok edilemeyen ve rakip her hamle yaptığında anında 500 can puanı eksilten kilit bir Xyz ejderhası sahadadır."
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
        "\"Black Metal Dragon\"ı sahaya Normal Çağırın.",
        "Sahanızda açık Ejderha bulunduğu için, elinizdeki \"Red-Eyes Darkness Metal Dragon\"ın çağırma prosedürünü (Summoning Condition) devreye sokun: Sahanızdaki Black Metal Dragon'u oyundan çıkararak (banish) Darkness Metal'i elden Özel Çağırın.",
        "Black Metal Dragon sahadan mezara/sürgüne gittiği anda tetiklenen arama efekti devreye girer: Destenizden \"Red-Eyes Fang with Chain\" tuzağını veya \"Red-Eyes Insight\" büyüsünü elinize ekleyin.",
        "\"Red-Eyes Darkness Metal Dragon\"ın turda 1 kez çalışan ateşleme efektini (Ignition) kullanarak mezarlığınızdaki herhangi bir Ejderha canavarını sahaya bedelsiz geri diriltin.",
        "Arama ile gelen \"Red-Eyes Fang with Chain\" tuzağını sahaya kapatın; rakip canavarına donatarak rakip patron canavarını çalma ve ejderhanıza çift saldırı hakkı verme pozisyonuna geçin."
      ],
      "result": "2800 ATK ejderha + mezardan bedava diriltilen canavar + rakip canavarı çalabilen koruyucu tuzak ile muazzam saha avantajı."
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
        "\"Max Metalmorph\" Normal Tuzağını sahaya kapalı koyun.",
        "Rakip hamle yaparken veya ana aşamada tuzağı aktifleştirin: Tuzağın aktivasyon maliyeti (cost) olarak kontrol ettiğiniz Seviye 5 veya daha yüksek Seviye 7 Red-Eyes ejderhanızı feda edin.",
        "Tuzağın efektiyle destenizden doğrudan çağırma koşullarını yok sayarak \"Red-Eyes Black Fullmetal Dragon\" Özel Çağırın ve bu tuzağı ona Donatım Kartı olarak donatın.",
        "Fullmetal Dragon sahadayken donatılmış tuzak sayesinde Büyü ve canavar efektlerinden tamamen ETKİLENMEZ (+400 ATK/DEF kazanır).",
        "Rakip herhangi bir kart veya efekt etkinleştirdiğinde Fullmetal Dragon'un Hızlı Efekti tetiklenir: O aktivasyonu tamamen iptal edip yok edin ve rakibin sahasındaki açık bir canavarın orijinal ATK'si kadar rakibe doğrudan yakma hasarı vurun!"
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
        "\"Red-Eyes Fusion\" veya 'Polymerization' ile 3 adet Red-Eyes Black Dragon'ı birleştirerek Ekstra Destenizden \"Neo Red-Eyes Ultimate Dragon\"ı Fusion Çağrısı ile sahaya indirin.",
        "Savaş Aşamasına geçip 4500 ATK ile ilk saldırınızı gerçekleştirin.",
        "Hasar Adımının sonunda (Damage Step), kontrol ettiğiniz tek açık canavar bu kartsa tetiklenen efekti devreye sokun: Ekstra Destenizden 1 Red-Eyes Fusion veya Xyz canavarını mezara göndererek arka arkaya 2 kez daha saldırı ilan edin (Turda toplam 3 kez vurabilir!).",
        "İlerleyen turlarda veya rakip turunda rakip sizin bir Red-Eyes kartınızı hedef alan bir efekt açarsa: Mezarlıktaki bu kartı oyundan çıkarıp (Quick Effect) o efekti tamamen iptal edin ve o kartı yok edin."
      ],
      "result": "Tek turda 3 kez saldırabilen (4500 x 3 = 13.500 potansiyel hasar) ve mezardayken bile takımı koruyan 4500 ATK devasa füzyon ejderhası."
    },
    {
      "id": "re-6",
      "title": "Örnek Kombo 6: Dark Time Wizard & Red-Eyes Exceed ile Garanti Zar OTK Kombosu",
      "cardsNeeded": [
        "Dark Time Wizard",
        "Graceful & Skull Dice (veya desteden aranabilir)",
        "Red-Eyes Black Dragon (Elde/Mezarda)"
      ],
      "sequence": [
        "Dark Time Wizard",
        "Graceful & Skull Dice",
        "Red-Eyes Black Dragon Exceed",
        "Red-Eyes Black Dragon"
      ],
      "difficulty": "Orta / Şans & Garanti Güç",
      "steps": [
        "Arama Adımı (Setup): Elinizdeki \"Dark Time Wizard\" Hızlı Büyü kartını çalıştırın ve 1. efektini seçin: Kartın arama efekti devreye girer ve destenizden metninde 'Dark Time Wizard' adı geçen \"Graceful & Skull Dice\" Hızlı Büyüsünü elinize ekler (bu efekt ayrıca turun Son Aşamasında mezarlıktan bu kartı tekrar elinize geri döndürür).",
        "Yazı/Tura ve Sahayı Temizleme (The Gamble): Aynı tur veya rakip turunda \"Dark Time Wizard\"ın 2. efektini (yazı/tura kumarını) tetikleyin: Kazanırsanız (Tura), kartın yok etme efekti gereği rakibin tüm canavarları yok olur ve orijinal ATK'larının yarısı kadar rakibe doğrudan etki hasarı girer. Kaybederseniz (Yazı), sahanızdaki canavarlar yok olur.",
        "Red-Eyes Black Dragon Exceed Çağrısı (The Reward): Yazı/tura sonucunda ister kazanın ister kaybedin, sahada Dark Time Wizard etkisiyle en az bir canavar yok edildiği için \"Red-Eyes Black Dragon Exceed\"in özel çağırma koşulu (Summoning Condition) aktifleşir: Ekstra Destenizden Exceed'i, sahadaki herhangi bir açık canavarı Feda ederek (Tribute) doğrudan Özel Çağırın!",
        "Zincirleme Diriltme (Swarm): \"Red-Eyes Black Dragon Exceed\" sahaya indiğinde tetiklenen tetikleyici efekti (Trigger Effect) devreye girer: Elinizden veya Mezarlığınızdan Seviye 8 veya daha düşük herhangi bir canavarı (örneğin orijinal 2400 ATK'lik \"Red-Eyes Black Dragon\"ı) bedelsiz olarak sahaya Özel Çağırın!",
        "Zar Atışı ile Bitirici Vuruş (The Dice OTK): Sahanızda rakip büyü ve canavar efektlerinden tamamen etkilenmeyen 3400 ATK'lık Exceed ve dirilttiğiniz Red-Eyes varken, elinizdeki \"Graceful & Skull Dice\" Hızlı Büyüsünü aktifleştirin. Zarı iki kez atın; metninde 'Dark Time Wizard' geçen canavarlarınız (Exceed) zar toplamı x 200 kadar devasa ATK kazanırken, rakip canavarlar zar x 200 zayıflar. Bomboş veya zayıflamış rakibe doğrudan saldırarak maçı tek turda bitirin (OTK)!"
      ],
      "result": "Yazı-tura kumarını her iki sonuçta da kazanca dönüştüren, sahadan bedava 3400 ATK dokunulmaz patron fırlatan, mezardan ejderha dirilten ve zar desteğiyle tek turda oyunu bitiren garanti OTK kombosu."
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
        "Rakip canavar çağırıp saldırı ilan ettiğinde elinizden \"Red-Eyes Soul\" Hızlı Efektini tetikleyin: Kendisini mezara göndererek desteden veya elden orijinal \"Red-Eyes Black Dragon\"ı doğrudan sahaya Özel Çağırın.",
        "Hasar Adımında (Damage Step) kapalı \"Graceful & Skull Dice\" kartını açarak 6 yüzlü zarı iki kez atın.",
        "Kartın kuralı gereği: Metninde 'Dark Time Wizard' geçen veya Red-Eyes dost canavarlarınız zar toplamı x 200 ATK kazanırken, saldıran rakip canavar zar toplamı x 200 ATK kaybeder.",
        "Rakip canavar kendi saldırısında ezilerek savaşta yok olur ve aradaki devasa hasar farkı doğrudan rakibin LP'sinden düşer.",
        "Ayrıca mezarlıktaki \"Graceful & Skull Dice\"ı ilerleyen turda sürgün ederek rakibin yeni çağırdığı canavarı çift zar atışıyla (toplam 6+) patlatabilirsiniz."
      ],
      "result": "Rakibin beklemediği anda sahaya inen ejderha ve zar manipülasyonuyla rakibin saldırısını felakete dönüştüren koruma hattı."
    },
    {
      "id": "re-8",
      "title": "Örnek Kombo 8: Red-Eyes Alternative & Red-Eyes Twin Dark Aura ile Polimerizasyonsuz Çift Başlı Ejderha Baskısı",
      "cardsNeeded": [
        "Red-Eyes Alternative Black Dragon",
        "Red-Eyes Black Dragon",
        "Red-Eyes Twin Dark Aura Dragon (Ekstra Deste)"
      ],
      "sequence": [
        "Red-Eyes Black Dragon",
        "Red-Eyes Alternative Black Dragon",
        "Red-Eyes Twin Dark Aura Dragon"
      ],
      "difficulty": "Kolay / Hızlı Çağrı",
      "steps": [
        "\"Red-Eyes Black Dragon\"ı sahaya Normal Çağırın (veya The Black Stone of Legend ile desteden sahaya fırlatın).",
        "Elinizdeki \"Red-Eyes Alternative Black Dragon\"ın özel çağırma koşulunu (Summoning Condition) uygulayın: Elinizden veya sahanızdan 1 Red-Eyes canavarını feda ederek Alternative'i elden bedelsiz Özel Çağırın; bu kartın adı sahada ve mezarda 'Red-Eyes Black Dragon' sayılır.",
        "Ekstra Destenizdeki \"Red-Eyes Twin Dark Aura Dragon\"ın kart metnindeki temaslı füzyon (Contact Fusion) kuralı devreye girer: 'Polymerization' büyüsüne gerek kalmadan sahanızdaki 2 adet Red-Eyes Black Dragon'ı doğrudan Mezarlığa göndererek Twin Dark Aura Dragon'ı Özel Çağırın!",
        "Twin Dark Aura Dragon'ın sürekli efekti gereği her Savaş Aşamasında canavarlara arka arkaya 2 kez saldırın.",
        "Son Aşamanızda (End Phase), Twin Dark Aura Dragon bu tur savaşmışsa tetiklenen efekti devreye girer: Elinizden veya Mezarlığınızdan Seviye 8 veya daha düşük 1 Ejderha canavarını (orijinal Red-Eyes veya Darkness Metal Dragon) sahaya Özel Çağırın!"
      ],
      "result": "Füzyon büyüsü harcamadan sahaya inen, canavarlara 2 kez vurabilen ve tur sonunda mezardan devasa bir ejderhayı geri getiren çift başlı saldırı hattı."
    },
    {
      "id": "re-9",
      "title": "Örnek Kombo 9: Red-Eyes Ultimate Dragon ile Mezarlıktan Sürgün Ederek 4000+ ATK Çağrısı",
      "cardsNeeded": [
        "Mezarlıkta 3 Red-Eyes Ejderhası",
        "Red-Eyes Ultimate Dragon (Ekstra Deste)"
      ],
      "sequence": [
        "Red-Eyes Fusion",
        "Red-Eyes Black Dragon",
        "Red-Eyes Ultimate Dragon"
      ],
      "difficulty": "Kolay / Geç Oyun Bitirici",
      "steps": [
        "Oyunun erken turlarında \"Red-Eyes Insight\" veya \"Red-Eyes Fusion\" kullanarak destenizden en az 3 adet 'Red-Eyes' Ejderha canavarını Mezarlığa gönderin.",
        "Ekstra Destenizdeki \"Red-Eyes Ultimate Dragon\"ın alternatif özel çağırma kuralını devreye sokun: Sahanızdan veya Mezarlığınızdan 3 'Red-Eyes' Ejderha canavarını oyundan çıkararak (banish) Ekstra Destenizden bu kartı doğrudan Özel Çağırın (Bu yöntem düelloda 1 kez kullanılabilir ve kart harcamaz!).",
        "Sahaya inen 4000+ devasa ATK'li nihai ejderha ile rakibin savunma hattını parçalayın.",
        "Rakip bir hamle yapmaya kalktığında bu devasa güç karşısında duramaz ve oyunun kontrolü tamamen elinize geçer."
      ],
      "result": "Elden hiçbir büyü veya malzeme harcamadan, mezarlıktaki kaynakları sürgüne göndererek tek hamlede sahaya fırlatılan 4000+ ATK gücündeki nihai Kırmızı Gözlü ejderha."
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
        "Elinizden 1 Harpie kartı atarak Channeler'ın ateşleme efektini (Ignition) çalıştırın: Desteden \"Harpie Perfumer\"ı Savunma Konumunda Özel Çağırın.",
        "Perfumer sahaya indiğinde tetiklenen efekti devreye girer: Destenizden \"Elegant Egotist\" büyüsünü elinize ekleyin.",
        "\"Cyber Slash Harpie Lady\" kartının özel Synchro kuralı devreye girer: Bu kartın Synchro Çağrısı için kontrol ettiğiniz 1 'Harpie' canavarını Tuner sayabilirsiniz! Seviye 4 Channeler ve Seviye 4 Perfumer birleşerek Seviye 8 Cyber Slash Harpie Lady Synchro Çağrılır.",
        "\"Elegant Egotist\" büyüsünü çalıştırarak desteden \"Harpie Lady 1\"i sahaya Özel Çağırın ve tüm RÜZGAR canavarlarınıza +300 ATK takviyesi kazandırın."
      ],
      "result": "Sahada Cyber Slash Harpie Lady (herhangi bir büyü/tuzak açıldığında rakip canavarı ele fırlatır) + Harpie Lady 1 (+300 ATK bonusu)."
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
        "\"Harpies' Hunting Ground\" alan büyüsünü aktifleştirin (tüm Kanatlı Canavarlar +200 ATK/DEF kazanır).",
        "\"Harpie Channeler\"ı çağırın: Sahaya Harpie indiği anda Hunting Ground'un zorunlu tetikleme efekti devreye girer ve rakibin 1 Sihir/Tuzak kartı yok edilir.",
        "\"Elegant Egotist\" oynayarak desteden 2. bir Harpie çağırın: Alan büyüsü tekrar tetiklenir ve rakibin 2. arka sıra kartı yok edilir.",
        "Sahadaki 2 Harpie canavarını birleştirerek Link-2 \"Harpie Conductor\" çağırın; sahadaki Harpie'leriniz yok edilmek istendiğinde Conductor'ın yerine büyü/tuzak patlatma korumasını devreye sokun."
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
        "Sahanızda herhangi bir Harpie canavarı kontrol ederken \"Harpie's Feather Storm\" tuzağının özel kuralı devreye girer: Sahaya kapalı konulmaya gerek kalmadan doğrudan ELDEN oynanabilir!",
        "Rakibin turunda, rakip ilk canavar efektini açtığı an elinizden Feather Storm'u zincirleme olarak çalıştırın.",
        "Tur sonuna kadar rakibin tüm canavar efektleri nerede çalıştırılırsa çalıştırılsın (saha, el, mezarlık) tamamen geçersiz kılınır (negate).",
        "Rakip hiçbir kombo hamlesi yapamaz ve turunu oynamadan pas geçmek zorunda kalır."
      ],
      "result": "Rakibin tüm el ve saha canavar efektlerini tek bir kartla felç eden ve oyunu kazandıran nihai turn-skip tuzağı."
    },
    {
      "id": "hp-4",
      "title": "Örnek Kombo 4: Harpie's Pet Phantasmal Dragon ile Dokunulmazlık & Doğrudan Saldırı",
      "cardsNeeded": [
        "3 Seviye 4 RÜZGAR Harpie canavarı (Channeler + Egotist + Perfumer vb.)"
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
        "3 canavarı birleştirerek 3 materyalli Seviye 4 Xyz Çağrısı yapın: \"Harpie's Pet Phantasmal Dragon\".",
        "Phantasmal Dragon üzerinde materyal olduğu sürece sürekli koruma efekti devrededir: Rakip hiçbir Harpie canavarınızı kart efektleriyle hedef alamaz ve onlara saldırı ilan edemez.",
        "Ayrıca Phantasmal Dragon'un kendi efektiyle rakibin canavarlarını yok sayarak doğrudan rakip LP'sine 2000 hasar vurun!"
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
      "difficulty": "Orta",
      "steps": [
        "\"Harpie Perfumer\"ı çağırın: Efektiyle destenizden doğrudan \"Harpie's Feather Rest\" büyüsünü arayın.",
        "Sahanızda Seviye 5+ bir Harpie (örneğin Cyber Slash Harpie Lady) varken \"Harpie's Feather Rest\" büyüsünü aktifleştirin.",
        "Mezarlığınızdaki 3 Harpie canavarını desteye geri karıştırın; sahanızda Seviye 5+ Harpie bulunduğu için kartın ikincil kuralı tetiklenir: 2 kart yerine tam 3 KART ÇEKİN!",
        "Elinize çektiğiniz yeni tuzaklar ve arama kartlarıyla rakibe nefes aldırmayın."
      ],
      "result": "Mezarlıktaki kaynakları desteye geri doldurarak bedavadan tam 3 kart çektiren ve oyunu sonsuz döngüye sokan kart avantajı kombosu."
    },
    {
      "id": "hp-6",
      "title": "Örnek Kombo 6: Alluring Mirror Split & Harpist ile Rakip Saldırısına Tuzak ve Diriltme",
      "cardsNeeded": [
        "Alluring Mirror Split",
        "Harpie Channeler (veya Harpie Harpist)"
      ],
      "sequence": [
        "Alluring Mirror Split",
        "Harpie Channeler",
        "Harpie Harpist",
        "Cyber Slash Harpie Lady"
      ],
      "difficulty": "Taktiksel",
      "steps": [
        "\"Alluring Mirror Split\" sürekli büyüsünü açın.",
        "Harpie canavarınız savaşta yok edildiğinde Mirror Split'in tetikleme efekti çalışır: Mezarlığınızdan o canavardan farklı bir Harpie canavarını doğrudan sahaya Özel Çağırın.",
        "Mezara gönderilen \"Harpie Harpist\"in turun Son Aşamasında tetiklenen efekti devreye girer: Destenizden 1500 veya daha az ATK'li Seviye 4 Kanatlı canavarı elinize ekleyin.",
        "Rakip bu sürekli büyüyü patlatmaya kalkarsa, Mirror Split yok edildiğinde tetiklenen intikam efektiyle mezardan istediğiniz herhangi bir Harpie'yi bedelsiz diriltin!"
      ],
      "result": "Rakibin saldırılarını cezalandıran, canavar öldükçe mezardan yenisini çağıran ve el tazeleyen geçilmez ayna savunması."
    },
    {
      "id": "hp-7",
      "title": "Örnek Kombo 7: Harpie Oracle & Hysteric Sign ile Sonsuz Büyü/Tuzak Döngüsü ve +3 Kart Avantajı",
      "cardsNeeded": [
        "Hysteric Sign",
        "Harpie Perfumer (veya Harpie Channeler)"
      ],
      "sequence": [
        "Hysteric Sign",
        "Elegant Egotist",
        "Harpie Perfumer",
        "Harpie Oracle",
        "Harpie's Feather Duster"
      ],
      "difficulty": "Orta / Kaynak Fabrikası",
      "steps": [
        "\"Hysteric Sign\" Sürekli Büyüsünü aktifleştirin; açılış efektiyle destenizden veya mezarlığınızdan doğrudan \"Elegant Egotist\"i elinize ekleyin.",
        "\"Harpie Perfumer\"ı Normal Çağırın ve \"Elegant Egotist\" ile desteden 2. Harpie'yi çağırarak sahayı genişletin.",
        "Sahanızda Seviye 5+ Harpie (Cyber Slash) varken elinizdeki \"Harpie Oracle\"ın kendi tetikleyici efekti devreye girer: Kendisini elden Özel Çağırın!",
        "Oracle sahaya indiğinde tetiklenen efekti devreye girer: Mezarlığınızdaki 'Harpie' metni geçen herhangi bir Sihir/Tuzak kartını (örneğin Harpie's Feather Duster veya Feather Storm) doğrudan elinize geri alın!",
        "Turun sonunda 'Hysteric Sign' elden veya sahadan mezara gönderilmişse, Son Aşamada tetiklenen devasa arama efekti çalışır: Destenizden tam 3 FARKLI 'Harpie' kartını elinize ekleyin!"
      ],
      "result": "Mezarlıktan Feather Duster ve Feather Storm'u sonsuz kez geri toplayan ve desteden tek turda +3 kart çeken nihai Harpie kaynak fabrikası."
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
        "\"Dark Beckoning Beast\"ı sahaya Normal Çağırın; sahaya indiğinde tetiklenen arama efektiyle destenizden \"Dark Summoning Beast\"ı elinize ekleyin.",
        "Dark Beckoning Beast sahada açıkken devreye giren sürekli kuralı gereği: Ana Aşamanızda 0 ATK/DEF'li bir İblis canavarı için ek bir Normal Çağrı hakkı kazanın.",
        "Kazandığınız bu ek hakla elinizdeki \"Dark Summoning Beast\"ı Feda gerektirmeden sahaya Normal Çağırın.",
        "Dark Summoning Beast'in ateşleme efektini (Ignition) çalıştırarak kendisini feda edin: Çağırma koşullarını tamamen YOK SAYARAK destenizden doğrudan \"Raviel, Lord of Phantasms\" (veya Hamon / Uria) canavarını sahaya Özel Çağırın!",
        "Sonraki turda mezarlıktaki Dark Summoning Beast'i oyundan çıkararak destenizden 2. bir Kutsal Canavarı elinize ekleyin."
      ],
      "result": "Tek bir kartla 1. turdan sahaya inen 4000/4000 devasa Kutsal Canavar ve sonraki turlar için mezarlık kaynak avantajı."
    },
    {
      "id": "aeg-2",
      "title": "Örnek Kombo 2: Egyptian Gods' Disciple & Guardian ile Tek Hamlede Tanrı İndirme",
      "cardsNeeded": [
        "Egyptian Gods' Disciple",
        "Prayers to the Egyptian Gods (veya Elde Tanrı Kartı)"
      ],
      "sequence": [
        "Egyptian Gods' Disciple",
        "Prayers to the Egyptian Gods",
        "Obelisk The Tormentor GOD"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Elinizdeki \"Egyptian Gods' Disciple\"ı Normal Çağırın (veya eldeki Tanrı gösterilerek Hızlı Efektle Özel Çağrılır); sahaya indiğinde tetiklenen efektiyle destenizden \"Prayers to the Egyptian Gods\" büyüsünü sahaya kurun ve desteden 1 İLAHİ Tanrı arayın.",
        "\"Prayers to the Egyptian Gods\" büyüsünü aktifleştirerek Tanrılarınıza rakip canavar efektlerine karşı tam dokunulmazlık sağlayın ve bu tur fazladan 1 İLAHİ Normal Çağrı hakkı açın.",
        "\"Egyptian Gods' Disciple\" kartının kart üzerindeki özel kuralı devreye girer: Bu kart bir İlahi-Canavarın Feda Çağrısı için TEK BAŞINA 3 FEDA YERİNE SAYILIR!",
        "Başka hiçbir canavara ihtiyaç duymadan sahadaki Disciple'ı feda ederek elinizdeki \"Obelisk The Tormentor GOD\"ı (veya Slifer/Ra) doğrudan sahaya Feda Çağrısıyla indirin!"
      ],
      "result": "3 canavar toplama derdi olmadan tek bir müridle sahaya fırlatılan ve tüm canavar efektlerine dokunulmaz 4000 ATK Mısır Tanrısı."
    },
    {
      "id": "aeg-3",
      "title": "Örnek Kombo 3: Fallen Paradise ile Dokunulmaz Kutsal Canavarlar ve Her Tur +2 Kart Çekişi",
      "cardsNeeded": [
        "Fallen Paradise of the Sacred Beasts",
        "Sahada en az 1 Kutsal Canavar (Uria, Hamon veya Raviel)"
      ],
      "sequence": [
        "Raviel, Lord of Phantasms",
        "Fallen Paradise of the Sacred Beasts"
      ],
      "difficulty": "Kolay / Avantaj",
      "steps": [
        "Sahanızda Uria, Hamon veya Raviel gibi Seviye 10 bir Kutsal Canavar varken \"Fallen Paradise of the Sacred Beasts\" alan büyüsünü aktifleştirin.",
        "Fallen Paradise sahada açık olduğu sürece: Sahanızdaki tüm Kutsal Canavarlar rakibin çalıştırdığı Büyü ve Tuzak kartlarının efektlerinden TAMAMEN ETKİLENMEZ ve hedef alınamaz.",
        "Alan büyüsünün ateşleme efektini (Ignition) çalıştırın: Orijinal Seviyesi 10 olan bir Kutsal Canavar kontrol ettiğiniz için HER TUR BEDELSİZ 2 KART ÇEKİN!",
        "Alan büyüsünün 3. efektiyle elinizden veya açık sahanızdan aynı türde 3 kartı mezara atarak turda 3 keze kadar desteden/mezardan koşulsuz Kutsal Canavar çağırabilirsiniz."
      ],
      "result": "Büyü ve tuzaklara karşı tamamen bağışık Kutsal Canavarlar ve oyuncuya her tur bedelsiz +2 kart çektiren sonsuz el avantajı."
    },
    {
      "id": "aeg-4",
      "title": "Örnek Kombo 4: Immortal Chaos Dönüşümü ile Ölümsüz Tanrı Gücü",
      "cardsNeeded": [
        "Slifer The Sky Dragon GOD (Sahada)",
        "Slifer The Sky Dragon - Immortal Chaos (Mezarlıkta)",
        "1 Chaos Canavarı (Elde veya Sahada)"
      ],
      "sequence": [
        "Slifer The Sky Dragon GOD",
        "Slifer The Sky Dragon - Immortal Chaos"
      ],
      "difficulty": "İleri Seviye / İntikam",
      "steps": [
        "Sahanızdaki \"Slifer The Sky Dragon GOD\" bir savaş veya rakip hamlesiyle sahadan Mezarlığa gönderildiği anda tetiklenen Hızlı Efekt devreye girer.",
        "Mezarlıktaki \"Slifer The Sky Dragon - Immortal Chaos\"ın efekti tetiklenir: Elinizden veya sahanızdan 1 Chaos canavarı feda ederek bu kartı mezardan Özel Çağırın (Bu aktivasyona rakip hiçbir kartla yanıt veremez!).",
        "Immortal Chaos çağrıldığında tetiklenen efektiyle mezarlığınızı karıştırıp 2 rastgele kartı bedelsiz elinize ekleyin.",
        "Immortal Chaos diğer tüm kartların efektlerinden TAMAMEN ETKİLENMEZ, elinizdeki her kart için 2000 ATK kazanır ve rakip canavarların gücünü sürekli eritmeye devam eder."
      ],
      "result": "Tanrınız mezara gittiği anda yanıt verilemez şekilde dirilen, tüm efektlerden etkilenmeyen ve el sayısıyla on binlerce ATK'ye ulaşan Kaos Tanrısı."
    },
    {
      "id": "aeg-5",
      "title": "Örnek Kombo 5: The True Sun God & Sun God Unification ile Sınırsız ATK ve Can Baskısı",
      "cardsNeeded": [
        "The True Sun God",
        "The Winged Dragon of Ra GOD",
        "Sun God Unification"
      ],
      "sequence": [
        "The True Sun God",
        "The Winged Dragon of Ra GOD",
        "Sun God Unification"
      ],
      "difficulty": "Orta / Taktiksel",
      "steps": [
        "\"The True Sun God\" Sürekli Büyüsünü aktifleştirin; açılış efektiyle destenizden doğrudan \"The Winged Dragon of Ra GOD\"ı veya \"Sun God Unification\" tuzağını elinize ekleyin.",
        "Ra sahaya indiğinde kendi efektiyle LP'nizi 100 kalacak şekilde feda edip feda ettiğiniz tüm yaşam puanını (örneğin 7900) Ra'nın ATK'sine ekleyin.",
        "Saldırı yapıldıktan sonra kapalı duran \"Sun God Unification\" tuzağını aktifleştirin: Sahanızdaki Ra'yı feda ederek onun tüm ATK'sini tekrar YAŞAM PUANINIZA GERİ KAZANIN!",
        "Böylece hem rakibe tek darbede devasa hasar vurur hem de kaybettiğiniz tüm can puanınızı anında geri toplayarak can riskini sıfırlarsınız."
      ],
      "result": "Tüm yaşam puanını saf saldırı gücüne çevirip saldıran, ardından tek bir tuzakla tüm can puanını eksiksiz geri dolduran kusursuz Ra döngüsü."
    },
    {
      "id": "aeg-6",
      "title": "Örnek Kombo 6: Steelcage Lava Golem & Viser Des Shock ile Dokunulmaz Patronları Eritme",
      "cardsNeeded": [
        "The Sun God's Steelcage - Lava Golem (Ekstra Deste)",
        "Sahanızda 1 Sun God Canavarı",
        "The Sun God's Torture Device - Viser Des Shock (Elde)"
      ],
      "sequence": [
        "The Sun God's Steelcage - Lava Golem",
        "The Sun God's Torture Device - Viser Des Shock",
        "The Sun God's Destructor - Makyura"
      ],
      "difficulty": "Kolay / Taktiksel",
      "steps": [
        "Rakip sahada efektle yok edilemeyen, hedef alınamayan 2 devasa canavar varken Ekstra Destenizdeki \"The Sun God's Steelcage - Lava Golem\"ın çağırma kuralını devreye sokun.",
        "Sahanızdaki 1 Sun God canavarı ile rakibin o 2 dokunulmaz canavarını doğrudan Mezarlığa göndererek Lava Golem'i rakibin sahasına kilitleyin (Bu bir feda kuralıdır, dokunulmazlıkları delip geçer!).",
        "Rakibin canavarları mezara gittiği an elinizdeki \"The Sun God's Torture Device - Viser Des Shock\"ın Hızlı Efekti tetiklenir: Viser Des Shock bedelsiz Özel Çağrılır, sahadaki başka 1 rakip kartını ele geri fırlatır ve rakibe 800 hasar verir.",
        "Rakip kendi hazırlık aşamasında Lava Golem kafesinden her tur 1000 yakma hasarı alarak tükenir."
      ],
      "result": "Rakibin dokunulmaz canavarlarını kural feda maliyetiyle haritadan silen, sahaya Lava Golem hapseden ve rakibi her tur yakan işkence kombosu."
    },
    {
      "id": "aeg-7",
      "title": "Örnek Kombo 7: Opening of the Spirit Gates ile 3 Kutsal Canavar ve Phantom of Fury",
      "cardsNeeded": [
        "Opening of the Spirit Gates",
        "Mezarlıkta veya Sahada Kutsal Canavarlar"
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
        "Sahadaki 3 Kutsal Canavarı (\"Uria\", \"Hamon\", \"Raviel\") oyundan çıkararak Ekstra Destenizden \"Armityle the Chaos Phantasm - Phantom of Fury\"yi Füzyon Çağrısıyla çağırın.",
        "Phantom of Fury'nin tetikleme efektini çalıştırın: Kendisini oyundan çıkararak rakibin sahasındaki TÜM KARTLARI haritadan silin!",
        "Ardından Ekstra Destenizden tam 10.000 ATK gücündeki orijinal \"Armityle the Chaos Phantasm\"ı doğrudan sahaya indirin ve boş sahaya saldırarak tek vuruşta düelloyu bitirin!"
      ],
      "result": "Rakibin tüm sahasını sıfırlayan ve 10.000 ATK ile tek bir darbede zafer kazandıran nihai kaos füzyonu."
    },
    {
      "id": "aeg-8",
      "title": "Örnek Kombo 8: The Sun God Leading Down into Darkness & Poet ile Karanlık Ra Füzyonu ve Sahayı Çalma",
      "cardsNeeded": [
        "The Sun God Leading Down into Darkness",
        "The Sun God's Poet - Helpoemer",
        "The Sun God's Destructor - Makyura"
      ],
      "sequence": [
        "The Sun God Leading Down into Darkness",
        "The Winged Dragon of Ra GOD",
        "The Sun God's Poet - Helpoemer",
        "The Sun God's Destructor - Makyura",
        "The Immortal Sun God",
        "The Sun God of Darkness - The Winged Dragon of Ra",
        "Reign of the Sun God"
      ],
      "difficulty": "Orta / Çok Güçlü",
      "steps": [
        "\"The Sun God Leading Down into Darkness\" sürekli büyüsünü açarken aktivasyon şartı gereği destenizden \"The Winged Dragon of Ra GOD\"ı doğrudan mezarlığa gönderin.",
        "Büyü başarıyla açıldığı an tetiklenen arama efektiyle destenizden \"The Sun God's Poet - Helpoemer\"ı elinize ekleyin.",
        "Poet of the Sun God'ın eldeki Özel Çağrı efektini çalıştırın: Elinizden \"The Sun God's Destructor - Makyura\"yı mezara atarak Poet'i sahaya Özel Çağırın.",
        "Makyura mezara gittiği anda tetiklenen efekti devreye girer: Desteden \"The Immortal Sun God\" Hızlı Büyüsünü veya \"Reign of the Sun God\" tuzağını sahaya kurar ve BU TUR AÇILABİLİR yapar.",
        "Hızlı Büyü \"The Immortal Sun God\"ı aktifleştirin: Büyünün kuralı gereği mezarlıktaki Ra'yı diriltip anında mezara gönderin ve Ekstra Destenizden doğrudan \"The Sun God of Darkness - The Winged Dragon of Ra\" Füzyonunu sahaya indirin!",
        "Sahada Ra varken set ettiğiniz \"Reign of the Sun God\" tuzağını açın: İki oyuncunun mezarlığından birer canavar diriltin ve RAKİBİN TÜM CANAVARLARININ KONTROLÜNÜ ÇALIN!"
      ],
      "result": "Rakibin tüm canavarlarını tek hamlede elinden alan, Ekstra Desteden Karanlık Ra füzyonunu sahaya indiren ve iki mezardan da canavar dirilten ezici Güneş Tanrısı kombosu."
    },
    {
      "id": "aeg-9",
      "title": "Örnek Kombo 9: Makyura & Gil Garth ile Rakibin Patron Canavarlarını Eritme (Steelcage Lava Golem)",
      "cardsNeeded": [
        "The Sun God's Destructor - Makyura",
        "The Sun God's Terror Machine - Gil Garth"
      ],
      "sequence": [
        "The Sun God's Destructor - Makyura",
        "The Sun God's Terror Machine - Gil Garth",
        "The Sun God's Steelcage - Lava Golem",
        "The Sun God's Torture Device - Viser Des Shock"
      ],
      "difficulty": "Kolay / Taktiksel",
      "steps": [
        "\"The Sun God's Destructor - Makyura\"yı sahaya Normal Çağırın veya mezara gönderin; desteden \"The Sun God Leading Down into Darkness\" veya \"Protector of the Sun God\" kurun.",
        "Sahada 'Sun God' kartı bulunduğu için elinizdeki \"The Sun God's Terror Machine - Gil Garth\"ı kendi kuralıyla bedelsiz Özel Çağırın.",
        "Rakibin sahasında dokunulmaz veya güçlü 2 canavar varsa, kendi sahanızdaki Sun God canavarı ile rakibin o 2 canavarını mezara gönderin; Ekstra Destenizden \"The Sun God's Steelcage - Lava Golem\"ı rakibin sahasına kilitleyin (Bu bir çağırma kuralıdır, dokunulmazlıkları delip geçer!).",
        "Rakibin canavarları mezara gönderildiği anda elinizdeki \"The Sun God's Torture Device - Viser Des Shock\" sahaya fırlar; sahadaki başka bir kartı rakibin eline geri yollar ve rakibe 800 hasar verir.",
        "Rakip kendi hazırlık aşamasında Lava Golem kafesinden her tur 1000 yakma hasarı alarak tükenir."
      ],
      "result": "Rakibin en dokunulmaz canavarlarını feda kuralıyla haritadan silip sahasına Lava Golem hapseden, Viser ile kart sektiren ve tur başı can yakan işkence kombosu."
    },
    {
      "id": "aeg-10",
      "title": "Örnek Kombo 10: Protector Egyptian God Slime & Prayers ile Tanrı Çağrısı ve Hakimiyet",
      "cardsNeeded": [
        "Protector of the Sun God, Egyptian God Slime",
        "Prayers to the Egyptian Gods",
        "The Winged Dragon of Ra GOD"
      ],
      "sequence": [
        "Protector of the Sun God, Egyptian God Slime",
        "Prayers to the Egyptian Gods",
        "The Winged Dragon of Ra GOD",
        "Reign of the Sun God"
      ],
      "difficulty": "Kolay / Güçlü Kurulum",
      "steps": [
        "\"Protector of the Sun God, Egyptian God Slime\" Sürekli Tuzağını aktifleştirip sahaya 3000 DEF Savunma Canavarı olarak Özel Çağırın: Bu kartın kart metnindeki özel kural gereği bir İlahi-Canavar için TEK BAŞINA 3 FEDA SAYILIR!",
        "\"Prayers to the Egyptian Gods\" büyüsünü çalıştırarak destenizden Tanrı arayın ve fazladan 1 İLAHİ Normal Çağrı hakkı kazanın.",
        "Slime'ı feda ederek elinizdeki \"The Winged Dragon of Ra GOD\"ı sahaya Normal Çağırın; sahaya indiğinde büyü ve tuzaklardan tamamen etkilenmez ve rakip canavar efektlerine karşı dokunulmaz hale gelir.",
        "Sahanızda Ra varken kapalı duran \"Reign of the Sun God\" tuzağını aktifleştirin: İki mezardan da canavar diriltin ve rakibin kontrol ettiği tüm canavarların kontrolünü kalıcı olarak üzerinize geçirin!"
      ],
      "result": "3000 DEF'lik canlı kalkanla tek seferde çağrılan dokunulmaz Güneş Tanrısı ve rakip ordusunu tamamen çalan ezici tuzak kombosu."
    },
    {
      "id": "aeg-11",
      "title": "Örnek Kombo 11: Awakening of the Sacred Beasts & Skyfire ile Tam Saha Kilidi",
      "cardsNeeded": [
        "Dark Beckoning Beast",
        "Awakening of the Sacred Beasts",
        "Cerulean Skyfire"
      ],
      "sequence": [
        "Dark Beckoning Beast",
        "Dark Summoning Beast",
        "Hamon, Lord of Striking Thunder",
        "Raviel, Lord of Phantasms",
        "Cerulean Skyfire",
        "Awakening of the Sacred Beasts"
      ],
      "difficulty": "Orta / Mutlak Kilit",
      "steps": [
        "\"Dark Beckoning Beast\"ı Normal Çağırın; destenizden \"Dark Summoning Beast\"ı elinize ekleyin ve ek Normal Çağrı hakkı kazanın.",
        "\"Dark Summoning Beast\"ı çağırıp feda edin: Desteden koşulları yok sayarak \"Hamon, Lord of Striking Thunder\"ı sahaya indirin.",
        "Mezarlıktaki Dark Summoning Beast'i oyundan çıkarıp desteden \"Raviel, Lord of Phantasms\"ı elinize ekleyin.",
        "Sahanızda açık duran \"Cerulean Skyfire\" sayesinde rakibin her tur ilk çalıştırdığı Büyü/Tuzak kartının efektini tamamen geçersiz kılıp patlatın.",
        "Sahada Hamon ve Raviel (2 Kutsal Canavar) varken açık duran \"Awakening of the Sacred Beasts\" tuzağının sürekli kuralı devreye girer: Rakibin sahadaki TÜM canavar efektlerini otomatik olarak iptal eder (Skill Drain)! Üstelik 3. canavar indiğinde rakibin mezara gidecek tüm kartlarını sürgüne yollar."
      ],
      "result": "Rakibin hem sahadaki tüm canavar efektlerini hem de oynadığı büyü ve tuzakları iptal eden, geçilemez çift Kutsal Canavar duvarı."
    },
    {
      "id": "aeg-12",
      "title": "Örnek Kombo 12: Dimension Fusion Destruction ile Tek Turda Armityle ve 10.000 ATK OTK",
      "cardsNeeded": [
        "Dimension Fusion Destruction",
        "Dark Beckoning Beast (veya Opening of the Spirit Gates)"
      ],
      "sequence": [
        "Dark Beckoning Beast",
        "Opening of the Spirit Gates",
        "Dimension Fusion Destruction",
        "Armityle the Chaos Phantasm",
        "Raviel, Lord of Phantasms - Shimmering Scraper"
      ],
      "difficulty": "İleri Seviye / Tek Vuruş",
      "steps": [
        "\"Dark Beckoning Beast\" ve \"Opening of the Spirit Gates\" ile Kutsal Canavar malzemelerini (Uria, Hamon, Raviel) desteden mezarlığa ve ele akıtın.",
        "\"Dimension Fusion Destruction\" büyüsünü çalıştırın: Elinizden, sahanızdan ve/veya Mezarlığınızdan \"Uria\", \"Hamon\" ve \"Raviel\"i oyundan çıkararak Ekstra Desteden doğrudan \"Armityle the Chaos Phantasm\"ı Füzyon Çağrısıyla indirin.",
        "Kendi turunuzda Armityle'ın sürekli efekti devreye girer ve tam 10.000 ATK kazanır; ayrıca savaşta yok edilemez.",
        "Elinizdeki \"Raviel, Lord of Phantasms - Shimmering Scraper\"ı atarak Armityle'ın tüm rakip canavarlarına saldırmasını sağlayın veya doğrudan boş sahaya 10.000 hasar vurarak tek darbede düelloyu kazanın!"
      ],
      "result": "Mezarlık malzemeleriyle bedavaya çağrılan 10.000 ATK gücündeki Kaos İblisi ile rakibe tek vuruşta oyun kazandıran yıkıcı kombo."
    },
    {
      "id": "aeg-13",
      "title": "Örnek Kombo 13: Egyptian God's Knight & Disciple ile Çift Dokunulmaz Tanrı Çağrısı",
      "cardsNeeded": [
        "Egyptian God's Knight",
        "Prayers to the Egyptian Gods (veya Elde 1 Tanrı Kartı)"
      ],
      "sequence": [
        "Egyptian God's Knight",
        "Egyptian Gods' Disciple",
        "Prayers to the Egyptian Gods",
        "Obelisk The Tormentor GOD",
        "Slifer The Sky Dragon GOD"
      ],
      "difficulty": "Orta / Hızlı Kurulum",
      "steps": [
        "\"Egyptian God's Knight\"ı sahaya Normal Çağırın; tetiklenen efektiyle destenizden doğrudan \"Egyptian Gods' Disciple\"ı Savunma Konumunda sahaya Özel Çağırın.",
        "Disciple sahaya indiğinde destenizden \"Prayers to the Egyptian Gods\" büyüsünü kapalı koyar ve desteden 1 İLAHİ Tanrı (Obelisk) arar.",
        "\"Prayers to the Egyptian Gods\" büyüsünü hemen çalıştırın: Desteden 2. Tanrıyı (Slifer) elinize ekleyin ve bu tur fazladan 1 Tanrı Normal Çağrı hakkı kazanın.",
        "Sahadaki \"Egyptian Gods' Disciple\" tek başına 3 Feda yerine sayılır! Disciple'ı feda ederek \"Obelisk The Tormentor GOD\"ı sahaya indirin.",
        "Sahanızdaki \"Egyptian God's Knight\"ın Hızlı Efektini çalıştırarak kendisini feda edin: Tanrılarınıza +1000 ATK verin ve anında 2. Normal Çağrınızı yaparak \"Slifer The Sky Dragon GOD\"ı sahaya indirin!",
        "Prayers büyüsü sayesinde Tanrılarınız rakip canavar efektlerinden, GOD formları sayesinde de büyü ve tuzaklardan tamamen etkilenmez!"
      ],
      "result": "Tek turda sahaya inen, hem canavar hem büyü hem tuzak efektlerine karşı tamamen dokunulmaz çift Mısır Tanrısı ordusu."
    },
    {
      "id": "aeg-14",
      "title": "Örnek Kombo 14: Egyptian God Guardian & Anger ile Rakip Turunda Sürpriz Temizlik ve Karşı Taarruz",
      "cardsNeeded": [
        "Egyptian God Guardian",
        "1 DIVINE Tanrı Kartı (Desteden veya Elden)"
      ],
      "sequence": [
        "Egyptian God Guardian",
        "Slifer The Sky Dragon GOD",
        "Egyptian God's Anger",
        "Egyptian God Servant Token"
      ],
      "difficulty": "Kolay / Reaktif Savunma",
      "steps": [
        "Elinizdeki \"Egyptian God Guardian\"ın tetikleyici efektini çalıştırın: Desteden 1 Mısır Tanrısını (Slifer veya Ra) doğrudan mezara göndererek Guardian'ı 3000 DEF ile sahaya Özel Çağırın.",
        "Guardian çağrıldığında tetiklenen efektiyle destenizden doğrudan \"Egyptian God's Anger\" tuzağını sahaya kurar ve bu tur açılabilir yapar.",
        "Rakip turunda rakip canavarlarını çağırıp taarruza geçerken \"Egyptian God's Anger\" tuzağını açın: Sahada ve mezarlığınızdaki Tanrı sayısı kadar rakip kartını seçip yok edin!",
        "Anger'ın ikincil efektiyle sahaya 2 adet \"Egyptian God Servant Token\" çağırın; böylece bir sonraki tur için fedalarınız hazır olur.",
        "Rakip kritik bir kart veya efekt açtığında mezardaki \"Egyptian God Guardian\"ı oyundan çıkararak rakibin o efektini derhal iptal edin (Quick Negate)."
      ],
      "result": "Rakibin hamlesini bölen, sahasını temizleyen, efektini iptal eden ve sonraki tur için 3 feda sağlayan kusursuz reaktif savunma."
    },
    {
      "id": "aeg-15",
      "title": "Örnek Kombo 15: 1-2 Turda 3 Mısır Tanrısı (Slifer + Obelisk + Ra) ve Holactie ile Anında Galibiyet",
      "cardsNeeded": [
        "Egyptian God's Knight",
        "Prayers to the Egyptian Gods (veya Disciple)",
        "The Immortal Sun God (veya Hall to Darkness)"
      ],
      "sequence": [
        "Egyptian God's Knight",
        "Egyptian Gods' Disciple",
        "Prayers to the Egyptian Gods",
        "Obelisk The Tormentor GOD",
        "Slifer The Sky Dragon GOD",
        "The Sun God Leading Down into Darkness",
        "The Immortal Sun God",
        "The Winged Dragon of Ra GOD",
        "Holactie the Creator of Light"
      ],
      "difficulty": "İleri Seviye / Otomatik Galibiyet",
      "steps": [
        "\"Egyptian God's Knight\"ı Normal Çağırın -> Desteden doğrudan \"Egyptian Gods' Disciple\"ı Özel Çağırın.",
        "Disciple sahaya indiğinde desteden \"Prayers to the Egyptian Gods\" büyüsünü kurar ve 1. Tanrıyı (\"Obelisk The Tormentor GOD\") elinize ekler.",
        "\"Prayers to the Egyptian Gods\"ı aktifleştirin: Desteden 2. Tanrıyı (\"Slifer The Sky Dragon GOD\") arayın ve fazladan 1 İLAHİ Normal Çağrı hakkı kazanın.",
        "Disciple tek başına 3 Feda sayılır: Disciple'ı feda ederek \"Obelisk The Tormentor GOD\"ı sahaya Normal Çağırın.",
        "Sahadaki \"Egyptian God's Knight\"ı feda ederek ek Feda Çağrısı açın ve sahanızdaki tokenlar/fedalar ile \"Slifer The Sky Dragon GOD\"ı 2. Tanrı olarak sahaya indirin.",
        "\"The Sun God Leading Down into Darkness\" (veya Egyptian God Guardian) ile desteden 3. Tanrı \"The Winged Dragon of Ra GOD\"ı doğrudan mezarlığa gönderin.",
        "Hızlı Büyü \"The Immortal Sun God\"ı çalıştırın: Çağırma koşullarını yok sayarak mezarlıktaki \"The Winged Dragon of Ra GOD\"ı sahaya Özel Çağırın!",
        "Sahada 3 Mısır Tanrısı (Slifer, Obelisk, Ra) aynı anda toplandığında elinizdeki \"Holactie the Creator of Light\" canavarını 3 Tanrıyı feda ederek çağırın: OYUNU ANINDA KAZANIN!"
      ],
      "result": "En geç 2. turda 3 asıl Mısır Tanrısını (Slifer, Obelisk, Ra) aynı anda sahaya süren ve Holactie ile koşulsuz anında düello zaferi kazandıran nihai antik kombo."
    },
    {
      "id": "aeg-16",
      "title": "Anti-Toon Rehberi 1: Steelcage Lava Golem & Soul Crossing ile Dokunulmaz Toon Tanrılarını Feda Etme",
      "cardsNeeded": [
        "The Sun God's Steelcage - Lava Golem (Ekstra Deste)",
        "Soul Crossing (veya 1 Sun God canavarı)"
      ],
      "sequence": [
        "The Sun God's Destructor - Makyura",
        "The Sun God's Steelcage - Lava Golem",
        "Soul Crossing",
        "Obelisk The Tormentor GOD"
      ],
      "difficulty": "Kolay / Kural Üstünlüğü",
      "steps": [
        "Rakibiniz \"Toon World the Perfect World\" açıp arkasına Toon Obelisk veya Toon Slifer gibi canavarlar koyduğunda panik yapmayın: Perfect World sadece KART EFEKTLERİNE karşı koruma sağlar, OYUN KURALI MALİYETLERİNE (Cost / Tribute) karşı asla koruyamaz!",
        "Sahanızdaki 1 Sun God canavarı ile rakibin sahasındaki o 2 dokunulmaz Toon Tanrısını doğrudan mezara göndererek Ekstra Destenizden \"The Sun God's Steelcage - Lava Golem\"ı rakip sahaya çağırın!",
        "Bu çağırma bir kart efekti değil, kural gereği malzeme gönderme prosedürü olduğu için Perfect World'ün dokunulmazlığı TAMAMEN GEÇERSİZ KALIR ve rakibin patron canavarları anında mezara gider.",
        "Alternatif olarak rakip turunda \"Soul Crossing\" Hızlı Büyüsünü açın: Rakibin sahasındaki 3 dokunulmaz Toon canavarını kendi canavarlarınız gibi feda ederek kendi Mısır Tanrınızı sahaya indirin!",
        "Rakip sahadaki Lava Golem sayesinde hem canavarlarını kaybeder hem de her hazırlık aşamasında 1000 hasar alır."
      ],
      "result": "Kusursuz korumaya sahip Toon Tanrılarını kural feda maliyetiyle doğrudan mezara gömen ve Toon taarruzunu anında bitiren kesin çözüm."
    },
    {
      "id": "aeg-17",
      "title": "Anti-Toon Rehberi 2: Uria & Cerulean Skyfire ile 'Perfect World'ü Yanıtsız Yok Etme",
      "cardsNeeded": [
        "Inferno of the Sacred Beasts - Uria, Lord of Searing Flames",
        "Cerulean Skyfire (veya Hamon)"
      ],
      "sequence": [
        "Hamon, Lord of Striking Thunder",
        "Cerulean Skyfire",
        "Inferno of the Sacred Beasts - Uria, Lord of Searing Flames",
        "The Winged Dragon of Ra - Rusty Black"
      ],
      "difficulty": "Kolay / Reaktif Çözüm",
      "steps": [
        "\"Toon World the Perfect World\" Toon canavarlarını korur, ancak KENDİSİNİ KORUYAN HİÇBİR EFEKTİ YOKTUR! Saha büyüsü gittiği an rakibin tüm Toon ordusu savunmasız kalır ve doğrudan saldıramaz.",
        "Sahada Hamon varken \"Cerulean Skyfire\" sürekli büyüsünü açık tutun: Rakip Perfect World'ü açtığı an ilk büyü efekti olarak Skyfire tarafından otomatikman iptal edilir ve yok edilir!",
        "Sahada zaten Perfect World varsa, elinizdeki \"Inferno of the Sacred Beasts - Uria\" canavarının Hızlı Efektini çalıştırın: Perfect World'ü hedef alıp yok edin! Bu efektin çalışmasına karşı hiçbir oyuncu kart/efekt etkinleştiremez (Rakip Toon Terror ile bile yanıt veremez!).",
        "Alternatif olarak \"The Winged Dragon of Ra - Rusty Black\"e 500 LP ödeyin: Perfect World'ü yok etmeden doğrudan Mezarlığa gönderin.",
        "Saha büyüsü parçalandığı an sahadaki Mısır Tanrılarınızla (Obelisk, Slifer, Ra) korumasız kalan Toon canavarlarını silip geçin."
      ],
      "result": "Toon destesini ayakta tutan Perfect World temel taşını rakibe yanıt şansı bırakmadan parçalayan ve tüm Toon stratejisini yerle bir eden taktik."
    },
    {
      "id": "aeg-18",
      "title": "Örnek Kombo 18: The Sun God of Darkness - The Winged Dragon of Ra: Destructor Makyura & Immortal Sun God ile 1. Turda Karanlık Ra Çağrısı",
      "cardsNeeded": [
        "The Sun God Leading Down into Darkness",
        "The Sun God's Destructor - Makyura"
      ],
      "sequence": [
        "The Sun God Leading Down into Darkness",
        "The Winged Dragon of Ra GOD",
        "The Sun God's Destructor - Makyura",
        "The Immortal Sun God",
        "The Sun God of Darkness - The Winged Dragon of Ra"
      ],
      "difficulty": "Orta / 1. Tur Patronu",
      "steps": [
        "\"The Sun God Leading Down into Darkness\" Sürekli Büyüsünü aktifleştirin: Büyünün aktivasyon koşulu (cost) gereği destenizden veya elinizden 1 \"The Winged Dragon of Ra GOD\"ı doğrudan Mezarlığa gönderin.",
        "Büyü açıldığı an tetiklenen arama efekti devreye girer: Destenizden \"The Sun God's Destructor - Makyura\" canavarını elinize ekleyin.",
        "\"The Sun God's Destructor - Makyura\"yı sahaya Normal Çağırın: Makyura'nın sahaya inişte tetiklenen efekti sayesinde destenizden \"The Immortal Sun God\" Hızlı Büyüsünü sahaya kapalı koyun ve Makyura'nın özel kuralı sayesinde bu kartı AYNI TUR ÇALIŞTIRILABİLİR hale getirin!",
        "Sahaya kurduğunuz \"The Immortal Sun God\" Hızlı Büyüsünü derhal aktifleştirin: Büyünün 1. efektiyle Mezarlığınızdaki \"The Winged Dragon of Ra GOD\"ı çağırma koşullarını yok sayarak Özel Çağırın; ardından kart metnindeki ikincil efekt gereği sahaya inen Ra'yı mezara gönderip Ekstra Destenizden \"The Sun God of Darkness - The Winged Dragon of Ra\"yı doğrudan sahaya indirin!",
        "Karanlık Ra sahaya indiğinde, mezarlığınızdaki her \"Sun God\" canavarı için kalıcı 1000 ATK/DEF kazanır; turda 1 kez 1000 LP ödeyerek rakibin en kritik kartını hedef almadan mezara yollayabilir ve rakip efektlerine karşı mezardan Sun God kartı sürgün ederek iptal (negate) sağlayabilirsiniz."
      ],
      "result": "1. turdan sahaya inen, hedef almadan rakip kartı silen, rakip efektlerini iptal edebilen ve öldüğünde mezardan ölümsüz Ra dirilten devasa Karanlık Güneş Tanrısı."
    },
    {
      "id": "aeg-19",
      "title": "Örnek Kombo 19: The Sun God of Darkness - The Winged Dragon of Ra: Super Polymerization & Steelcage Lava Golem ile Yanıtsız Füzyon",
      "cardsNeeded": [
        "Super Polymerization",
        "The Winged Dragon of Ra GOD (Sahada)",
        "The Sun God's Steelcage - Lava Golem (Ekstra Deste)"
      ],
      "sequence": [
        "The Winged Dragon of Ra GOD",
        "The Sun God's Steelcage - Lava Golem",
        "Super Polymerization",
        "The Sun God of Darkness - The Winged Dragon of Ra"
      ],
      "difficulty": "Orta / Yanıtsız Baskın",
      "steps": [
        "\"The Sun God of Darkness - The Winged Dragon of Ra\"nın orijinal füzyon malzemesi: '\"The Winged Dragon of Ra\" + 1 veya daha fazla \"Sun God\" canavarı'dır.",
        "Sahanızdaki 1 Sun God canavarı ile rakibin 2 canavarını mezara göndererek \"The Sun God's Steelcage - Lava Golem\"ı rakip sahaya kilitleyin (Feda kuralıyla dokunulmazlıkları ezer).",
        "Sahanızda Ra varken elinizdeki \"Super Polymerization\" Hızlı Büyüsünü aktifleştirin: Elinizden 1 kart atın.",
        "Super Polymerization'ın kuralı gereği bu kartın aktivasyonuna hiçbir oyuncu kart veya efekt zincirleyemez (Rakip hiçbir şekilde yanıt veremez!).",
        "Sahanızdaki \"The Winged Dragon of Ra GOD\" ile rakibin sahasındaki \"The Sun God's Steelcage - Lava Golem\" (Sun God canavarı) malzemelerini birleştirerek Ekstra Destenizden \"The Sun God of Darkness - The Winged Dragon of Ra\"yı çağırın!",
        "Rakip sahadaki tüm tehditler temizlenir ve Karanlık Ra yüksek saldırı gücüyle boş sahaya doğrudan hücum eder."
      ],
      "result": "Rakibin zincirleme yanıt vermesini tamamen engelleyen, rakip sahasındaki Lava Golem'i eritip kendi nihai Karanlık Tanrınıza dönüştüren kusursuz süper füzyon baskını."
    },
    {
      "id": "aeg-20",
      "title": "Örnek Kombo 20: The Sun God of Darkness - The Winged Dragon of Ra: Poet Helpoemer & Gil Garth ile Sonsuz Mezarlık Döngüsü ve OTK",
      "cardsNeeded": [
        "The Sun God's Poet - Helpoemer",
        "The Sun God's Terror Machine - Gil Garth"
      ],
      "sequence": [
        "The Sun God's Poet - Helpoemer",
        "The Sun God Leading Down into Darkness",
        "The Sun God's Terror Machine - Gil Garth",
        "The Immortal Sun God",
        "The Sun God of Darkness - The Winged Dragon of Ra"
      ],
      "difficulty": "Orta / Sonsuz Kaynak",
      "steps": [
        "Elinizdeki \"The Sun God's Poet - Helpoemer\"ın Özel Çağrı efektini çalıştırın: Elinizden 1 kart atarak Poet'i sahaya Özel Çağırın.",
        "Poet Özel Çağrıldığında tetiklenen arama efekti çalışır: Destenizden \"The Sun God Leading Down into Darkness\" Sürekli Büyüsünü elinize ekleyin (ayrıca rakibin LP'si fazlaysa rakibin elinden 1 rastgele kart mezara atılır).",
        "Sahada açık bir 'Sun God' kartı (Poet) bulunduğu için, elinizdeki \"The Sun God's Terror Machine - Gil Garth\"ın kendi kuralı devreye girer: Gil Garth'ı elden bedelsiz Özel Çağırın.",
        "Gil Garth'ın efektini çalıştırarak kendisini feda edin: Destenizden \"The Winged Dragon of Ra GOD\"ı doğrudan Mezarlığa gönderin ve rakip mezarındaki en kritik kartı destenin en altına postalayın.",
        "\"The Sun God Leading Down into Darkness\" ile aradığınız \"The Immortal Sun God\" büyüsünü çalıştırarak mezardaki Ra'yı Ekstra Desteden \"The Sun God of Darkness - The Winged Dragon of Ra\"ya dönüştürün!",
        "Turun Son Aşamasında mezara giden 'The Immortal Sun God' sayesinde mezarlıktaki Helpoemer ve Gil Garth'ın döngüsel efekti tetiklenir: Her iki canavar da mezarlıktan tekrar elinize geri döner!"
      ],
      "result": "Mezarlıktan sonsuz kaynak geri dönüşü sağlayan, rakibin mezarını bozan ve 4000+ ATK Karanlık Ra'yı sahaya kuran avantaj kombosu."
    },
    {
      "id": "aeg-21",
      "title": "Örnek Kombo 21: The Sun God of Darkness - The Winged Dragon of Ra: Protector Slime & Reign of the Sun God ile Rakibin Tüm Sahasını Çalma",
      "cardsNeeded": [
        "The True Sun God",
        "Protector of the Sun God, Egyptian God Slime",
        "The Immortal Sun God"
      ],
      "sequence": [
        "The True Sun God",
        "Protector of the Sun God, Egyptian God Slime",
        "The Winged Dragon of Ra GOD",
        "The Immortal Sun God",
        "The Sun God of Darkness - The Winged Dragon of Ra",
        "Reign of the Sun God"
      ],
      "difficulty": "İleri Seviye / Mutlak Hakimiyet",
      "steps": [
        "\"The True Sun God\" Sürekli Büyüsünü aktifleştirin; açılış efektiyle destenizden \"The Winged Dragon of Ra GOD\"ı arayın ve elinize ekleyin.",
        "\"Protector of the Sun God, Egyptian God Slime\" tuzağını açıp sahaya 3000 DEF Canavar olarak Özel Çağırın (İlahi-Canavarlar için tek başına 3 Feda sayılır!).",
        "Slime'ı feda ederek elinizdeki \"The Winged Dragon of Ra GOD\"ı sahaya Normal Çağırın.",
        "\"The Immortal Sun God\" Hızlı Büyüsünü aktifleştirin: Ra'yı Ekstra Destenizden doğrudan \"The Sun God of Darkness - The Winged Dragon of Ra\"ya evrimleştirin!",
        "Sahada Ra varken set ettiğiniz \"Reign of the Sun God\" tuzağını aktifleştirin: İki oyuncunun mezarlığından birer canavarı diriltin ve RAKİBİN KONTROL ETTİĞİ TÜM CANAVARLARIN KONTROLÜNÜ ÇALIN!",
        "Sahadaki Karanlık Ra'nın Hızlı Efektiyle 1000 LP ödeyip sahadaki kalan herhangi bir kartı mezara yollayın; rakip hamle yaptığında mezardan Sun God sürgün edip o hamleyi iptal edin."
      ],
      "result": "Rakibin tüm taarruzunu durduran, sahasındaki tüm canavarları çalan ve Karanlık Ra ile oyunu kilitleyen mutlak hakimiyet kombosu."
    },
    {
      "id": "aeg-22",
      "category": "TOON Vs.",
      "title": "TOON Vs. 1: 'Toon World the Perfect World' Sihir Kartını Yanıtsız Parçalama ve Yok Etme",
      "cardsNeeded": [
        "Inferno of the Sacred Beasts - Uria, Lord of Searing Flames",
        "Cerulean Skyfire",
        "Lightning Storm",
        "The Winged Dragon of Ra - Rusty Black"
      ],
      "sequence": [
        "Lightning Storm",
        "Cerulean Skyfire",
        "Inferno of the Sacred Beasts - Uria, Lord of Searing Flames",
        "The Winged Dragon of Ra - Rusty Black"
      ],
      "difficulty": "Kolay / Büyü İmha Taktikleri",
      "steps": [
        "\"Toon World the Perfect World\" Saha Büyüsü Toon canavarlarını kart efektlerine ve savaşa karşı dokunulmaz kılar; ANCAK bu kartın KENDİSİNİ hedef alınmaktan veya yok edilmekten koruyan hiçbir koruması yoktur! Bu saha büyüsü sahadan kalktığı an rakibin tüm Toon canavarları savunmasız kalır ve doğrudan saldıramaz.",
        "YÖNTEM 1 (Yanıtsız Yok Etme - Uria): Elinizdeki veya sahanızdaki \"Inferno of the Sacred Beasts - Uria, Lord of Searing Flames\" canavarının Hızlı Efektini çalıştırın ve rakibin \"Toon World the Perfect World\" kartını hedef alıp yok edin. Uria'nın kural metni gereği: \"Bu kartın aktivasyonuna ve efektine karşı hiçbir oyuncu kart ya da efekt etkinleştiremez.\" Bu sayede rakip sahada Toon Terror dahil ne olursa olsun kesinlikle yanıt veremez ve Perfect World anında patlar!",
        "YÖNTEM 2 (Önleyici İptal - Cerulean Skyfire): Sahada \"Hamon, Lord of Striking Thunder\" varken \"Cerulean Skyfire\" sürekli büyüsünü açık tutun. Rakip \"Toon World the Perfect World\"ü oynadığı an, turdaki ilk büyü kartı/efekti olarak Skyfire tarafından otomatikman iptal edilir (negate) ve mezara gönderilir. Rakip büyüsünü sahaya oturtamaz bile!",
        "YÖNTEM 3 (Toplu Büyü Temizliği - Lightning Storm): Sahanızda açık kart yoksa \"Lightning Storm\"u oynayın ve Rakibin Büyü/Tuzak kartlarını seçin. Perfect World ve arkasındaki tüm Toon tuzakları (Toon Terror dahil) topluca yok olur.",
        "YÖNTEM 4 (Doğrudan Mezara Gönderme - Rusty Black): \"The Winged Dragon of Ra - Rusty Black\" sahadayken 500 LP ödeyin: Perfect World'ü \"yok etme\" şartına takılmadan doğrudan Mezarlığa gönderin."
      ],
      "result": "Toon destesini ayakta tutan \"Toon World the Perfect World\" temel taşını rakibe yanıt şansı bırakmadan parçalayan ve tüm Toon ordusunu korumasız bırakan kesin büyü imha rehberi."
    },
    {
      "id": "aeg-23",
      "category": "TOON Vs.",
      "title": "TOON Vs. 2: Perfect World Sahadayken Dokunulmaz Toon Canavarlarını Feda & Kural ile Yok Etme",
      "cardsNeeded": [
        "The Sun God's Steelcage - Lava Golem",
        "Soul Crossing",
        "Super Polymerization"
      ],
      "sequence": [
        "The Sun God's Destructor - Makyura",
        "The Sun God's Steelcage - Lava Golem",
        "Soul Crossing",
        "Obelisk The Tormentor GOD",
        "Super Polymerization"
      ],
      "difficulty": "Orta / Kural & Feda Üstünlüğü",
      "steps": [
        "Rakibin sahasında \"Toon World the Perfect World\" açıkken Toon canavarları kart efektlerinden etkilenmez ve savaşta yok edilemez. Ancak Yu-Gi-Oh resmi kurallarına göre: \"OYUN KURALI FEDA MALİYETLERİ (Cost / Tribute), KART EFEKTİ DOKUNULMAZLIĞINI TAMAMEN DELER!\" Dokunulmaz bir canavar feda edilmeye karşı asla korunamaz.",
        "YÖNTEM 1 (Lava Golem ile Eritme): Ekstra Destenizden \"The Sun God's Steelcage - Lava Golem\" çağrısını yapın: Sahanızdaki 1 Sun God canavarı ile RAKİBİN o dokunulmaz 2 Toon canavarını (Toon Obelisk, Toon Slifer, Toon Dark Magician vb.) mezara göndererek rakip sahaya Özel Çağırın! Bu çağırma kart efekti değil çağırma kural prosedürü olduğu için Perfect World hiçbir şey yapamaz ve rakibin dokunulmaz canavarları mezara gider. Üstelik Lava Golem her tur rakibe 1000 hasar verir.",
        "YÖNTEM 2 (Soul Crossing ile Tanrı İndirme): Rakip turunda veya kendi turunuzda \"Soul Crossing\" Hızlı Büyüsünü açın: Rakibin sahasındaki 3 adet dokunulmaz Toon canavarını feda ederek elinizden \"Obelisk The Tormentor GOD\", \"Slifer The Sky Dragon GOD\" veya \"The Winged Dragon of Ra GOD\" indirin! Dokunulmaz Toon canavarları feda kuralıyla sahadan silinir ve yerlerine kudretli Mısır Tanrınız kurulur.",
        "YÖNTEM 3 (Super Polymerization ile Yanıtsız Füzyon): \"Super Polymerization\" Hızlı Büyüsünü etkinleştirin. Rakibin canavarlarını füzyon materyali olarak kullanıp sahadan mezara gönderin; rakip hiçbir kartla yanıt veremez."
      ],
      "result": "Perfect World sahadayken bile rakibin dokunulmaz Toon canavarlarını kural ve feda gücüyle doğrudan mezara gömüp sahayı temizleyen nihai çözüm."
    },
    {
      "id": "aeg-24",
      "category": "TOON Vs.",
      "title": "TOON Vs. 3: Rakibin 'Toon Terror' Karşı Tuzağını Baypas Etme, Yemleme ve Kilitleme Taktikleri",
      "cardsNeeded": [
        "Super Polymerization",
        "Dark Beckoning Beast",
        "Soul Crossing",
        "Cerulean Skyfire"
      ],
      "sequence": [
        "Cerulean Skyfire",
        "Dark Beckoning Beast",
        "Super Polymerization",
        "Soul Crossing"
      ],
      "difficulty": "İleri / Karşı Hamle ve Zincir Yönetimi",
      "steps": [
        "\"Toon Terror\" (Toon Terörü) kartı bir Karşı Tuzaktır (Counter Trap - Hız 3): Sahada Toon World varken sizin bir büyü, tuzak veya canavar efektinizi iptal edip yok eder. Turda 1 kez kullanılabilir. Bu tuzağı aşmanın 4 kesin stratejisi vardır:",
        "STRATEJİ 1 (Zincirlenemez Kartlarla Baypas): \"Super Polymerization\" veya \"Inferno of the Sacred Beasts - Uria, Lord of Searing Flames\" kartlarının efektlerine hiçbir oyuncu kart veya efekt zincirleyemez kuralı vardır. Rakibin sahasında kapalı Toon Terror olsa dahi Karşı Tuzak BİLE AÇAMAZ; kilitlenir ve hamlenizi durduramaz!",
        "STRATEJİ 2 (Tribute Kuralı ile Baypas): \"The Sun God's Steelcage - Lava Golem\" çağırmak zincir başlatan bir kart aktivasyonu değildir; oyun kuralı çağırmasıdır. Toon Terror yalnızca kart/efekt aktivasyonlarına tetiklendiği için Lava Golem sahaya inerken rakip Toon Terror'ü açamaz; canavarları gözünün önünde feda edilir!",
        "STRATEJİ 3 (Yemleme / Baiting): Rakibin tek bir Toon Terror hakkı vardır. Elinizdeki ikincil kartları (\"Dark Beckoning Beast\" arama efekti, \"Sacred Beasts Released\" veya \"Joker's Straight\") ilk hamle olarak öne sürün. Rakip telaşla Toon Terror'ü bu yem karta harcadığında, asıl ölümcül kartınızı (\"Soul Crossing\", \"Lightning Storm\" veya \"The Immortal Sun God\") arkasından güvenle oynayın!",
        "STRATEJİ 4 (Toon World'ü Önceden Düşürerek Şartı Bozma): Toon Terror'ün çalışması için rakibin sahada \"Toon World\" kontrol etmesi zorunludur. Eğer \"Cerulean Skyfire\" ile rakip Toon World'ü açtığı anda iptal ederseniz veya Uria ile yok ederseniz, rakibin sahadaki kapalı Toon Terror'ü aktivasyon şartını kaybeder ve tamamen işlevsiz (ölü kart) kalır!"
      ],
      "result": "Rakibin en güçlü savunma tuzağı olan Toon Terror'ü kurallarla felç eden, yemleyerek harcatan veya şartını bozarak etkisiz bırakan taktiksel rehber."
    },
    {
      "id": "aeg-25",
      "category": "TOON Vs.",
      "title": "TOON Vs. 4: Slifer the Sky Dragon & Cerulean Skyfire ile Toon Sahasını Sürekli İnfaz ve Kilit Altına Alma",
      "cardsNeeded": [
        "Slifer The Sky Dragon GOD",
        "Cerulean Skyfire",
        "Hamon, Lord of Striking Thunder",
        "Awakening of the Sacred Beasts"
      ],
      "sequence": [
        "Hamon, Lord of Striking Thunder",
        "Cerulean Skyfire",
        "Slifer The Sky Dragon GOD",
        "Awakening of the Sacred Beasts"
      ],
      "difficulty": "Orta / Tam Saha Kilidi",
      "steps": [
        "Rakip Toon destesi sahaya canavar çağırmaya ve sürekli arama büyüsü yapmaya mecburdur. Bu mekanizmayı iki kartla felç edin:",
        "SLIFER İNFAZ ETKİSİ: Sahaya \"Slifer The Sky Dragon GOD\" indirin. Slifer sahada açıkken rakip ne zaman bir canavar çağırsa (Özel veya Normal), Slifer o canavarın ATK'sini anında 2000 puan düşürür; eğer ATK 0 olursa o canavar HEMEN YOK EDİLİR! Toon Harpie Lady, Toon Mermaid, Toon Cannon Soldier ve Toon Dark Magician Girl gibi kritik Toon canavarları sahaya ayak bastıkları anda 0 ATK olup anında patlar!",
        "SKYFIRE BÜYÜ KİLİDİ: Sahada Hamon varken \"Cerulean Skyfire\" açık kalsın. Rakibin Toon Bookmark, Toon Table of Contents veya Toon World açma girişimleri turda bir kez otomatikman yok edilir.",
        "AWAKENING KİLİDİ: Sahada 2 farklı Kutsal Canavar varken \"Awakening of the Sacred Beasts\" açık olursa, rakibin sahaya çağırdığı canavarların efektleri otomatik olarak geçersiz kılınır."
      ],
      "result": "Rakibin Toon çağırma motorunu sahaya çıktığı anda imha eden, büyü aramalarını Skyfire ile kesen ve Toon destesini kımıldayamaz hale getiren mutlak kontrol."
    }
  ],
  "blue-eyes": [
    {
      "id": "be-1",
      "title": "Örnek Kombo 1: Sage with Eyes of Blue ile Hızlı Mavi Gözlü Çağrısı",
      "cardsNeeded": [
        "Sage with Eyes of Blue",
        "The White Stone of Ancients (veya The White Stone of Legend)"
      ],
      "sequence": [
        "Sage with Eyes of Blue",
        "Blue-Eyes White Dragon",
        "Monster Reborn"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Sage with Eyes of Blue\" canavarını Normal Çağırın: Sahaya indiğinde tetiklenen efektiyle destenizden Seviye 1 IŞIK Büyücüsü (\"The White Stone of Ancients\") arayıp elinize ekleyin.",
        "Sage'in sahadaki canavarı mezara göndererek çalışan 2. efektini kullanın: Sahanızdaki bir canavarı mezara gönderip desteden doğrudan 3000 ATK'lik \"Blue-Eyes White Dragon\"ı sahaya Özel Çağırın.",
        "Mezara giden \"The White Stone of Ancients\"ın Son Aşamadaki (End Phase) tetikleme efekti devreye girer: Destenizden 2. bir \"Blue-Eyes White Dragon\"ı bedelsiz sahaya Özel Çağırın."
      ],
      "result": "Tek bir kartla sahaya 1 turda iki adet 3000 ATK devasa Mavi Gözlü ejderha dizilimi."
    },
    {
      "id": "be-2",
      "title": "Örnek Kombo 2: The Melody of Awakening Dragon ile Alternative Dragon",
      "cardsNeeded": [
        "The Melody of Awakening Dragon",
        "Elde atılacak 1 kart"
      ],
      "sequence": [
        "The Melody of Awakening Dragon",
        "Blue-Eyes White Dragon",
        "Blue-Eyes Alternative White Dragon"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"The Melody of Awakening Dragon\" büyüsünü çalıştırın ve maliyet (cost) olarak elinizden 1 kartı mezara gönderin.",
        "Melody'nin arama efektiyle destenizden tam 2 adet 3000 ATK Ejderha (\"Blue-Eyes White Dragon\" ve \"Blue-Eyes Alternative White Dragon\") seçip elinize ekleyin.",
        "Elinizdeki \"Blue-Eyes White Dragon\"ı rakibe göstererek Alternative Dragon'un özel çağırma kuralını uygulayın: \"Blue-Eyes Alternative White Dragon\"ı bedelsiz Özel Çağırın.",
        "Alternative Dragon'un ateşleme efektini (Ignition) kullanarak rakibin kontrolündeki 1 canavarı anında hedef alıp patlatın."
      ],
      "result": "Tek kartla el yenileyen, sahaya bedelsiz 3000 ATK indiren ve rakip canavarı imha eden temel Mavi Gözlü kombosu."
    },
    {
      "id": "be-3",
      "title": "Örnek Kombo 3: Blue-Eyes Spirit Dragon ile Rakip Mezarlığını Kilitleme",
      "cardsNeeded": [
        "Blue-Eyes White Dragon (Seviye 8)",
        "Sage with Eyes of Blue veya Effect Veiler (Seviye 1 Tuner)"
      ],
      "sequence": [
        "Sage with Eyes of Blue",
        "Blue-Eyes White Dragon",
        "Blue-Eyes Spirit Dragon",
        "Azure-Eyes Silver Dragon"
      ],
      "difficulty": "Orta",
      "steps": [
        "Sahadaki Seviye 8 \"Blue-Eyes White Dragon\" ile Seviye 1 Tuner'ı birleştirerek Seviye 9 Synchro Çağrısı yapın: \"Blue-Eyes Spirit Dragon\"!",
        "Spirit Dragon sahada açık kaldığı sürece sürekli kuralı gereği: Hiçbir oyuncu aynı anda 2 veya daha fazla canavarı Özel Çağıramaz (Sarkaç ve çoklu çağrılara karşı tam kilit!).",
        "Rakip mezarlıktan bir kart efekti çalıştırmaya kalktığında Spirit Dragon'un Hızlı Efektini tetikleyin: O aktivasyonu anında iptal edip geçersiz kılın.",
        "Rakip bu karta tuzak veya büyü açtığında, Spirit Dragon'un kaçış Hızlı Efektiyle kendisini feda edin: Ekstra Destenizden \"Azure-Eyes Silver Dragon\"ı Savunma Konumunda sahaya Özel Çağırın; Azure-Eyes indiğinde tüm ejderhalarınız sonraki turun sonuna kadar kart efektleriyle yok edilemez ve hedef alınamaz hale gelir!"
      ],
      "result": "Rakibin mezar hamlelerini ve çoklu çağrılarını kilitleyen, kaçış efektiyle tüm ejderhalarınıza tam dokunulmazlık veren kalkan."
    },
    {
      "id": "be-4",
      "title": "Örnek Kombo 4: Neo Blue-Eyes Ultimate Dragon ile 3 Kere Vurarak OTK",
      "cardsNeeded": [
        "3 \"Blue-Eyes White Dragon\" (veya Polymerization)"
      ],
      "sequence": [
        "Blue-Eyes White Dragon",
        "Polymerization",
        "Neo Blue-Eyes Ultimate Dragon"
      ],
      "difficulty": "Kolay / Güçlü Bitiriş",
      "steps": [
        "\"Polymerization\" ile 3 adet Blue-Eyes White Dragon'ı birleştirerek Ekstra Destenizden \"Neo Blue-Eyes Ultimate Dragon\"ı Fusion Çağırın (4500 ATK).",
        "Savaş Aşamasına geçip ilk saldırınızı ilan edin.",
        "Hasar Adımının sonunda sahanızdaki tek açık kart bu ise tetiklenen efekti devreye sokun: Ekstra Destenizden 1 \"Blue-Eyes\" Fusion canavarını mezara göndererek arka arkaya 2 kez daha saldırın (Toplam 3 saldırı = 13.500 hasar!).",
        "Mezarlıktaki Neo Ultimate, ilerleyen turlarda sizin Mavi Gözlü ejderhalarınızı hedef alan efektleri kendisini oyundan çıkararak tamamen iptal eder (Quick Negate)."
      ],
      "result": "4500 ATK ile tek turda 3 kez saldırıp oyunu bitiren devasa nihai füzyon saldırısı."
    },
    {
      "id": "be-5",
      "title": "Örnek Kombo 5: Blue-Eyes Chained Dragon & Ultimate Spirit Dragon ile Rakip Saldırısını Kilitleme",
      "cardsNeeded": [
        "Blue-Eyes White Dragon",
        "Blue-Eyes Chained Dragon",
        "Blue-Eyes Ultimate Spirit Dragon"
      ],
      "sequence": [
        "Blue-Eyes White Dragon",
        "Blue-Eyes Chained Dragon",
        "Blue-Eyes Ultimate Spirit Dragon",
        "The Ultimate Creature of Destruction"
      ],
      "difficulty": "Orta / Koruma",
      "steps": [
        "\"Blue-Eyes Chained Dragon\"ı sahaya indirin; sahada bağlı kaldığı sürece rakibin patron canavarlarının saldırmasını ve efekt açmasını zincir kuralıyla engelleyin.",
        "Sahanızdaki ejderhaları birleştirerek Ekstra Desteden \"Blue-Eyes Ultimate Spirit Dragon\"ı sahaya indirin.",
        "\"The Ultimate Creature of Destruction\" tuzağını açarak ejderhanızı tüm rakip kart efektlerine karşı dokunulmaz yapın ve savaştığı her rakip canavarı Hasar Adımında doğrudan yok edin.",
        "Ultimate Spirit Dragon'un mezarlık koruması sayesinde rakip büyü ve tuzak hamleleri tamamen boşa çıkar."
      ],
      "result": "Rakibin saldırılarını zincirleyen, tüm kart efektlerinden etkilenmeyen ve savaşta dokunulmaz nihai ruh ejderhası hattı."
    },
    {
      "id": "be-6",
      "title": "Örnek Kombo 6: Dictator of D. & True Light ile Sınırsız Mavi Gözlü Döngüsü",
      "cardsNeeded": [
        "Dictator of D.",
        "Blue-Eyes White Dragon (Elde veya Desteden)",
        "True Light"
      ],
      "sequence": [
        "Dictator of D.",
        "Blue-Eyes White Dragon",
        "True Light",
        "Blue-Eyes Jet Dragon"
      ],
      "difficulty": "Kolay / Kaynak Avantajı",
      "steps": [
        "Elinizden veya destenizden 1 \"Blue-Eyes White Dragon\"ı mezarlığa göndererek \"Dictator of D.\" canavarını elden bedelsiz Özel Çağırın.",
        "Dictator of D.'nin sahadaki efektini kullanarak elinizden veya mezarlığınızdan başka bir \"Blue-Eyes White Dragon\"ı sahaya fırlatın.",
        "\"True Light\" sürekli tuzağını açın: Her tur desteden/mezardan Mavi Gözlü diriltin veya Mavi Gözlü büyü/tuzağı kurun.",
        "Sahadaki kartınız yok edilmek istendiğinde mezarlıktaki \"Blue-Eyes Jet Dragon\"ın tetikleme efekti devreye girer: Kendisini bedelsiz mezardan Özel Çağırır ve sahadaki TÜM diğer kartlarınızı rakip efektleriyle yok edilmekten korur!"
      ],
      "result": "Sahadaki tüm kartları yıkımdan koruyan Jet Dragon ve her tur bedava 3000 ATK Mavi Gözlü dirilten geçilmez Işık kalesi."
    },
    {
      "id": "be-7",
      "title": "Örnek Kombo 7: Blue-Eyes Dark Dragon & Blue-Eyes Ultimate Dark Dragon ile Mezarlık Yıkımı",
      "cardsNeeded": [
        "Blue-Eyes White Dragon",
        "Blue-Eyes Dark Dragon",
        "Polymerization (veya Fusion Büyüsü)"
      ],
      "sequence": [
        "Blue-Eyes White Dragon",
        "Blue-Eyes Dark Dragon",
        "Polymerization",
        "Blue-Eyes Ultimate Dark Dragon"
      ],
      "difficulty": "Orta / Karanlık Güç",
      "steps": [
        "\"Blue-Eyes Dark Dragon\"ı eldeki şartıyla sahaya indirin; sahadaki ve mezarlıktaki her Ejderha canavarı için ek ATK kazandırın.",
        "\"Polymerization\" kullanarak sahadaki ve elinizdeki Mavi Gözlü ejderhaları birleştirin: Ekstra Destenizden \"Blue-Eyes Ultimate Dark Dragon\"ı Fusion Çağrısıyla çağırın!",
        "Ultimate Dark Dragon sahaya indiğinde tetiklenen efektiyle: Rakibin Mezarlığındaki en kritik canavarları oyundan çıkarın ve çıkarılan canavarların ATK'si kadar rakibe doğrudan yakma hasarı verin!",
        "Karanlık ejderhanın yüksek saldırı gücüyle rakibin zayıflayan savunmasını yerle bir edin."
      ],
      "result": "Mavi Gözlü'nün karanlık formunu sahaya indiren, rakibin mezar kaynaklarını yakıp kül eden ve doğrudan hasar vuran agresif patron kombosu."
    },
    {
      "id": "be-8",
      "title": "Örnek Kombo 8: Blue-Eyes Chained Dragon ile Rakip Saldırısını Kilitleme ve Ultimate Spirit Desteği",
      "cardsNeeded": [
        "Blue-Eyes Chained Dragon",
        "Blue-Eyes White Dragon"
      ],
      "sequence": [
        "Blue-Eyes White Dragon",
        "Blue-Eyes Chained Dragon",
        "Blue-Eyes Ultimate Spirit Dragon"
      ],
      "difficulty": "Kolay / Kontrol",
      "steps": [
        "\"Blue-Eyes White Dragon\" sahada açıkken \"Blue-Eyes Chained Dragon\"ı sahaya sürün.",
        "Chained Dragon'un kilit efektiyle rakibin en tehlikeli saldırgan canavarını zincirleyin: O canavar saldıramaz ve efektlerini çalıştıramaz hale gelir.",
        "İki ejderhayı birleştirerek Ekstra Destenizden \"Blue-Eyes Ultimate Spirit Dragon\"ı sahaya indirin ve tüm sahanızı rakip büyülerine karşı koruma altına alın."
      ],
      "result": "Rakibin ana tehdidini etkisiz kılan ve Mavi Gözlü ordusunu koruyan stratejik kilit kombosu."
    }
  ],
  "magician-god": [
    {
      "id": "mg-1",
      "title": "Örnek Kombo 1: Illusion of Chaos ile Kusursuz Açılış ve Deste Kontrolü",
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
        "Elinizdeki \"Illusion of Chaos\" Ritüel Canavarının eldeki ateşleme efektini (Ignition) çalıştırın: Kendisini rakibe gösterip destenizden \"Magician's Rod\"ı elinize ekleyin, ardından elinizden 1 kartı destenizin en üstüne koyun.",
        "\"Magician's Rod\"ı Normal Çağırın: Sahaya indiğinde tetiklenen efektiyle destenizden \"Dark Magical Circle\" Sürekli Büyüsünü arayıp elinize ekleyin.",
        "\"Dark Magical Circle\"ı çalıştırın: Destenizin en üstündeki 3 karta bakın; içinden 'Dark Magician' veya ilgili 1 kartı elinize alın, kalanları istediğiniz sırayla destenin üstüne koyun."
      ],
      "result": "Tek kartla tüm kombo parçalarını (Büyücü + Çember + Çubuk) elinize toplayan kusursuz başlangıç."
    },
    {
      "id": "mg-2",
      "title": "Örnek Kombo 2: The Eye of Timaeus ile Tek Kartta Red-Eyes Dark Dragoon",
      "cardsNeeded": [
        "Dark Magician (Sahada)",
        "The Eye of Timaeus (Elde)"
      ],
      "sequence": [
        "Dark Magician",
        "The Eye of Timaeus",
        "Red-Eyes Dark Dragoon"
      ],
      "difficulty": "Kolay / Hızlı Çağrı",
      "steps": [
        "Sahadaki \"Dark Magician\"ı hedef alarak \"The Eye of Timaeus\" büyüsünü aktifleştirin.",
        "Büyünün özel kuralı devreye girer: Başka hiçbir malzemeye ihtiyaç duymadan sadece hedef alınan Dark Magician'ı kullanarak Ekstra Destenizden doğrudan \"Red-Eyes Dark Dragoon\" çağırın!",
        "Dragoon sahaya indiğinde omni-negate (her şeyi iptal etme) ve canavar patlatma yetenekleriyle sahayı tamamen kilit altına alır."
      ],
      "result": "İkinci bir füzyon malzemesi gerekmeden tek kartla sahaya inen 3000+ ATK'lik dokunulmaz Dragoon kalkanı."
    },
    {
      "id": "mg-3",
      "title": "Örnek Kombo 3: Millennium Revelation ile Ra'yı Mezardan Diriltme",
      "cardsNeeded": [
        "Millennium Revelation",
        "The Winged Dragon of Ra (Elde)",
        "Monster Reborn (Desteden aranır)"
      ],
      "sequence": [
        "The Winged Dragon of Ra",
        "Millennium Revelation",
        "Monster Reborn"
      ],
      "difficulty": "Orta / Efsanevi Canlanma",
      "steps": [
        "\"Millennium Revelation\" Sürekli Büyüsünü açın ve elinizden \"The Winged Dragon of Ra\"yı mezarlığa gönderin.",
        "Revelation'ın ateşleme efektini kullanarak mezarlıktaki veya destenizdeki \"Monster Reborn\" büyüsünü elinize ekleyin.",
        "Revelation'ın 2. kuralı devreye girer: Kendisini mezara göndererek o tur 'The Winged Dragon of Ra'nın Monster Reborn ile mezardan diriltilmesine izin verin (Normalde Ra mezardan çağrılamaz, bu kart kuralı deler!).",
        "\"Monster Reborn\" oynayarak mezardaki Ra'yı Özel Çağırın; can puanınızı feda ederek rakibe tek vuruşta öldürücü saldırıyı gerçekleştirin!"
      ],
      "result": "Mezardan çağrılamaz kuralını aşarak Güneş Tanrısı Ra'yı dirilten ve anında hücuma geçiren efsanevi diriliş kombosu."
    },
    {
      "id": "mg-4",
      "title": "Örnek Kombo 4: Sphere Mode ile Rakibin 3 Patron Canavarını Feda Etme",
      "cardsNeeded": [
        "The Winged Dragon of Ra - Sphere Mode"
      ],
      "sequence": [
        "The Winged Dragon of Ra - Sphere Mode",
        "The Winged Dragon of Ra"
      ],
      "difficulty": "Kolay / Rakip Sahayı Silme",
      "steps": [
        "Rakibinizin sahasında dokunulmaz veya tehlikeli 3 patron canavar varken elinizdeki \"The Winged Dragon of Ra - Sphere Mode\"un çağırma kuralını uygulayın.",
        "Normal Çağrı hakkınızı kullanarak RAKİBİN SAHASINDAKİ 3 CANAVARI FEDA EDİN ve Sphere Mode'u rakibin sahasına Feda Çağrısıyla koyun (Bu bir çağırma kuralıdır, hiçbir kart koruması bunu engelleyemez!).",
        "Sonraki turda Sphere Mode sizin kontrolünüze geri döner; kendisini feda ederek destenizden doğrudan 4000 ATK/DEF ile orijinal \"The Winged Dragon of Ra\"yı Özel Çağırın!"
      ],
      "result": "Rakibin en güçlü 3 canavarını tek hamlede feda edip haritadan silen ve size bedelsiz 4000 ATK Tanrı kazandıran nihai çözüm."
    },
    {
      "id": "mg-5",
      "title": "Örnek Kombo 5: Millennium Ankh ile The Legendary Exodia Incarnate",
      "cardsNeeded": [
        "Millennium Ankh",
        "Elde veya Destede Exodia Parçaları"
      ],
      "sequence": [
        "Millennium Ankh",
        "The Legendary Exodia Incarnate"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Millennium Ankh\" büyüsünü aktifleştirin; destenizden veya elinizden 5 Exodia parçasını göstererek sahanıza kadim gücü çağırın.",
        "\"The Legendary Exodia Incarnate\" canavarını sahaya Özel Çağırın: Mezarlığınızdaki her Exodia parçası için 1000 ATK kazanır ve DİĞER TÜM KART EFEKTLERİNDEN TAMAMEN ETKİLENMEZ.",
        "Her turun Son Aşamasında mezarlıktan elinize 1 Exodia parçası ekleyerek elinizi sürekli yenileyin."
      ],
      "result": "Tüm kart efektlerinden etkilenmeyen, 5000+ ATK'ye ulaşan ve her tur el tazeleyen durdurulamaz Yasaklı Mısır Tanrısı formu."
    },
    {
      "id": "mg-6",
      "title": "Örnek Kombo 6: Master of Magicians & Dark Arkanes ile Çoklu Büyü Baskını",
      "cardsNeeded": [
        "Dark Magician",
        "Master of Magicians",
        "Magicalized Fusion"
      ],
      "sequence": [
        "Dark Magician",
        "Master of Magicians",
        "Magician of Dark Arkanes",
        "Magicalized Fusion"
      ],
      "difficulty": "Orta / Kadim Büyü",
      "steps": [
        "\"Dark Magician\"ı sahaya getirin ve \"Master of Magicians\"ın saha hakimiyetiyle destenizden kadim büyüleri sırayla devreye sokun.",
        "\"Magicalized Fusion\" kartını aktifleştirerek sahadaki ve mezarlığınızdaki Büyücüleri oyundan çıkarıp (banish) Ekstra Destenizden \"Magician of Dark Arkanes\"ı Fusion Çağırın.",
        "Dark Arkanes sahaya indiğinde tetiklenen efektiyle mezarlıktaki Normal Büyüleri kopyalayın ve rakibin sahasındaki açık kartları tek tek geçersiz kılıp patlatın."
      ],
      "result": "Büyücülerin efendisini sahaya indiren, mezardan büyü kopyalayan ve rakip sahasını temizleyen nihai büyücü kombosu."
    },
    {
      "id": "mg-7",
      "title": "Örnek Kombo 7: Soul Servant & Magician's Souls ile Kart Sürgünü ve Garanti Çekiş",
      "cardsNeeded": [
        "Soul Servant",
        "Magician's Souls (veya Dark Magician)"
      ],
      "sequence": [
        "Soul Servant",
        "Magician's Souls",
        "Dark Magical Circle",
        "Dark Magician"
      ],
      "difficulty": "Kolay / Kaynak Avantajı",
      "steps": [
        "Elinizdeki \"Magician's Souls\"ın eldeki ateşleme efektini (Ignition) çalıştırın: Desteden Seviye 6+ Büyücüyü (\"Dark Magician\") mezara atarak kendisini sahaya Özel Çağırın.",
        "Magician's Souls'un 2. efektini kullanarak elinizdeki gereksiz büyü/tuzakları mezara atıp atılan kart kadar bedava yeni kart çekin.",
        "\"Soul Servant\" Hızlı Büyüsünü çalıştırın: Desteden 'Dark Magical Circle' veya istediğiniz herhangi bir kartı destenizin en üstüne koyun.",
        "Mezarlıktaki \"Soul Servant\"ı oyundan çıkararak sahada ve mezarlıkta bulunan farklı isimlerdeki Dark Magician canavarları kadar (1-2 kart) anında kart çekin!"
      ],
      "result": "Mezarlığa Dark Magician hazırlayan, eldeki fazlalıkları taze karta çeviren ve desteden istediği kartı anında eline çeken kusursuz arama motoru."
    },
    {
      "id": "mg-8",
      "title": "Örnek Kombo 8: Master of Magicians & Magician of Dark Arkanes ile Çoklu Büyü Kopyalama ve Rakip Sahasını Kapatma",
      "cardsNeeded": [
        "Dark Magician",
        "Master of Magicians",
        "Magician of Dark Arkanes"
      ],
      "sequence": [
        "Dark Magician",
        "Master of Magicians",
        "Magician of Dark Arkanes",
        "Dark Magical Circle"
      ],
      "difficulty": "Orta / Kontrol",
      "steps": [
        "\"Master of Magicians\" canavarını sahaya sürün; sahadayken 'Dark Magician' adını taşır ve her büyü kartı çalıştırıldığında rakip kartlarını etkisizleştiren tetikleyici etki sağlar.",
        "Mezar ve saha kaynaklarını birleştirerek Ekstra Destenizden \"Magician of Dark Arkanes\"ı Özel Çağırın.",
        "Sahadaki \"Dark Magical Circle\" ile Dark Magician çağrıldığı an rakibin 1 kartını banish edin; ardından Dark Arkanes'in Hızlı Efektiyle rakibin oynadığı büyüyü anında kopyalayıp rakibin hamlesini kendi aleyhine çevirin!"
      ],
      "result": "Rakibin büyülerini kopyalayarak yanıt veren, her tur kart banish eden ve büyücü üstünlüğünü kuran çift patron kombosu."
    }
  ],
  "toon": [
    {
      "id": "tn-1",
      "title": "Örnek Kombo 1: Toon Table & Bookmark ile Aşılmaz Toon Kingdom Kurulumu",
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
        "\"Toon Table of Contents\" büyüsünü çalıştırın: Desteden \"Toon Bookmark\" büyüsünü elinize ekleyin.",
        "\"Toon Bookmark\" büyüsünü çalıştırın: Desteden doğrudan \"Toon Kingdom\" alan büyüsünü elinize ekleyin.",
        "\"Toon Kingdom\" alan büyüsünü aktifleştirin: Desteden 3 kartı kapalı olarak oyundan çıkarın (cost).",
        "Toon Kingdom açık olduğu sürece Toon canavarlarınız rakip kart efektleriyle HEDEF ALINAMAZ; yok edilecekleri zaman destenin en üstünden 1 kart sürgün ederek yok edilmelerini engelleyin!",
        "Mezarlıktaki \"Toon Bookmark\" da mezardan kendini sürgün ederek Toon Kingdom'ı yok edilmekten korur."
      ],
      "result": "Tüm Toon ordusunu hedef alınamaz ve patlatılamaz yapan, çift katmanlı mezarlık korumalı Toon Kingdom kalesi kurulur."
    },
    {
      "id": "tn-2",
      "title": "Örnek Kombo 2: Toon Page-Flip ile Şans Tanımayan Black Luster Soldier Çağrısı",
      "cardsNeeded": [
        "Toon Page-Flip",
        "Sahada Toon World veya Toon Kingdom"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon Page-Flip",
        "Toon Black Luster Soldier"
      ],
      "difficulty": "Kolay",
      "steps": [
        "Sahada Toon Kingdom açıkken Hızlı Büyü \"Toon Page-Flip\" kartını aktifleştirin.",
        "Destenizden 3 farklı güçlü Toon canavarı (örneğin \"Toon Black Luster Soldier\", \"Toon Dark Magician\", \"Red-Eyes Toon Dragon\") seçip rakibe gösterin.",
        "Rakip rastgele birini seçer: Seçilen canavar çağırma koşulları YOK SAYILARAK doğrudan sahaya Özel Çağrılır, kalanlar desteye geri karışır.",
        "Sahaya inen \"Toon Black Luster Soldier\" (3000 ATK); sahaya indiği tur hemen saldırabilir, doğrudan rakip LP'sine 3000 hasar vurabilir veya sahadaki 1 kartı banish edebilir!"
      ],
      "result": "Koşulsuz şartsız devasa bir Toon patronunu sahaya indiren ve rakip sahayı anında tehdit eden Hızlı Büyü hamlesi."
    },
    {
      "id": "tn-3",
      "title": "Örnek Kombo 3: Comic Hand ile Rakibin Patron Canavarını Çalma ve Toon Yapma",
      "cardsNeeded": [
        "Comic Hand",
        "Sahada Toon World veya Toon Kingdom"
      ],
      "sequence": [
        "Toon Kingdom",
        "Comic Hand"
      ],
      "difficulty": "Kolay / Reaktif Çözüm",
      "steps": [
        "Rakibin kontrolündeki en güçlü patron canavarı (örneğin Baronne de Fleur veya Dragoon) hedef alarak \"Comic Hand\" donatım büyüsünü aktifleştirin.",
        "Hedef alınan canavarın kontrolü kalıcı olarak sizin sahanıza geçer!",
        "O canavar artık bir Toon Canavarı sayılır: Sahada Toon Kingdom varken rakibin Toon canavarı yoksa, o çaldığınız canavarla doğrudan RAKİBİN LP'SİNE SALDIRIN!",
        "Toon Kingdom sayesinde çaldığınız o canavar da hedef alınamaz ve kart efektleriyle yok edilemez hale gelir."
      ],
      "result": "Rakibin en büyük silahını çalıp doğrudan rakibin canına saldırtan en ölümcül Toon hırsızlık taktiği."
    },
    {
      "id": "tn-4",
      "title": "Örnek Kombo 4: Toon Briefcase & Toon Terror ile Çifte İptal Hattı",
      "cardsNeeded": [
        "Toon Terror (Kapalı)",
        "Toon Briefcase (Kapalı)",
        "Sahada Toon Canavarı"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon Briefcase",
        "Toon Terror"
      ],
      "difficulty": "Kolay / Savunma",
      "steps": [
        "\"Toon Terror\" ve \"Toon Briefcase\" tuzaklarını sahaya kapalı koyun.",
        "Rakip herhangi bir canavar Normal veya Özel Çağırdığında \"Toon Briefcase\" tuzağını açın: O çağrılan canavarı yok etmeden DOĞRUDAN DESTEYE GERİ KARIŞTIRIN (Mezarlık efektlerini tamamen engeller!).",
        "Rakip herhangi bir Büyü, Tuzak veya Canavar efekti etkinleştirdiğinde \"Toon Terror\" Karşı Tuzak kartını açın: O aktivasyonu tamamen iptal edip yok edin!",
        "Böylece rakibin hem çağırma hamlesi hem de efekt hamlesi tek turda arka arkaya boşa düşürülür."
      ],
      "result": "Rakibin canavar çağırmasını desteye postalayan ve her türlü kart efektini iptal eden geçilmez çift tuzak barikatı."
    },
    {
      "id": "tn-5",
      "title": "Örnek Kombo 5: Shadow Toon & Cannon Soldier ile Doğrudan Yakma Hasarı",
      "cardsNeeded": [
        "Shadow Toon",
        "Toon Cannon Soldier",
        "Rakipte Yüksek ATK'li Canavar"
      ],
      "sequence": [
        "Toon World",
        "Shadow Toon",
        "Toon Cannon Soldier"
      ],
      "difficulty": "Kolay / Yakma Hasarı",
      "steps": [
        "Rakibin sahasında yüksek saldırı gücüne sahip bir canavar (örneğin 3000 veya 4000 ATK) varken Normal Büyü \"Shadow Toon\" kartını aktifleştirin.",
        "O rakip canavarı hedef alın: Kartın efekti devreye girer ve hedef alınan canavarın orijinal ATK'si kadar rakibe DOĞRUDAN ETKİ HASARI verin (Saldırı yapmadan anında 3000-4000 hasar!).",
        "Ardından \"Toon Cannon Soldier\"ın ateşleme efektini kullanarak sahanızdaki fazla Toon canavarlarını feda edin ve feda başına rakibe 500 hasar daha vurarak maçı bitirin."
      ],
      "result": "Savaş aşamasına bile girmeden rakibin kendi canavarının gücüyle rakip LP'sini sıfırlayan doğrudan yakma kombosu."
    },
    {
      "id": "tn-6",
      "title": "Örnek Kombo 6: Toon Mask ile Rakip Turunda Desteden Bedelsiz Özel Çağrı",
      "cardsNeeded": [
        "Toon Mask (Kapalı)",
        "Sahada Toon World veya Toon Kingdom"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon Mask",
        "Toon Dark Magician"
      ],
      "difficulty": "Taktiksel",
      "steps": [
        "\"Toon Mask\" Normal Tuzağını sahaya kapalı kurun.",
        "Rakibin turunda, rakip sahada açık bir canavarı kontrol ederken tuzağı aktifleştirin.",
        "Rakibin açık canavarını hedef alın: Destenizden veya elinizden, seviyesi o hedef canavarın seviyesine eşit veya daha düşük olan 1 Toon canavarını (\"Toon Dark Magician\" veya \"Toon BLS\") çağırma koşullarını YOK SAYARAK doğrudan sahaya Özel Çağırın!",
        "Rakibin turunda anında sahaya inen Toon canavarınızla rakibin saldırı planını felç edin."
      ],
      "result": "Rakibin sahaya koyduğu büyük canavarı fırsata çevirip rakip turunda desteden devasa Toon canavarı fırlatan sürpriz hamle."
    },
    {
      "id": "tn-7",
      "title": "Örnek Kombo 7: Toon World Fusion & Blue-Eyes Ultimate Toon Dragon ile 4500 ATK Doğrudan Darbe",
      "cardsNeeded": [
        "Toon World Fusion",
        "Toon Kingdom",
        "Toon Canavarları (Elde veya Sahada)"
      ],
      "sequence": [
        "Toon Bookmark",
        "Toon Kingdom",
        "Toon World Fusion",
        "Blue-Eyes Ultimate Toon Dragon"
      ],
      "difficulty": "Kolay / OTK",
      "steps": [
        "\"Toon Kingdom\"ı açarak sahaya tam dokunulmazlık sağlayın.",
        "\"Toon World Fusion\" büyüsünü çalıştırın: Elinizden ve sahanızdan malzemeleri kullanarak Ekstra Destenizden 4500 ATK gücündeki \"Blue-Eyes Ultimate Toon Dragon\"ı Fusion Çağrısıyla sahaya indirin.",
        "Toon Kingdom açık olduğu sürece Ultimate Toon Dragon hedef alınamaz ve yok edilemez; rakibin Toon canavarı yoksa doğrudan rakibin LP'sine 4500 hasar vurarak tek darbede düelloyu kazanın!"
      ],
      "result": "Toon Kingdom koruması altında 4500 ATK ile doğrudan saldırabilen nihai Mavi Gözlü Toon ejderhası baskını."
    }
  ],
  "toon-gods": [
    {
      "id": "tg-1",
      "title": "Örnek Kombo 1: Toon God Collision ile Tek Hamlede Toon Tanrısı İndirme",
      "cardsNeeded": [
        "Toon God Collision",
        "Sahada Toon World veya Toon Kingdom",
        "Toon Slifer the Sky Dragon (Elde veya Desteden)"
      ],
      "sequence": [
        "Toon God Collision",
        "Toon Slifer the Sky Dragon",
        "Toon Terror"
      ],
      "difficulty": "Kolay / Yıkıcı Başlangıç",
      "steps": [
        "Sahada Toon Kingdom açıkken \"Toon God Collision\" büyüsünü aktifleştirin.",
        "Büyünün özel kuralı gereği normalde gereken 3 feda maliyetini tamamen yok sayarak destenizden veya elinizden doğrudan \"Toon Slifer the Sky Dragon\" (veya Toon Obelisk / Toon Ra) canavarını sahaya Özel Çağırın!",
        "Toon Slifer sahaya indiğinde: Rakip her canavar çağırdığında onun ATK'sini anında 2000 düşürür, ATK 0 olursa o canavarı anında patlatır!",
        "Ayrıca Toon Kingdom sayesinde Toon Tanrınız rakip kart efektleriyle hedef alınamaz ve yok edilemez kalkanına girer."
      ],
      "result": "3 feda harcamadan tek büyüyle sahaya inen, rakibin tüm canavarlarını eriten dokunulmaz Toon Mısır Tanrısı."
    },
    {
      "id": "tg-2",
      "title": "Örnek Kombo 2: Funny Dark Rabbit & Comic Cat ile Rakip Canavarlarını Feda Ederek Toon Ra Çağrısı",
      "cardsNeeded": [
        "Funny Dark Rabbit",
        "Comic Cat",
        "The Toon Winged Dragon of Ra"
      ],
      "sequence": [
        "Funny Dark Rabbit",
        "Comic Cat",
        "The Toon Winged Dragon of Ra"
      ],
      "difficulty": "Orta / Hırsızlık & Feda",
      "steps": [
        "\"Funny Dark Rabbit\"ı Normal Çağırın: Efektiyle destenizden doğrudan \"Toon Kingdom\" açın ve bu tur ek bir Toon Normal Çağrı hakkı kazanın.",
        "Kazandığınız ek hakla \"Comic Cat\"i sahaya sürün.",
        "Comic Cat'in Hızlı Efektini çalıştırın: Sahanızda Toon World/Kingdom olduğu için RAKİBİN SAHASINDAKİ 1 CANAVARI FEDA EDİN (Rakip canavar dokunulmaz olsa bile kural fedasıyla mezara gider!).",
        "Comic Cat'in efektiyle destenizden doğrudan çağırma koşullarını yok sayarak \"The Toon Winged Dragon of Ra\"yı sahaya Özel Çağırın!",
        "Toon Ra sahaya indiğinde can puanınızı feda ederek tek vuruşluk öldürücü saldırı gücünü elde edin."
      ],
      "result": "Rakibin en dokunulmaz canavarını feda edip haritadan silen ve desteden bedelsiz Toon Ra çağıran kusursuz kural kombosu."
    },
    {
      "id": "tg-3",
      "title": "Örnek Kombo 3: Toon World Fusion ile Blue-Eyes Ultimate Toon Dragon ve 4500 Doğrudan Saldırı",
      "cardsNeeded": [
        "Toon World Fusion",
        "3 Toon Canavarı (Elde veya Sahada)",
        "Toon Kingdom"
      ],
      "sequence": [
        "Toon Kingdom",
        "Toon World Fusion",
        "Blue-Eyes Toon Dragon",
        "Blue-Eyes Ultimate Toon Dragon"
      ],
      "difficulty": "Kolay / Bitirici Darbe",
      "steps": [
        "\"Toon Kingdom\"ı sahaya açarak tüm Toon ordunuzu hedef alınamaz ve yok edilemez kılın.",
        "\"Toon World Fusion\" kartını aktifleştirerek elinizdeki veya sahanızdaki 3 Toon canavarını (örneğin Blue-Eyes Toon Dragon malzemelerini) birleştirin.",
        "Ekstra Destenizden tam 4500 ATK gücündeki \"Blue-Eyes Ultimate Toon Dragon\" canavarını Fusion Çağrısıyla çağırın!",
        "Sahadaki Toon Kingdom sayesinde rakibin Toon canavarı yoksa doğrudan rakip oyuncuya saldırarak tek darbede 4500 hasar vurun!"
      ],
      "result": "Büyü ve tuzaklarla hedef alınamayan 4500 ATK'lik devasa bir çizgi film ejderhasıyla doğrudan oyun bitirici vuruş."
    },
    {
      "id": "tg-4",
      "title": "Örnek Kombo 4: Faceless Mage & Mind Scan ile Rakibin Elini Okuma ve Tam Saha Kontrolü",
      "cardsNeeded": [
        "Dark-Eyes Illusionist Faceless Mage (Elde)"
      ],
      "sequence": [
        "Dark-Eyes Illusionist Faceless Mage",
        "Mind Scan",
        "Toon Terror"
      ],
      "difficulty": "Kolay / Bilgi Üstünlüğü",
      "steps": [
        "Elinizdeki \"Dark-Eyes Illusionist Faceless Mage\"ı mezarlığa atarak 1. efektini aktifleştirin.",
        "Desteden doğrudan \"Mind Scan\" kartını sahanıza açık olarak koyun.",
        "\"Mind Scan\" açık olduğu sürece: Rakibinizin ELİNDEKİ TÜM KARTLARI VE SAHADAKİ TÜM KAPALI KARTLARINI SÜREKLİ AÇIK OLARAK GÖRÜN!",
        "Rakibin ne planladığını, hangi tuzakları kurduğunu bilerek hareket edin ve sahadaki Toon tuzaklarınızla (Toon Terror vb.) rakibin kritik kartlarını anında etkisiz hale getirin."
      ],
      "result": "Rakibin tüm elini ve kapalı kartlarını tamamen görünür kılarak oyundaki tüm sürpriz faktörünü sıfırlayan bilgi üstünlüğü."
    },
    {
      "id": "tg-5",
      "title": "Örnek Kombo 5: Toon Rollback & Toon Ra ile Çifte Doğrudan Saldırı (OTK)",
      "cardsNeeded": [
        "The Toon Winged Dragon of Ra (Sahada)",
        "Toon Rollback (Elde)",
        "Sahada Toon Kingdom"
      ],
      "sequence": [
        "The Toon Winged Dragon of Ra",
        "Toon Rollback"
      ],
      "difficulty": "Kolay / Tek Turda Bitiriş",
      "steps": [
        "Sahadaki \"The Toon Winged Dragon of Ra\" ile rakibe doğrudan saldırı ilan edin.",
        "Normal Büyü \"Toon Rollback\" kartını aktifleştirin ve sahadaki Toon Ra'yı hedef alın.",
        "Toon Rollback'in kuralı devreye girer: Hedeflenen Toon canavarı bu tur ARKA ARKAYA BİR KEZ DAHA SALDIRABİLİR!",
        "Toon Ra 2. kez doğrudan rakip LP'sine vurarak toplamda 8000+ hasara ulaşır ve tek turda maçı galibiyetle noktalar."
      ],
      "result": "Güneş Tanrısı Ra'ya aynı turda iki kez doğrudan saldırı hakkı vererek rakip savunmasını bypass eden kesin galibiyet."
    },
    {
      "id": "tg-6",
      "title": "Örnek Kombo 6: Caw-mic Hand & Comic Hand ile Rakibin Tüm Patronlarını Gasp Etme",
      "cardsNeeded": [
        "Comic Hand",
        "Toon Trap Caw-mic Hand (Kapalı)",
        "Sahada Toon Kingdom"
      ],
      "sequence": [
        "Toon Kingdom",
        "Comic Hand",
        "Toon Briefcase",
        "The Toon Winged Dragon of Ra"
      ],
      "difficulty": "Orta / Çift Hırsızlık",
      "steps": [
        "Kendi turunuzda \"Comic Hand\" donatarak rakibin 1. patron canavarının kontrolünü kendi sahanıza geçirin.",
        "Rakip turunda rakip yeni bir güçlü canavar çağırdığında kapalı duran \"Toon Trap Caw-mic Hand\" tuzağını açın.",
        "Tuzağın efektiyle rakibin o 2. canavarını da gaspedip kendi sahanıza çekin ve onu da Toon canavarına dönüştürün!",
        "Rakibin kendi kurduğu güçlü orduyu tamamen rakibe karşı doğrudan saldırı silahı olarak kullanın."
      ],
      "result": "Rakibin hem kendi turunda hem sizin turunuzda en güçlü canavarlarını çalarak sahayı tamamen domine eden çizgi film hırsızlığı."
    },
    {
      "id": "tg-7",
      "title": "Örnek Kombo 7: Toon Cannon Soldier & Shadow Toon ile Savaşsız Yakma Zaferi",
      "cardsNeeded": [
        "Shadow Toon",
        "Toon Cannon Soldier",
        "Toon Dark Magician"
      ],
      "sequence": [
        "Toon Kingdom",
        "Shadow Toon",
        "Toon Cannon Soldier",
        "Toon Dark Magician"
      ],
      "difficulty": "Kolay / Burn",
      "steps": [
        "Rakibin sahasında yüksek ATK'li bir canavar varken \"Shadow Toon\" oynayarak o canavarın ATK'si kadar rakibe anında doğrudan yakma hasarı verin.",
        "\"Toon Dark Magician\"ın sahadaki efektini kullanarak desteden ek Toon canavarları çağırın ve sahayı doldurun.",
        "\"Toon Cannon Soldier\"ı çağırıp sahadaki canavarları sırayla feda edin; her feda başına 500 doğrudan hasar vurarak rakibin kalan tüm canını sıfırlayın."
      ],
      "result": "Rakibin saldırı engellerini ve canavar savunmasını tamamen bypass eden, savaşsız doğrudan can puanı bitiren kombo."
    },
    {
      "id": "tg-8",
      "title": "Örnek Kombo 8: Bluk Necrofear & Evil Box ile Mezar Kilidi ve Toon God Collision Çağrısı",
      "cardsNeeded": [
        "Bluk Necrofear",
        "Evil Box",
        "Toon God Collision"
      ],
      "sequence": [
        "Bluk Necrofear",
        "Evil Box",
        "Toon God Collision",
        "Toon Obelisk The Tormentor"
      ],
      "difficulty": "Orta / Kilit & Çağrı",
      "steps": [
        "\"Bluk Necrofear\" mezarlıktayken desteden 1 'Toon World' kartını sürgün ederek Özel Çağrılır; sahada açıkken diğer Toon canavarlarınızı hedef alınmaktan korur ve kendisi 'Toon World' varmış gibi sayılır.",
        "Sahada Toon World etkisi varken \"Evil Box\" elden bedelsiz Özel Çağrılır; çağrıldığında desteden istediğiniz bir Toon tuzağını kapatır ve turda 1 kez Hızlı Efektle rakip mezarındaki 1 kartı destenin altına kilitler.",
        "\"Toon God Collision\" büyüsünü çalıştırarak 3 feda maliyeti ödemeden destenizden doğrudan \"Toon Obelisk The Tormentor\"ı sahaya indirin!",
        "Obelisk 4000 ATK ile hedef alınamaz, yok edilemez ve 1 Toon feda ederek rakip sahayı tamamen patlatır."
      ],
      "result": "Rakibin mezar oyunlarını bozan, Toon canavarlarını hedef almaktan koruyan ve bedavaya 4000 ATK Toon Obelisk indiren kilit kombosu."
    }
  ],
  "pendulum": [
    {
      "id": "pen-1",
      "title": "Örnek Kombo 1: Pendulum Call ile Kırılmaz Sarkaç Ölçeği Kurulumu",
      "cardsNeeded": [
        "Pendulum Call",
        "Elde atılacak 1 kart"
      ],
      "sequence": [
        "Pendulum Call",
        "Harmonizing Magician",
        "Timebreaker Magician"
      ],
      "difficulty": "Kolay",
      "steps": [
        "\"Pendulum Call\" büyüsünü aktifleştirin ve elinizden 1 kartı mezarlığa gönderin.",
        "Pendulum Call'un arama efektiyle destenizden 1'e 8 ölçek oluşturan 2 farklı 'Magician' Sarkaç Canavarı (\"Harmonizing Magician\" ve yüksek ölçekli bir Magician) seçip elinize ekleyin.",
        "Kartın sürekli koruma efekti devreye girer: Sarkaç bölgelerinizdeki kartlar sonraki turun sonuna kadar HİÇBİR kart efektiyle yok edilemez!",
        "Ölçekleri kurup elinizdeki ve Ekstra Destenizdeki tüm canavarları tek hamlede sahaya Sarkaç Çağrısı (Pendulum Summon) ile fırlatın."
      ],
      "result": "Sarkaç ölçeklerini patlamalara karşı tamamen dokunulmaz kılan ve sahaya çoklu canavar çağıran temel açılış."
    },
    {
      "id": "pen-2",
      "title": "Örnek Kombo 2: Harmonizing Magician ile Tek Kartta Seviye 8 Synchro / Rank 4 Xyz",
      "cardsNeeded": [
        "Harmonizing Magician (Elde)",
        "Kurulu Sarkaç Ölçekleri (Örn: 1 ve 8)"
      ],
      "sequence": [
        "Harmonizing Magician",
        "Timestar Magician",
        "Astrograph Sorcerer"
      ],
      "difficulty": "Kolay / Esnek",
      "steps": [
        "Elinizdeki \"Harmonizing Magician\"ı Sarkaç Çağrısı ile sahaya indirin.",
        "Harmonizing Magician elden Sarkaç Çağrısıyla indiği anda tetiklenen efekti devreye girer: Destenizden 1 'Magician' Sarkaç Canavarını Savunma Konumunda sahaya Özel Çağırın.",
        "Sahadaki Seviye 4 Harmonizing (Tuner) ile yeni çağırdığınız Seviye 4 canavarı birleştirerek: İster Seviye 8 Synchro (\"Supreme King Dragon Clear Wing\") yapın, ister Rank 4 Xyz (\"Timestar Magician\") çağırın!",
        "Timestar Magician'ın efektini kullanarak destenizden \"Astrograph Sorcerer\"ı elinize ekleyin ve Z-ARC için gerekli malzemeleri tamamlayın."
      ],
      "result": "Tek bir Sarkaç Çağrısından anında Synchro veya Xyz çıkaran ve Z-ARC malzemesi aratan çok yönlü hamle."
    },
    {
      "id": "pen-3",
      "title": "Örnek Kombo 3: Astrograph Sorcerer ile 4 Boyut Ejderhasını Birleştirip Supreme King Z-ARC Çağrısı",
      "cardsNeeded": [
        "Astrograph Sorcerer (Elde veya Sahada)",
        "Mezarlıkta/Ekstra Deste'de 4 Ejderha (Pendulum, Xyz, Synchro, Fusion)"
      ],
      "sequence": [
        "Astrograph Sorcerer",
        "Odd-Eyes Pendulum Dragon",
        "Supreme King Z-ARC"
      ],
      "difficulty": "İleri Seviye / Nihai Patron",
      "steps": [
        "Sahadaki bir kartınız yok edildiğinde elinizdeki \"Astrograph Sorcerer\"ın Hızlı Tetikleme efektini çalıştırın: Kendisini elden Özel Çağırın.",
        "Astrograph Sorcerer'ın ateşleme efektini (Ignition) aktifleştirin: Kendisini feda edin ve elinizden, sahanızdan, mezarlığınızdan ve/veya Ekstra Destenizden 4 Boyut Ejderhasını (\"Pendulum Dragon\", \"Xyz Dragon\", \"Synchro Dragon\", \"Fusion Dragon\") oyundan çıkarın (banish)!",
        "Ekstra Destenizden tam 4000 ATK/DEF gücündeki nihai hükümdar \"Supreme King Z-ARC\"ı Fusion Çağrısıyla sahaya indirin!",
        "Z-ARC sahaya geldiği anda tetiklenen yıkım efekti devreye girer: RAKİBİN KONTROL ETTİĞİ TÜM KARTLARI HARİTADAN SİLİN!",
        "Z-ARC sahadayken kart efektleriyle yok edilemez, hedef alınamaz ve rakibin füzyon/senkro/xyz canavarlarını kilitler."
      ],
      "result": "Rakibin tüm sahasını tek hamlede tamamen yok eden, dokunulmaz ve rakip ekstra destesini felç eden 4000 ATK Yüce Kral sahadadır."
    },
    {
      "id": "pen-4",
      "title": "Örnek Kombo 4: Supreme King Dragon Starving Venom ile Rakip Patronunun Efektini Kopyalama",
      "cardsNeeded": [
        "2 KARANLIK Sarkaç Canavarı (Sahada)"
      ],
      "sequence": [
        "Harmonizing Magician",
        "Supreme King Dragon Starving Venom"
      ],
      "difficulty": "Kolay / Taktiksel",
      "steps": [
        "Sahanızdaki 2 adet KARANLIK Sarkaç Canavarını 'Polymerization' OLMADAN doğrudan sahada feda ederek Ekstra Destenizden temaslı füzyonla \"Supreme King Dragon Starving Venom\" çağırın!",
        "Starving Venom'un ateşleme efektini çalıştırın: Rakibin sahasındaki veya mezarlığındaki 1 canavarı hedef alın.",
        "Hedeflenen o canavarın TÜM EFEKTLERİNİ kopyalayın ve Starving Venom'un orijinal adını o canavar yapın; ayrıca o canavarın orijinal ATK'si kadar ATK kazanın!",
        "Tüm canavarlarınıza delici savaş hasarı (piercing damage) vererek rakibin savunma canavarlarının üzerinden oyunu bitirin."
      ],
      "result": "Füzyon büyüsü harcamadan sahaya inen, rakibin en güçlü efektini kopyalayıp kendine katan ve delici hasarla tek turda bitiren kopya silahı."
    },
    {
      "id": "pen-5",
      "title": "Örnek Kombo 5: Dragon Shrine & Darkwurm ile Bedava Ölçek ve Canavar",
      "cardsNeeded": [
        "Dragon Shrine (veya Foolish Burial)"
      ],
      "sequence": [
        "Dragon Shrine",
        "Supreme King Dragon Darkwurm",
        "Supreme King Gate Zero",
        "Supreme King Dragon Clear Wing"
      ],
      "difficulty": "Kolay / Bedava Avantaj",
      "steps": [
        "\"Dragon Shrine\" büyüsünü çalıştırarak destenizden doğrudan \"Supreme King Dragon Darkwurm\"ı mezarlığa gönderin.",
        "Sahanızda canavar yokken mezarlıktaki Darkwurm'ün tetikleme efekti devreye girer: Kendisini mezardan bedelsiz Özel Çağırın!",
        "Darkwurm Normal veya Özel Çağrıldığında tetiklenen arama efekti çalışır: Destenizden 0 ölçekli \"Supreme King Gate Zero\" Sarkaç Canavarını elinize ekleyin.",
        "Böylece elinizden hiçbir kart tüketmeden sahada 1 canavar + elinizde 0 ölçekli mükemmel bir Sarkaç kartı elde etmiş olursunuz."
      ],
      "result": "Sıfır kart kaybıyla sahaya canavar indiren ve 0 ölçekli kilit Sarkaç parçasını ele getiren kusursuz kaynak açılışı."
    },
    {
      "id": "pen-6",
      "title": "Örnek Kombo 6: Gate Zero & Gate Infinity ile Hasarı Sıfırlama ve Sonsuz Kaynak",
      "cardsNeeded": [
        "Supreme King Gate Zero",
        "Supreme King Gate Infinity"
      ],
      "sequence": [
        "Supreme King Gate Zero",
        "Supreme King Gate Infinity",
        "Astrograph Sorcerer",
        "Supreme King Z-ARC"
      ],
      "difficulty": "Orta / Tam Koruma",
      "steps": [
        "Sarkaç bölgelerinize 0 ölçekli \"Supreme King Gate Zero\" ile 13 ölçekli \"Supreme King Gate Infinity\" kartlarını yerleştirin.",
        "Gate Zero açıkken devreye giren sürekli kuralı gereği: Aldığınız TÜM efekt hasarları anında sıfırlanır (0 hasar)!",
        "0'dan 13'e kadar olan bu devasa aralık sayesinde Seviye 1'den Seviye 12'ye kadar olan İSTEDİĞİNİZ TÜM CANAVARLARI aynı anda Sarkaç Çağrısıyla sahaya dökün.",
        "Gate Zero'nun sahadaki efektini kullanarak kendisini patlatıp desteden Fusion veya Polymerization büyüsü arayın ve Z-ARC için füzyon yolunu açın."
      ],
      "result": "Hasar almanızı engelleyen, 1'den 12'ye kadar her seviyeyi çağırabilen ve Z-ARC'a zemin hazırlayan nihai Sarkaç ölçekleri."
    },
    {
      "id": "pen-7",
      "title": "Örnek Kombo 7: Supreme King Dragon Starving Venom ile Mezarlıktaki Patron Efektini Kopyalama ve OTK",
      "cardsNeeded": [
        "2 KARANLIK Sarkaç Canavarı",
        "Mezarlıkta Güçlü Bir Patron (Örn: Independent Nightingale veya Z-ARC)"
      ],
      "sequence": [
        "Harmonizing Magician",
        "Performapal Odd-Eyes Dissolver",
        "Supreme King Dragon Starving Venom"
      ],
      "difficulty": "Orta / Kopyalama OTK",
      "steps": [
        "Sahadaki 2 KARANLIK Sarkaç canavarını sahada feda ederek Ekstra Destenizden \"Supreme King Dragon Starving Venom\"ı temaslı füzyonla Özel Çağırın.",
        "Ateşleme efektini (Ignition) çalıştırarak mezarlıktaki veya rakip sahadaki en güçlü patron canavarı hedef alın.",
        "Hedeflenen kartın tüm efektlerini ve ATK puanını kopyalayın; Starving Venom'un sürekli efekti sayesinde tüm canavarlarınıza delici savaş hasarı (Piercing Damage) kazandırarak savunmadaki canavarlar üzerinden tek turda düelloyu kazanın!"
      ],
      "result": "Mezarlıktaki veya rakipteki en güçlü etkiyi kopyalayarak delici hasarla oyunu tek vuruşta bitiren temaslı füzyon darbesi."
    }
  ],
  "ekstralar": [
    {
      "id": "ex-1",
      "title": "Örnek Kombo 1: Legend of Heart ile 3 Efsanevi Şövalye ve Timaeus the Knight of Destiny",
      "cardsNeeded": [
        "Legend of Heart",
        "Mezarlıkta 3 Efsanevi Ejderha Büyüsü (Timaeus, Critias, Hermos)",
        "Sahada 1 Savaşçı Canavar"
      ],
      "sequence": [
        "Legend of Heart",
        "Legendary Knight Timaeus",
        "Legendary Knight Critias",
        "Legendary Knight Hermos",
        "Timaeus the Knight of Destiny"
      ],
      "difficulty": "İleri Seviye / Efsanevi Çağrı",
      "steps": [
        "1000 LP ödeyip sahanızdaki 1 Savaşçı canavarı feda ederek Normal Büyü \"Legend of Heart\" kartını aktifleştirin.",
        "Elinizden ve/veya Mezarlığınızdan 3 Efsanevi Ejderha büyüsünü (\"The Eye of Timaeus\", \"The Fang of Critias\", \"The Claw of Hermos\") oyundan çıkarın (banish).",
        "Elinizden, Destenizden ve/veya Mezarlığınızdan 3 Efsanevi Şövalyeyi (\"Legendary Knight Timaeus\", \"Critias\", \"Hermos\") aynı anda sahaya Özel Çağırın!",
        "Sahadaki bu 3 Efsanevi Şövalyeyi Mezarlığa göndererek temaslı füzyonla Ekstra Destenizden \"Timaeus the Knight of Destiny\" canavarını çağırın!",
        "Knight of Destiny diğer tüm kart efektlerinden TAMAMEN ETKİLENMEZ ve savaştığında sahadaki en yüksek ATK'ye eşit güç kazanır."
      ],
      "result": "Tüm kart efektlerinden etkilenmeyen, savaşta yenilmez ve öldüğünde 3 şövalyeyi tekrar sahaya getiren nihai şövalye."
    },
    {
      "id": "ex-2",
      "title": "Örnek Kombo 2: Critias the United Dragon & The Fang of Critias ile Rakip Sahasını Süpürme",
      "cardsNeeded": [
        "The Fang of Critias",
        "Mirror Force (Elde veya Sahada)",
        "Critias the United Dragon"
      ],
      "sequence": [
        "Critias the United Dragon",
        "The Fang of Critias",
        "Mirror Force",
        "Mirror Force Dragon"
      ],
      "difficulty": "Kolay / Otomatik Misilleme",
      "steps": [
        "\"The Fang of Critias\" büyüsünü çalıştırın ve elinizdeki veya sahanızdaki \"Mirror Force\" tuzağını mezarlığa gönderin.",
        "Ekstra Destenizden doğrudan \"Mirror Force Dragon\" Fusion Canavarını sahaya indirin (2800 ATK).",
        "Mirror Force Dragon sahadayken: Sahanızdaki HERHANGİ bir kart saldırı veya kart efekti hedefi seçildiği anda Hızlı Tetikleme efekti devreye girer: RAKİBİN KONTROL ETTİĞİ TÜM KARTLARI ANINDA YOK EDİN!",
        "Böylece rakip sizin hiçbir kartınıza dokunamaz, dokunduğu an tüm ordusunu kaybeder."
      ],
      "result": "Rakibin herhangi bir saldırı veya efekt hamlesinde tetiklenip tüm rakip sahasını haritadan silen nihai intikam ejderhası."
    },
    {
      "id": "ex-3",
      "title": "Örnek Kombo 3: Guardian Eatos & Celestial Sword ile Hızlı 3000+ ATK Baskısı ve Dreadscythe",
      "cardsNeeded": [
        "Guardian Eatos (Elde)",
        "Celestial Sword - Eatos (Elde veya Desteden)",
        "Mezarlıkta canavar bulunmaması (veya erken tur)"
      ],
      "sequence": [
        "Guardian Eatos",
        "Celestial Sword - Eatos",
        "Guardian Dreadscythe",
        "Reaper Scythe - Dreadscythe"
      ],
      "difficulty": "Orta / Yıkıcı Mezar Baskını",
      "steps": [
        "Mezarlığınızda canavar yoksa \"Guardian Eatos\"ın özel kuralını uygulayın: Kendisini elden bedelsiz Özel Çağırın (2500 ATK).",
        "\"Celestial Sword - Eatos\" donatarak saldırı gücünü 3000'e çıkarın.",
        "Eatos'un ateşleme efektini kullanın: Rakibin mezarlığından 3 canavara kadar kartı oyundan çıkarın ve çıkarılan her canavar için tur sonuna kadar +500 ATK (maksimum 4500 ATK) kazanın!",
        "Eatos sahadan mezara gönderildiği anda elinizdeki \"Guardian Dreadscythe\" Hızlı Efektle sahaya Özel Çağrılır; desteden doğrudan \"Reaper Scythe - Dreadscythe\" donanır ve iki mezarlıktaki her canavar için 500 ATK kazanarak devasa boyutlara ulaşır."
      ],
      "result": "Rakibin mezarını temizleyip 4500 ATK ile vuran Eatos ve öldüğünde yerine geçen durdurulamaz Ölüm Tırpanlı Dreadscythe."
    },
    {
      "id": "ex-4",
      "title": "Örnek Kombo 4: The Seal of Orichalcos & Deuteros ile Tam Dokunulmazlık Kalesi",
      "cardsNeeded": [
        "The Seal of Orichalcos",
        "Orichalcos Deuteros"
      ],
      "sequence": [
        "The Seal of Orichalcos",
        "Orichalcos Deuteros",
        "Orichalcos Tritos"
      ],
      "difficulty": "Kolay / Aşılmaz Savunma",
      "steps": [
        "\"The Seal of Orichalcos\" alan büyüsünü aktifleştirin: Tüm canavarlarınız kalıcı +500 ATK kazanır, turda 1 kez kart efektleriyle YOK EDİLEMEZ; rakip en düşük ATK'li canavarlarınızı saldırı hedefi seçemez.",
        "Orichalcos'un 2. katmanı olan \"Orichalcos Deuteros\"u açın: Her tur sahanızdaki canavar sayısı x 500 LP kazanın ve rakip saldırdığında kendi canavarınızı feda edip saldıran canavarı yok edin!",
        "3. katman olan \"Orichalcos Tritos\" ile canavarlarınızı hedef alan rakip büyü ve tuzak efektlerini tamamen geçersiz kılın."
      ],
      "result": "Tüm canavarları +500 ATK ile güçlendiren, patlamayan, her tur can dolduran ve rakip büyü/tuzaklarını engelleyen kadim mühür."
    },
    {
      "id": "ex-5",
      "title": "Örnek Kombo 5: 3 Mısır Tanrısı ile Egyptian, The Ultimate Lord Of Duel Monster",
      "cardsNeeded": [
        "The Winged Dragon of Ra",
        "Obelisk the Tormentor",
        "Slifer the Sky Dragon",
        "Egyptian, The Ultimate Lord Of Duel Monster (Ekstra Deste)"
      ],
      "sequence": [
        "The Winged Dragon of Ra",
        "Obelisk the Tormentor",
        "Slifer the Sky Dragon",
        "Egyptian, The Ultimate Lord Of Duel Monster"
      ],
      "difficulty": "İleri Seviye / Kozmik Hakimiyet",
      "steps": [
        "Mısır Tanrılarını sahada veya mezarlıkta toplayın.",
        "3 asıl Mısır Tanrısını birleştirerek temaslı füzyonla Ekstra Destenizden \"Egyptian, The Ultimate Lord Of Duel Monster\"ı çağırın (5000/5000).",
        "Ultimate Lord sahaya indiğinde: Çağrısı engellenemez ve rakip kart veya efekt çalıştıramaz.",
        "Diğer TÜM kart efektlerinden TAMAMEN ETKİLENMEZ; sahadaki 1 canavarı feda ederek rakibin sahasındaki tüm kartları yok eder ve yok edilen her kart için 500 hasar verir."
      ],
      "result": "3 Mısır Tanrısının birleşimi olan, tüm efektlerden etkilenmeyen ve tek hamlede tüm rakip sahasını yok eden 5000 ATK Nihai Lord."
    },
    {
      "id": "ex-6",
      "title": "Örnek Kombo 6: Divine Serpent Geh & Seven Seas Apocalypse ile Sonsuz Can ve Yenilmezlik",
      "cardsNeeded": [
        "The Seal of Orichalcos",
        "Divine Serpent Geh - Infinity End",
        "Seven Seas Apocalypse"
      ],
      "sequence": [
        "The Seal of Orichalcos",
        "Divine Serpent Geh - Infinity End",
        "Seven Seas Apocalypse"
      ],
      "difficulty": "İleri Seviye / Sonsuz Güç",
      "steps": [
        "Sahanızdaki canavar yok edildiğinde elinizden \"Divine Serpent Geh - Infinity End\" Özel Çağrılır (Can puanınız 0 olsa bile DÜELLOYU KAYBETMEZSİNİZ!).",
        "Savaş Aşamasına geçtiğinizde Geh'in sürekli kuralı devreye girer: Saldırdığı rakip canavarın ATK'si kaç olursa olsun o savaşta Geh'in ATK'si sonsuz (Infinity) güce ulaşır ve hedef canavarı ezer.",
        "\"Seven Seas Apocalypse\" büyüsüyle sahadaki tüm zayıflıkları silin ve rakip sahasını karanlık denizlerin altına gömün."
      ],
      "result": "Can puanı sıfır olsa bile kaybetmeyi engelleyen, sonsuz saldırı gücüne ulaşabilen ve rakibin kazanma şansını sıfırlayan kıyamet kombosu."
    },
    {
      "id": "ex-7",
      "title": "Örnek Kombo 7: Orichalcos Kyutora & Wicked Chain ile Hasar Emme ve The Great Leviathan",
      "cardsNeeded": [
        "Orichalcos Kyutora",
        "Wicked Chain",
        "The Great Leviathan (Ekstra Deste)"
      ],
      "sequence": [
        "Orichalcos Kyutora",
        "Wicked Chain",
        "Orichalcos Protos",
        "The Great Leviathan"
      ],
      "difficulty": "İleri Seviye / Kadim Canavar",
      "steps": [
        "\"Orichalcos Kyutora\"yı sahaya sürün: Sürekli kuralı gereği savaştan alacağınız TÜM savaş hasarlarını tamamen emip 0'a indirir ve emilen hasarı hafızasında depolar.",
        "\"Wicked Chain\" ile rakibin en güçlü canavarlarını zincirleyip sahadan ayrılmalarını ve efekt kullanmalarını engelleyin.",
        "Kyutora yok edildiğinde emdiği hasar gücüyle mezarlıktan ve desteden \"Orichalcos Protos\" Özel Çağrılır.",
        "Protos'un gücüyle Ekstra Destenizden kadim devasa yaratık \"The Great Leviathan\" sahaya fırlar ve depolanan binlerce ATK ile rakip ordusunu tek hamlede yutar!"
      ],
      "result": "Hasarı sıfırlayan, rakibin patron canavarını zincirleyen ve devasa kadim gücü sahaya indiren kilit kombosu."
    },
    {
      "id": "ex-8",
      "title": "Örnek Kombo 8: Hermos the United Dragon ile Canavarları Donatma ve Çift Saldırı Baskısı",
      "cardsNeeded": [
        "The Claw of Hermos",
        "1 Ejderha Canavarı (Elde veya Sahada)",
        "Red-Eyes Black Dragon Shield (Ekstra Deste)"
      ],
      "sequence": [
        "The Claw of Hermos",
        "Hermos the United Dragon",
        "Red-Eyes Black Dragon Shield"
      ],
      "difficulty": "Kolay / Donatım Gücü",
      "steps": [
        "\"The Claw of Hermos\" büyüsünü çalıştırın ve elinizdeki veya sahanızdaki 1 Ejderha canavarını Mezarlığa gönderin.",
        "Ekstra Destenizden doğrudan \"Red-Eyes Black Dragon Shield\" Füzyon Canavarını çağırın ve sahanızdaki herhangi bir canavara Donatım Kartı olarak donatın!",
        "Donatılan canavar sahadaki ve mezarlıklardaki tüm ejderhaların toplam DEF'si kadar devasa bir DEF bonusu kazanır ve savaşta yok edilemez.",
        "Ayrıca \"Hermos the United Dragon\"ın temaslı gücü sayesinde donatılan canavar her savaş aşamasında canavarlara 2 kez arka arkaya saldırabilir!"
      ],
      "result": "Feda edilen ejderhayı koruyucu bir kalkana ve çift saldırı silahına dönüştüren efsanevi Hermos donatım taktiği."
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
