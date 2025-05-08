import { Button } from '@mui/material';

export default function BlogContent() {
	return (
		<div className='space-y-6'>
			<img
				src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg'
				alt='Consulting Specialists'
				className='w-full rounded-lg object-cover'
			/>
			<h1 className='text-2xl font-bold text-gray-800'>Our Consulting Specialists</h1>
			<p className='text-gray-600'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				<img
					src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg'
					alt='Consulting Session'
					className='rounded-lg object-cover'
				/>
				<img
					src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg'
					alt='Consulting Session'
					className='rounded-lg object-cover'
				/>
			</div>
			<p className='text-gray-600'>
				Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur.
			</p>
			<div className='flex space-x-4'>
				<span className='text-sm text-gray-500'>Health</span>
				{/* <Button variant='outlined' className='rounded-md text-blue-600 hover:bg-blue-50' href='#'>
					Save This
				</Button> */}
			</div>
		</div>
	);
}
