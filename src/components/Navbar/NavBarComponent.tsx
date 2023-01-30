import React, { MouseEvent, useState } from 'react';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { Link } from 'react-router-dom';
import { Module } from '../../constants/module';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import {
	setIsModuleExpanded,
	setModuleName,
} from '../../features/module/slice';

import './NavBarComponent.css';

type NavItemProps = {
	children: React.ReactNode;
	title: string;
	isSelected: boolean;
};

const NavItem = ({ title, isSelected, children }: NavItemProps) => (
	<Tooltip component='li' title={title}>
		<div className={`nav-item${isSelected ? ' active' : ''}`}>
			{children}
		</div>
	</Tooltip>
);

interface NavItem {
	moduleName: Module;
	title: string;
	icon: ReactComponent;
}

type NavBarComponentProps = {
	items: Array<NavItem>;
};

export const NavBarComponent = ({ items }: NavBarComponentProps) => {
	// const [selected, setSelected] = useState<string | null>(null);

	const { name, isExpanded } = useAppSelector((state) => state.module);
	const dispatch = useAppDispatch();

	const handleClick = (
		e: MouseEvent<HTMLButtonElement, MouseEvent>,
		moduleName: Module
	) => {
		if (moduleName === name) dispatch(setIsModuleExpanded(!isExpanded));
		else dispatch(setModuleName(moduleName));
	};

	return (
		<nav className='nav-container'>
			<ul>
				{items.map(({ moduleName, title, icon }) => (
					<NavItem
						isSelected={name === moduleName}
						key={title}
						title={title}
					>
						<Button onClick={(e) => handleClick(e, moduleName)}>
							{icon}
						</Button>
					</NavItem>
				))}
			</ul>

			<ul>
				{items.map(({ moduleName, title, icon }) => (
					<NavItem
						isSelected={name === moduleName}
						key={title}
						title={title}
					>
						<Button onClick={(e) => handleClick(e, moduleName)}>
							{icon}
						</Button>
					</NavItem>
				))}
			</ul>
		</nav>
	);
};
