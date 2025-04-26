import React from 'react';
import Link from 'next/link';
import { Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
	const pathname = usePathname();
	return (
		<div className='bg-background fixed top-0 right-0 left-0 z-[99999]'>
			<header className='container mx-auto flex items-center justify-between border-b border-[#FFFFFF24] px-6 py-4 text-white'>
				{/* Logo Section */}
				<div className='flex items-center'>
					<svg
						className='mr-2 h-8 w-8'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='12' cy='12' r='10' stroke='#00BCD4' strokeWidth='2' />
						<path d='M12 6V18M6 12H18' stroke='#00BCD4' strokeWidth='2' strokeLinecap='round' />
					</svg>
					<Typography variant='h6' className='font-bold'>
						HolaDoc
					</Typography>
				</div>

				{/* Navigation Links */}
				<nav className='flex items-center space-x-6'>
					<Link
						href='/'
						className={`text-xs font-bold hover:text-cyan-400 ${pathname === '/' ? 'text-primary' : ''}`}
					>
						HOME
					</Link>
					<Link
						href='/about'
						className={`text-xs font-bold hover:text-cyan-400 ${pathname === '/about' ? 'text-primary' : ''}`}
					>
						ABOUT US
					</Link>
					<Link
						href='/service'
						className={`text-xs font-bold hover:text-cyan-400 ${pathname === '/service' ? 'text-primary' : ''}`}
					>
						SERVICES
					</Link>
					<Link href='/doctor' className='text-xs font-bold hover:text-cyan-400'>
						DOCTOR
					</Link>
					<div className='group relative'>
						<Link href='/pages' className='flex items-center text-xs font-bold hover:text-cyan-400'>
							PAGES
							<svg
								className='ml-1 h-4 w-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</Link>
					</div>
					<div className='group relative'>
						<Link href='/blog' className='flex items-center text-xs font-bold hover:text-cyan-400'>
							BLOG
							<svg
								className='ml-1 h-4 w-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</Link>
					</div>
					<Link href='/contact' className='text-xs font-bold hover:text-cyan-400'>
						CONTACT
					</Link>
				</nav>

				{/* Contact Number */}
				<div className='flex items-center'>
					<IconButton>
						<PhoneIcon className='text-cyan-400' />
					</IconButton>
					<Typography variant='body1' className='ml-2'>
						(+62)81 414 257
					</Typography>
				</div>
			</header>
		</div>
	);
};

export default Header;
