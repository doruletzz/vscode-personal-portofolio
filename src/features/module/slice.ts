import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Module } from '../../constants/module';

type ModuleState = {
	name: Module;
	width: number;
	isExpanded: boolean;
};

const DEFAULT_EXPLORER_WIDTH = 256;

const initialState: ModuleState = {
	name: Module.HOME,
	width: DEFAULT_EXPLORER_WIDTH,
	isExpanded: true,
};

export const moduleSlice = createSlice({
	name: 'module',
	initialState,
	reducers: {
		setModuleName: (state, action: PayloadAction<Module>) => {
			state.name = action.payload;
			state.isExpanded = true;
		},
		setIsModuleExpanded: (state, action: PayloadAction<boolean>) => {
			state.isExpanded = action.payload;
		},
		setModuleWidth: (state, action: PayloadAction<number>) => {
			state.width = action.payload;
		},
	},
});

export const { actions, reducer } = moduleSlice;

export const { setModuleName, setIsModuleExpanded } = actions;

export default reducer;
