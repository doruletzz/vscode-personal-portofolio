import React, { useState } from 'react';
import Button from '../Button';
import { FileComponent } from './FileComponent';
import { FolderComponent } from './FolderComponent';
import { ReactComponent as TypescriptIcon } from '../../assets/typescript.svg';
import { ReactComponent as GitIcon } from '../../assets/git.svg';

export const ModuleGithubExplorerComponent = () => {
	return (
		<FolderComponent name='GITHUB-PROJECTS' path={['github-projects']}>
			<FolderComponent name='src' path={['github-projects', 'src']}>
				<FileComponent
					icon={<TypescriptIcon />}
					name='index.ts'
					path={['github-projects', 'src', 'index-ts']}
				/>
				<FileComponent
					icon={<TypescriptIcon />}
					name='profile.ts'
					path={['github-projects', 'src', 'index.ts']}
				/>
				<FileComponent
					icon={<TypescriptIcon />}
					name='repository.ts'
					path={['github-projects', 'src', 'repository-ts']}
				/>
			</FolderComponent>
			<FileComponent
				icon={<GitIcon />}
				name='.gitignore'
				path={['github-projects', 'gitignore']}
			/>
		</FolderComponent>
	);
};
