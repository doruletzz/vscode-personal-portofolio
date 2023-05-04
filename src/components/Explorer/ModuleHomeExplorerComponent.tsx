import React, { useState } from 'react';
import Button from '../Button';
import { FileComponent } from './FileComponent';
import { FolderComponent } from './FolderComponent';
import { ReactComponent as HtmlIcon } from '../../assets/html.svg';
import { ReactComponent as ReactIcon } from '../../assets/react.svg';
import { ReactComponent as CssIcon } from '../../assets/css.svg';
import { ReactComponent as SvgIcon } from '../../assets/svg.svg';

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
						icon={<SvgIcon />}
						name='favico.svg'
						path={['hello-world', 'src', 'assets', 'favico-svg']}
					/>
				</FolderComponent>

				<FileComponent
					icon={<CssIcon />}
					name='App.css'
					path={['hello-world', 'src', 'app-css']}
				/>

				<FileComponent
					icon={<ReactIcon />}
					name='App.tsx'
					path={['hello-world', 'src', 'app-tsx']}
				/>
				<FileComponent
					icon={<CssIcon />}
					name='index.css'
					path={['hello-world', 'src', 'index-css']}
				/>
			</FolderComponent>
			<FileComponent
				icon={<HtmlIcon />}
				name='index.html'
				path={['hello-world', 'src', 'index-html']}
			/>
		</FolderComponent>
	);
};
