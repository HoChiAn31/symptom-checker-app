import BlogSidebar from '../BlogSidebar';
import BlogContent from './blogContent';
import CommentForm from './commentForm';

export default function BlogDetailPage() {
	return (
		<div className='flex min-h-screen items-start justify-center bg-gray-100 p-4'>
			<div className='flex w-full max-w-6xl flex-col gap-6 rounded-lg bg-white p-6 shadow-lg md:flex-row'>
				<div className='w-full md:w-2/3'>
					<BlogContent />
					{/* <div className='mt-6 w-full max-w-6xl'>
						<CommentForm />
					</div> */}
				</div>
				<div className='w-full md:w-1/3'>
					<BlogSidebar />
				</div>
			</div>
		</div>
	);
}
