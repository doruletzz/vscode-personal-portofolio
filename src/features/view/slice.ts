import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Module } from '../../constants/module';
import { View } from '../../constants/view';

type Notification = {
	message: string;
	title: string;
};

type ViewState = {
	view: View;
	notification?: Notification | null;
};

const initialState: ViewState = {
	view: View.DISPLAY,
	notification: {
		title: 'hello-world',
		message:
			'Welcome to my personal portofolio website, this project is still under construction',
	},
};

export const viewSlice = createSlice({
	name: 'view',
	initialState,
	reducers: {
		setView: (state, action: PayloadAction<View>) => {
			state.view = action.payload;
		},
		setNotification: (
			state,
			action: PayloadAction<Notification | null>
		) => {
			state.notification = action?.payload;
		},
	},
});

export const { actions, reducer } = viewSlice;

export const { setView, setNotification } = actions;

export default reducer;
