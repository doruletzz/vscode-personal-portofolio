import { MouseEvent, ReactNode, useState } from 'react';
import Button from '../Button';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Demo } from '../../assets/external.svg';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { Module } from '../../constants/module';
import Tooltip from '../Tooltip';
import {
	addExplorerItem,
	focusExplorerItem,
	removeExplorerItem,
} from '../../features/explorer/slice';

type ProjectComponentProps = {
	icon?: string;
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
	const dispatch = useAppDispatch();
	const { name: moduleName } = useAppSelector((state) => state.module);

	const [pathName] = useState(
		() => Module[moduleName].toLocaleLowerCase() + '/' + slug
	);

	const handleProjectClick = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(pathName);
		dispatch(focusExplorerItem(pathName));
	};

	return (
		<Button
			id='project'
			type='text'
			style={{ paddingLeft: `${2 * 0.75}rem` }}
			onClick={(e) => {
				dispatch(
					addExplorerItem({
						path: pathName,
						title: title,
						icon:
							typeof icon === 'string' ? (
								<img loading='lazy' src={icon} />
							) : (
								icon
							),
						onClick: () => handleProjectClick(e),
						onClose: () => dispatch(removeExplorerItem(pathName)),
					})
				);
				handleProjectClick(e);
			}}
			className='explorer-project'
		>
			{icon && (
				<div className='explorer-project-icon'>
					<img loading='lazy' src={icon} />
				</div>
			)}
			<h6 className='explorer-project-title'>{title}</h6>
			<p className='explorer-project-description'>{description}</p>
			{github && (
				<Tooltip position='left' title='GITHUB'>
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
				<Tooltip position='left' title='DEMO'>
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
