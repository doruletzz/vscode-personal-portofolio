import React, { MouseEvent, ReactNode } from 'react';
import Button from '../Button';

import './TopBarExplorerItemComponent.css';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

type TopBarExplorerItemComponentProps = {
	active?: boolean;
	icon?: ReactNode;
	title: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
	onClose: (e: MouseEvent<HTMLButtonElement>) => void;
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
			<Button
				type='text'
				id='close'
				className='explorer-item-close'
				onClick={onClose}
			>
				<CloseIcon />
			</Button>
			<Button
				type='text'
				id={title}
				className='explorer-item'
				onClick={onClick}
			>
				{icon}
				{title}
			</Button>
		</div>
	);
};
