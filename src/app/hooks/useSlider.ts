import { useMemo } from 'react';

export function useSlider() {
	const settings = useMemo(
		() => ({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			pauseOnHover: false,
		}),
		[],
	);
	return settings;
}
