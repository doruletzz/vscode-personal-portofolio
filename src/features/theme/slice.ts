import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../constants/theme';
import { Accent } from '../../constants/accent';
import { getThemeFromLocalStorage, setThemeToLocalStorage } from './utils';

type ThemeState = {
	theme: Theme;
	accent: Accent;
};

const initialState: ThemeState = {
	theme: getThemeFromLocalStorage(),
	accent: Accent.RED,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
			setThemeToLocalStorage(action.payload);
		},
		setAccent: (state, action: PayloadAction<Accent>) => {
			state.accent = action.payload;
		},
	},
});

export const { actions, reducer } = themeSlice;

export const { setTheme, setAccent } = actions;

export default reducer;
