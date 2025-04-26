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
					// backgroundColor: '#001439',
					color: 'white',
					padding: '40px 20px',
					fontFamily: 'Arial, sans-serif',
				}}
			>
				<Grid container spacing={6}>
					{/* Newsletter Subscription */}
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
									Subscribe Our Newsletter
								</Typography>
								<Typography variant='body2' sx={{ marginTop: '10px', opacity: 0.7 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<TextField
									placeholder='Enter Your Email Address'
									variant='outlined'
									size='medium'
									sx={{
										backgroundColor: 'white',
										borderRadius: '4px 0 0 4px',
										'& .MuiOutlinedInput-root': {
											borderRadius: '4px 0 0 4px',
											height: '56px', // đảm bảo cùng chiều cao với Button
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
										height: '56px', // giống chiều cao TextField
										px: 3, // padding ngang
									}}
								>
									Subscribe
								</Button>
							</Box>
						</Box>
					</Grid>

					{/* Footer Content */}
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
								Holadoc
							</Typography>
						</Box>
						<Typography variant='body2' sx={{ opacity: 0.7, marginBottom: '20px' }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore
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

					{/* Quick Links */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant='h6'
							sx={{
								fontWeight: 'bold',
								marginBottom: '20px',
								borderBottom: '2px solid #10a0bd',
								paddingBottom: '5px',
								display: 'inline-block', // fix chiều dài
								// width: 'fit-content',// fix chiều dài
							}}
						>
							Quick Links
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							About Us
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Services
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Doctor
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Pricing
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Contact
						</Typography>
					</Grid>

					{/* Useful Links */}
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
							Useful Links
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Privacy Policy
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Terms and Conditions
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Disclaimer
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							Support
						</Typography>
						<Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.7 }}>
							FAQ
						</Typography>
					</Grid>

					{/* Make Appointment */}
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
							Make Appointment
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: 1 }}>
							<Clock3 color='#10a0bd' />
							<Typography variant='body2' sx={{ opacity: 0.7 }}>
								9 A.M - 10 P.M, Monday - Saturday
							</Typography>
						</Box>
						<Button
							variant='contained'
							startIcon={<PhoneIcon />}
							sx={{ backgroundColor: '#192A4C', textTransform: 'none', padding: '10px 20px' }}
						>
							Call Us Today +62 81 414 257
						</Button>
					</Grid>
				</Grid>

				{/* Footer Bottom */}
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
						Online Doctor Consultation Template Kit by Jegtheme
					</Typography>
					<Typography variant='body2' sx={{ opacity: 0.7 }}>
						Copyright © 2021. All rights reserved.
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default Footer;
