import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import PanImage from '../../components/PanImage';
import Tooltip from '../../components/Tooltip';
import { useAppSelector } from '../../features/app/hooks';

import './ProjectsPageDisplayComponent.css';

export const ProjectsPageDisplayComponent = () => {
	const { data } = useAppSelector((state) => state.projects);
	return (
		<div className='projects-page'>
			<div className='heading'>PERSONAL PROJECTS</div>
			<div className='projects'>
				{data.map(({ title, description, slug, icon, imgSrc }) => (
					<Tooltip title={title} position='top' key={slug}>
						<Card className='project'>
							<div className='content'>
								<h6>
									<Link to={slug}>{title}</Link>
								</h6>
								<p>{description}</p>
							</div>
							{imgSrc && (
								<PanImage className='icon' src={imgSrc} />
							)}
						</Card>{' '}
					</Tooltip>
				))}
			</div>
		</div>
	);
};
