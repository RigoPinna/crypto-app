'use client';
import { Icon } from '@/app/components/icons';
import { Button } from '../Button';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
	const router = useRouter();
	const onBack = () => {
		router.back();
	};
	return (
		<Button onClick={onBack}>
			<div className='flex flex-row items-center gap-x-1'>
				<Icon.ArrowLeft />
				Back
			</div>
		</Button>
	);
};
