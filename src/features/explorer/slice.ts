import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MouseEvent, ReactNode } from 'react';

type ExplorerItem = {
	path: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
	onClose: (e: MouseEvent<HTMLButtonElement>) => void;
	icon: ReactNode;
	title: string;
};

type ProjectState = {
	data: Array<ExplorerItem>;
	focused: ExplorerItem | null;
};

const initialState: ProjectState = {
	data: [],
	focused: null,
};

export const explorerSlice = createSlice({
	name: 'explorer',
	initialState,
	reducers: {
		addExplorerItem: (state, action: PayloadAction<ExplorerItem>) => {
			if (!state.data.find((e) => e.path === action.payload.path)) {
				state.data.push(action.payload);
			}
		},
		removeExplorerItem: (state, action: PayloadAction<string>) => {
			const itemIndex = state.data.findIndex(
				(e) => e.path === action.payload
			);
			if (itemIndex > -1) {
				if (state.focused?.path === state.data[itemIndex].path)
					state.focused = null;
				state.data.splice(itemIndex, 1);
			}
		},
		focusExplorerItem: (state, action: PayloadAction<string>) => {
			state.focused =
				state.data.find((e) => e.path === action.payload) ?? null;
		},
	},
});

export const { actions, reducer } = explorerSlice;

export const { addExplorerItem, removeExplorerItem, focusExplorerItem } =
	actions;

export default reducer;
