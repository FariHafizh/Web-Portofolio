import { assetUrl } from '../assetUrl';
import { content } from '../content';
import { data } from '../data';

export default function Home() {
	return (
		<article id="home" className="revealable">
			<div className="about-container">
				<div className="about-text">
					<h2>
						{content.home.nameLines[0]}
						<br />
						{content.home.nameLines[1]}
					</h2>
					<p>{content.home.bio}</p>
					<div className="home-buttons">
						{data.homeButtons.map((btn) => (
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
						alt={content.home.profileImageAlt}
					/>
				</div>
			</div>
		</article>
	);
}

