// Centralized copy/text content for the website.
// Keep this file focused on plain strings (headings, paragraphs, labels).

export const content = {
	site: {
		title: "Fari's Website",
	},
	sections: {
		home: {
			id: 'home',
		},
		experience: {
			id: 'experience',
			title: 'Experience',
		},
		portfolio: {
			id: 'combined-content',
			title: 'Portfolio',
			projectsTitle: 'Projects',
			techStackTitle: 'My Tech Stack',
			certificatesTitle: 'Certificate',
			projectsIntro:
				'Berisi ringkasan project yang pernah saya kerjakan. Contoh: personal website, web apps, dsb.',
		},
		contact: {
			id: 'contact',
			title: 'Contact',
		},
	},
	home: {
		nameLines: ['Fari Hafizh', 'Nugroho'],
		bio:
			"Hello! I'm a Computer Science student at IPB University with a strong passion for web development and UI/UX design. I am always eager to learn new technologies and collaborate on challenging and innovative projects.",
		profileImageAlt: 'Profile Picture',
	},
	nav: {
		links: [
			{ href: '#home', label: 'Home' },
			{ href: '#experience', label: 'Experience' },
			{ href: '#combined-content', label: 'Portfolio' },
			{ href: '#contact', label: 'Contact' },
		],
	},
	portfolio: {
		tabs: {
			projects: 'Projects',
			techStack: 'Tech Stack',
			certificates: 'Certificates',
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
