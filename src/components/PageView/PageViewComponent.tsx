import React from 'react';
import { View } from '../../constants/view';
import { useAppSelector } from '../../features/app/hooks';
import Button from '../Button';
import TopBar from '../TopBar';

import './PageViewComponent.css';

type PageViewComponentProps = {
	children: React.ReactNode;
};

export const PageViewComponent = ({ children }: PageViewComponentProps) => {
	const NAV_WIDTH = 64;
	const { isExpanded, width } = useAppSelector((state) => state.module);

	return (
		<div
			className='page-container'
			style={{
				left: NAV_WIDTH + (isExpanded ? width : 0),
			}}
		>
			<TopBar />

			{children}
		</div>
	);
};
