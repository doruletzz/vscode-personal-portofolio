import React, { useEffect, useState } from 'react';
import { Module } from '../../constants/module';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';

import './ExplorerComponent.css';
import { ModuleAboutExplorerComponent } from './ModuleAboutExplorerComponent';
import { ModuleBlogExplorerComponent } from './ModuleBlogExplorerComponent';
import { ModuleHomeExplorerComponent } from './ModuleHomeExplorerComponent';
import { ModuleProjectsExplorer } from './ModuleProjectsExplorer';
import { ModuleGithubExplorerComponent } from './ModuleGithubExplorerComponent';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { setIsModuleExpanded } from '../../features/module/slice';

type ModuleExplorerComponentProps = {
	module: Module;
};

const ModuleExplorerComponent = ({ module }: ModuleExplorerComponentProps) => {
	if (module === Module.HOME) return <ModuleHomeExplorerComponent />;

	if (module === Module.ABOUT) return <ModuleAboutExplorerComponent />;

	if (module === Module.PROJECTS) return <ModuleProjectsExplorer />;

	if (module === Module.BLOG) return <ModuleBlogExplorerComponent />;

	if (module === Module.GITHUB) return <ModuleGithubExplorerComponent />;

	return <ModuleHomeExplorerComponent />;
};

export const ExplorerComponent = () => {
	const [initial, setInitial] = useState(true);
	const NAV_WIDTH = 64;
	const { width } = useWindowDimensions();
	const dispatch = useAppDispatch();

	const {
		name,
		isExpanded,
		width: totalWidth,
	} = useAppSelector((state) => state.module);
	const [explorerWidth, setExplorerWidth] = useState<number>(
		() => totalWidth
	);

	useEffect(() => {
		setExplorerWidth(isExpanded ? totalWidth : 0);
	}, [isExpanded]);

	useEffect(() => {
		if (width <= 1200 && initial) {
			dispatch(setIsModuleExpanded(false));
			setInitial(false);
		}
	}, [width]);

	const handleBackdropClick = () => {
		dispatch(setIsModuleExpanded(false));
	};

	return (
		<>
			{
				<div
					className='explorer-container'
					style={
						explorerWidth
							? { width: explorerWidth }
							: { border: 0, width: explorerWidth }
					}
				>
					<h4 key={Module[name]} className='explorer-title'>
						{Module[name] ?? 'explorer'}
					</h4>

					<ModuleExplorerComponent module={name} />
				</div>
			}
			{isExpanded && width < 1200 && (
				<div onClick={handleBackdropClick} className='backdrop' />
			)}
		</>
	);
};
