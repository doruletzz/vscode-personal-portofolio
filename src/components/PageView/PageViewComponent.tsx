import React, { Ref, RefObject, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Module } from '../../constants/module';
import { View } from '../../constants/view';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { setModuleName } from '../../features/module/slice';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Button from '../Button';
import TopBar from '../TopBar';

import './PageViewComponent.css';

type PageViewComponentProps = {
	children: React.ReactNode;
};

export const PageViewComponent = ({ children }: PageViewComponentProps) => {
	const NAV_WIDTH = 4;
	const { isExpanded, width: explorerWidth } = useAppSelector(
		(state) => state.module
	);
	const { width } = useWindowDimensions();

	const location = useLocation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const moduleName = location.pathname
			.split('/')[1]
			.toUpperCase() as keyof typeof Module;
		const module = Module[moduleName];
		dispatch(setModuleName(module));
	}, [location.pathname]);

	return (
		<div
			className='page-container'
			style={{
				left: `${
					NAV_WIDTH + (isExpanded && width > 1200 ? explorerWidth : 0)
				}rem`,
			}}
		>
			<TopBar />

			{children}
		</div>
	);
};
