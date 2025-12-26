'use client';
import { FormEvent } from 'react';
import { Input } from '../../common';
import { useForm } from '@/app/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { Icon } from '@/app/components/icons';

type TSearchForm = {
	search: string;
};
type TSearchResultProps = {
	classNameForm?: string;
};
export const SearchForm = ({ classNameForm = '' }: TSearchResultProps) => {
	const searchParams = useSearchParams();
	const term = searchParams.get('term');
	const { onInputChange, formData } = useForm<TSearchForm>({ search: term || '' });
	const router = useRouter();
	const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const params = new URLSearchParams({
			term: encodeURIComponent(formData.search),
		});

		router.replace(`/search?${params.toString()}`);
	};
	return (
		<form className={`w-full ${classNameForm}`} onSubmit={onSubmit}>
			<Input
				endContent={
					<button
						type='submit'
						className='text-white bg-crypto-black rounded-full p-1 cursor-pointer hover:bg-crypto-black-400 transition duration-300 active:scale-95 disabled:bg-crypto-black-400'
						disabled={formData.search === ''}>
						<Icon.SearchCrypto className='w-3' />
					</button>
				}
				name='search'
				placeholder='Search'
				onChange={onInputChange}
				value={formData.search}
			/>
		</form>
	);
};
