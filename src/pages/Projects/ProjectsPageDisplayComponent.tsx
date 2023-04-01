import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../components/Badge';
import Card from '../../components/Card';
import PanImage from '../../components/PanImage';
import Tooltip from '../../components/Tooltip';
import { useAppSelector } from '../../features/app/hooks';

import './ProjectsPageDisplayComponent.css';

export const ProjectsPageDisplayComponent = () => {
	const { data } = useAppSelector((state) => state.projects);
	return (
		<div className='projects-page'>
			<h1 className='heading'>PERSONAL PROJECTS</h1>
			<div className='projects'>
				{data.map(({ title, description, slug, badge, imgSrc }) => (
					<Tooltip title={title} position='top' key={slug}>
						<Card className='project'>
							<div className='content'>
								{badge ? (
									<Badge badgeContent={badge}>
										<h6>
											<Link to={slug}>{title}</Link>
										</h6>
									</Badge>
								) : (
									<h6>
										<Link to={slug}>{title}</Link>
									</h6>
								)}
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
