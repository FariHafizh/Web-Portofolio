import { content } from '../content';

export default function Navbar() {
	return (
		<header>
			<h1>{content.site.title}</h1>
			<nav role="navigation" aria-label="Main navigation">
				<ul>
					{content.nav.links.map((link) => (
						<li key={link.id}>
							<a href={link.href}>{link.label}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

