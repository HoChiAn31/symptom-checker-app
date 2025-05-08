'use client';

import { Eye, EyeSlash } from '@/app/components/icon';
import Link from 'next/link';
import { useState } from 'react';

export default function LogInForm() {
	const [emailOrPhone, setEmailOrPhone] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [rememberMe, setRememberMe] = useState<boolean>(false);

	const handleSignIn = () => {
		// Xử lý logic đăng nhập ở đây (ví dụ: gọi API)
		console.log('Đăng nhập với:', { emailOrPhone, password, rememberMe });
	};

	return (
		<div className='w-full max-w-lg rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/20 to-gray-600/10 p-6 shadow-lg backdrop-blur-xl'>
			{/* Tiêu đề */}
			<h2 className='mb-6 text-center text-3xl font-bold text-white'>Đăng nhập</h2>

			{/* Input Email hoặc Số điện thoại */}
			<div className='mb-4'>
				<label htmlFor='emailOrPhone' className='mb-1 block text-sm font-medium text-white'>
					Email hoặc số điện thoại
				</label>
				<input
					id='emailOrPhone'
					type='text'
					value={emailOrPhone}
					onChange={(e) => setEmailOrPhone(e.target.value)}
					className='w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-white/50 focus:outline-none'
					placeholder='Email hoặc số điện thoại'
				/>
			</div>

			{/* Input Mật khẩu */}
			<div className='relative mb-6'>
				<label htmlFor='password' className='mb-1 block text-sm font-medium text-white'>
					Mật khẩu
				</label>
				<div className='relative'>
					<input
						id='password'
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-white/50 focus:outline-none'
						placeholder='Mật khẩu'
					/>
					<button
						onClick={() => setShowPassword(!showPassword)}
						className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-sm text-gray-400'
					>
						{showPassword ? <Eye /> : <EyeSlash />}
					</button>
				</div>
			</div>

			{/* Nút Đăng nhập */}
			<button
				onClick={handleSignIn}
				className='bg-primary w-full cursor-pointer rounded-full py-2 text-white hover:opacity-80'
			>
				Đăng nhập
			</button>

			{/* Lựa chọn Ghi nhớ và Cần trợ giúp */}
			<div className='mt-4 flex items-center justify-between'>
				<div className='flex items-center'></div>
				<a href='#' className='text-sm text-blue-200 hover:underline'>
					Quên mật khẩu?
				</a>
			</div>

			{/* Liên kết Đăng ký */}
			<div className='mt-6 text-center'>
				<p className='text-sm text-white'>
					Bạn chưa có tài khoản?{' '}
					<Link href='/register' className='text-blue-200 hover:underline'>
						Đăng ký
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
