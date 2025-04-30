'use client';
import { useSearchParams } from 'next/navigation';
import FormBooking from './FormBooking';

export default function BookingPage() {
	const searchParams = useSearchParams();
	const hospitalName = searchParams.get('hospital') || 'Unknown';

	return (
		<div>
			<div className='bg-white py-16'>
				<div className='container mx-auto space-y-10'>
					<FormBooking hospitalName={hospitalName} />
				</div>
			</div>
		</div>
	);
}
