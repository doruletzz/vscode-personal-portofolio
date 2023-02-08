import React from 'react';
import Button from '../../components/Button';
import { useAppSelector } from '../../features/app/hooks';

import './HomePageDisplayComponent.css';

export const HomePageDisplayComponent = () => {
	const HEADING = 'DOR-LETZ,';
	const SUB_HEADING_1 = "Hello World! i'm";
	const SUB_HEADING_2 =
		'a frontend developer based in cluj-napoca, romania with the mission of creating awesome stuff for the web ';

	const CTA_PRIMARY = 'GET IN TOUCH';
	const CTA_SECONDARY = 'CHECK OUT MY PROJECTS';

	return (
		<div className='home-page-display'>
			<p className='sub-heading'>{SUB_HEADING_1}</p>
			<h1 className='heading'>{HEADING}</h1>
			<p className='sub-heading'>{SUB_HEADING_2}</p>
			<br />
			<div className='cta-buttons'>
				<Button
					className='cta-primary'
					onClick={() => console.log('contact')}
				>
					{CTA_PRIMARY}
				</Button>
				<Button
					className='cta-secondary'
					onClick={() => console.log('contact')}
				>
					{CTA_SECONDARY}
				</Button>
			</div>
		</div>
	);
};
