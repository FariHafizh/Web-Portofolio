import { content } from '../content';
import { data } from '../data';

export default function Experience() {
	return (
		<article id="experience" className="revealable">
			<h2>{content.sections.experience.title}</h2>
			<div className="experience-list">
				{data.experiences.map((item) => (
					<div key={item.role} className="experience-item">
						<h3>{item.role}</h3>
						<div className="experience-meta">{item.meta}</div>
						<p>{item.description}</p>
						{item.link ? (
							<p>
								<a
									className="experience-link"
									href={item.link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.link.label}
								</a>
							</p>
						) : null}
					</div>
				))}
			</div>
		</article>
	);
}

