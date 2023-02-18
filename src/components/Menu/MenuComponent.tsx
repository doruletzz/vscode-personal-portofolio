import React, { ReactNode } from 'react';

type MenuComponentProps = {
	children: ReactNode;
};

export const MenuComponent = ({ children }: MenuComponentProps) => {
	return <div className='menu'>{children}</div>;
};
