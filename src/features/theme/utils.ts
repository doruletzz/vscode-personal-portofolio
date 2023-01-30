import { Theme } from '../../constants/theme';

export const getThemeFromLocalStorage = (): Theme => {
	const theme = localStorage.getItem('theme');
	return theme !== null ? Theme[theme as keyof typeof Theme] : Theme.DARK;
};

export const setThemeToLocalStorage = (theme: Theme) => {
	localStorage.setItem('theme', Theme[theme].toString());
};

export const deleteThemeFromLocalStorage = () => {
	localStorage.removeItem('theme');
};
