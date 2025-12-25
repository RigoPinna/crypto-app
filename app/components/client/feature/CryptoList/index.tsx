'use client';
import { Ref } from 'react';
import { List, Spinner } from '../../common';
import { Icon } from '@/app/components/icons';
import { usePagination } from '@/app/hooks';
import { ICrypto, TCryptoList } from '@/app/interfaces';

type TCryptoListProps = {
	cryptos: TCryptoList;
};

export const CryptoList = ({ cryptos }: TCryptoListProps) => {
	const { refElement, currentPage, totalPages } = usePagination<ICrypto>(cryptos);

	return (
		<>
			<List.Content title='All Cryptos' type='column'>
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
