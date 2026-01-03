export default function Home() {
	return (
		<article id="home" className="revealable">
			<div className="about-container">
				<div className="about-text">
					<h2>
						Fari Hafizh
						<br />
						Nugroho
					</h2>
					<p>
						Hello! I&apos;m a Computer Science student at IPB University with a strong passion
						for web development and UI/UX design. I am always eager to learn new technologies
						and collaborate on challenging and innovative projects.
					</p>
					<div className="home-buttons">
						<a
							href="https://cswatch.in/player/76561199317671038"
							target="_blank"
							rel="noopener noreferrer"
						>
							CS2
						</a>
						<a href="#combined-content">Portfolio</a>
						<a href="#" target="_blank" rel="noopener noreferrer">
							Button 3
						</a>
					</div>
				</div>
				<div className="about-image">
					<img src="/assets/profile_pic/midoriya.png" alt="Profile Picture" />
				</div>
			</div>
		</article>
	);
}

