import { Project } from '../types/projects';
import DORLETZ from '../assets/dorletz.svg';
import CHESPAL from '../assets/chesspal.svg';
import KITEAPP from '../assets/kite-app.svg';
import GYMAPP from '../assets/gym-app.svg';
import img from '../assets/background.webp';

export const projects: Project[] = [
	{
		icon: DORLETZ,
		imgSrc: img,
		title: 'dorletz.com',
		description: 'my awesome personal website',
		slug: 'dorletz',
		github: 'https://github.com/doruletzz/vscode-personal-portofolio',
		demo: 'https://dorletz.com',
	},
	{
		icon: CHESPAL,
		imgSrc: img,
		title: 'ChessPal',
		description: 'my awesome personal website',
		slug: 'chesspal',
		github: 'https://github.com/doruletzz/chesspal',
		demo: 'https://google.de',
	},
	{
		icon: GYMAPP,
		imgSrc: img,
		title: 'Gym App',
		description: 'my awesome personal website',
		slug: 'gym-app',
		github: 'https://github.com/doruletzz/kite-surf-react-app',
		demo: 'https://google.de',
	},
	{
		icon: KITEAPP,
		imgSrc: img,
		title: 'Kite Surfer',
		description: 'my awesome personal website',
		slug: 'kite-surf',
		github: 'https://github.com/doruletzz/kite-surf-react-app',
		demo: 'https://google.de',
	},
];
