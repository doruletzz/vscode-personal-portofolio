import React, { MouseEvent, ReactNode, useEffect, useState } from 'react';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { Module } from '../../constants/module';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { useNavigate } from 'react-router';
import {
	setIsModuleExpanded,
	setModuleName,
} from '../../features/module/slice';

import './NavBarComponent.css';
import Badge from '../Badge';

type NavItemProps = {
	children: React.ReactNode;
	title: string;
	isSelected: boolean;
	badge?: boolean;
};

const NavItem = ({
	title,
	badge = false,
	isSelected,
	children,
}: NavItemProps) => {
	const [showBadge, setShowBadge] = useState(false);

	useEffect(() => {
		setShowBadge(badge);
	}, [badge]);

	useEffect(() => {
		if (isSelected) setShowBadge(false);
	}, [isSelected]);

	const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
		setShowBadge(false);
	};

	return (
		<Tooltip component='li' title={title}>
			{showBadge ? (
				<Badge>
					<div className={`nav-item${isSelected ? ' active' : ''}`}>
						{children}
					</div>
				</Badge>
			) : (
				<div className={`nav-item${isSelected ? ' active' : ''}`}>
					{children}
				</div>
			)}
		</Tooltip>
	);
};

interface NavItem {
	moduleName: Module;
	title: string;
	icon: ReactNode;
	badge?: boolean;
}

type NavBarComponentProps = {
	items: Array<NavItem>;
};

export const NavBarComponent = ({ items }: NavBarComponentProps) => {
	// const [selected, setSelected] = useState<string | null>(null);

	const navigate = useNavigate();

	const { name, isExpanded } = useAppSelector((state) => state.module);
	const dispatch = useAppDispatch();

	const handleClick = (
		e: MouseEvent<HTMLButtonElement>,
		moduleName: Module
	) => {
		if (moduleName === name) dispatch(setIsModuleExpanded(!isExpanded));
		else {
			dispatch(setModuleName(moduleName));
			navigate(Module[moduleName].toLowerCase());
		}
	};

	return (
		<nav className='nav-container'>
			<ul>
				{items
					.slice(0, items.length - 2)
					.map(({ moduleName, title, icon, badge }) => (
						<NavItem
							isSelected={name === moduleName}
							key={title}
							title={title}
							badge={badge}
						>
							<Button
								type='text'
								id={Module[moduleName].toString().toLowerCase()}
								onClick={(e) => handleClick(e, moduleName)}
							>
								{icon}
							</Button>
						</NavItem>
					))}
			</ul>

			<ul>
				{items
					.slice(items.length - 2, items.length)
					.map(({ moduleName, title, icon, badge }) => (
						<NavItem
							isSelected={name === moduleName}
							key={title}
							title={title}
							badge={badge}
						>
							<Button
								type='text'
								id={Module[moduleName].toString().toLowerCase()}
								onClick={(e) => handleClick(e, moduleName)}
							>
								{icon}
							</Button>
						</NavItem>
					))}
			</ul>
		</nav>
	);
};
