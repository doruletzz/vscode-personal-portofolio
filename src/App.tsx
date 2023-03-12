import './App.css';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
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
import {
	createRef,
	lazy,
	MouseEvent,
	RefObject,
	Suspense,
	useEffect,
	useState,
} from 'react';
import { Module } from './constants/module';

import { ReactComponent as HomeIcon } from './assets/home.svg';
import { ReactComponent as AboutIcon } from './assets/profile.svg';
import { ReactComponent as ProjectsIcon } from './assets/projects.svg';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as BlogIcon } from './assets/blog.svg';
import { ReactComponent as ContactIcon } from './assets/contact.svg';
import { ReactComponent as ThemeIcon } from './assets/theme.svg';
import { useAppDispatch, useAppSelector } from './features/app/hooks';
import { Theme } from './constants/theme';
import Progress from './components/Progress';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPost'));
const ThemePage = lazy(() => import('./pages/Theme'));
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
	const [isInitial, setIsInitial] = useState(true);
	const { theme } = useAppSelector((state) => state.theme);
	const [removeTransition, setRemoveTransition] = useState(false);

	const dispatch = useAppDispatch();

	const handleAppContainerClick = (e: MouseEvent<HTMLDivElement>) => {
		setIsInitial(false);
		setTimeout(() => {
			setRemoveTransition(true);
		}, 1000);
	};

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-initial',
			isInitial.toString()
		);
	}, [isInitial]);

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			theme ? Theme[theme].toLowerCase() : 'dark'
		);
	}, [theme]);

	return (
		<div
			onClick={(e) => isInitial && handleAppContainerClick(e)}
			style={removeTransition ? { transition: 'none' } : {}}
			className='app-container'
		>
			<Router>
				<Navbar items={navItems} />
				<Explorer />
				<PageView>
					<Suspense fallback={<Progress />}>
						<Routes>
							<Route path='home/*' element={<HomePage />} />
							<Route path='about/*' element={<AboutPage />} />
							<Route path='blog/:id' element={<BlogPostPage />} />
							<Route path='blog/' element={<BlogPage />} />
							<Route
								path='projects/*'
								element={<ProjectsPage />}
							/>
							<Route path='github/*' element={<GithubPage />} />
							<Route path='contact/*' element={<ContactPage />} />
							<Route path='theme/*' element={<ThemePage />} />
							<Route path='*' element={<Navigate to='home/' />} />
						</Routes>
					</Suspense>
				</PageView>
			</Router>
		</div>
	);
};

export default App;
