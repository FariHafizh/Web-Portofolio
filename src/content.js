/**
 * PUSAT TEKS / COPY WEBSITE.
 *
 * Aturan main:
 * - File ini HANYA untuk teks (judul, label, intro). Semua dalam Bahasa Inggris
 *   supaya konsisten dengan isi website.
 * - Data berbentuk list (experience, projects, tech stack, certificates, contact)
 *   ada di `src/data.js`.
 */

export const content = {
  site: {
    // Dipakai di navbar, tab browser, dan footer.
    name: 'Fari Hafizh Nugroho',
    tagline: 'Web Developer & UI/UX Designer',
  },

  // Navbar. `href` harus cocok dengan id section di komponen.
  nav: [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ],

  // Home / Hero
  home: {
    greeting: 'Ready to develop',
    firstName: 'Fari Hafizh',
    lastName: 'Nugroho',
    roles: ['Web Developer', 'UI/UX Designer'],
    bio:
      "I'm a Computer Science student at IPB University with a strong passion for web " +
      'development and UI/UX design. I enjoy turning ideas into clean, accessible ' +
      'interfaces, and I am always eager to learn new technologies and collaborate on ' +
      'challenging projects.',
    // Ganti foto: taruh file baru di `public/assets/profile_pic/`, lalu ubah path ini.
    profileImage: 'assets/profile_pic/profile.svg',
    profileImageAlt: 'Portrait of Fari Hafizh Nugroho',
  },

  // Judul + kalimat pengantar tiap section.
  sections: {
    experience: {
      title: 'Experience',
      intro: 'Roles and organisations I have contributed to.',
    },
    portfolio: {
      title: 'Portfolio',
      intro: 'Selected work, the tools I use, and the courses I have completed.',
    },
    contact: {
      title: 'Contact',
      intro: 'Feel free to reach out for collaboration or opportunities.',
    },
  },

  // Label di dalam section Portfolio.
  portfolio: {
    tabs: {
      projects: 'Projects',
      techStack: 'Tech Stack',
      certificates: 'Certificates',
    },
    panels: {
      projectsTitle: 'Projects',
      projectsIntro: 'A summary of the projects I have built.',
      techStackTitle: 'Tech Stack',
      techStackIntro: 'Tools and technologies I work with regularly.',
      certificatesTitle: 'Certificates',
      certificatesIntro: 'Courses I have completed.',
    },
    project: {
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
    },
    slider: {
      prev: 'Previous',
      next: 'Next',
      prevAria: 'Previous certificate',
      nextAria: 'Next certificate',
      dotsAria: 'Certificate slides',
      goToSlide: 'Go to certificate',
    },
  },

  footer: {
    // Tahun diisi otomatis oleh komponen Footer.
    rights: 'All rights reserved.',
  },
};
