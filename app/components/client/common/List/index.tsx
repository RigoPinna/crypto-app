'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Children, isValidElement, MouseEvent, ReactElement } from 'react';

type TListItemProps = {
	title: string;
	subTitle?: string;
	iconUrl?: string;
	onClick?: (evt?: MouseEvent<HTMLLIElement>) => void;
	isLink?: boolean;
	link?: string;
	endContent?: ReactElement;
	body?: ReactElement;
};
const ItemBody = ({ title, subTitle = '', iconUrl, body }: Omit<TListItemProps, 'onCLick' | 'isLink' | 'link'>) => (
	<>
		<div className='flex flex-1 flex-row gap-x-1'>
			{iconUrl && <Image src={iconUrl} width={30} height={30} alt={title} className='object-contain self-start' />}
			<div className='flex flex-1 flex-col'>
				<h3 className='text-xs font-bold line-clamp-2'>{title}</h3>
				<p className='text-xs font-light uppercase'>{subTitle}</p>
				{body && <div>{body}</div>}
			</div>
		</div>
	</>
);

const Item = ({ title, subTitle = '', body, iconUrl, onClick = () => {}, isLink = false, link = '', endContent }: TListItemProps) => {
	const className = 'flex flex-row w-full p-4 bg-white rounded-xl hover:bg-gray-100 hover:cursor-pointer transition duration-300 text-crypto-black active:scale-98';

	if (isLink) {
		return (
			<motion.li layout>
				<Link href={link} className={className}>
					<ItemBody title={title} subTitle={subTitle} iconUrl={iconUrl} body={body} />
					{endContent && endContent}
				</Link>
			</motion.li>
		);
	}
	return (
		<motion.li layout className={className} onClick={onClick} role='button'>
			<ItemBody title={title} subTitle={subTitle} iconUrl={iconUrl} body={body} />
			{endContent && endContent}
		</motion.li>
	);
};

type TListContentProps = {
	title?: string;
	children: ReactElement<typeof Item> | ReactElement<typeof Item>[];
	type: 'grid' | 'column';
	endContent?: ReactElement;
};
const Content = ({ title, children, type = 'column', endContent }: TListContentProps) => {
	Children.forEach(children, child => {
		if (!isValidElement(child) || child.type !== Item) {
			throw new Error('List.Content only uses List.Item as children');
		}
	});
	const listClassName = type === 'grid' ? 'w-full grid grid-cols-2 gap-4' : 'w-full flex flex-col gap-y-2';
	return (
		<div className='flex flex-col gap-y-2'>
			<div className='flex justify-between'>
				{title && (
					<div className='flex-1'>
						<h3 className='text-md font-medium'>{title}</h3>
					</div>
				)}
				{endContent && <div className='flex flex-1 justify-end'>{endContent}</div>}
			</div>

			<motion.ul
				layout
				transition={{
					layout: {
						type: 'spring',
						stiffness: 300,
						damping: 30,
					},
				}}
				className={listClassName}>
				{children}
			</motion.ul>
		</div>
	);
};

export const List = {
	Content,
	Item,
};
