import { useState } from 'react';
import Button from '../Button';

type FileComponentProps = {
	iconSrc?: string;
	name: string;
	path: Array<string>;
};

export const FileComponent = ({ iconSrc, name, path }: FileComponentProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	return (
		<div className='explorer-file'>
			<Button
				style={{ paddingLeft: `${path.length * 0.75}rem` }}
				onClick={() => setIsExpanded((prev) => !prev)}
			>
				{name}
			</Button>
		</div>
	);
};
