import { Phone } from '@mui/icons-material';
import { Button } from '@mui/material';
import { ChevronRight } from 'lucide-react';

export default function BlogSidebar() {
	return (
		<div className='space-y-6'>
			{/* Recent Posts */}
			<div className='rounded-lg bg-gray-50 p-4 shadow-md'>
				<h3 className='mb-4 text-lg font-semibold text-gray-800'>Recent Posts</h3>
				<ul className='space-y-4'>
					<li className='flex items-center gap-3'>
						<img
							src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg'
							alt='Post'
							className='h-12 w-12 rounded'
						/>
						<a href='#' className='text-background hover:text-primary text-sm'>
							Explaining How Stress Makes You Sick You Need To Know
						</a>
					</li>
					<li className='flex items-center gap-3'>
						<img
							src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg'
							alt='Post'
							className='h-12 w-12 rounded'
						/>
						<a href='#' className='text-background hover:text-primary text-sm'>
							Walking Health Benefits That Everyone Must Know
						</a>
					</li>
					<li className='flex items-center gap-3'>
						<img
							src='https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg'
							alt='Post'
							className='h-12 w-12 rounded'
						/>
						<a href='#' className='text-background hover:text-primary text-sm'>
							How To Decrease The Level Of Adipose in the Body
						</a>
					</li>
				</ul>
			</div>

			{/* Emergency Call */}
			<div className='bg-background rounded-lg p-4 text-center text-white'>
				<h3 className='mb-2 text-lg font-semibold'>Emergency Call</h3>
				<p className='mb-4 text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore.
				</p>
				<Button
					variant='contained'
					startIcon={<Phone />}
					className='!bg-primary rounded-md text-white hover:opacity-80'
					href='tel:+6281414257'
				>
					(+62) 881 414 257
				</Button>
			</div>

			{/* Categories */}
			<div className='rounded-lg bg-gray-50 p-4 shadow-md'>
				<h3 className='mb-4 text-lg font-semibold text-gray-800'>Categories</h3>
				<ul className='space-y-2'>
					<li>
						<a href='#' className='text-background flex items-center text-sm hover:underline'>
							<ChevronRight color='#10a0bd' /> Medicine
						</a>
					</li>
					<li>
						<a href='#' className='text-background flex items-center text-sm hover:underline'>
							<ChevronRight color='#10a0bd' /> Insight
						</a>
					</li>
					<li>
						<a href='#' className='text-background flex items-center text-sm hover:underline'>
							<ChevronRight color='#10a0bd' /> Health
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
