export type TPagination<T> = {
	initialPage: number;
	currentPage: number;
	perPage: number;
	data: T[][];
	totalPages: number;
};
export function getPagination<T>({ data, perPage }: { data: T[]; perPage: number }): TPagination<T> {
	if (!Array.isArray(data)) {
		throw new Error('data must be an array');
	}
	const pagination = Array.from({ length: Math.ceil(data.length / perPage) }, (_, i) => data.slice(i * perPage, i * perPage + perPage));

	return {
		initialPage: 0,
		currentPage: 0,
		perPage,
		data: pagination,
		totalPages: pagination.length,
	};
}
