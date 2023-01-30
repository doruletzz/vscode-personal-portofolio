import React, { MouseEvent } from 'react';
import Button from '../Button';

import './TopBarExplorerItemComponent.css';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

type TopBarExplorerItemComponentProps = {
	active?: boolean;
	icon?: ReactComponent;
	title: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => {};
	onClose: (e: MouseEvent<HTMLButtonElement>) => {};
};

export const TopBarExplorerItemComponent = ({
	active = false,
	icon,
	title,
	onClick,
	onClose,
}: TopBarExplorerItemComponentProps) => {
	return (
		<div
			className={`topbar-explorer-item-container ${
				!!active ? ' active' : ''
			}`}
		>
			<Button className='explorer-item-close' onClick={onClose}>
				<CloseIcon />
			</Button>
			<Button className='explorer-item' onClick={onClick}>
				{icon}
				{title}
			</Button>
		</div>
	);
};
