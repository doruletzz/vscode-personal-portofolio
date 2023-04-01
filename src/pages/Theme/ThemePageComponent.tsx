import React, { useState } from 'react';
import Card from '../../components/Card';
import { Accent } from '../../constants/accent';
import { Theme } from '../../constants/theme';
import { useAppDispatch } from '../../features/app/hooks';
import { setAccent, setTheme } from '../../features/theme/slice';

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

	const [accents] = useState(() => [
		{
			class: Accent.BLUE,
			onClick: () => dispatch(setAccent(Accent.BLUE)),
		},
		{
			class: Accent.RED,
			onClick: () => dispatch(setAccent(Accent.RED)),
		},
		{
			class: Accent.YELLOW,
			onClick: () => dispatch(setAccent(Accent.YELLOW)),
		},
		{
			class: Accent.PURPLE,
			onClick: () => dispatch(setAccent(Accent.PURPLE)),
		},
	]);

	return (
		<div className='theme-page'>
			<h1 className='heading'>CHOOSE YOUR THEME</h1>
			<div className='themes'>
				{themes.map((theme) => (
					<Card key={theme.title}>
						<div className='wrapper' onClick={theme.onClick}>
							<div>{theme.title}</div>
						</div>
					</Card>
				))}
				<Card>
					<div className='accents'>
						{accents.map((accent) => (
							<div
								key={accent.class}
								className={`color ${Accent[
									accent.class
								].toLowerCase()}`}
								onClick={accent.onClick}
							/>
						))}
					</div>
				</Card>
			</div>
		</div>
	);
};
