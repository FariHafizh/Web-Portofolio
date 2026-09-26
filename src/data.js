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
    role: 'Full-Stack Web Developer Cohort',
    organization: 'Coding Camp 2026 powered by DBS Foundation',
    meta: 'Feb 2026 — Jul 2026 · Hybrid',
    logo: 'assets/experience/logo coding camp.webp',
    description:
      'Built and maintained RESTful APIs with Python and Flask to connect the React frontend, ' +
      'PostgreSQL databases, and machine learning services. Designed database schemas, implemented ' +
      'application features, and handled deployment, debugging, and system testing.',
  },
  {
    id: 2,
    role: 'IT Analyst / IT Support',
    organization: 'Komdigi',
    meta: 'Internship · Aug 2025 — Nov 2025 · Jakarta, Indonesia · On-site',
    logo: 'assets/experience/logo komdigi.webp',
    description:
      'Analyzed and defined technical requirements for the Geopos web platform, bridging ' +
      'the gap between stakeholder needs and front-end implementation strategies.',
  },
  {
    id: 3,
    organization: 'Himpunan Mahasiswa Ilmu Komputer (HIMALKOM)',
    organizationType: 'Organization / Committee',
    meta: 'Jan 2023 — Nov 2024 · IPB University',
    logo: 'assets/experience/logo himalkom.webp',
    initials: 'HK',
    description:
      'Active creative contributor and committee member across key annual flagships and ' +
      'departmental programs, driving visual branding and event collateral.',
    subItems: [
      {
        id: '3-1',
        role: 'Staff of Creative Division',
        event: 'Agriinformatics 2024',
        meta: 'Seasonal · Jun 2024 — Nov 2024 · Hybrid',
        description:
          'Produced graphic assets for the event and collaborated closely with the creative ' +
          'team to keep the visual identity consistent across all publications.',
      },
      {
        id: '3-2',
        role: 'Staff of Creative Division',
        event: 'Pekan Ilkomerz 60',
        meta: 'Seasonal · Jul 2024 — Oct 2024 · Hybrid',
        description:
          'Contributed to creative assets and event collateral, working closely with the ' +
          'events team on design deliverables and deadlines.',
      },
      {
        id: '3-3',
        role: 'Staff of Creative Division',
        event: 'IT TODAY IPB 2023',
        meta: 'Seasonal · Jan 2023 — Oct 2023 · Hybrid',
        description:
          'Handled project management and graphic design tasks, gaining hands-on experience ' +
          'coordinating with cross-functional teams.',
      },
    ],
  },
];

/** Daftar project. */
export const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description:
      'A responsive single-page portfolio built with React and Vite, featuring a tabbed ' +
      'portfolio section, an accessible certificate slider, and scroll-reveal animations.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
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
  { id: 11, img: 'assets/stack/qgis.webp', label: 'QGIS' },
  { id: 12, img: 'assets/stack/postgre.webp', label: 'PostgreSQL' },
];

/** Sertifikat. Gambar ada di `public/assets/certificate/`. */
export const certificates = [
  {
    id: 1,
    img: 'assets/certificate/komdigi-internship.jpg',
    title: 'Praktik Kerja Lapangan (Internship) — Ditjen Ekosistem Digital',
    issuer: 'Kementerian Komunikasi dan Digital (Komdigi)',
    description:
      'Certificate of completion for conducting an IT internship at the Directorate General of ' +
      'Digital Ecosystem, Ministry of Communication and Digital (Komdigi).',
  },
  {
    id: 2,
    img: 'assets/certificate/coding-camp-2026.jpg',
    title: 'Coding Camp 2026 — Full-Stack Web Developer',
    issuer: 'DBS Foundation & Dicoding',
    description:
      'Certificate of Completion in Full-Stack Web Development, mastering frontend architecture, ' +
      'backend APIs, PostgreSQL databases, and full application deployment.',
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
