'use client';
import { Coin } from '@/app/interfaces';
import { CRYPTO_API } from '@/app/services';
import { useEffect, useState } from 'react';
import { List, Spinner } from '../../common';
import { Icon } from '@/app/components/icons';
import { useSearchParams } from 'next/navigation';
import { NotFoundSearch } from '../NotFoundSearch';

export const SearchResult = () => {
	const searchParams = useSearchParams();
	const term = searchParams.get('term') || '';
	const [isLoading, setIsLoading] = useState(term !== '');
	const [result, setResult] = useState<Coin[]>();
	useEffect(() => {
		const controller = new AbortController();
		if (!term) return;
		CRYPTO_API.searchCrypto(term, {
			signal: controller.signal,
		})
			.then(resp => {
				if (resp.success) {
					setResult(resp.data?.coins || []);
				}
			})
			.catch(err => {
				console.error(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
		return () => controller.abort();
	}, [term]);

	if (isLoading)
		return (
			<div className='mt-8 flex flex-col items-center justify-center w-full'>
				<Spinner />
				<p className='text-xs text-crypto-black-500'>Loading...</p>
			</div>
		);
	if (!result) return <NotFoundSearch />;
	return (
		<div className='mt-8'>
			<List.Content title={`${result.length} Crypto found for ${decodeURIComponent(term)}`} type='column'>
				{result.map(coin => (
					<List.Item
						key={coin.id}
						title={coin.name}
						subTitle={coin.symbol}
						iconUrl={coin.thumb}
						isLink
						link={`/${coin.id}`}
						endContent={
							<div className='flex flex-row gap-x-2 items-center'>
								<Icon.ArrowRight />
							</div>
						}
					/>
				))}
			</List.Content>
		</div>
	);
};
