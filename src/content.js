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
    tagline: 'Manusia Biasa',
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
    // Foto profil dimatikan sementara sesuai permintaan (set ke null).
    // Untuk mengaktifkan kembali, masukkan path foto: 'assets/profile_pic/profile.svg'.
    profileImage: null,
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
    techStack: {
      title: 'Tech Stack',
      intro: 'Technologies and tools I work with regularly.',
    },
    tabs: {
      projects: 'Projects',
      certificates: 'Certificates',
    },
    panels: {
      projectsTitle: 'Projects',
      projectsIntro: 'A summary of the projects I have built.',
      certificatesTitle: 'Certificates',
      certificatesIntro: 'Some of the certificates I have',
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
