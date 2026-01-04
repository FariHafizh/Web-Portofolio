# Web Portofolio

Template website portofolio modern berbasis React + Vite.

Live Demo: (https://web-portofolio-sage-omega.vercel.app/)

## Cara Menjalankan
1. Buka terminal
2. Ketik `npm install` untuk menginstall dependencies
3. Ketik `npm run dev` untuk menjalankan di browser

## Cara Mengubah Isi 
- Ubah teks (judul, bio, label tombol, dll): `src/content.js`
- Ubah data (experience, projects, tech stack, certificates, contact): `src/data.js`
- Gambar ada di folder: `public/assets/`

Catatan: file `src/legacyDom.js` mengatur slider & tab (jangan ubah ID/class HTML yang sudah ada).

Untuk panduan lebih detail, lihat `CUSTOMIZATION_GUIDE.md`.

## Checklist Kustomisasi Cepat 
- Ganti judul website: `src/content.js` → `content.site.title`
- Ganti nama & bio (Home): `src/content.js` → `content.homeData`
- Ganti tombol di section Home: `src/data.js` → `HomeButtons`
- Ganti pengalaman: `src/data.js` → `Experience`
- Ganti project: `src/data.js` → `Project`
- Ganti daftar skill/stack: `src/data.js` → `TechStack`
- Ganti certificates + deskripsi: `src/data.js` → `Certificates`
- Ganti kontak: `src/data.js` → `Contact`
- Ganti foto profil: ganti file di `public/assets/profile_pic/` (atau ubah path di komponen bila diperlukan)

## Deploy (Hosting)
### Vercel
- Build Command: `npm run build`
- Output Directory: `dist`
- File `vercel.json` sudah ada untuk SPA rewrite.

### Netlify
- Build Command: `npm run build`
- Publish Directory: `dist`

### GitHub Pages (Static)
- Jalankan `npm run build`
- Upload isi folder `dist/` ke hosting (atau branch `gh-pages`).

## Troubleshooting
- Blank page setelah deploy: pastikan yang di-upload adalah folder `dist/` (bukan `src/`).
- Slider/tab tidak jalan: jangan ubah `id`/`class` di bagian Portfolio karena dipakai oleh `src/legacyDom.js`.
- Perintah `npm` tidak dikenal: install Node.js LTS dulu, lalu restart terminal.
- Port 5173 sudah dipakai: jalankan `npm run dev -- --port 5174`.

## Requirement
- Disarankan Node.js versi LTS terbaru.

## Struktur Folder
- /src/components: Lokasi komponen edit
- /src/content.js: Teks/label website
- /src/data.js: Data/list (skills, pengalaman, dll)
- /public/assets: Lokasi gambar