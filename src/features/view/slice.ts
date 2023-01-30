import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Module } from '../../constants/module';
import { View } from '../../constants/view';

type ViewState = {
	view: View;
};

const initialState: ViewState = {
	view: View.DISPLAY,
};

export const viewSlice = createSlice({
	name: 'view',
	initialState,
	reducers: {
		setView: (state, action: PayloadAction<View>) => {
			state.view = action.payload;
		},
	},
});

export const { actions, reducer } = viewSlice;

export const { setView } = actions;

export default reducer;
