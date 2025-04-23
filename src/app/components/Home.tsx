import Header from '../layouts/Header';
import SampleComponent from './SampleComponent';

const HomePage = () => {
	return (
		<div className='h-full'>
			<div></div>
			<SampleComponent />
			<div className='h-[1200px]'></div>
		</div>
	);
};

export default HomePage;
