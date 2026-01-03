import { content } from '../content';
import { data } from '../data';

export default function Contact() {
	return (
		<article id="contact" className="revealable">
			<h2>{content.sections.contact.title}</h2>
			<ul>
				<li>
					<strong>{data.contactItems.email.label}:</strong>{' '}
					<a href={`mailto:${data.contactItems.email.value}`}>{data.contactItems.email.value}</a>
				</li>
				<li>
					{data.contactItems.instagram.label}: {data.contactItems.instagram.value}
				</li>
				<li>
					{data.contactItems.linkedin.label}:{' '}
					<a
						href={data.contactItems.linkedin.href}
						target="_blank"
						rel="noreferrer"
					>
						{data.contactItems.linkedin.labelValue}
					</a>
				</li>
				<li>
					{data.contactItems.github.label}:{' '}
					<a href={data.contactItems.github.href} target="_blank" rel="noreferrer">
						{data.contactItems.github.labelValue}
					</a>
				</li>
			</ul>
		</article>
	);
}

