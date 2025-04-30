'use client';
import Breadcrumb from '@/app/components/Breadcrumb';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import OurSpecialist from './OurSpecialist';
import Form from './Form';
import FAQ from './FAQ';
import FormCheck from './FormCheck';

function Service() {
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Services', href: '/service' },
	];
	return (
		<div>
			<div className='mx-auto my-[10%] max-w-5xl space-y-6 text-center text-white'>
				<FadeInOnScroll direction='right' xStart={100}>
					<h3 className='animate-fade-left animate-once animate-duration-[600ms] animate-delay-100 animate-ease-in-out text-5xl font-bold'>
						Services
					</h3>
				</FadeInOnScroll>
				<FadeInOnScroll direction='left' xStart={100}>
					<div className='flex items-center justify-center'>
						<Breadcrumb items={breadcrumbs} />
					</div>
				</FadeInOnScroll>
			</div>
			<div className='bg-white py-16'>
				<div className='container mx-auto space-y-10'>
					<OurSpecialist />
				</div>
			</div>
			<div className='container mx-auto space-y-10'>
				<Form />
			</div>
			<div className='bg-white py-16'>
				<div className='container mx-auto space-y-10'>
					<FAQ />
				</div>
			</div>
			<div className='bg-white py-16'>
				<div className='container mx-auto space-y-10'>
					<FormCheck />
				</div>
			</div>
		</div>
	);
}

export default Service;
