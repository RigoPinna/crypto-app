import Link from 'next/link';
import { Header } from './components/client';
import { Icon } from './components/icons';

const notFound = () => {
	return (
		<main className='mt-16 w-full min-h-screen flex flex-col'>
			<Header startContent={<Icon.Brand />} />
			<div className='flex flex-col gap-y-2 items-center mt-6'>
				<div className='flex flex-col items-center gap-y-1'>
					<h3 className='text-xl font-bold'>Page Not Found</h3>
					<p className='text-xs text-crypto-black text-center'>It seems the page you are looking for does not exist. Let´s get you back on track</p>
					<Link href={'/search'} className='bg-crypto-black text-white flex flex-row px-2 py-1 rounded-xl text-xs gap-x-2 mt-2'>
						<p>Search</p>
						<Icon.ArrowUp className='w-3' />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default notFound;
