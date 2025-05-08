'use client';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import ContactDetails from './contactDetails';
import ContactForm from './contactForm';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function ContactPage() {
	const breadcrumbs = [
		{ label: 'Trang chủ', href: '/' },
		{ label: 'Liên hệ', href: '/contact' },
	];
	return (
		<div>
			<div className='mx-auto my-[5%] max-w-5xl space-y-6 text-center text-white'>
				<FadeInOnScroll>
					<h3 className='animate-fade-left animate-once animate-duration-[600ms] animate-delay-100 animate-ease-in-out text-5xl font-bold'>
						Trang chủ
					</h3>
				</FadeInOnScroll>
				<div className='flex items-center justify-center'>
					<Breadcrumb items={breadcrumbs} />
				</div>
			</div>
			<div className='flex items-center justify-center bg-gray-100 p-4 py-28'>
				<div className='flex w-full max-w-7xl flex-col gap-x-8 md:flex-row'>
					<div className='w-full rounded-lg bg-white p-6 shadow-lg md:w-1/2'>
						<ContactForm />
					</div>
					<div className='w-full bg-gray-100 p-6 md:w-1/2'>
						<ContactDetails />
					</div>
				</div>
			</div>
		</div>
	);
}
