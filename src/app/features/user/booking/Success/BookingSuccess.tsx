'use client';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function BookingSuccess() {
	return (
		<Container maxWidth='sm' className='mt-10'>
			<Typography variant='h4' align='center' fontWeight='bold' gutterBottom>
				Đặt Lịch Khám Thành Công
			</Typography>
			<Typography variant='body1' align='center' color='text.secondary' className='mb-6'>
				Tài khoản của bạn đã được tạo bằng số điện thoại. Vui lòng kiểm tra email để lấy mật khẩu.
			</Typography>
			<Box className='text-center'>
				<Link href='/login' passHref>
					<Button variant='contained' className='!bg-primary' size='large'>
						Đi đến Đăng Nhập
					</Button>
				</Link>
			</Box>
		</Container>
	);
}
