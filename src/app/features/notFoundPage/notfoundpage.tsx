import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<>
			<div className='flex min-h-[86vh] flex-col items-center justify-center'>
				<h1 className='text-primary text-9xl font-bold'>404</h1>
				<h2 className='mt-4 text-2xl font-semibold text-white'>Trang không tìm thấy</h2>
				<p className='text-gray mt-2 text-xs'>
					Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm hoăc đang trong quá trình
					phát triển.
				</p>
				<Link
					href='/'
					// className='!bg-primary mt-6 rounded-lg px-6 py-3 text-white hover:text-blue-500'
				>
					Về trang chủ
				</Link>
			</div>
		</>
	);
}
