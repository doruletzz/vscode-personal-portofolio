import React, {
	MouseEvent,
	ReactNode,
	RefObject,
	useEffect,
	useState,
} from 'react';
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
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useScrollPosition from '../../hooks/useScrollPosition';

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
	pageViewRef: RefObject<unknown>;
	items: Array<NavItem>;
};

export const NavBarComponent = ({
	pageViewRef,
	items,
}: NavBarComponentProps) => {
	// const [selected, setSelected] = useState<string | null>(null);

	const { width } = useWindowDimensions();

	const [isScrollDown, setIsScrollDown] = useState(false);

	const navigate = useNavigate();

	const { name, isExpanded, containerRef } = useAppSelector(
		(state) => state.module
	);
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

	const scrollPosition = useScrollPosition(containerRef);

	const [localScrollPosition, setLocalScrollPosition] = useState(
		() => scrollPosition
	);

	useEffect(() => {
		setLocalScrollPosition((prev) => {
			if (prev < scrollPosition) setIsScrollDown(true);
			return scrollPosition;
		});

		console.log(scrollPosition);
	}, [scrollPosition]);

	useEffect(() => {
		console.log(isScrollDown ? 'down' : 'up');
	}, [isScrollDown]);

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
