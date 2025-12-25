import { InputHTMLAttributes, ReactNode } from 'react';

interface CryptoInputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: ReactNode;
}

export function Input({ icon, className = '', ...props }: CryptoInputProps) {
	return (
		<div
			className={`flex items-center gap-2
        w-full
        rounded-full
        bg-white
        px-3 py-1
        border border-slate-300
        transition
        focus-within:border-slate-500
        focus-within:ring-2
        focus-within:ring-slate-300/40 ${className}`}>
			{icon && <span className='text-slate-400 flex items-center'>{icon}</span>}

			<input
				className='
          w-full
          bg-transparent
          outline-none
          text-slate-700
          placeholder:text-slate-400
          text-sm
        '
				{...props}
			/>
		</div>
	);
}
