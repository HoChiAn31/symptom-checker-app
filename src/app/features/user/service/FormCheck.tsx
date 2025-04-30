'use client';
import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Box, Card } from '@mui/material';

type BodyPartsDataType = {
	[key: string]: string[];
};

export default function FormCheck() {
	const [bodyPartsData, setBodyPartsData] = useState<BodyPartsDataType>({});
	const [selectedBodyPart, setSelectedBodyPart] = useState('Tất cả');
	const [symptomInput, setSymptomInput] = useState('');
	const [symptomSuggestions, setSymptomSuggestions] = useState<string[]>([]);
	const [showAll, setShowAll] = useState(false);

	// Giả lập fetch dữ liệu, bạn sẽ thay bằng API thực tế
	useEffect(() => {
		// Đây đáng lẽ lấy từ API hoặc props truyền vào
		const fetchData = async () => {
			const fakeData: BodyPartsDataType = {
				Đầu: [
					'đầu',
					'nhức đầu',
					'đau đầu',
					'chóng mặt',
					'hay quên',
					'mất trí nhớ',
					'khó tập trung',
					'lo âu',
					'cáu gắt',
				],
				Ngực: ['ngực', 'khó thở', 'đau ngực', 'tức ngực'],
				'Toàn thân': ['mệt mỏi', 'yếu ớt', 'toàn thân'],
				Bụng: ['bụng', 'đau bụng', 'tiêu chảy', 'táo bón'],
				Tay: ['tay', 'đau tay', 'tê tay', 'đau khớp tay'],
				Chân: ['chân', 'đau chân', 'tê chân', 'đau khớp chân'],
				Khác: ['ngủ', 'khó ngủ', 'mất ngủ'],
				// Thêm các khu vực cơ thể khác nếu có
			};
			setBodyPartsData(fakeData);
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (selectedBodyPart === 'Tất cả') {
			setSymptomSuggestions([]);
		} else {
			const symptoms = bodyPartsData[selectedBodyPart] || [];
			setSymptomSuggestions(symptoms);
			setShowAll(false);
		}
	}, [selectedBodyPart, bodyPartsData]);

	const handleFillSymptom = (symptom: string) => {
		setSymptomInput(symptom);
	};

	const handleShowMore = () => {
		setShowAll(true);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Gửi symptomInput và selectedBodyPart về server tại đây
		console.log({ bodyPart: selectedBodyPart, symptoms: symptomInput });
	};

	return (
		<Container className='mt-10'>
			<Typography variant='h4' align='center' fontWeight='bold' gutterBottom>
				Hệ thống Gợi ý Bệnh dựa trên Dấu hiệu
			</Typography>
			<Typography variant='body1' align='center' color='text.secondary' className='mb-8'>
				Chọn khu vực cơ thể và nhập các dấu hiệu bạn đang gặp phải để nhận gợi ý bệnh.
			</Typography>

			<form onSubmit={handleSubmit}>
				<Box className='mb-6'>
					<Typography variant='subtitle1' fontWeight='medium' className='mb-2'>
						Chọn khu vực cơ thể:
					</Typography>
					<TextField
						select
						fullWidth
						value={selectedBodyPart}
						onChange={(e) => setSelectedBodyPart(e.target.value)}
						size='small'
					>
						<MenuItem value='Tất cả'>Tất cả</MenuItem>
						{Object.keys(bodyPartsData).map((part) => (
							<MenuItem key={part} value={part}>
								{part}
							</MenuItem>
						))}
					</TextField>
				</Box>

				<Box className='mb-6'>
					<Typography variant='subtitle1' fontWeight='medium' className='mb-2'>
						Gợi ý dấu hiệu:
					</Typography>
					<Card variant='outlined' className='bg-gray-100 p-4'>
						{selectedBodyPart === 'Tất cả' ? (
							<Typography color='text.secondary'>
								Vui lòng chọn khu vực cơ thể để xem gợi ý.
							</Typography>
						) : symptomSuggestions.length > 0 ? (
							<>
								{(showAll ? symptomSuggestions : symptomSuggestions.slice(0, 10)).map(
									(symptom, idx) => (
										<Typography
											key={idx}
											className='cursor-pointer text-blue-600 hover:underline'
											onClick={() => handleFillSymptom(symptom)}
										>
											{symptom}
										</Typography>
									),
								)}
								{!showAll && symptomSuggestions.length > 10 && (
									<Typography
										className='mt-2 cursor-pointer text-gray-600 hover:underline'
										onClick={handleShowMore}
									>
										Và {symptomSuggestions.length - 10} dấu hiệu khác...
									</Typography>
								)}
							</>
						) : (
							<Typography color='text.secondary'>
								Không có dấu hiệu gợi ý cho khu vực này.
							</Typography>
						)}
					</Card>
				</Box>

				<Box className='mb-6'>
					<Typography variant='subtitle1' fontWeight='medium' className='mb-2'>
						Nhập dấu hiệu của bạn:
					</Typography>
					<TextField
						fullWidth
						multiline
						rows={3}
						value={symptomInput}
						onChange={(e) => setSymptomInput(e.target.value)}
						placeholder='Ví dụ: Tôi bị đau đầu dữ dội'
						required
					/>
				</Box>

				<Box className='text-center'>
					<Button type='submit' variant='contained' size='large'>
						Dự đoán
					</Button>
				</Box>
			</form>

			<Box className='mt-8 text-center'>
				<Button href='/add_data' variant='outlined' color='success'>
					Thêm dữ liệu mới
				</Button>
			</Box>
		</Container>
	);
}
