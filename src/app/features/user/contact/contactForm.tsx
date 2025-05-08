'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function ContactForm() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const handleSendMessage = () => {
		// Handle message sending logic here (e.g., API call)
		console.log('Message sent:', { name, email, subject, message });
	};

	return (
		<div className=''>
			<div className='flex w-full flex-col gap-8 p-10'>
				<TextField
					label='Your Name'
					variant='outlined'
					fullWidth
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='rounded-md'
				/>
				<TextField
					label='Your Email'
					variant='outlined'
					fullWidth
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='rounded-md'
				/>
				<TextField
					label='Your Subject'
					variant='outlined'
					fullWidth
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					className='rounded-md'
				/>
				<TextField
					label='Your Message'
					variant='outlined'
					fullWidth
					multiline
					rows={4}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className='rounded-md'
				/>
				<Button
					onClick={handleSendMessage}
					variant='contained'
					sx={{
						textTransform: 'none',
					}}
					className='!bg-primary rounded-md !py-3 text-white hover:opacity-80'
				>
					Send Message
				</Button>
			</div>
		</div>
	);
}
