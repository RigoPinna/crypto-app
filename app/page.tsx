import { CryptoList } from './components/client/feature';
import { Header } from './components/client/common';

export default function Home() {
	return (
		<main className='w-full min-h-screen flex flex-col'>
			<Header />
			<CryptoList />
		</main>
	);
}
