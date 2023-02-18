import React from 'react';

import './ProgressComponent.css';

export const ProgressComponent = () => {
	return (
		<div className='progress-container'>
			<svg viewBox='20 20 48 48' xmlns='http://www.w3.org/2000/svg'>
				<circle
					stroke='current'
					fill='transparent'
					strokeWidth='5'
					cx='44'
					cy='44'
					r='20.2'
				/>
			</svg>
		</div>
	);
};
