import { Header } from './components/client/common';
import { Metadata } from 'next';
import { List } from './components/server';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'All Cryptos | CryptoApp',
		description: 'Explore real-time prices, market capitalization, volume, and trends of the top cryptocurrencies. Stay up to date with the crypto market.',
		keywords: ['cryptocurrency', 'crypto', 'bitcoin', 'ethereum', 'altcoins', 'crypto prices', 'crypto market', 'blockchain', 'trading', 'cryptoapp'],
		authors: [{ name: 'CryptoApp Team' }],
		openGraph: {
			title: 'All Cryptos | CryptoApp',
			description: 'Track real-time data and performance of the most important cryptocurrencies in the market.',
			type: 'website',
			siteName: 'CryptoApp',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'All Cryptos | CryptoApp',
			description: 'Follow the crypto market in real time with CryptoApp.',
		},
	};
}

const HomePage = () => {
	return (
		<main className='w-full min-h-screen flex flex-col'>
			<Header />
			<section className='pt-16 pb-6 px-3'>
				<Suspense fallback={<p>Loading cryptocurrencies...</p>}>
					<List />
				</Suspense>
			</section>
		</main>
	);
};

export default HomePage;
