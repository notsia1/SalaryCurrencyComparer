// ---- VERİ SETİ (yıllık, TR için aylık net TL / diğerleri yıllık yerel para) ----
// Kaynak: TÜİK, kamu maaş tabloları, BLS (ABD), Destatis (Almanya), ONS (İngiltere),
// qubit-labs & Swiss Salary Guide 2026 (yazılımcı/hemşire/muhasebeci-İsviçre), sektör raporları.
// NOT: Kanada / Hollanda / İsviçre / Avustralya'da bazı meslekler için birebir kaynak
// bulunamadı — o hücreler ülke ortalaması + meslek oranı yöntemiyle tahmin edilmiştir.
// YAYINLAMADAN ÖNCE TEYİT ET. Periyodik güncelle.
const DATA = {
  professions: {
    yazilimci:   { label: "Yazılımcı / Yazılım Mühendisi", tl_monthly: 90000,
      usa: 130000, germany: 80000, uk: 55000, uae: 85000, canada: 105000, netherlands: 65000, switzerland: 140000, australia: 134000 },
    hemsire:     { label: "Hemşire", tl_monthly: 84845,
      usa: 101420, germany: 45000, uk: 34000, uae: 42000, canada: 80000, netherlands: 48000, switzerland: 85000, australia: 90000 },
    ogretmen:    { label: "Öğretmen", tl_monthly: 80000,
      usa: 80000, germany: 60000, uk: 38000, uae: 40000, canada: 75000, netherlands: 50000, switzerland: 95000, australia: 85000 },
    muhasebeci:  { label: "Muhasebeci / Mali Müşavir", tl_monthly: 55000,
      usa: 112000, germany: 55000, uk: 35000, uae: 45000, canada: 68000, netherlands: 55000, switzerland: 97000, australia: 80000 },
    makine_muh:  { label: "Makine Mühendisi", tl_monthly: 65000,
      usa: 95000, germany: 65000, uk: 40000, uae: 55000, canada: 85000, netherlands: 58000, switzerland: 95000, australia: 95000 },
    avukat:      { label: "Avukat", tl_monthly: 70000,
      usa: 135000, germany: 70000, uk: 60000, uae: 80000, canada: 110000, netherlands: 75000, switzerland: 130000, australia: 130000 },
    grafik_tas:  { label: "Grafik Tasarımcı", tl_monthly: 40000,
      usa: 60000, germany: 45000, uk: 30000, uae: 35000, canada: 52000, netherlands: 42000, switzerland: 70000, australia: 65000 },
    doktor:      { label: "Doktor", tl_monthly: 120000,
      usa: 220000, germany: 90000, uk: 65000, uae: 120000, canada: 220000, netherlands: 110000, switzerland: 200000, australia: 220000 },
  },
  countries: {
    usa:         { label: "ABD", flag: "🇺🇸", currency: "USD" },
    germany:     { label: "Almanya", flag: "🇩🇪", currency: "EUR" },
    uk:          { label: "İngiltere", flag: "🇬🇧", currency: "GBP" },
    uae:         { label: "BAE", flag: "🇦🇪", currency: "AED" },
    canada:      { label: "Kanada", flag: "🇨🇦", currency: "CAD" },
    netherlands: { label: "Hollanda", flag: "🇳🇱", currency: "EUR" },
    switzerland: { label: "İsviçre", flag: "🇨🇭", currency: "CHF" },
    australia:   { label: "Avustralya", flag: "🇦🇺", currency: "AUD" },
  }
};

// ---- Basit TR/EN metin sözlüğü ----
const I18N = {
  tr: {
    eyebrow: "Canlı kur · TRY bazlı",
    h1: "Mesleğim Yurt Dışında<br>Ne Kadar Ediyor?",
    sub: "Türkiye'deki maaşını seç, hedef ülkeyi seç — aynı meslekte oradaki ortalamayla kur üzerinden karşılaştır.",
    labelProf: "Mesleğin",
    labelCountry: "Karşılaştırılacak ülke",
    labelSalary: "Senin net aylık maaşın (TL) — boş bırakırsan Türkiye ortalaması kullanılır",
    routeFrom: "TÜRKİYE",
    ad1: "Reklam Alanı · 728×90",
    ad2: "Reklam Alanı · 300×250",
    footer: "RAKAMLAR TÜİK, KAMU MAAŞ TABLOLARI VE ULUSLARARASI SEKTÖR RAPORLARINDAN DERLENEN YAKLAŞIK ORTALAMALARDIR. KİŞİSEL FİNANSAL KARAR İÇİN TEK BAŞINA KULLANILMAMALIDIR. KUR VERİSİ CANLI ÇEKİLİR.",
  },
  en: {
    eyebrow: "Live rate · TRY based",
    h1: "What's My Job Worth<br>Abroad?",
    sub: "Pick your profession and a target country — compare Turkey's average pay to that country's, converted at today's rate.",
    labelProf: "Your profession",
    labelCountry: "Compare against",
    labelSalary: "Your net monthly salary (TL) — leave blank to use Turkey's average",
    routeFrom: "TURKEY",
    ad1: "Ad Space · 728×90",
    ad2: "Ad Space · 300×250",
    footer: "FIGURES ARE APPROXIMATE AVERAGES COMPILED FROM PUBLIC STATISTICS AGENCIES AND INDUSTRY REPORTS. NOT FINANCIAL ADVICE. EXCHANGE RATE IS LIVE.",
  }
};
