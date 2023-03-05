import { ReactNode } from 'react';

export type Project = {
	icon?: string;
	title: string;
	slug: string;
	description: string;
	github?: string;
	demo?: string;
};
