import React, {
	ChangeEvent,
	Dispatch,
	EventHandler,
	SetStateAction,
} from 'react';

import { ReactComponent as SearchIcon } from '../../assets/search-left-2.svg';
import Input from '../Input';

import './SearchBarComponent.css';

type SearchBarComponentProps = {
	icon?: boolean;
	label?: string;
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
};

export const SearchBarComponent = ({
	searchValue,
	setSearchValue,
	icon = true,
	label,
}: SearchBarComponentProps) => (
	<Input
		icon={icon && <SearchIcon />}
		label={label}
		value={searchValue}
		setValue={setSearchValue}
	/>
);
