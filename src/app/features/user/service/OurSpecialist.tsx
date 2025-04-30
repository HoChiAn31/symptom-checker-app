import FadeInOnScroll from '@/app/components/FadeInOnScroll';

function OurSpecialist() {
	return (
		<div>
			<div className='mx-auto max-w-[600px] space-y-3 text-center'>
				<FadeInOnScroll yStart={50}>
					<p className='text-primary text-md font-bold'>Chuyên Gia Của Chúng Tôi</p>
				</FadeInOnScroll>
				<p className='text-background text-3xl font-bold'>
					Chúng Tôi Cung Cấp Dịch Vụ Tư Vấn Trực Tuyến Tốt Nhất
				</p>
				<p className='text-gray mx-auto max-w-[400px] text-xs'>
					Chúng tôi cam kết cung cấp dịch vụ tư vấn chất lượng, giúp bạn giải quyết các vấn đề sức
					khỏe nhanh chóng và hiệu quả.
				</p>
			</div>
		</div>
	);
}

export default OurSpecialist;
