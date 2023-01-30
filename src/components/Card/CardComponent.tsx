import React from 'react';

type CardComponentProps = {
	title?: string;
	subtitle?: string;
	className?: string;
	children: React.ReactNode;
};

export const CardComponent = ({
	className,
	title,
	subtitle,
	children,
}: CardComponentProps) => {
	return (
		<div className={'card' + className ?? ''}>
			{title && <div className='card-title'>{title}</div>}
			<div className='card-subtitle'>{subtitle}</div>
			<div className='card-content'>{children}</div>
		</div>
	);
};
