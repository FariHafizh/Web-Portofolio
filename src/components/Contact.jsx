import { content } from '../content';
import { contacts } from '../data';
import ContactIcon from './ContactIcon';
import Section from './Section';

export default function Contact() {
  const { title, intro } = content.sections.contact;

  return (
    <Section id="contact" title={title} intro={intro}>
      <ul className="contact-list">
        {contacts.map((item) => {
          const isExternal = item.href.startsWith('http');

          return (
            <li key={item.id} className="contact-item">
              <ContactIcon type={item.type} />
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  className="text-link"
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
