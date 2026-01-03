// Centralized structured data for the website.
// Keep this file focused on lists/objects (skills, links, experience items, etc.).

export const data = {
	homeButtons: [
		{
			label: 'CS2',
			href: 'https://cswatch.in/player/76561199317671038',
			external: true,
		},
		{
			label: 'Portfolio',
			href: '#combined-content',
			external: false,
		},
		{
			label: 'Button 3',
			href: '#',
			external: true,
		},
	],

	experiences: [
		{
			role: 'Web Developer — Komdigi (Internship)',
			meta: 'Sep 2025 — Present · Jakarta, Indonesia · On-site',
			description:
				'Worked on web development with focus on front-end implementation. Skills: Web Development, Front-End Development, and additional related skills.',
		},
		{
			role: 'Staff of Creative Division — Agriinformatics 2024',
			meta: 'Jun 2024 — Nov 2024 · Hybrid · Seasonal',
			description:
				'Served as Staff of Creative Division for Agriinformatics 2024. Responsibilities included teamwork and graphic design.',
		},
		{
			role: 'Staff of Creative Division — Pekan Ilkmoerz 60',
			meta: 'Jul 2024 — Oct 2024 · Teamwork',
			description:
				'Contributed to creative assets and event collateral; worked closely with the events team on design deliverables.',
		},
		{
			role: 'Staff of Creative — IT TODAY IPB',
			meta: 'Jan 2023 — Oct 2023 · Seasonal · Hybrid',
			description:
				'Participated in project management and graphic design tasks for IT TODAY 2023. Gained experience coordinating with cross-functional teams.',
		},
		{
			role: 'Content Creator — YouTube',
			meta: 'Ongoing · YouTube Channel · Remote',
			description:
				'Produce video content focused on web development tutorials and project showcases. Managed video planning, editing, and publishing on YouTube.',
			link: {
				label: 'Visit YouTube Channel',
				href: '#',
			},
		},
	],

	projects: [
		{ title: 'Personal Portfolio', detail: 'Website ini (HTML, CSS, JS)' },
		{ title: 'Project A', detail: 'Deskripsi singkat project A.' },
	],

	techStack: [
		{ img: 'assets/stack/figma.png', alt: 'figma', label: 'Figma' },
		{ img: 'assets/stack/ps.png', alt: 'photoshop', label: 'Adobe Photoshop' },
		{ img: 'assets/stack/ae.png', alt: 'after effect', label: 'Adobe After Effect' },
		{ img: 'assets/stack/alightmotion.png', alt: 'alight motion', label: 'Alight Motion' },
		{ img: 'assets/stack/PHP-logo.svg.png', alt: 'php', label: 'PHP' },
		{ img: 'assets/stack/HTML5_logo_and_wordmark.svg.png', alt: 'html', label: 'HTML' },
		{ img: 'assets/stack/CSS3_logo_and_wordmark.svg.png', alt: 'css', label: 'CSS' },
		{ img: 'assets/stack/Unofficial_JavaScript_logo_2.svg.png', alt: 'javascript', label: 'Javascript' },
		{ img: 'assets/stack/React_Logo_SVG.svg.png', alt: 'react', label: 'React' },
		{ img: 'assets/stack/github_logo_icon_229278.png', alt: 'github', label: 'GitHub' },
	],

	certificates: [
		{
			img: 'assets/certificate/Sertifikat Belajar Dasar Pemrograman Web_page-0001.jpg',
			alt: 'sertifikat',
			title: 'Belajar Dasar Pemrograman Web',
			description: 'Learn the basics of web programming, including HTML, CSS, and JavaScript.',
		},
		{
			img: 'assets/certificate/sertifikat_course_256_3755033_250624172216_page-0001.jpg',
			alt: 'sertifikat',
			title: 'Belajar Dasar Pemrograman Javascript',
			description:
				'A course introducing the basics of JavaScript programming, covering fundamental concepts, syntax, and practical applications for web development.',
		},
		{
			img: 'assets/certificate/sertifikat_course_615_3755033_241224160035_page-0001.jpg',
			alt: 'sertifikat',
			title: 'Belajar Dasar Data Science',
			description:
				'A course introducing the basics of data science, including data analysis, visualization, and machine learning concepts using popular tools and libraries.',
		},
		{
			img: 'assets/certificate/sertifikat_course_315_3755033_230624231439_page-0001.jpg',
			alt: 'sertifikat',
			title: 'Belajar Membuat Front-End Web untuk Pemula',
			description:
				'A course focused on the fundamentals of front-end web development, covering HTML, CSS, and JavaScript basics to help beginners create their first web pages.',
		},
	],

	contactItems: {
		email: {
			label: 'Email',
			value: 'farihafizh741@gmail.com',
		},
		instagram: {
			label: 'Instagram',
			value: '@farihfzh',
		},
		linkedin: {
			label: 'LinkedIn',
			labelValue: 'fari-hafizh-nugroho',
			href: 'https://www.linkedin.com/in/fari-hafizh-nugroho-848552248/',
		},
		github: {
			label: 'GitHub',
			labelValue: 'FariHafizh',
			href: 'https://github.com/FariHafizh',
		},
	},
};
