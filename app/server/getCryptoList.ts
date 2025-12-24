import { IResultAPI, TCryptoList, TResponseAPI } from '../interfaces';

const getCryptoList = async (config?: RequestInit | undefined): TResponseAPI<TCryptoList> => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coins/markets?vs_currency=usd&per_page=250`, config);
		if (!response.ok) return { status: response.status, success: false, data: [] };

		const data = (await response.json()) as TCryptoList;
		return { status: response.status, success: response.ok, data };
	} catch (error) {
		console.error('Error fetching crypto list:', error);
		return { status: 500, success: false, data: [] };
	}
};

export const CRYPTO_API = {
	getCryptoList,
};
