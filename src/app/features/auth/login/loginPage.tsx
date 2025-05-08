import LogInForm from './loginInForm';

export default function LoginPage() {
	return (
		<div className='relative'>
			<div
				className='absolute inset-0 z-0 opacity-5'
				style={{
					backgroundImage:
						"url('https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/bg.jpg')",
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<div className='flex min-h-[80vh] items-center justify-center'>
				<LogInForm />
			</div>
		</div>
	);
}
