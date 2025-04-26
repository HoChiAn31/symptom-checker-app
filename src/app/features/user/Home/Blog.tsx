'use client';
import * as React from 'react';
import BlogCard from '@/app/components/BlogCard';
const Blog = () => {
	const blogData = [
		{
			imageSrc:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/excess-information-difficult-situation-problems-anxiety-stress-depression-loss-of-cortrol-.jpg',
			title: 'Explaining How Stress Makes You Sick You Need To Know',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
			category: 'Insight',
		},
		{
			imageSrc:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/excess-information-difficult-situation-problems-anxiety-stress-depression-loss-of-cortrol-.jpg',
			title: 'Explaining How Stress Makes You Sick You Need To Know',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
			category: 'Insight',
		},
		{
			imageSrc:
				'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/excess-information-difficult-situation-problems-anxiety-stress-depression-loss-of-cortrol-.jpg',
			title: 'Explaining How Stress Makes You Sick You Need To Know',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
			category: 'Insight',
		},
	];
	return (
		<div className='2xl:mt-10'>
			<div className='mx-auto max-w-[600px] space-y-4 pb-4 text-center'>
				<p className='text-primary text-md font-bold'>Our Blog</p>
				<p className='text-background text-xl font-bold'>Lates Blog & Articles</p>
				<p className='text-gray text-md'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</p>
			</div>
			<div className='mx-auto max-w-[1000px]'>
				<div className='grid grid-cols-3 gap-10'>
					{blogData.map((blog, index) => (
						<BlogCard
							key={index}
							imageSrc={blog.imageSrc}
							title={blog.title}
							description={blog.description}
							category={blog.category}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default Blog;
