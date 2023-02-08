import React from 'react';
import Button from '../../components/Button';

import './AboutPageDisplayComponent.css';

export const AboutPageDisplayComponent = () => {
	const TITLE = 'ABOUT ME';
	const SUBTITLE = "i'm dorletz, a developer building stuff for the web.";
	const CONTENT = `Currently on a mission of combining development with design.
			I strongly believe in putting functionality first, whilst maintaining the upmost user experience.
			I'm Always looking for new projects, so make sure to contact me if you'd like us to work together.
		`;

	const CONTENT_2 = `Your average gym addict, with a love for drawing.
			Always open to new oportunities & experiences,
			from starting my own blog to trying to cook yet another recipe  
			Currently located in Cluj-Napoca, Romania. 
			If you'd like to talk make sure to contact me!
		`;

	const CONTENT_3 = `Your average gym addict, with a love for drawing.
			Always open to new oportunities & experiences,
			from starting my own blog to trying to cook yet another recipe  
			Currently located in Cluj-Napoca, Romania. 
			If you'd like to talk make sure to contact me!
		`;

	const SUBTITLE_2 = 'tools that i use every single day.';

	const BUTTON_PRIMARY = 'GET IN TOUCH !';
	const BUTTON_SECONDARY = 'MY RESUME';

	const FRONTEND =
		'React, Typescript, Javascript, Redux, Html, Css, Sass, MUI, Bootstrap, Axios, Apollo';
	const BACKEND =
		'Node, Express, Java, Spring, MySQL, MongoDB, Mongoose, TypeORM, Hibernate';

	const OTHER = 'Git, Bash, Figma, Adobe Creative Cloud';

	return (
		<div className='about-page-display'>
			<article>
				<h1 className='heading'>{TITLE}</h1>
				<h4 className='subheading'>{SUBTITLE}</h4>
				<p className='content'>{CONTENT_2}</p>
				<p className='content'>{CONTENT}</p>
				<div className='cta-buttons'>
					<Button
						className='cta-primary'
						onClick={() => alert('clicked')}
					>
						{BUTTON_PRIMARY}
					</Button>
					<Button
						className='cta-secondary'
						onClick={() => alert('clicked')}
					>
						{BUTTON_SECONDARY}
					</Button>
				</div>
				<br />
				<h4 className='subheading'>{SUBTITLE_2}</h4>
				<p className='content'>{CONTENT_3}</p>
				<ul>
					<li>Frontend: {FRONTEND}</li>
					<li>Backend: {BACKEND}</li>
					<li>Other: {OTHER}</li>
				</ul>
				<div className='cta-buttons'>
					<Button
						className='cta-primary'
						onClick={() => alert('clicked')}
					>
						{BUTTON_PRIMARY}
					</Button>
				</div>
				<br />
			</article>
		</div>
	);
};
