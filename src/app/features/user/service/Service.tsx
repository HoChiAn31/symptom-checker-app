'use client';
import Breadcrumb from '@/app/components/Breadcrumb';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';

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
			<div className='bg-white pb-20'>
				<div className='container mx-auto space-y-10'></div>
			</div>
		</div>
	);
}

export default Service;
