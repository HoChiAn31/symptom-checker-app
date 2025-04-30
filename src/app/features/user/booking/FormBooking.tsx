'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button, Box } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputBase from '@/app/components/Input/InputBase';
import { BookingForm } from './types';

interface BookingProps {
	hospitalName: string;
}

export default function FormBooking({ hospitalName }: BookingProps) {
	const router = useRouter();
	const [formData, setFormData] = useState<BookingForm>({
		phone: '',
		email: '',
		name: '',
		address: '',
		appointmentDate: null,
		appointmentTime: null,
		notes: '',
	});

	const handleChange = (field: keyof BookingForm, value: any) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const submissionData = {
			hospital: hospitalName,
			...formData,
			appointmentDate: formData.appointmentDate?.toISOString(),
			appointmentTime: formData.appointmentTime?.toISOString(),
		};

		// Simulate account creation (replace with API call)
		console.log('Creating account with:', {
			username: formData.phone,
			email: formData.email,
		});
		console.log('Booking data:', submissionData);

		// Simulate API call to create account and send email
		try {
			// Example API call (uncomment and configure):
			/*
      const response = await fetch('/api/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.phone,
          email: formData.email,
          booking: submissionData,
        }),
      });
      if (!response.ok) throw new Error('Account creation failed');
      */

			// Redirect to success page
			router.push('/booking/success');
		} catch (error) {
			console.error('Error creating account:', error);
			// Handle error (e.g., show error message)
		}
	};

	return (
		<Container maxWidth='sm' className='mt-10'>
			<Typography
				variant='h4'
				align='center'
				fontWeight='bold'
				className='!text-primary'
				gutterBottom
			>
				Đặt Lịch Khám
			</Typography>
			<Typography
				variant='h6'
				align='center'
				className='pb-4'
				fontSize={14}
				color='text.secondary'
				gutterBottom
			>
				Bệnh viện: {hospitalName}
			</Typography>
			<Box component='form' onSubmit={handleSubmit} className='!space-y-6'>
				<InputBase
					label='Họ và Tên'
					value={formData.name}
					onChange={(val) => handleChange('name', val)}
					required
				/>
				<InputBase
					label='Số Điện Thoại'
					value={formData.phone}
					onChange={(val) => handleChange('phone', val)}
					required
					type='tel'
				/>
				<InputBase
					label='Email'
					value={formData.email}
					onChange={(val) => handleChange('email', val)}
					required
					type='email'
				/>
				<InputBase
					label='Địa Chỉ'
					value={formData.address}
					onChange={(val) => handleChange('address', val)}
					required
				/>
				<div className='flex items-center justify-between'>
					<div>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label='Ngày Khám'
								value={formData.appointmentDate}
								onChange={(date) => handleChange('appointmentDate', date)}
							/>
						</LocalizationProvider>
					</div>
					<div>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<TimePicker
								label='Giờ Khám'
								value={formData.appointmentTime}
								onChange={(time) => handleChange('appointmentTime', time)}
							/>
						</LocalizationProvider>
					</div>
				</div>
				<InputBase
					label='Ghi Chú Thêm'
					value={formData.notes}
					onChange={(val) => handleChange('notes', val)}
					multiline
					rows={4}
				/>
				<Box className='text-center'>
					<Button type='submit' variant='contained' className='!bg-primary' size='large'>
						Xác Nhận Đặt Lịch
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
