import { CryptoList, NotFound } from '@/app/components/client';
import { CRYPTO_API } from '@/app/server';

export const List = async () => {
	const resp = await CRYPTO_API.getCryptoList({
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
