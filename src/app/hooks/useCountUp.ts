import { useState, useEffect } from 'react';

const useCountUp = (target: number, duration: number = 2) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const step = target / (duration * 60); // Step mỗi frame (chia theo FPS)
		const interval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount < target) {
					return Math.min(prevCount + step, target);
				} else {
					clearInterval(interval);
					return target;
				}
			});
		}, 1000 / 60);

		return () => clearInterval(interval);
	}, [target, duration]);

	return count;
};

export default useCountUp;
