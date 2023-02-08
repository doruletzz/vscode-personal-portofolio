import React from 'react';
import { FolderComponent } from './FolderComponent';
import { ProjectComponent } from './ProjectComponent';
import { ReactComponent as FolderOpen } from '../../assets/folder-open.svg';

export const ModuleProjectsExplorer = () => {
	return (
		<FolderComponent name='HELLO-WORLD' path={['hello-world']}>
			<ProjectComponent
				title='dorletz.com'
				description='my awesome personal website'
				slug='dorletz'
			/>
			<ProjectComponent
				title='dorletz.com'
				description='my awesome personal website'
				slug='dorletz'
			/>
			<ProjectComponent
				icon={<FolderOpen />}
				title='dorletz.com'
				description='my awesome personal website'
				slug='dorletz'
				github='https://google.com'
				demo='https://google.de'
			/>
		</FolderComponent>
	);
};
