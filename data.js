// ---- VERİ SETİ (tahmini, aylık net TL / yıllık yerel para) ----
// Kaynak: TÜİK, kamu maaş tabloları, BLS, Destatis, ONS, sektör raporları (2026)
// ÖNEMLİ: Bu rakamlar tahminidir — yayınlamadan önce kendi kaynaklarınla teyit et, periyodik güncelle.
const DATA = {
  professions: {
    yazilimci:   { label: "Yazılımcı / Yazılım Mühendisi", tl_monthly: 90000, usa: 130000, germany: 80000, uk: 55000, uae: 85000 },
    hemsire:     { label: "Hemşire", tl_monthly: 84845, usa: 101420, germany: 45000, uk: 34000, uae: 42000 },
    ogretmen:    { label: "Öğretmen", tl_monthly: 80000, usa: 80000, germany: 60000, uk: 38000, uae: 40000 },
    muhasebeci:  { label: "Muhasebeci / Mali Müşavir", tl_monthly: 55000, usa: 112000, germany: 55000, uk: 35000, uae: 45000 },
    makine_muh:  { label: "Makine Mühendisi", tl_monthly: 65000, usa: 95000, germany: 65000, uk: 40000, uae: 55000 },
    avukat:      { label: "Avukat", tl_monthly: 70000, usa: 135000, germany: 70000, uk: 60000, uae: 80000 },
    grafik_tas:  { label: "Grafik Tasarımcı", tl_monthly: 40000, usa: 60000, germany: 45000, uk: 30000, uae: 35000 },
    doktor:      { label: "Doktor", tl_monthly: 120000, usa: 220000, germany: 90000, uk: 65000, uae: 120000 },
  },
  countries: {
    usa:     { label: "ABD", flag: "🇺🇸", currency: "USD" },
    germany: { label: "Almanya", flag: "🇩🇪", currency: "EUR" },
    uk:      { label: "İngiltere", flag: "🇬🇧", currency: "GBP" },
    uae:     { label: "BAE", flag: "🇦🇪", currency: "AED" },
  }
};
