import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Progress from '../../components/Progress';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getArticles } from '../../features/blog/slice';
import { ReactComponent as ExternalIcon } from '../../assets/external.svg';

import './BlogPageComponent.css';
import { useNavigate } from 'react-router';

export const BlogPageComponent = () => {
	const { articles, isFetchingArticles, error } = useAppSelector(
		(state) => state.blog
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!articles.length && !isFetchingArticles && !error)
			dispatch(getArticles());
	}, [articles]);

	return (
		<div className='blog-page'>
			<h1 className='heading'>THOUGHTS & MORE</h1>
			<div className='articles'>
				{articles.length && !isFetchingArticles
					? articles.map((article) => (
							<Card className='article' key={article.id}>
								<h6
									onClick={() =>
										navigate(article.id.toString())
									}
								>
									{article.title}
								</h6>
								<p>{article.description}</p>
								<div>
									<a href={article.url} target='_blank'>
										<ExternalIcon />
									</a>
									<p>
										{new Date(
											article.published_at
										).toLocaleDateString()}
									</p>
								</div>
							</Card>
					  ))
					: new Array(12).fill(0).map((_, i) => (
							<Card className='fetching' key={i}>
								<Progress />
							</Card>
					  ))}
			</div>
		</div>
	);
};
