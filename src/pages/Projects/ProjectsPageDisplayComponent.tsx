import React, { MouseEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '../../components/Badge';
import Card from '../../components/Card';
import PanImage from '../../components/PanImage';
import Tooltip from '../../components/Tooltip';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';

import './ProjectsPageDisplayComponent.css';
import {
	addExplorerItem,
	focusExplorerItem,
	removeExplorerItem,
} from '../../features/explorer/slice';
import { Module } from '../../constants/module';

export const ProjectsPageDisplayComponent = () => {
	const { data } = useAppSelector((state) => state.projects);
	const dispatch = useAppDispatch();
	const { name: moduleName } = useAppSelector((state) => state.module);
	const navigate = useNavigate();

	const handleClick = (
		pathname: string,
		e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
	) => {
		navigate('/' + pathname);
		dispatch(focusExplorerItem(pathname));
	};

	return (
		<div className='projects-page'>
			<h1 className='heading'>PERSONAL PROJECTS</h1>
			<div className='projects'>
				{data.map(
					({ title, description, slug, badge, imgSrc, icon }) => (
						<Tooltip title={title} position='top' key={slug}>
							<Card className='project'>
								<div className='content'>
									{badge ? (
										<Badge badgeContent={badge}>
											<h6>
												<a
													onClick={(e) => {
														const pathName =
															Module[
																moduleName
															].toLocaleLowerCase() +
															'/' +
															slug;
														handleClick(
															pathName,
															e
														);

														dispatch(
															addExplorerItem({
																path: pathName,
																title: title,
																icon:
																	typeof icon ===
																	'string' ? (
																		<img
																			src={
																				icon
																			}
																		/>
																	) : (
																		icon
																	),
																onClick: (e) =>
																	handleClick(
																		pathName,
																		e
																	),
																onClose: () =>
																	dispatch(
																		removeExplorerItem(
																			pathName
																		)
																	),
															})
														);
													}}
												>
													{title}
												</a>
											</h6>
										</Badge>
									) : (
										<h6>
											<a
												onClick={(e) => {
													const pathName =
														Module[
															moduleName
														].toLocaleLowerCase() +
														'/' +
														slug;
													handleClick(pathName, e);

													dispatch(
														addExplorerItem({
															path: pathName,
															title: title,
															icon:
																typeof icon ===
																'string' ? (
																	<img
																		src={
																			icon
																		}
																	/>
																) : (
																	icon
																),
															onClick: (e) =>
																handleClick(
																	pathName,
																	e
																),
															onClose: () =>
																dispatch(
																	removeExplorerItem(
																		pathName
																	)
																),
														})
													);
												}}
											>
												{title}
											</a>
										</h6>
									)}
									<p>{description}</p>
								</div>
								{imgSrc && (
									<PanImage className='icon' src={imgSrc} />
								)}
							</Card>{' '}
						</Tooltip>
					)
				)}
			</div>
		</div>
	);
};
