import { useEffect, useRef } from 'react';

type TOptions = IntersectionObserverInit;

export const useInView = (onInView: () => void, options?: TOptions) => {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					onInView();
				}
			},
			{
				threshold: 0.1,
				...options,
			},
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [onInView, options]);

	return ref;
};
