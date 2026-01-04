import { content } from '../content';
import { Contact as contactData } from '../data';

export default function Contact() {

  return (
    <article id="contact" className="revealable">
      <h2>{content.sections.contactTitle}</h2>
      <ul>
        {contactData.map((item) => {
          if (item.type === 'email') {
            return (
              <li key={item.id}>
                <strong>{item.label}:</strong> <a href={item.href}>{item.value}</a>
              </li>
            );
          }

          if (item.href) {
            return (
              <li key={item.id}>
                {item.label}:{' '}
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </li>
            );
          }

          return (
            <li key={item.id}>
              {item.label}: {item.value}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

