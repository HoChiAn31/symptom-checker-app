import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';
import Image from 'next/image';

interface Doctor {
	name: string;
	link: string;
	specialty: string;
	consultations: number;
	rating: number;
	image: string;
}

interface HospitalCardProps {
	doctor: Doctor;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ doctor }) => {
	return (
		<Card
			className='w-64 cursor-pointer rounded-lg py-4 shadow-lg transition-shadow duration-300 hover:shadow-xl'
			sx={{ borderRadius: '16px' }}
		>
			<Box className='relative h-48 w-full'>
				<Image
					src={doctor.image}
					alt={doctor.name}
					layout='fill'
					objectFit='contain'
					className='rounded-t-lg'
				/>
			</Box>
			<CardContent className='!pb-0 text-center'>
				<Box className='text-background rounded-md py-2'>
					<Typography variant='h6' className='font-bold'>
						<a
							href={doctor.link}
							target='_blank'
							className='text-lg font-bold'
							rel='noopener noreferrer'
						>
							{doctor.name}
						</a>
					</Typography>
					<Typography variant='body2' className='text-gray1 mb-2'>
						{doctor.specialty}
					</Typography>
				</Box>

				<div className='space-y-2'>
					<Box className='flex items-center justify-center gap-1 pt-3'>
						<svg className='h-5 w-5 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
								clipRule='evenodd'
							/>
						</svg>
						<Typography variant='body2' className='mr-2 text-gray-500'>
							{doctor.consultations.toLocaleString()} lượt khám
						</Typography>
					</Box>
					<Rating value={doctor.rating} precision={0.1} readOnly />
				</div>
			</CardContent>
		</Card>
	);
};

export default HospitalCard;
