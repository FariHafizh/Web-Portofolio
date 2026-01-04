import { assetUrl } from '../assetUrl';
import { content } from '../content';
import { Certificates, Project, TechStack } from '../data';

export default function Portofolio() {
	// Penting: ID/class di section ini dipakai oleh `initLegacyPortfolioDom()`.
	// Jangan ubah tanpa update `src/legacyDom.js`.
	return (
		<article id="combined-content" className="revealable">
			<h2>{content.sections.portfolioTitle}</h2>
			<div className="combined-controls" role="tablist" aria-label="Portfolio sections">
				<button className="combined-btn active" data-target="projects" role="tab" aria-selected="true">
					{content.portfolio.tabs.projects}
				</button>
				<button className="combined-btn" data-target="software-info-panel" role="tab" aria-selected="false">
					{content.portfolio.tabs.techStack}
				</button>
				<button className="combined-btn" data-target="certificate-panel" role="tab" aria-selected="false">
					{content.portfolio.tabs.certificates}
				</button>
			</div>

			<div className="combined-panel">
				<div id="projects" className="panel active" role="tabpanel">
					<h3>{content.portfolio.panels.projectsTitle}</h3>
					<p>{content.portfolio.panels.projectsIntro}</p>
					<ul className="project-list">
						{Project.map((project) => (
							<li key={project.id}>
								<strong>{project.Title}</strong> — {project.Description}
							</li>
						))}
					</ul>
				</div>

				<div id="software-info-panel" className="panel" role="tabpanel" hidden>
					<h3>{content.portfolio.panels.techStackTitle}</h3>

					<ol>
						{TechStack.map((tool) => (
							<li key={tool.id}>
								<img src={assetUrl(tool.img)} alt={tool.alt} />
								<p>{tool.label}</p>
							</li>
						))}
					</ol>
				</div>

				<div id="certificate-panel" className="panel" role="tabpanel" hidden>
					<h3>{content.portfolio.panels.certificatesTitle}</h3>
					<div className="slider-container">
						<div className="slider" aria-live="polite">
							{Certificates.map((cert) => (
								<div key={cert.id} className="slide">
									<img
										src={assetUrl(cert.img)}
										alt={cert.alt}
										loading="lazy"
										decoding="async"
										sizes="(max-width:600px) 80vw, 50vw"
									/>
								</div>
							))}
						</div>

						<div className="project-descriptions">
							{Certificates.map((cert, idx) => (
								<div key={cert.id} className={`description${idx === 0 ? ' active' : ''}`}>
									<h3>{cert.title}</h3>
									<p>{cert.description}</p>
								</div>
							))}
						</div>
					</div>

					<div className="slider-buttons" role="group" aria-label="Certificate slider controls">
						<button id="prev" aria-label={content.portfolio.slider.prevAria}>
							{content.portfolio.slider.prev}
						</button>
						<button id="next" aria-label={content.portfolio.slider.nextAria}>
							{content.portfolio.slider.next}
						</button>
					</div>
					<div
						className="slider-dots"
						id="slider-dots"
						role="tablist"
						aria-label={content.portfolio.slider.dotsAria}
					/>
					<div id="sr-announcer" className="sr-only" aria-live="polite" aria-atomic="true" />
				</div>
			</div>
		</article>
	);
}

