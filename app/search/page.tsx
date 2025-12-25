import { BackButton, Header, SearchForm, SearchResult } from '../components/client';
import { Icon } from '../components/icons';

const SearchPage = () => {
	return (
		<>
			<Header startContent={<BackButton />} centerContent={<Icon.Brand />} />

			<main className='pt-16 pb-6 px-3'>
				<h3 className='text-xs text-crypto-black mb-2'>Search by</h3>
				<SearchForm />
				<SearchResult />
			</main>
		</>
	);
};

export default SearchPage;
