import { useState } from 'react';
import Button from '../Button';
import { ReactComponent as DropDown } from '../../assets/drop-down.svg';
import { ReactComponent as DropRight } from '../../assets/drop-right.svg';

type FolderComponentProps = {
	iconSrc?: string;
	name: string;
	path: Array<string>;
	children?: React.ReactNode;
};

const DropDownIcon = ({ isExpanded }) =>
	isExpanded ? <DropDown /> : <DropRight />;

export const FolderComponent = ({
	iconSrc,
	name,
	path,
	children,
}: FolderComponentProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true);

	return (
		<div className={`explorer-folder${isExpanded ? ' expanded' : ''}`}>
			<Button
				style={{ paddingLeft: `${path.length * 0.75}rem` }}
				onClick={() => setIsExpanded((prev) => !prev)}
			>
				<DropDownIcon isExpanded={isExpanded} />
				{name}
			</Button>
			{isExpanded && children}
		</div>
	);
};
