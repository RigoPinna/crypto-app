'use client';
import { Icon } from '@/app/components/icons';
import { Button } from '../../common/Button';

export const NotFound = () => {
	const onRetry = () => {
		window.location.reload();
	};
	return (
		<div className='flex flex-col gap-y-2 items-center'>
			<Icon.Wind className='w-8 text-gray-600' />
			<div className='flex flex-col items-center gap-y-1'>
				<p className='text-xs text-crypto-black text-center'>Something went wrong while loading the data. Please try again.</p>

				<Button onClick={onRetry}>Try again</Button>
			</div>
		</div>
	);
};
