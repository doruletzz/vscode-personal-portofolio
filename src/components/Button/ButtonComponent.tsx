import React from 'react';

import './ButtonComponent.css';

type ButtonComponentProps = {
	id: string;
	className?: string;
	style?: React.CSSProperties;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
};

export const ButtonComponent = ({
	id,
	children,
	style,
	className,
	onClick,
}: ButtonComponentProps) => {
	return (
		<button
			aria-label={id}
			className={`button ${className ?? ''}`}
			onClick={onClick}
			style={style}
		>
			{children}
		</button>
	);
};
