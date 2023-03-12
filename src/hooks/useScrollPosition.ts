import React, { useState, useEffect, ReactNode, RefObject } from 'react';

const getScrollPosition = () => {
	const position = window.pageYOffset;

	return position;
};

export default function useScrollPosition(ref?: RefObject<HTMLDivElement>) {
	const [scrollPosition, setScrollPosition] = useState(() =>
		getScrollPosition()
	);

	useEffect(() => {
		function handleScroll() {
			setScrollPosition(getScrollPosition());
			console.log('changing...');
		}

		if (!ref) return;
		ref?.current?.addEventListener('scroll', handleScroll);
		return () => {
			ref?.current?.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
}
