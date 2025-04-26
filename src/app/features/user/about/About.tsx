import Breadcrumb from '@/app/components/Breadcrumb';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import Introduce from '../Home/Introduce';
import Team from '../Home/Team';
import Doctor from './Doctor';
import Process from './Process';

const About = () => {
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
	];
	return (
		<div>
			<div className='mx-auto my-[10%] max-w-5xl space-y-6 text-center text-white'>
				<FadeInOnScroll>
					<h3 className='animate-fade-left animate-once animate-duration-[600ms] animate-delay-100 animate-ease-in-out text-5xl font-bold'>
						About Us
					</h3>
				</FadeInOnScroll>
				<div className='flex items-center justify-center'>
					<Breadcrumb items={breadcrumbs} />
				</div>
			</div>
			<div className='bg-white pb-20'>
				<div className='container mx-auto space-y-10'>
					<Introduce />
				</div>
			</div>
			<Team />
			<div className='bg-white pt-10'>
				<div className='container mx-auto'>
					<Doctor />
					<Process />
				</div>
			</div>
		</div>
	);
};

export default About;
