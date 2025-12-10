/*
    Marmara GDS - Küresel Liderlik Testi
    Geliştirici: Marmara GDS Tech Team
*/

// --- 1. VERİ YAPILARI (DATA STRUCTURES) ---

// Eksenler: 
// eco: -10 (Komünist/Devletçi) <---> +10 (Liberal/Serbest Piyasa)
// auth: -10 (Otoriter/Tek Adam) <---> +10 (Demokratik/Çoğulcu)
// diplo: -10 (İzolasyonist/Ulusalcı) <---> +10 (Küreselci/Enternasyonalist)
// style: -10 (İdealist/Devrimci) <---> +10 (Pragmatist/Realpolitik)

const leaders = [
    // ABD Liderleri
    { id: "wash", name: "George Washington", title: "ABD Kurucu Başkanı", stats: { eco: 5, auth: 2, diplo: -8, style: 5 }, quote: "Özgürlük, kök saldığında hızlı büyüyen bir bitkidir.", bio: "Tarafsızlık ilkesini benimsedin. Kurumların inşasına ve uzun vadeli istikrara önem veriyorsun. Gösterişten uzak, birleştirici bir lidersin." },
    { id: "linc", name: "Abraham Lincoln", title: "ABD 16. Başkanı", stats: { eco: 2, auth: 5, diplo: -2, style: -5 }, quote: "Halkın, halk tarafından, halk için yönetimi yeryüzünden silinmeyecektir.", bio: "Büyük krizlerin adamısın. Bölünmüş bir yapıyı bir arada tutmak için gereken ahlaki duruşa ve kararlılığa sahipsin. İdealistsin." },
    { id: "jeff", name: "Thomas Jefferson", title: "ABD 3. Başkanı", stats: { eco: 6, auth: 8, diplo: -5, style: -2 }, quote: "Bilgi, insanın tiranlığa karşı en güçlü silahıdır.", bio: "Bireysel özgürlükler ve tarım toplumu ideali senin için önemli. Merkezi güce şüpheyle yaklaşıyorsun." },
    { id: "troos", name: "Theodore Roosevelt", title: "ABD 26. Başkanı", stats: { eco: 0, auth: -2, diplo: 8, style: 8 }, quote: "Yumuşak konuş ama elinde büyük bir sopa taşı.", bio: "Enerjik ve emperyal vizyon sahibisin. 'Big Stick' diplomasisi ile gücü göstermekten çekinmiyorsun." },
    { id: "fdr", name: "Franklin D. Roosevelt", title: "ABD 32. Başkanı", stats: { eco: -4, auth: 1, diplo: 7, style: 6 }, quote: "Korkmamız gereken tek şey korkunun kendisidir.", bio: "Sosyal devlet anlayışın güçlü. Kriz dönemlerinde (Büyük Buhran, II. Dünya Savaşı) devleti aktif bir aktör olarak kullanıyorsun." },
    { id: "jfk", name: "John F. Kennedy", title: "ABD 35. Başkanı", stats: { eco: 3, auth: 6, diplo: 6, style: -3 }, quote: "Ülkenin senin için ne yapacağını sorma, senin ülken için ne yapacağını sor.", bio: "Karizmatik, vizyoner ve soğukkanlı. Kriz yönetiminde (Küba Füze Krizi) risk almayı biliyorsun ama diyaloğa açıksın." },
    { id: "lbj", name: "Lyndon B. Johnson", title: "ABD 36. Başkanı", stats: { eco: -3, auth: -1, diplo: 5, style: 9 }, quote: "Barış, şüphe ile değil, güven ile inşa edilir.", bio: "İç politikada devrimci, dış politikada sert. Yasama süreçlerini ve bürokrasiyi yönetmekte ustasın." },
    { id: "nixon", name: "Richard Nixon", title: "ABD 37. Başkanı", stats: { eco: 4, auth: -5, diplo: 9, style: 10 }, quote: "Kaybettiğinde değil, vazgeçtiğinde yenilirsin.", bio: "Tam bir Realpolitik ustasısın. İdeolojileri bir kenara bırakıp düşmanla (Çin) bile masaya oturabilirsin. Pragmatizm senin dinin." },
    { id: "clinton", name: "Bill Clinton", title: "ABD 42. Başkanı", stats: { eco: 5, auth: 7, diplo: 8, style: 7 }, quote: "Ekonomi, aptal!", bio: "Karizmatik, ikna kabiliyeti yüksek ve merkezci. Küreselleşmenin altın çağını temsil ediyorsun." },
    { id: "bush1", name: "George H. W. Bush", title: "ABD 41. Başkanı", stats: { eco: 6, auth: 4, diplo: 7, style: 5 }, quote: "Bu saldırganlık ayakta kalamaz.", bio: "Tecrübeli bir diplomatsın. Yeni Dünya Düzeni'ni kurarken temkinli ve koalisyon odaklı hareket ediyorsun." },
    { id: "bush2", name: "George W. Bush", title: "ABD 43. Başkanı", stats: { eco: 7, auth: -3, diplo: 6, style: -6 }, quote: "Ya bizdensiniz ya da teröristlerden.", bio: "Neocon görüşlere yakınsın. Önleyici savaş doktrini ve idealist demokrasi ihracı senin yöntemin." },
    { id: "obama", name: "Barack Obama", title: "ABD 44. Başkanı", stats: { eco: -2, auth: 7, diplo: 6, style: 4 }, quote: "Evet, yapabiliriz.", bio: "Retorik gücün yüksek. Çok taraflı diplomasiyi ve yumuşak gücü (soft power) tercih ediyorsun." },
    { id: "trump", name: "Donald Trump", title: "ABD 45. Başkanı", stats: { eco: 6, auth: -6, diplo: -9, style: 8 }, quote: "Önce Amerika!", bio: "Kurleşik düzene (establishment) karşısın. Transaksiyonel diplomasi, korumacılık ve popülizm senin silahların." },
    { id: "biden", name: "Joe Biden", title: "ABD 46. Başkanı", stats: { eco: -3, auth: 6, diplo: 7, style: 5 }, quote: "Amerika geri döndü.", bio: "Geleneksel ittifaklara ve kurumsal diplomasiye inanıyorsun. Tecrübeli ama statükocusun." },
    { id: "truman", name: "Harry S. Truman", title: "ABD 33. Başkanı", stats: { eco: 2, auth: 3, diplo: 8, style: 6 }, quote: "Sorumluluk burada biter (The buck stops here).", bio: "Zor kararların adamısın. Çevreleme politikası (containment) ile küresel bir düzen kurdun." },
    { id: "ike", name: "Dwight D. Eisenhower", title: "ABD 34. Başkanı", stats: { eco: 4, auth: 4, diplo: 5, style: 6 }, quote: "Savaşın gözü dönmüşlüğünü sadece askerler bilir.", bio: "Askeri-Endüstriyel komplekse karşı uyanıksın. Stratejik sabır ve altyapı yatırımları senin tarzın." },

    // Sovyet/Rus Liderler
    { id: "stalin", name: "Josef Stalin", title: "SSCB Lideri", stats: { eco: -10, auth: -10, diplo: -4, style: 9 }, quote: "Ölüm bütün sorunları çözer. İnsan yoksa sorun da yoktur.", bio: "Demir yumruk. Sanayileşme ve merkezi kontrol uğruna her türlü bedeli ödetmeye hazırsın. Machiavellist'sin." },
    { id: "gorbachev", name: "Mikhail Gorbachev", title: "SSCB Son Lideri", stats: { eco: -4, auth: 3, diplo: 8, style: -7 }, quote: "Barış, birliğin değil, çeşitliliğin bir sonucudur.", bio: "Reformist (Glasnost/Perestroika). Sistemi içeriden dönüştürmeye çalıştın ama ipin ucunu kaçırdın. İdealistsin." },
    { id: "yeltsin", name: "Boris Yeltsin", title: "Rusya Fed. İlk Başkanı", stats: { eco: 4, auth: -2, diplo: 4, style: 2 }, quote: "Özgürlük bedava değildir.", bio: "Kaotik geçiş döneminin liderisin. Eski sistemi yıkarken yerine yenisini koymakta zorlandın." },
    { id: "putin", name: "Vladimir Putin", title: "Rusya Devlet Başkanı", stats: { eco: 0, auth: -8, diplo: -6, style: 9 }, quote: "SSCB'nin çöküşü yüzyılın en büyük jeopolitik felaketidir.", bio: "Devletçi, revizyonist ve stratejist. Gücü merkezde topluyor ve eski imparatorluk nüfuzunu geri istiyorsun." },

    // Çin Liderleri
    { id: "sun", name: "Sun Yat-sen", title: "Modern Çin'in Babası", stats: { eco: 0, auth: 5, diplo: 2, style: -8 }, quote: "Devrim henüz başarılmadı.", bio: "Milliyetçilik, Demokrasi ve Halkın Refahı (Üç İlke). Modernleşme yanlısı bir entelektüelsin." },
    { id: "mao", name: "Mao Zedong", title: "Çin Halk Cum. Kurucusu", stats: { eco: -10, auth: -9, diplo: -7, style: -9 }, quote: "İktidar namlunun ucundadır.", bio: "Radikal devrimci. Sürekli devrim teorisine inanıyor, kitleleri mobilize ederek toplumu dönüştürüyorsun." },
    { id: "deng", name: "Deng Xiaoping", title: "Çin Lideri", stats: { eco: 3, auth: -7, diplo: 5, style: 10 }, quote: "Farenin rengi önemli değil, kediyi yakalıyorsa iyi kedi.", bio: "Büyük pragmatist. İdeolojiyi ekonomiden ayırdın. 'Saklan ve bekle' stratejisiyle süper güç temelini attın." },
    { id: "jiang", name: "Jiang Zemin", title: "Çin Lideri", stats: { eco: 5, auth: -6, diplo: 6, style: 5 }, quote: "Zamanla ilerlemek.", bio: "Teknokrat. Ekonomik büyümeyi ve Dünya Ticaret Örgütü entegrasyonunu yönettin." },
    { id: "xi", name: "Xi Jinping", title: "Çin Devlet Başkanı", stats: { eco: -2, auth: -9, diplo: 2, style: 7 }, quote: "Çin Rüyası.", bio: "Otoriter modernizasyon. Partinin mutlak hakimiyetine ve küresel bir güç olmaya odaklısın (Kuşak ve Yol)." },

    // Avrupa Liderleri
    { id: "churchill", name: "Winston Churchill", title: "Birleşik Krallık Başbakanı", stats: { eco: 3, auth: 1, diplo: 4, style: 8 }, quote: "Asla, asla, asla vazgeçmeyin.", bio: "İnatçı, emperyalist ama demokrasi aşığı. En karanlık saatlerde bile direnci örgütleyen bir lidersin." },
    { id: "degaulle", name: "Charles de Gaulle", title: "Fransa Cumhurbaşkanı", stats: { eco: 0, auth: -3, diplo: -5, style: 6 }, quote: "Fransa, Fransa olmadan yapamaz.", bio: "Bağımsız dış politika ve ulusal onur senin için her şey. NATO'ya kafa tutabilecek kadar egemenliğe düşkünsün." },
    { id: "mitterrand", name: "François Mitterrand", title: "Fransa Cumhurbaşkanı", stats: { eco: -5, auth: 4, diplo: 7, style: 3 }, quote: "Politika, sembollerin yönetimidir.", bio: "Entelektüel sosyalist. Avrupa entegrasyonunun (AB) mimarlarından birisin." },
    { id: "macron", name: "Emmanuel Macron", title: "Fransa Cumhurbaşkanı", stats: { eco: 4, auth: 3, diplo: 8, style: 4 }, quote: "Avrupa'nın stratejik özerkliğe ihtiyacı var.", bio: "Liberal, Avrupa yanlısı ve reformist. Geleneksel sağ-sol ayrımının ötesindesin." },
    { id: "zelensky", name: "Volodimir Zelenski", title: "Ukrayna Devlet Başkanı", stats: { eco: 2, auth: 5, diplo: 9, style: -4 }, quote: "Bana araç lazım, taksi değil.", bio: "İletişim dehası. Savaş zamanı liderliğinle, medya gücünü kullanarak dünyayı mobilize ettin." },

    // Türkiye
    { id: "ataturk", name: "Mustafa Kemal Atatürk", title: "Türkiye Cum. Kurucusu", stats: { eco: 0, auth: -1, diplo: 1, style: -10 }, quote: "Yurtta sulh, cihanda sulh.", bio: "Vizyoner devrimci. Akıl ve bilimi rehber edinen, ulus-devlet inşasında radikal reformlar yapan eşsiz bir lider." },
    { id: "erdogan", name: "Recep Tayyip Erdoğan", title: "Türkiye Cumhurbaşkanı", stats: { eco: 2, auth: -5, diplo: -3, style: 8 }, quote: "Dünya 5'ten büyüktür.", bio: "Karizmatik ve pragmatik. Statükoya meydan okuyan, bölgesel güç iddiası taşıyan ve kitleleri konsolide eden bir tarzın var." },

    // Diğer Dünya Liderleri
    { id: "castro", name: "Fidel Castro", title: "Küba Lideri", stats: { eco: -9, auth: -8, diplo: -6, style: -8 }, quote: "Tarih beni beraat ettirecektir.", bio: "Anti-emperyalist ikon. Küçük bir adadan dünyaya kafa tutan direniş sembolü." },
    { id: "mandela", name: "Nelson Mandela", title: "G. Afrika Devlet Başkanı", stats: { eco: -3, auth: 9, diplo: 5, style: -9 }, quote: "Cesaret korkusuzluk değil, korkuyu yenmektir.", bio: "Barışçıl direniş ve uzlaşı sembolü. İntikam yerine affetmeyi seçerek bir ulusu birleştirdin." },
    { id: "chavez", name: "Hugo Chávez", title: "Venezuela Lideri", stats: { eco: -8, auth: -6, diplo: -7, style: 7 }, quote: "Burada kükürt kokusu var.", bio: "Popülist sol. Petrol gelirlerini halka dağıtan, anti-ABD söylemiyle Latin Amerika'yı etkileyen bir lider." },
    { id: "lula", name: "Lula da Silva", title: "Brezilya Devlet Başkanı", stats: { eco: -4, auth: 6, diplo: 4, style: 5 }, quote: "Brezilya geri döndü.", bio: "Sendikal kökenli pragmatik solcu. Yoksullukla mücadele ederken piyasaları ürkütmemeye çalışıyorsun." },
    { id: "modi", name: "Narendra Modi", title: "Hindistan Başbakanı", stats: { eco: 3, auth: -4, diplo: 0, style: 6 }, quote: "Make in India.", bio: "Milliyetçi popülizm ile teknolojik kalkınmayı birleştiriyorsun. Çoklu bağlantısızlık politikasını yönetiyorsun." },
    { id: "abe", name: "Shinzo Abe", title: "Japonya Başbakanı", stats: { eco: 5, auth: 2, diplo: 5, style: 4 }, quote: "Abenomics.", bio: "Ekonomik canlanma ve proaktif pasifizm. Japonya'nın savunma kapasitesini artırmaya çalıştın." },
    { id: "mbs", name: "Muhammed bin Selman", title: "Suudi Arabistan Veliaht Prensi", stats: { eco: 4, auth: -9, diplo: -1, style: 8 }, quote: "Vision 2030.", bio: "Hırslı reformist. Ülkeyi petrolden kurtarmaya ve sosyal olarak (kısmen) açmaya çalışırken, siyasi kontrolü sıkı tutuyorsun." }
];

const questions = [
    {
        text: "Ekonomik kriz anında devletin rolü ne olmalıdır?",
        options: [
            { text: "Piyasa kendini düzeltir, müdahale etmemek gerekir.", effect: { eco: 4, auth: 0, diplo: 0, style: 0 } },
            { text: "Devlet dev projelerle istihdam yaratmalı ve piyasayı regüle etmelidir.", effect: { eco: -3, auth: 2, diplo: 0, style: 0 } },
            { text: "Tüm üretim araçları kamulaştırılmalıdır, özel mülkiyet sorundur.", effect: { eco: -8, auth: 4, diplo: 0, style: -2 } },
            { text: "Stratejik sektörler devlet kontrolünde, gerisi serbest olmalıdır.", effect: { eco: 0, auth: 1, diplo: 0, style: 2 } }
        ]
    },
    {
        text: "Uluslararası bir çatışmada tutumun ne olur?",
        options: [
            { text: "Diplomasi ve uluslararası kurumlar (BM, NATO) üzerinden çözüm aranmalı.", effect: { eco: 0, auth: 2, diplo: 5, style: 0 } },
            { text: "Ulusal çıkarım gerektiriyorsa tek taraflı güç kullanmaktan çekinmem.", effect: { eco: 0, auth: -2, diplo: -4, style: 3 } },
            { text: "Ülkemizi ilgilendirmiyorsa karışmamalıyız (İzolasyonizm).", effect: { eco: 0, auth: 0, diplo: -8, style: 0 } },
            { text: "Düşmanımın düşmanı dostumdur, vekil güçler (proxy) kullanırım.", effect: { eco: 0, auth: -1, diplo: -2, style: 5 } }
        ]
    },
    {
        text: "Yönetimde muhalefete yaklaşımın nasıldır?",
        options: [
            { text: "Muhalefet demokrasinin sigortasıdır, özgürce konuşabilmeliler.", effect: { eco: 0, auth: 6, diplo: 0, style: -2 } },
            { text: "İstikrar için güçlü liderlik şarttır, çatlak sesler bastırılmalıdır.", effect: { eco: 0, auth: -6, diplo: 0, style: 3 } },
            { text: "Muhalefet haindir, devrim veya devlet bekası için tasfiye edilmelidir.", effect: { eco: 0, auth: -9, diplo: 0, style: 4 } },
            { text: "Onlarla pazarlık yaparım, siyasette her şey müzakere edilebilir.", effect: { eco: 0, auth: 2, diplo: 0, style: 5 } }
        ]
    },
    {
        text: "Ülkenin geçmişi ve gelenekleri hakkında ne düşünüyorsun?",
        options: [
            { text: "Gelenekler bizi biz yapar, onları korumalıyız (Muhafazakar).", effect: { eco: 0, auth: 0, diplo: -2, style: 4 } },
            { text: "Geçmiş bir yüktür, radikal devrimlerle toplumu modernleştirmeliyiz.", effect: { eco: 0, auth: -2, diplo: 0, style: -8 } },
            { text: "Geçmişten ders almalı ama geleceğe odaklanmalıyız (Reformist).", effect: { eco: 0, auth: 2, diplo: 2, style: 0 } },
            { text: "Eski imparatorluk ihtişamımızı geri getirmeliyiz (Revizyonist).", effect: { eco: 0, auth: -4, diplo: -5, style: 2 } }
        ]
    },
    {
        text: "Realpolitik mi, İdealizm mi?",
        options: [
            { text: "Dünya değerler üzerinden değil, güç dengeleri üzerinden döner.", effect: { eco: 0, auth: -1, diplo: -2, style: 8 } },
            { text: "İnsan hakları ve demokrasiyi yaymak ahlaki görevimizdir.", effect: { eco: 0, auth: 3, diplo: 6, style: -6 } },
            { text: "Önemli olan halkımın refahıdır, ideolojiler karın doyurmaz.", effect: { eco: 3, auth: 0, diplo: 0, style: 6 } },
            { text: "Adil bir dünya düzeni için savaşmalıyız.", effect: { eco: -2, auth: 2, diplo: 3, style: -5 } }
        ]
    },
    {
        text: "Küreselleşme hakkında fikrin?",
        options: [
            { text: "Sınırlar kalkmalı, serbest ticaret zenginlik getirir.", effect: { eco: 6, auth: 2, diplo: 8, style: 0 } },
            { text: "Küreselleşme emperyalizmin yeni adıdır, ulusal sanayiyi korumalıyız.", effect: { eco: -4, auth: -2, diplo: -6, style: 2 } },
            { text: "Sadece işimize gelen kısımlarını almalıyız, kültürel yozlaşmaya hayır.", effect: { eco: 0, auth: -3, diplo: -3, style: 4 } },
            { text: "Kaçınılmaz bir süreç ama kuralları biz koymalıyız.", effect: { eco: 2, auth: 0, diplo: 4, style: 3 } }
        ]
    },
    {
        text: "Bir liderde en önemli özellik nedir?",
        options: [
            { text: "Karizma ve kitleleri sürükleyebilme gücü.", effect: { eco: 0, auth: -2, diplo: 0, style: 2 } },
            { text: "Entelektüel derinlik ve vizyon.", effect: { eco: 0, auth: 2, diplo: 0, style: -4 } },
            { text: "Acımasızlık ve kararlılık.", effect: { eco: 0, auth: -6, diplo: 0, style: 6 } },
            { text: "Uzlaşmacı ve birleştirici olabilme.", effect: { eco: 0, auth: 5, diplo: 0, style: -2 } }
        ]
    },
     {
        text: "Nükleer silahlar ve askeri güç?",
        options: [
            { text: "Caydırıcılık için şarttır, güçlü ordu güçlü devlet demektir.", effect: { eco: 0, auth: -3, diplo: -3, style: 5 } },
            { text: "Silahsızlanma nihai hedef olmalıdır.", effect: { eco: 0, auth: 3, diplo: 5, style: -5 } },
            { text: "Yumuşak güç (kültür, ekonomi) askerden daha etkilidir.", effect: { eco: 2, auth: 2, diplo: 4, style: 0 } },
            { text: "Savaş siyasetin başka araçlarla devamıdır.", effect: { eco: 0, auth: -4, diplo: -2, style: 7 } }
        ]
    }
];

// --- 2. UYGULAMA MANTIĞI (APP LOGIC) ---

let currentQuestionIndex = 0;
let userStats = { eco: 0, auth: 0, diplo: 0, style: 0 };

// DOM Elementleri
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');

// Event Listeners
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    optionsContainer.innerHTML = '';

    // İlerleme çubuğunu güncelle
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    currentQuestion.options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option.text;
        btn.onclick = () => selectOption(option.effect);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(effect) {
    // Puanları topla
    userStats.eco += effect.eco;
    userStats.auth += effect.auth;
    userStats.diplo += effect.diplo;
    userStats.style += effect.style;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Animasyonlu geçiş efekti
        optionsContainer.style.opacity = '0';
        setTimeout(() => {
            loadQuestion();
            optionsContainer.style.opacity = '1';
        }, 300);
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    quizScreen.classList.remove('active');
    loadingScreen.classList.add('active');
    progressBar.style.width = '100%';

    // Yükleme simülasyonu (2 saniye)
    const loadingTexts = [
        "Diplomatik arşivler taranıyor...",
        "Ekonomik doktrinler karşılaştırılıyor...",
        "Tarihsel eşleşmeler yapılıyor..."
    ];
    let textIdx = 0;
    const textInterval = setInterval(() => {
        document.getElementById('loading-text').innerText = loadingTexts[textIdx % 3];
        textIdx++;
    }, 600);

    setTimeout(() => {
        clearInterval(textInterval);
        calculateResult();
    }, 2500);
}

function calculateResult() {
    let closestLeader = null;
    let minDifference = Infinity;

    // Euclidean Distance Algoritması (4 Boyutlu)
    leaders.forEach(leader => {
        const diffEco = userStats.eco - leader.stats.eco;
        const diffAuth = userStats.auth - leader.stats.auth;
        const diffDiplo = userStats.diplo - leader.stats.diplo;
        const diffStyle = userStats.style - leader.stats.style;

        // Farkın karesi (uzaklık)
        const totalDifference = Math.sqrt(
            (diffEco * diffEco) + 
            (diffAuth * diffAuth) + 
            (diffDiplo * diffDiplo) + 
            (diffStyle * diffStyle)
        );

        if (totalDifference < minDifference) {
            minDifference = totalDifference;
            closestLeader = leader;
        }
    });

    displayResult(closestLeader, minDifference);
}

function displayResult(leader, difference) {
    loadingScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Benzerlik Oranı Hesaplama (Basit ters orantı)
    // Maksimum olası fark yaklaşık 40 birimdir.
    let matchPercentage = Math.max(50, Math.round(100 - (difference * 1.5)));
    
    document.getElementById('match-percent').innerText = matchPercentage;
    document.getElementById('leader-name').innerText = leader.name;
    document.getElementById('leader-title').innerText = leader.title;
    document.getElementById('leader-quote').innerText = leader.quote;
    document.getElementById('leader-bio').innerText = leader.bio;

    // Fotoğraf Placeholder (Gerçek projede leader.id ile resim dosya yolu eşleşir)
    // Örn: assets/img/ataturk.jpg
    // Şimdilik dinamik bir renk veya ikon verelim
    const imgContainer = document.getElementById('leader-img-container');
    imgContainer.innerHTML = `<i class="fa-solid fa-user-tie"></i>`; 
    // Eğer resimler olsaydı: imgContainer.style.backgroundImage = `url('img/${leader.id}.jpg')`;

    // İstatistik Barlarını Doldur
    // Değerleri 0-100 arasına normalize et (stat -10 ile 10 arasında)
    // -10 -> %0, +10 -> %100, 0 -> %50
    const normalize = (val) => (val + 10) * 5; 
    
    // Animasyonlu dolum için setTimeout
    setTimeout(() => {
        document.getElementById('stat-auth').style.width = `${normalize(leader.stats.auth)}%`;
        document.getElementById('stat-eco').style.width = `${normalize(leader.stats.eco)}%`;
        document.getElementById('stat-dip').style.width = `${normalize(leader.stats.diplo)}%`;
    }, 100);
}
