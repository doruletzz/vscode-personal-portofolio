import React from 'react';

import './ButtonComponent.css';

type ButtonComponentProps = {
	className?: string;
	style?: React.CSSProperties;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
};

export const ButtonComponent = ({
	children,
	style,
	className,
	onClick,
}: ButtonComponentProps) => {
	return (
		<button
			className={`button ${className ?? ''}`}
			onClick={onClick}
			style={style}
		>
			{children}
		</button>
	);
};
