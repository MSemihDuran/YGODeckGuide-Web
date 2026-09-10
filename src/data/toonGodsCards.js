export const toonGodsCards = [
  // ==================== CANAVARLAR (15 Kart) ====================
  {
    name: 'Blue-Eyes Toon Dragon',
    apiName: 'Blue-Eyes Toon Dragon',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapatılamaz. Sahada "Toon World" varken elinizden 2 canavar feda edilerek Özel Çağrılmalıdır. Özel Çağrıldığı tur saldıramaz. Bu canavarla saldırı ilan etmek için 500 LP ödemelisiniz. Sahadaki "Toon World" yok edilirse bu kart da yok edilir. Rakibiniz bir Toon canavarı kontrol etmediği sürece doğrudan rakibe saldırabilir; rakip Toon canavarı kontrol ediyorsa saldırı hedefi olarak bir Toon canavarı seçmelidir.',
    summonCondition: 'Sahada "Toon World" açıkken elinizden 2 canavar Feda edilerek Özel Çağrılır.',
    effectSummary: 'Rakibin Toon canavarı yoksa 3000 ATK ile doğrudan saldırabilir (her saldırı için 500 LP ödenir). Sahadaki Toon World yok edilirse kendisi de yok olur.'
  },
  {
    name: 'Bluk Necrofear',
    apiName: 'Bluk Necrofear',
    category: 'Canavar',
    officialText: '(Bu kart sahadayken "Toon World" etkisini kullanabilirsiniz.) Bu kart Mezarlığınızdaysa: Destenizden 1 "Toon World" kartını oyundan çıkarabilirsiniz ve bunu yaparsanız bu kartı Özel Çağırın. Turda bir kez, "Toon World" yok edilirse (savaş veya kart efektiyle), bu kart bu tur yok edilemez. Bu kart sahadan ayrılırsa: Destenizden "Toon Dark Necrofear" hariç 1 "Toon" canavarı Özel Çağırabilirsiniz. Bu kart açık olduğu sürece rakibiniz diğer "Toon" canavarlarını efektlerle hedef alamaz.',
    summonCondition: 'Mezarlıktayken desteden 1 "Toon World" sürgün edilerek el veya mezardan Özel Çağrılabilir.',
    effectSummary: 'Mezardan bedava çağrılır, diğer Toon\'ları hedef alınmaktan korur, sahadan ayrıldığında desteden başka bir Toon canavar çağırır ve sahadayken Toon World varmış gibi sayılır.'
  },
  {
    name: 'Chaos Emperor Dragon - Envoy of the End',
    apiName: 'Chaos Emperor Dragon - Envoy of the End',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapatılamaz. Yalnızca Mezarlığınızdan 1 IŞIK (LIGHT) ve 1 KARANLIK (DARK) canavarı oyundan çıkararak elinizden Özel Çağrılabilir. Turda bir kez: 1000 LP ödeyebilirsiniz; her iki oyuncunun elindeki ve sahasındaki mümkün olan tüm kartları Mezarlığa gönderin, ardından bu efektle rakibin Mezarlığına gönderilen her kart için rakibe 300 hasar verin. Bu efekti etkinleştirdiğiniz tur başka kart veya efekt etkinleştiremezsiniz.',
    summonCondition: 'Mezarlıktan 1 IŞIK ve 1 KARANLIK canavar oyundan çıkarılarak elden Özel Çağrılır.',
    effectSummary: '1000 LP ödeyerek her iki oyuncunun elini ve sahasını tamamen temizler ve rakibe mezara giden kart başına 300 hasar verir.'
  },
  {
    name: 'Comic Cat',
    apiName: 'Comic Cat',
    category: 'Canavar',
    officialText: 'Sahada "Toon World" varken bu kart bir Toon canavarı sayılır. Ana Aşama sırasında (Hızlı Efekt): 1 canavar Feda edebilirsiniz (sahada "Toon World" kontrol ediyorsanız, kontrol etmeseniz bile rakibin kontrolündeki 1 canavarı Feda edebilirsiniz) ve bunu yaparsanız, elinizden veya Destenizden metninde "Toon World" geçen 1 canavarı çağrı koşullarını yok sayarak Özel Çağırın. "Comic Cat"in bu efektini her tur yalnızca bir kez kullanabilirsiniz.',
    summonCondition: 'Normal Çağrılabilir veya Özel Çağrılabilir.',
    effectSummary: 'Hızlı Efektle rakibin canavarını bile feda edip desteden veya elden herhangi bir Toon canavarını (Tanrı kartları dahil!) koşulsuz Özel Çağırır.'
  },
  {
    name: 'Dark-Eyes Illusionist Faceless Mage',
    apiName: 'Dark-Eyes Illusionist Faceless Mage',
    category: 'Canavar',
    officialText: 'Bu kart bir canavarla savaşırsa ikisi de bu savaşla yok edilemez. Bu kartı elinizden atıp şu efektlerden 1\'ini etkinleştirebilirsiniz (her bir efekti turda bir kez): 1) Elinizden veya Destenizden 1 "Mind Scan" kartını sahanıza açık olarak koyun. 2) Mezarlığınızdan metninde "Toon World" geçen başka 1 canavarı elinize ekleyin, ardından onu çağrı koşullarını yok sayarak Özel Çağırabilirsiniz.',
    summonCondition: 'Normal Çağrılabilir veya Özel Çağrılabilir.',
    effectSummary: 'Elden atılarak desteden "Mind Scan" açabilir ya da mezardaki güçlü bir Toon canavarını koşulsuz sahaya Özel Çağırabilir. Savaşta yok edilemez.'
  },
  {
    name: 'Evil Box',
    apiName: 'Evil Box',
    category: 'Canavar',
    officialText: 'Sahada "Toon World" kontrol ediyorsanız: Bu kartı elinizden Özel Çağırabilir, ardından Destenizden 1 "Toon" Tuzağını elinize ekleyebilir veya sahaya kapatabilirsiniz. "Evil Box"ın bu efektini turda bir kez kullanabilirsiniz. "Toon World" sahadayken bu kart bir Toon canavarı sayılır. Turda bir kez (Hızlı Efekt): Herhangi bir Mezarlıktaki 1 kartı hedef alabilirsiniz; onu destenin en altına koyun.',
    summonCondition: 'Sahada "Toon World" varken elden Özel Çağrılabilir ya da Normal Çağrılabilir.',
    effectSummary: 'Toon World varken bedava elden iner, desteden Toon tuzağı çeker/kapatır ve her tur mezarlıktan 1 kartı destenin altına yollayarak rakibin mezar oyunlarını bozar.'
  },
  {
    name: 'Funny Dark Rabbit',
    apiName: 'Funny Dark Rabbit',
    category: 'Canavar',
    officialText: 'Bu kart Normal veya Özel Çağrıldıktan sonra, bu tur Ana Aşamanız sırasında Normal Çağrınıza ek olarak metninde "Toon World" geçen 1 canavarı Normal Çağırabilirsiniz (bu efekti turda bir kez kazanabilirsiniz). "Toon World" sahadayken bu kart bir Toon canavarı sayılır. Turda bir kez: Destenizden 1 "Toon" Alan veya Sürekli Sihir kartını elinize ekleyebilir veya sahanıza açık koyabilirsiniz.',
    summonCondition: 'Normal Çağrılabilir veya Özel Çağrılabilir.',
    effectSummary: 'Çağrıldığında fazladan Normal Çağrı hakkı verir ve desteden anında Toon Kingdom veya Toon World getirip sahaya açar.'
  },
  {
    name: 'Spirit Reaper',
    apiName: 'Spirit Reaper',
    category: 'Canavar',
    officialText: 'Savaşta yok edilemez. Bu açık kartı hedef alan bir kart efekti çözümlendikten sonra bu kart yok edilir. Bu kart doğrudan saldırarak rakibe savaş hasarı verdiğinde: Rakibin elinden rastgele 1 kartı mezara attırın.',
    summonCondition: 'Normal Çağrılabilir veya Özel Çağrılabilir.',
    effectSummary: 'Savaşta yok edilemez bir duvar görevi görür; doğrudan vurduğunda rakibin elinden kart attırır. Hedef alınırsa yok olur.'
  },
  {
    name: 'Toon Harpie Lady Sisters',
    apiName: 'Toon Harpie Lady Sisters',
    category: 'Canavar',
    officialText: 'Çağrıldığı tur saldıramaz. Sahada "Toon World" veya başka bir Toon canavarı kontrol ediyorsanız: Bu kartı elinizden Özel Çağırabilirsiniz. Bu kart Özel Çağrılırsa: Rakibin kontrolündeki 1 Sihir/Tuzak kartını yok edebilirsiniz. Bu kart Mezarlığa gönderilirse: Destenizden 1 \'Toon\' Sihir/Tuzak kartını sahanıza kapatabilirsiniz. Bu efektlerin her birini turda bir kez kullanabilirsiniz. "Toon World" varken ve rakipte Toon canavarı yokken doğrudan saldırabilir.',
    summonCondition: 'Sahada "Toon World" veya bir Toon canavarı varken elden Özel Çağrılır.',
    effectSummary: 'Bedava Özel Çağrılır, iner inmez rakibin büyü/tuzak kartını patlatır, mezara gittiğinde desteden Toon büyü/tuzağı kurar ve doğrudan saldırabilir.'
  },
  {
    name: 'Jinzo',
    apiName: 'Jinzo',
    category: 'Canavar',
    officialText: 'Tuzak Kartları ve sahadaki tuzak efektleri etkinleştirilemez. Sahadaki tüm Tuzak efektlerini geçersiz kılın (negate).',
    summonCondition: '1 Canavar Feda edilerek Normal Çağrılır veya Özel Çağrılabilir.',
    effectSummary: 'Sahadayken tüm tuzak kartlarını ve tuzak efektlerini tamamen kilitler ve geçersiz kılar.'
  },
  {
    name: 'Toon Laughing Gas Disaster',
    apiName: 'Toon Laughing Gas Disaster',
    category: 'Canavar',
    officialText: 'Normal Çağrılamaz/Kapatılamaz. Elinizden 1 Toon canavarını oyundan çıkararak Özel Çağrılmalıdır. Sahada "Toon World" varken doğrudan rakibe saldırabilir. Bekleme Aşamanızda turda bir kez: Sahadaki 2 açık canavarı hedef almalıdır; o canavarlar 500 ATK/DEF kaybeder. Bu kartı hedef alan bir kart veya efekt etkinleştirildiğinde (Hızlı Efekt): Bu kartı Feda edebilirsiniz; etkinleştirmeyi geçersiz kılın ve yok edin, ardından Destenizden 4. Seviye veya daha düşük 1 Toon canavarı Özel Çağırın.',
    summonCondition: 'Elden 1 Toon canavarı oyundan çıkarılarak elden Özel Çağrılır.',
    effectSummary: 'Doğrudan saldırır, canavarların ATK/DEF puanını düşürür ve kendisini hedef alan efektleri engelleyip desteden yeni bir Seviye 4 Toon çağırır.'
  },
  {
    name: 'Toon Obelisk The Tormentor',
    apiName: 'Toon Obelisk The Tormentor',
    category: 'Canavar',
    officialText: 'Elinizden 3 Toon Canavarı Feda edilerek Özel Çağrılmalıdır. Bu kartın Çağrısı engellenemez (negate edilemez). Çağrıldığında hiçbir kart veya efekt etkinleştirilemez. İki oyuncu da bu kartı efektlerle hedef alamaz ve kart efektleriyle yok edilemez. Çağrıldığı tur saldıramaz. "Toon World" kontrol ederken doğrudan rakibe saldırabilir (4000 ATK). Turda bir kez: 1 Toon Canavarı Feda edebilirsiniz; rakibin kontrolündeki tüm canavarları yok edin. Rakip sahada bir canavar efekti etkinleştirdiğinde (Hızlı Efekt): Kontrol ettiğiniz 1 "Toon" kartını Feda edebilirsiniz; o efekti geçersiz kılın ve kartı yok edin.',
    summonCondition: '3 Toon canavarı Feda edilerek Özel Çağrılır (veya "Toon God Collision" / "Comic Cat" ile çağrılabilir).',
    effectSummary: '4000 ATK/DEF. Hedef alınamaz ve yok edilemez. Doğrudan 4000 hasar vurabilir, 1 Toon feda ederek rakip sahayı tamamen yok eder ve rakip canavar efektlerini iptal eder.'
  },
  {
    name: 'Toon Slifer The Sky Dragon',
    apiName: 'Toon Slifer The Sky Dragon',
    category: 'Canavar',
    officialText: 'Elinizden 3 Toon Canavarı Feda edilerek Özel Çağrılmalıdır. Bu kartın Çağrısı engellenemez. Çağrıldığında kart veya efekt etkinleştirilemez. İki oyuncu da bu kartı efektlerle hedef alamaz ve kart efektleriyle yok edilemez. Çağrıldığı tur saldıramaz. Sahada "Toon World" kontrol ederken doğrudan saldırabilir. Elinizdeki her kart için 1000 ATK/DEF kazanır. Rakibin sahasına Saldırı Konumunda bir canavar Normal veya Özel Çağrıldığında: O canavar 2000 ATK kaybeder, eğer ATK puanı 0\'a düşerse onu yok edin.',
    summonCondition: '3 Toon canavarı Feda edilerek Özel Çağrılır (veya "Toon God Collision" / "Comic Cat" ile).',
    effectSummary: 'Eldeki her kart için 1000 ATK kazanır. Hedef alınamaz ve yok edilemez. Doğrudan saldırabilir ve rakip bir canavar çağırdığında 2000 ATK düşürüp 0 olursa anında patlatır.'
  },
  {
    name: 'The Toon Winged Dragon of Ra',
    apiName: 'The Toon Winged Dragon of Ra',
    category: 'Canavar',
    officialText: 'Elinizden 3 Toon Canavarı Feda edilerek Özel Çağrılmalıdır. Bu kartın Çağrısı engellenemez. Çağrıldığında kart veya efekt etkinleştirilemez. İki oyuncu da bu kartı efektlerle hedef alamaz ve kart efektleriyle yok edilemez. Çağrıldığı tur saldıramaz. "Toon World" kontrol ederken doğrudan rakibe saldırabilir. Özel Çağrıldığında: 100 LP kalacak şekilde LP ödeyebilirsiniz; ödenen miktar kadar ATK/DEF kazanır (veya feda edilen Toon\'ların ATK/DEF toplamını alır). 1000 LP ödeyerek sahadaki 1 canavarı yok edebilirsiniz. Sahada ve Mezarlıkta adı "The Winged Dragon of Ra" sayılır.',
    summonCondition: '3 Toon canavarı Feda edilerek Özel Çağrılır (veya "Toon God Collision" / "Comic Cat" ile).',
    effectSummary: 'Hedef alınamaz ve yok edilemez tanrı canavarı. 100 LP bırakıp devasa ATK kazanabilir, 1000 LP ile sahadaki canavarları yok eder ve doğrudan saldırabilir.'
  },
  {
    name: 'Toonder Dragon',
    apiName: 'Toonder Dragon',
    category: 'Canavar',
    officialText: 'Bu kartı elinizden atabilirsiniz: Destenizden veya Mezarlığınızdan 1 "Toon Kingdom" kartını elinize ekleyin veya sahaya kapatın; veya sahada "Toon World" kontrol ediyorsanız, bunun yerine "Toonder Dragon" hariç metninde "Toon World" geçen 2 kart ekleyebilirsiniz. Bu kartı Mezarlığınızdan sürgün edebilirsiniz; elinizden 1 "Toon" Canavarını çağırma koşullarını yok sayarak Özel Çağırın; o canavar bir sonraki turun sonuna kadar kart efektleriyle yok edilemez. "Toonder Dragon"ın bu efektini turda bir kez kullanabilirsiniz.',
    summonCondition: 'Normal Çağrılabilir veya Özel Çağrılabilir.',
    effectSummary: 'Elden atılarak Toon Kingdom getirir (veya 2 Toon kartı arar). Mezardan sürgün edilerek eldeki herhangi bir Toon canavarını korumalı ve koşulsuz olarak sahaya Özel Çağırır.'
  },

  // ==================== SİHİRLER (14 Kart) ====================
  {
    name: 'Comic Hand',
    apiName: 'Comic Hand',
    category: 'Sihir',
    officialText: 'Eğer "Toon World" kontrol ediyorsanız, rakibin kontrolündeki bir canavara donatın. O canavarın kontrolünü ele geçirin. Sahada "Toon World" varken o canavar bir Toon canavarı sayılır ve rakip Toon canavarı kontrol etmiyorsa doğrudan saldırabilir. Sahada "Toon World" yoksa bu kartı yok edin.',
    summonCondition: 'Ekipman Büyüsü. Sahada "Toon World" veya "Toon Kingdom" açıkken etkinleştirilir.',
    effectSummary: 'Rakibin en güçlü canavarını çalar, Toon yapar ve doğrudan saldırtır.'
  },
  {
    name: 'Mimicat',
    apiName: 'Mimicat',
    category: 'Sihir',
    officialText: '"Toon World" ve bir Toon canavarı kontrol ediyorsanız: Rakibin Mezarlığındaki 1 kartı hedef alın; canavarsa kendi sahanıza Özel Çağırın, Sihir veya Tuzaksa kendi sahanıza Kapatın. "Mimicat"i turda bir kez etkinleştirebilirsiniz.',
    summonCondition: 'Normal Büyü. Sahada "Toon World" ve bir Toon canavarı kontrol ediyorsanız çalışır.',
    effectSummary: 'Rakibin mezarındaki en iyi kartı (canavar, büyü veya tuzak) çalarak bedava sahanıza koyar.'
  },
  {
    name: 'Shadow Toon',
    apiName: 'Shadow Toon',
    category: 'Sihir',
    officialText: '"Toon World" kontrol ediyorsanız: Rakibin kontrolündeki 1 açık canavarı hedef alın; o canavarın orijinal Saldırı Puanı (ATK) kadar rakibe doğrudan etki hasarı verin. "Shadow Toon"u turda bir kez etkinleştirebilirsiniz.',
    summonCondition: 'Normal Büyü. Sahada "Toon World" varken etkinleştirilir.',
    effectSummary: 'Rakibin canavarının ATK puanı kadar rakibin can puanına doğrudan hasar vurur (Burn hasarı).'
  },
  {
    name: 'Toon World',
    apiName: 'Toon World',
    category: 'Sihir',
    officialText: '1000 Yaşam Puanı (LP) ödeyerek bu kartı etkinleştirin. Sahadaki Toon canavarlarının yeteneklerini ve doğrudan saldırılarını aktifleştiren ikonik çizgi dünya alanı.',
    summonCondition: 'Sürekli Büyü. 1000 LP ödeyerek açılır.',
    effectSummary: 'Toon destesinin temelidir; tüm Toon efektlerinin ve doğrudan saldırılarının çalışmasını sağlar.'
  },
  {
    name: 'Toon Bookmark',
    apiName: 'Toon Bookmark',
    category: 'Sihir',
    officialText: 'Destenizden "Toon World" veya metninde "Toon World" geçen 1 kartı elinize ekleyin ("Toon Bookmark" hariç). Kontrol ettiğiniz "Toon World" kartı/kartları kart efektiyle yok edilecekse, bunun yerine Mezarlığınızdaki bu kartı oyundan çıkarabilirsiniz. "Toon Bookmark"ı turda bir kez etkinleştirebilirsiniz.',
    summonCondition: 'Normal Büyü.',
    effectSummary: 'Desteden herhangi bir Toon kartını arar (Toon Kingdom dahil). Mezarlıktayken Toon World/Kingdom\'ın yok edilmesini engeller.'
  },
  {
    name: 'Toon Kingdom',
    apiName: 'Toon Kingdom',
    category: 'Sihir',
    officialText: 'Bu kart etkinleştirildiğinde: Destenizin üstünden 3 kartı kapalı olarak oyundan çıkarın. Bu kartın adı Saha Bölgesindeyken "Toon World" sayılır. Kontrol ettiğiniz Toon canavarları rakibin kart efektleriyle hedef alınamaz. Kontrol ettiğiniz bir Toon canavarı savaş veya kart efektiyle yok edilecekse, bunun yerine destenizin en üstündeki 1 kartı kapalı olarak oyundan çıkarabilirsiniz.',
    summonCondition: 'Saha Büyüsü. Açılırken desteden 3 kart kapalı sürgün edilir.',
    effectSummary: 'Toon\'larınızı hedef alınmaktan ve yok edilmekten koruyan nihai kale. Adı "Toon World" sayılır.'
  },
  {
    name: 'Toon Page-Flip',
    apiName: 'Toon Page-Flip',
    category: 'Sihir',
    officialText: '"Toon World" kontrol ediyorsanız: Destenizden her birinin adı farklı olan 3 Toon canavarı gösterin. Rakibiniz rastgele 1 tanesini seçer; seçilen canavarı çağırma koşullarını yok sayarak Özel Çağırın, kalan kartları desteye geri karıştırın. "Toon Page-Flip"i turda bir kez etkinleştirebilirsiniz.',
    summonCondition: 'Hızlı Büyü. Sahada "Toon World" varken etkinleştirilir.',
    effectSummary: 'Desteden rastgele 1 güçlü Toon canavarını koşulsuz bedava sahaya indirir.'
  },
  {
    name: 'Toon Rollback',
    apiName: 'Toon Rollback',
    category: 'Sihir',
    officialText: 'Kontrol ettiğiniz 1 Toon canavarını hedef alın; bu tur o canavar her Savaş Aşamasında ikinci bir saldırı daha yapabilir.',
    summonCondition: 'Normal Büyü.',
    effectSummary: 'Seçilen Toon canavarına o tur 2 kez doğrudan saldırma hakkı verir (OTK potansiyeli).'
  },
  {
    name: 'Toon Table of Contents',
    apiName: 'Toon Table of Contents',
    category: 'Sihir',
    officialText: 'Destenizden 1 "Toon" kartını veya "Manga Ryu-Ran"ı elinize ekleyin.',
    summonCondition: 'Normal Büyü.',
    effectSummary: 'Desteden istediğiniz herhangi bir Toon kartını elinize ekler. Tur sınırı yoktur, art arda açılabilir.'
  },
  {
    name: 'Toon World the Perfect World',
    apiName: 'Toon World the Perfect World',
    category: 'Sihir',
    officialText: 'Bu kartın adı sahadayken ve Mezarlıkta "Toon World" ve "Toon Kingdom" sayılır. Bu kart sahadayken kontrol ettiğiniz Toon canavarları rakip kart efektlerinden etkilenmez ve savaşta yok edilemez. Turda bir kez: Destenizden veya Mezarlığınızdan 1 Toon kartını elinize ekleyebilirsiniz. Kontrol ettiğiniz bir Toon canavarı doğrudan saldırdığında rakibinize verilen hasar iki katına çıkar.',
    summonCondition: 'Saha Büyüsü.',
    effectSummary: 'Toon canavarlarını tamamen dokunulmaz yapar, tur başı bedava arama yapar ve doğrudan saldırı hasarını 2 katına çıkarır.'
  },
  {
    name: 'Toon World Fusion',
    apiName: 'Toon World Fusion',
    category: 'Sihir',
    officialText: 'Elinizden veya sahanızdan 2 veya daha fazla \'Toon\' canavarını malzeme olarak kullanarak Ekstra Destenizden 1 "Toon" Füzyon Canavarını Füzyon Çağrısı yapın. Eğer "Toon World" kontrol ediyorsanız, malzemenizi Destenizden de gönderebilirsiniz. Bu kartı Mezarlığınızdan oyundan çıkarabilirsiniz; Mezarlığınızdaki 2 veya daha fazla \'Toon\' canavarını oyundan çıkararak Ekstra Destenizden 1 \'Toon Füzyon\' canavarını Füzyon Çağırın. Her bir efekti turda bir kez kullanabilirsiniz.',
    summonCondition: 'Normal Büyü (Füzyon).',
    effectSummary: 'Sahada Toon World varsa desteden malzemelerle Toon Füzyon canavarlarını çağırır. Mezardan sürgün edilerek ikinci bir Füzyon yaptırır.'
  },
  {
    name: 'Toon Multiverse',
    apiName: 'Toon Multiverse',
    category: 'Sihir',
    officialText: 'Destenizden 1 "Toon World" veya "Toon Kingdom" kartını kapalı olarak oyundan çıkarın; 2 kart çekin. Eğer bir \'Toon\' kartı çektiyseniz, onu rakibinize gösterebilirsiniz; rakibin kontrolündeki 1 canavarın kontrolünü bu turun sonuna kadar ele geçirin (kontrol ettiğiniz sürece o canavar Toon sayılır). "Toon Multiverse"i turda bir kez etkinleştirebilirsiniz. Bu kartı etkinleştirdiğiniz tur başka efektlerle kart çekemezsiniz.',
    summonCondition: 'Normal Büyü. Desteden 1 Toon World/Kingdom kapalı sürgün edilerek oynanır.',
    effectSummary: '2 kart çektirir; eğer Toon kartı çekilirse rakibin canavarını o tur için bedava çalar.'
  },
  {
    name: 'Toon Trap Caw-mic Hand',
    apiName: 'Toon Trap Caw-mic Hand',
    category: 'Sihir',
    officialText: 'Turda bir kez şu efektlerden 1\'ini etkinleştirebilirsiniz: (1) Rakibin kontrolündeki 1 canavarı hedef alın; bu kartı o hedefe donatın. Donatılan canavar saldıramaz, savaş konumunu değiştiremez ve efektleri geçersiz kılınır. Bu kartın üzerine 3 Toon Sayacı koyun. Her Bekleme Aşamanızda 1 sayaç kaldırın. Son sayaç kalktığında bu kartı ve donatılan canavarı yok edin. VEYA (2) Bir \'Toon\' canavarı kontrol ediyorsanız: Elinizden 1 canavarı kapalı oyundan çıkarın; rakibin kontrolündeki 1 canavarı kapalı olarak oyundan çıkarın.',
    summonCondition: 'Ekipman/Hızlı Büyü.',
    effectSummary: 'Rakip canavarı dondurup 3 tur sonra yok eder veya elden 1 canavar sürgün ederek rakip canavarı kapalı sürgüne yollar.'
  },
  {
    name: 'Toon God Collision',
    apiName: 'Toon God Collision',
    category: 'Sihir',
    officialText: 'Destenizden orijinal adı "Toon Slifer the Sky Dragon", "Toon Obelisk The Tormentor" veya "The Toon Winged Dragon of Ra" olan 1 canavarı hedef alın. O hedefi sahanıza açık Saldırı Konumunda Özel Çağırın. Bu kartı Özel Çağrılan o canavara donatın. Bu kart donatılı olduğu sürece, donatılan canavar savaşta yok edilemez. Turda bir kez: Sahadaki bu kartı Mezarlığa göndererek Destenizden 1 Toon Tuzak kartını elinize ekleyebilirsiniz. "Toon God Collision" kartını her tur yalnızca bir kez etkinleştirebilirsiniz.',
    summonCondition: 'Ekipman Büyüsü.',
    effectSummary: 'Desteden herhangi bir Toon Tanrı Kartını (Slifer, Obelisk veya Ra) doğrudan ve bedelsiz sahaya Özel Çağırır ve savaş koruması sağlar.'
  },

  // ==================== TUZAKLAR (5 Kart) ====================
  {
    name: 'Jar of Avarice',
    apiName: 'Jar of Avarice',
    category: 'Tuzak',
    officialText: 'Mezarlığınızdaki "Jar of Avarice" hariç 5 kartı hedef alın; onları desteye geri karıştırın, ardından 1 kart çekin. "Jar of Avarice" kartını her tur yalnızca bir kez etkinleştirebilirsiniz.',
    summonCondition: 'Normal Tuzak.',
    effectSummary: 'Mezarlıktan 5 kartı desteye geri sokarak desteyi yeniler ve 1 kart çektirir.'
  },
  {
    name: 'Mind Scan',
    apiName: 'Mind Scan',
    category: 'Tuzak',
    officialText: 'Sahada "Toon World" varken etkinleştirilebilir. Bu kart sahadayken: Rakibin elini ve rakibin sahasındaki tüm kapalı kartları her zaman açık ve görünür şekilde görebilirsiniz. Rakibiniz kapalı bir kart etkinleştirdiğinde: Kontrol ettiğiniz 1 Toon canavarını feda edebilirsiniz; o kartın aktivasyonunu geçersiz kılın ve yok edin.',
    summonCondition: 'Sürekli Tuzak.',
    effectSummary: 'Pegasus\'un Milenyum Gözü yeteneği! Rakibin elini ve sahadaki tüm kapalı kartları sürekli açık gösterir ve sürpriz kartları engeller.'
  },
  {
    name: 'Toon Terror',
    apiName: 'Toon Terror',
    category: 'Tuzak',
    officialText: 'Sahada "Toon World" ve bir Toon canavarı kontrol ediyorken bir Sihir/Tuzak Kartı veya canavar efekti etkinleştirildiğinde: Aktivasyonu geçersiz kılın ve o kartı yok edin. "Toon Terror"ı turda bir kez etkinleştirebilirsiniz.',
    summonCondition: 'Karşı Tuzak (Counter Trap).',
    effectSummary: 'Her türlü kartı veya efekti (Canavar, Büyü, Tuzak) anında geçersiz kılıp yok eden mükemmel Toon omni-negate kartı.'
  },
  {
    name: 'Toon Briefcase',
    apiName: 'Toon Briefcase',
    category: 'Tuzak',
    officialText: 'Sahada bir Toon canavarı kontrol ediyorken rakibiniz bir canavarı Normal, Çevirme veya Özel Çağırdığında: O canavarı sahibinin Destesine geri karıştırın.',
    summonCondition: 'Normal Tuzak. Rakip canavar çağırdığında tetiklenir.',
    effectSummary: 'Rakibin çağırdığı canavarı mezara göndermeden direkt destesine geri postalar.'
  },
  {
    name: 'Toon Mask',
    apiName: 'Toon Mask',
    category: 'Tuzak',
    officialText: 'Sahada "Toon World" kontrol ediyorsanız: Rakibin kontrolündeki 1 açık canavarı hedef alın; elinizden veya Destenizden o canavarın Seviyesine/Kademesine eşit veya daha düşük Seviyede 1 Toon canavarını çağırma koşullarını yok sayarak Özel Çağırın.',
    summonCondition: 'Normal Tuzak.',
    effectSummary: 'Rakibin güçlü canavarını referans alarak desteden anında denk veya daha düşük bir Toon canavarını koşulsuz sahaya indirir.'
  },

  // ==================== EKSTRA DESTE (4 Kart) ====================
  {
    name: 'Toon Black Rose Dragon',
    apiName: 'Toon Black Rose Dragon',
    category: 'Ekstra Deste',
    officialText: '1 Ejderha + 1 Tuner olmayan Toon canavarı. Önce Senkro Çağrılmalıdır. Bu kart Senkro Çağrıldığında sahadaki diğer tüm kartları yok edebilirsiniz. Sahada "Toon World" varken bu kart saldırırsa, rakibiniz Hasar Adımının sonuna kadar kart veya efekt etkinleştiremez. Bu kart doğrudan saldırabilir. Bu kart Özel Çağrıldığı tur saldıramaz.',
    summonCondition: '1 Ejderha Tuner + 1 Tuner olmayan Toon canavarı ile Senkro Çağrısı.',
    effectSummary: 'Sahaya indiğinde tüm sahayı siler süpürür! Toon World varken rakibin efektlerini kilitler ve doğrudan saldırabilir.'
  },
  {
    name: 'Blue-Eyes Ultimate Toon Dragon',
    apiName: 'Blue-Eyes Ultimate Toon Dragon',
    category: 'Ekstra Deste',
    officialText: '"Blue-Eyes Toon Dragon" + 2 Toon canavarı. Yukarıdaki kartları elinizden, sahanızdan ve/veya Mezarlığınızdan Desteye/Ekstra Desteye geri karıştırarak Ekstra Destenizden Özel Çağrılmalıdır. Toon canavarlarınız doğrudan saldırabilir. Turda bir kez: Mezarlığınızdan 1 "Toon" kartını veya adında "Toon" geçen bir kartı elinize ekleyebilirsiniz. Hasar hesaplaması sırasında Toon canavarınıza saldırılırsa: Onu Hasar Adımının sonuna kadar oyundan çıkarabilirsiniz.',
    summonCondition: '"Blue-Eyes Toon Dragon" + 2 Toon canavarını elden, sahadan veya mezardan desteye karıştırarak Füzyon Çağrılır.',
    effectSummary: '4500 devasa ATK! Tüm Toon\'larınıza doğrudan saldırı hakkı tanır, mezardan Toon kartı kurtarır ve canavarlarınızı saldırılardan kaçırır.'
  },
  {
    name: 'Toon Bickuribox',
    apiName: 'Toon Bickuribox',
    category: 'Ekstra Deste',
    officialText: '2 Toon Canavarı. Füzyon Çağrılmalı veya kontrol ettiğiniz rakibe ait 1 Toon canavarını Mezarlığa göndererek Özel Çağrılmalıdır. "Toon World" kontrol ederken ve rakipte Toon canavarı yokken doğrudan saldırabilir. Bu kart Özel Çağrılırsa: Rakibin kontrolündeki 1 canavarı hedef alabilirsiniz; o hedefin efektlerini geçersiz kılın ve kontrolünü ele geçirin (kontrol ettiğiniz sürece o canavar Toon sayılır). Bu efekti turda en fazla 2 kez kullanabilirsiniz.',
    summonCondition: '2 Toon canavarı ile Füzyon Çağrılır veya rakipte çaldığınız bir Toon canavarını feda ederek çağrılır.',
    effectSummary: 'Çağrıldığında rakibin canavarının efektini silip çalar (turda 2 kez yapılabilir!), kontrol ettiği canavarları Toon yapar ve doğrudan saldırır.'
  },
  {
    name: 'Toon Eyes-Restrict',
    apiName: 'Toon Eyes-Restrict',
    category: 'Ekstra Deste',
    officialText: '1 Seviye 5 veya daha düşük Toon canavarı. "Toon Eyes-Restrict"i turda bir kez Link Çağırabilirsiniz. Bu kart Link Çağrılırsa: Destenizden veya Mezarlığınızdan "Toon World" veya metninde geçen 1 kartı elinize ekleyebilirsiniz. Bu kartın işaret ettiği rakip canavar bir efekt etkinleştirirse (Hızlı Efekt): O rakip canavarı hedef alın; onu bu karta Donanım Büyüsü olarak donatın ve efektlerini geçersiz kılın. Bu kart, donatılan tüm kartların ATK puanı toplamı kadar ATK kazanır.',
    summonCondition: '1 Seviye 5 veya altı Toon canavarı ile Link-1 Çağrısı.',
    effectSummary: 'Link-1 kolay çağrı! İner inmez Toon World arar, işaret ettiği rakip canavar efekt açtığında onu yutup kendine donatarak ATK puanını emer ve efektini keser.'
  }
];
