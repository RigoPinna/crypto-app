'use client';
import { Icon } from '@/app/components/icons';

export const NotFoundSearch = () => {
	return (
		<div className='flex flex-col gap-y-2 items-center mt-6'>
			<Icon.Wind className='w-8 text-gray-600' />
			<div className='flex flex-col items-center gap-y-1'>
				<h3>Whoops!</h3>
				<p className='text-xs text-crypto-black text-center'>
					Sorry, but nothing matched your search.
					<br />
					Plase try some different keywords.
				</p>
			</div>
		</div>
	);
};
