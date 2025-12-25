import type { Metadata } from 'next';
import { Google_Sans } from 'next/font/google';
import './globals.css';

const googleSans = Google_Sans({
	variable: '--font-google-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${googleSans.variable} antialiased max-w-2xl ml-auto mr-auto min-h-screen bg-crypto-gray`}>{children}</body>
		</html>
	);
}
