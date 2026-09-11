import { useRef, useState } from 'react';

import { assetUrl } from '../assetUrl';
import { content } from '../content';
import { certificates, projects, techStack } from '../data';
import CertificateSlider from './CertificateSlider';
import Section from './Section';

const TABS = [
  { id: 'projects', label: content.portfolio.tabs.projects },
  { id: 'certificates', label: content.portfolio.tabs.certificates },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const tabRefs = useRef([]);
  const { title, intro } = content.sections.portfolio;
  const { techStack: techStackContent, panels, project: projectLabels } = content.portfolio;

  // Panah kiri/kanan memindah tab, sesuai pola tab standar (WAI-ARIA).
  function handleTabKeyDown(event, currentIndex) {
    const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (offset === 0) return;

    event.preventDefault();
    const nextIndex = (currentIndex + offset + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <Section id="portfolio" title={title} intro={intro}>
      {/* 1. Tech Stack (Display Only) */}
      <div className="portfolio-stack-section">
        <div className="portfolio-subheading">
          <h3 className="portfolio-subtitle">{techStackContent.title}</h3>
          <p className="portfolio-subintro">{techStackContent.intro}</p>
        </div>

        <ul className="stack-grid stack-display-only" aria-label={techStackContent.title}>
          {techStack.map((tool) => (
            <li key={tool.id} className="stack-item">
              <img
                src={assetUrl(tool.img)}
                alt={`${tool.label} logo`}
                loading="lazy"
                decoding="async"
              />
              <span>{tool.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Projects & Certificates (Tabbed) */}
      <div className="portfolio-tabs-section">
        <div className="tabs" role="tablist" aria-label="Projects and certificates">
          {TABS.map((tab, tabIndex) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                ref={(element) => {
                  tabRefs.current[tabIndex] = element;
                }}
                className={isActive ? 'tab is-active' : 'tab'}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, tabIndex)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="panel-wrapper">
          <TabPanel id="projects" activeTab={activeTab}>
            <h3 className="panel-title">{panels.projectsTitle}</h3>
            <p className="panel-intro">{panels.projectsIntro}</p>

            <ul className="card-grid">
              {projects.map((project) => (
                <li key={project.id} className="card project-card">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>

                  {project.technologies.length > 0 ? (
                    <ul className="tag-list">
                      {project.technologies.map((technology) => (
                        <li key={technology} className="tag">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="project-links">
                    {project.liveDemo ? (
                      <a
                        className="text-link"
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectLabels.liveDemo}
                      </a>
                    ) : null}
                    {project.sourceCode ? (
                      <a
                        className="text-link"
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectLabels.sourceCode}
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </TabPanel>

          <TabPanel id="certificates" activeTab={activeTab}>
            <h3 className="panel-title">{panels.certificatesTitle}</h3>
            <p className="panel-intro">{panels.certificatesIntro}</p>
            <CertificateSlider items={certificates} />
          </TabPanel>
        </div>
      </div>
    </Section>
  );
}

function TabPanel({ id, activeTab, children }) {
  const isActive = id === activeTab;

  return (
    <div
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className="panel"
      hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
    >
      {children}
    </div>
  );
}
