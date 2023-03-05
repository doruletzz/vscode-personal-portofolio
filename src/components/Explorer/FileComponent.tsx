import { MouseEvent, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router';
import { Module } from '../../constants/module';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import {
	addExplorerItem,
	focusExplorerItem,
	removeExplorerItem,
} from '../../features/explorer/slice';
import { setModuleName, setPath } from '../../features/module/slice';
import Button from '../Button';

type FileComponentProps = {
	icon?: ReactNode;
	name: string;
	path: Array<string>;
};

export const FileComponent = ({ icon, name, path }: FileComponentProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { name: moduleName, path: modulePath } = useAppSelector(
		(state) => state.module
	);
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [pathName] = useState(
		() => Module[moduleName].toLocaleLowerCase() + '/' + path.join('/')
	);

	const compare = <T,>(obj1: T, obj2: T) => {
		return JSON.stringify(obj1) === JSON.stringify(obj2);
	};

	const handleFileClick = (e?: MouseEvent<HTMLButtonElement>) => {
		navigate(Module[moduleName].toLocaleLowerCase() + '/' + path.join('/'));
		dispatch(setPath(path));
		dispatch(focusExplorerItem(pathName));
	};

	return (
		<div
			className={`explorer-file${
				compare(path, modulePath) ? ' active' : ''
			}`}
		>
			<Button
				id='file'
				type='text'
				style={{ paddingLeft: `${path.length * 0.75}rem` }}
				onClick={(e) => {
					dispatch(
						addExplorerItem({
							path: pathName,
							title: name,
							icon: icon,
							onClick: () => handleFileClick(e),
							onClose: () =>
								dispatch(removeExplorerItem(pathName)),
						})
					);
					handleFileClick(e);
				}}
			>
				{icon}
				<p className='text'>{name}</p>
			</Button>
		</div>
	);
};
