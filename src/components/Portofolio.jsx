export default function Portofolio() {
	return (
		<article id="combined-content" className="revealable">
			<h2>Portfolio</h2>
			<div className="combined-controls" role="tablist" aria-label="Portfolio sections">
				<button className="combined-btn active" data-target="projects" role="tab" aria-selected="true">
					Projects
				</button>
				<button className="combined-btn" data-target="software-info-panel" role="tab" aria-selected="false">
					Tech Stack
				</button>
				<button className="combined-btn" data-target="certificate-panel" role="tab" aria-selected="false">
					Certificates
				</button>
			</div>

			<div className="combined-panel">
				<div id="projects" className="panel active" role="tabpanel">
					<h3>Projects</h3>
					<p>
						Berisi ringkasan project yang pernah saya kerjakan. Contoh: personal website, web
						apps, dsb.
					</p>
					<ul className="project-list">
						<li>
							<strong>Personal Portfolio</strong> — Website ini (HTML, CSS, JS)
						</li>
						<li>
							<strong>Project A</strong> — Deskripsi singkat project A.
						</li>
					</ul>
				</div>

				<div id="software-info-panel" className="panel" role="tabpanel" hidden>
					<h3>My Tech Stack</h3>

					<ol>
						<li>
							<img src="/assets/stack/figma.png" alt="figma" />
							<p>Figma</p>
						</li>
						<li>
							<img src="/assets/stack/ps.png" alt="photoshop" />
							<p>Adobe Photoshop</p>
						</li>
						<li>
							<img src="/assets/stack/ae.png" alt="after effect" />
							<p>Adobe After Effect</p>
						</li>
						<li>
							<img src="/assets/stack/alightmotion.png" alt="alight motion" />
							<p>Alight Motion</p>
						</li>
						<li>
							<img src="/assets/stack/PHP-logo.svg.png" alt="php" />
							<p>PHP</p>
						</li>
						<li>
							<img src="/assets/stack/HTML5_logo_and_wordmark.svg.png" alt="html" />
							<p>HTML</p>
						</li>
						<li>
							<img src="/assets/stack/CSS3_logo_and_wordmark.svg.png" alt="css" />
							<p>CSS</p>
						</li>
						<li>
							<img src="/assets/stack/Unofficial_JavaScript_logo_2.svg.png" alt="javascript" />
							<p>Javascript</p>
						</li>
						<li>
							<img src="/assets/stack/React_Logo_SVG.svg.png" alt="react" />
							<p>React</p>
						</li>
						<li>
							<img src="/assets/stack/github_logo_icon_229278.png" alt="github" />
							<p>GitHub</p>
						</li>
					</ol>
				</div>

				<div id="certificate-panel" className="panel" role="tabpanel" hidden>
					<h3>Certificate</h3>
					<div className="slider-container">
						<div className="slider" aria-live="polite">
							<div className="slide">
								<img
									src="/assets/certificate/Sertifikat Belajar Dasar Pemrograman Web_page-0001.jpg"
									alt="sertifikat"
									loading="lazy"
									decoding="async"
									sizes="(max-width:600px) 80vw, 50vw"
								/>
							</div>
							<div className="slide">
								<img
									src="/assets/certificate/sertifikat_course_256_3755033_250624172216_page-0001.jpg"
									alt="sertifikat"
									loading="lazy"
									decoding="async"
									sizes="(max-width:600px) 80vw, 50vw"
								/>
							</div>
							<div className="slide">
								<img
									src="/assets/certificate/sertifikat_course_615_3755033_241224160035_page-0001.jpg"
									alt="sertifikat"
									loading="lazy"
									decoding="async"
									sizes="(max-width:600px) 80vw, 50vw"
								/>
							</div>
							<div className="slide">
								<img
									src="/assets/certificate/sertifikat_course_315_3755033_230624231439_page-0001.jpg"
									alt="sertifikat"
									loading="lazy"
									decoding="async"
									sizes="(max-width:600px) 80vw, 50vw"
								/>
							</div>
						</div>

						<div className="project-descriptions">
							<div className="description active">
								<h3>Belajar Dasar Pemrograman Web</h3>
								<p>Learn the basics of web programming, including HTML, CSS, and JavaScript.</p>
							</div>
							<div className="description">
								<h3>Belajar Dasar Pemrograman Javascript</h3>
								<p>
									A course introducing the basics of JavaScript programming, covering
									fundamental concepts, syntax, and practical applications for web development.
								</p>
							</div>
							<div className="description">
								<h3>Belajar Dasar Data Science</h3>
								<p>
									A course introducing the basics of data science, including data analysis,
									visualization, and machine learning concepts using popular tools and
									libraries.
								</p>
							</div>
							<div className="description">
								<h3>Belajar Membuat Front-End Web untuk Pemula</h3>
								<p>
									A course focused on the fundamentals of front-end web development, covering
									HTML, CSS, and JavaScript basics to help beginners create their first web
									pages.
								</p>
							</div>
						</div>
					</div>

					<div className="slider-buttons" role="group" aria-label="Certificate slider controls">
						<button id="prev" aria-label="Previous certificate">
							Previous
						</button>
						<button id="next" aria-label="Next certificate">
							Next
						</button>
					</div>
					<div className="slider-dots" id="slider-dots" role="tablist" aria-label="Certificate slide dots" />
					<div id="sr-announcer" className="sr-only" aria-live="polite" aria-atomic="true" />
				</div>
			</div>
		</article>
	);
}

