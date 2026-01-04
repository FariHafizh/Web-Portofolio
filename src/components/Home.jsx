import { assetUrl } from '../assetUrl';
import { content } from '../content';
import { HomeButtons } from '../data';

export default function Home() {
	const name = content.homeData.find((item) => 'firstName' in item && 'lastName' in item);
	const bio = content.homeData.find((item) => item.id === 4 && 'text' in item);
	const altObj = content.homeData.find((item) => 'profileImageAlt' in item);

	return (
		<article id="home" className="revealable">
			<div className="about-container">
				<div className="about-text">
					<h2>
						{name?.firstName ?? ''}
						<br />
						{name?.lastName ?? ''}
					</h2>
					<p>{bio?.text ?? ''}</p>
					<div className="home-buttons">
						{HomeButtons.map((btn) => (
							<a
								key={btn.label}
								href={btn.href}
								target={btn.external ? '_blank' : undefined}
								rel={btn.external ? 'noopener noreferrer' : undefined}
							>
								{btn.label}
							</a>
						))}
					</div>
				</div>
				<div className="about-image">
					<img
						src={assetUrl('assets/profile_pic/midoriya.png')}
						alt={altObj?.profileImageAlt ?? 'Profile Picture'}
					/>
				</div>
			</div>
		</article>
	);
}

