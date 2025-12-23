import { CryptoList } from './components/client/feature';
import { Header } from './components/client/common';

export default function Home() {
	return (
		<main className='w-full min-h-screen flex flex-col'>
			<Header />
			<section className='pt-16 pb-6 px-3'>
				<CryptoList />
			</section>
		</main>
	);
}
