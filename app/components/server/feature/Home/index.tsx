import { CryptoList, NotFound } from '@/app/components/client';
import { CRYPTO_API } from '@/app/services';

export const List = async () => {
	const resp = await CRYPTO_API.getCryptoList({
		headers: {
			'User-Agent': 'my-nextjs-app',
			Accept: 'application/json',
		},
		cache: 'force-cache',
	});
	if (!resp.success) return <NotFound />;

	const { data: cryptos } = resp;

	return (
		<>
			<CryptoList cryptos={cryptos} />
		</>
	);
};
