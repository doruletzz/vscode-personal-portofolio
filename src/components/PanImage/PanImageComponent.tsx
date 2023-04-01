import React from 'react';

import './PanImageComponent.css';

type PanImageComponentProps = {
	src: string;
	className: string;
};

export const PanImageComponent = ({
	src,
	className,
}: PanImageComponentProps) => {
	return (
		<div
			style={{
				backgroundImage: `url("${src}")`,
				animationDelay: `-${Math.floor(Math.random() * 20)}s`,
			}}
			className={`pan-img ${className ?? ''}`}
		/>
	);
};
