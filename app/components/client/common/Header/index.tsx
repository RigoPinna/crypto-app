import { Icon } from '@/app/components/icons';

export const Header = () => {
	return (
		<header className='w-full min-h-4 flex bg-crypto-gray items-center p-3 border-b border-gray-400'>
			<div className='flex flex-row gap-x-1 items-center'>
				<Icon.Brand />
				<h1 className='font-light text-xs text-crypto-black'>CryptoApp</h1>
			</div>
		</header>
	);
};
