'use client';
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';

interface FaqItemProps {
	question: string;
	answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
	return (
		<Accordion
			sx={{
				'&::before': {
					backgroundColor: 'transparent',
					style: { top: '0 !important', backgroundColor: 'transparent  !important' },
				},
			}}
			className='mb-4 !rounded-md !shadow-[0px_3px_15px_0px_rgba(17,31,98,0.15)]'
		>
			<AccordionSummary
				expandIcon={
					<ExpandMoreIcon
						sx={{
							color: '#10a0bd',
						}}
					/>
				}
			>
				<Typography className='!text-xs !font-bold'>{question}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<p className='text-gray text-left text-xs'>{answer}</p>
			</AccordionDetails>
		</Accordion>
	);
};

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: '#f9fafb',
	padding: '40px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const faqData = [
	{
		question: 'Làm sao để tôi có thể tham khảo ý kiến bác sĩ trực tuyến ngay bây giờ?',
		answer:
			'Bạn chỉ cần truy cập vào website hoặc ứng dụng của chúng tôi, chọn bác sĩ mà bạn muốn tham khảo ý kiến và đặt lịch hẹn. Sau khi xác nhận lịch, bạn sẽ được kết nối với bác sĩ ngay lập tức qua cuộc gọi video.',
	},
	{
		question: 'Tôi có thể chia sẻ báo cáo kê đơn trong khi tham khảo ý kiến bác sĩ không?',
		answer:
			'Có, bạn có thể chia sẻ báo cáo kê đơn hoặc bất kỳ tài liệu y tế nào trong quá trình tham khảo ý kiến bác sĩ. Hệ thống của chúng tôi cho phép bạn tải lên các tài liệu cần thiết trong cuộc trò chuyện với bác sĩ.',
	},
	{
		question: 'Tại sao tôi chưa nhận được phản hồi từ bác sĩ?',
		answer:
			'Nếu bạn chưa nhận được phản hồi từ bác sĩ, có thể bác sĩ đang xử lý các cuộc tham khảo khác hoặc có lịch trình bận. Chúng tôi khuyến khích bạn kiên nhẫn và sẽ thông báo ngay khi bác sĩ phản hồi.',
	},
	{
		question: 'Đơn thuốc điện tử của tôi có hợp lệ tại các hiệu thuốc offline không?',
		answer:
			'Đúng vậy, đơn thuốc điện tử của bạn hoàn toàn hợp lệ tại các hiệu thuốc offline. Bạn chỉ cần xuất trình mã đơn thuốc điện tử để nhận thuốc tại hiệu thuốc gần nhất.',
	},
	{
		question: 'Dữ liệu y tế của tôi có an toàn không?',
		answer:
			'Chúng tôi cam kết bảo mật dữ liệu y tế của bạn bằng các biện pháp bảo mật tiên tiến nhất. Mọi thông tin y tế được mã hóa và chỉ có bác sĩ và bạn mới có thể truy cập.',
	},
	{
		question: 'Tôi có thể thay đổi lịch khám không?',
		answer:
			'Bạn có thể thay đổi lịch khám nếu có thay đổi vào phút cuối. Tuy nhiên, vui lòng thông báo trước ít nhất 24 giờ để chúng tôi có thể điều chỉnh lịch và không ảnh hưởng đến lịch làm việc của bác sĩ.',
	},
	{
		question: 'Khám trực tuyến có hiệu quả như khám trực tiếp không?',
		answer:
			'Khám trực tuyến rất hiệu quả và tương đương với khám trực tiếp trong nhiều trường hợp. Tuy nhiên, đối với các vấn đề cần kiểm tra thể chất trực tiếp, bác sĩ có thể yêu cầu bạn đến khám tại cơ sở y tế.',
	},
	{
		question: 'Làm sao để tôi thanh toán cho lần khám của mình?',
		answer:
			'Bạn có thể thanh toán trực tuyến thông qua các phương thức như thẻ tín dụng, thẻ ghi nợ hoặc ví điện tử. Hệ thống của chúng tôi hỗ trợ các phương thức thanh toán an toàn và nhanh chóng.',
	},
];

const FAQ: React.FC = () => {
	return (
		<StyledBox>
			<Box className='max-w-5xl text-center'>
				<div className='space-y-3 pb-8'>
					<FadeInOnScroll direction='right' xStart={100}>
						<p className='text-primary text-md text-center font-bold'>Câu Hỏi Thường Gặp</p>
					</FadeInOnScroll>
					<p className='text-background text-3xl font-bold'>Các Câu Hỏi Chung Về HealDoc </p>
					<p className='text-gray mx-auto max-w-[400px] text-xs'>	
						Chúng tôi cung cấp các thông tin hữu ích để giúp bạn giải đáp các thắc mắc về dịch vụ tư
						vấn trực tuyến tại Holadoc.
					</p>
				</div>
				<Box className='flex space-x-8'>
					{/* Render câu hỏi cho cột bên trái */}
					<Box className='flex-1'>
						{faqData.slice(0, 4).map((item, index) => (
							<FaqItem key={index} question={item.question} answer={item.answer} />
						))}
					</Box>
					{/* Render câu hỏi cho cột bên phải */}
					<Box className='flex-1'>
						{faqData.slice(4, 8).map((item, index) => (
							<FaqItem key={index} question={item.question} answer={item.answer} />
						))}
					</Box>
				</Box>
			</Box>
		</StyledBox>
	);
};

export default FAQ;
