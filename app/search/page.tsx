'use client';
import { useSearchParams } from 'next/navigation';
import { BackButton, Header, SearchForm, SearchResult } from '../components/client';
import { Icon } from '../components/icons';

const SearchPage = () => {
	const searchParams = useSearchParams();
	const term = searchParams.get('term');

	return (
		<>
			<Header startContent={<BackButton />} centerContent={<Icon.Brand />} />

			<main className='pt-16 pb-6 px-3'>
				<div>
					<h3 className='text-xs text-crypto-black mb-2'>Search by</h3>
					<SearchForm searchTerm={term || ''} />
				</div>
				<SearchResult term={term || ''} />
			</main>
		</>
	);
};

export default SearchPage;
