import { Project } from '../../types/projects';
import DORLETZ from '../../assets/dorletz.svg';
import CHESSPAL from '../../assets/chesspal.svg';
import KITEAPP from '../../assets/kite-app.svg';
import GYMAPP from '../../assets/gym-app.svg';
import KEYCAPS from '../../assets/keycaps-logo.svg';
import dorletzImage from '../../assets/dorletz-cover.png';
import gymImage from '../../assets/gym-app-cover.png';
import kiteImage from '../../assets/kite-surf-cover.png';
import chesspalImage from '../../assets/chesspal-cover.png';
import keycapsImage from '../../assets/keycaps-cover.png';
import { KiteSurfContent } from './KiteSurfContent';
import { GymAppContent } from './GymAppContent';
import { ChessPalContent } from './ChessPalContent';
import { DorletzContent } from './DorletzContent';
import { KeyCapsContent } from './KeyCapsContent';

export const projects: Project[] = [
	{
		icon: CHESSPAL,
		content: <ChessPalContent />,
		badge: 'CHECK ME OUT',
		imgSrc: chesspalImage,
		title: 'ChessPal',
		description:
			'Your personal chess exploration tool, ChessPal, is a React Web Application designed to empower chess enthusiasts with a comprehensive platform for strategic analysis, game preparation, and immersive gameplay experiences',
		slug: 'chesspal',
		github: 'https://github.com/doruletzz/chesspal',
		demo: 'https://google.de',
	},
	{
		icon: KEYCAPS,
		content: <KeyCapsContent />,
		imgSrc: keycapsImage,
		title: 'KeyCaps',
		description: 'Web Store for mechanical keyboards',
		slug: 'keycaps',
		github: 'https://github.com/doruletzz/vscode-personal-portofolio',
		demo: 'https://dorletz.com',
	},
	{
		icon: DORLETZ,
		imgSrc: dorletzImage,
		content: <DorletzContent />,
		title: 'Dor-letz',
		description:
			"My personal website that serves as a showcase of skills and expertise while providing visitors with an engaging and immersive experience. UI being inspired by Visual Studio Code's aesthetics",
		slug: 'dorletz',
		github: 'https://github.com/doruletzz/vscode-personal-portofolio',
		demo: 'https://dorletz.com',
	},
	{
		icon: GYMAPP,
		imgSrc: gymImage,
		content: <GymAppContent />,
		title: 'Gym App',
		description:
			'React Web Application designed to revolutionize the fitness experience. By seamlessly integrating training and nutrition plans based on user input, it empowers fitness enthusiasts to achieve their goals effectively',
		slug: 'gym-app',
		// github: 'https://github.com/doruletzz/kite-surf-react-app',
		// demo: 'https://google.de',
	},
	{
		icon: KITEAPP,
		imgSrc: kiteImage,
		content: <KiteSurfContent />,
		title: 'Kite Surfer',
		description:
			'A web application tailored for kite surfers seeking the best spots for their adrenaline-fueled adventures. With its intuitive interface and advanced features, users can effortlessly discover and explore ideal kite surfing locations worldwide',
		slug: 'kite-surf',
		github: 'https://github.com/doruletzz/kite-surf-react-app',
		demo: 'https://google.de',
	},
];
