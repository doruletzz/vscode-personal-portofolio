import React, { useState } from 'react';

import './PanImageComponent.css';

type PanImageComponentProps = {
	src: string;
	className: string;
	percent?: number;
};

export const PanImageComponent = ({
	percent,
	src,
	className,
}: PanImageComponentProps) => {
	const [randDelay] = useState(() => Math.floor(Math.random() * 20));

	return (
		<div
			style={{
				backgroundImage: `url("${src}")`,
				animationDuration: percent ? '60s' : '20s',
				animationDelay: `-${
					percent !== undefined ? percent * 10 : randDelay
				}s`,
			}}
			className={`pan-img ${className ?? ''}`}
		/>
	);
};
