/* Marmara GDS - Siyasi Liderlik Envanteri
    Core Logic Script
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. VERİTABANI: 39 LİDER ---
    const leaders = [
        // ABD & Batı (Liberal/Demokratik Ağırlıklı)
        { id: "wash", name: "George Washington", title: "Kurucu Baba", stats: { eco: 4, auth: 2, diplo: -6, style: 5 }, quote: "Özgürlük, kök saldığında hızlı büyüyen bir bitkidir.", bio: "Tarafsızlık ilkesini benimseyen, kurumları şahıslardan üstün tutan kurucu lider." },
        { id: "linc", name: "Abraham Lincoln", title: "Birlik Koruyucusu", stats: { eco: 1, auth: 4, diplo: -3, style: -6 }, quote: "Halkın, halk tarafından, halk için yönetimi.", bio: "Büyük krizlerde ahlaki pusulayı kaybetmeyen, birleştirici idealist." },
        { id: "troos", name: "Theodore Roosevelt", title: "Emperyal Vizyoner", stats: { eco: -1, auth: -2, diplo: 8, style: 7 }, quote: "Yumuşak konuş ama elinde büyük bir sopa taşı.", bio: "Enerjik, yayılmacı ve gücü göstermekten çekinmeyen stratejist." },
        { id: "fdr", name: "Franklin D. Roosevelt", title: "Sosyal Devlet Mimarı", stats: { eco: -6, auth: 1, diplo: 7, style: 4 }, quote: "Korkmamız gereken tek şey korkunun kendisidir.", bio: "Kriz anında devleti ana ekonomik aktör yapan güçlü lider." },
        { id: "jfk", name: "John F. Kennedy", title: "Vizyoner Diplomat", stats: { eco: 2, auth: 5, diplo: 6, style: -4 }, quote: "Ülkenin senin için ne yapacağını sorma.", bio: "Soğuk savaşta bile diyaloğu savunan karizmatik lider." },
        { id: "lbj", name: "Lyndon B. Johnson", title: "Büyük Toplum Mimarı", stats: { eco: -4, auth: 1, diplo: 5, style: 6 }, quote: "Barış, şüphe ile değil, güven ile inşa edilir.", bio: "İç politikada reformist, dış politikada müdahaleci." },
        { id: "nixon", name: "Richard Nixon", title: "Realpolitik Ustası", stats: { eco: 3, auth: -6, diplo: 9, style: 10 }, quote: "Kaybettiğinde değil, vazgeçtiğinde yenilirsin.", bio: "İdeolojiyi kenara bırakıp çıkar odaklı düşünen pragmatist." },
        { id: "clinton", name: "Bill Clinton", title: "Küreselci Merkez", stats: { eco: 4, auth: 4, diplo: 8, style: 6 }, quote: "Ekonomi, aptal!", bio: "Yumuşak gücü ve ticari diplomasiyi kullanan ikna edici lider." },
        { id: "bush1", name: "George H. W. Bush", title: "Tecrübeli Diplomat", stats: { eco: 5, auth: 2, diplo: 7, style: 4 }, quote: "Bu saldırganlık ayakta kalamaz.", bio: "Temkinli, koalisyon odaklı ve statükoyu koruyan lider." },
        { id: "bush2", name: "George W. Bush", title: "Neocon Şahin", stats: { eco: 6, auth: -3, diplo: 6, style: -6 }, quote: "Ya bizdensiniz ya da teröristlerden.", bio: "Önleyici savaş doktrinini uygulayan misyoner lider." },
        { id: "obama", name: "Barack Obama", title: "Entelektüel İdealist", stats: { eco: -2, auth: 6, diplo: 6, style: 4 }, quote: "Evet, yapabiliriz.", bio: "Çok taraflı diplomasiyi ve yumuşak gücü tercih eden hatip." },
        { id: "trump", name: "Donald Trump", title: "Anti-Establishment", stats: { eco: 7, auth: -5, diplo: -9, style: 8 }, quote: "Önce Amerika!", bio: "Kurleşik düzene meydan okuyan, korumacı ve işlemci lider." },
        { id: "biden", name: "Joe Biden", title: "Kurumsalcı", stats: { eco: -3, auth: 4, diplo: 7, style: 5 }, quote: "Amerika geri döndü.", bio: "Geleneksel ittifaklara inanan tecrübeli diplomat." },
        { id: "truman", name: "Harry S. Truman", title: "Soğuk Savaş Mimarı", stats: { eco: 1, auth: 2, diplo: 8, style: 6 }, quote: "Sorumluluk burada biter.", bio: "Zor kararların adamı, çevreleme politikasının kurucusu." },
        { id: "ike", name: "Dwight D. Eisenhower", title: "Stratejik Sabır", stats: { eco: 3, auth: 3, diplo: 5, style: 6 }, quote: "Savaşın gözü dönmüşlüğünü sadece askerler bilir.", bio: "Askeri-Endüstriyel komplekse karşı temkinli general." },

        // Avrupa & Batı Dışı
        { id: "churchill", name: "Winston Churchill", title: "Direnç Sembolü", stats: { eco: 3, auth: 1, diplo: 5, style: 7 }, quote: "Asla, asla vazgeçmeyin.", bio: "En karanlık saatlerde bile direnen emperyal demokrat." },
        { id: "degaulle", name: "Charles de Gaulle", title: "Egemenlikçi", stats: { eco: 0, auth: -5, diplo: -5, style: 5 }, quote: "Fransa, Fransa olmadan yapamaz.", bio: "Ulusal onuru her türlü ittifakın üzerinde tutan lider." },
        { id: "thatcher", name: "Margaret Thatcher", title: "Demir Leydi", stats: { eco: 9, auth: -2, diplo: 4, style: 8 }, quote: "Toplum diye bir şey yoktur.", bio: "Sert piyasa reformlarını tavizsiz uygulayan lider." },
        { id: "merkel", name: "Angela Merkel", title: "İstikrar Abidesi", stats: { eco: 3, auth: 6, diplo: 7, style: 5 }, quote: "Bunu başarabiliriz.", bio: "Krizleri soğukkanlılıkla yöneten analitik uzlaşmacı." },
        { id: "macron", name: "Emmanuel Macron", title: "Liberal Reformist", stats: { eco: 5, auth: 3, diplo: 8, style: 3 }, quote: "Avrupa'nın stratejik özerkliği.", bio: "Geleneksel kalıpları kıran küreselci teknokrat." },
        { id: "zelensky", name: "Volodimir Zelenski", title: "İletişim Lideri", stats: { eco: 2, auth: 5, diplo: 9, style: -4 }, quote: "Bana araç lazım, taksi değil.", bio: "Savaş zamanı medya gücünü kullanarak dünyayı mobilize eden lider." },

        // Doğu & Otoriter Blok
        { id: "stalin", name: "Josef Stalin", title: "Çelik Adam", stats: { eco: -10, auth: -10, diplo: -5, style: 8 }, quote: "İnsan yoksa sorun da yoktur.", bio: "Devlet bekası uğruna her bedeli ödeten mutlak otorite." },
        { id: "lenin", name: "Vladimir Lenin", title: "Devrim Teorisyeni", stats: { eco: -10, auth: -8, diplo: -8, style: -9 }, quote: "Barış, toprak ve ekmek.", bio: "Teoriyi pratiğe döken radikal dönüştürücü." },
        { id: "putin", name: "Vladimir Putin", title: "Devletçi Stratejist", stats: { eco: 0, auth: -9, diplo: -7, style: 9 }, quote: "Güçlü bir Rusya olmadan dünya eksik kalır.", bio: "Güvenlikçi, revizyonist ve merkeziyetçi." },
        { id: "yeltsin", name: "Boris Yeltsin", title: "Geçiş Dönemi Lideri", stats: { eco: 4, auth: -2, diplo: 4, style: 2 }, quote: "Özgürlük bedava değildir.", bio: "Eski sistemi yıkarken kaosla mücadele eden lider." },
        { id: "gorbachev", name: "Mikhail Gorbachev", title: "Son Reformist", stats: { eco: -4, auth: 3, diplo: 8, style: -7 }, quote: "Hayat, geç kalanları cezalandırır.", bio: "Sistemi içeriden dönüştürmeye çalışırken kontrolü kaybeden idealist." },
        { id: "mao", name: "Mao Zedong", title: "Büyük Dümenci", stats: { eco: -10, auth: -9, diplo: -6, style: -9 }, quote: "İktidar namlunun ucundadır.", bio: "Sürekli devrim teorisine inanan kitle lideri." },
        { id: "deng", name: "Deng Xiaoping", title: "Pragmatik Modernist", stats: { eco: 2, auth: -8, diplo: 5, style: 10 }, quote: "Kedi fareyi yakalıyorsa rengi önemsizdir.", bio: "İdeolojiyi ekonomiden ayıran kalkınma mimarı." },
        { id: "xi", name: "Xi Jinping", title: "Kızıl İmparator", stats: { eco: -3, auth: -9, diplo: 2, style: 7 }, quote: "Çin Rüyası.", bio: "Parti kontrolünü ve küresel güç iddiasını birleştiren lider." },
        
        // Bölgesel & Diğer
        { id: "ataturk", name: "Mustafa Kemal Atatürk", title: "Ebedi Başkomutan", stats: { eco: -1, auth: 1, diplo: 2, style: -10 }, quote: "Yurtta sulh, cihanda sulh.", bio: "Akıl ve bilimi rehber edinen kurucu devrimci." },
        { id: "erdogan", name: "R. Tayyip Erdoğan", title: "Kitle Lideri", stats: { eco: 1, auth: -6, diplo: -4, style: 8 }, quote: "Dünya 5'ten büyüktür.", bio: "Statükoya meydan okuyan, pragmatik ve güçlü lider." },
        { id: "mandela", name: "Nelson Mandela", title: "Barış Elçisi", stats: { eco: -2, auth: 9, diplo: 6, style: -8 }, quote: "Cesaret korkusuzluk değil, korkuyu yenmektir.", bio: "İntikam yerine affetmeyi seçen birleştirici sembol." },
        { id: "castro", name: "Fidel Castro", title: "Komandan", stats: { eco: -9, auth: -8, diplo: -6, style: -7 }, quote: "Tarih beni beraat ettirecektir.", bio: "Emperyalizme kafa tutan direniş sembolü." },
        { id: "chavez", name: "Hugo Chávez", title: "Halkçı Lider", stats: { eco: -8, auth: -6, diplo: -7, style: 7 }, quote: "Burada kükürt kokusu var.", bio: "Petrol gelirlerini halka dağıtan popülist solcu." },
        { id: "lula", name: "Lula da Silva", title: "Sendikacı Başkan", stats: { eco: -4, auth: 6, diplo: 4, style: 5 }, quote: "Brezilya geri döndü.", bio: "Yoksullukla mücadele eden pragmatik solcu." },
        { id: "modi", name: "Narendra Modi", title: "Teknolojik Milliyetçi", stats: { eco: 3, auth: -5, diplo: 1, style: 6 }, quote: "Make in India.", bio: "Milliyetçi popülizm ile kalkınmayı birleştiren lider." },
        { id: "abe", name: "Shinzo Abe", title: "Vizyoner Reformist", stats: { eco: 5, auth: 2, diplo: 5, style: 4 }, quote: "Japonya geri döndü.", bio: "Ekonomik canlanma ve aktif dış politika mimarı." },
        { id: "mbs", name: "Muhammed bin Selman", title: "Hırslı Prens", stats: { eco: 4, auth: -9, diplo: -2, style: 8 }, quote: "Vision 2030.", bio: "Sosyal reformları otoriter bir yapıda gerçekleştiren lider." },
        { id: "machiavelli", name: "Niccolò Machiavelli", title: "Fahri Realist", stats: { eco: 0, auth: -6, diplo: 0, style: 10 }, quote: "Amaca giden her yol mübahtır.", bio: "Siyasetin ahlaktan bağımsız bir güç oyunu olduğunu savunan düşünür." }
    ];

    // --- 2. VERİTABANI: 30 SORU ---
    const questions = [
        // Ekonomi ve Devlet (Sağ/Sol)
        { text: "Piyasa ekonomisine yaklaşımınız?", options: [
            { text: "Görünmez el her şeyi çözer, tam serbestlik.", effect: { eco: 5, auth: 0, diplo: 0, style: 0 } },
            { text: "Devlet hakem olmalı, oyuncu değil.", effect: { eco: 2, auth: 0, diplo: 0, style: 0 } },
            { text: "Stratejik sektörler devlet kontrolünde olmalı.", effect: { eco: -3, auth: 1, diplo: 0, style: 0 } },
            { text: "Üretim araçları kamulaştırılmalıdır.", effect: { eco: -6, auth: 2, diplo: 0, style: -1 } }
        ]},
        { text: "Ekonomik kriz anında devlet ne yapmalı?", options: [
            { text: "Kemer sıkma ve bütçe disiplini.", effect: { eco: 4, auth: 0, diplo: 0, style: 2 } },
            { text: "Piyasaya teşvik ve para pompalamak.", effect: { eco: -2, auth: 0, diplo: 0, style: 0 } },
            { text: "Zenginlerden alınan vergiyi artırmak.", effect: { eco: -4, auth: 0, diplo: 0, style: -1 } },
            { text: "Batan şirketleri iflasa terk etmek.", effect: { eco: 5, auth: 0, diplo: 0, style: 1 } }
        ]},
        { text: "Gelir dağılımı adaletsizliği?", options: [
            { text: "Rekabetin doğal sonucudur, müdahale edilmemeli.", effect: { eco: 5, auth: 0, diplo: 0, style: 1 } },
            { text: "Sosyal yardımlarla dengelenmeli.", effect: { eco: -2, auth: 0, diplo: 0, style: 0 } },
            { text: "Sistemin bozukluğudur, servet transferi şart.", effect: { eco: -5, auth: 0, diplo: 0, style: -2 } },
            { text: "Her koyun kendi bacağından asılır.", effect: { eco: 3, auth: 0, diplo: 0, style: 2 } }
        ]},
        { text: "Sendikalar?", options: [
            { text: "Büyümeyi yavaşlatan engellerdir.", effect: { eco: 4, auth: -2, diplo: 0, style: 0 } },
            { text: "Demokrasinin gereğidir.", effect: { eco: -1, auth: 2, diplo: 0, style: 0 } },
            { text: "Sınıf mücadelesinin kalesidir.", effect: { eco: -5, auth: 0, diplo: 0, style: -2 } },
            { text: "Devlet kontrolünde olmalıdır.", effect: { eco: 1, auth: -1, diplo: 0, style: 0 } }
        ]},
        { text: "Özelleştirme?", options: [
            { text: "Devlet küçülmeli, her şey satılmalı.", effect: { eco: 6, auth: 0, diplo: 0, style: 0 } },
            { text: "Sadece zarar eden KİT'ler satılmalı.", effect: { eco: 2, auth: 0, diplo: 0, style: 1 } },
            { text: "Stratejik kurumlar asla satılamaz.", effect: { eco: -3, auth: 1, diplo: 0, style: 0 } },
            { text: "Yeniden devletleştirme yapılmalı.", effect: { eco: -7, auth: 2, diplo: 0, style: 0 } }
        ]},
        { text: "Merkez Bankası bağımsızlığı?", options: [
            { text: "Tam bağımsız olmalı, siyaset karışmamalı.", effect: { eco: 4, auth: 1, diplo: 0, style: 0 } },
            { text: "Hükümetle uyumlu çalışmalı.", effect: { eco: -1, auth: -2, diplo: 0, style: 1 } },
            { text: "Faiz kararlarını siyasi irade vermeli.", effect: { eco: -3, auth: -4, diplo: 0, style: 2 } },
            { text: "Ekonomi yönetiminde çok başlılık olmamalı.", effect: { eco: 0, auth: -3, diplo: 0, style: 1 } }
        ]},
        { text: "Vergi politikası?", options: [
            { text: "Düşük vergi yatırımı teşvik eder.", effect: { eco: 5, auth: 0, diplo: 0, style: 0 } },
            { text: "Çok kazanandan çok alınmalı.", effect: { eco: -3, auth: 0, diplo: 0, style: 0 } },
            { text: "Tabana yayılmalı.", effect: { eco: 1, auth: 0, diplo: 0, style: 1 } },
            { text: "Dolaylı vergiler (KDV vb.) artırılmalı.", effect: { eco: 0, auth: -1, diplo: 0, style: 0 } }
        ]},

        // Otorite ve Yönetim (Demokratik/Otoriter)
        { text: "Güçler ayrılığı?", options: [
            { text: "Demokrasinin teminatıdır, taviz verilemez.", effect: { eco: 0, auth: 6, diplo: 0, style: -1 } },
            { text: "Yürütme hızlı karar alabilmeli.", effect: { eco: 0, auth: -3, diplo: 0, style: 1 } },
            { text: "Liderin iradesi kanunun üzerindedir.", effect: { eco: 0, auth: -8, diplo: 0, style: 0 } },
            { text: "Yargı devletle uyumlu çalışmalı.", effect: { eco: 0, auth: -2, diplo: 0, style: 1 } }
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
        { text: "Siyasi muhalefet?", options: [
            { text: "İktidarı denetleyen hayati güçtür.", effect: { eco: 0, auth: 6, diplo: 0, style: 0 } },
            { text: "Yapıcı olmalı, yıkıcıysa engellenmeli.", effect: { eco: 0, auth: -2, diplo: 0, style: 1 } },
            { text: "Hainlik potansiyeli taşır.", effect: { eco: 0, auth: -7, diplo: 0, style: 0 } },
            { text: "Uzlaşma ve pazarlık aracıdır.", effect: { eco: 0, auth: 2, diplo: 0, style: 2 } }
        ]},
        { text: "Azınlık hakları?", options: [
            { text: "Kültürel zenginliktir, korunmalı.", effect: { eco: 0, auth: 5, diplo: 2, style: -2 } },
            { text: "Üniter devlete tehdittir.", effect: { eco: 0, auth: -4, diplo: -3, style: 1 } },
            { text: "Entegrasyon esastır.", effect: { eco: 0, auth: -1, diplo: 0, style: 1 } },
            { text: "Bireysel haklar yeterlidir.", effect: { eco: 2, auth: 1, diplo: 0, style: 0 } }
        ]},
        { text: "Sosyal medya?", options: [
            { text: "Özgürlük alanıdır, dokunulmamalı.", effect: { eco: 0, auth: 5, diplo: 0, style: 0 } },
            { text: "Dezenformasyon yasası ile denetlenmeli.", effect: { eco: 0, auth: -2, diplo: 0, style: 1 } },
            { text: "Milli güvenlik sorunu olabilir, kapatılabilir.", effect: { eco: 0, auth: -6, diplo: -4, style: 2 } },
            { text: "Platformlar kendi kendini denetlemeli.", effect: { eco: 3, auth: 0, diplo: 0, style: 0 } }
        ]},

        // Diplomasi (Ulusalcı/Küreselci)
        { text: "Uluslararası ilişkiler?", options: [
            { text: "Orman kanunu geçerlidir (Güçlü kazanır).", effect: { eco: 0, auth: 0, diplo: -5, style: 3 } },
            { text: "İşbirliği ve hukuk esastır.", effect: { eco: 0, auth: 0, diplo: 6, style: -2 } },
            { text: "Tam bağımsızlık ve izolasyon.", effect: { eco: 0, auth: 0, diplo: -6, style: 0 } },
            { text: "Karşılıklı bağımlılık savaşı önler.", effect: { eco: 2, auth: 0, diplo: 4, style: 0 } }
        ]},
        { text: "Birleşmiş Milletler?", options: [
            { text: "Kararlarına uyulmalı.", effect: { eco: 0, auth: 0, diplo: 7, style: -1 } },
            { text: "Ulusal çıkarla örtüşürse uyarım.", effect: { eco: 0, auth: 0, diplo: -2, style: 2 } },
            { text: "Güçlülerin tiyatrosudur.", effect: { eco: 0, auth: -2, diplo: -5, style: 1 } },
            { text: "Reforma ihtiyaç var.", effect: { eco: 0, auth: -1, diplo: -1, style: 2 } }
        ]},
        { text: "Sınır güvenliği ve göç?", options: [
            { text: "Sınırlar namustur, duvar örülmeli.", effect: { eco: 0, auth: -2, diplo: -6, style: 1 } },
            { text: "İnsanlık görevi olarak kapılar açılmalı.", effect: { eco: 0, auth: 2, diplo: 5, style: -3 } },
            { text: "Kontrollü ve seçici göç.", effect: { eco: 1, auth: 0, diplo: 1, style: 1 } },
            { text: "Siyasi koz olarak kullanılabilir.", effect: { eco: 0, auth: -4, diplo: -3, style: 4 } }
        ]},
        { text: "Avrupa Birliği / Bölgesel Birlikler?", options: [
            { text: "Tam entegrasyon hedeflenmeli.", effect: { eco: 2, auth: 0, diplo: 8, style: -2 } },
            { text: "Sadece ekonomik işbirliği yeterli.", effect: { eco: 2, auth: 0, diplo: 1, style: 1 } },
            { text: "Egemenliği kısıtlayan yapılardır.", effect: { eco: 0, auth: -1, diplo: -5, style: 1 } },
            { text: "Bize uymaz.", effect: { eco: 0, auth: 0, diplo: -4, style: 0 } }
        ]},
        { text: "Küreselleşme?", options: [
            { text: "Kaçınılmaz ve faydalı.", effect: { eco: 4, auth: 0, diplo: 6, style: 0 } },
            { text: "Yerli üretim korunmalı.", effect: { eco: -3, auth: 1, diplo: -6, style: 0 } },
            { text: "Sadece işimize gelen kısmını almalıyız.", effect: { eco: 0, auth: 0, diplo: -2, style: 2 } },
            { text: "Kültürel yozlaşma sebebidir.", effect: { eco: 0, auth: 1, diplo: -4, style: 0 } }
        ]},
        { text: "Yumuşak Güç (Soft Power)?", options: [
            { text: "Kültür ve sanat en büyük silahtır.", effect: { eco: 1, auth: 0, diplo: 4, style: 0 } },
            { text: "Ordu olmadan bir hiçtir.", effect: { eco: 0, auth: -2, diplo: -3, style: 3 } },
            { text: "Propaganda aracıdır.", effect: { eco: 0, auth: -3, diplo: -1, style: 1 } },
            { text: "Gereksiz masraftır.", effect: { eco: 0, auth: -1, diplo: -2, style: 1 } }
        ]},
        { text: "Silahlanma bütçesi?", options: [
            { text: "Kısıntıya gidilip eğitime aktarılmalı.", effect: { eco: -1, auth: 1, diplo: 2, style: -2 } },
            { text: "Caydırıcılık için artırılmalı.", effect: { eco: 0, auth: -2, diplo: -2, style: 2 } },
            { text: "Yerli savunma sanayii önceliktir.", effect: { eco: 1, auth: -1, diplo: -3, style: 1 } },
            { text: "İttifak standartlarında tutulmalı.", effect: { eco: 0, auth: 0, diplo: 3, style: 0 } }
        ]},

        // Üslup ve Felsefe (İdealist/Realist)
        { text: "Savaş ne zaman meşrudur?", options: [
            { text: "Sadece vatan savunmasında.", effect: { eco: 0, auth: 0, diplo: 2, style: -3 } },
            { text: "Çıkar için bir araçtır.", effect: { eco: 0, auth: -2, diplo: -2, style: 5 } },
            { text: "İnsani müdahale için gereklidir.", effect: { eco: 0, auth: 0, diplo: 3, style: -5 } },
            { text: "Tehdit büyümeden vurulmalı.", effect: { eco: 0, auth: -3, diplo: -3, style: 4 } }
        ]},
        { text: "Makyavelizm?", options: [
            { text: "Sonuç almak her şeyi meşrulaştırır.", effect: { eco: 0, auth: -2, diplo: 0, style: 7 } },
            { text: "Ahlaki duruş kaybedilmemeli.", effect: { eco: 0, auth: 2, diplo: 0, style: -6 } },
            { text: "Bazen kirli eller gereklidir.", effect: { eco: 0, auth: -1, diplo: 0, style: 3 } },
            { text: "Dürüstlük en iyi siyasettir.", effect: { eco: 0, auth: 1, diplo: 0, style: -4 } }
        ]},
        { text: "Toplumsal değişim?", options: [
            { text: "Devrimci ve ani kopuşlar.", effect: { eco: -2, auth: -2, diplo: 0, style: -5 } },
            { text: "Yavaş reformlar.", effect: { eco: 1, auth: 1, diplo: 0, style: 3 } },
            { text: "Gelenekleri koruyarak.", effect: { eco: 0, auth: 0, diplo: 0, style: 2 } },
            { text: "Toplum mühendisliği.", effect: { eco: 0, auth: -4, diplo: 0, style: 0 } }
        ]},
        { text: "Din ve Devlet?", options: [
            { text: "Katı laiklik.", effect: { eco: 0, auth: 1, diplo: 0, style: -2 } },
            { text: "Devlet inançlara eşit mesafede olmalı.", effect: { eco: 0, auth: 3, diplo: 0, style: 0 } },
            { text: "Dini değerler rehber olmalı.", effect: { eco: 0, auth: -2, diplo: 0, style: 2 } },
            { text: "Din, toplumsal çimento aracıdır.", effect: { eco: 0, auth: -1, diplo: 0, style: 3 } }
        ]},
        { text: "Tarihsel miras?", options: [
            { text: "Geçmişle yüzleşilmeli.", effect: { eco: 0, auth: 2, diplo: 2, style: -3 } },
            { text: "Şanlı tarihimizle gurur duymalıyız.", effect: { eco: 0, auth: -1, diplo: -2, style: 1 } },
            { text: "Eski etki alanımıza dönmeliyiz.", effect: { eco: 0, auth: -2, diplo: -4, style: 2 } },
            { text: "Geleceğe bakmalı.", effect: { eco: 0, auth: 0, diplo: 1, style: 3 } }
        ]},
        { text: "İklim değişikliği?", options: [
            { text: "En büyük tehdit, hemen eylem.", effect: { eco: -3, auth: 0, diplo: 5, style: -2 } },
            { text: "Ekonomiyi bozmadan önlem.", effect: { eco: 2, auth: 0, diplo: 0, style: 2 } },
            { text: "Kalkınmamızı engelleme oyunu.", effect: { eco: -1, auth: 0, diplo: -4, style: 3 } },
            { text: "Teknoloji çözer.", effect: { eco: 1, auth: 0, diplo: 0, style: 1 } }
        ]},
        { text: "Nükleer enerji?", options: [
            { text: "Bağımsızlık için şart.", effect: { eco: 1, auth: -1, diplo: -1, style: 2 } },
            { text: "Tehlikeli, vazgeçilmeli.", effect: { eco: -1, auth: 1, diplo: 1, style: -2 } },
            { text: "Geçiş sürecinde kullanılmalı.", effect: { eco: 0, auth: 0, diplo: 0, style: 1 } },
            { text: "Denetim şart.", effect: { eco: 0, auth: 0, diplo: 3, style: 0 } }
        ]},
        { text: "İdeal lider tipi?", options: [
            { text: "Teknokrat ve problem çözücü.", effect: { eco: 2, auth: 0, diplo: 2, style: 3 } },
            { text: "Halkın içinden gelen.", effect: { eco: -1, auth: 0, diplo: 0, style: 0 } },
            { text: "Masaya yumruğunu vuran.", effect: { eco: 0, auth: -5, diplo: -2, style: 2 } },
            { text: "Filozof ve vizyoner.", effect: { eco: 0, auth: 3, diplo: 1, style: -3 } }
        ]}
    ];

    // --- 3. STATE YÖNETİMİ ---
    let currentIndex = 0;
    let userScores = { eco: 0, auth: 0, diplo: 0, style: 0 };

    // --- 4. DOM ELEMANLARI ---
    const screens = {
        start: document.getElementById('screen-start'),
        quiz: document.getElementById('screen-quiz'),
        loading: document.getElementById('screen-loading'),
        result: document.getElementById('screen-result')
    };

    const els = {
        btnStart: document.getElementById('btn-start'),
        btnRestart: document.getElementById('btn-restart'),
        questionText: document.getElementById('txt-question'),
        optionsContainer: document.getElementById('container-options'),
        progressFill: document.getElementById('progress-fill'),
        quizCounter: document.getElementById('quiz-counter'),
        loadingText: document.getElementById('txt-loading')
    };

    // --- 5. OLAY DİNLEYİCİLERİ ---
    if(els.btnStart) {
        els.btnStart.addEventListener('click', startQuiz);
    }
    
    if(els.btnRestart) {
        els.btnRestart.addEventListener('click', restartQuiz);
    }

    // --- 6. FONKSİYONLAR ---

    function showScreen(name) {
        // Tüm ekranları gizle
        Object.values(screens).forEach(s => s.classList.remove('active'));
        // İstenen ekranı göster
        screens[name].classList.add('active');
    }

    function startQuiz() {
        console.log("Quiz Başlatıldı");
        currentIndex = 0;
        userScores = { eco: 0, auth: 0, diplo: 0, style: 0 };
        showScreen('quiz');
        loadQuestion();
    }

    function restartQuiz() {
        showScreen('start');
    }

    function updateProgress() {
        // İlerleme mantığı: (Tamamlanan / Toplam) * 100
        let percent = (currentIndex / questions.length) * 100;
        els.progressFill.style.width = `${percent}%`;
        els.quizCounter.innerText = `Soru ${currentIndex + 1} / ${questions.length}`;
    }

    function loadQuestion() {
        // Son soruya geldik mi?
        if (currentIndex >= questions.length) {
            finishQuiz();
            return;
        }

        updateProgress();
        
        const q = questions[currentIndex];
        els.questionText.innerText = q.text;
        els.optionsContainer.innerHTML = '';

        // Şıkları karıştır (Bias önleme)
        let shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt.text;
            
            btn.onclick = () => {
                // Görsel feedback
                btn.style.borderColor = 'var(--accent)';
                btn.style.backgroundColor = '#fffbeb';
                
                // Kısa gecikme ile geçiş
                setTimeout(() => handleAnswer(opt.effect), 150);
            };
            
            els.optionsContainer.appendChild(btn);
        });
    }

    function handleAnswer(effect) {
        // Puanları topla
        userScores.eco += effect.eco;
        userScores.auth += effect.auth;
        userScores.diplo += effect.diplo;
        userScores.style += effect.style;

        currentIndex++;
        loadQuestion();
    }

    function finishQuiz() {
        els.progressFill.style.width = '100%';
        showScreen('loading');

        // Yükleme animasyonu mesajları
        const messages = [
            "Jeopolitik veriler taranıyor...",
            "Ekonomik doktrinler analiz ediliyor...",
            "Tarihsel lider profilleri karşılaştırılıyor..."
        ];
        
        let i = 0;
        const interval = setInterval(() => {
            els.loadingText.innerText = messages[i % messages.length];
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
        
        // Normalizasyon: 
        // 30 soru var. Max skor ~90 olabilir.
        // Lider skorları -10 ile 10 arasında.
        // Kullanıcı skorunu ~8-9'a bölerek normalize etmeliyiz.
        const scaleFactor = 9;

        leaders.forEach(leader => {
            const diffEco = (userScores.eco / scaleFactor) - leader.stats.eco;
            const diffAuth = (userScores.auth / scaleFactor) - leader.stats.auth;
            const diffDiplo = (userScores.diplo / scaleFactor) - leader.stats.diplo;
            const diffStyle = (userScores.style / scaleFactor) - leader.stats.style;

            // Euclidean Distance Formülü
            const distance = Math.sqrt(
                Math.pow(diffEco, 2) + 
                Math.pow(diffAuth, 2) + 
                Math.pow(diffDiplo, 2) + 
                Math.pow(diffStyle, 2)
            );

            if (distance < minDiff) {
                minDiff = distance;
                bestMatch = leader;
            }
        });

        displayResult(bestMatch, minDiff);
    }

    function displayResult(leader, diff) {
        showScreen('result');

        // Eşleşme Oranı (%50 - %99 arası bir değer üret)
        let matchPercent = Math.max(50, Math.round(100 - (diff * 5)));
        if (matchPercent > 99) matchPercent = 99;

        document.getElementById('val-match').innerText = matchPercent;
        document.getElementById('val-leader-name').innerText = leader.name;
        document.getElementById('val-leader-title').innerText = leader.title;
        document.getElementById('val-leader-quote').innerText = leader.quote;
        document.getElementById('val-leader-bio').innerText = leader.bio;

        // Barları Ayarla
        // Liderin stats değeri: -10 (Sol) ... 10 (Sağ)
        // CSS width: %0 ... %100
        // -10 -> 0%, 0 -> 50%, 10 -> 100%
        const setBar = (id, val) => {
            const bar = document.getElementById(id);
            const percent = ((val + 10) / 20) * 100;
            
            setTimeout(() => {
                bar.style.width = `${percent}%`;
                
                // Renk değişimi
                if (val < -2) bar.style.background = 'var(--c-red)';
                else if (val > 2) bar.style.background = 'var(--c-green)';
                else bar.style.background = 'var(--c-blue)'; // Merkez
            }, 300);
        };

        setBar('bar-eco', leader.stats.eco);
        setBar('bar-auth', leader.stats.auth);
        setBar('bar-diplo', leader.stats.diplo);
        setBar('bar-style', leader.stats.style);
    }
});
