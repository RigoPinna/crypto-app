import { Suspense } from 'react';
import { BackButton, Header, SearchForm, SearchResult, Spinner } from '../components/client';
import { Icon } from '../components/icons';

const SearchPage = () => {
	return (
		<>
			<Header startContent={<BackButton backTo='/' />} centerContent={<Icon.Brand />} />

			<main className='pt-16 pb-6 px-3'>
				<h3 className='text-xs text-crypto-black mb-2'>Search by</h3>
				<Suspense fallback={<Spinner />}>
					<SearchForm />
					<SearchResult />
				</Suspense>
			</main>
		</>
	);
};

export default SearchPage;
