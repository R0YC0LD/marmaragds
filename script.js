/* Marmara GDS - Politik Liderlik Analizi v2.0 */

// Eksen Açıklaması:
// Eco:  - (Devletçi/Kamucu) ..... + (Liberal/Piyasa)
// Auth: - (Otoriter/Merkezi) .... + (Demokratik/Çoğulcu)
// Diplo: - (Ulusalcı/İzolasyon) .. + (Küreselci/Enternasyonal)
// Style: - (İdealist/Devrimci) ... + (Realist/Pragmatist)

const leaders = [
    // --- Lider Veritabanı ---
    { id: "wash", name: "George Washington", title: "ABD Kurucu Başkanı", stats: { eco: 5, auth: 3, diplo: -6, style: 5 }, quote: "Özgürlük, kök saldığında hızlı büyüyen bir bitkidir.", bio: "Tarafsızlık ilkesine sıkı sıkıya bağlı, kurumları şahısların üzerinde tutan kurucu bir figür." },
    { id: "linc", name: "Abraham Lincoln", title: "ABD 16. Başkanı", stats: { eco: 2, auth: 4, diplo: -3, style: -6 }, quote: "Halkın, halk tarafından yönetimi.", bio: "Büyük krizlerin yönetiminde ahlaki pusulayı kaybetmeyen, birliği sağlayan idealist lider." },
    { id: "troos", name: "Theodore Roosevelt", title: "ABD 26. Başkanı", stats: { eco: -1, auth: -2, diplo: 8, style: 7 }, quote: "Yumuşak konuş ama elinde büyük bir sopa taşı.", bio: "Enerjik, emperyal vizyon sahibi ve gücü göstermekten çekinmeyen bir stratejist." },
    { id: "fdr", name: "Franklin D. Roosevelt", title: "ABD 32. Başkanı", stats: { eco: -6, auth: 0, diplo: 7, style: 4 }, quote: "Korkmamız gereken tek şey korkunun kendisidir.", bio: "Sosyal devleti inşa eden, kriz dönemlerinde devleti ana aktör yapan güçlü lider." },
    { id: "nixon", name: "Richard Nixon", title: "ABD 37. Başkanı", stats: { eco: 4, auth: -6, diplo: 9, style: 10 }, quote: "Kaybettiğinde değil, vazgeçtiğinde yenilirsin.", bio: "Realpolitik ustası. İdeolojiyi bir kenara bırakıp ulusal çıkar için herkesle masaya oturabilen pragmatist." },
    { id: "jfk", name: "John F. Kennedy", title: "ABD 35. Başkanı", stats: { eco: 2, auth: 6, diplo: 6, style: -4 }, quote: "Ülkenin senin için ne yapacağını sorma.", bio: "Vizyoner, karizmatik ve soğuk savaşın en sıcak anlarında bile diyaloğu savunan lider." },
    { id: "trump", name: "Donald Trump", title: "ABD 45. Başkanı", stats: { eco: 7, auth: -5, diplo: -9, style: 8 }, quote: "Önce Amerika!", bio: "Müesses nizama meydan okuyan, transaksiyonel diplomasiyi ve korumacılığı savunan popülist." },
    { id: "stalin", name: "Josef Stalin", title: "SSCB Lideri", stats: { eco: -10, auth: -10, diplo: -5, style: 8 }, quote: "İnsan yoksa sorun da yoktur.", bio: "Mutlak merkeziyetçi. Sanayileşme ve devlet bekası uğruna her türlü bedeli ödeten 'Çelik Adam'." },
    { id: "putin", name: "Vladimir Putin", title: "Rusya Devlet Başkanı", stats: { eco: 1, auth: -9, diplo: -7, style: 9 }, quote: "SSCB'nin çöküşü büyük bir felaketti.", bio: "Güvenlikçi, revizyonist ve devletin gücünü her şeyin üstünde tutan stratejik zeka." },
    { id: "mao", name: "Mao Zedong", title: "Çin Halk Cumhuriyeti Kurucusu", stats: { eco: -10, auth: -9, diplo: -6, style: -9 }, quote: "İktidar namlunun ucundadır.", bio: "Kitleleri mobilize eden, sürekli devrim teorisine inanan radikal dönüştürücü." },
    { id: "deng", name: "Deng Xiaoping", title: "Çin Lideri", stats: { eco: 3, auth: -8, diplo: 5, style: 10 }, quote: "Farenin rengi önemli değil, kediyi yakalıyorsa iyi kedidir.", bio: "İdeolojik saplantıları aşmış büyük pragmatist. Modern Çin'in mimarı." },
    { id: "churchill", name: "Winston Churchill", title: "Birleşik Krallık Başbakanı", stats: { eco: 4, auth: 2, diplo: 5, style: 7 }, quote: "Asla, asla vazgeçmeyin.", bio: "Direnç sembolü. Emperyal gelenek ile demokrasiyi harmanlayan inatçı lider." },
    { id: "degaulle", name: "Charles de Gaulle", title: "Fransa Cumhurbaşkanı", stats: { eco: 1, auth: -4, diplo: -5, style: 5 }, quote: "Fransa, Fransa olmadan yapamaz.", bio: "Ulusal onur ve bağımsız dış politikayı her ittifakın üzerinde tutan egemenlikçi." },
    { id: "ataturk", name: "Mustafa Kemal Atatürk", title: "Türkiye Cumhuriyeti Kurucusu", stats: { eco: -1, auth: 0, diplo: 2, style: -10 }, quote: "Yurtta sulh, cihanda sulh.", bio: "Akıl ve bilimi rehber edinen, dogma karşıtı, vizyoner ve kurucu devrimci." },
    { id: "erdogan", name: "Recep Tayyip Erdoğan", title: "Türkiye Cumhurbaşkanı", stats: { eco: 2, auth: -6, diplo: -4, style: 8 }, quote: "Dünya 5'ten büyüktür.", bio: "Statükoya meydan okuyan, kitleleri konsolide eden ve bölgesel güç iddiası taşıyan lider." },
    { id: "mandela", name: "Nelson Mandela", title: "Güney Afrika Devlet Başkanı", stats: { eco: -3, auth: 9, diplo: 6, style: -8 }, quote: "Cesaret korkusuzluk değil, korkuyu yenmektir.", bio: "Uzlaşı ve barışın sembolü. İntikam yerine affetmeyi seçen birleştirici güç." },
    { id: "merkel", name: "Angela Merkel", title: "Almanya Şansölyesi", stats: { eco: 4, auth: 6, diplo: 8, style: 6 }, quote: "Wir schaffen das.", bio: "İstikrarın koruyucusu. Krizleri soğukkanlılıkla yöneten, uzlaşmacı ve analitik lider." },
    { id: "machiavelli", name: "Niccolò Machiavelli", title: "Floransalı Diplomat (Fahri)", stats: { eco: 0, auth: -7, diplo: 0, style: 10 }, quote: "Amaca giden her yol mübahtır.", bio: "Prens kitabının yazarı. Siyasetin ahlaktan bağımsız bir güç oyunu olduğunu savunan realist." },
    { id: "thatcher", name: "Margaret Thatcher", title: "Birleşik Krallık Başbakanı", stats: { eco: 9, auth: -2, diplo: 3, style: 8 }, quote: "Toplum diye bir şey yoktur.", bio: "Demir Leydi. Neoliberalizmin öncüsü, sendikalarla savaşan sert reformist." }
    // Not: Liste uzatılabilir, algoritmaya göre en yakın olanı getirecektir.
];

const questions = [
    // --- BÖLÜM 1: EKONOMİ VE DEVLET ---
    { text: "Piyasa mekanizmasına yaklaşımınız nedir?", options: [
        { text: "Görünmez el her şeyi çözer, devlet sadece hakem olmalıdır.", effect: { eco: 4, auth: 0, diplo: 0, style: 0 } },
        { text: "Piyasa verimlidir ancak sosyal adalet için devlet müdahalesi şarttır.", effect: { eco: -1, auth: 0, diplo: 0, style: 0 } },
        { text: "Stratejik sektörler kesinlikle devlet kontrolünde olmalıdır.", effect: { eco: -4, auth: 1, diplo: 0, style: 0 } },
        { text: "Özel mülkiyet ve sermaye birikimi eşitsizliğin kaynağıdır.", effect: { eco: -6, auth: 2, diplo: 0, style: -2 } }
    ]},
    { text: "Ekonomik kriz anında öncelikli hamleniz?", options: [
        { text: "Kemer sıkma politikaları ve bütçe disiplini.", effect: { eco: 3, auth: 0, diplo: 0, style: 2 } },
        { text: "Kamu harcamalarını artırarak piyasayı canlandırmak.", effect: { eco: -3, auth: 0, diplo: 0, style: 0 } },
        { text: "Zenginlerden alınan vergiyi artırmak ve tabana yaymak.", effect: { eco: -4, auth: 0, diplo: 0, style: -1 } },
        { text: "Şirketleri kurtarmak yerine iflas etmelerine izin vermek.", effect: { eco: 5, auth: 0, diplo: 0, style: 1 } }
    ]},
    { text: "Sendikalar ve işçi hakları?", options: [
        { text: "Ekonomik büyümeyi yavaşlatan engellerdir.", effect: { eco: 4, auth: -2, diplo: 0, style: 0 } },
        { text: "Sosyal diyaloğun vazgeçilmez bir parçasıdır.", effect: { eco: -1, auth: 2, diplo: 0, style: 0 } },
        { text: "Sınıf mücadelesinin en önemli kalesidir.", effect: { eco: -5, auth: 0, diplo: 0, style: -2 } },
        { text: "Sadece belirli sınırlar içinde faaliyet göstermeliler.", effect: { eco: 1, auth: -1, diplo: 0, style: 0 } }
    ]},
    { text: "Küreselleşme ve serbest ticaret?", options: [
        { text: "Sınırlar kalkmalı, sermaye özgürce dolaşmalı.", effect: { eco: 5, auth: 0, diplo: 4, style: 0 } },
        { text: "Karşılıklı bağımlılık iyidir ancak yerli üretici korunmalı.", effect: { eco: -1, auth: 0, diplo: -1, style: 0 } },
        { text: "Küreselleşme emperyalizmin yeni adıdır, reddedilmelidir.", effect: { eco: -4, auth: 1, diplo: -5, style: 2 } },
        { text: "Ticaret stratejik bir silahtır, kazan-kazan yoktur.", effect: { eco: 0, auth: -1, diplo: -3, style: 3 } }
    ]},
    
    // --- BÖLÜM 2: OTORİTE VE YÖNETİM ---
    { text: "Güçler ayrılığı ilkesi hakkında ne düşünüyorsunuz?", options: [
        { text: "Demokrasinin teminatıdır, asla taviz verilmemeli.", effect: { eco: 0, auth: 5, diplo: 0, style: -1 } },
        { text: "Bürokratik engel yaratır, yürütme hızlı karar alabilmeli.", effect: { eco: 0, auth: -4, diplo: 0, style: 2 } },
        { text: "Liderin iradesi her türlü kanunun üzerindedir.", effect: { eco: 0, auth: -8, diplo: 0, style: 0 } },
        { text: "Yargı bağımsız olmalı ama hükümetle uyumlu çalışmalı.", effect: { eco: 0, auth: -1, diplo: 0, style: 1 } }
    ]},
    { text: "Medya ve basın özgürlüğü?", options: [
        { text: "Devlet sırları hariç sınırsız olmalıdır.", effect: { eco: 0, auth: 4, diplo: 0, style: 0 } },
        { text: "Milli çıkarlara zarar veren yayınlar engellenmelidir.", effect: { eco: 0, auth: -3, diplo: 0, style: 1 } },
        { text: "Medya devletin ideolojik aygıtı olarak çalışmalıdır.", effect: { eco: 0, auth: -7, diplo: 0, style: 0 } },
        { text: "Sorumlu yayıncılık esastır, denetim gereklidir.", effect: { eco: 0, auth: -1, diplo: 0, style: 0 } }
    ]},
    { text: "Toplumsal protestolar karşısında tutumunuz?", options: [
        { text: "İfade özgürlüğüdür, diyalog kurulmalı.", effect: { eco: 0, auth: 5, diplo: 0, style: 0 } },
        { text: "Kamu düzenini bozduğu an sert müdahale edilmeli.", effect: { eco: 0, auth: -3, diplo: 0, style: 2 } },
        { text: "Dış güçlerin oyunudur, kökü kazınmalı.", effect: { eco: 0, auth: -6, diplo: -2, style: 3 } },
        { text: "Lider halkını dinlemeli ama otoritesini sarsmamalı.", effect: { eco: 0, auth: 1, diplo: 0, style: 1 } }
    ]},
    { text: "Siyasi muhalefetin rolü?", options: [
        { text: "İktidarı denetlemek için hayati öneme sahiptir.", effect: { eco: 0, auth: 5, diplo: 0, style: 0 } },
        { text: "Yapıcı olduğu sürece faydalıdır, yıkıcıysa engellenir.", effect: { eco: 0, auth: -2, diplo: 0, style: 1 } },
        { text: "Ulusal birliğe tehdittir, tek seslilik esastır.", effect: { eco: 0, auth: -8, diplo: 0, style: 0 } },
        { text: "Siyasi rekabet bir pazarlık sürecidir.", effect: { eco: 0, auth: 2, diplo: 0, style: 3 } }
    ]},

    // --- BÖLÜM 3: DİPLOMASİ VE DIŞ POLİTİKA ---
    { text: "Uluslararası sistemin doğası nedir?", options: [
        { text: "Anarşiktir, herkes kendi başının çaresine bakar.", effect: { eco: 0, auth: 0, diplo: -4, style: 3 } },
        { text: "Kurumlar ve hukuk yoluyla işbirliği mümkündür.", effect: { eco: 0, auth: 0, diplo: 5, style: -2 } },
        { text: "Güçlülerin zayıfları ezdiği bir sömürü düzenidir.", effect: { eco: -2, auth: 0, diplo: -2, style: -3 } },
        { text: "Karşılıklı bağımlılık savaşı engeller.", effect: { eco: 2, auth: 0, diplo: 4, style: 0 } }
    ]},
    { text: "Savaş, Clausewitz'in dediği gibi siyasetin devamı mıdır?", options: [
        { text: "Kesinlikle, diplomasi bittiğinde güç konuşur.", effect: { eco: 0, auth: -2, diplo: -3, style: 4 } },
        { text: "Savaş bir hatadır, kaçınmak için her yol denenmelidir.", effect: { eco: 0, auth: 2, diplo: 3, style: -2 } },
        { text: "Sadece vatan savunması için meşrudur.", effect: { eco: 0, auth: 0, diplo: 0, style: -1 } },
        { text: "Önleyici savaş doktrini uygulanabilir.", effect: { eco: 0, auth: -3, diplo: -4, style: 3 } }
    ]},
    { text: "Uluslararası Hukuk ve BM kararları?", options: [
        { text: "Bağlayıcıdır ve uyulması zorunludur.", effect: { eco: 0, auth: 2, diplo: 6, style: -2 } },
        { text: "Ulusal çıkarlarımla çatışmadığı sürece uyarım.", effect: { eco: 0, auth: -1, diplo: -2, style: 3 } },
        { text: "Güçlülerin zayıfları yönetmek için uydurduğu kurallardır.", effect: { eco: 0, auth: -3, diplo: -5, style: 2 } },
        { text: "Reform edilmesi şartıyla desteklerim.", effect: { eco: 0, auth: 0, diplo: 2, style: 1 } }
    ]},
    { text: "Nükleer silahlanma?", options: [
        { text: "Caydırıcılık için en büyük güvencedir.", effect: { eco: 0, auth: -2, diplo: -4, style: 4 } },
        { text: "Dünya nükleer silahlardan tamamen arındırılmalıdır.", effect: { eco: 0, auth: 0, diplo: 5, style: -5 } },
        { text: "Sadece bizde ve dostlarımızda olması yeterlidir.", effect: { eco: 0, auth: -1, diplo: -2, style: 2 } },
        { text: "Statüko korunmalıdır, yayılma önlenmelidir.", effect: { eco: 0, auth: 0, diplo: 2, style: 1 } }
    ]},

    // --- BÖLÜM 4: ÜSLUP VE FELSEFE ---
    { text: "Makyavelist (Amaca giden yolda her şey mübahtır) misiniz?", options: [
        { text: "Evet, siyaset sonuç alma sanatıdır.", effect: { eco: 0, auth: -2, diplo: 0, style: 6 } },
        { text: "Hayır, ahlaki değerler iktidardan önemlidir.", effect: { eco: 0, auth: 3, diplo: 0, style: -6 } },
        { text: "Bazen kirli eller gereklidir ama bu amaç yüceyse.", effect: { eco: 0, auth: -1, diplo: 0, style: 2 } },
        { text: "Dürüstlük en iyi siyasettir.", effect: { eco: 0, auth: 2, diplo: 0, style: -3 } }
    ]},
    { text: "Toplumu değiştirmek için yönteminiz?", options: [
        { text: "Radikal ve hızlı devrimler.", effect: { eco: -2, auth: -2, diplo: 0, style: -5 } },
        { text: "Zamanla yayılan reformlar.", effect: { eco: 0, auth: 2, diplo: 0, style: 2 } },
        { text: "Gelenekleri koruyarak ilerlemek.", effect: { eco: 0, auth: 0, diplo: 0, style: 3 } },
        { text: "Toplum mühendisliği ile yukarıdan aşağıya değişim.", effect: { eco: 0, auth: -4, diplo: 0, style: 0 } }
    ]},
    { text: "Din ve devlet işleri?", options: [
        { text: "Keskin bir laiklik uygulanmalı.", effect: { eco: 0, auth: 0, diplo: 0, style: -2 } },
        { text: "Devlet tüm inançlara eşit mesafede olmalı.", effect: { eco: 0, auth: 3, diplo: 0, style: 0 } },
        { text: "Dini değerler siyasetin rehberi olmalı.", effect: { eco: 0, auth: -2, diplo: 0, style: 2 } },
        { text: "Din, kültürel birleştirici olarak kullanılmalı.", effect: { eco: 0, auth: -1, diplo: 0, style: 3 } }
    ]},
    { text: "Tarihsel miras ve geçmiş?", options: [
        { text: "Geçmişin hatalarıyla yüzleşilmeli ve özür dilenmeli.", effect: { eco: 0, auth: 2, diplo: 3, style: -3 } },
        { text: "Tarih şanlı zaferlerle doludur, gurur duyulmalı.", effect: { eco: 0, auth: -1, diplo: -2, style: 2 } },
        { text: "Geçmiş geçmiştir, geleceğe bakılmalı.", effect: { eco: 0, auth: 0, diplo: 0, style: 4 } },
        { text: "Tarihsel sınırlarımıza ve etki alanımıza dönmeliyiz.", effect: { eco: 0, auth: -3, diplo: -5, style: 1 } }
    },
    // --- BÖLÜM 5: KARIŞIK KÜLT SORULAR ---
    { text: "Yumuşak Güç (Soft Power) kullanımı?", options: [
        { text: "Kültür ve sanat en büyük diplomasi aracıdır.", effect: { eco: 0, auth: 1, diplo: 4, style: 0 } },
        { text: "Sert güç olmadan yumuşak güç etkisizdir.", effect: { eco: 0, auth: -2, diplo: -2, style: 3 } },
        { text: "Gereksiz masraftır, orduya yatırım yapılmalı.", effect: { eco: 0, auth: -3, diplo: -3, style: 2 } },
        { text: "Propaganda amacıyla etkin kullanılmalı.", effect: { eco: 0, auth: -4, diplo: -1, style: 1 } }
    ]},
    { text: "İklim değişikliği ile mücadele?", options: [
        { text: "Küresel bir tehdittir, ulusal çıkarlardan önce gelir.", effect: { eco: -2, auth: 0, diplo: 5, style: -2 } },
        { text: "Ekonomik büyümeyi engellemeyecek şekilde yönetilmeli.", effect: { eco: 3, auth: 0, diplo: 0, style: 2 } },
        { text: "Batı'nın sanayileşmemizi engelleme oyunudur.", effect: { eco: -1, auth: 0, diplo: -4, style: 3 } },
        { text: "Teknoloji ile çözülür, yasaklamaya gerek yok.", effect: { eco: 2, auth: 0, diplo: 0, style: 1 } }
    ]},
    { text: "Etnik ve kültürel çeşitlilik?", options: [
        { text: "Zenginliktir, çok kültürlülük desteklenmeli.", effect: { eco: 0, auth: 4, diplo: 2, style: -2 } },
        { text: "Ulus devletin homojen yapısı korunmalı.", effect: { eco: 0, auth: -2, diplo: -3, style: 2 } },
        { text: "Entegrasyon şartıyla kabul edilebilir.", effect: { eco: 0, auth: 0, diplo: 0, style: 1 } },
        { text: "Azınlık hakları ülkeyi böler.", effect: { eco: 0, auth: -5, diplo: -2, style: 0 } }
    ]},
    { text: "İstihbarat servislerinin rolü?", options: [
        { text: "Devletin bekası için her yerde, her zaman.", effect: { eco: 0, auth: -6, diplo: -2, style: 4 } },
        { text: "Sadece dış tehditlere odaklanmalı.", effect: { eco: 0, auth: 2, diplo: 0, style: 0 } },
        { text: "Vatandaşın özel hayatına saygı duyulmalı.", effect: { eco: 0, auth: 5, diplo: 0, style: -2 } },
        { text: "Siyasi rakipleri izlemek için kullanılabilir.", effect: { eco: 0, auth: -9, diplo: 0, style: 5 } }
    },
    // Toplam 20 soru oldu, 10 tane daha ekleyerek 30'a tamamlıyorum.
    { text: "Sınır güvenliği ve mülteci politikası?", options: [
        { text: "Açık kapı politikası insanlık görevidir.", effect: { eco: -1, auth: 3, diplo: 4, style: -4 } },
        { text: "Sınırlar namustur, duvarlar örülmeli.", effect: { eco: 0, auth: -3, diplo: -5, style: 2 } },
        { text: "Seçici ve kontrollü göç alınmalı.", effect: { eco: 2, auth: 0, diplo: 0, style: 1 } },
        { text: "Mülteciler siyasi koz olarak kullanılabilir.", effect: { eco: 0, auth: -5, diplo: -3, style: 5 } }
    ]},
    { text: "Kadın hakları ve cinsiyet eşitliği?", options: [
        { text: "Pozitif ayrımcılık ile tam eşitlik sağlanmalı.", effect: { eco: 0, auth: 4, diplo: 2, style: -3 } },
        { text: "Fırsat eşitliği yeterlidir.", effect: { eco: 2, auth: 0, diplo: 0, style: 0 } },
        { text: "Geleneksel aile yapısı korunmalı.", effect: { eco: 0, auth: -2, diplo: 0, style: 2 } },
        { text: "Devlet bu işlere karışmamalı.", effect: { eco: 4, auth: 0, diplo: 0, style: 0 } }
    ]},
    { text: "Merkez Bankası bağımsızlığı?", options: [
        { text: "Siyasetten tamamen arındırılmalı.", effect: { eco: 5, auth: 2, diplo: 0, style: 0 } },
        { text: "Hükümetin ekonomi politikalarıyla uyumlu olmalı.", effect: { eco: -2, auth: -3, diplo: 0, style: 0 } },
        { text: "Faiz lobilerine karşı siyasi irade karar vermeli.", effect: { eco: -3, auth: -5, diplo: 0, style: 2 } },
        { text: "Tamamen kamulaştırılmalı.", effect: { eco: -8, auth: 0, diplo: 0, style: 0 } }
    ]},
    { text: "Eğitim sistemi nasıl olmalı?", options: [
        { text: "Bilimsel, laik ve parasız.", effect: { eco: -4, auth: 0, diplo: 0, style: -2 } },
        { text: "Piyasa ihtiyaçlarına göre şekillenmeli, özel okul ağırlıklı.", effect: { eco: 5, auth: 0, diplo: 0, style: 1 } },
        { text: "Milli ve manevi değerleri aşılamalı.", effect: { eco: 0, auth: -2, diplo: -2, style: 2 } },
        { text: "Eleştirel düşünceyi merkeze almalı.", effect: { eco: 0, auth: 4, diplo: 0, style: -1 } }
    ]},
    { text: "Avrupa Birliği (veya bölgesel birlikler) hakkında görüşünüz?", options: [
        { text: "Ulus-üstü yapılar geleceğin modelidir.", effect: { eco: 2, auth: 2, diplo: 8, style: -2 } },
        { text: "Sadece ekonomik işbirliği düzeyinde kalmalı.", effect: { eco: 3, auth: 0, diplo: 0, style: 1 } },
        { text: "Egemenliği sınırlayan bürokratik canavarlardır.", effect: { eco: 0, auth: -2, diplo: -6, style: 2 } },
        { text: "Hristiyan kulübüdür (veya dışlayıcıdır).", effect: { eco: 0, auth: 0, diplo: -3, style: 0 } }
    ]},
    { text: "Kıbrıs veya benzeri toprak sorunlarında çözüm?", options: [
        { text: "İki devletli çözüm veya ilhak.", effect: { eco: 0, auth: -2, diplo: -5, style: 3 } },
        { text: "Federal çözüm ve birleşme.", effect: { eco: 0, auth: 2, diplo: 4, style: -2 } },
        { text: "Statüko devam etmeli.", effect: { eco: 0, auth: 0, diplo: -1, style: 1 } },
        { text: "Uluslararası hakem kararlarına uyulmalı.", effect: { eco: 0, auth: 1, diplo: 3, style: 0 } }
    ]},
    { text: "Enerji politikası?", options: [
        { text: "Yenilenebilir enerjiye tam geçiş.", effect: { eco: -2, auth: 0, diplo: 2, style: -3 } },
        { text: "Fosil yakıtlar büyüme için gereklidir.", effect: { eco: 3, auth: 0, diplo: 0, style: 2 } },
        { text: "Nükleer enerji şarttır.", effect: { eco: 0, auth: -1, diplo: -1, style: 1 } },
        { text: "Enerji bağımsızlığı her şeyden önemlidir.", effect: { eco: -1, auth: -2, diplo: -3, style: 2 } }
    ]},
    { text: "Sosyal medya denetimi?", options: [
        { text: "Asla sansürlenmemeli.", effect: { eco: 0, auth: 6, diplo: 0, style: 0 } },
        { text: "Yerli platformlar kurulmalı, yabancılar yasaklanmalı.", effect: { eco: 0, auth: -5, diplo: -4, style: 0 } },
        { text: "Dezenformasyonla mücadele için sıkı yasa.", effect: { eco: 0, auth: -2, diplo: 0, style: 0 } },
        { text: "Şirketler kendi kendini denetlemeli.", effect: { eco: 4, auth: 0, diplo: 0, style: 0 } }
    ]},
    { text: "Özelleştirme?", options: [
        { text: "Devlet küçülmeli, her şey satılmalı.", effect: { eco: 8, auth: 0, diplo: 0, style: 0 } },
        { text: "Kamu zararı olanlar özelleştirilmeli.", effect: { eco: 2, auth: 0, diplo: 0, style: 1 } },
        { text: "Stratejik kurumlar asla satılamaz.", effect: { eco: -3, auth: 0, diplo: 0, style: 0 } },
        { text: "Yeniden devletleştirme (kamulaştırma) yapılmalı.", effect: { eco: -7, auth: 0, diplo: 0, style: 0 } }
    ]},
    { text: "Son olarak, ideal yönetim biçimi?", options: [
        { text: "Katılımcı ve çoğulcu demokrasi.", effect: { eco: 0, auth: 8, diplo: 0, style: -2 } },
        { text: "Güçlü liderlik ve teknokrasi.", effect: { eco: 0, auth: -4, diplo: 0, style: 3 } },
        { text: "Merkeziyetçi sosyalist cumhuriyet.", effect: { eco: -5, auth: -6, diplo: 0, style: 0 } },
        { text: "İslami veya geleneksel monarşi/yönetim.", effect: { eco: 0, auth: -8, diplo: 0, style: 0 } }
    ]}
];

// --- APP LOGIC ---

let currentQuestionIndex = 0;
let userStats = { eco: 0, auth: 0, diplo: 0, style: 0 };

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const optionsContainer = document.getElementById('options-container');

startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = q.text;
    document.getElementById('question-count').textContent = `Soru ${currentQuestionIndex + 1} / ${questions.length}`;
    
    // Progress Bar
    const pct = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${pct}%`;

    optionsContainer.innerHTML = '';
    
    // Şıkların sırasını karıştır (Bias oluşmaması için)
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => handleAnswer(opt.effect);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(effect) {
    userStats.eco += effect.eco;
    userStats.auth += effect.auth;
    userStats.diplo += effect.diplo;
    userStats.style += effect.style;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    quizScreen.classList.remove('active');
    loadingScreen.classList.add('active');
    document.getElementById('progress-bar').style.width = '100%';

    // Yükleme simülasyonu
    setTimeout(() => {
        calculateResult();
    }, 2000);
}

function calculateResult() {
    let closestLeader = null;
    let minDiff = Infinity;

    // Euclidean Distance
    leaders.forEach(leader => {
        // Lider skorları -10 ile 10 arasında.
        // Kullanıcı skorları 30 soruda toplamda -60 ile +60 arasına çıkabilir.
        // Bu yüzden lider skorlarını kullanıcı skalasına uyarlıyoruz (x4 çarpanı yaklaşık denge sağlar)
        // Ya da kullanıcı skorunu normalize ederiz. Kullanıcı skorunu normalize etmek daha mantıklı.
        
        // 30 soru var, ortalama etki 3 desek, max puan 90 olur ama genelde 30-40 bandında kalır.
        // Basit bir scale factor kullanalım:
        const scale = 3.5; 

        const diffEco = userStats.eco - (leader.stats.eco * scale);
        const diffAuth = userStats.auth - (leader.stats.auth * scale);
        const diffDiplo = userStats.diplo - (leader.stats.diplo * scale);
        const diffStyle = userStats.style - (leader.stats.style * scale);

        const totalDiff = Math.sqrt(
            diffEco**2 + diffAuth**2 + diffDiplo**2 + diffStyle**2
        );

        if (totalDiff < minDiff) {
            minDiff = totalDiff;
            closestLeader = leader;
        }
    });

    showResultScreen(closestLeader, minDiff);
}

function showResultScreen(leader, diff) {
    loadingScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Eşleşme yüzdesi (Ters orantı)
    let matchRate = Math.max(60, 100 - Math.round(diff / 2));
    document.getElementById('match-percent').innerText = matchRate;
    
    document.getElementById('leader-name').innerText = leader.name;
    document.getElementById('leader-title').innerText = leader.title;
    document.getElementById('leader-quote').innerText = leader.quote;
    document.getElementById('leader-bio').innerText = leader.bio;

    // İstatistik Barlarını Ayarla (Politics Compass Mantığı)
    // - Değerler Sol/Aşağı, + Değerler Sağ/Yukarı
    // %50 nötr noktasıdır.
    // Liderin kendi statik değerlerini gösteriyoruz ki kullanıcı "Kime benzedim?" sorusuna yanıt bulsun.
    
    const setBar = (id, val) => {
        // Val -10 ile 10 arasında. %0 ile %100 arasına çekiyoruz.
        // -10 -> %0, 0 -> %50, 10 -> %100
        const percentage = (val + 10) * 5;
        document.getElementById(id).style.width = `${percentage}%`;
        
        // Renk değişimi (Opsiyonel estetik)
        const el = document.getElementById(id);
        if(val < 0) el.style.background = "linear-gradient(90deg, #e74c3c, #c0392b)"; // Sol/Otoriter kırmızı ton
        else el.style.background = "linear-gradient(90deg, #2ecc71, #27ae60)"; // Sağ/Liberal yeşil ton
        // Stil için özel renk:
        if(id === 'stat-style') el.style.background = "linear-gradient(90deg, #9b59b6, #8e44ad)";
        if(id === 'stat-dip') el.style.background = "linear-gradient(90deg, #3498db, #2980b9)";
    };

    setBar('stat-eco', leader.stats.eco);
    setBar('stat-auth', leader.stats.auth);
    setBar('stat-dip', leader.stats.diplo);
    setBar('stat-style', leader.stats.style);
}
