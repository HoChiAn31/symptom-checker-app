import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import { Button } from '@mui/material';
import Introduce from './Introduce';
import Category from './Category';
import Team from './Team';
import FeedBack from './FeedBack';
import Mobile from './Moblie';
import Blog from './Blog';

const HomePage = () => {
	return (
		<div className='h-full'>
			<div className='mx-auto my-[10%] max-w-5xl space-y-6 text-center text-white'>
				<FadeInOnScroll direction='left'>
					<h3 className='animate-fade-left animate-once animate-duration-[600ms] animate-delay-100 animate-ease-in-out text-5xl font-bold'>
						Consultation With Our Doctor Anywhere, Anytime by Phone or Video Call
					</h3>
				</FadeInOnScroll>
				<FadeInOnScroll direction='right'>
					<p className='mx-auto max-w-3xl text-gray-400'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit
					</p>
				</FadeInOnScroll>
				<div className='flex items-center justify-center'>
					<FadeInOnScroll direction='left' xStart={600}>
						<Button
							variant='contained'
							sx={{ textTransform: 'none' }}
							size='large'
							className='!bg-primary'
						>
							Get Started
						</Button>
					</FadeInOnScroll>

					<FadeInOnScroll direction='right' xStart={600}>
						<Button
							color='inherit'
							size='large'
							sx={{
								textTransform: 'none',
								'&:hover': {
									color: '#10a0bd',
								},
							}}
						>
							Watch Intro
						</Button>
					</FadeInOnScroll>
				</div>
			</div>
			<div className='bg-white pb-20'>
				<div className='container mx-auto space-y-10'>
					<Introduce />
					<Category />
				</div>
			</div>

			<Team />

			{/* ----------------------------------- */}
			<div className='bg-white py-20'>
				<FeedBack />
			</div>
			<Mobile />
			<div className='bg-white py-32 2xl:py-20'>
				<Blog />
			</div>
		</div>
	);
};

export default HomePage;
