import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Theme } from '../../constants/theme';

import { Project } from '../../types/projects';

import DORLETZ from '../../assets/dorletz.svg';
import CHESPAL from '../../assets/chesspal.svg';
import KITEAPP from '../../assets/kite-app.svg';
import GYMAPP from '../../assets/gym-app.svg';

const PROJECTS: Project[] = [
	{
		icon: DORLETZ,
		title: 'dorletz.com',
		description: 'my awesome personal website',
		slug: 'dorletz',
		github: 'https://github.com/doruletzz/vscode-personal-portofolio',
		demo: 'https://dorletz.com',
	},
	{
		icon: CHESPAL,
		title: 'ChessPal',
		description: 'my awesome personal website',
		slug: 'chesspal',
		github: 'https://github.com/doruletzz/chesspal',
		demo: 'https://google.de',
	},
	{
		icon: GYMAPP,
		title: 'Gym App',
		description: 'my awesome personal website',
		slug: 'gym-app',
		github: 'https://github.com/doruletzz/kite-surf-react-app',
		demo: 'https://google.de',
	},
	{
		icon: KITEAPP,
		title: 'Kite Surfer',
		description: 'my awesome personal website',
		slug: 'kite-surf',
		github: 'https://github.com/doruletzz/kite-surf-react-app',
		demo: 'https://google.de',
	},
];

type ProjectState = {
	data: Array<Project>;
};

const initialState: ProjectState = {
	data: PROJECTS,
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setProjects: (state, action: PayloadAction<Array<Project>>) => {
			state.data = action.payload;
		},
	},
});

export const { actions, reducer } = projectsSlice;

export const { setProjects } = actions;

export default reducer;
