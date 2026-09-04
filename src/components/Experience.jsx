import { assetUrl } from '../assetUrl';
import { content } from '../content';
import { experiences } from '../data';
import Section from './Section';

/** Inisial organisasi, dipakai kalau entri tidak punya logo. */
function initialsOf(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function Experience() {
  const { title, intro } = content.sections.experience;

  return (
    <Section id="experience" title={title} intro={intro}>
      <ul className="card-grid">
        {experiences.map((item) => (
          <li key={item.id} className="card experience-card">
            <div className="experience-header">
              {item.logo ? (
                <img
                  className="experience-logo"
                  src={assetUrl(item.logo)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="experience-logo experience-logo-fallback" aria-hidden="true">
                  {initialsOf(item.organization)}
                </span>
              )}
              <div>
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-org">{item.organization}</p>
              </div>
            </div>
            <p className="experience-meta">{item.meta}</p>
            <p className="experience-description">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
