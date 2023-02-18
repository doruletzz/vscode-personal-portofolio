import React, { ReactNode } from 'react';

import './BadgeComponent.css';

type BadgeComponentProps = {
	badgeContent?: string | any;
	vertical?: 'top' | 'bottom';
	horizontal?: 'left' | 'right';
	variant?: 'alert' | 'success' | 'error' | 'warning';
	children: ReactNode;
};

export const BadgeComponent = ({
	badgeContent,
	vertical = 'top',
	horizontal = 'right',
	variant = 'alert',
	children,
}: BadgeComponentProps) => {
	return (
		<div className='badge-container'>
			<div className={`badge ${variant} ${vertical} ${horizontal}`}>
				{badgeContent}
			</div>
			{children}
		</div>
	);
};
