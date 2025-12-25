import Image from 'next/image';
import { BackButton, ChartSkeleton, Chip, DescriptionText, ExploreLinkSection, Header } from '../components/client';
import { Metadata } from 'next';
import { CRYPTO_API } from '../server';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Chart from '../components/server/feature/CryptoDetailsPage/Chart';
import { Icon } from '../components/icons';
type TParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: TParams }): Promise<Metadata> {
	const resolvedParams = await params;
	if (!resolvedParams.id)
		return {
			title: `Crypto Details | CryptoApp`,
		};
	const data = await CRYPTO_API.getCryptoDetailsById(resolvedParams.id, { cache: 'no-store' });
	if (!data.success || !data.data) return notFound();

	const crypto = { ...data.data };
	return {
		title: `${crypto.name} | CryptoApp`,
		description: crypto.description.en,
		openGraph: {
			title: `${crypto.name} | CryptoApp`,
			description: `${crypto.description.en.slice(0, 150)}...`,
			siteName: 'CryptoApp',
			images: [
				{
					url: crypto.image.large,
				},
			],
			type: 'profile',
		},
	};
}
const CryptoDetailsPage = async ({ params }: { params: TParams }) => {
	const resolvedParams = await params;

	if (!resolvedParams.id) return <p>Invalid Crypto ID</p>;

	const data = await CRYPTO_API.getCryptoDetailsById(resolvedParams.id, { cache: 'no-store' });
	if (!data.success || !data.data) return notFound();

	const crypto = { ...data.data };

	return (
		<>
			<Header startContent={<BackButton />} centerContent={<Icon.Brand />} />
			<main className='pt-16 pb-6 px-3 flex flex-col gap-y-6'>
				<section className='w-full'>
					<div className='flex flex-row gap-x-0.5 items-center'>
						<Image src={crypto.image.large} alt={crypto.name} width={34} height={34} className='rounded-full' />
						<h1 className='text-lg font-semibold text-crypto-black'>{crypto.name}</h1>
					</div>
					<p className='text-2xl font-bold text-crypto-black'>${crypto.market_data.current_price.usd.toLocaleString()}</p>
					<p className={`text-sm ${crypto.market_data.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
						{crypto.market_data.price_change_percentage_24h.toFixed(2)}%
					</p>
				</section>
				<section>
					<Suspense fallback={<ChartSkeleton />}>
						<Chart id={resolvedParams.id} />
					</Suspense>
				</section>
				<section className='border-t border-t-crypto-black-200 pb-2 pt-4'>
					<div className='grid grid-cols-2 gap-y-4 text-sm'>
						<div className='border-b border-b-crypto-black-200 pb-2'>
							<p className='text-gray-500 uppercase'>24H Vol</p>
							<p className='font-medium text-crypto-black text-xs'>${crypto.market_data.total_volume.usd.toLocaleString()}</p>
						</div>
						<div className='border-b border-b-crypto-black-200 pb-2'>
							<p className='text-gray-500 uppercase'>Market Cap</p>
							<p className='font-medium text-crypto-black text-xs'>${crypto.market_data.market_cap.usd.toLocaleString()}</p>
						</div>
						<div className='border-b border-b-crypto-black-200 pb-2'>
							<p className='text-gray-500 uppercase'>Circulating Supply</p>
							<p className='font-medium text-crypto-black text-xs'>{crypto.market_data.circulating_supply.toLocaleString()}</p>
						</div>
						<div className='border-b border-b-crypto-black-200 pb-2'>
							<p className='text-gray-500 uppercase'>Max Supply</p>
							<p className='font-medium text-crypto-black text-xs'>{crypto.market_data.max_supply ?? '∞'}</p>
						</div>
					</div>
				</section>
				<section>
					<h3 className='text-lg font-semibold text-crypto-black mb-1'>About {crypto.name}</h3>
					<DescriptionText className='text-xs' text={crypto.description.en} />
				</section>

				<section>
					<h3 className='text-lg font-semibold text-crypto-black mb-1'>Categories</h3>
					<div className='flex flex-row flex-wrap gap-x-1 gap-y-2'>
						{crypto.categories.map((category, i) => (
							<Chip key={`${crypto.id}${i}category`} text={category} />
						))}
					</div>
				</section>
				<ExploreLinkSection links={crypto?.links?.blockchain_site || []} />
			</main>
		</>
	);
};

export default CryptoDetailsPage;
