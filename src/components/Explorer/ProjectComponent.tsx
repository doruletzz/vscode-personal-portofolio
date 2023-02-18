import { ReactNode, useState } from 'react';
import Button from '../Button';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Demo } from '../../assets/external.svg';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../features/app/hooks';
import { Module } from '../../constants/module';
import Tooltip from '../Tooltip';

type ProjectComponentProps = {
	icon?: ReactNode;
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
			id='project'
			style={{ paddingLeft: `${2 * 0.75}rem` }}
			onClick={() =>
				navigate(Module[moduleName].toLocaleLowerCase() + '/' + slug)
			}
			className='explorer-project'
		>
			{icon && <div className='explorer-project-icon'>{icon}</div>}
			<h6 className='explorer-project-title'>{title}</h6>
			<p className='explorer-project-description'>{description}</p>
			{github && (
				<Tooltip title='GITHUB'>
					<a
						href={github}
						target='_blank'
						className='explorer-project-button'
					>
						{<Github />}
					</a>
				</Tooltip>
			)}
			{demo && (
				<Tooltip title='DEMO'>
					<a
						href={demo}
						target='_blank'
						className='explorer-project-button'
					>
						{<Demo />}
					</a>
				</Tooltip>
			)}
		</Button>
	);
};
