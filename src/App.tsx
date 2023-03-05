import './App.css';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import {
	PATH_ABOUT,
	PATH_BLOG,
	PATH_GITHUB,
	PATH_HOME,
	PATH_PROJECTS,
} from './constants/paths';
import Explorer from './components/Explorer';
import { lazy, MouseEvent, Suspense, useEffect, useState } from 'react';
import { Module } from './constants/module';

import { ReactComponent as HomeIcon } from './assets/home.svg';
import { ReactComponent as AboutIcon } from './assets/profile.svg';
import { ReactComponent as ProjectsIcon } from './assets/projects.svg';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as BlogIcon } from './assets/blog.svg';
import { ReactComponent as ContactIcon } from './assets/contact.svg';
import { ReactComponent as ThemeIcon } from './assets/theme.svg';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPost'));

// import HomePage from './pages/Home';
// import AboutPage from './pages/About';
// import ProjectsPage from './pages/Projects';
// import BlogPage from './pages/Blog';

// import PageView from './components/PageView';
// import GithubPage from './pages/Github';
// import ContactPage from './pages/Contact';

const PageView = lazy(() => import('./components/PageView'));
const GithubPage = lazy(() => import('./pages/Github'));
const ContactPage = lazy(() => import('./pages/Contact'));

const navItems = [
	{
		moduleName: Module.HOME,
		title: 'home',
		icon: <HomeIcon />,
	},
	{
		moduleName: Module.PROJECTS,
		title: 'projects',
		icon: <ProjectsIcon />,
	},
	{
		moduleName: Module.BLOG,
		title: 'blog',
		icon: <BlogIcon />,
	},
	{
		moduleName: Module.GITHUB,
		title: 'github',
		icon: <GithubIcon />,
	},
	{
		moduleName: Module.CONTACT,
		title: 'contact',
		icon: <ContactIcon />,
	},
	{
		moduleName: Module.ABOUT,
		title: 'about',
		icon: <AboutIcon />,
		badge: true,
	},
	{
		moduleName: Module.THEME,
		title: 'theme',
		onClick: () => console.log('theme'),
		icon: <ThemeIcon />,
	},
];

const App = () => {
	const [initial, setIsInitial] = useState(true);
	const [removeTransition, setRemoveTransition] = useState(false);

	const handleAppContainerClick = (e: MouseEvent<HTMLDivElement>) => {
		setIsInitial(false);

		setTimeout(() => {
			setRemoveTransition(true);
		}, 2000);
	};

	return (
		<div
			onClick={handleAppContainerClick}
			style={removeTransition ? { transition: 'none' } : {}}
			className={`app-container ${initial ? 'initial' : ''}`}
		>
			<Router>
				<Navbar items={navItems} />
				<Explorer />
				<PageView>
					<Suspense fallback={<div>fallback</div>}>
						<Routes>
							{/* <HomePage /> */}
							<Route path='home/*' element={<HomePage />} />
							<Route path='about/*' element={<AboutPage />} />
							<Route path='blog/:id' element={<BlogPostPage />} />
							<Route path='blog/' element={<BlogPage />} />
							{/* <Route path='blog/' element={<BlogPage />} /> */}
							<Route
								path='projects/*'
								element={<ProjectsPage />}
							/>
							<Route path='github/*' element={<GithubPage />} />
							<Route path='contact/*' element={<ContactPage />} />
							<Route path='*' element={<Navigate to='home/' />} />
						</Routes>
					</Suspense>
				</PageView>
			</Router>
		</div>
	);
};

export default App;
