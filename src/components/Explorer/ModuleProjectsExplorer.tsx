import React from 'react';
import { FolderComponent } from './FolderComponent';
import { ProjectComponent } from './ProjectComponent';
import { ReactComponent as Dorletz } from '../../assets/dorletz.svg';
import { ReactComponent as ChessPal } from '../../assets/chesspal.svg';
import { ReactComponent as KiteSurf } from '../../assets/kite-app.svg';
import { ReactComponent as Gym } from '../../assets/gym-app.svg';
import { useAppSelector } from '../../features/app/hooks';

export const ModuleProjectsExplorer = () => {
	const { data } = useAppSelector((state) => state.projects);
	return (
		<FolderComponent name='LATEST WORKS' path={['projects/']}>
			{data.map(({ icon, title, description, slug, github, demo }) => (
				<ProjectComponent
					key={title}
					icon={icon}
					title={title}
					slug={slug}
					github={github}
					demo={demo}
					description={description}
				/>
			))}
			{/* <ProjectComponent
				icon={<Dorletz />}
				title='dorletz.com'
				description='my awesome personal website'
				slug='dorletz'
				github='https://github.com/doruletzz/vscode-personal-portofolio'
				demo='https://dorletz.com'
			/>
			<ProjectComponent
				icon={<ChessPal />}
				title='ChessPal'
				description='my awesome personal website'
				slug='chesspal'
				github='https://github.com/doruletzz/chesspal'
				demo='https://google.de'
			/>
			<ProjectComponent
				icon={<Gym />}
				title='Gym App'
				description='my awesome personal website'
				slug='gym-app'
				github='https://github.com/doruletzz/kite-surf-react-app'
				demo='https://google.de'
			/>
			<ProjectComponent
				icon={<KiteSurf />}
				title='Kite Surfer'
				description='my awesome personal website'
				slug='kite-surf'
				github='https://github.com/doruletzz/kite-surf-react-app'
				demo='https://google.de'
			/> */}
		</FolderComponent>
	);
};
