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


## Veri güncelleme

Maaş rakamlarını değiştirmek için sadece `data.js` dosyasını düzenle,
başka hiçbir dosyaya dokunmana gerek yok.
