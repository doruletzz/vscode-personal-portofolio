import { View } from '../constants/view';
import { useAppSelector } from '../features/app/hooks';
import { AboutPageCode, AboutPageDisplay } from './About';
import { HomePageDisplay, HomePageCode } from './Home';

const HomePage = () => {
	const { view } = useAppSelector((state) => state.view);

	return view === View.CODE ? <HomePageCode /> : <HomePageDisplay />;
};

const AboutPage = () => {
	const { view } = useAppSelector((state) => state.view);

	return view === View.CODE ? <AboutPageCode /> : <AboutPageDisplay />;
};

export { HomePage, AboutPage };
