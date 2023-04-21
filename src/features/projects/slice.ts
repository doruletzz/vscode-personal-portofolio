import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { projects } from '../../constants/projects';

import { Project } from '../../types/projects';

type ProjectState = {
	data: Array<Project>;
};

const initialState: ProjectState = {
	data: projects,
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
