import React, { useState } from 'react';
import Button from '../Button';
import { FileComponent } from './FileComponent';
import { FolderComponent } from './FolderComponent';
import { ReactComponent as HtmlIcon } from '../../assets/html.svg';
import { ReactComponent as CssIcon } from '../../assets/css.svg';

export const ModuleHomeExplorerComponent = () => {
	return (
		<FolderComponent name='HELLO-WORLD' path={['hello-world']}>
			<FolderComponent icon name='src' path={['hello-world', 'src']}>
				<FolderComponent
					icon
					name='assets'
					path={['hello-world', 'src', 'assets']}
				>
					<FileComponent
						name='index.css'
						path={['hello-world', 'src', 'assets', 'index-css']}
					/>
				</FolderComponent>
				<FileComponent
					icon={<HtmlIcon />}
					name='index.html'
					path={['hello-world', 'src', 'index-html']}
				/>
				<FileComponent
					icon={<CssIcon />}
					name='index.css'
					path={['hello-world', 'src', 'index-css']}
				/>
			</FolderComponent>
		</FolderComponent>
	);
};
