'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
type TDescriptionTextProps = {
	className?: string;
	text: string;
};
const CARACTERS_LIMIT = 180;
const truncateInLine = 3;

export const DescriptionText = ({ text, className = '' }: TDescriptionTextProps) => {
	const [isLarge, setIsLarge] = useState(text.length > CARACTERS_LIMIT);
	const onShowMore = () => {
		setIsLarge(current => !current);
	};
	return (
		<>
			<p
				style={
					{
						'--line-clamp': isLarge ? truncateInLine : 99,
					} as React.CSSProperties
				}
				className={`${className} ${styles.descriptionText} relative`}>
				{text}
				{isLarge && (
					<span
						className={`${styles.btnShowMore} absolute bottom-0 right-0 bg-crypto-gray pl-1 font-semibold hover:underline cursor-pointer hover:text-sky-500 text-xs`}
						onClick={onShowMore}>
						...show more
					</span>
				)}
			</p>
		</>
	);
};
