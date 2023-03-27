import React, { MouseEvent, useState } from 'react';
import { View } from '../../constants/view';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { setIsInitial, setView } from '../../features/view/slice';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { TopBarExplorerItemComponent } from './TopBarExplorerItemComponent';

import { ReactComponent as CodeIcon } from '../../assets/code.svg';
import { ReactComponent as ClickIcon } from '../../assets/click-2.svg';
import { ReactComponent as DisplayIcon } from '../../assets/display.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import Menu from '../Menu';

import './TopBarComponent.css';
import Badge from '../Badge';
import { useNavigate } from 'react-router';
import { Module } from '../../constants/module';
import { setExplorerItems } from '../../features/explorer/slice';

type TopBarButtonIconProps = {
	view: View;
};

const TopBarExplorerItem = TopBarExplorerItemComponent;

const TopBarButtonIcon = ({ view }: TopBarButtonIconProps) => {
	if (view === View.CODE) return <CodeIcon />;

	return <DisplayIcon />;
};

export const TopBarComponent = () => {
	const navigate = useNavigate();
	const { view } = useAppSelector((state) => state.view);
	const { focused, data } = useAppSelector((state) => state.explorer);
	const dispatch = useAppDispatch();

	const [showSettingsMenu, setShowSettingsMenu] = useState<boolean>(false);

	const handleChangeViewButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		dispatch(setView(view === View.CODE ? View.DISPLAY : View.CODE));
	};

	return (
		<>
			<div className='top-bar-anchor' />
			<div className={`top-bar ${data.length ? '' : 'empty'}`}>
				<div className='explorer-items-container'>
					{data.map((item) => (
						<TopBarExplorerItem
							key={item.path}
							active={item.path === focused?.path}
							title={item.title}
							icon={item.icon}
							onClick={item.onClick}
							onClose={item.onClose}
						/>
					))}
					{/* <TopBarExplorerItem
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
				/> */}
				</div>
				<div className='button-container'>
					{/* <Tooltip position='bottom' title='change view (disabled)'>
						<Button
							disabled
							type='text'
							id='change view'
							onClick={handleChangeViewButtonClick}
							className='change-view'
						>
							<TopBarButtonIcon view={view} />
						</Button>
					</Tooltip> */}
					<Tooltip
						position='bottom'
						title={!showSettingsMenu && 'settings'}
					>
						<Button
							type='text'
							id='settings'
							onClick={() => setShowSettingsMenu((prev) => !prev)}
							className='settings'
						>
							<SettingsIcon />
						</Button>
						{showSettingsMenu && (
							<Menu>
								<ul>
									<li>Settings</li>
									<li>
										<Button
											id='close tabs'
											onClick={() => {
												setShowSettingsMenu(
													(prev) => !prev
												);
												dispatch(setExplorerItems([]));
												console.log('closing all tabs');
											}}
										>
											Close All Tabs
										</Button>
									</li>
									<li>
										<Button
											id='close tabs'
											onClick={() => {
												setShowSettingsMenu(
													(prev) => !prev
												);
												navigate(
													Module[Module.THEME]
														.toString()
														.toLowerCase()
												);
											}}
										>
											Change Theme
										</Button>
									</li>
								</ul>
							</Menu>
						)}
					</Tooltip>
				</div>
			</div>
		</>
	);
};
