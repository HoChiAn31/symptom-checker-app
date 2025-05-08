import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';
import { useRouter } from 'next/navigation';

const FormBox = styled(Box)(({ theme }) => ({
	backgroundColor: 'white',
	padding: '30px',
	borderRadius: '10px',
	boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
	width: '100%',
	maxWidth: '400px',
}));

const Form: React.FC = () => {
	const [symptom, setSymptom] = useState('');
	const router = useRouter();

	const handleSubmit = () => {
		console.log('Triệu chứng người dùng nhập:', symptom);
		router.push('/result');
	};

	return (
		<div className='p-10'>
			<Grid container spacing={4} alignItems='center'>
				{/* Phần bên trái */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Box className='space-y-4 text-white'>
						<FadeInOnScroll direction='right' xStart={100}>
							<Typography className='text-primary mb-4 !text-lg font-bold'>
								Xác định triệu chứng của bạn
							</Typography>
						</FadeInOnScroll>
						<Typography className='mb-4 font-bold'>
							Mô tả triệu chứng của bạn để nhận đề xuất nhanh.
						</Typography>
						<Typography className='text-gray mb-8 !text-xs'>
							Lưu ý: Đây chỉ là thông tin tham khảo, không phải chẩn đoán y tế.
						</Typography>
					</Box>
				</Grid>

				{/* Phần bên phải - Form */}
				<Grid size={{ xs: 12, md: 6 }}>
					<FormBox className='!max-w-[720px]'>
						<Typography className='mb-6 text-center text-xl font-semibold text-gray-700'>
							Mô tả triệu chứng của bạn
						</Typography>

						<TextField
							fullWidth
							placeholder='Ví dụ: Sốt, ho, nhức đầu...'
							multiline
							rows={5}
							variant='outlined'
							margin='normal'
							value={symptom}
							onChange={(e) => setSymptom(e.target.value)}
						/>

						<Button
							fullWidth
							variant='contained'
							onClick={handleSubmit}
							className='mt-6'
							sx={{
								backgroundColor: '#10a0bd',
								borderRadius: '8px',
								padding: '12px',
								textTransform: 'none',
								fontWeight: 'bold',
								fontSize: '16px',
								'&:hover': {
									backgroundColor: '#3cc6e2',
								},
							}}
						>
							Xác định ngay
						</Button>
					</FormBox>
				</Grid>
			</Grid>
		</div>
	);
};

export default Form;
