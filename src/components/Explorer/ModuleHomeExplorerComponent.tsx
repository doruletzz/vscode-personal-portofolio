import React, { useState } from 'react';
import Button from '../Button';
import { FileComponent } from './FileComponent';
import { FolderComponent } from './FolderComponent';

export const ModuleHomeExplorerComponent = () => {
	return (
		<FolderComponent name='HELLO-WORLD' path={['home']}>
			<FolderComponent name='src' path={['home', 'src']}>
				<FolderComponent name='assets' path={['home', 'src', 'assets']}>
					<FileComponent
						name='index.css'
						path={['home', 'src', 'assets', 'index.css']}
					/>
				</FolderComponent>
				<FileComponent
					name='index.html'
					path={['home', 'src', 'index.html']}
				/>
				<FileComponent
					name='index.css'
					path={['home', 'src', 'index.css']}
				/>
			</FolderComponent>
		</FolderComponent>
	);
};
