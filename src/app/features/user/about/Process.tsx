'use client';
import { Box, Button, Typography } from '@mui/material';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// Updated steps with Vietnamese translations
const steps = [
	{
		title: 'NHẬP TRIỆU CHỨNG',
		description:
			'Người dùng mô tả các triệu chứng sức khỏe đang gặp phải (ví dụ: sốt, ho, đau đầu, mệt mỏi...).',
		icon: '/icons/symptoms.png', // Replace with an icon representing entering symptoms
	},
	{
		title: 'HỆ THỐNG PHÂN TÍCH VÀ GỢI Ý',
		description:
			'Dựa vào triệu chứng, hệ thống đề xuất các chuyên khoa và bệnh viện/phòng khám phù hợp.',
		icon: '/icons/analysis.png', // Replace with an icon representing analysis
	},
	{
		title: 'CHỌN CƠ SỞ Y TẾ VÀ ĐẶT LỊCH',
		description:
			'Người dùng chọn bệnh viện hoặc phòng khám gần nhất, thời gian khám phù hợp và đặt lịch hẹn trực tuyến.',
		icon: '/icons/schedule.png', // Replace with an icon representing scheduling
	},
	{
		title: 'XÁC NHẬN VÀ ĐẾN KHÁM',
		description: 'Nhận thông tin xác nhận qua email/SMS và đến cơ sở y tế theo lịch đã đặt.',
		icon: '/icons/confirm.png', // Replace with an icon representing confirmation
	},
];

const Process: React.FC = () => {
	return (
		<Box className='flex min-h-screen flex-col md:flex-row'>
			{/* Left Section */}
			<Box className='relative flex w-full items-center justify-center p-8 md:w-1/2'>
				<Image
					src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/elementor/thumbs/video-call-consulting-with-doctor-private-clinic-support-e1637658580887-pghb0ks5wynfdpixnxi2o1lxklxzv8jl7bml5o03q8.jpg'
					alt='Bác sĩ'
					className='rounded-lg'
					width={500}
					height={628}
				/>

				<div className='absolute bottom-60 left-40 w-[280px] rounded-md bg-white p-4'>
					<div className='relative'>
						<p>Kết Nối Trực Tuyến & Nhận Giải Pháp Tốt Nhất Từ Bác Sĩ Của Chúng Tôi</p>
						<Button
							variant='text'
							sx={{
								textTransform: 'none',
								borderRadius: '8px',
								transition: 'all 0.3s ease-in-out',
								'&:hover': {
									transform: 'translateY(-8px) ',
								},
							}}
							className='flex items-center gap-2 !pl-0'
						>
							<p className='text-primary font-bold'> Bắt Đầu</p>
							<MoveRight color='#10a0bd' />
						</Button>
						<div className='absolute -bottom-6 left-0 h-0 w-0 border-t-[10px] border-r-[10px] border-l-[10px] border-t-white border-r-transparent border-l-transparent'></div>
					</div>
				</div>
			</Box>

			{/* Right Section */}
			<Box className='flex w-full flex-col justify-center !space-y-4 p-8 md:w-1/2'>
				<Typography
					variant='h4'
					sx={{ textTransform: 'none' }}
					className='mb-4 !text-lg font-bold text-blue-900'
				>
					Quy Trình Của Chúng Tôi
				</Typography>
				<Typography variant='h4' className='mb-6 font-bold text-blue-900'>
					4 Bước Để Nhận Giải Pháp
				</Typography>
				<Typography variant='body1' className='mb-8 text-gray-600'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</Typography>

				{/* Steps */}
				{steps.map((step, index) => (
					<Box key={index} className='mb-6 flex items-start'>
						<Box className='mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500'>
							{/* <Image src={step.icon} alt={step.title} width={24} height={24} /> */}
						</Box>
						<Box>
							<Typography variant='h6' className='font-semibold text-blue-900'>
								{step.title}
							</Typography>
							<Typography variant='body2' className='text-gray-600'>
								{step.description}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Process;
