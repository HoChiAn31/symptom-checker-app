'use client';
import BlogPost from './BlogPost';
import BlogSidebar from './BlogSidebar';
const blogData = [
	{
		id: '1',
		title: 'Explaining How Stress Makes You Sick You Need To Know',
		date: 'November 18, 2021',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		image:
			'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg',
	},
	{
		id: '2',
		title: 'Walking Health Benefits That Everyone Must Know',
		date: 'November 18, 2021',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		image:
			'https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/jogging.jpg',
	},
];
export default function BlogPage() {
	return (
		<div className='flex min-h-screen items-start justify-center bg-gray-100 p-4'>
			<div className='flex w-full max-w-6xl flex-col gap-10 rounded-lg p-6 md:flex-row'>
				<div className='w-full md:w-2/3'>
					{blogData.map((post) => (
						<BlogPost key={post.id} {...post} />
					))}
				</div>
				<div className='w-full md:w-1/3'>
					<BlogSidebar />
				</div>
			</div>
		</div>
	);
}
