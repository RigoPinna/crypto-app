import { useState } from 'react';
import { getPagination } from '../helpers';
import { useInView } from './useInView';

export const usePagination = <T>(allData: T[]) => {
	const pagination = getPagination<T>({ data: allData, perPage: 20 });
	const [currentPage, setCurrentPage] = useState<{
		page: number;
		data: T[];
	}>({ page: pagination.initialPage, data: pagination.data[0] });
	const handleInView = () => {
		setCurrentPage(prev => {
			const nextPage = prev.page + 1;
			if (nextPage >= pagination.totalPages) return prev;

			return {
				page: nextPage,
				data: [...prev.data, ...pagination.data[nextPage]],
			};
		});
	};

	const refElement = useInView(handleInView, { threshold: 1 });
	return { refElement, currentPage, totalPages: pagination.totalPages };
};
