import React, { MouseEventHandler, ReactNode } from 'react';

import './AnnouncementBarComponent.css';
import Button from '../Button';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

type AnnouncementBarComponentProps = {
	children: ReactNode;
	onClose: MouseEventHandler;
	onClick: MouseEventHandler;
};

export const AnnouncementBarComponent = ({
	children,
	onClick,
	onClose,
}: AnnouncementBarComponentProps) => {
	return (
		<div className='announcement-bar'>
			<div onClick={onClick}>{children}</div>
			<Button id='announcement-bar-close' type='text' onClick={onClose}>
				<CloseIcon />
			</Button>
		</div>
	);
};
