import React, { MouseEvent } from 'react';
import { View } from '../../constants/view';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { setView } from '../../features/view/slice';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { TopBarExplorerItemComponent } from './TopBarExplorerItemComponent';

import { ReactComponent as CodeIcon } from '../../assets/code.svg';
import { ReactComponent as DisplayIcon } from '../../assets/display.svg';

type TopBarButtonIconProps = {
	view: View;
};

const TopBarExplorerItem = TopBarExplorerItemComponent;

const TopBarButtonIcon = ({ view }: TopBarButtonIconProps) => {
	if (view === View.CODE) return <CodeIcon />;

	return <DisplayIcon />;
};

export const TopBarComponent = () => {
	const { view } = useAppSelector((state) => state.view);
	const dispatch = useAppDispatch();

	const handleChangeViewButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		dispatch(setView(view === View.CODE ? View.DISPLAY : View.CODE));
	};

	return (
		<div className='top-bar'>
			<div className='explorer-items-container'>
				<TopBarExplorerItem
					active
					title={'index.html'}
					icon={<CodeIcon />}
					onClick={() => {
						alert('clicked');
					}}
					onClose={() => {
						console.log('hw');
					}}
				/>
				<TopBarExplorerItem
					title={'index.html'}
					icon={<CodeIcon />}
					onClick={() => {
						alert('clicked');
					}}
					onClose={() => {
						console.log('hw');
					}}
				/>
			</div>
			<div className='button-container'>
				<Tooltip position='bottom' title={View[view]}>
					<Button
						onClick={handleChangeViewButtonClick}
						className='change-view'
					>
						<TopBarButtonIcon view={view} />
					</Button>
				</Tooltip>
			</div>
		</div>
	);
};
