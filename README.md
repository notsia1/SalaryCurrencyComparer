# MaaşRotası

Meslek bazlı, döviz karşılaştırmalı maaş hesaplayıcı. Türkiye'deki maaşını
seçtiğin ülkedeki aynı meslek ortalamasıyla kur üzerinden karşılaştırır.

## Dosya yapısı

- `index.html` — sayfa iskeleti
- `style.css` — tüm görsel stil
- `data.js` — maaş veri seti (TAHMİNİ — yayınlamadan önce teyit et)
- `script.js` — hesaplama mantığı, animasyonlar, grafik

## Yerelde çalıştırma

```bash
npm install
npm start
```

Tarayıcıda otomatik açılır (varsayılan `localhost:5500`). Dosyalarda
değişiklik yaptıkça sayfa kendini yeniler.

Node kurulu değilse: index.html dosyasına VS Code'da sağ tık →
"Open with Live Server" (Live Server eklentisi kurulu olmalı) — npm'e
hiç gerek kalmadan aynı işi görür.

## Yayına alma (deploy)

1. GitHub'a yükle: VS Code → Source Control sekmesi → "Publish to GitHub"
   (repo'yu Public seç)
2. [netlify.com](https://netlify.com) → ücretsiz hesap aç → "Add new site
   → Import from GitHub" → bu repo'yu seç → Deploy
   - Build command: boş bırak (build gerekmiyor, statik site)
   - Publish directory: `/` (kök dizin)
3. Birkaç saniyede canlı bir URL alırsın (`maas-rotasi.netlify.app`).
   Ayarlardan kendi domainini (`maasrotasi.com` vb.) bağlayabilirsin.

Her `git push` yaptığında Netlify otomatik yeniden yayına alır — elle
yükleme gerekmez.

## Veri güncelleme

Maaş rakamlarını değiştirmek için sadece `data.js` dosyasını düzenle,
başka hiçbir dosyaya dokunmana gerek yok.
