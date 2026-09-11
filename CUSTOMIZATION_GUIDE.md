# Panduan Kustomisasi

Panduan langkah demi langkah untuk mengubah isi website tanpa perlu menyentuh
komponen React. Ringkasannya ada di [README.md](README.md).

**Aturan emas:** hampir semua yang ingin Anda ubah ada di dua file —
`src/content.js` (teks) dan `src/data.js` (data list).

Setelah menyimpan file, halaman di browser akan langsung ikut berubah selama
`npm run dev` masih berjalan.

---

## Daftar Isi

1. [Mengubah nama & tagline](#1-mengubah-nama--tagline)
2. [Mengubah bio di Home](#2-mengubah-bio-di-home)
3. [Mengganti foto profil](#3-mengganti-foto-profil)
4. [Menambah pengalaman](#4-menambah-pengalaman)
5. [Menambah project](#5-menambah-project)
6. [Menambah tech stack](#6-menambah-tech-stack)
7. [Menambah sertifikat](#7-menambah-sertifikat)
8. [Mengubah kontak](#8-mengubah-kontak)
9. [Mengubah tombol di Home](#9-mengubah-tombol-di-home)
10. [Mengubah warna tema](#10-mengubah-warna-tema)
11. [Mengubah judul & pengantar section](#11-mengubah-judul--pengantar-section)
12. [Mengubah judul tab browser](#12-mengubah-judul-tab-browser)

---

## 1. Mengubah nama & tagline

Nama ini dipakai di navbar (kiri atas) dan di footer.

File: `src/content.js`

```js
site: {
  name: 'Fari Hafizh Nugroho',
  tagline: 'Web Developer & UI/UX Designer',
},
```

Nama besar di halaman Home diatur terpisah, supaya bisa dipecah dua baris:

```js
home: {
  firstName: 'Fari Hafizh',   // baris pertama
  lastName: 'Nugroho',        // baris kedua
  roles: ['Web Developer', 'UI/UX Designer'],
  ...
},
```

`roles` boleh berisi berapa pun item; nanti ditampilkan dipisah tanda `·`.

---

## 2. Mengubah bio di Home

File: `src/content.js` → `home.greeting` dan `home.bio`.

```js
home: {
  greeting: 'Ready to develop',   // label kecil di atas nama
  ...
  bio:
    "I'm a Computer Science student at IPB University with a strong passion " +
    'for web development and UI/UX design.',
},
```

> **Catatan penulisan teks panjang**
> Teks panjang ditulis dipecah beberapa baris lalu disambung dengan tanda `+`.
> Ini hanya soal kerapian kode — hasilnya tetap satu paragraf. Perhatikan spasi
> di ujung setiap potongan supaya kata tidak menempel.
>
> Kalau teks Anda mengandung tanda kutip satu (`'`), bungkus dengan kutip dua:
> `"I'm a student"`.

---

## 3. Mengganti foto profil

Foto saat ini masih **placeholder** (`profile.svg`).

1. Salin foto Anda ke `public/assets/profile_pic/` — misalnya `foto-saya.jpg`.
2. Buka `src/content.js`, ubah:

```js
home: {
  ...
  profileImage: 'assets/profile_pic/foto-saya.jpg',
  profileImageAlt: 'Foto Fari Hafizh Nugroho',
},
```

Tips: pakai foto berorientasi potret (tinggi > lebar). Bagian bawah gambar
sengaja dibuat memudar agar menyatu dengan latar.

---

## 4. Menambah pengalaman

File: `src/data.js` → `experiences`

Tersedia dua format: entri tunggal (pekerjaan/magang biasa) atau entri gabungan dengan sub-kepanitiaan (misalnya organisasi kampus seperti HIMALKOM).

**Format Tunggal:**
```js
{
  id: 6,                                     // harus unik!
  role: 'Frontend Developer',
  organization: 'Nama Perusahaan',
  meta: 'Internship · Jan 2026 — Jun 2026 · Bandung · Remote',
  logo: 'assets/experience/nama-logo.png',   // boleh '' kalau tidak ada
  description: 'Apa yang Anda kerjakan di sana.',
},
```

**Format Organisasi / Kepanitiaan (dengan sub-kegiatan):**
```js
{
  id: 7,
  organization: 'Himpunan Mahasiswa Ilmu Komputer (HIMALKOM)',
  organizationType: 'Organization / Committee',
  meta: 'Jan 2023 — Nov 2024 · IPB University',
  logo: '',                                  // otomatis inisial (misal 'HK') jika kosong
  initials: 'HK',                            // opsional
  description: 'Ringkasan peran organisasi umum.',
  subItems: [
    {
      id: '7-1',
      role: 'Staff of Creative Division',
      event: 'Agriinformatics 2024',
      meta: 'Seasonal · Jun 2024 — Nov 2024 · Hybrid',
      logo: 'assets/experience/agriinformatics.png',
      description: 'Apa yang dikerjakan di kepanitiaan ini.',
    },
  ],
},
```

- Urutkan dari yang **paling baru di atas**.
- Bagian Experience menggunakan **Modern Vertical Timeline** yang menghubungkan seluruh pengalaman secara kronologis.
- Kalau `logo` dikosongkan (`''`), otomatis muncul inisial organisasi.
- Logo disimpan di `public/assets/experience/`.

---

## 5. Menambah project

File: `src/data.js` → `projects`

```js
{
  id: 2,
  title: 'Nama Project',
  description: 'Penjelasan singkat: ini apa dan dibuat pakai apa.',
  technologies: ['React', 'Tailwind', 'Firebase'],
  liveDemo: 'https://contoh.vercel.app',      // '' kalau belum ada
  sourceCode: 'https://github.com/user/repo', // '' kalau belum ada
},
```

Isi `technologies` otomatis jadi label kecil. Kalau `liveDemo` atau `sourceCode`
dikosongkan, tombolnya tidak akan muncul.

---

## 6. Menambah tech stack

Tech Stack kini ditampilkan di bagian atas section Portfolio sebagai etalase visual (display-only: logo dan nama software).

1. Salin logo (format PNG latar transparan paling bagus) ke `public/assets/stack/`.
2. Tambahkan di `src/data.js` → `techStack`:

```js
{ id: 11, img: 'assets/stack/nodejs.png', label: 'Node.js' },
```

`label` dipakai sekaligus sebagai teks alternatif gambar, jadi tulis dengan benar.

---

## 7. Menambah sertifikat

1. Salin gambar sertifikat ke `public/assets/certificate/`.
2. Tambahkan di `src/data.js` → `certificates`:

```js
{
  id: 5,
  img: 'assets/certificate/nama-sertifikat.jpg',
  title: 'Judul Sertifikat',
  issuer: 'Dicoding',                 // penerbit, boleh dikosongkan
  description: 'Ringkasan isi kursusnya.',
},
```

Slider akan menyesuaikan sendiri: jumlah titik indikator mengikuti jumlah data.

---

## 8. Mengubah kontak

File: `src/data.js` → `contacts`

```js
{
  id: 5,
  type: 'email',                       // menentukan ikon
  label: 'Email',                      // teks sebelum titik dua
  value: 'nama@gmail.com',             // teks yang terlihat
  href: 'mailto:nama@gmail.com',       // tujuan link
},
```

`type` yang tersedia: `email`, `linkedin`, `github`, `instagram`.

Mau menambah tipe baru (misal WhatsApp)? Tambahkan ikonnya di
`src/components/ContactIcon.jsx` pada objek `PATHS`, dengan nama kunci yang sama
persis dengan `type`.

---

## 9. Mengubah tombol di Home

File: `src/data.js` → `homeButtons`

```js
{ id: 3, label: 'Download CV', href: '/assets/cv.pdf', external: true },
```

- `external: true` → dibuka di tab baru (untuk link ke luar / file).
- `external: false` → untuk link ke section di halaman yang sama, contoh `#contact`.

Berbeda dengan path gambar di `data.js`, `href` di sini dipakai apa adanya oleh
browser. Jadi untuk file di folder `public/`, tulis **dengan** garis miring di
depan (`/assets/cv.pdf`), dan untuk link ke luar tulis alamat lengkapnya
(`https://...`).

---

## 10. Mengubah warna tema

File: `src/index.css`, bagian **1. DESIGN TOKENS** di paling atas.

```css
:root {
  --color-background: #01100b;   /* latar halaman */
  --color-surface: #0f1a16;      /* latar kartu & panel */
  --color-text: #e8ece9;         /* teks utama */
  --color-text-muted: #9aa8a1;   /* teks sekunder */
  --color-accent: #29ab87;       /* warna utama (tombol aktif, garis) */
  --color-highlight: #2de2e6;    /* warna link & penekanan */
  --color-on-accent: #04140f;    /* teks di atas warna utama */
}
```

Cukup ubah di sini — seluruh halaman ikut berubah, tidak perlu cari satu per satu.

> Kalau Anda mengganti `--color-accent` jadi warna **terang**, ubah juga
> `--color-on-accent` jadi warna gelap (dan sebaliknya), supaya teks di atas
> tombol tetap terbaca.

Ganti font: ubah tautan Google Fonts di `index.html`, lalu sesuaikan
`--font-body` di `src/index.css`.

---

## 11. Mengubah judul & pengantar section

File: `src/content.js` → `sections`

```js
sections: {
  experience: {
    title: 'Experience',
    intro: 'Roles and organisations I have contributed to.',
  },
  ...
},
```

Nama menu di navbar diubah di `content.nav`. Kalau Anda mengubah `href` di situ,
ubah juga `id` section terkait di komponennya — keduanya harus cocok.

---

## 12. Mengubah judul tab browser

Ini satu-satunya teks yang tidak ada di `content.js`, karena dibaca browser
sebelum React jalan.

File: `index.html`

```html
<title>Fari Hafizh Nugroho — Web Developer & UI/UX Designer</title>
<meta name="description" content="..." />
```

Ubah juga tag `og:title` dan `og:description` di file yang sama — itu yang muncul
saat link website dibagikan di WhatsApp atau LinkedIn.

---

## Kalau Terjadi Error

| Gejala | Penyebab yang paling sering |
| ------ | --------------------------- |
| Halaman jadi putih total setelah edit | Ada koma atau kurung kurawal yang hilang. Cek pesan error di terminal. |
| Gambar tidak muncul | Path salah. Harus **tanpa** `/` di depan, dan huruf besar/kecil harus persis sama dengan nama filenya. |
| Ada item yang tidak tampil | `id`-nya kembar dengan item lain. Pastikan unik. |
| Perubahan tidak terlihat | File belum disimpan, atau `npm run dev` sudah berhenti. |
