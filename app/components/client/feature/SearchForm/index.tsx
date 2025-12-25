'use client';
import { FormEvent } from 'react';
import { Input } from '../../common';
import { useForm } from '@/app/hooks';
import { useRouter, useSearchParams } from 'next/navigation';

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
			<Input name='search' placeholder='Search' onChange={onInputChange} value={formData.search} />
		</form>
	);
};
