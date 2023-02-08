import React, { MouseEvent, useState } from 'react';
import { View } from '../../constants/view';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { setView } from '../../features/view/slice';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { TopBarExplorerItemComponent } from './TopBarExplorerItemComponent';

import { ReactComponent as CodeIcon } from '../../assets/code.svg';
import { ReactComponent as DisplayIcon } from '../../assets/display.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import Menu from '../Menu';

import './TopBarComponent.css';

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

	const [showSettingsMenu, setShowSettingsMenu] = useState<boolean>(false);

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
				<Tooltip
					position='bottom'
					title={!showSettingsMenu && 'more...'}
				>
					<Button
						onClick={() => setShowSettingsMenu((prev) => !prev)}
						className='change-view'
					>
						<SettingsIcon />
					</Button>
					{showSettingsMenu && (
						<Menu>
							<div>aaa</div>
						</Menu>
					)}
				</Tooltip>
			</div>
		</div>
	);
};
