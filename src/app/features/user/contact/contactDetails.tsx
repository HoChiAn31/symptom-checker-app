import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import { Phone, Email, LocationOn } from '@mui/icons-material';

export default function ContactDetails() {
	return (
		<div className='flex flex-col gap-8'>
			{/* Tiêu đề và mô tả */}
			<FadeInOnScroll direction='left' xStart={100}>
				<p className='text-primary text-lg font-bold'>Liên hệ với chúng tôi</p>
			</FadeInOnScroll>

			<div className='space-y-4'>
				<p className='text-background text-4xl font-bold'>Hãy kết nối với chúng tôi</p>
				<p className='text-gray text-xs'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi.
				</p>
			</div>

			{/* Thông tin liên hệ */}
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				<div className='flex items-start gap-3 rounded-md bg-white p-4 shadow-sm'>
					<LocationOn className='text-cyan-500' />
					<div>
						<h3 className='font-semibold text-gray-800'>Chi nhánh Kuta</h3>
						<p className='text-sm text-gray-600'>Jl. Sunset Road Số 815, Kuta</p>
					</div>
				</div>
				<div className='flex items-start gap-3 rounded-md bg-white p-4 shadow-sm'>
					<LocationOn className='text-cyan-500' />
					<div>
						<h3 className='font-semibold text-gray-800'>Chi nhánh Denpasar</h3>
						<p className='text-sm text-gray-600'>Jl. Raya Puputan Số 142, Denpasar</p>
					</div>
				</div>
				<div className='flex items-start gap-3 rounded-md bg-white p-4 shadow-sm'>
					<Phone className='text-cyan-500' />
					<div>
						<h3 className='font-semibold text-gray-800'>Số điện thoại khẩn cấp</h3>
						<p className='text-sm text-gray-600'>(+62) 881 414 257</p>
					</div>
				</div>
				<div className='flex items-start gap-3 rounded-md bg-white p-4 shadow-sm'>
					<Email className='text-cyan-500' />
					<div>
						<h3 className='font-semibold text-gray-800'>Email hỗ trợ</h3>
						<p className='text-sm text-gray-600'>support@domain.com</p>
					</div>
				</div>
			</div>

			{/* Social Media */}
			<div className=''>
				<h3 className='mb-3 font-semibold text-gray-800'>Mạng xã hội của chúng tôi</h3>
				<div className='mt-5 flex gap-3'>
					<a href='#' className='rounded-full bg-cyan-500 p-2 text-white hover:bg-cyan-600'>
						<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M22 12a10 10 0 1 0-11.45 9.87V15h-2.5v-3h2.5V9.5a3.5 3.5 0 0 1 3.5-3.5h2.5v3h-2.5a1 1 0 0 0-1 1V12h3.5l-.5 3h-3v6.87A10 10 0 0 0 22 12z' />
						</svg>
					</a>
					<a href='#' className='rounded-full bg-cyan-500 p-2 text-white hover:bg-cyan-600'>
						<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
						</svg>
					</a>
					<a href='#' className='rounded-full bg-cyan-500 p-2 text-white hover:bg-cyan-600'>
						<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M12 2.04c-5.52 0-9.96 4.44-9.96 9.96 0 4.41 3.54 8.04 8.04 8.88v-6.24h-2.4v-2.64h2.4V9.96c0-2.4 1.44-3.72 3.6-3.72 1.08 0 2.04.12 2.04.12v2.28h-1.2c-1.2 0-1.44.6-1.44 1.44v1.92h2.88l-.48 2.64h-2.4v6.24c4.5-.84 8.04-4.47 8.04-8.88 0-5.52-4.44-9.96-9.96-9.96z' />
						</svg>
					</a>
					<a href='#' className='rounded-full bg-cyan-500 p-2 text-white hover:bg-cyan-600'>
						<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M19.2 2H4.8C3.24 2 2 3.24 2 4.8v14.4C2 20.76 3.24 22 4.8 22h14.4c1.56 0 2.8-1.24 2.8-2.8V4.8C22 3.24 20.76 2 19.2 2zM8.4 19.2H5.6v-8.4h2.8v8.4zm-1.4-9.6c-.96 0-1.6-.72-1.6-1.68 0-.96.64-1.68 1.6-1.68s1.6.72 1.6 1.68c0 .96-.64 1.68-1.6 1.68zm12.6 9.6h-2.8v-4.56c0-1.08-.4-1.8-1.4-1.8-.76 0-1.2.52-1.4 1.04-.08.2-.12.48-.12.76v4.56h-2.8s.04-7.4 0-8.4h2.8v1.2c.36-.56 1.04-1.36 2.52-1.36 1.84 0 3.2 1.2 3.2 3.76v4.8z' />
						</svg>
					</a>
					<a href='#' className='rounded-full bg-cyan-500 p-2 text-white hover:bg-cyan-600'>
						<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.19.1-2.48 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.29.2 2.23.1 2.48.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.67.93.67 1.87v2.77c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z' />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
