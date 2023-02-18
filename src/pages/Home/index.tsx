import { View } from '../../constants/view';
import { useAppSelector } from '../../features/app/hooks';
import { HomePageCodeComponent } from './HomePageCodeComponent';
import { HomePageDisplayComponent } from './HomePageDisplayComponent';

const HomePageDisplay = HomePageDisplayComponent;

const HomePageCode = HomePageCodeComponent;

const HomePage = () => {
	const { view } = useAppSelector((state) => state.view);

	return view === View.CODE ? <HomePageCode /> : <HomePageDisplay />;
};

export default HomePage;
