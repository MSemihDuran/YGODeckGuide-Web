// Her deste için anlaşılır, kısa ve adım adım kombo rehberleri
export const DECK_COMBOS = {
  // ==================== RED-EYES DESTESİ KOMBOLARI ====================
  'red-eyes': [
    {
      id: 're-1',
      title: 'Örnek Kombo 1: Tek Kartla Red-Eyes Dark Dragoon Çağrısı',
      cardsNeeded: ['Red-Eyes Fusion (veya Red-Eyes Insight)'],
      difficulty: 'Kolay',
      steps: [
        'Elinizdeki "Red-Eyes Fusion" kartını doğrudan çalıştırın.',
        'Desteden malzeme olarak 1 "Red-Eyes Black Dragon" ve 1 "Dark Magician"ı doğrudan Mezarlığa gönderin.',
        'Ekstra Destenizden "Red-Eyes Dark Dragoon" canavarını Fusion Çağrısı ile sahaya indirin.',
        'Dragoon sahaya geldiğinde rakibin 1 canavarını yok edip o canavarın ATK\'si kadar rakibe yakma hasarı verin.'
      ],
      result: 'Hedef alınamaz, efektle patlamaz, rakip kartlarını yok eden ve her şeyi iptal edebilen (omni-negate) 4000 ATK\'lik nihai patron sahadadır.'
    },
    {
      id: 're-2',
      title: 'Örnek Kombo 2: Red-Eyes Flare Metal Dragon ile LP Yakma Baskısı',
      cardsNeeded: ['Red-Eyes Black Meteor Dragon', 'The Black Stone of Legend (veya Seviye 7 Red-Eyes)'],
      difficulty: 'Kolay / Orta',
      steps: [
        'Desteden Seviye 5+ Normal canavarı (Red-Eyes Black Dragon) Mezara göndererek "Red-Eyes Black Meteor Dragon"ı elden Özel Çağırın (Seviyesi 7 olur).',
        '"The Black Stone of Legend"ı Normal Çağırın ve feda ederek desteden 2. "Red-Eyes Black Dragon"ı Özel Çağırın.',
        'Sahadaki 2 adet Seviye 7 canavarı birleştirerek Ekstra Desteden "Red-Eyes Flare Metal Dragon"ı Xyz Çağrısı ile çağırın.'
      ],
      result: 'Kart efektleriyle yok edilemeyen ve rakip her kart/efekt çalıştırdığında anında rakibe 500 hasar vuran kilit bir canavar sahadadır.'
    },
    {
      id: 're-3',
      title: 'Örnek Kombo 3: Black Metal Dragon ile Arama ve Diriltme',
      cardsNeeded: ['Black Metal Dragon', 'Red-Eyes Darkness Metal Dragon'],
      difficulty: 'Orta',
      steps: [
        '"Black Metal Dragon"ı Normal Çağırın.',
        'Sahanızdaki Black Metal Dragon\'u oyundan çıkararak (banish) elinizden "Red-Eyes Darkness Metal Dragon"ı Özel Çağırın.',
        'Black Metal Dragon mezara gittiği için efekti tetiklenir: Destenizden "Red-Eyes Fang with Chain" veya "Red-Eyes Insight"ı elinize ekleyin.',
        'Red-Eyes Darkness Metal Dragon\'un efektiyle mezarlıktaki herhangi bir Ejderhayı sahaya geri diriltin.'
      ],
      result: '2800 ATK ejderha + mezardan diriltilen canavar + ele aranan koruyucu tuzak ile muazzam saha avantajı.'
    },
    {
      id: 're-4',
      title: 'Örnek Kombo 4: Max Metalmorph ile Fullmetal Dragon Baskını',
      cardsNeeded: ['Max Metalmorph', 'Sahada Seviye 5+ Ejderha (Örn: Red-Eyes Black Dragon)'],
      difficulty: 'Kolay',
      steps: [
        '"Max Metalmorph" tuzağını sahaya kapalı koyun.',
        'Rakip hamle yaparken veya ana aşamada tuzağı aktifleştirin.',
        'Sahadaki Seviye 7 Red-Eyes canavarınızı feda edin; desteden doğrudan "Red-Eyes Black Fullmetal Dragon" çağırın ve tuzağı ona donatın.',
        'Fullmetal Dragon sahaya indiğinde rakip bir kart/efekt çalıştırırsa anında iptal edin ve rakibe canavarının ATK\'si kadar hasar vurun.'
      ],
      result: 'Sihir ve canavar efektlerinden etkilenmeyen, +400 ATK/DEF kazanan ve rakip hamlelerini iptal edip can yakan zırhlı ejderha.'
    },
    {
      id: 're-5',
      title: 'Örnek Kombo 5: Neo Red-Eyes Ultimate Dragon ile Çoklu Bitiriş',
      cardsNeeded: ['3 "Red-Eyes" Canavarı (veya Red-Eyes Fusion)'],
      difficulty: 'İleri Seviye',
      steps: [
        '3 adet Red-Eyes canavarını birleştirerek Ekstra Desteden "Neo Red-Eyes Ultimate Dragon"ı Fusion Çağırın.',
        'Savaş Aşamasına geçip saldırı ilan edin.',
        'Saldırı sonunda Ekstra Destenizden 1 Red-Eyes Fusion veya Xyz canavarını mezara göndererek arka arkaya 2 kez daha saldırın.',
        'Rakip bir Red-Eyes canavarınızı hedef alan efekt açarsa, mezardaki bu kartı oyundan çıkarıp o efekti iptal edin ve o kartı yok edin.'
      ],
      result: 'Tek turda 3 kez saldırabilen ve mezardayken bile takımı koruyan 4500 ATK devasa füzyon ejderhası.'
    }
  ],

  // ==================== HARPIE LADY DESTESİ KOMBOLARI ====================
  'harpie': [
    {
      id: 'hp-1',
      title: 'Örnek Kombo 1: Channeler & Perfumer ile Cyber Slash Harpie Lady',
      cardsNeeded: ['Harpie Channeler', 'Elde 1 Harpie kartı'],
      difficulty: 'Kolay',
      steps: [
        '"Harpie Channeler"ı sahaya Normal Çağırın.',
        'Elinizden 1 Harpie kartı atarak Channeler\'ın efektini çalıştırın: Desteden "Harpie Perfumer"ı Savunma Konumunda Özel Çağırın.',
        'Perfumer sahaya indiğinde efekti devreye girer: Destenizden "Elegant Egotist"i elinize ekleyin.',
        'Channeler sahadayken Tuner sayılabildiğinden Perfumer ile birleşip Seviye 8 Synchro yapın: "Cyber Slash Harpie Lady"!',
        '"Elegant Egotist" büyüsünü çalıştırıp desteden "Harpie Lady 1" Özel Çağırın.'
      ],
      result: 'Sahada Cyber Slash Harpie Lady (büyü/tuzak açıldığında rakip canavarı ele zıplatır) + Harpie Lady 1 (+300 ATK bonusu).'
    },
    {
      id: 'hp-2',
      title: 'Örnek Kombo 2: Harpies\' Hunting Ground ile Arka Sırayı Süpürme',
      cardsNeeded: ['Harpies\' Hunting Ground', 'Harpie Channeler', 'Elegant Egotist'],
      difficulty: 'Kolay',
      steps: [
        '"Harpies\' Hunting Ground" alan büyüsünü aktifleştirin.',
        '"Harpie Channeler"ı çağırın: Alan büyüsü tetiklenir ve rakibin 1 Sihir/Tuzak kartı yok edilir.',
        '"Elegant Egotist" oynayarak desteden 2. bir Harpie çağırın: Alan büyüsü tekrar tetiklenir ve rakibin 2. arka sıra kartı yok edilir.',
        'Sahadaki 2 Harpie canavarını birleştirerek Link-2 "Harpie Conductor" veya Seviye 4 Xyz çağırın.'
      ],
      result: 'Rakibin tuzak ve büyüleri tamamen temizlenir, güvenli bir şekilde doğrudan saldırı ve oyun kontrolü sağlanır.'
    },
    {
      id: 'hp-3',
      title: 'Örnek Kombo 3: Elden Harpie\'s Feather Storm ile Rakibi Kilitleme (Turn Skip)',
      cardsNeeded: ['Sahada herhangi 1 "Harpie" canavarı', 'Elde "Harpie\'s Feather Storm"'],
      difficulty: 'Kolay / Stratejik',
      steps: [
        'Sahanızda herhangi bir Harpie canavarı varken "Harpie\'s Feather Storm" tuzağı sahaya kapalı konulmaya gerek kalmadan doğrudan ELDEN oynanabilir.',
        'Rakibin turunda, rakip ilk canavar efektini açtığı an elinizden Feather Storm\'u çalıştırın.',
        'Tur sonuna kadar rakibin tüm canavar efektleri nerede çalıştırılırsa çalıştırılsın (saha, el, mezarlık) tamamen geçersiz kılınır.'
      ],
      result: 'Rakip hiçbir kombo hamlesi yapamaz ve turunu oynamadan pas geçmek zorunda kalır.'
    },
    {
      id: 'hp-4',
      title: 'Örnek Kombo 4: Harpie\'s Pet Phantasmal Dragon ile Dokunulmazlık & Doğrudan Saldırı',
      cardsNeeded: ['3 Seviye 4 RÜZGAR Harpie canavarı (Channeler + Egotist + Oracle vb.)'],
      difficulty: 'Orta',
      steps: [
        'Channeler, Perfumer ve Elegant Egotist kombolarıyla sahaya tam 3 adet 4. Seviye Harpie canavarı dizin.',
        '3 canavarı birleştirerek Seviye 4 Xyz Çağrısı yapın: "Harpie\'s Pet Phantasmal Dragon".',
        'Phantasmal Dragon üzerinde materyal olduğu sürece rakip hiçbir Harpie canavarınızı kart efektleriyle hedef alamaz ve onlara saldıramaz.'
      ],
      result: 'Tüm takımınız koruma kalkanına girer ve Phantasmal Dragon her tur doğrudan rakip LP\'sine 2000 hasar vurabilir.'
    }
  ],

  // ==================== ANCIENT EGYPTIAN GODS & SACRED BEAST KOMBOLARI ====================
  'ancient-gods': [
    {
      id: 'aeg-1',
      title: 'Örnek Kombo 1: Dark Beckoning Beast ile 1 Turda 4000 ATK Sacred Beast',
      cardsNeeded: ['Dark Beckoning Beast'],
      difficulty: 'Kolay',
      steps: [
        '"Dark Beckoning Beast"ı Normal Çağırın.',
        'Efektiyle destenizden "Dark Summoning Beast" canavarını elinize ekleyin.',
        'Dark Beckoning Beast sahadayken 1 ek Normal Çağrı hakkı verir: "Dark Summoning Beast"ı feda ödemeden Normal Çağırın.',
        'Dark Summoning Beast\'i feda edin: Desteden çağırma koşullarını yok sayarak doğrudan "Raviel, Lord of Phantasms" veya "Hamon, Lord of Striking Thunder"ı Özel Çağırın!'
      ],
      result: 'Tek bir kartla desteden feda ödemeden anında 4000 ATK\'lik devasa bir Kutsal Canavar sahaya iner.'
    },
    {
      id: 'aeg-2',
      title: 'Örnek Kombo 2: Egyptian Gods\' Disciple & Guardian ile Tek Hamlede Tanrı İndirme',
      cardsNeeded: ['Egyptian Gods\' Disciple', 'Elde 1 Tanrı Kartı (Slifer/Obelisk/Ra)'],
      difficulty: 'Kolay / Hızlı',
      steps: [
        'Elinizdeki Tanrı canavarını göstererek "Egyptian Gods\' Disciple" canavarını elden Özel Çağırın.',
        'Disciple sahaya indiğinde destenizden "Prayers to the Egyptian Gods" büyüsünü kapalı koyar ve bu tur açılabilir.',
        '"Egyptian Gods\' Disciple" kurallara göre tek başına 3 Feda yerine geçer.',
        'Disciple\'ı feda ederek elinizdeki Mısır Tanrısını (Obelisk the Tormentor veya Slifer the Sky Dragon) tek hamlede sahaya Normal Çağırın.'
      ],
      result: '3 ayrı canavar toplamaya gerek kalmadan tek turda nihai Mısır Tanrısı sahaya iner ve Prayers büyüsüyle rakip efektlerine karşı dokunulmaz olur.'
    },
    {
      id: 'aeg-3',
      title: 'Örnek Kombo 3: Fallen Paradise ile Dokunulmazlık ve Her Tur +2 Kart Çekme',
      cardsNeeded: ['Sahada Uria, Hamon veya Raviel', 'Fallen Paradise of the Sacred Beasts'],
      difficulty: 'Kolay',
      steps: [
        'Sahada en az bir Kutsal Canavar varken "Fallen Paradise of the Sacred Beasts" alan büyüsünü aktifleştirin.',
        'Alan büyüsü sahadayken rakibiniz Kutsal Canavarlarınızı kart efektleriyle hedef alamaz ve efektlerle yok edemez.',
        'Her turun Ana Aşamasında Fallen Paradise\'ın efektini çalıştırarak destenizden BEDAVA 2 kart çekin.'
      ],
      result: 'Yenilmez, hedef alınamayan 4000 ATK canavarlar ve her tur desteden çekilen +2 kart ile ezici el üstünlüğü.'
    },
    {
      id: 'aeg-4',
      title: 'Örnek Kombo 4: Slifer the Sky Dragon - Immortal Chaos Uyanışı',
      cardsNeeded: ['Slifer the Sky Dragon (Sahada)', 'Mezarlıkta "Slifer - Immortal Chaos"'],
      difficulty: 'İleri Seviye',
      steps: [
        'Sahadaki "Slifer the Sky Dragon" herhangi bir sebeple Mezarlığa gittiğinde mezardaki Immortal Chaos\'un efekti tetiklenir.',
        'Elden veya sahadan 1 Chaos canavarı feda ederek "Slifer the Sky Dragon - Immortal Chaos"ı mezardan Özel Çağırın (Bu çağrıya zincir başlatılamaz).',
        'Immortal Chaos çağrıldığında mezarlığı karıştırıp 2 rastgele kartı elinize çeker.',
        'Elinizdeki her kart için 2000 ATK/DEF kazanır ve rakibin açık saldırı canavarlarının ATK\'sini düşürüp 0 olunca yok eder.'
      ],
      result: 'Diğer tüm kart efektlerinden tamamen etkilenmeyen, tek vuruşta oyunu bitirebilecek güçte bir antik kaos ejderhası sahayı ele geçirir.'
    }
  ],

  // ==================== BLUE-EYES DESTESİ KOMBOLARI ====================
  'blue-eyes': [
    {
      id: 'be-1',
      title: 'Örnek Kombo 1: Sage with Eyes of Blue ile Hızlı Mavi Gözlü',
      cardsNeeded: ['Sage with Eyes of Blue', 'Herhangi bir Efekt Canavarı'],
      difficulty: 'Kolay',
      steps: [
        '"Sage with Eyes of Blue"ı elden mezara atarak sahanızdaki 1 efekt canavarını hedef alın.',
        'O canavarı Mezarlığa gönderin ve destenizden doğrudan "Blue-Eyes White Dragon" Özel Çağırın.',
        'Daha sonra mezarlıktaki ejderhayı "Monster Reborn" veya diğer kartlarla tekrar sahaya getirebilirsiniz.'
      ],
      result: 'Tek hamlede 3000 ATK\'lik efsanevi beyaz ejderha sahaya kurulur.'
    },
    {
      id: 'be-2',
      title: 'Örnek Kombo 2: Blue-Eyes Alternative White Dragon ile Savaşsız Yok Etme',
      cardsNeeded: ['Blue-Eyes Alternative White Dragon', 'Elde 1 "Blue-Eyes White Dragon"'],
      difficulty: 'Kolay',
      steps: [
        'Elinizdeki orijinal "Blue-Eyes White Dragon"ı rakibe gösterin.',
        '"Blue-Eyes Alternative White Dragon"ı elinizden bedelsiz olarak Özel Çağırın.',
        'Efektini çalıştırın: Rakibin kontrol ettiği 1 canavarı hedef alıp anında yok edin.'
      ],
      result: 'Savaş ilan etmeden rakibin en güçlü canavarı temizlenir ve sahada 3000 ATK\'lik bir ejderha kalır.'
    },
    {
      id: 'be-3',
      title: 'Örnek Kombo 3: Blue-Eyes Spirit Dragon ile Mezarlık Kilidi & Azure-Eyes Çağrısı',
      cardsNeeded: ['1 Seviye 1 IŞIK Tuner (Sage/White Stone)', '1 Seviye 8 "Blue-Eyes" canavarı'],
      difficulty: 'Orta',
      steps: [
        'Sahadaki Seviye 1 Tuner ve Seviye 8 Blue-Eyes canavarını birleştirerek Seviye 9 Synchro Çağrısı yapın: "Blue-Eyes Spirit Dragon"!',
        'Spirit Dragon sahadayken: Rakip aynı anda 2 veya daha fazla canavar Özel Çağıramaz ve mezarlık efektlerini iptal eder.',
        'Rakip bir tahta silme kartı açtığında: Spirit Dragon\'u feda edin ve Ekstra Desteden anında "Azure-Eyes Silver Dragon" çağırın.',
        'Azure-Eyes sahaya indiğinde ejderhalarınız bir sonraki turun sonuna kadar hedef alınamaz ve kart efektleriyle yok edilemez.'
      ],
      result: 'Rakibin mezar hamlelerini ve çoklu çağırmalarını kilitler, ejderhalarınıza tam dokunulmazlık sağlar.'
    },
    {
      id: 'be-4',
      title: 'Örnek Kombo 4: Neo Blue-Eyes Ultimate Dragon ile 4500 ATK Üçlü Saldırı (OTK)',
      cardsNeeded: ['Polymerization (veya Dragon\'s Mirror)', '3 "Blue-Eyes White Dragon"'],
      difficulty: 'İleri Seviye',
      steps: [
        'Elden, sahadan veya mezardan (Dragon\'s Mirror ile) 3 adet "Blue-Eyes White Dragon"ı birleştirin.',
        'Ekstra Destenizden "Neo Blue-Eyes Ultimate Dragon"ı Füzyon Çağrısıyla sahaya indirin.',
        'Saldırı ilan edin; her başarılı saldırıdan sonra Ekstra Destenizden 1 "Blue-Eyes" Füzyon canavarını Mezarlığa gönderin.',
        'Neo Blue-Eyes bu sayede tek bir Savaş Aşamasında tam 3 kez arka arkaya saldırabilir (4500 x 3 = 13500 Hasar!).'
      ],
      result: 'Tek bir turda rakibin sahasındaki tüm savunmaları ezip tek hamlede oyunu bitiren nihai zafer saldırısı (OTK).'
    }
  ],

  // ==================== MAGICIAN & GOD DESTESİ KOMBOLARI ====================
  'magician-god': [
    {
      id: 'mg-1',
      title: 'Örnek Kombo 1: Illusion of Chaos & Magician\'s Rod ile Arama Motoru',
      cardsNeeded: ['Illusion of Chaos (Elde)'],
      difficulty: 'Kolay',
      steps: [
        'Elinizdeki "Illusion of Chaos" kartını gösterin.',
        'Destenizden "Magician\'s Rod" canavarını elinize ekleyin, elinizden herhangi 1 kartı destenin en üstüne koyun.',
        '"Magician\'s Rod"ı Normal Çağırın; sahaya geldiğinde efektini çalıştırın.',
        'Destenizden "Secrets of Dark Magic", "The Eye of Timaeus" veya "Dark Magical Circle" kartını doğrudan elinize ekleyin.'
      ],
      result: 'Tek bir kartla desteyi tarayarak elinizi istediğiniz büyü ve kombo parçalarıyla doldurun.'
    },
    {
      id: 'mg-2',
      title: 'Örnek Kombo 2: The Eye of Timaeus ile Tek Kartla Füzyon Patronu',
      cardsNeeded: ['Dark Magician (Sahada)', 'The Eye of Timaeus (Elde)'],
      difficulty: 'Kolay',
      steps: [
        'Sahadaki "Dark Magician"ı hedef alarak "The Eye of Timaeus" büyüsünü çalıştırın.',
        'Başka hiçbir malzeme gerekmeden doğrudan "Red-Eyes Dark Dragoon" veya "Dark Magician the Dragon Knight"ı Ekstra Desteden Füzyon Çağırın.',
        'Eğer Dragon Knight çağırdıysanız, sahadaki tüm Sürekli Sihir ve Tuzaklarınız rakip tarafından hedef alınamaz ve yok edilemez.'
      ],
      result: 'Tek bir büyüyle ekstra malzeme harcamadan en güçlü füzyon büyücüsü sahaya dikilir.'
    },
    {
      id: 'mg-3',
      title: 'Örnek Kombo 3: Millennium Revelation ile The Winged Dragon of Ra Diriltme',
      cardsNeeded: ['Millennium Revelation', 'Elde 1 İlahi-Canavar (Ra)', 'Monster Reborn'],
      difficulty: 'Orta',
      steps: [
        '"Millennium Revelation" sürekli büyüsünü açın ve elinizden "The Winged Dragon of Ra"yı mezara gönderin.',
        'Efektiyle mezarlığınızdan veya destenizden "Monster Reborn" kartını elinize ekleyin.',
        'Sahadaki "Millennium Revelation"ı mezara gönderin: Bu tur Monster Reborn ile Ra\'yı çağırma hakkı kazanırsınız.',
        '"Monster Reborn" çalıştırarak mezardaki "The Winged Dragon of Ra"yı kuralları yok sayarak sahaya diriltin!'
      ],
      result: 'Normalde mezardan çağrılamayan güneş tanrısı Ra, doğrudan sahaya iner ve 1000 LP ile rakip canavarları yok edebilir.'
    },
    {
      id: 'mg-4',
      title: 'Örnek Kombo 4: Sphere Mode ile Rakibin 3 Canavarını Yutma ve 4000 ATK Ra',
      cardsNeeded: ['The Winged Dragon of Ra - Sphere Mode'],
      difficulty: 'Kolay / Cezalandırıcı',
      steps: [
        'Rakibin sahasında kurduğu 3 tehlikeli patron canavarı feda ederek rakip sahaya "Sphere Mode"u Normal Çağırın.',
        'Rakibin tüm sahası ve savunması feda edilerek anında silinir.',
        'Kendi sonraki turunuzda: Sphere Mode\'u feda ederek destenizden orijinal "The Winged Dragon of Ra"yı 4000 ATK/DEF ile Özel Çağırın!'
      ],
      result: 'Rakibin emek verdiği tahtayı tek hamlede sıfırlayıp kendi tarafınıza 4000 ATK gücünde Mısır Tanrısını kazandırır.'
    },
    {
      id: 'mg-5',
      title: 'Örnek Kombo 5: Millennium Ankh ile Doğrudan The Legendary Exodia Incarnate',
      cardsNeeded: ['Millennium Ankh', 'Deste/Elde 5 Kapatılmış Parça'],
      difficulty: 'Kolay / Efsanevi',
      steps: [
        '"Millennium Ankh" büyü kartını çalıştırın.',
        'Elinizden, destenizden veya mezarlığınızdan 5 farklı Exodia parçasını gösterin.',
        'Ekstra Destenizden "The Legendary Exodia Incarnate" canavarını doğrudan sahaya indirin.',
        'Exodia diğer kartların efektlerinden tamamen etkilenmez ve her tur sonu mezardan parça ekleyerek ATK kazanır.'
      ],
      result: 'Elde 5 parça beklemek yerine destedeki parçalarla anında sahaya inen dokunulmaz ve devasa bir Exodia.'
    }
  ],

  // ==================== TOON DESTESİ KOMBOLARI ====================
  'toon': [
    {
      id: 'tn-1',
      title: 'Örnek Kombo 1: Toon Bookmark & Table of Contents ile Kusursuz Arama',
      cardsNeeded: ['Toon Table of Contents (veya Toon Bookmark)'],
      difficulty: 'Kolay',
      steps: [
        '"Toon Table of Contents" kartını çalıştırarak 2. Table of Contents\'i, ardından 3.sünü desteden çekin (deste 3 kart incelir).',
        'Son kopyayla desteden "Toon Bookmark"ı elinize ekleyin.',
        '"Toon Bookmark" çalıştırarak destenizden "Toon Kingdom" saha büyüsünü elinize alın.',
        '"Toon Kingdom"ı sahaya açın (destenin en üstünden 3 kart kapalı sürgün edilir).'
      ],
      result: 'Toon canavarlarınızı hedef alınmaktan ve yok edilmekten koruyan aşılmaz kale Toon Kingdom kurulur ve mezarlıkta koruyucu Bookmark hazır bekler.'
    },
    {
      id: 'tn-2',
      title: 'Örnek Kombo 2: Toon Page-Flip ile Desteden Sürpriz Çağrı',
      cardsNeeded: ['Toon Kingdom (Sahada)', 'Toon Page-Flip (Elde)'],
      difficulty: 'Kolay',
      steps: [
        'Sahada Toon Kingdom açıkken Hızlı Büyü olan "Toon Page-Flip"i çalıştırın.',
        'Destenizden 3 güçlü Toon gösterin (Örn: Toon Black Luster Soldier, Red-Eyes Toon Dragon, Blue-Eyes Toon Dragon).',
        'Rakip rastgele 1 tanesini seçer; seçilen dev canavar çağırma koşulları yok sayılarak sahaya Özel Çağrılır.',
        'Çağrılan canavar Toon Kingdom koruması altına girer.'
      ],
      result: 'Feda ödemeden tek bir hızlı büyüyle 3000 ATK\'lik yıkıcı bir Toon canavarı sahaya kurulur.'
    },
    {
      id: 'tn-3',
      title: 'Örnek Kombo 3: Comic Hand ile Rakibin Boss Canavarını Çalma',
      cardsNeeded: ['Toon Kingdom (Sahada)', 'Comic Hand (Elde)'],
      difficulty: 'Kolay',
      steps: [
        'Rakibin sahasındaki en güçlü ve en yüksek ATK\'li canavara "Comic Hand" ekipman büyüsünü donatın.',
        'O canavarın kontrolünü kalıcı olarak kendi sahanıza geçirin.',
        'Canavar artık bir Toon sayılır; Toon Kingdom sayesinde hedef alınamaz ve savaşta yok edilemez.',
        'Rakibin sahasında Toon yoksa bu çaldığınız canavarla doğrudan rakibin can puanına saldırın!'
      ],
      result: 'Rakibin en büyük kozunu çalarak kendi silahınız yaparsınız ve doğrudan hasar vurursunuz.'
    },
    {
      id: 'tn-4',
      title: 'Örnek Kombo 4: Toon Terror & Briefcase ile Çifte Savunma Hattı',
      cardsNeeded: ['Sahada 1 Toon Canavarı', 'Toon Terror (veya Toon Briefcase)'],
      difficulty: 'Kolay / Kontrol',
      steps: [
        '"Toon Terror" ve "Toon Briefcase" tuzaklarını sahaya kapalı koyun.',
        'Rakip bir canavar çağırdığı an "Toon Briefcase" açın: O canavar mezara bile gitmeden sahibinin destesine geri karıştırılır.',
        'Rakip sahanızı temizlemek için büyü/tuzak veya efekt açtığında "Toon Terror" Karşı Tuzağını açın.',
        'Rakibin efektini anında geçersiz kılıp kartını patlatın.'
      ],
      result: 'Rakibin hem canavar çağırması hem de kart efektleri tamamen felç edilir.'
    }
  ],

  // ==================== SUPREME KING & PENDULUM KOMBOLARI ====================
  'pendulum': [
    {
      id: 'pen-1',
      title: 'Örnek Kombo 1: Pendulum Call & Harmonizing Magician ile Seri Çağrı',
      cardsNeeded: ['Pendulum Call', 'Elde 1 kart'],
      difficulty: 'Kolay / Orta',
      steps: [
        'Elden 1 kart atarak "Pendulum Call" büyüsünü çalıştırın: Destenizden ölçekleri 1 ve 8 olan 2 Pendulum Büyücüsü arayın (Örn: Black Fang ve Harmonizing Magician).',
        'Pendulum ölçeklerinizi (1 ve 8) sol ve sağ bölgelere yerleştirin.',
        'Seviye 2 ile 7 arasındaki tüm canavarlarınızı tek seferde Pendulum Çağrısıyla sahaya indirin!',
        'Harmonizing Magician sahaya indiğinde desteden ek olarak 1 "Magician" canavarını Özel Çağırır.'
      ],
      result: 'Tek turda el ve Ekstra Desteden 3-4 canavar aynı anda sahaya yayılır ve Synchro/Xyz zeminini hazırlar.'
    },
    {
      id: 'pen-2',
      title: 'Örnek Kombo 2: Timestar Magician ile Arama ve Pendulum Kalkanı',
      cardsNeeded: ['2 Seviye 4 Pendulum Canavarı'],
      difficulty: 'Orta',
      steps: [
        'Sahadaki iki adet Seviye 4 Pendulum canavarını birleştirerek Seviye 4 Xyz "Timestar Magician"ı çağırın.',
        '1 materyal ayırarak Timestar\'ın efektini çalıştırın: Destenizden "Astrograph Sorcerer"ı elinize ekleyin.',
        'Sahadaki herhangi bir kartınız yok edilirse, Timestar malzemenin yerine desteden 1 Büyücü mezara yollayarak kartlarınızı korur.'
      ],
      result: 'Astrograph Sorcerer gibi kilit kartları ele getirir ve ölçeklerinizin patlamasını engeller.'
    },
    {
      id: 'pen-3',
      title: 'Örnek Kombo 3: Astrograph Sorcerer ile Supreme King Z-ARC İndirme',
      cardsNeeded: ['Astrograph Sorcerer', 'Mezarlık/Sahada 4 Farklı Boyut Ejderhası (Fusion, Synchro, Xyz, Pendulum)'],
      difficulty: 'İleri Seviye',
      steps: [
        '"Astrograph Sorcerer"ın özel yeteneğini çalıştırın.',
        'Elinizden, sahanızdan ve/veya Mezarlığınızdan 4 Ejderhayı (Pendulum Dragon, Xyz Dragon, Synchro Dragon, Fusion Dragon) oyundan çıkarın.',
        'Ekstra Destenizden nihai patron "Supreme King Z-ARC"ı Özel Çağırın!',
        'Z-ARC sahaya indiği saniye: Rakibin kontrol ettiği TÜM kartları havaya uçurun!'
      ],
      result: '4000 ATK/DEF, hedef alınamaz, kart efektiyle yok edilemez ve sahaya iner inmez rakibin tüm sahasını sıfırlayan nihai tanrı ejderha.'
    },
    {
      id: 'pen-4',
      title: 'Örnek Kombo 4: Supreme King Dragon Starving Venom ile Efekt Çalma',
      cardsNeeded: ['2 KARANLIK Pendulum Canavarı'],
      difficulty: 'Orta',
      steps: [
        'Sahadaki 2 KARANLIK Pendulum canavarını feda ederek Polimerizasyon olmadan Ekstra Desteden "Supreme King Dragon Starving Venom"ı çağırın.',
        'Mezarlıktaki veya sahadaki herhangi bir güçlü canavarı hedef alın.',
        'O canavarın adını ve tüm efektlerini tur sonuna kadar Starving Venom\'a kopyalayın.',
        'Tüm canavarlarınıza savunma delen (piercing) savaş hasarı yeteneği kazandırın.'
      ],
      result: 'Rakibin veya kendi en güçlü mezarlık efektini bedava kopyalayıp rakibin savunmasını delerek bitirici vuruş yapar.'
    }
  ],

  // ==================== TOON GODS DECK KOMBOLARI ====================
  'toon-gods': [
    {
      id: 'tg-1',
      title: 'Örnek Kombo 1: Toon God Collision ile Koşulsuz Toon Slifer / Obelisk İndirme',
      cardsNeeded: ['Toon God Collision (Elde)'],
      difficulty: 'Kolay',
      steps: [
        'Elinizdeki "Toon God Collision" kartını doğrudan etkinleştirin.',
        'Destenizden orijinal adı "Toon Slifer the Sky Dragon" veya "Toon Obelisk The Tormentor" olan Tanrı kartını seçin.',
        'Hiçbir feda ödemeden ve çağırma koşulunu yok sayarak o Tanrıyı açık Saldırı Konumunda sahaya Özel Çağırın ve kartı ona donatın!',
        'Donatılan tanrı savaşta yok edilemez. İstenirse sonraki aşamada Collision mezara gönderilerek desteden "Toon Terror" tuzağı ele alınabilir.'
      ],
      result: 'Tek bir kartla desteden feda ödemeden 4000 ATK\'lik yok edilemez Toon Tanrısı sahaya iner ve doğrudan rakibe vurabilir.'
    },
    {
      id: 'tg-2',
      title: 'Örnek Kombo 2: Funny Dark Rabbit & Comic Cat ile Rakip Canavarı Feda Ederek Tanrı Çağırma',
      cardsNeeded: ['Funny Dark Rabbit', 'Comic Cat', 'Toon Kingdom (Sahada)'],
      difficulty: 'Orta',
      steps: [
        '"Funny Dark Rabbit"ı Normal Çağırın; efektiyle ek bir Normal Çağrı hakkı kazanın ve desteden Toon Kingdom\'ı sahaya açın.',
        'Ek hakkınızla "Comic Cat"i sahaya Normal Çağırın.',
        'Comic Cat\'in Hızlı Efektini çalıştırın: Sahada Toon World/Kingdom varken RAKİBİN kontrolündeki 1 canavarı Feda edin!',
        'Desteden veya elinizden "The Toon Winged Dragon of Ra" veya "Toon Obelisk The Tormentor"ı çağrı koşullarını yok sayarak Özel Çağırın.'
      ],
      result: 'Rakibin en tehlikeli canavarı feda edilip yok edilirken kendi tarafınıza efsanevi bir Toon Mısır Tanrısı bedelsiz katılır.'
    },
    {
      id: 'tg-3',
      title: 'Örnek Kombo 3: Toon World Fusion ile Desteden Blue-Eyes Ultimate Toon Dragon',
      cardsNeeded: ['Toon World Fusion', 'Toon World veya Toon Kingdom (Sahada)'],
      difficulty: 'Kolay / Güçlü',
      steps: [
        'Sahada "Toon World" veya "Toon Kingdom" açıkken "Toon World Fusion" büyüsünü çalıştırın.',
        'Sahada Toon World olduğu için malzemeleri sahadan değil DOĞRUDAN DESTENİZDEN gönderin: 1 "Blue-Eyes Toon Dragon" ve 2 Toon canavarı.',
        'Ekstra Destenizden devasa 4500 ATK\'lik "Blue-Eyes Ultimate Toon Dragon"ı Füzyon Çağrısı ile sahaya indirin.',
        'Daha sonra mezarlıktaki "Toon World Fusion"ı sürgün ederek mezardaki canavarlarla 2. bir füzyon olan "Toon Bickuribox"ı çağırın.'
      ],
      result: 'Sıfır el kartı kaybıyla desteden malzeme harcayarak 4500 ATK doğrudan saldırabilen füzyon ejderhası ve ekstra füzyon canavarı sahada yerini alır.'
    },
    {
      id: 'tg-4',
      title: 'Örnek Kombo 4: Dark-Eyes Illusionist & Mind Scan ile Rakibin Elini Açıp Toon Terror Kilidi',
      cardsNeeded: ['Dark-Eyes Illusionist Faceless Mage', 'Toon Terror (veya Evil Box)'],
      difficulty: 'Kolay / Stratejik',
      steps: [
        'Elinizdeki "Dark-Eyes Illusionist Faceless Mage"i mezara atın.',
        'Efektini kullanarak destenizden "Mind Scan" sürekli tuzağını sahanıza açık olarak koyun.',
        'Artık rakibin elindeki tüm kartları ve sahasındaki tüm kapalı kartları her an görebilirsiniz.',
        'Elinizdeki veya "Evil Box" ile çektiğiniz "Toon Terror"ı sahaya kurun.',
        'Rakip ne oynarsa oynasın önceden görüp en kritik hamlesini Toon Terror veya Mind Scan ile iptal edin.'
      ],
      result: 'Rakibin gizli kartları tamamen açığa çıkar ve her hamlesi önceden engellenerek kusursuz kontrol kurulur.'
    },
    {
      id: 'tg-5',
      title: 'Örnek Kombo 5: Toon Rollback & The Toon Winged Dragon of Ra ile Tek Turda OTK',
      cardsNeeded: ['The Toon Winged Dragon of Ra (Sahada)', 'Toon Rollback (Elde)'],
      difficulty: 'İleri Seviye / Tek Vuruş',
      steps: [
        'Toon Ra sahaya geldiğinde LP\'nizi 100 kalacak şekilde ödeyin (Örn: 7900 LP ödeyerek Ra\'nın ATK\'sini 7900 yapın).',
        'Elinizdeki "Toon Rollback" büyü kartını çalıştırıp Toon Ra\'yı hedef alın.',
        'Savaş Aşamasına geçin: Rakip Toon canavarı kontrol etmediği için Toon Ra doğrudan rakip can puanına saldırabilir.',
        'Rollback sayesinde Ra ikinci kez saldırır (7900 x 2 = 15800 doğrudan hasar!).'
      ],
      result: 'Rakibin hiçbir şansı kalmadan tek turda 15000+ doğrudan hasar vurularak oyun saniyeler içinde kazanılır (OTK).'
    }
  ],

  // ==================== EKSTRALAR DESTESİ KOMBOLARI ====================
  'ekstralar': [
    {
      id: 'ex-1',
      title: 'Örnek Kombo 1: Legend of Heart ile 3 Efsanevi Şövalye ve Timaeus the Knight of Destiny',
      cardsNeeded: ['Legend of Heart', '1 Savaşçı Canavar', '3 Efsanevi Ejderha Büyüsü (veya Mezardayken)'],
      difficulty: 'İleri Seviye / Destansı',
      steps: [
        '1000 LP ödeyip sahadaki Savaşçı canavarınızı feda ederek "Legend of Heart"ı aktifleştirin.',
        'Elinizden veya mezarlığınızdan "The Eye of Timaeus", "The Fang of Critias" ve "The Claw of Hermos"u banish edin.',
        'Destenizden 3 efsanevi şövalyeyi ("Legendary Knight Timaeus", "Critias", "Hermos") aynı anda sahaya indirin.',
        'Sahadaki 3 şövalyeyi birleştirerek kart efektlerinden etkilenmeyen ve sahadaki en yüksek ATK\'ye eşitlenen nihai patron "Timaeus the Knight of Destiny"yi çağırın!'
      ],
      result: 'Kart efektlerinden etkilenmeyen, savaş hasarı aldırmayan ve yok edildiğinde 3 şövalyeyi yeniden sahaya getiren ölümsüz birleşik güç.'
    },
    {
      id: 'ex-2',
      title: 'Örnek Kombo 2: The Fang of Critias ve Mirror Force ile Tüm Rakip Sahayı Silme',
      cardsNeeded: ['The Fang of Critias (veya Critias the United Dragon)', 'Mirror Force'],
      difficulty: 'Kolay / Etkili',
      steps: [
        '"Critias the United Dragon"ı elden özel çağırıp desteden "Mirror Force" set edin veya "The Fang of Critias" ile elden/sahadan Mirror Force\'u mezara gönderin.',
        'Ekstra Destenizden "Mirror Force Dragon"ı Özel Çağırın.',
        'Rakip herhangi bir canavarınıza saldırdığında veya bir kart efektiyle hedef aldığında Hızlı Efektini tetikleyin.'
      ],
      result: 'Rakibin sahasındaki tüm açık ve kapalı kartlar tek hamlede tamamen yok edilerek rakip savunması sıfırlanır.'
    },
    {
      id: 'ex-3',
      title: 'Örnek Kombo 3: Guardian Eatos ve Dreadscythe ile Yıkıcı Saldırı Gücü',
      cardsNeeded: ['Guardian Eatos', 'Celestial Sword - Eatos (veya Dreadscythe)'],
      difficulty: 'Orta',
      steps: [
        'Mezarlığınızda canavar yokken "Guardian Eatos"u elinizden bedelsiz Özel Çağırın ve "Celestial Sword - Eatos" donatın.',
        'Donanımı mezara yollayarak rakip mezarlıktan 3 canavarı banish edip Eatos\'un ATK\'sini 4000\'e çıkarın.',
        'Eatos mezara gittiğinde desteden "Guardian Dreadscythe" çağırıp doğrudan "Reaper Scythe - Dreadscythe" kuşanın.'
      ],
      result: 'İki mezarlıktaki her canavar başına +500 ATK kazanan ve yok edilmeye karşı elden kart atarak sahada kalan durdurulamaz bir patron.'
    },
    {
      id: 'ex-4',
      title: 'Örnek Kombo 4: Orichalcos Deuteros & Tritos ile Tam Saha Dokunulmazlığı',
      cardsNeeded: ['The Seal of Orichalcos', 'Orichalcos Deuteros', 'Orichalcos Tritos'],
      difficulty: 'Orta',
      steps: [
        '"The Seal of Orichalcos" sahadayken "Orichalcos Deuteros"u devreye sokarak her tur canavar sayınız x 500 LP kazanın.',
        'Sahadaki Deuteros\'u mezara göndererek "Orichalcos Tritos"u kurun.',
        'Tritos ile dost canavarlarınızı hedef alan rakip büyü/tuzaklarını bedelsiz iptal edip yok edin.'
      ],
      result: 'Rakip büyü ve tuzaklarını engelleyen, canavar saldırılarını savuşturan ve her tur can puanınızı dolduran sarsılmaz Orichalcos kalkanı.'
    },
    {
      id: 'ex-5',
      title: 'Örnek Kombo 5: Egyptian, The Ultimate Lord Of Duel Monster ile Tek Vuruşta Zafer',
      cardsNeeded: ['Egyptian, The Ultimate Lord Of Duel Monster', 'Mezarlıkta/Sahada Ra + Obelisk + Slifer'],
      difficulty: 'İleri Seviye / Tek Hamle',
      steps: [
        '3 Mısır Tanrısını ("Winged Dragon of Ra", "Obelisk The Tormentor", "Slifer The Sky Dragon") oyundan çıkarın.',
        'Çağrısı engellenemeyen "Egyptian, The Ultimate Lord Of Duel Monster"ı sahaya indirin.',
        'Sahadaki tüm diğer kartları oyundan çıkarıp 100.000 ATK ile doğrudan saldırı yapın.'
      ],
      result: 'Kart efektlerinden etkilenmeyen, tek bir doğrudan saldırısıyla düelloyu kazandıran mutlak tanrısal güç.'
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
