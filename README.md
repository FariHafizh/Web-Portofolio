# Web Portfolio

Website portofolio pribadi **Fari Hafizh Nugroho**, dibuat dengan React + Vite.

**Live demo:** https://web-portofolio-sage-omega.vercel.app/

---

## Menjalankan di Komputer Sendiri

Butuh [Node.js](https://nodejs.org/) versi LTS.

```bash
npm install    # sekali saja, untuk memasang dependencies
npm run dev    # jalankan di http://localhost:5173
```

Perintah lain:

| Perintah          | Fungsi                                          |
| ----------------- | ----------------------------------------------- |
| `npm run build`   | Build untuk production ke folder `dist/`        |
| `npm run preview` | Melihat hasil build secara lokal                |
| `npm run lint`    | Memeriksa kualitas kode dengan ESLint           |

---

## Cara Mengubah Isi Website

Semua teks dan data dipusatkan di dua file, jadi tidak perlu menyentuh komponen:

| File             | Isinya                                                          |
| ---------------- | --------------------------------------------------------------- |
| `src/content.js` | Teks & label: nama, tagline, bio, menu, judul section            |
| `src/data.js`    | Data list: `homeButtons`, `experiences`, `projects`, `techStack`, `certificates`, `contacts` |
| `public/assets/` | Semua gambar: `certificate/`, `experience/`, `profile_pic/`, `stack/` |
| `src/index.css`  | Warna tema — lihat bagian **1. DESIGN TOKENS** di paling atas     |

Dua hal yang paling sering bikin error: setiap item di `data.js` wajib punya
`id` yang **unik**, dan path gambar ditulis **tanpa** garis miring di depan
(contoh: `assets/stack/react.png`).

> **Foto profil saat ini masih placeholder** (`profile.svg`).
> Ganti dengan foto asli: taruh file di `public/assets/profile_pic/`, lalu ubah
> `content.home.profileImage` di `src/content.js`.

📖 **Panduan lengkap dengan contoh kode ada di
[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** — cara menambah project,
sertifikat, pengalaman, kontak baru, sampai mengganti warna dan font.

---

## Struktur Project

```
src/
├── components/
│   ├── CertificateSlider.jsx   slider sertifikat (state React)
│   ├── Contact.jsx             daftar kontak
│   ├── ContactIcon.jsx         ikon SVG untuk tiap tipe kontak
│   ├── Experience.jsx          daftar pengalaman
│   ├── Footer.jsx              footer + tahun otomatis
│   ├── Home.jsx                hero section
│   ├── Navbar.jsx              header + navigasi
│   ├── Portfolio.jsx           tab Projects / Tech Stack / Certificates
│   └── Section.jsx             pembungkus section (judul + animasi)
├── hooks/
│   ├── useActiveSection.js     menandai link navigasi yang aktif
│   └── useScrollReveal.js      animasi muncul saat di-scroll
├── assetUrl.js                 membuat URL gambar yang aman untuk subfolder
├── content.js                  SEMUA TEKS
├── data.js                     SEMUA DATA LIST
├── index.css                   styling
├── App.jsx                     susunan halaman
└── main.jsx                    entry point
```

---

## Deploy

### Vercel

- Build Command: `npm run build`
- Output Directory: `dist`
- `vercel.json` sudah menyiapkan rewrite untuk SPA.

### Netlify

- Build Command: `npm run build`
- Publish Directory: `dist`

### GitHub Pages

Jalankan `npm run build`, lalu upload isi folder `dist/` (bukan `src/`).

---

## Troubleshooting

| Masalah                        | Solusi                                                        |
| ------------------------------ | ------------------------------------------------------------- |
| Halaman putih setelah deploy    | Pastikan yang di-upload folder `dist/`, bukan `src/`          |
| Gambar tidak muncul             | Cek path di `data.js` — tanpa `/` di depan, huruf besar/kecil harus persis |
| Perintah `npm` tidak dikenal    | Install Node.js LTS, lalu tutup dan buka lagi terminal        |
| Port 5173 sudah dipakai         | `npm run dev -- --port 5174`                                  |
