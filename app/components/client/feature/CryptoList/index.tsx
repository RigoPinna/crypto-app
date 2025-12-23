'use client';
import { List } from '../../common';

export const CryptoList = () => {
	return (
		<List.Content title='All cryptos'>
			<List.Item title='Bitcoin' isLink link='/about' />
		</List.Content>
	);
};
