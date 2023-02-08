import { useState } from 'react';
import Button from '../Button';
import { ReactComponent as Github } from '../../assets/github.svg';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../features/app/hooks';
import { Module } from '../../constants/module';

type ProjectComponentProps = {
	icon?: ReactComponent;
	title: string;
	slug: string;
	description: string;
	github?: string;
	demo?: string;
};

export const ProjectComponent = ({
	icon,
	title,
	slug,
	github,
	demo,
	description,
}: ProjectComponentProps) => {
	const navigate = useNavigate();
	const { name: moduleName } = useAppSelector((state) => state.module);

	return (
		<Button
			onClick={() =>
				navigate(Module[moduleName].toLocaleLowerCase() + '/' + slug)
			}
			className='explorer-project'
		>
			{icon && <div className='explorer-project-icon'>{icon}</div>}
			<h6 className='explorer-project-title'>{title}</h6>
			<p className='explorer-project-description'>{description}</p>
			{github && (
				<a
					href={github}
					target='_blank'
					className='explorer-project-button'
				>
					{<Github />}
				</a>
			)}
			{demo && (
				<a
					href={github}
					target='_blank'
					className='explorer-project-button'
				>
					{<Github />}
				</a>
			)}
		</Button>
	);
};
