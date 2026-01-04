// Gunakan file ini untuk data list (Projects, Certificates, Experience, Tech Stack, Contact, dll).
// Format utama: export const array of objects.
// Catatan: pastikan setiap object punya 'id' unik.

export const HomeButtons = [
  { id: 1, label: 'CS2', href: 'https://cswatch.in/player/76561199317671038', external: true },
  { id: 2, label: 'Portfolio', href: '#combined-content', external: false },
  { id: 3, label: 'Button 3', href: '#', external: true },
];

export const Experience = [
  {
    id: 1,
    role: 'IT Analyst — Komdigi (Internship)',
    meta: 'Sep 2025 — November 2025 · Jakarta, Indonesia · On-site',
    description:
      'Analyzed and defined technical requirements for the Geopos web platform, bridging the gap between stakeholder needs and front-end implementation strategies.',
  },
  {
    id: 2,
    role: 'Staff of Creative Division — Agriinformatics 2024',
    meta: 'Jun 2024 — Nov 2024 · Hybrid · Seasonal',
    description:
      'Served as Staff of Creative Division for Agriinformatics 2024. Responsibilities included teamwork and graphic design.',
  },
  {
    id: 3,
    role: 'Staff of Creative Division — Pekan Ilkmoerz 60',
    meta: 'Jul 2024 — Oct 2024 · Hybrid · Seasonal',
    description:
      'Contributed to creative assets and event collateral; worked closely with the events team on design deliverables.',
  },
  {
    id: 4,
    role: 'Staff of Creative — IT TODAY IPB',
    meta: 'Jan 2023 — Oct 2023 · Hybrid · Seasonal',
    description:
      'Participated in project management and graphic design tasks for IT TODAY 2023. Gained experience coordinating with cross-functional teams.',
  },
  {
    id: 5,
    role: 'Content Creator — YouTube',
    meta: 'Ongoing · YouTube Channel · Remote',
    description:
      'Produce video content focused on web development tutorials and project showcases. Managed video planning, editing, and publishing on YouTube.',
    link: { label: 'Visit YouTube Channel', href: '#' },
  },
];

// Struktur contoh Project (lebih lengkap). Komponen saat ini hanya memakai Title & Description singkat.
export const Project = [
  {
    id: 1,
    picture: '',
    Title: 'Personal Portfolio',
    Description: 'Website ini (HTML, CSS, JS)',
    Link: [{ LiveDemo: '' }, { GitHub: '' }],
    Technologies: ['HTML', 'CSS', 'JavaScript'],
    KeyFeature: [{ text: '' }],
  },
  {
    id: 2,
    picture: '',
    Title: 'Project A',
    Description: 'Deskripsi singkat project A.',
    Link: [{ LiveDemo: '' }, { GitHub: '' }],
    Technologies: [],
    KeyFeature: [{ text: '' }],
  },
];

export const TechStack = [
  { id: 1, img: 'assets/stack/figma.png', alt: 'figma', label: 'Figma' },
  { id: 2, img: 'assets/stack/ps.png', alt: 'photoshop', label: 'Adobe Photoshop' },
  { id: 3, img: 'assets/stack/ae.png', alt: 'after effect', label: 'Adobe After Effect' },
  { id: 4, img: 'assets/stack/alightmotion.png', alt: 'alight motion', label: 'Alight Motion' },
  { id: 5, img: 'assets/stack/PHP-logo.svg.png', alt: 'php', label: 'PHP' },
  { id: 6, img: 'assets/stack/HTML5_logo_and_wordmark.svg.png', alt: 'html', label: 'HTML' },
  { id: 7, img: 'assets/stack/CSS3_logo_and_wordmark.svg.png', alt: 'css', label: 'CSS' },
  { id: 8, img: 'assets/stack/Unofficial_JavaScript_logo_2.svg.png', alt: 'javascript', label: 'Javascript' },
  { id: 9, img: 'assets/stack/React_Logo_SVG.svg.png', alt: 'react', label: 'React' },
  { id: 10, img: 'assets/stack/github_logo_icon_229278.png', alt: 'github', label: 'GitHub' },
];

export const Certificates = [
  {
    id: 1,
    img: 'assets/certificate/Sertifikat Belajar Dasar Pemrograman Web_page-0001.jpg',
    alt: 'sertifikat',
    title: 'Belajar Dasar Pemrograman Web',
    description: 'Learn the basics of web programming, including HTML, CSS, and JavaScript.',
  },
  {
    id: 2,
    img: 'assets/certificate/sertifikat_course_256_3755033_250624172216_page-0001.jpg',
    alt: 'sertifikat',
    title: 'Belajar Dasar Pemrograman Javascript',
    description:
      'A course introducing the basics of JavaScript programming, covering fundamental concepts, syntax, and practical applications for web development.',
  },
  {
    id: 3,
    img: 'assets/certificate/sertifikat_course_615_3755033_241224160035_page-0001.jpg',
    alt: 'sertifikat',
    title: 'Belajar Dasar Data Science',
    description:
      'A course introducing the basics of data science, including data analysis, visualization, and machine learning concepts using popular tools and libraries.',
  },
  {
    id: 4,
    img: 'assets/certificate/sertifikat_course_315_3755033_230624231439_page-0001.jpg',
    alt: 'sertifikat',
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    description:
      'A course focused on the fundamentals of front-end web development, covering HTML, CSS, and JavaScript basics to help beginners create their first web pages.',
  },
];

export const Contact = [
  { id: 1, type: 'email', label: 'Email', value: 'farihafizh741@gmail.com', href: 'mailto:farihafizh741@gmail.com' },
  { id: 2, type: 'instagram', label: 'Instagram', value: '@farihfzh', href: '' },
  {
    id: 3,
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'fari-hafizh-nugroho',
    href: 'https://www.linkedin.com/in/fari-hafizh-nugroho-848552248/',
  },
  { id: 4, type: 'github', label: 'GitHub', value: 'FariHafizh', href: 'https://github.com/FariHafizh' },
];
