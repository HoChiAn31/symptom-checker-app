import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize='small' className='text-white' />}
			aria-label='breadcrumb'
		>
			{items.map((item, index) => {
				const isLast = index === items.length - 1;

				return isLast ? (
					<Typography key={index} className='text-white'>
						{item.label}
					</Typography>
				) : (
					<Link
						key={index}
						underline='hover'
						color='inherit'
						className='!text-white'
						href={item.href}
					>
						{item.label}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};

export default Breadcrumb;
