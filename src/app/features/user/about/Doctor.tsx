'use client';
import * as React from 'react';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import DoctorCard from '@/app/components/HospitalCard';
import { Button } from '@mui/material';
import { BookText, MoveRight } from 'lucide-react';
const Hospital = () => {
	const hospitals = [
		{
			name: 'Bệnh viện Bạch Mai',
			link: 'https://bachmai.gov.vn',
			specialty: 'Nội tổng quát',
			consultations: 6000,
			rating: 4.8,
			image: 'https://upload.wikimedia.org/wikipedia/vi/6/6b/Logo_BV_Bach_Mai.jpg',
		},
		{
			name: 'Bệnh viện Chợ Rẫy',
			link: 'https://choray.vn',
			specialty: 'Ngoại khoa',
			consultations: 4100,
			rating: 4.7,
			image: 'https://cdn.haitrieu.com/wp-content/uploads/2022/08/logo-benh-vien-cho-ray.png',
		},
		{
			name: 'BV Trung ương Huế',
			link: 'https://bvtrunguonghue.vn',
			specialty: 'Ghép tạng',
			consultations: 3200,
			rating: 4.6,
			image: 'https://media.loveitopcdn.com/3807/logo-benh-vien-trung-uong-hue-compressed.jpg',
		},
		{
			name: 'BV ĐH Y Dược TP.HCM',
			link: 'https://www.bvdaihoc.com.vn',
			specialty: 'Tiêu hóa',
			consultations: 8000,
			rating: 4.9,
			image:
				'https://upload.wikimedia.org/wikipedia/vi/thumb/6/64/Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Y_D%C6%B0%E1%BB%A3c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg/480px-Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Y_D%C6%B0%E1%BB%A3c_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg.png',
		},
	];

	return (
		<div className='pt-20 text-center'>
			<div className='mx-auto max-w-[600px] space-y-3 text-center'>
				<FadeInOnScroll yStart={50}>
					<p className='text-primary text-md font-bold'>Our Doctors</p>
				</FadeInOnScroll>
				<p className='text-background text-xl font-bold'>Meet Our Qualified Doctors</p>
				<p className='text-gray text-md'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</p>
			</div>
			<div className='mx-auto max-w-[1200px] px-6 py-10 text-white'>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
					{hospitals.map((hospital, index) => (
						<DoctorCard key={index} doctor={hospital} />
					))}
				</div>
				{/*  */}
				<div className='mt-10 flex items-center justify-between border-t border-[#EBEBEB] pt-10'>
					<div className='flex items-center gap-4'>
						<div className='bg-primary flex h-20 w-20 items-center justify-center rounded-full'>
							<BookText color='#ffffff' width={32} height={32} />
						</div>
						<div>
							<p className='text-background text-left text-xl font-bold'>
								Tư vấn trực tuyến miễn phí
							</p>
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
		</div>
	);
};
export default Hospital;
