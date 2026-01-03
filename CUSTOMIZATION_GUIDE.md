# Panduan Kustomisasi

## Mengubah Teks & Data Diri
Supaya mudah untuk orang awam, semua teks & data dipusatkan di 2 file:

1) Ubah teks (judul website, bio, label tombol, judul section)
- Edit: `src/content.jsx`

2) Ubah data (experience, projects, tech stack, certificates, kontak)
- Edit: `src/data.jsx`

3) Ubah gambar
- Gambar ada di: `public/assets/`
- Jika ingin ganti logo/ikon stack, cukup ganti file gambar di folder itu atau ubah path-nya di `src/data.jsx`.

## Mengubah Warna Tema
Buka file `src/index.css` atau `src/App.css`. Cari bagian `:root` di paling atas dan ubah kode warna hex-nya.