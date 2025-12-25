import { Suspense } from 'react';
import { BackButton, Header, SearchForm, SearchResult, Spinner } from '../components/client';
import { Icon } from '../components/icons';

const SearchPage = () => {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Header startContent={<BackButton backTo='/' />} centerContent={<Icon.Brand />} />

				<main className='pt-16 pb-6 px-3'>
					<h3 className='text-xs text-crypto-black mb-2'>Search by</h3>
					<SearchForm />
					<SearchResult />
				</main>
			</Suspense>
		</>
	);
};

export default SearchPage;
