// BlogCard.tsx
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { MoveRight } from 'lucide-react';

interface BlogCardProps {
	imageSrc: string;
	title: string;
	description: string;
	category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, description, category }) => {
	return (
		<div className='space-y-2'>
			<div className='relative'>
				<Image src={imageSrc} alt={title} width={363} height={250} className='rounded-xl' />
				<div className='bg-primary absolute bottom-2 left-2 rounded-md px-4 py-2 text-white'>
					{category}
				</div>
			</div>
			<p className='text-background hover:text-primary cursor-pointer text-lg'>{title}</p>
			<p className='text-gray1 line-clamp-3 text-sm'>{description}</p>
			<Button
				size='large'
				className='space-x-1 !px-0 !text-black transition-transform duration-300'
				sx={{
					textTransform: 'none',
					transition: 'all 0.3s ease-in-out',
					'&:hover': {
						transform: 'translateY(-8px)',
					},
				}}
			>
				<p className='font-bold'>Read more</p>
				<MoveRight />
			</Button>
		</div>
	);
};

export default BlogCard;
