'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { BookText, MoveRight } from 'lucide-react';
const Category = () => {
	const specialties = [
		{
			name: 'Bác sĩ đa khoa',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/general-32LR9DN.png',
		},
		{
			name: 'Tâm lý',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/psychiatry.png',
		},
		{
			name: 'Nha sĩ',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/dentist.png',
		},
		{
			name: 'Nhi khoa',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/baby.png',
		},
		{
			name: 'Nội khoa',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/medicine.png',
		},
		{
			name: 'Hô hấp',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/pulmonology.png',
		},
	];
	return (
		<div>
			<Grid container spacing={2}>
				{specialties.map((specialtie, index) => (
					<Grid size={{ xs: 2 }} key={index}>
						<div className='flex flex-col items-center gap-y-4'>
							<Image
								src={specialtie.image}
								alt={specialtie.name}
								width={70}
								height={70}
								// className='h-full w-full object-cover'
							/>
							<p className='text-background font-semibold'>{specialtie.name}</p>
						</div>
					</Grid>
				))}
			</Grid>
			<div className='my-10 border border-[#EBEBEB]'></div>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div className='bg-primary flex h-20 w-20 items-center justify-center rounded-full'>
						<BookText color='#ffffff' width={32} height={32} />
					</div>
					<div>
						<p className='text-background text-xl font-bold'>Tư vấn trực tuyến miễn phí</p>
						<p className='text-gray text-lg'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
						</p>
					</div>
				</div>
				<div className='space-x-16'>
					<Button
						variant='contained'
						size='large'
						className='!bg-primary !mr-6 transition-transform duration-300'
						sx={{
							textTransform: 'none',
							borderRadius: '8px',
							transition: 'all 0.3s ease-in-out',
							'&:hover': {
								transform: 'translateY(-16px) scale(1.02)',
							},
						}}
					>
						<p>Make Appointment</p>
					</Button>

					<Button
						size='large'
						className='space-x-1 !text-black transition-transform duration-300'
						sx={{
							textTransform: 'none',
							borderRadius: '8px',
							transition: 'all 0.3s ease-in-out',
							'&:hover': {
								transform: 'translateY(-16px) scale(1.02)',
							},
						}}
					>
						<p className='font-bold'>All Specialist</p>
						<MoveRight />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Category;
