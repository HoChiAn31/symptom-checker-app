import Results from './PredictResult';

// Mock data (replace with API or query params)
const mockResults = {
	disease: 'Migraine',
	symptoms: 'Đau đầu dữ dội, buồn nôn',
	bodyPart: 'Đầu',
};

export default function ResultsPage() {
	return (
		<div>
			<div className='bg-white py-16'>
				<div className='container mx-auto space-y-10'>
					<Results {...mockResults} />
				</div>
			</div>
		</div>
	);
}
