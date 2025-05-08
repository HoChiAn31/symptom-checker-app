'use client';

import { useState } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';

export default function CommentForm() {
	const [comment, setComment] = useState<string>('');
	const [saveEmail, setSaveEmail] = useState<boolean>(false);

	const handleLeaveReply = () => {
		// Handle comment submission logic here (e.g., API call)
		console.log('Comment submitted:', { comment, saveEmail });
	};

	return (
		<div className='rounded-lg bg-white p-6 shadow-md'>
			<h3 className='mb-4 text-xl font-bold text-gray-800'>Leave a Reply</h3>
			<p className='mb-4 text-sm text-gray-600'>
				Your email address will not be published. Required fields are marked *
			</p>
			<TextField
				label='Comment*'
				variant='outlined'
				fullWidth
				multiline
				rows={4}
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				className='mb-4 rounded-md'
			/>
			<div className='flex items-center justify-between'>
				<Checkbox
					checked={saveEmail}
					onChange={(e) => setSaveEmail(e.target.checked)}
					color='primary'
				/>
				<span className='text-sm text-gray-600'>
					Save my name, email, and website in this browser for the next time I comment
				</span>
			</div>
			<Button
				onClick={handleLeaveReply}
				variant='contained'
				className='mt-4 rounded-md bg-cyan-500 text-white hover:bg-cyan-600'
			>
				Post Comment
			</Button>
		</div>
	);
}
