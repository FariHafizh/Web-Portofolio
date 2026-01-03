# Web Portofolio

Template website portofolio modern berbasis React + Vite.

Live Demo: (https://web-portofolio-sage-omega.vercel.app/)

## Cara Menjalankan
1. Buka terminal
2. Ketik `npm install` untuk menginstall dependencies
3. Ketik `npm run dev` untuk menjalankan di browser

## Cara Mengubah Isi 
- Ubah teks (judul, bio, label tombol, dll): `src/content.jsx`
- Ubah data (experience, projects, tech stack, certificates, contact): `src/data.jsx`
- Gambar ada di folder: `public/assets/`

Catatan: file `src/legacyDom.js` mengatur slider & tab (jangan ubah ID/class HTML yang sudah ada).

Untuk panduan lebih detail, lihat `CUSTOMIZATION_GUIDE.md`.

## Checklist Kustomisasi Cepat 
- Ganti judul website: `src/content.jsx` → `content.site.title`
- Ganti nama & bio: `src/content.jsx` → `content.home.*`
- Ganti tombol di section Home: `src/data.jsx` → `data.homeButtons`
- Ganti pengalaman: `src/data.jsx` → `data.experiences`
- Ganti project: `src/data.jsx` → `data.projects`
- Ganti daftar skill/stack: `src/data.jsx` → `data.techStack`
- Ganti certificates + deskripsi: `src/data.jsx` → `data.certificates`
- Ganti kontak: `src/data.jsx` → `data.contactItems`
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
- /src/content.jsx: Teks/label website
- /src/data.jsx: Data/list (skills, pengalaman, dll)
- /public/assets: Lokasi gambar