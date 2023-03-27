import React, { useEffect, useState } from 'react';

import './BottomBarComponent.css';

import { ReactComponent as BranchIcon } from '../../assets/branch.svg';
import { ReactComponent as BracketsIcon } from '../../assets/brackets.svg';
import { ReactComponent as ContactIcon } from '../../assets/contact.svg';
import { ReactComponent as ViteIcon } from '../../assets/vite.svg';
import { ReactComponent as SuccessIcon } from '../../assets/success.svg';
import { ReactComponent as CheckMarkIcon } from '../../assets/checkmark.svg';
import { useAppSelector } from '../../features/app/hooks';
import { Theme } from '../../constants/theme';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Tooltip from '../Tooltip';

export const BottomBarComponent = () => {
	const { theme } = useAppSelector((state) => state.theme);
	const { width } = useWindowDimensions();
	const [time, setTime] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

			const dayNr = date.getDay();
			const hour = date.getHours();
			const minute = date.getMinutes();

			setTime(`${weekday[dayNr]}, ${hour}:${minute}`);
		}, 1000);

		return () => clearInterval(interval);
	}, [time]);

	return (
		<div className='bottom-bar'>
			<ul className='lhs'>
				<li>dor-</li>
				{width > 900 && (
					<Tooltip title='from master branch' position='top'>
						<li>
							<BranchIcon /> master*
						</li>
					</Tooltip>
				)}
				{width > 600 && (
					<Tooltip title='theme' position='top'>
						<li>{Theme[theme].toLowerCase()}</li>
					</Tooltip>
				)}
				{width > 1200 && (
					<Tooltip title='google lighthouse score' position='top'>
						<li>
							<ul>
								<li>
									<SuccessIcon /> 99%
								</li>
								<li>
									<SuccessIcon /> 99%
								</li>
								<li>
									<SuccessIcon /> 99%
								</li>
								<li>
									<SuccessIcon /> 99%
								</li>
							</ul>
						</li>
					</Tooltip>
				)}
			</ul>
			<ul className='rhs'>
				<li>made with coffee & love</li>
				{width > 600 && (
					<>
						{width > 1200 && (
							<>
								<li>
									<BracketsIcon /> Typescript React
								</li>
								<li>
									<CheckMarkIcon /> Prettier
								</li>
							</>
						)}
						{time && (
							<Tooltip title='current time' position='top'>
								<li>{time}</li>
							</Tooltip>
						)}
						<Tooltip title='bundled with vite' position='top'>
							<li>
								<ViteIcon />
							</li>
						</Tooltip>
						<Tooltip title='mail' position='top'>
							<li>
								<ContactIcon />
							</li>
						</Tooltip>
					</>
				)}
			</ul>
		</div>
	);
};
