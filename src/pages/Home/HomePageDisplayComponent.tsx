import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import { useAppSelector } from '../../features/app/hooks';

import './HomePageDisplayComponent.css';

export const HomePageDisplayComponent = () => {
	const navigate = useNavigate();

	const HEADING = 'DOR-LETZ,';
	const SUB_HEADING_1 = "Hello world! I'm";
	const SUB_HEADING_2 =
		'a frontend developer based in Cluj-Napoca, Romania, with the mission of crafting awesome stuff for the web';

	const CTA_PRIMARY = 'GET IN TOUCH';
	const CTA_SECONDARY = 'MY PROJECTS';

	return (
		<div className='home-page-display'>
			<p className='sub-heading'>{SUB_HEADING_1}</p>
			<h1 className='heading'>{HEADING}</h1>
			<p className='sub-heading'>{SUB_HEADING_2}</p>
			<br />
			<div className='cta-buttons'>
				<Button
					id={CTA_PRIMARY}
					className='cta-primary'
					onClick={() => navigate('/contact')}
				>
					{CTA_PRIMARY}
				</Button>
				<Button
					id={CTA_SECONDARY}
					type='text'
					className='cta-secondary'
					onClick={() => navigate('/projects')}
				>
					{CTA_SECONDARY}
				</Button>
			</div>
		</div>
	);
};
