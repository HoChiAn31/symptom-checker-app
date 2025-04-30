import React from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import { Clock3 } from 'lucide-react';

const Footer: React.FC = () => {
	return (
		<div className='bg-background container mx-auto'>
			<Box
				sx={{
					color: 'white',
					padding: '40px 20px',
					fontFamily: 'Arial, sans-serif',
				}}
			>
				<Grid container spacing={6}>
					{/* Đăng ký nhận bản tin */}
					<Grid size={{ xs: 12 }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								borderBottom: '0.5px solid #FFFFFF29',
								paddingBottom: '20px',
							}}
						>
							<Box sx={{ width: '50%' }}>
								<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
									Đăng ký nhận bản tin
								</Typography>
								<Typography variant='body2' sx={{ marginTop: '10px', opacity: 0.7 }}>
									Hãy nhập email để nhận được những thông tin và ưu đãi mới nhất từ chúng tôi.
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<TextField
									placeholder='Nhập địa chỉ email của bạn'
									variant='outlined'
									size='medium'
									sx={{
										backgroundColor: 'white',
										borderRadius: '4px 0 0 4px',
										'& .MuiOutlinedInput-root': {
											borderRadius: '4px 0 0 4px',
											height: '56px',
										},
										width: '360px',
									}}
								/>
								<Button
									variant='contained'
									sx={{
										backgroundColor: '#10a0bd',
										borderRadius: '0 4px 4px 0',
										textTransform: 'none',
										height: '56px',
										px: 3,
									}}
								>
									Đăng ký
								</Button>
							</Box>
						</Box>
					</Grid>

					{/* Giới thiệu */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
							<Box
								sx={{
									width: '40px',
									height: '40px',
									backgroundColor: '#3B82F6',
									borderRadius: '50%',
									marginRight: '10px',
								}}
							/>
							<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
								HealDoc
							</Typography>
						</Box>
						<Typography variant='body2' sx={{ opacity: 0.7, marginBottom: '20px' }}>
							Nền tảng tư vấn sức khỏe trực tuyến giúp bạn kết nối nhanh chóng với bác sĩ mọi lúc
							mọi nơi.
						</Typography>
						<Box sx={{ display: 'flex', gap: '10px' }}>
							<IconButton sx={{ backgroundColor: '#10a0bd', color: 'white' }}>
								<FacebookIcon />
							</IconButton>
							<IconButton sx={{ backgroundColor: '#10a0bd', color: 'white' }}>
								<TwitterIcon />
							</IconButton>
							<IconButton sx={{ backgroundColor: '#10a0bd', color: 'white' }}>
								<InstagramIcon />
							</IconButton>
							<IconButton sx={{ backgroundColor: '#10a0bd', color: 'white' }}>
								<YouTubeIcon />
							</IconButton>
						</Box>
					</Grid>

					{/* Liên kết nhanh */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant='h6'
							sx={{
								fontWeight: 'bold',
								marginBottom: '20px',
								borderBottom: '2px solid #10a0bd',
								paddingBottom: '5px',
								display: 'inline-block',
							}}
						>
							Liên kết nhanh
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Về chúng tôi
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Dịch vụ
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Bác sĩ
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Bảng giá
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Liên hệ
						</Typography>
					</Grid>

					{/* Liên kết hữu ích */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant='h6'
							sx={{
								fontWeight: 'bold',
								marginBottom: '20px',
								borderBottom: '2px solid #10a0bd',
								paddingBottom: '5px',
								display: 'inline-block',
							}}
						>
							Liên kết hữu ích
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Chính sách bảo mật
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Điều khoản & Điều kiện
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Tuyên bố miễn trừ trách nhiệm
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Hỗ trợ
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Câu hỏi thường gặp
						</Typography>
					</Grid>

					{/* Đặt lịch hẹn */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant='h6'
							sx={{
								fontWeight: 'bold',
								marginBottom: '20px',
								borderBottom: '2px solid #10a0bd',
								paddingBottom: '5px',
								display: 'inline-block',
							}}
						>
							Đặt lịch hẹn
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: 1 }}>
							<Clock3 color='#10a0bd' />
							<Typography variant='body2' sx={{ opacity: 0.7 }}>
								9 giờ sáng - 10 giờ tối, Thứ Hai - Thứ Bảy
							</Typography>
						</Box>
						<Button
							variant='contained'
							startIcon={<PhoneIcon />}
							sx={{ backgroundColor: '#192A4C', textTransform: 'none', padding: '10px 20px' }}
						>
							Gọi ngay +62 81 414 257
						</Button>
					</Grid>
				</Grid>

				{/* Cuối footer */}
				<Box
					sx={{
						borderTop: '1px solid #FFFFFF29',
						paddingTop: '20px',
						marginTop: '20px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant='body2' sx={{ opacity: 0.7 }}>
						Giao diện tư vấn sức khỏe trực tuyến
					</Typography>
					<Typography variant='body2' sx={{ opacity: 0.7 }}>
						Bản quyền © 2025. Mọi quyền được bảo lưu.
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default Footer;
