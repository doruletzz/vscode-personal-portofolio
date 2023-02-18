import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';

import Progress from '../../components/Progress';

// import './BlogPostPageComponent.css';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getArticle, getArticles } from '../../features/blog/slice';

type Article = {
	id: number;
	title: string;
	description: string;
	url: string;
	body_markdown: string;
};

export const BlogPostPageComponent = () => {
	const { id } = useParams();

	const { articles, isFetchingArticle, isFetchingArticles, error } =
		useAppSelector((state) => state.blog);
	const dispatch = useAppDispatch();

	const [article, setArticle] = useState<Article>();

	useEffect(() => {
		if (id && !!article && !article.body_markdown && !isFetchingArticle)
			dispatch(getArticle(id));
	}, [article]);

	useEffect(() => {
		if (articles.length === 0 && !isFetchingArticles)
			dispatch(getArticles());
	}, [id, articles]);

	useEffect(() => {
		if (id && articles.length !== 0)
			setArticle(articles.find((article) => article.id === Number(id)));
	}, [id, articles]);

	return article && article.body_markdown && !isFetchingArticle ? (
		<div className='blogpost-page'>
			<article>
				<h1>{article.title}</h1>
				<ReactMarkdown>{article.body_markdown}</ReactMarkdown>
			</article>
		</div>
	) : (
		<div className='loading'>
			<Progress />
		</div>
	);
};
