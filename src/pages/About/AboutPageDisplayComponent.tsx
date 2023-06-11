import React from 'react';
import Button from '../../components/Button';

import './AboutPageDisplayComponent.css';

import dorletzSrc from '../../assets/profile-pic.png';

export const AboutPageDisplayComponent = () => {
	const TITLE = 'ABOUT ME';
	const SUBTITLE = "i'm dorletz, a developer building stuff for the web.";

	const CONTENT_3 = `If you're interested in exploring how we can work together, please don't hesitate to contact me. I am excited to learn about new opportunities and experiences that will allow me to continue growing and developing my skills.
		`;

	const CONTENT_4 = `As a programmer, I am proficient in a wide range of programming tools, frameworks, and languages. My extensive knowledge and experience enable me to develop robust and scalable software solutions that meet the needs of diverse clients and end-users.
		`;

	const CONTENT_5 = `Furthermore, I stay up-to-date with emerging technologies and trends in the programming industry to ensure that my skills and knowledge remain relevant and adaptable to changing requirements.
	`;

	const CONTENT = `A versatile individual based in Cluj-Napoca, Romania, with a passion for both fitness
			and artistic expression. With a keen eye for design and a love for problem-solving, I am constantly exploring
			ways to combine my interests in development and design.
		`;

	const CONTENT_2 = `My expertise lies in creating functional and visually appealing web solutions that
			prioritize the user experience. As a firm believer in the power of collaboration, I am always 
			eager to take on new projects and work with others to achieve shared goals.
		`;

	const SUBTITLE_2 = 'tools that i use every single day.';

	const BUTTON_PRIMARY = 'MY RESUME';
	const BUTTON_SECONDARY = "LET'S WORK TOGETHER";

	const FRONTEND =
		'React, Typescript, Javascript, Redux, Html, Css, Sass, MUI, Bootstrap, Axios, Apollo';
	const BACKEND =
		'Node, Express, Java, Spring, MySQL, MongoDB, Mongoose, TypeORM, Hibernate';

	const OTHER = 'Git, Bash, Figma, Adobe Creative Cloud';

	return (
		<div className='about-page-display'>
			<article>
				<div className='profile-image-container'>
					<img
						loading='lazy'
						className='profile-image'
						src={dorletzSrc}
					/>
				</div>
				<h1 className='heading'>{TITLE}</h1>
				<h4 className='subheading'>{SUBTITLE}</h4>
				<p className='content'>{CONTENT}</p>
				<p className='content'>{CONTENT_2}</p>
				<p className='content'>{CONTENT_3}</p>
				<br />
				<h4 className='subheading'>{SUBTITLE_2}</h4>
				<p className='content'>{CONTENT_4}</p>
				<p className='content'>{CONTENT_5}</p>
				<ul>
					<li>Frontend: {FRONTEND}</li>
					<li>Backend: {BACKEND}</li>
					<li>Other: {OTHER}</li>
				</ul>
				<br />
				<div className='cta-buttons'>
					<Button
						id={BUTTON_PRIMARY}
						className='cta-primary'
						onClick={() => alert('clicked')}
					>
						{BUTTON_PRIMARY}
					</Button>
					<Button
						type='text'
						id={BUTTON_SECONDARY}
						className='cta-secondary'
						onClick={() => alert('clicked')}
					>
						{BUTTON_SECONDARY}
					</Button>
				</div>
			</article>
		</div>
	);
};
