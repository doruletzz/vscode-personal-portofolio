import React, { useState } from 'react';
import Card from '../../components/Card';
import { Theme } from '../../constants/theme';
import { useAppDispatch } from '../../features/app/hooks';
import { setTheme } from '../../features/theme/slice';

import './ThemePageComponent.css';

export const ThemePageComponent = () => {
	const dispatch = useAppDispatch();
	const [themes] = useState(() => [
		{
			title: 'Dark',
			onClick: () => dispatch(setTheme(Theme.DARK)),
		},
		{
			title: 'Light',
			onClick: () => dispatch(setTheme(Theme.LIGHT)),
		},
		{
			title: 'Solarized Dark',
			onClick: () => dispatch(setTheme(Theme.SOLARIZED_DARK)),
		},
		{
			title: 'Solarized Light',
			onClick: () => dispatch(setTheme(Theme.SOLARIZED_LIGHT)),
		},
		{
			title: 'Gruvbox',
			onClick: () => dispatch(setTheme(Theme.GRUVBOX)),
		},
	]);
	return (
		<div className='theme-page'>
			{themes.map((theme) => (
				<Card key={theme.title}>
					<div className='wrapper' onClick={theme.onClick}>
						<h6>{theme.title}</h6>
					</div>
				</Card>
			))}
		</div>
	);
};
