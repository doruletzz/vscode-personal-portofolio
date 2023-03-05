import { useState } from 'react';
import Button from '../Button';
import { ReactComponent as DropDown } from '../../assets/drop-down.svg';
import { ReactComponent as DropRight } from '../../assets/drop-right.svg';
import { ReactComponent as FolderOpen } from '../../assets/folder-open.svg';
import { ReactComponent as FolderClosed } from '../../assets/folder-closed.svg';

type FolderComponentProps = {
	icon?: boolean;
	name: string;
	path: Array<string>;
	children?: React.ReactNode;
};

type DropDownIconProps = {
	expanded: boolean;
};

const DropDownIcon = ({ expanded = false }: DropDownIconProps) =>
	expanded ? (
		<DropDown className='dropdown' />
	) : (
		<DropRight className='dropdown' />
	);

export const FolderComponent = ({
	icon,
	name,
	path,
	children,
}: FolderComponentProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true);

	return (
		<div className={`explorer-folder${isExpanded ? ' expanded' : ''}`}>
			<Button
				id='folder'
				type='text'
				style={{ paddingLeft: `${path.length * 0.75}rem` }}
				onClick={() => setIsExpanded((prev) => !prev)}
			>
				<DropDownIcon expanded={isExpanded} />
				{icon &&
					(isExpanded ? (
						<FolderOpen className='folder-icon' />
					) : (
						<FolderClosed className='folder-icon' />
					))}

				<p className='text'>{name}</p>
			</Button>
			{isExpanded && children}
		</div>
	);
};
