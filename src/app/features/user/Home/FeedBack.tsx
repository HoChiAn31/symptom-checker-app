'use client';
import * as React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
const FeedBack = () => {
	const testimonials = [
		{
			name: 'Name 1',
			role: 'Businessman',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/testimonial-M6NJPEF.png',
			text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
		},
		{
			name: 'Name 2',
			role: 'Designer',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/testimonial-M6NJPEF.png',
			text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			name: 'Name 3',
			role: 'Developer',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/testimonial-M6NJPEF.png',
			text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		},
		{
			name: 'Name 4',
			role: 'Developer',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/testimonial-M6NJPEF.png',
			text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		},
		{
			name: 'Name 5',
			role: 'Developer',
			image:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/testimonial-M6NJPEF.png',
			text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		},
	];
	const settings = {
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		pauseOnHover: false,
	};
	return (
		<div className='pt-20 text-center'>
			<div className='mx-auto max-w-[600px] space-y-3 text-center'>
				<FadeInOnScroll yStart={50}>
					<p className='text-primary text-md font-bold'>Patients Feedback</p>
				</FadeInOnScroll>
				<p className='text-background text-xl font-bold'>Positive Feedback From Our Patients</p>
				<p className='text-gray text-md'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</p>
			</div>

			<div className='flex items-center justify-center py-20'>
				<Image
					src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/map-dotted-e1637228843644.jpg'
					alt='Signature'
					width={1000}
					height={500}
				/>
			</div>

			<div className='mx-auto max-w-[1200px] px-6 py-10 text-white'>
				<Slider {...settings}>
					{testimonials.map((item, index) => (
						<div key={index} className='px-4'>
							<div className='bg-background w-[360px] rounded-xl px-6 py-10'>
								<p className='text-gray1 mb-4 line-clamp-3 h-10 text-left text-sm'>{item.text}</p>
								<div className='flex items-center gap-3 pt-10'>
									<Image
										src={item.image}
										alt='Signature'
										width={60}
										height={60}
										className='rounded-full'
									/>
									<div className='text-left'>
										<p className='text-lg font-bold'>{item.name}</p>
										<p className='text-gray text-xs'>{item.role}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};
export default FeedBack;
