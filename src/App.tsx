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
import { ReactComponent as TopBar } from './assets/topbar.svg';
import { useAppDispatch, useAppSelector } from './features/app/hooks';
import { Theme } from './constants/theme';
import Progress from './components/Progress';
import { setIsModuleExpanded } from './features/module/slice';
import useWindowDimensions from './hooks/useWindowDimensions';

import BottomBar from './components/BottomBar';
import { Accent } from './constants/accent';
import AnnouncementBar from './components/AnnouncementBar';
import Snackbar from './components/Snackbar';

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
	const [showSnackbar, setShowSnackbar] = useState(true);

	const [isInitial, setIsInitial] = useState(() => window.innerWidth > 600);
	const { theme, accent } = useAppSelector((state) => state.theme);
	const [removeTransition, setRemoveTransition] = useState(() => !isInitial);
	const [showAnnouncement, setShowAnnouncement] = useState(true);

	const dispatch = useAppDispatch();

	const ANNOUNCEMENT = () => (
		<p>
			React Developer. UX/UI Focused. Done is better than perfect.{' '}
			<u>Let's work together!</u>
		</p>
	);

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
		if (window.innerWidth < 1200) dispatch(setIsModuleExpanded(false));
	}, [isInitial]);

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			theme ? Theme[theme].toLowerCase() : 'dark'
		);
	}, [theme]);

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-accent',
			accent ? Accent[accent].toLowerCase() : 'blue'
		);
	}, [accent]);

	return (
		<>
			{isInitial && (
				<ul className='windows-bar'>
					<li />
					<li />
					<li />
				</ul>
			)}
			<div
				onClick={(e) => isInitial && handleAppContainerClick(e)}
				style={removeTransition ? { transition: 'none' } : {}}
				className='app-container'
			>
				<Router>
					{showSnackbar && (
						<Snackbar
							title='hello-world'
							onClose={() => setShowSnackbar(false)}
						>
							<p>
								this website is still under construction, so
								make sure to stay in touch :)
							</p>
						</Snackbar>
					)}

					{showAnnouncement && (
						<AnnouncementBar
							onClick={() => console.log('clicked')}
							onClose={() => setShowAnnouncement(false)}
						>
							<ANNOUNCEMENT />
						</AnnouncementBar>
					)}
					<Navbar items={navItems} />
					<Explorer />
					<PageView>
						<Suspense fallback={<Progress />}>
							<Routes>
								<Route path='home/*' element={<HomePage />} />
								<Route path='about/*' element={<AboutPage />} />
								<Route
									path='blog/:id'
									element={<BlogPostPage />}
								/>
								<Route path='blog/' element={<BlogPage />} />
								<Route
									path='projects/*'
									element={<ProjectsPage />}
								/>
								<Route
									path='github/*'
									element={<GithubPage />}
								/>
								<Route
									path='contact/*'
									element={<ContactPage />}
								/>
								<Route path='theme/*' element={<ThemePage />} />
								<Route
									path='*'
									element={<Navigate to='home/' />}
								/>
							</Routes>
						</Suspense>
					</PageView>
					<BottomBar />
				</Router>
			</div>
		</>
	);
};

export default App;
