import { Icon } from '@/app/components/icons';

export const Header = () => {
	return (
		<header className='w-full min-h-4 flex bg-crypto-gray items-center p-3 border-b border-gray-400 fixed top-0 left-0 z-10'>
			<div className='flex flex-row gap-x-1 items-center w-full max-w-2xl ml-auto mr-auto'>
				<Icon.Brand />
				<h1 className='font-light text-xs text-crypto-black'>CryptoApp</h1>
			</div>
		</header>
	);
};
