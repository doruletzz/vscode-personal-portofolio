import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import themeReducer from '../theme/slice';
import moduleReducer from '../module/slice';
import blogReducer from '../blog/slice';
import viewReducer from '../view/slice';
import projectsReducer from '../projects/slice';
import explorerReducer from '../explorer/slice';

export const store = configureStore({
	reducer: {
		explorer: explorerReducer,
		view: viewReducer,
		module: moduleReducer,
		theme: themeReducer,
		blog: blogReducer,
		projects: projectsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
