import { Project } from '../types/projects';
import DORLETZ from '../assets/dorletz.svg';
import CHESSPAL from '../assets/chesspal.svg';
import KITEAPP from '../assets/kite-app.svg';
import GYMAPP from '../assets/gym-app.svg';
import dorletzImage from '../assets/dorletz-cover.png';
import gymImage from '../assets/gym-app-cover.png';
import kiteImage from '../assets/kite-surf-cover.png';
import chesspalImage from '../assets/chesspal-cover.png';

export const projects: Project[] = [
	{
		icon: CHESSPAL,
		badge: 'CHECK ME OUT',
		imgSrc: chesspalImage,
		title: 'ChessPal',
		description: 'Your personal chess exploration tool',
		slug: 'chesspal',
		github: 'https://github.com/doruletzz/chesspal',
		demo: 'https://google.de',
	},
	{
		icon: DORLETZ,
		imgSrc: dorletzImage,
		title: 'KeyCaps',
		description: 'Web Store for mechanical keyboards',
		slug: 'keycaps',
		github: 'https://github.com/doruletzz/vscode-personal-portofolio',
		demo: 'https://dorletz.com',
	},
	{
		icon: DORLETZ,
		imgSrc: dorletzImage,
		title: 'dorletz.com',
		description: 'my awesome personal website',
		slug: 'dorletz',
		github: 'https://github.com/doruletzz/vscode-personal-portofolio',
		demo: 'https://dorletz.com',
	},
	{
		icon: GYMAPP,
		imgSrc: gymImage,
		title: 'Gym App',
		description: 'my awesome personal website',
		slug: 'gym-app',
		github: 'https://github.com/doruletzz/kite-surf-react-app',
		demo: 'https://google.de',
	},
	{
		icon: KITEAPP,
		imgSrc: kiteImage,
		title: 'Kite Surfer',
		description: 'my awesome personal website',
		slug: 'kite-surf',
		github: 'https://github.com/doruletzz/kite-surf-react-app',
		demo: 'https://google.de',
	},
];
