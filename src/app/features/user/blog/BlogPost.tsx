'use client';
import { Button } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BlogPostProps {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
}

export default function BlogPost({ id, title, date, description, image }: BlogPostProps) {
	const router = useRouter();

	const handleReadMore = () => {
		router.push(`/blog/${id}`);
	};

	return (
		<div className='mb-6 overflow-hidden rounded-lg'>
			<img src={image} alt={title} className='w-full object-cover' />
			<div className='p-4'>
				<span className='mb-2 inline-block text-sm text-gray-500'>{date}</span>
				<h2 className='mb-2 text-xl font-bold text-gray-800'>{title}</h2>
				<p className='mb-4 text-gray-600'>{description}</p>
				<Button
					sx={{
						textTransform: 'none',
						borderRadius: '8px',
						transition: 'all 0.3s ease-in-out',
						'&:hover': {
							transform: 'translateY(-4px) scale(1.02)',
						},
					}}
					className='!text-background rounded-md hover:bg-blue-50'
					onClick={handleReadMore}
				>
					Read More <ChevronRight height={16} width={16} color='#001439' />
				</Button>
			</div>
		</div>
	);
}
