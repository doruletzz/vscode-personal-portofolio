import React, { useEffect, useState } from 'react';
import { Module } from '../../constants/module';
import { useAppSelector } from '../../features/app/hooks';

import './ExplorerComponent.css';
import { ModuleAboutExplorerComponent } from './ModuleAboutExplorerComponent';
import { ModuleBlogExplorerComponent } from './ModuleBlogExplorerComponent';
import { ModuleHomeExplorerComponent } from './ModuleHomeExplorerComponent';
import { ModuleProjectsExplorer } from './ModuleProjectsExplorer';

type ModuleExplorerComponentProps = {
	module: Module;
};

const ModuleExplorerComponent = ({ module }: ModuleExplorerComponentProps) => {
	if (module === Module.HOME) return <ModuleHomeExplorerComponent />;

	if (module === Module.ABOUT) return <ModuleAboutExplorerComponent />;

	if (module === Module.PROJECTS) return <ModuleProjectsExplorer />;

	if (module === Module.BLOG) return <ModuleBlogExplorerComponent />;

	return <ModuleHomeExplorerComponent />;
};

export const ExplorerComponent = () => {
	const NAV_WIDTH = 64;

	const { name, isExpanded, width } = useAppSelector((state) => state.module);
	const [explorerWidth, setExplorerWidth] = useState<number>(
		() => NAV_WIDTH + width
	);

	useEffect(() => {
		setExplorerWidth(isExpanded ? width : 0);
	}, [isExpanded]);

	return (
		<>
			{isExpanded && (
				<div
					className='explorer-container'
					style={{ width: explorerWidth }}
				>
					<h4 key={Module[name]} className='explorer-title'>
						{Module[name] ?? 'explorer'}
					</h4>

					<ModuleExplorerComponent module={name} />
				</div>
			)}
		</>
	);
};
