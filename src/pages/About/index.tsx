import { View } from '../../constants/view';
import { useAppSelector } from '../../features/app/hooks';
import { AboutPageCodeComponent } from './AboutPageCodeComponent';
import { AboutPageDisplayComponent } from './AboutPageDisplayComponent';

const AboutPageDisplay = AboutPageDisplayComponent;

const AboutPageCode = AboutPageCodeComponent;

export { AboutPageDisplay, AboutPageCode };

const AboutPage = () => {
	const { view } = useAppSelector((state) => state.view);

	return view === View.CODE ? <AboutPageCode /> : <AboutPageDisplay />;
};

export default AboutPage;
