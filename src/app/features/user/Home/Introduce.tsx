'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Typography, Grid, Avatar, Divider, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Image from 'next/image';
import {
	BookText,
	Check,
	CircleCheck,
	ClockFading,
	ContactRound,
	Earth,
	HeartPulse,
	MoveRight,
	Plus,
	Stethoscope,
} from 'lucide-react';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import useCountUp from '@/app/hooks/useCountUp';

const Introduce = () => {
	const count = useCountUp(2200, 10);
	const count1 = useCountUp(92, 2);
	const count2 = useCountUp(89, 2);

	return (
		<div className='mb-20 flex p-8 md:flex-row'>
			{/* Left Section: Images a nd Stats */}
			<div className='relative flex h-[600px] w-full items-start justify-center md:w-1/2'>
				<div className='bg-primary absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full opacity-50' />
				<Box className='relative h-[680px] w-[680px]'>
					<Box className='absolute top-10 left-16 z-10 h-[327px] w-[327px] overflow-hidden rounded-lg border-8 border-white shadow-lg'>
						<Image
							src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/elementor/thumbs/asian-senior-elderly-man-grandfather-video-call-with-doctor-in-living-room-at-home-e1637658591576-pghb0v4c07stvhluin9x8ztvbuckdgqdho09dswkns.jpg'
							alt='Doctor consultation'
							width={300}
							height={200}
							className='h-full w-full object-cover'
						/>
					</Box>
					<Box className='absolute right-16 bottom-10 h-[327px] w-[327px] overflow-hidden rounded-lg border-8 border-white shadow-lg'>
						<Image
							src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/elementor/thumbs/female-doctor-talking-with-colleagues-through-a-video-call-with-a-laptop-in-the-consultation-1-2-e1637658654562-pghb2ic5ue6914eggysawh02ndtiz7xw4mnc03f1ro.jpg'
							alt='Doctor working'
							width={300}
							height={200}
							className='h-full w-full object-cover'
						/>
					</Box>

					<Box className='absolute bottom-40 left-16 flex flex-col rounded-lg p-4'>
						<Box className=''>
							{/* <Image src='https://via.placeholder.com/50' alt='Globe icon' width={50} height={50} /> */}
							<Earth color='#10a0bd' width={32} height={32} />
						</Box>
						<Box>
							<div className='flex items-center'>
								<Typography variant='h6' className='!text-3xl font-bold'>
									{Math.floor(count)}
								</Typography>
								<Plus color='#10a0bd' width={20} height={20} />
							</div>
							<Typography variant='body2' className='text-gray !text-lg'>
								Satisfied Patients
							</Typography>
						</Box>
					</Box>
				</Box>
			</div>

			<Box className='w-full p-8 md:w-[600px]'>
				<FadeInOnScroll direction='right' xStart={100}>
					<p className='text-primary mb-4 !text-lg font-medium'>About Us</p>
				</FadeInOnScroll>
				<p className='mb-6 text-4xl font-bold'>
					We Provide Best Online Doctor Consultation For You
				</p>
				<p className='text-gray mb-6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>

				<Grid container spacing={2} columns={16}>
					{/* Features */}
					<Grid size={{ xs: 8 }}>
						<Grid container spacing={2} className='mb-6'>
							<Grid size={{ xs: 12 }}>
								<div className='space-y-2'>
									<Box className='flex items-center space-x-1'>
										<CircleCheck color='#10a0bd' />
										<Typography variant='body1' className='text-gray-600'>
											All Types of Doctors
										</Typography>
									</Box>
									<Typography variant='body2' className='ml-8 text-gray-500'>
										Lorem ipsum dolor sit amet consectetur adipiscing elit sed doesmo
									</Typography>
								</div>
							</Grid>
							<Grid size={{ xs: 12 }}>
								<div className='space-y-2'>
									<div className='flex items-center justify-between'>
										<Typography variant='body1' className='text-background'>
											Save More Times
										</Typography>
										<Typography variant='body2' className='text-gray font-bold'>
											{Math.floor(count1)}%
										</Typography>
									</div>
									<Box className='h-2.5 w-full rounded-full bg-gray-200'>
										<Box className='bg-primary h-2.5 rounded-full' style={{ width: '92%' }} />
									</Box>
								</div>
							</Grid>
						</Grid>
					</Grid>

					{/* Stats */}
					<Grid size={{ xs: 8 }}>
						<Grid container spacing={2} className='mb-6'>
							<Grid size={{ xs: 12 }}>
								<div className='space-y-2'>
									<Box className='flex items-center space-x-1'>
										<CircleCheck color='#10a0bd' />
										<Typography variant='body1' className='text-gray-600'>
											Get an E-Prescription
										</Typography>
									</Box>
									<Typography variant='body2' className='ml-8 text-gray-500'>
										Lorem ipsum dolor sit amet consectetur adipiscing elit sed doesmo
									</Typography>
								</div>
							</Grid>
							<Grid size={{ xs: 12 }}>
								<div className='space-y-2'>
									<div className='flex items-center justify-between'>
										<Typography variant='body1' className='text-background'>
											Integrated Labs
										</Typography>
										<Typography variant='body2' className='text-gray font-bold'>
											{Math.floor(count2)}%
										</Typography>
									</div>
									<Box className='h-2.5 w-full rounded-full bg-gray-200'>
										<Box className='bg-primary h-2.5 rounded-full' style={{ width: '89%' }} />
									</Box>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				{/* Founder */}
				<Box className='flex items-center'>
					<Avatar src='https://via.placeholder.com/50' alt='Founder' className='mr-4 h-12 w-12' />
					<Box>
						<p className='text-background text-lg font-medium'>Dr. Marlie Varga</p>
						<Typography variant='body2' className='text-gray'>
							Founder Holadoc
						</Typography>
					</Box>
					<Box className='ml-4'>
						<Image
							src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/signature.png'
							alt='Signature'
							width={100}
							height={30}
						/>
					</Box>
				</Box>
			</Box>
		</div>
	);
};
export default Introduce;
