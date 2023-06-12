import React, { useEffect, useRef, useState } from 'react';

import './ProjectsPageDisplayProjectComponent.css';
import dorletzSrc from '../../assets/kite-surf-cover.png';
import PanImage from '../../components/PanImage';
import useScrollPosition from '../../hooks/useScrollPosition';
import Button from '../../components/Button';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../features/app/hooks';
import { Project } from '../../types/projects';
import { Module } from '../../constants/module';

export const ProjectsPageKiteSurfComponent = () => {
	const { slug } = useParams();

	const { data } = useAppSelector((state) => state.projects);
	const [project, setProject] = useState<Project>();

	const containerRef = useRef<HTMLDivElement>(null);
	const scrollPosition = useScrollPosition(containerRef);

	const [scrollPercent, setScrollPercent] = useState(0);

	useEffect(() => {
		if (scrollPosition && containerRef && containerRef.current)
			setScrollPercent(
				scrollPosition /
					(containerRef.current.scrollHeight -
						containerRef.current.clientHeight)
			);
	}, [scrollPosition]);

	useEffect(() => {
		setProject(data.find((p) => p.slug === slug));
	}, [slug]);

	return (
		<div ref={containerRef} className='projects-page-container kite-surf'>
			{project?.imgSrc && (
				<div key={slug} className='project-image-container'>
					<PanImage
						percent={scrollPercent}
						className='project-image'
						src={project.imgSrc}
					/>
				</div>
			)}
			<article>
				{project?.title && <h1>{project.title}</h1>}
				<p>
					<Link to='/projects'>{'Go Back'}</Link>
					{project?.github && (
						<>
							{' | '}
							<a type='_blank' href={project.github}>
								Github
							</a>{' '}
						</>
					)}
					{project?.demo && (
						<>
							{' | '}
							<a type='_blank' href={project.demo}>
								Demo
							</a>{' '}
						</>
					)}
				</p>
				{project?.content}
			</article>
		</div>
	);
};
