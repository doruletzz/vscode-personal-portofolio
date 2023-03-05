import React, {
	ChangeEvent,
	Dispatch,
	EventHandler,
	ReactNode,
	SetStateAction,
} from 'react';

import { ReactComponent as SearchIcon } from '../../assets/search-left-2.svg';

import './InputComponent.css';

type InputComponentProps = {
	icon?: ReactNode;
	required?: boolean;
	label?: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

export const InputComponent = ({
	required = false,
	value,
	setValue,
	icon,
	label,
}: InputComponentProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setValue(value);
	};

	return (
		<div
			className={`input${!value ? ' empty' : ''}${
				required ? ' required' : ''
			}`}
		>
			{icon && <SearchIcon />}
			{label && <label htmlFor='input-field'>{label} </label>}
			<input id='input-field' value={value} onChange={handleChange} />
		</div>
	);
};
