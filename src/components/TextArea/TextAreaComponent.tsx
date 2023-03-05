import React, {
	ChangeEvent,
	Dispatch,
	EventHandler,
	ReactNode,
	SetStateAction,
} from 'react';

import { ReactComponent as SearchIcon } from '../../assets/search-left-2.svg';

import './TextAreaComponent.css';

type TextAreaComponent = {
	rows?: number;
	required?: boolean;
	label?: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

export const TextAreaComponent = ({
	required = false,
	value,
	setValue,
	rows = 8,
	label,
}: TextAreaComponent) => {
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;

		setValue(value);
	};

	return (
		<div
			className={`textarea${!value ? ' empty' : ''}${
				required ? ' required' : ''
			}`}
		>
			{label && <label htmlFor='input-field'>{label} </label>}
			<textarea
				rows={rows}
				id='input-field'
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};
