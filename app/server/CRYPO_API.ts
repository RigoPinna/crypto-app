import { ICryptoChartData, ICryptoDetails, ISearchResult, TCryptoList, TResponseAPI } from '../interfaces';

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
const getCryptoDetailsById = async (id: string, config?: RequestInit | undefined): TResponseAPI<ICryptoDetails | null> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`,
			config,
		);
		if (!response.ok) return { status: response.status, success: false, data: null };

		const data = (await response.json()) as ICryptoDetails;
		return { status: response.status, success: response.ok, data };
	} catch (error) {
		console.error(`Error fetching crypto details for ID ${id}:`, error);
		return { status: 500, success: false, data: null };
	}
};
const getChartData = async (id: string, lastDays: number, config?: RequestInit | undefined): TResponseAPI<ICryptoChartData | null> => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${lastDays}`, config);
		if (!response.ok) return { status: response.status, success: false, data: null };

		const data = (await response.json()) as ICryptoChartData;

		return { status: response.status, success: response.ok, data };
	} catch (error) {
		console.error('Error fetching crypto chart details:', error);
		return { status: 500, success: false, data: null };
	}
};
const searchCrypto = async (term: string, config?: RequestInit | undefined): TResponseAPI<ISearchResult | null> => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/search?query=${term}`, config);
		if (!response.ok) return { status: response.status, success: false, data: null };

		const data = (await response.json()) as ISearchResult;

		return { status: response.status, success: response.ok, data };
	} catch (error) {
		console.error('Error fetching search:', error);
		return { status: 500, success: false, data: null };
	}
};
export const CRYPTO_API = {
	getCryptoList,
	getCryptoDetailsById,
	getChartData,
	searchCrypto,
};
