// Gunakan file ini untuk teks statis (Navbar, Home, Portfolio labels, Footer, dll).
// Format utama: export const object.

export const content = {
  site: {
    title: "Fari's Website",
  },

  // Navbar
  nav: {
    links: [
      { id: 1, href: '#home', label: 'Home' },
      { id: 2, href: '#experience', label: 'Experience' },
      { id: 3, href: '#combined-content', label: 'Portfolio' },
      { id: 4, href: '#contact', label: 'Contact' },
    ],
  },

  // Home / Hero (contoh struktur sesuai permintaan)
  // Kamu boleh ubah isinya, yang penting id unik.
  homeData: [
    { id: 1, text: 'Ready to Develop' },
    { id: 2, firstName: 'Fari Hafizh', lastName: 'Nugroho' },
    { id: 3, position: [{ text: 'Web Developer' }, { text: 'UI/UX Designer' }] },
    {
      id: 4,
      text:
        "Hello! I'm a Computer Science student at IPB University with a strong passion for web development and UI/UX design. I am always eager to learn new technologies and collaborate on challenging and innovative projects.",
    },
    { id: 5, profileImageAlt: 'Profile Picture' },
  ],

  // Section titles
  sections: {
    experienceTitle: 'Experience',
    portfolioTitle: 'Portfolio',
    contactTitle: 'Contact',
  },

  // Portfolio labels
  portfolio: {
    tabs: {
      projects: 'Projects',
      techStack: 'Tech Stack',
      certificates: 'Certificates',
    },
    panels: {
      projectsTitle: 'Projects',
      projectsIntro:
        'Berisi ringkasan project yang pernah saya kerjakan. Contoh: personal website, web apps, dsb.',
      techStackTitle: 'My Tech Stack',
      certificatesTitle: 'Certificate',
    },
    slider: {
      prev: 'Previous',
      next: 'Next',
      prevAria: 'Previous certificate',
      nextAria: 'Next certificate',
      dotsAria: 'Certificate slide dots',
    },
  },

  footer: {
    copyright: '© 2024 Fari Hafizh Nugroho. All rights reserved.',
  },
};
