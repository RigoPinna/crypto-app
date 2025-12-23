'use client';
import { Icon } from '@/app/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Children, isValidElement, MouseEvent, ReactElement } from 'react';

type TListItemProps = {
	title: string;
	subTitle?: string;
	iconUrl?: string;
	onClick?: (evt?: MouseEvent<HTMLLIElement>) => void;
	isLink?: boolean;
	link?: string;
};
const ItemBody = ({ title, subTitle = '', iconUrl }: Omit<TListItemProps, 'onCLick' | 'isLink' | 'link'>) => (
	<>
		<div className='flex flex-1 flex-row gap-x-1'>
			{iconUrl && <Image src={iconUrl} width={30} height={30} alt={title} className='object-contain' />}
			<div className='flex flex-1 flex-col'>
				<p className='text-xs font-bold'>{title}</p>
				<p className='text-xs font-light uppercase'>{subTitle}</p>
			</div>
		</div>
		<Icon.ArrowRight />
	</>
);

const Item = ({ title, subTitle = '', iconUrl, onClick = () => {}, isLink = false, link = '' }: TListItemProps) => {
	const className = 'flex flex-row w-full p-4 bg-white rounded-xl hover:bg-gray-100 hover:cursor-pointer transition duration-300 text-crypto-black active:scale-98';

	if (isLink) {
		return (
			<Link href={link} className={className}>
				<ItemBody title={title} subTitle={subTitle} iconUrl={iconUrl} />
			</Link>
		);
	}
	return (
		<li className={className} onClick={onClick} role='button'>
			<ItemBody title={title} subTitle={subTitle} iconUrl={iconUrl} />
		</li>
	);
};

type TListContentProps = {
	title?: string;
	children: ReactElement<typeof Item> | ReactElement<typeof Item>[];
};
const Content = ({ title, children }: TListContentProps) => {
	Children.forEach(children, child => {
		if (!isValidElement(child) || child.type !== Item) {
			throw new Error('List.Content only uses List.Item as children');
		}
	});
	return (
		<div className='flex flex-col gap-y-2'>
			{title && <h3 className='text-md font-medium'>{title}</h3>}
			<ul className='w-full flex flex-col gap-y-2'>{children}</ul>
		</div>
	);
};

export const List = {
	Content,
	Item,
};
