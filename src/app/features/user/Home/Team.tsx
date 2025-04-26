'use client';
import * as React from 'react';
import { Grid } from '@mui/material';
import { ClockFading, ContactRound, HeartPulse, Stethoscope } from 'lucide-react';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';

const Team = () => (
	<div className='relative h-[90vh] 2xl:h-[68vh]'>
		<div
			className='absolute inset-0 z-0 opacity-5'
			style={{
				backgroundImage:
					"url('https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/bg-2.jpg')",
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		/>
		<div className='relative z-10 container mx-auto p-10 text-white'>
			<Grid container columns={16} spacing={2}>
				<Grid size={{ xs: 8 }}>
					<FadeInOnScroll direction='left' xStart={100}>
						<p className='text-primary text-lg'>Why Choose Us</p>
					</FadeInOnScroll>
					<p className='text-4xl font-bold'>
						We Offer A Complete Range Of Online Doctor Consultation
					</p>
					<div className='pt-10'>
						<Grid container spacing={8}>
							<Grid size={{ xs: 12, sm: 6 }}>
								<div className='bg-primary flex h-16 w-16 items-center justify-center rounded-full'>
									<ContactRound height={32} width={32} />
								</div>
								<p className='text-xl font-medium'>Qualified Doctors</p>
								<p>
									Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
									incididunt
								</p>
							</Grid>
							<Grid size={{ xs: 12, sm: 6 }}>
								<div className='flex h-16 w-16 items-center justify-center rounded-full bg-white'>
									<HeartPulse color='#10a0bd' height={32} width={32} />
								</div>
								<p className='text-xl font-medium'>Range of Specialities</p>
								<p>
									Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
									incididunt
								</p>
							</Grid>
							<Grid size={{ xs: 12, sm: 6 }}>
								<div className='flex h-16 w-16 items-center justify-center rounded-full bg-white'>
									<ClockFading color='#10a0bd' height={32} width={32} />
								</div>
								<p className='text-xl font-medium'>24/7 Availability</p>
								<p>
									Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
									incididunt
								</p>
							</Grid>
							<Grid size={{ xs: 12, sm: 6 }}>
								<div className='bg-primary flex h-16 w-16 items-center justify-center rounded-full'>
									<Stethoscope height={32} width={32} />
								</div>
								<p className='text-xl font-medium'>Quality Service</p>
								<p>
									Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor
									incididunt
								</p>
							</Grid>
						</Grid>
					</div>
				</Grid>
				<Grid size={{ xs: 8 }}>
					<div className='relative pt-10'>
						<p className='text-gray'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo
						</p>
						<FadeInOnScroll yStart={50}>
							<div className='absolute z-0 mt-48 h-[400px] w-[800px] overflow-hidden rounded-4xl 2xl:mt-20 2xl:h-[500px] 2xl:w-[1000px]'>
								<img
									src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/female-doctor-waving-and-talking-with-colleagues-through-a-video-call-with-a-laptop-e1637658601636.jpg'
									alt='Female doctor talking'
									className='h-full w-full object-cover'
								/>
							</div>
						</FadeInOnScroll>
					</div>
				</Grid>
			</Grid>
		</div>
	</div>
);
export default Team;
