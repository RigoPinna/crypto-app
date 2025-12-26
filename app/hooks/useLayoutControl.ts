import { ComponentProps, useCallback, useState } from 'react';
import { List } from '../components/client';

type TLayout = ComponentProps<typeof List.Content>['type'];
type TReturnLayoutControl = [TLayout, (layout: TLayout) => void];

export const useLayoutControl = (): TReturnLayoutControl => {
	const [layoutType, setLayoutType] = useState<TLayout>('column');
	const selectLayout = useCallback(
		(type: typeof layoutType) => {
			setLayoutType(() => type);
		},
		[layoutType],
	);

	return [layoutType, selectLayout];
};
