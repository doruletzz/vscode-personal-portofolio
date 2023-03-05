import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Tooltip from '../../components/Tooltip';
import { useAppSelector } from '../../features/app/hooks';

import './ProjectsPageDisplayComponent.css';

export const ProjectsPageDisplayComponent = () => {
	const { data } = useAppSelector((state) => state.projects);
	return (
		<div className='projects-page'>
			<h1 className='heading'>PROJECTS I'VE DONE</h1>
			<div className='projects'>
				{data.map(({ title, description, slug, icon }) => (
					<Tooltip title={title} position='top' key={slug}>
						<Card className='project'>
							<div className='content'>
								<h6>
									<Link to={slug}>{title}</Link>
								</h6>
								<p>{description}</p>
							</div>
							<img className='icon' src={icon} />
						</Card>{' '}
					</Tooltip>
				))}
			</div>
		</div>
	);
};
