import axios from 'axios';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Progress from '../../components/Progress';
import Tooltip from '../../components/Tooltip';

import './GithubPageComponent.css';

const GIT_PROFILE_PATH = 'https://api.github.com/users/doruletzz';
const GIT_REPO_PATH = 'https://api.github.com/users/doruletzz/repos';

type GithubProfile = {
	login: string;
	name: string;
	bio: string;
	avatar_url: string;
	html_url: string;
};

type GithubRepository = {
	id: number;
	name: string;
	html_url: string;
	description: string;
	language: string;
	pushed_at: Date;
};

export const GithubPageComponent = () => {
	const [githubProfileData, setGithubProfileData] = useState<GithubProfile>();
	const [githubRepositoryData, setGithubRepositoryData] =
		useState<GithubRepository[]>();

	useEffect(() => {
		axios
			.get(GIT_PROFILE_PATH)
			.then((res) => setGithubProfileData(res.data));
	}, []);

	useEffect(() => {
		if (githubProfileData)
			axios.get(GIT_REPO_PATH).then((res) => {
				let { data } = res;
				data = (data as GithubRepository[])
					.map((rd) => ({ ...rd, pushed_at: new Date(rd.pushed_at) }))
					.sort(
						(r1, r2) =>
							r2.pushed_at.getTime() - r1.pushed_at.getTime()
					)
					.slice(0, 9);

				setGithubRepositoryData(data);
			});
	}, [githubProfileData]);

	const handleRepositoryHover = (e: MouseEventHandler<HTMLDivElement>) => {};

	return (
		<div className='github-page-display'>
			<>
				<h1 className='heading'>recently worked on</h1>
				<div className='repos'>
					<>
						{githubProfileData ? (
							<Tooltip title='profile' position='top'>
								<Card className='profile'>
									<a
										target='_blank'
										href={githubProfileData.html_url}
									>
										<img
											className='avatar'
											alt='avatar'
											src={githubProfileData.avatar_url}
										/>
										<h5 className='name'>
											{githubProfileData.name}
										</h5>
										<p className='username'>
											{githubProfileData.login}
										</p>
										<p className='bio'>
											{githubProfileData.bio}
										</p>
									</a>
								</Card>
							</Tooltip>
						) : (
							<Card className='profile fetching'>
								<Progress />
							</Card>
						)}
						{githubRepositoryData
							? githubRepositoryData.map(
									({
										name,
										id,
										html_url,
										description,
										language,
										pushed_at,
									}) => (
										<Tooltip
											title={name}
											position='top'
											key={id}
										>
											<Card className='repository'>
												<a
													className='title'
													target='_blank'
													href={html_url}
												>
													{name}
												</a>
												<p className='description'>
													{description}
												</p>
												<p className='language'>
													{language}
												</p>
												<p className='date'>
													{pushed_at.toLocaleDateString()}
												</p>
											</Card>
										</Tooltip>
									)
							  )
							: new Array(9).fill(0).map((_, i) => (
									<Card
										className='repository fetching'
										key={i}
									>
										<Progress />
									</Card>
							  ))}
					</>
				</div>
			</>
		</div>
	);
};
