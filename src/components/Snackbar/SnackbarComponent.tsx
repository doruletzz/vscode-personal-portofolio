import React, { MouseEventHandler, ReactNode } from 'react';

import './SnackbarComponent.css';
import Button from '../Button';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import Card from '../Card';

type SnackbarComponentProps = {
	title?: string;
	onClose?: MouseEventHandler;
	children: ReactNode;
};

export const SnackbarComponent = ({
	title,
	onClose,
	children,
}: SnackbarComponentProps) => {
	return (
		<Card className='snackbar-container'>
			<div className='snackbar-header'>
				{title && <h6 className='snackbar-title'>{title}</h6>}
				{onClose && (
					<Button
						type='text'
						onClick={onClose}
						id='close-btn'
						className='snackbar-title'
					>
						<CloseIcon />
					</Button>
				)}
			</div>
			<div className='snackbar-content'>{children}</div>
		</Card>
	);
};
