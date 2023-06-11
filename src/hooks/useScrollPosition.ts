import React, { useState, useEffect, ReactNode, RefObject } from 'react';

const getScrollPosition = (ref?: RefObject<HTMLDivElement>) => {
	if (ref) return ref.current?.scrollTop;

	return window.pageYOffset;
};

export default function useScrollPosition(ref?: RefObject<HTMLDivElement>) {
	const [scrollPosition, setScrollPosition] = useState(() =>
		getScrollPosition()
	);

	useEffect(() => {
		function handleScroll() {
			setScrollPosition(() => getScrollPosition(ref));
		}

		if (!ref) return;
		ref?.current?.addEventListener('scroll', handleScroll);
		return () => {
			ref?.current?.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
}
