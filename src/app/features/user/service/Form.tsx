// import React from 'react';
// import {
// 	Box,
// 	Typography,
// 	TextField,
// 	MenuItem,
// 	Select,
// 	Button,
// 	InputLabel,
// 	FormControl,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import FadeInOnScroll from '@/app/components/FadeInOnScroll';

// const StyledBox = styled(Box)(({ theme }) => ({
// 	backgroundColor: '#1e2a44',
// 	color: 'white',
// 	padding: '40px',
// 	minHeight: '100vh',
// 	display: 'flex',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// }));

// const FormBox = styled(Box)(({ theme }) => ({
// 	backgroundColor: 'white',
// 	padding: '30px',
// 	borderRadius: '10px',
// 	boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
// 	width: '400px',
// 	marginLeft: '40px',
// }));

// const Form: React.FC = () => {
// 	return (
// 		// <StyledBox>
// 		<div className='p-10'>
// 			<Box className='flex'>
// 				{/* Left Section */}
// 				<Box className='flex-1 space-y-4 text-white'>
// 					<FadeInOnScroll direction='right' xStart={100}>
// 						<Typography className='text-primary mb-4 !text-lg font-bold'>
// 							Make Appointment
// 						</Typography>
// 					</FadeInOnScroll>
// 					<Typography className='mb-4 font-bold'>
// 						Connect Online & Get Best Solutions From Our Expertise
// 					</Typography>
// 					<Typography className='text-gray mb-8 !text-xs'>
// 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// 						incididunt ut labore et dolore magna aliqua.
// 					</Typography>

// 					<Typography className='py-4 !text-sm font-bold'>Opening Hours</Typography>
// 					<Box className='border-light-grey flex items-center justify-between border-b py-2'>
// 						<Typography variant='body1'>Monday - Friday</Typography>
// 						<Typography variant='body2' className='text-gray-400'>
// 							08:00 AM - 20:00 PM
// 						</Typography>
// 					</Box>
// 					<Box className='border-light-grey flex items-center justify-between border-b py-2'>
// 						<Typography variant='body1'>Saturday</Typography>
// 						<Typography variant='body2' className='text-gray-400'>
// 							09:00 AM - 17:00 PM
// 						</Typography>
// 					</Box>
// 					<Box className='border-light-grey flex items-center justify-between border-b py-2'>
// 						<Typography variant='body1'>Sunday</Typography>
// 						<Typography variant='body2' className='text-gray-400'>
// 							09:00 AM - 14:00 PM
// 						</Typography>
// 					</Box>

// 					<Typography variant='h6' className='mb-4 font-bold'>
// 						Contact Support
// 					</Typography>
// 					<Box className='flex space-x-4'>
// 						<Box>
// 							<Typography variant='body1' className='text-cyan-400'>
// 								Email Information
// 							</Typography>
// 							<Typography variant='body2' className='text-gray-400'>
// 								support@domain.com
// 							</Typography>
// 						</Box>
// 						<Box>
// 							<Typography variant='body1' className='text-cyan-400'>
// 								Emergency Call
// 							</Typography>
// 							<Typography variant='body2' className='text-gray-400'>
// 								(+62) 814 414 257
// 							</Typography>
// 						</Box>
// 					</Box>
// 				</Box>

// 				{/* Right Section - Form */}
// 				<FormBox>
// 					<TextField fullWidth label='Your Name' variant='outlined' margin='normal' />
// 					<Box className='flex space-x-4'>
// 						<TextField fullWidth label='Your Phone' variant='outlined' margin='normal' />
// 						<TextField fullWidth label='Your Email' variant='outlined' margin='normal' />
// 					</Box>
// 					<FormControl fullWidth margin='normal'>
// 						<InputLabel>Select Doctor</InputLabel>
// 						<Select label='Select Doctor'>
// 							<MenuItem value='doctor1'>Doctor 1</MenuItem>
// 							<MenuItem value='doctor2'>Doctor 2</MenuItem>
// 							<MenuItem value='doctor3'>Doctor 3</MenuItem>
// 						</Select>
// 					</FormControl>
// 					<TextField
// 						fullWidth
// 						label='Select Date'
// 						type='date'
// 						variant='outlined'
// 						margin='normal'
// 						InputLabelProps={{ shrink: true }}
// 					/>
// 					<TextField
// 						fullWidth
// 						label='Your Message'
// 						variant='outlined'
// 						margin='normal'
// 						multiline
// 						rows={4}
// 					/>
// 					<Button fullWidth variant='contained' className='mt-4 bg-cyan-400 hover:bg-cyan-500'>
// 						Make Appointment
// 					</Button>
// 				</FormBox>
// 			</Box>
// 		</div>
// 		// </StyledBox>
// 	);
// };

// export default Form;

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import FadeInOnScroll from '@/app/components/FadeInOnScroll';

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

	const handleSubmit = () => {
		console.log('Triệu chứng người dùng nhập:', symptom);
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
