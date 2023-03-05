import React from 'react';

import './ButtonComponent.css';

type ButtonComponentProps = {
	id: string;
	disabled?: boolean;
	type?: 'primary' | 'text' | 'secondary';
	className?: string;
	style?: React.CSSProperties;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
};

export const ButtonComponent = ({
	id,
	disabled = false,
	type = 'primary',
	children,
	style,
	className,
	onClick,
}: ButtonComponentProps) => {
	return (
		<button
			disabled={disabled}
			aria-label={id}
			className={`button ${type} ${className ?? ''}`}
			onClick={onClick}
			style={style}
		>
			{children}
		</button>
	);
};
