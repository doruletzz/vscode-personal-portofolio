import React, {
	MouseEvent,
	MouseEventHandler,
	useEffect,
	useState,
} from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

import './ContactPageComponent.css';

type Social = {
	name: string;
	href: string;
	target: '_blank' | '_self';
};

const SOCIALS: Array<Social> = [
	{
		name: 'email',
		href: 'https://dev.to/doruletzz',
		target: '_blank',
	},
	{
		name: 'twitter',
		href: 'https://twitter.com/doruletzz',
		target: '_blank',
	},
	{
		name: 'github',
		href: 'https://github.com/doruletzz',
		target: '_blank',
	},
	{
		name: 'blog',
		href: 'https://dev.to/doruletzz',
		target: '_blank',
	},
];

export const ContactPageComponent = () => {
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const errors = [];

		const emailError = validateEmail(email);
		if (emailError) errors.push(emailError);

		const nameError = validateName(name);
		if (nameError) errors.push(nameError);

		const messageError = validateMessage(message);
		if (messageError) errors.push(messageError);

		if (errors.length) setError(errors.join(' '));
	};

	useEffect(() => {
		if (error) {
			console.error(error);
			setError(null);
		}
	}, [error]);

	const validateEmail = (value: string) => {
		if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
			return 'Please add a valid email.';
	};

	const validateName = (value: string) => {
		if (!value || value.length === 0) return 'Please add a subject title.';
	};

	const validateMessage = (value: string) => {
		if (!value || value.length === 0) return 'Please add a message.';
	};

	const [subject, setSubject] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	return (
		<div className='contact-page-display'>
			<h1 className='heading'>LET'S START WORKING</h1>
			<h1 className='heading'>TOGETHER</h1>
			<div className='contacts'>
				<Card component='form' className='form'>
					<Input
						required
						value={name}
						setValue={setName}
						label='Full Name'
					/>
					<Input
						value={subject}
						setValue={setSubject}
						label='Subject'
					/>
					<Input
						required
						value={email}
						setValue={setEmail}
						label='Email'
					/>
					<TextArea
						required
						value={message}
						setValue={setMessage}
						label='Message'
					/>
					<Button id='submit' onClick={handleSubmit}>
						send
					</Button>
				</Card>
				<div className='socials'>
					<h6>MY SOCIALS</h6>
					<ul>
						{SOCIALS.map((social) => (
							<li>
								<a href={social.href} target={social.target}>
									{social.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
