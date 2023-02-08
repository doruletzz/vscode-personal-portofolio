import React from 'react';

import './TooltipComponent.css';

interface TooltipComponentProps<T extends React.ElementType> {
	component?: T;
	title?: string | boolean;
	position?: 'left' | 'right' | 'top' | 'bottom';
	children: React.ReactNode;
}

export const TooltipComponent = <T extends React.ElementType = 'div'>({
	title,
	component,
	position = 'right',
	children,
}: TooltipComponentProps<T>) => {
	const OverridenComponent = component || 'div';
	return (
		<OverridenComponent className='tooltip-wrapper'>
			{title && <div className={'tooltip ' + position}>{title}</div>}
			{children}
		</OverridenComponent>
	);
};
