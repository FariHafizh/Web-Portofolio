import { content } from '../content';
import { useActiveSection } from '../hooks/useActiveSection';

// Dihitung sekali di luar komponen supaya referensinya stabil untuk useActiveSection.
const SECTION_IDS = content.nav.map((link) => link.href.replace('#', ''));

export default function Navbar() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <span className="brand-name">{content.site.name}</span>
        <span className="brand-tagline">{content.site.tagline}</span>
      </a>

      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {content.nav.map((link) => {
            const isActive = link.href === `#${activeId}`;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? 'nav-link is-active' : 'nav-link'}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
