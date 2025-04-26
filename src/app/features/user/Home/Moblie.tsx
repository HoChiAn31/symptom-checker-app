import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { Check, MoveRight } from 'lucide-react';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
const Mobile = () => {
	return (
		<div className='relative h-[120vh] py-20 2xl:h-[100vh]'>
			<div
				className='absolute inset-0 z-0 opacity-5'
				style={{
					backgroundImage:
						"url('https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/bg-2.jpg')",
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<div className='relative z-10 container mx-auto p-20 text-white'>
				<div className='flex items-center gap-56'>
					<div className='relative flex items-center justify-center'>
						<div className='relative h-[500px] w-[500px]'>
							<div className='bg-primary absolute top-0 left-0 h-full w-full rounded-full opacity-50' />
							<div className=''>
								<Image
									src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/app.png'
									alt='Signature'
									width={318}
									height={642}
									className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:-translate-y-[48%] hover:transform hover:transition-all hover:duration-300 hover:ease-in-out'
								/>
							</div>
						</div>
					</div>
					<div className='max-w-[600px] space-y-6'>
						<FadeInOnScroll direction='right' xStart={100}>
							<p className='text-primary font-bold'>Download Our App</p>
						</FadeInOnScroll>
						<p className='text-4xl font-bold'>Download Holadoc App From Your Gadget</p>
						<p className='text-gray1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco
						</p>

						<div>
							<Grid container spacing={1}>
								<Grid size={{ xs: 12, sm: 6 }}>
									<div className='text-gray1 flex items-center gap-1'>
										<Check color='#10a0bd' width={16} height={16} />
										<p className='text-xs font-bold'>Video Consult With Doctors</p>
									</div>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<div className='text-gray1 flex items-center gap-1'>
										<Check color='#10a0bd' width={16} height={16} />
										<p className='text-xs font-bold'>Ask Free Questions</p>
									</div>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<div className='text-gray1 flex items-center gap-1'>
										<Check color='#10a0bd' width={16} height={16} />
										<p className='text-xs font-bold'>Exclusive Healthcare</p>
									</div>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<div className='text-gray1 flex items-center gap-1'>
										<Check color='#10a0bd' width={16} height={16} />
										<p className='text-xs font-bold'>Live Medicine Order Tracking</p>
									</div>
								</Grid>
							</Grid>
						</div>
						<div className='flex items-center gap-10'>
							<FadeInOnScroll>
								<Button
									variant='text'
									sx={{
										textTransform: 'none',
										borderRadius: '8px',
										transition: 'all 0.3s ease-in-out',
										'&:hover': {
											transform: 'translateY(-16px)',
										},
									}}
								>
									<Image
										src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/app-store.png'
										alt='Signature'
										width={162}
										height={54}
									/>
								</Button>
							</FadeInOnScroll>
							<FadeInOnScroll>
								<Button
									variant='text'
									sx={{
										textTransform: 'none',
										borderRadius: '8px',
										transition: 'all 0.3s ease-in-out',
										'&:hover': {
											transform: 'translateY(-16px)',
										},
									}}
								>
									<Image
										src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/google-play.png'
										alt='Signature'
										width={162}
										height={54}
									/>
								</Button>
							</FadeInOnScroll>
						</div>
					</div>
				</div>
			</div>
			<FadeInOnScroll>
				<div className='z-20 mx-auto mt-10 max-w-[1000px] rounded-3xl bg-white p-10 shadow-lg 2xl:mt-28'>
					<div className='flex w-[900px] justify-between'>
						<div className='w-[50%]'>
							<p className='text-background text-3xl'>
								Start An Online Chat Consultation With Our Doctor
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna
							</p>
						</div>
						<div className='flex flex-col space-x-16'>
							<Button
								variant='contained'
								size='large'
								className='!bg-primary !mr-6 transition-transform duration-300'
								sx={{
									textTransform: 'none',
									borderRadius: '8px',
									transition: 'all 0.3s ease-in-out',
									'&:hover': {
										transform: 'translateY(-8px) ',
									},
								}}
							>
								<p>Consultation Now</p>
							</Button>

							<Button
								size='large'
								className='space-x-1 !text-black transition-transform duration-300'
								sx={{
									textTransform: 'none',
									borderRadius: '8px',
									transition: 'all 0.3s ease-in-out',
									'&:hover': {
										transform: 'translateY(-8px) ',
									},
								}}
							>
								<p className='font-bold'>More Information</p>
								<MoveRight />
							</Button>
						</div>
					</div>
				</div>
			</FadeInOnScroll>
		</div>
	);
};
export default Mobile;
