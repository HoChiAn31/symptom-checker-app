// 'use client';
// import { Typography, Card, Box } from '@mui/material';
// import Link from 'next/link';
// import { Hospital } from './types';

// const hospitals: Hospital[] = [
// 	{
// 		name: 'Bệnh viện Chợ Rẫy',
// 		address: '201B Nguyễn Chí Thanh, Quận 5, TP.HCM',
// 		contact: '(028) 3855 4137',
// 	},
// 	{
// 		name: 'Bệnh viện Bạch Mai',
// 		address: '78 Giải Phóng, Đống Đa, Hà Nội',
// 		contact: '(024) 3869 3731',
// 	},
// 	{
// 		name: 'Bệnh viện Việt Đức',
// 		address: '40 Tràng Thi, Hoàn Kiếm, Hà Nội',
// 		contact: '(024) 3825 3531',
// 	},
// ];

// export default function Hospitals() {
// 	return (
// 		<Box>
// 			<Typography variant='h5' fontWeight='bold' gutterBottom className='!text-background'>
// 				Các bệnh viện có thể đến
// 			</Typography>
// 			<Typography variant='body1' fontSize={12} gutterBottom className='!text-gray !italic'>
// 				Nhấn vào bệnh viện để đặt lịch khám.
// 			</Typography>
// 			{hospitals.map((hospital, index) => (
// 				<Link key={index} href={`/booking?hospital=${encodeURIComponent(hospital.name)}`} passHref>
// 					<Card
// 						variant='outlined'
// 						className='mb-4 !rounded-md !border-0 p-6 !shadow-[0px_3px_15px_0px_rgba(17,31,98,0.15)]'
// 						sx={{
// 							cursor: 'pointer',
// 							transition: 'all 0.3s ease-in-out',
// 							'&:hover': {
// 								color: '#10a0bd',
// 								transform: 'translateY(-4px)',
// 							},
// 						}}
// 					>
// 						<Typography variant='h6' className='mb-2'>
// 							{hospital.name}
// 						</Typography>
// 						<Typography variant='body2' color='text.secondary'>
// 							<strong>Địa chỉ:</strong> {hospital.address}
// 						</Typography>
// 						<Typography variant='body2' color='text.secondary'>
// 							<strong>Liên hệ:</strong> {hospital.contact}
// 						</Typography>
// 					</Card>
// 				</Link>
// 			))}
// 		</Box>
// 	);
// }
'use client';
import { useEffect, useState } from 'react';
import { Typography, Card, Box } from '@mui/material';
import Link from 'next/link';
import axios from 'axios';

interface Hospital {
	id: string;
	name: string;
	address: string;
	phone_number: string;
	// Bạn có thể thêm các trường khác nếu cần
}

export default function Hospitals() {
	const [hospitals, setHospitals] = useState<Hospital[]>([]);

	useEffect(() => {
		const fetchHospitals = async () => {
			try {
				const response = await axios.get<Hospital[]>('http://127.0.0.1:8000/clinics');
				setHospitals(response.data);
			} catch (error) {
				console.error('Error fetching hospitals:', error);
			}
		};

		fetchHospitals();
	}, []);

	return (
		<Box>
			<Typography variant='h5' fontWeight='bold' gutterBottom className='!text-background'>
				Các bệnh viện có thể đến
			</Typography>
			<Typography variant='body1' fontSize={12} gutterBottom className='!text-gray !italic'>
				Nhấn vào bệnh viện để đặt lịch khám.
			</Typography>
			{hospitals.map((hospital) => (
				<Link
					key={hospital.id}
					href={`/booking?hospital=${encodeURIComponent(hospital.name)}`}
					passHref
				>
					<Card
						variant='outlined'
						className='mb-4 !rounded-md !border-0 p-6 !shadow-[0px_3px_15px_0px_rgba(17,31,98,0.15)]'
						sx={{
							cursor: 'pointer',
							transition: 'all 0.3s ease-in-out',
							'&:hover': {
								color: '#10a0bd',
								transform: 'translateY(-4px)',
							},
						}}
					>
						<Typography variant='h6' className='mb-2'>
							{hospital.name}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							<strong>Địa chỉ:</strong> {hospital.address}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							<strong>Liên hệ:</strong> {hospital.phone_number}
						</Typography>
					</Card>
				</Link>
			))}
		</Box>
	);
}
