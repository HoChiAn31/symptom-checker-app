'use client';
import { Container, Card, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import Hospitals from './Hospitals';
import { PredictResultProps } from './types';

export default function PredictResult({ disease, symptoms, bodyPart }: PredictResultProps) {
	return (
		<Container maxWidth='md' className='mt-10'>
			<Typography
				variant='h4'
				align='center'
				className='!text-background'
				fontWeight='bold'
				gutterBottom
			>
				Kết quả Dự đoán
			</Typography>
			<Card
				variant='outlined'
				className='!space-y-2 !rounded-md !border-0 p-6 !shadow-[0px_3px_15px_0px_rgba(17,31,98,0.15)]'
			>
				<Typography variant='h5' className='!text-primary mb-4'>
					Bệnh gợi ý: {disease}
				</Typography>
				<Typography variant='body1' className='mb-2'>
					<strong>Dấu hiệu bạn nhập:</strong> {symptoms}
				</Typography>
				<Typography variant='body1'>
					<strong>Khu vực cơ thể:</strong> {bodyPart}
				</Typography>
			</Card>
			<Box className='mt-6 space-x-8 text-center'>
				<Link href='/service' passHref>
					<Button variant='contained' className='!bg-primary !text-white' size='large'>
						Quay lại
					</Button>
				</Link>
			</Box>
			<Box className='mt-10'>
				<Hospitals />
			</Box>
		</Container>
	);
}
