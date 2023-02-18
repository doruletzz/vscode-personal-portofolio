import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router';
import { Module } from '../../constants/module';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
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

	const compare = <T,>(obj1: T, obj2: T) => {
		return JSON.stringify(obj1) === JSON.stringify(obj2);
	};

	return (
		<div
			className={`explorer-file${
				compare(path, modulePath) ? ' active' : ''
			}`}
		>
			<Button
				id='file'
				style={{ paddingLeft: `${path.length * 0.75}rem` }}
				onClick={() => {
					navigate(
						Module[moduleName].toLocaleLowerCase() +
							'/' +
							path.join('/')
					);
					dispatch(setPath(path));
				}}
			>
				{icon}
				<p className='text'>{name}</p>
			</Button>
		</div>
	);
};
