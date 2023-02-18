import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../constants/theme';
import { getThemeFromLocalStorage, setThemeToLocalStorage } from './utils';

type ThemeState = {
	type: Theme;
};

const initialState: ThemeState = {
	type: getThemeFromLocalStorage(),
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.type = action.payload;
			setThemeToLocalStorage(action.payload);
		},
	},
});

export const { actions, reducer } = themeSlice;

export const { setTheme } = actions;

export default reducer;