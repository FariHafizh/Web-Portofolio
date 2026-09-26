import { assetUrl } from '../assetUrl';
import { content } from '../content';
import { homeButtons } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const revealRef = useScrollReveal();
  const { greeting, firstName, lastName, roles, bio, profileImage, profileImageAlt } =
    content.home;
  const hasImage = Boolean(profileImage);

  return (
    <section
      id="home"
      ref={revealRef}
      className={`section hero revealable ${hasImage ? 'has-image' : 'no-image'}`}
    >
      <div className="hero-text">
        <p className="hero-greeting">{greeting}</p>
        <h1 className="hero-name">
          {firstName}
          <br />
          {lastName}
        </h1>
        <p className="hero-roles">{roles.join(' · ')}</p>
        <p className="hero-bio">{bio}</p>

        <div className="button-row">
          {homeButtons.map((button) => (
            <a
              key={button.id}
              className="button"
              href={button.href}
              target={button.external ? '_blank' : undefined}
              rel={button.external ? 'noopener noreferrer' : undefined}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>

      {hasImage ? (
        <div className="hero-image">
          <img src={assetUrl(profileImage)} alt={profileImageAlt} />
        </div>
      ) : null}
    </section>
  );
}
