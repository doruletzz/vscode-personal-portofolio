import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from '../../types/article';
import { AppThunk } from '../app/store';

type BlogState = {
	articles: Article[];
	isFetchingArticles: boolean;
	isFetchingArticle: boolean;
	error: string | null;
};

const initialState: BlogState = {
	articles: [],
	isFetchingArticles: false,
	isFetchingArticle: false,
	error: null,
};

export const moduleSlice = createSlice({
	name: 'module',
	initialState,
	reducers: {
		fetchArticles: (state) => {
			state.isFetchingArticles = true;
		},
		fetchArticle: (state) => {
			state.isFetchingArticle = true;
		},
		errorFetchArticles: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isFetchingArticles = false;
		},
		errorFetchArticle: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isFetchingArticle = false;
		},
		receiveArticle: (state, action: PayloadAction<Article>) => {
			let article = state.articles.find(
				(article) => article.id === action.payload.id
			);

			if (article) article.body_markdown = action.payload.body_markdown;
			else state.articles.push(action.payload);

			state.isFetchingArticle = false;
		},
		receiveArticles: (state, action: PayloadAction<Article[]>) => {
			state.articles = action.payload;
			state.isFetchingArticles = false;
		},
	},
});

export const getArticles =
	(amount?: number): AppThunk =>
	async (dispatch) => {
		dispatch(fetchArticles());
		axios
			.get('https://dev.to/api/articles?username=dorletz')
			.then(({ data }) => dispatch(receiveArticles(data)))
			.catch((error) => dispatch(errorFetchArticles(error)));
	};

export const getArticle =
	(id: number | string): AppThunk =>
	async (dispatch) => {
		axios
			.get('https://dev.to/api/articles/' + id)
			.then(({ data }) => dispatch(receiveArticle(data)))
			.catch((error) => dispatch(errorFetchArticle(error)));
	};

export const { actions, reducer } = moduleSlice;

export const {
	receiveArticle,
	receiveArticles,
	fetchArticle,
	fetchArticles,
	errorFetchArticles,
	errorFetchArticle,
} = actions;

export default reducer;
