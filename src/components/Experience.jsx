import { assetUrl } from '../assetUrl';
import { content } from '../content';
import { experiences } from '../data';
import Section from './Section';

/** Inisial organisasi, dipakai kalau entri tidak punya logo. */
function initialsOf(item) {
  if (item.initials) return item.initials;
  return (item.organization || item.event || '')
    .replace(/[()]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function Experience() {
  const { title, intro } = content.sections.experience;

  return (
    <Section id="experience" title={title} intro={intro}>
      <div className="timeline">
        {experiences.map((item) => {
          const hasSubItems = Boolean(item.subItems?.length);

          return (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-marker-dot" />
              </div>

              <div className="timeline-card card">
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
                      {initialsOf(item)}
                    </span>
                  )}
                  <div className="experience-heading-text">
                    <div className="experience-title-row">
                      <h3 className="experience-org">{item.organization}</h3>
                      {item.organizationType ? (
                        <span className="experience-badge">{item.organizationType}</span>
                      ) : null}
                    </div>
                    {item.role ? <p className="experience-role">{item.role}</p> : null}
                  </div>
                </div>

                <p className="experience-meta">{item.meta}</p>
                {item.description ? (
                  <p className="experience-description">{item.description}</p>
                ) : null}

                {hasSubItems ? (
                  <div className="timeline-sublist">
                    {item.subItems.map((sub) => (
                      <div key={sub.id} className="timeline-subitem">
                        <div className="timeline-subitem-line" aria-hidden="true">
                          <span className="timeline-subitem-node" />
                        </div>
                        <div className="timeline-subitem-content">
                          <div className="timeline-subitem-header">
                            {sub.logo ? (
                              <img
                                className="timeline-sub-logo"
                                src={assetUrl(sub.logo)}
                                alt=""
                                loading="lazy"
                                decoding="async"
                              />
                            ) : null}
                            <div>
                              <h4 className="timeline-sub-event">{sub.event}</h4>
                              <p className="timeline-sub-role">{sub.role}</p>
                            </div>
                          </div>
                          <p className="timeline-sub-meta">{sub.meta}</p>
                          <p className="timeline-sub-description">{sub.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
