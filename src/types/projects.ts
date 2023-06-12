import React, { ReactNode } from 'react';

export type Project = {
	icon?: string;
	content?: ReactNode;
	badge?: string;
	imgSrc?: string;
	title: string;
	slug: string;
	description: string;
	github?: string;
	demo?: string;
};
