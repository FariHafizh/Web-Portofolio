import { content } from '../content';
import { Experience as experienceData } from '../data';

export default function Experience() {

  return (
    <article id="experience" className="revealable">
      <h2>{content.sections.experienceTitle}</h2>
      <div className="experience-list">
        {experienceData.map((item) => (
          <div key={item.id} className="experience-item">
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

