'use client';

import { Icon } from '@/app/components/icons';
import { Chip } from '../../common';

type TExploreLinkSectionProps = {
	links: string[];
};
export const ExploreLinkSection = ({ links }: TExploreLinkSectionProps) => {
	const onOpenLink = (url: string) => {
		window.open(url, '_blank');
	};
	return (
		<section>
			<h3 className='text-lg font-semibold text-crypto-black mb-1'>Explorers Link</h3>
			<div className='flex flex-row flex-wrap gap-x-1 gap-y-2'>
				{links.map((url, i) => (
					<Chip
						key={`${i}url`}
						text={url}
						endContent={<Icon.ArrowUp className='w-2' />}
						onClick={() => {
							onOpenLink(url);
						}}
					/>
				))}
			</div>
		</section>
	);
};
