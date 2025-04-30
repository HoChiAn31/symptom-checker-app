'use client';
import { TextField } from '@mui/material';
import { ReactNode } from 'react';

interface InputBaseProps {
	label?: ReactNode;
	value: string;
	onChange: (value: string) => void;
	required?: boolean;
	type?: string;
	multiline?: boolean;
	rows?: number;
}

export default function InputBase({
	label,
	value,
	onChange,
	required = false,
	type = 'text',
	multiline = false,
	rows = 1,
}: InputBaseProps) {
	return (
		<TextField
			fullWidth
			label={label}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			required={required}
			type={type}
			size='small'
			multiline={multiline}
			rows={rows}
			sx={{
				'& .MuiOutlinedInput-root': {
					borderRadius: '8px',
					backgroundColor: '#fff',
					boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
					'& fieldset': {
						borderColor: '#ccc',
					},
					'&:hover fieldset': {
						borderColor: '#10a0bd',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#10a0bd',
						borderWidth: '2px',
					},
				},
				'& .MuiInputLabel-root': {
					color: '#444',
				},
				'& label.Mui-focused': {
					color: '#10a0bd',
				},
			}}
		/>
	);
}
