import React, { useState } from 'react';
import Button from '../Button';
import { FileComponent } from './FileComponent';
import { FolderComponent } from './FolderComponent';
import { ReactComponent as GitIcon } from '../../assets/git.svg';
import { ReactComponent as MarkDownIcon } from '../../assets/markdown.svg';

export const ModuleAboutExplorerComponent = () => {
	return (
		<FolderComponent name='ABOUT-ME' path={['about-me']}>
			<FolderComponent icon name='src' path={['about-me', 'src']}>
				<FolderComponent
					icon
					name='assets'
					path={['about-me', 'src', 'assets']}
				>
					<FileComponent
						name='profile.svg'
						path={['about-me', 'src', 'assets', 'profile-svg']}
					/>
				</FolderComponent>
			</FolderComponent>
			<FileComponent
				icon={<GitIcon />}
				name='.gitignore'
				path={['about-me', 'gitignore']}
			/>
			<FileComponent
				icon={<MarkDownIcon />}
				name='README.md'
				path={['about-me', 'readme-md']}
			/>
		</FolderComponent>
	);
};
