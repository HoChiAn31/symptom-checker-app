// components/FadeInOnScroll.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

type Props = {
	children: React.ReactNode;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	xStart?: number; // Để điều chỉnh giá trị x (trái phải)
	yStart?: number; // Để điều chỉnh giá trị y (lên xuống)
};

const FadeInOnScroll = ({
	children,
	delay = 0.3,
	direction = 'up',
	xStart = 800, // Giá trị mặc định cho x
	yStart = 40, // Giá trị mặc định cho y
}: Props) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

	const variants = {
		hidden: {
			opacity: 0,
			y: direction === 'up' ? yStart : direction === 'down' ? -yStart : 0,
			x: direction === 'left' ? -xStart : direction === 'right' ? xStart : 0,
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
		},
	};

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			variants={variants}
			transition={{ duration: 1.3, ease: 'easeInOut', delay }}
		>
			{children}
		</motion.div>
	);
};

export default FadeInOnScroll;
