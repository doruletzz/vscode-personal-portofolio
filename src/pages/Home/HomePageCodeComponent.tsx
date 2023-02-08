import React, { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router';

import './HomePageCodeComponent.css';

const Pages = [
	{
		path: ['hello-world', 'src', 'index-html'],
		type: 'code',
		content: '<html>\n\n\n\n\n<h1>Hello World</h1>\n\n</html>',
	},
	{
		path: ['hello-world', 'src', 'index-css'],
		type: 'code',
		content: ".home {\n\nbackground-color: 'red';\n}",
	},
];

type PageProps = {
	name: string;
	content: string;
};

const Page = ({ name, content }: PageProps) => {
	return (
		<div key={name} className='home-page-code'>
			<ul>
				{content.split('\n').map((line: string, lineNr: number) => (
					<li key={lineNr}>
						<div className='line-number'>{lineNr}</div>
						<div className='text'>{line}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export const HomePageCodeComponent = () => {
	return (
		<Routes>
			{Pages.map((page, index) => (
				<Route
					key={index}
					path={page.path.join('/')}
					element={
						<Page
							name={page.path.join('/')}
							content={page.content}
						/>
					}
				/>
			))}
		</Routes>
	);
};
