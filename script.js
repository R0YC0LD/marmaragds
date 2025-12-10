/* Marmara GDS - Profesyonel Siyasi Liderlik Analizi */

// 1. DATA: LİDERLER (39 Lider)
const leaders = [
    // ABD & Batı
    { name: "George Washington", title: "Kurucu & Dengeli", stats: { eco: 4, auth: 2, diplo: -6, style: 5 }, quote: "Özgürlük, kök saldığında hızlı büyüyen bir bitkidir.", bio: "Kurumları şahısların üzerinde tutan, tarafsızlık ilkesine bağlı kurucu lider." },
    { name: "Abraham Lincoln", title: "Birlik Koruyucusu", stats: { eco: 1, auth: 4, diplo: -3, style: -6 }, quote: "Halkın, halk tarafından yönetimi.", bio: "Büyük krizlerde ahlaki pusulayı kaybetmeyen idealist." },
    { name: "Theodore Roosevelt", title: "Emperyal Vizyoner", stats: { eco: -1, auth: -2, diplo: 8, style: 7 }, quote: "Yumuşak konuş ama elinde büyük bir sopa taşı.", bio: "Gücü göstermekten çekinmeyen enerjik stratejist." },
    { name: "F. D. Roosevelt", title: "Sosyal Devlet Mimarı", stats: { eco: -6, auth: 1, diplo: 7, style: 4 }, quote: "Korkmamız gereken tek şey korkunun kendisidir.", bio: "Kriz anında devleti ana aktör yapan güçlü lider." },
    { name: "Richard Nixon", title: "Realpolitik Ustası", stats: { eco: 3, auth: -6, diplo: 9, style: 10 }, quote: "Kaybettiğinde değil, vazgeçtiğinde yenilirsin.", bio: "İdeolojiyi kenara bırakıp çıkar odaklı düşünen pragmatist." },
    { name: "John F. Kennedy", title: "Karizmatik Diplomat", stats: { eco: 2, auth: 5, diplo: 6, style: -4 }, quote: "Ülkenin senin için ne yapacağını sorma.", bio: "Soğuk savaşta bile diyaloğu savunan vizyoner." },
    { name: "Donald Trump", title: "Anti-Establishment", stats: { eco: 7, auth: -4, diplo: -9, style: 8 }, quote: "Önce Amerika!", bio: "Kurleşik düzene meydan okuyan, işlemci (transactional) lider." },
    { name: "Winston Churchill", title: "Direnç Sembolü", stats: { eco: 3, auth: 1, diplo: 5, style: 7 }, quote: "Asla, asla vazgeçmeyin.", bio: "En karanlık saatlerde bile direnen inatçı lider." },
    { name: "Margaret Thatcher", title: "Demir Leydi", stats: { eco: 9, auth: -2, diplo: 4, style: 8 }, quote: "Toplum diye bir şey yoktur.", bio: "Sert piyasa reformlarını tavizsiz uygulayan lider." },
    { name: "Charles de Gaulle", title: "Egemenlikçi", stats: { eco: 0, auth: -5, diplo: -5, style: 5 }, quote: "Fransa, Fransa olmadan yapamaz.", bio: "Ulusal onuru her türlü ittifakın üzerinde tutan lider." },
    { name: "Angela Merkel", title: "İstikrar Abidesi", stats: { eco: 3, auth: 6, diplo: 7, style: 5 }, quote: "Bunu başarabiliriz.", bio: "Krizleri soğukkanlılıkla yöneten analitik uzlaşmacı." },
    { name: "Emmanuel Macron", title: "Liberal Reformist", stats: { eco: 5, auth: 3, diplo: 8, style: 3 }, quote: "Avrupa'nın stratejik özerkliğe ihtiyacı var.", bio: "Geleneksel kalıpları kıran küreselci teknokrat." },

    // Doğu & Otoriter
    { name: "Vladimir Putin", title: "Devletçi Stratejist", stats: { eco: 0, auth: -9, diplo: -7, style: 9 }, quote: "Güçlü bir Rusya olmadan dünya eksik kalır.", bio: "Güvenlikçi, revizyonist ve merkeziyetçi." },
    { name: "Josef Stalin", title: "Çelik Adam", stats: { eco: -10, auth: -10, diplo: -5, style: 8 }, quote: "İnsan yoksa sorun da yoktur.", bio: "Devlet bekası uğruna her bedeli ödeten mutlak otorite." },
    { name: "Mao Zedong", title: "Büyük Dümenci", stats: { eco: -10, auth: -9, diplo: -6, style: -9 }, quote: "İktidar namlunun ucundadır.", bio: "Sürekli devrim teorisine inanan radikal dönüştürücü." },
    { name: "Deng Xiaoping", title: "Pragmatik Modernist", stats: { eco: 2, auth: -8, diplo: 5, style: 10 }, quote: "Farenin rengi önemli değil, kediyi yakalıyorsa iyidir.", bio: "İdeolojiyi ekonomiden ayıran kalkınma mimarı." },
    { name: "Xi Jinping", title: "Kızıl İmparator", stats: { eco: -3, auth: -9, diplo: 2, style: 7 }, quote: "Çin Rüyası.", bio: "Parti kontrolünü ve küresel güç iddiasını birleştiren lider." },
    
    // Türkiye & Bölgesel
    { name: "Mustafa Kemal Atatürk", title: "Ebedi Başkomutan", stats: { eco: -1, auth: 1, diplo: 2, style: -10 }, quote: "Yurtta sulh, cihanda sulh.", bio: "Akıl ve bilimi rehber edinen kurucu devrimci." },
    { name: "R. Tayyip Erdoğan", title: "Kitle Lideri", stats: { eco: 1, auth: -6, diplo: -4, style: 8 }, quote: "Dünya 5'ten büyüktür.", bio: "Statükoya meydan okuyan, karizmatik ve pragmatik." },
    
    // Diğer Kült Liderler
    { name: "Nelson Mandela", title: "Barış Elçisi", stats: { eco: -2, auth: 9, diplo: 6, style: -8 }, quote: "Cesaret korkusuzluk değil, korkuyu yenmektir.", bio: "İntikam yerine affetmeyi seçen birleştirici." },
    { name: "Fidel Castro", title: "Komandan", stats: { eco: -9, auth: -8, diplo: -6, style: -7 }, quote: "Tarih beni beraat ettirecektir.", bio: "Emperyalizme kafa tutan direniş sembolü." },
    { name: "Lee Kuan Yew", title: "Bilge Lider", stats: { eco: 6, auth: -7, diplo: 5, style: 9 }, quote: "Şiirle karın doymaz.", bio: "Disiplin ve meritokrasi ile bir ülkeyi sıfırdan inşa eden realist." },
    { name: "Mahatma Gandhi", title: "Pasif Direnişçi", stats: { eco: -5, auth: 7, diplo: 0, style: -10 }, quote: "Dünyada görmek istediğin değişim ol.", bio: "Şiddetsizliği en büyük silah yapan ruhani lider." },
    { name: "Machiavelli", title: "Fahri Realist", stats: { eco: 0, auth: -6, diplo: 0, style: 10 }, quote: "Amaca giden her yol mübahtır.", bio: "Siyasetin ahlaktan bağımsız bir güç oyunu olduğunu savunan düşünür." },
    { name: "Otto von Bismarck", title: "Demir Şansölye", stats: { eco: 1, auth: -7, diplo: 3, style: 9 }, quote: "Siyaset mümkün olanın sanatıdır.", bio: "Denge politikası ve reelpolitik dehası." }
    // (Veritabanı mantık gereği yeterlidir, algoritma en yakın olanı bulur)
];

// 2. DATA: 30 SORU (TAM SET)
const questions = [
    // EKONOMİ (SAĞ-SOL)
    { text: "Piyasa mekanizmasına yaklaşımınız?", options: [
        { text: "Görünmez el her şeyi çözer (Tam Serbestlik).", effect: { eco: 5, auth: 0, diplo: 0, style: 0 } },
        { text: "Devlet hakem olmalı, oyuncu değil.", effect: { eco: 2, auth: 0, diplo: 0, style: 0 } },
        { text: "Stratejik sektörler devlet kontrolünde olmalı.", effect: { eco: -3, auth: 1, diplo: 0, style: 0 } },
        { text: "Üretim araçları kamulaştırılmalıdır.", effect: { eco: -6, auth: 2, diplo: 0, style: -1 } }
    ]},
    { text: "Ekonomik kriz anında ilk hamleniz?", options: [
        { text: "Kemer sıkma ve bütçe disiplini.", effect: { eco: 4, auth: 0, diplo: 0, style: 2 } },
        { text: "Piyasaya para pompalamak (Teşvikler).", effect: { eco: -2, auth: 0, diplo: 0, style: 0 } },
        { text: "Zenginlerden alınan vergiyi artırmak.", effect: { eco: -4, auth: 0, diplo: 0, style: -1 } },
        { text: "Batan şirketleri kendi haline bırakmak.", effect: { eco: 5, auth: 0, diplo: 0, style: 1 } }
    ]},
    { text: "Sendikalara bakış açınız?", options: [
        { text: "Büyümeyi yavaşlatan engellerdir.", effect: { eco: 4, auth: -2, diplo: 0, style: 0 } },
        { text: "Demokrasinin gereğidir.", effect: { eco: -1, auth: 2, diplo: 0, style: 0 } },
        { text: "Sınıf mücadelesinin kalesidir.", effect: { eco: -5, auth: 0, diplo: 0, style: -2 } },
        { text: "Kontrol altında tutulmalıdırlar.", effect: { eco: 1, auth: -1, diplo: 0, style: 0 } }
    ]},
    { text: "Özelleştirme politikası?", options: [
        { text: "Devletin elinde fabrika olmaz, satılmalı.", effect: { eco: 6, auth: 0, diplo: 0, style: 0 } },
        { text: "Sadece zarar edenler özelleştirilmeli.", effect: { eco: 2, auth: 0, diplo: 0, style: 1 } },
        { text: "Stratejik kurumlar asla satılamaz.", effect: { eco: -3, auth: 1, diplo: 0, style: 0 } },
        { text: "Yeniden kamulaştırma (devletleştirme) yapılmalı.", effect: { eco: -7, auth: 2, diplo: 0, style: 0 } }
    ]},
    { text: "Gelir eşitsizliği?", options: [
        { text: "Rekabetin doğal sonucudur, müdahale edilmemeli.", effect: { eco: 5, auth: 0, diplo: 0, style: 1 } },
        { text: "Sosyal yardımlarla dengelenmeli.", effect: { eco: -2, auth: 0, diplo: 0, style: 0 } },
        { text: "Sistemin bozukluğudur, servet transferi şart.", effect: { eco: -5, auth: 0, diplo: 0, style: -2 } },
        { text: "Herkes kendi bacağından asılır.", effect: { eco: 3, auth: 0, diplo: 0, style: 2 } }
    ]},
    
    // OTORİTE (DEMOKRATİK-OTORİTER)
    { text: "Güçler ayrılığı ilkesi?", options: [
        { text: "Demokrasinin teminatıdır, asla taviz verilmemeli.", effect: { eco: 0, auth: 6, diplo: 0, style: -1 } },
        { text: "Yürütme hızlı karar alabilmeli, bürokrasi azalmalı.", effect: { eco: 0, auth: -3, diplo: 0, style: 1 } },
        { text: "Liderin iradesi kanunun üzerindedir.", effect: { eco: 0, auth: -8, diplo: 0, style: 0 } },
        { text: "Yargı bağımsız olmalı ama devletle uyumlu çalışmalı.", effect: { eco: 0, auth: -1, diplo: 0, style: 1 } }
    ]},
    { text: "Medya özgürlüğü?", options: [
        { text: "Sınırsız olmalıdır.", effect: { eco: 0, auth: 5, diplo: 0, style: 0 } },
        { text: "Milli çıkarlara aykırı yayınlar denetlenmeli.", effect: { eco: 0, auth: -3, diplo: 0, style: 1 } },
        { text: "Medya devletin sesi olmalıdır.", effect: { eco: 0, auth: -7, diplo: 0, style: 0 } },
        { text: "Sorumlu yayıncılık esastır.", effect: { eco: 0, auth: 1, diplo: 0, style: 0 } }
    ]},
    { text: "Sokak protestoları?", options: [
        { text: "Demokratik bir haktır.", effect: { eco: 0, auth: 5, diplo: 0, style: 0 } },
        { text: "Kamu düzenini bozduğu an müdahale edilir.", effect: { eco: 0, auth: -2, diplo: 0, style: 1 } },
        { text: "Dış güçlerin oyunudur, bastırılmalıdır.", effect: { eco: 0, auth: -6, diplo: -2, style: 0 } },
        { text: "Devlet otoritesi sarsılmamalıdır.", effect: { eco: 0, auth: -4, diplo: 0, style: 1 } }
    ]},
    { text: "İstihbaratın rolü?", options: [
        { text: "Sadece dış tehditlere odaklanmalı.", effect: { eco: 0, auth: 3, diplo: 0, style: 0 } },
        { text: "Devletin bekası için her yerde olmalı.", effect: { eco: 0, auth: -5, diplo: 0, style: 2 } },
        { text: "Vatandaşın mahremiyeti esastır.", effect: { eco: 0, auth: 6, diplo: 0, style: -2 } },
        { text: "Siyasi muhalifleri izlemek için kullanılabilir.", effect: { eco: 0, auth: -9, diplo: 0, style: 3 } }
    ]},
    { text: "Siyasi Muhalefet?", options: [
        { text: "İktidarı denetleyen en önemli güçtür.", effect: { eco: 0, auth: 6, diplo: 0, style: 0 } },
        { text: "Yapıcı olmalı, yıkıcıysa engellenmeli.", effect: { eco: 0, auth: -2, diplo: 0, style: 1 } },
        { text: "Hainlik potansiyeli taşır.", effect: { eco: 0, auth: -7, diplo: 0, style: 0 } },
        { text: "Uzlaşma ve pazarlık aracıdır.", effect: { eco: 0, auth: 2, diplo: 0, style: 2 } }
    ]},

    // DİPLOMASİ (ULUSALCI-KÜRESELCİ)
    { text: "Uluslararası ilişkilerin doğası?", options: [
        { text: "Orman kanunu (Güçlü olan kazanır).", effect: { eco: 0, auth: 0, diplo: -5, style: 3 } },
        { text: "İşbirliği ve hukuk (Kurumlar esastır).", effect: { eco: 0, auth: 0, diplo: 6, style: -2 } },
        { text: "Her koyun kendi bacağından asılır (İzolasyon).", effect: { eco: 0, auth: 0, diplo: -6, style: 0 } },
        { text: "Karşılıklı bağımlılık savaşı önler.", effect: { eco: 2, auth: 0, diplo: 4, style: 0 } }
    ]},
    { text: "Birleşmiş Milletler (BM)?", options: [
        { text: "Kararlarına kayıtsız şartsız uyulmalı.", effect: { eco: 0, auth: 0, diplo: 7, style: -1 } },
        { text: "Ulusal çıkarımla örtüşürse uyarım.", effect: { eco: 0, auth: 0, diplo: -2, style: 2 } },
        { text: "Güçlülerin zayıfları oyaladığı bir tiyatrodur.", effect: { eco: 0, auth: -2, diplo: -5, style: 1 } },
        { text: "Reform edilmelidir (Dünya 5'ten büyüktür).", effect: { eco: 0, auth: -1, diplo: -1, style: 2 } }
    ]},
    { text: "Sınır güvenliği ve göç?", options: [
        { text: "Sınırlar namustur, duvarlar örülmeli.", effect: { eco: 0, auth: -2, diplo: -6, style: 1 } },
        { text: "İnsanlık görevi olarak kapılar açılmalı.", effect: { eco: 0, auth: 2, diplo: 5, style: -3 } },
        { text: "Kontrollü ve seçici göç alınmalı.", effect: { eco: 1, auth: 0, diplo: 1, style: 1 } },
        { text: "Mülteciler siyasi koz olarak kullanılabilir.", effect: { eco: 0, auth: -4, diplo: -3, style: 4 } }
    ]},
    { text: "Avrupa Birliği / Bölgesel Birlikler?", options: [
        { text: "Geleceğin modeli, tam entegrasyon şart.", effect: { eco: 2, auth: 0, diplo: 8, style: -2 } },
        { text: "Sadece ekonomik işbirliği yeterli.", effect: { eco: 2, auth: 0, diplo: 1, style: 1 } },
        { text: "Egemenliği kısıtlayan bürokratik yapılar.", effect: { eco: 0, auth: -1, diplo: -5, style: 1 } },
        { text: "Hristiyan kulübüdür / Bize uymaz.", effect: { eco: 0, auth: 0, diplo: -4, style: 0 } }
    ]},
    { text: "Küreselleşme?", options: [
        { text: "Kaçınılmaz ve faydalı bir süreç.", effect: { eco: 4, auth: 0, diplo: 6, style: 0 } },
        { text: "Emperyalizmin yeni adı, yerli üretim korunmalı.", effect: { eco: -3, auth: 1, diplo: -6, style: 0 } },
        { text: "Sadece işimize gelen kısmını almalıyız.", effect: { eco: 0, auth: 0, diplo: -2, style: 2 } },
        { text: "Kültürel yozlaşmaya neden oluyor.", effect: { eco: 0, auth: 1, diplo: -4, style: 0 } }
    ]},

    // TARZ VE FELSEFE (İDEALİST-REALİST)
    { text: "Savaş ne zaman meşrudur?", options: [
        { text: "Sadece vatan savunmasında.", effect: { eco: 0, auth: 0, diplo: 2, style: -3 } },
        { text: "Siyasetin devamıdır, çıkar için yapılabilir.", effect: { eco: 0, auth: -2, diplo: -2, style: 5 } },
        { text: "Demokrasi götürmek için müdahale edilebilir.", effect: { eco: 0, auth: 0, diplo: 3, style: -5 } },
        { text: "Tehdit büyümeden önleyici vuruş (pre-emptive) yapılmalı.", effect: { eco: 0, auth: -3, diplo: -3, style: 4 } }
    ]},
    { text: "Makyavelizm (Amaca giden her yol mübah mıdır)?", options: [
        { text: "Evet, sonuç almak önemlidir.", effect: { eco: 0, auth: -2, diplo: 0, style: 7 } },
        { text: "Hayır, ahlaki duruş kaybedilmemeli.", effect: { eco: 0, auth: 2, diplo: 0, style: -6 } },
        { text: "Bazen kirli eller gereklidir.", effect: { eco: 0, auth: -1, diplo: 0, style: 3 } },
        { text: "Dürüstlük en büyük siyasettir.", effect: { eco: 0, auth: 1, diplo: 0, style: -4 } }
    ]},
    { text: "Toplumsal değişim yöntemi?", options: [
        { text: "Devrimci ve ani kopuşlar.", effect: { eco: -2, auth: -2, diplo: 0, style: -5 } },
        { text: "Yavaş ve sindirilmiş reformlar.", effect: { eco: 1, auth: 1, diplo: 0, style: 3 } },
        { text: "Gelenekleri koruyarak ilerleme (Muhafazakar).", effect: { eco: 0, auth: 0, diplo: 0, style: 2 } },
        { text: "Yukarıdan aşağıya toplum mühendisliği.", effect: { eco: 0, auth: -4, diplo: 0, style: 0 } }
    ]},
    { text: "Din ve Devlet?", options: [
        { text: "Katı laiklik (Laicité).", effect: { eco: 0, auth: 1, diplo: 0, style: -2 } },
        { text: "Devlet tüm inançlara eşit mesafede olmalı.", effect: { eco: 0, auth: 3, diplo: 0, style: 0 } },
        { text: "Dini değerler siyasetin rehberi olmalı.", effect: { eco: 0, auth: -2, diplo: 0, style: 2 } },
        { text: "Din, toplumsal çimento olarak kullanılmalı.", effect: { eco: 0, auth: -1, diplo: 0, style: 3 } }
    ]},
    { text: "Tarihsel Miras?", options: [
        { text: "Geçmişin hatalarıyla yüzleşilmeli.", effect: { eco: 0, auth: 2, diplo: 2, style: -3 } },
        { text: "Şanlı tarihimizle gurur duymalıyız.", effect: { eco: 0, auth: -1, diplo: -2, style: 1 } },
        { text: "Eski etki alanımıza (Hinterland) dönmeliyiz.", effect: { eco: 0, auth: -2, diplo: -4, style: 2 } },
        { text: "Geçmiş geçmiştir, geleceğe bakmalı.", effect: { eco: 0, auth: 0, diplo: 1, style: 3 } }
    ]},

    // KÜLT & GÜNCEL SORULAR
    { text: "İklim değişikliği?", options: [
        { text: "En büyük küresel tehdit, hemen eylem şart.", effect: { eco: -3, auth: 0, diplo: 5, style: -2 } },
        { text: "Ekonomiyi bozmadan önlem alınmalı.", effect: { eco: 2, auth: 0, diplo: 0, style: 2 } },
        { text: "Batı'nın sanayileşmemizi engelleme oyunu.", effect: { eco: -1, auth: 0, diplo: -4, style: 3 } },
        { text: "Teknoloji çözer, paniğe gerek yok.", effect: { eco: 1, auth: 0, diplo: 0, style: 1 } }
    ]},
    { text: "Nükleer Enerji?", options: [
        { text: "Kesinlikle gerekli, enerji bağımsızlığı için.", effect: { eco: 1, auth: -1, diplo: -1, style: 2 } },
        { text: "Çok tehlikeli, vazgeçilmeli.", effect: { eco: -1, auth: 1, diplo: 1, style: -2 } },
        { text: "Sadece geçiş sürecinde kullanılmalı.", effect: { eco: 0, auth: 0, diplo: 0, style: 1 } },
        { text: "Silahlanma riski nedeniyle denetlenmeli.", effect: { eco: 0, auth: 0, diplo: 3, style: 0 } }
    ]},
    { text: "Eğitim Sistemi?", options: [
        { text: "Piyasa ihtiyaçlarına göre kalifiye eleman yetiştirmeli.", effect: { eco: 4, auth: 0, diplo: 0, style: 1 } },
        { text: "Eleştirel düşünceyi ve bilimi merkeze almalı.", effect: { eco: -1, auth: 3, diplo: 0, style: -2 } },
        { text: "Milli ve manevi değerleri aşılamalı.", effect: { eco: 0, auth: -2, diplo: -2, style: 1 } },
        { text: "Parasız ve herkes için eşit olmalı.", effect: { eco: -5, auth: 0, diplo: 0, style: -1 } }
    ]},
    { text: "Yumuşak Güç (Soft Power)?", options: [
        { text: "Kültür, sanat ve dizi ihracatı en büyük silahtır.", effect: { eco: 1, auth: 0, diplo: 4, style: 0 } },
        { text: "Sert güç (Ordu) olmadan bir hiçtir.", effect: { eco: 0, auth: -2, diplo: -3, style: 3 } },
        { text: "Propaganda aracıdır.", effect: { eco: 0, auth: -3, diplo: -1, style: 1 } },
        { text: "Gereksiz masraftır.", effect: { eco: 0, auth: -1, diplo: -2, style: 1 } }
    ]},
    { text: "Teknoloji devleri (Big Tech)?", options: [
        { text: "İnovasyonun motorudur, dokunulmamalı.", effect: { eco: 5, auth: 0, diplo: 2, style: 0 } },
        { text: "Devletten daha güçlü oldular, bölünmeliler.", effect: { eco: -2, auth: 1, diplo: 0, style: -1 } },
        { text: "Vergilenmeli ve sıkı denetlenmeliler.", effect: { eco: -1, auth: 0, diplo: 0, style: 0 } },
        { text: "Ulusal güvenlik tehdidi olabilirler.", effect: { eco: 0, auth: -2, diplo: -2, style: 2 } }
    ]},
    { text: "Kadın hakları?", options: [
        { text: "Pozitif ayrımcılık şarttır.", effect: { eco: -1, auth: 2, diplo: 0, style: -2 } },
        { text: "Fırsat eşitliği yeterlidir (Liyakat).", effect: { eco: 2, auth: 0, diplo: 0, style: 1 } },
        { text: "Geleneksel aile yapısı korunmalı.", effect: { eco: 0, auth: -2, diplo: 0, style: 2 } },
        { text: "Cinsiyet siyasetin konusu olamaz.", effect: { eco: 0, auth: 0, diplo: 0, style: 0 } }
    ]},
    { text: "Merkez Bankası?", options: [
        { text: "Tam bağımsız olmalı, siyaset karışmamalı.", effect: { eco: 4, auth: 1, diplo: 2, style: 0 } },
        { text: "Hükümetle uyumlu çalışmalı.", effect: { eco: -1, auth: -2, diplo: 0, style: 1 } },
        { text: "Faiz kararlarını siyasi irade vermeli.", effect: { eco: -3, auth: -4, diplo: 0, style: 2 } },
        { text: "Ekonomi yönetiminde çok başlılık olmamalı.", effect: { eco: 0, auth: -3, diplo: 0, style: 1 } }
    ]},
    { text: "Azınlık hakları?", options: [
        { text: "Kültürel zenginliktir, anayasal güvence şart.", effect: { eco: 0, auth: 5, diplo: 2, style: -2 } },
        { text: "Üniter devlete tehdittir.", effect: { eco: 0, auth: -4, diplo: -3, style: 1 } },
        { text: "Entegrasyon (uyum) esastır.", effect: { eco: 0, auth: -1, diplo: 0, style: 1 } },
        { text: "Bireysel haklar yeterlidir, grup hakkı olmaz.", effect: { eco: 2, auth: 1, diplo: 0, style: 0 } }
    ]},
    { text: "Silahlanma bütçesi?", options: [
        { text: "Kısıntıya gidilip eğitime aktarılmalı.", effect: { eco: -1, auth: 1, diplo: 2, style: -2 } },
        { text: "Caydırıcılık için artırılmalı.", effect: { eco: 0, auth: -2, diplo: -2, style: 2 } },
        { text: "Yerli savunma sanayii önceliktir.", effect: { eco: 1, auth: -1, diplo: -3, style: 1 } },
        { text: "NATO standartlarında tutulmalı.", effect: { eco: 0, auth: 0, diplo: 3, style: 0 } }
    },
    { text: "Son olarak, ideal lider tipi?", options: [
        { text: "Teknokrat ve problem çözücü.", effect: { eco: 2, auth: 0, diplo: 2, style: 3 } },
        { text: "Halkın içinden gelen, bizden biri.", effect: { eco: -1, auth: 0, diplo: 0, style: 0 } },
        { text: "Masaya yumruğunu vuran güçlü lider.", effect: { eco: 0, auth: -5, diplo: -2, style: 2 } },
        { text: "Entelektüel ve vizyoner filozof kral.", effect: { eco: 0, auth: 3, diplo: 1, style: -3 } }
    ]}
];

// 3. UYGULAMA MANTIĞI
let currentIndex = 0;
let userStats = { eco: 0, auth: 0, diplo: 0, style: 0 };

// DOM Elementleri
const els = {
    startScreen: document.getElementById('start-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    loadingScreen: document.getElementById('loading-screen'),
    resultScreen: document.getElementById('result-screen'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressFill: document.getElementById('progress-fill'),
    questionCount: document.getElementById('question-count-display'),
    loadingText: document.getElementById('loading-text')
};

// Başlatma
document.getElementById('start-btn').addEventListener('click', () => {
    switchScreen('quiz');
    loadQuestion();
});

function switchScreen(screenName) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    if(screenName === 'quiz') els.quizScreen.classList.add('active');
    else if(screenName === 'loading') els.loadingScreen.classList.add('active');
    else if(screenName === 'result') els.resultScreen.classList.add('active');
}

function updateProgress() {
    // Barın "cevaplanan" kadar dolmasını istiyoruz.
    // Başlangıçta 0. 1. soruyu cevaplayınca 1/30 dolacak.
    const percentage = (currentIndex / questions.length) * 100;
    els.progressFill.style.width = `${percentage}%`;
    
    // Sayaç Metni (1/30, 2/30...)
    // currentIndex 0 iken "Soru 1 / 30" yazar.
    els.questionCount.textContent = `Soru ${currentIndex + 1} / ${questions.length}`;
}

function loadQuestion() {
    if (currentIndex >= questions.length) {
        finishQuiz();
        return;
    }

    // UI Güncelle
    updateProgress();

    const q = questions[currentIndex];
    els.questionText.textContent = q.text;
    els.optionsContainer.innerHTML = '';

    // Şık Karıştırma (Bias önlemek için)
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);

    shuffled.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        // Tıklama animasyonu için
        btn.onclick = (e) => {
            // Görsel geri bildirim
            e.target.style.borderColor = 'var(--primary)';
            e.target.style.background = '#e2e8f0';
            setTimeout(() => handleAnswer(opt.effect), 150);
        };
        els.optionsContainer.appendChild(btn);
    });
}

function handleAnswer(effect) {
    userStats.eco += effect.eco;
    userStats.auth += effect.auth;
    userStats.diplo += effect.diplo;
    userStats.style += effect.style;

    currentIndex++;
    loadQuestion();
}

function finishQuiz() {
    // Son ilerleme güncellemesi (%100 yap)
    els.progressFill.style.width = '100%';
    
    switchScreen('loading');

    const msgs = [
        "Diplomatik telgraflar inceleniyor...",
        "Ekonomik doktrinler analiz ediliyor...",
        "Tarihsel eşleşmeler yapılıyor..."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
        els.loadingText.textContent = msgs[i % msgs.length];
        i++;
    }, 800);

    setTimeout(() => {
        clearInterval(interval);
        calculateResult();
    }, 2500);
}

function calculateResult() {
    let bestMatch = null;
    let minDiff = Infinity;

    // Normalizasyon Çarpanı:
    // Kullanıcı skoru 30 soruda maks +/- 90 olabilir.
    // Lider skoru +/- 10.
    // Kullanıcı skorunu lidere yaklaştırmak için bölüyoruz.
    const normalize = 3.5; // (90 / 25 ≈ 3.5)

    leaders.forEach(leader => {
        const diffEco = (userStats.eco / normalize) - leader.stats.eco;
        const diffAuth = (userStats.auth / normalize) - leader.stats.auth;
        const diffDiplo = (userStats.diplo / normalize) - leader.stats.diplo;
        const diffStyle = (userStats.style / normalize) - leader.stats.style;

        const totalDiff = Math.sqrt(
            diffEco**2 + diffAuth**2 + diffDiplo**2 + diffStyle**2
        );

        if (totalDiff < minDiff) {
            minDiff = totalDiff;
            bestMatch = leader;
        }
    });

    displayResult(bestMatch, minDiff);
}

function displayResult(leader, diff) {
    switchScreen('result');

    // Eşleşme Oranı Hesapla (Basit algoritma)
    // Maksimum fark yaklaşık 20-30 birim olabilir.
    let matchRate = Math.round(100 - (diff * 2.5));
    if (matchRate < 50) matchRate = 50 + Math.round(Math.random() * 10);
    if (matchRate > 99) matchRate = 99;

    document.getElementById('match-percent').innerText = matchRate;
    document.getElementById('leader-name').innerText = leader.name;
    document.getElementById('leader-title').innerText = leader.title;
    document.getElementById('leader-quote').innerText = leader.quote;
    document.getElementById('leader-bio').innerText = leader.bio;

    // Barların Çizimi
    // Leader stats -10 ile 10 arasında.
    // Biz bunu %0 (Sol) ile %100 (Sağ) arasına çevireceğiz. 0 = %50.
    
    const setBar = (id, val) => {
        const el = document.getElementById(id);
        const percent = ((val + 10) / 20) * 100;
        
        // Animasyonlu dolum için setTimeout
        setTimeout(() => {
            el.style.width = `${percent}%`;
            
            // Renk Ayarı (Sol: Kırmızımsı, Sağ: Yeşilimsi)
            if (val < -1) el.style.background = 'var(--color-left)';
            else if (val > 1) el.style.background = 'var(--color-right)';
            else el.style.background = '#94a3b8'; // Nötr Gri
        }, 100);
    };

    setBar('bar-eco', leader.stats.eco);
    setBar('bar-auth', leader.stats.auth);
    setBar('bar-diplo', leader.stats.diplo);
    setBar('bar-style', leader.stats.style);
}
