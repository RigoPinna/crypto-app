import { PriceChart } from '@/app/components/client';
import { CRYPTO_API } from '@/app/server';

type TChartProps = {
	id: string;
};
export const Chart = async ({ id }: TChartProps) => {
	const resp = await CRYPTO_API.getChartData(id, 31, {
		headers: {
			'User-Agent': 'my-nextjs-app',
			Accept: 'application/json',
		},
		next: {
			revalidate: 300, // 5 min
		},
	});
	if (!resp.success && !resp.data) return <></>;
	const chart = { ...resp.data };
	if (!chart?.prices) return <></>;

	const chartData = chart.prices.map(([timestamp, price]) => ({
		time: new Date(timestamp).toLocaleTimeString(),
		price,
	}));
	return <PriceChart data={chartData} />;
};
