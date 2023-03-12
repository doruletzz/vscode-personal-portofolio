import { ReactNode } from 'react';

export type Project = {
	icon?: string;
	imgSrc?: string;
	title: string;
	slug: string;
	description: string;
	github?: string;
	demo?: string;
};
