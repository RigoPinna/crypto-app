'use client';
import { Icon } from '@/app/components/icons';
import { Button } from '../Button';
import { useRouter } from 'next/navigation';

type TBackButtonProps = {
	backTo?: string;
};
export const BackButton = ({ backTo }: TBackButtonProps) => {
	const router = useRouter();
	const onBack = () => {
		if (backTo) {
			router.push(backTo);
			return;
		}
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
