import React from 'react';

import './CardComponent.css';

type CardComponentProps<T extends React.ElementType> = {
	component?: T;
	title?: string;
	subtitle?: string;
	className?: string;
	children: React.ReactNode;
};

export const CardComponent = <T extends React.ElementType = 'div'>({
	className,
	component,
	title,
	subtitle,
	children,
}: CardComponentProps<T>) => {
	const OverridenComponent = component || 'div';
	return (
		<OverridenComponent className={'card ' + (className ?? '')}>
			{title && <div className='card-title'>{title}</div>}
			{subtitle && <div className='card-subtitle'>{subtitle}</div>}
			<div className='card-content'>{children}</div>
		</OverridenComponent>
	);
};
