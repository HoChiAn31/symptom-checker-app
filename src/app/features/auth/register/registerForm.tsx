'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterForm() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phoneNumber, setPhoneNumber] = useState<string>('');

	const handleRegister = () => {
		// Handle registration logic here (e.g., API call)
		console.log('Đăng ký với:', { name, email, phoneNumber });
	};

	return (
		<div className='w-full max-w-lg rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/20 to-gray-600/10 p-6 shadow-lg backdrop-blur-xl'>
			{/* Tiêu đề */}
			<h2 className='mb-6 text-2xl font-bold text-white'>Đăng ký</h2>

			{/* Input Tên */}
			<div className='mb-4'>
				<label htmlFor='name' className='mb-1 block text-sm font-medium text-white'>
					Tên đầy đủ
				</label>
				<input
					id='name'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-white/50 focus:outline-none'
					placeholder='Tên đầy đủ'
				/>
			</div>

			{/* Input Email */}
			<div className='mb-4'>
				<label htmlFor='email' className='mb-1 block text-sm font-medium text-white'>
					Email
				</label>
				<input
					id='email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-white/50 focus:outline-none'
					placeholder='Email'
				/>
			</div>

			{/* Input Số điện thoại */}
			<div className='mb-6'>
				<label htmlFor='phoneNumber' className='mb-1 block text-sm font-medium text-white'>
					Số điện thoại
				</label>
				<input
					id='phoneNumber'
					type='tel'
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					className='w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-white/50 focus:outline-none'
					placeholder='Số điện thoại'
				/>
			</div>

			{/* Nút Đăng ký */}
			<button
				onClick={handleRegister}
				className='bg-primary w-full cursor-pointer rounded-2xl py-2 text-white hover:opacity-80'
			>
				Đăng ký
			</button>

			{/* Liên kết Đăng nhập */}
			<div className='mt-6 text-center'>
				<p className='text-sm text-white'>
					Bạn đã có tài khoản?{' '}
					<Link href='/login' className='text-blue-200 hover:underline'>
						Đăng nhập
					</Link>
				</p>
			</div>

			{/* Thông báo reCAPTCHA */}
			<div className='mt-4 text-center'>
				<p className='text-xs text-gray-400'>
					Trang này được bảo vệ bởi Google reCAPTCHA để đảm bảo bạn không phải là robot.{' '}
					<a href='#' className='text-blue-200 hover:underline'>
						Tìm hiểu thêm
					</a>
				</p>
			</div>
		</div>
	);
}
