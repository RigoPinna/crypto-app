import { ReactElement } from 'react';
type THeaderProps = {
	startContent: ReactElement;
	centerContent?: ReactElement;
	endContent?: ReactElement;
};
export const Header = ({ startContent, centerContent, endContent }: THeaderProps) => {
	return (
		<header className='w-full min-h-4 flex bg-crypto-gray/30 backdrop-blur-md items-center fixed top-0 left-0 z-10 shadow-lg shadow-gray-300/30'>
			<div className='py-3 flex flex-row gap-x-1 items-center w-full max-w-2xl ml-auto mr-auto'>
				<div className='flex items-center w-[33%] h-8 p-3'>{startContent}</div>
				<div className='flex items-center justify-center flex-1 h-8'>{centerContent && centerContent}</div>
				<div className='pr-3 flex items-center justify-end w-[33%] h-8'>{endContent && endContent}</div>
			</div>
		</header>
	);
};
