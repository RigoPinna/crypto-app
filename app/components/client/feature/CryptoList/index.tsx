'use client';
import { Ref } from 'react';
import { Button, List, Spinner } from '../../common';
import { Icon } from '@/app/components/icons';
import { useLayoutControl, usePagination } from '@/app/hooks';
import { ICrypto, TCryptoList } from '@/app/interfaces';

type TCryptoListProps = {
	cryptos: TCryptoList;
};

export const CryptoList = ({ cryptos }: TCryptoListProps) => {
	const { refElement, currentPage, totalPages } = usePagination<ICrypto>(cryptos);
	const [layout, setLayout] = useLayoutControl();
	return (
		<>
			<List.Content
				title='All Cryptos'
				type={layout}
				endContent={
					<div className='flex flex-row'>
						<Button variant={layout === 'column' ? 'primary' : 'light'} onClick={() => setLayout('column')}>
							<Icon.LayoutColumn />
						</Button>
						<Button variant={layout === 'grid' ? 'primary' : 'light'} onClick={() => setLayout('grid')}>
							<Icon.LayoutGrid />
						</Button>
					</div>
				}>
				{currentPage.data.map(crypto => (
					<List.Item
						key={crypto.id}
						title={crypto.name}
						subTitle={crypto.symbol}
						link={`/${crypto.id}`}
						iconUrl={crypto.image}
						isLink
						endContent={
							<div className='flex flex-row gap-x-2 items-center'>
								{crypto.current_price && <span className='text-crypto-black font-semibold text-xs'>$ {crypto.current_price.toFixed(2)} USD</span>}
								<Icon.ArrowRight />
							</div>
						}
					/>
				))}
			</List.Content>
			{currentPage.page + 1 >= totalPages ? (
				<p className='pt-4 text-xs text-crypto-black text-center'>You’ve reached the end of the list.</p>
			) : (
				<div ref={refElement as Ref<HTMLDivElement>} className='flex justify-center pt-4'>
					<Spinner />
				</div>
			)}
		</>
	);
};
