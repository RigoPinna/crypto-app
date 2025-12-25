'use client';

import { ReactElement } from 'react';

type TChipProps = {
	text: string;
	onClick?: () => void;
	endContent?: ReactElement;
};
export const Chip = ({ text, onClick, endContent }: TChipProps) => {
	const handleClick = () => {
		onClick?.();
	};
	const isClickable = typeof onClick === 'function';

	const classNames = isClickable
		? 'inline-flex flex-row gap-x-2 items-center py-1 pl-2 pr-2 bg-white rounded-3xl text-xs hover:bg-gray-100 hover:cursor-pointer transition duration-300'
		: 'inline-flex flex-row gap-x-2 items-center py-1 pl-2 pr-2 bg-white rounded-3xl text-xs';
	return (
		<div onClick={handleClick} className={classNames} role='button'>
			{text}
			{endContent && <span>{endContent}</span>}
		</div>
	);
};
