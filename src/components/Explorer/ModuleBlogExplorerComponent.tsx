import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getArticles } from '../../features/blog/slice';
import { Article } from '../../types/article';
import SearchBar from '../SearchBar';
import { FolderComponent } from './FolderComponent';
import { ProjectComponent } from './ProjectComponent';

export const ModuleBlogExplorerComponent = () => {
	const { articles, isFetchingArticles, error } = useAppSelector(
		(state) => state.blog
	);
	const dispatch = useAppDispatch();

	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		if (!articles.length && !isFetchingArticles && !error)
			dispatch(getArticles());
	}, [articles]);

	const filterArticles = (article: Article) => {
		return (
			article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			article.description
				.toLowerCase()
				.includes(searchValue.toLowerCase())
		);
	};

	return (
		<>
			<SearchBar
				icon
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<FolderComponent name='LATEST ARTICLES' path={['articles']}>
				{articles &&
					articles
						.filter(filterArticles)
						.map((article) => (
							<ProjectComponent
								key={article.id}
								title={article.title}
								slug={article.id.toString()}
								description={article.description}
								demo={article.url}
							/>
						))}
			</FolderComponent>
		</>
	);
};
