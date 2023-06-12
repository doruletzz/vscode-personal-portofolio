import React, { useState } from 'react';
import Button from '../Button';
import { FileComponent } from './FileComponent';
import { FolderComponent } from './FolderComponent';
import { ReactComponent as JsonIcon } from '../../assets/json.svg';
import { ReactComponent as JsIcon } from '../../assets/javascript.svg';

export const ModuleThemeExplorerComponent = () => {
	return (
		<FolderComponent name='THEME-PICKER' path={['theme-picker']}>
			<FolderComponent name='src' path={['theme-picker', 'src']}>
				<FileComponent
					icon={<JsIcon />}
					name='index.js'
					path={['theme-picker', 'src', 'theme-json']}
				/>
			</FolderComponent>

			<FileComponent
				icon={<JsonIcon />}
				name='theme.json'
				path={['theme-picker', 'theme-json']}
			/>
			<FileComponent
				icon={<JsonIcon />}
				name='accents.json'
				path={['theme-picker', 'accents-json']}
			/>
		</FolderComponent>
	);
};
