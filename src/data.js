/**
 * PUSAT DATA LIST WEBSITE.
 *
 * Aturan main:
 * - Setiap export adalah array of objects.
 * - Setiap object WAJIB punya `id` unik (dipakai React sebagai key).
 * - Path gambar ditulis relatif terhadap folder `public/` (tanpa `/` di depan).
 * - Teks yang bukan list (judul, intro, label) ada di `src/content.js`.
 */

/** Tombol di section Home. `external: true` akan dibuka di tab baru. */
export const homeButtons = [
  { id: 1, label: 'View Portfolio', href: '#portfolio', external: false },
  { id: 2, label: 'Get in Touch', href: '#contact', external: false },
];

/** Riwayat pengalaman, urut dari yang paling baru. `logo` boleh dikosongkan (''). */
export const experiences = [
  {
    id: 1,
    role: 'IT Analyst',
    organization: 'Komdigi',
    meta: 'Internship · Sep 2025 — Nov 2025 · Jakarta, Indonesia · On-site',
    logo: '',
    description:
      'Analyzed and defined technical requirements for the Geopos web platform, bridging ' +
      'the gap between stakeholder needs and front-end implementation strategies.',
  },
  {
    id: 2,
    role: 'Staff of Creative Division',
    organization: 'Agriinformatics 2024',
    meta: 'Seasonal · Jun 2024 — Nov 2024 · Hybrid',
    logo: 'assets/experience/agriinformatics.png',
    description:
      'Produced graphic assets for the event and collaborated closely with the creative ' +
      'team to keep the visual identity consistent across all publications.',
  },
  {
    id: 3,
    role: 'Staff of Creative Division',
    organization: 'Pekan Ilkomerz 60',
    meta: 'Seasonal · Jul 2024 — Oct 2024 · Hybrid',
    logo: 'assets/experience/pekan-ilkomerz.png',
    description:
      'Contributed to creative assets and event collateral, working closely with the ' +
      'events team on design deliverables and deadlines.',
  },
  {
    id: 4,
    role: 'Staff of Creative Division',
    organization: 'IT TODAY IPB 2023',
    meta: 'Seasonal · Jan 2023 — Oct 2023 · Hybrid',
    logo: 'assets/experience/it-today.jpeg',
    description:
      'Handled project management and graphic design tasks, gaining hands-on experience ' +
      'coordinating with cross-functional teams.',
  },
  {
    id: 5,
    role: 'Content Creator',
    organization: 'YouTube',
    meta: 'Ongoing · Remote',
    logo: '',
    description:
      'Produce video content focused on web development tutorials and project showcases, ' +
      'handling planning, editing, and publishing end to end.',
  },
];

/** Daftar project. `liveDemo` dan `sourceCode` boleh dikosongkan ('') bila belum ada. */
export const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description:
      'A responsive single-page portfolio built with React and Vite, featuring a tabbed ' +
      'portfolio section, an accessible certificate slider, and scroll-reveal animations.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    liveDemo: 'https://web-portofolio-sage-omega.vercel.app/',
    sourceCode: 'https://github.com/FariHafizh/Web-Portofolio',
  },
];

/** Tools & teknologi. Gambar ada di `public/assets/stack/`. */
export const techStack = [
  { id: 1, img: 'assets/stack/html.png', label: 'HTML' },
  { id: 2, img: 'assets/stack/css.png', label: 'CSS' },
  { id: 3, img: 'assets/stack/javascript.png', label: 'JavaScript' },
  { id: 4, img: 'assets/stack/react.png', label: 'React' },
  { id: 5, img: 'assets/stack/php.png', label: 'PHP' },
  { id: 6, img: 'assets/stack/github.png', label: 'GitHub' },
  { id: 7, img: 'assets/stack/figma.png', label: 'Figma' },
  { id: 8, img: 'assets/stack/photoshop.png', label: 'Adobe Photoshop' },
  { id: 9, img: 'assets/stack/after-effects.png', label: 'Adobe After Effects' },
  { id: 10, img: 'assets/stack/alight-motion.png', label: 'Alight Motion' },
];

/** Sertifikat. Gambar ada di `public/assets/certificate/`. */
export const certificates = [
  {
    id: 1,
    img: 'assets/certificate/web-programming-basics.jpg',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    description:
      'The fundamentals of web programming, covering HTML, CSS, and JavaScript.',
  },
  {
    id: 2,
    img: 'assets/certificate/javascript-basics.jpg',
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    description:
      'Core JavaScript concepts and syntax, and how to apply them in web development.',
  },
  {
    id: 3,
    img: 'assets/certificate/front-end-basics.jpg',
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding',
    description:
      'Front-end development fundamentals, from page structure to styling and interaction.',
  },
  {
    id: 4,
    img: 'assets/certificate/data-science-basics.jpg',
    title: 'Belajar Dasar Data Science',
    issuer: 'Dicoding',
    description:
      'An introduction to data science, including data analysis, visualization, and ' +
      'basic machine learning concepts.',
  },
];

/**
 * Kontak. `type` menentukan ikon yang dipakai (lihat `src/components/Contact.jsx`):
 * 'email' | 'linkedin' | 'github' | 'instagram'.
 */
export const contacts = [
  {
    id: 1,
    type: 'email',
    label: 'Email',
    value: 'farihafizh741@gmail.com',
    href: 'mailto:farihafizh741@gmail.com',
  },
  {
    id: 2,
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'fari-hafizh-nugroho',
    href: 'https://www.linkedin.com/in/fari-hafizh-nugroho-848552248/',
  },
  {
    id: 3,
    type: 'github',
    label: 'GitHub',
    value: 'FariHafizh',
    href: 'https://github.com/FariHafizh',
  },
  {
    id: 4,
    type: 'instagram',
    label: 'Instagram',
    value: '@farihfzh',
    href: 'https://www.instagram.com/farihfzh/',
  },
];
