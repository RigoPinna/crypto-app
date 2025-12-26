'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Ripple = {
	x: number;
	y: number;
	size: number;
	id: number;
};

type ButtonVariant = 'primary' | 'light';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: ButtonVariant;
};

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
	const [ripples, setRipples] = useState<Ripple[]>([]);

	const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);

		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		const newRipple: Ripple = {
			x,
			y,
			size,
			id: Date.now(),
		};

		setRipples(prev => [...prev, newRipple]);

		setTimeout(() => {
			setRipples(prev => prev.filter(r => r.id !== newRipple.id));
		}, 600);

		onClick?.();
	};

	const isLight = variant === 'light';

	return (
		<motion.button
			whileTap={{ scale: 0.96 }}
			transition={{ type: 'spring', stiffness: 400, damping: 25 }}
			onClick={createRipple}
			className={`
        relative
        overflow-hidden
        rounded-xl
        px-4
        py-2
        text-xs
        font-medium
        outline-none
        hover:cursor-pointer
        focus-visible:ring-2
        ${
					isLight
						? `
            bg-transparent
            text-crypto-black
            focus-visible:ring-gray-300
			hover:bg-gray-100
			transition
			duration-300
          `
						: `
            bg-crypto-black
            text-white
            shadow-md
            focus-visible:ring-blue-400
          `
				}
      `}>
			{children}

			<AnimatePresence>
				{ripples.map(ripple => (
					<motion.span
						key={ripple.id}
						initial={{ scale: 0, opacity: 0.35 }}
						animate={{ scale: 1, opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						style={{
							position: 'absolute',
							left: ripple.x,
							top: ripple.y,
							width: ripple.size,
							height: ripple.size,
							borderRadius: '50%',
							backgroundColor: isLight ? 'rgba(0,0,0,0.15)' : 'white',
							pointerEvents: 'none',
						}}
					/>
				))}
			</AnimatePresence>
		</motion.button>
	);
}
