'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Ripple = {
	x: number;
	y: number;
	size: number;
	id: number;
};

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
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

	return (
		<motion.button
			whileTap={{ scale: 0.96 }}
			transition={{ type: 'spring', stiffness: 400, damping: 25 }}
			onClick={createRipple}
			className='
        relative
        overflow-hidden
        rounded-xl
        bg-crypto-black
        px-4
        py-2
        font-medium
        text-white
        text-xs
        shadow-md
        outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
        hover:cursor-pointer
      '>
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
							backgroundColor: 'white',
							pointerEvents: 'none',
						}}
					/>
				))}
			</AnimatePresence>
		</motion.button>
	);
}
