'use client';

import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='bg-background'>
			<div className='relative min-h-screen overflow-hidden'>
				{/* Hình nền overlay mờ */}
				<div
					className='absolute top-0 left-0 h-full w-full opacity-5 transition-all duration-300'
					style={{
						backgroundImage:
							"url('https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/bg.jpg')",
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				/>

				{/* Nội dung */}
				<div className='bg-background relative z-10'>
					<Header />
					<div className='pt-[72px]'>{children}</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
