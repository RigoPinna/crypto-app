import { InputHTMLAttributes, ReactNode } from 'react';

interface CryptoInputProps extends InputHTMLAttributes<HTMLInputElement> {
	startContent?: ReactNode;
	endContent?: ReactNode;
}

export function Input({ startContent, endContent, className = '', ...props }: CryptoInputProps) {
	return (
		<div
			className={`flex items-center gap-2
        w-full
        rounded-full
        bg-white
        pl-3
        pr-1 
        py-1
        border border-slate-300
        transition
        focus-within:border-slate-500
        focus-within:ring-2
        focus-within:ring-slate-300/40 ${className}`}>
			{startContent && startContent}

			<input
				className='
          flex
          flex-1
          bg-transparent
          outline-none
          text-slate-700
          placeholder:text-slate-400
          text-sm
        '
				{...props}
			/>
			{endContent && endContent}
		</div>
	);
}
