import { configureStore } from '@reduxjs/toolkit';
// import { ThunkAction } from 'redux-thunk';

import themeReducer from '../theme/slice';
import moduleReducer from '../module/slice';
import viewReducer from '../view/slice';

export const store = configureStore({
	reducer: {
		view: viewReducer,
		module: moduleReducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
