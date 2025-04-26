import React from 'react';
import { Button, Typography } from '@mui/material';

const SampleComponent: React.FC = () => {
	return (
		<div className='rounded-lg p-4'>
			<Typography variant='h5' className='mb-4'>
				Welcome to Next.js with Material UI
			</Typography>
			<Button variant='contained' color='primary'>
				Click Me
			</Button>
		</div>
	);
};

export default SampleComponent;
