'use client';
import { FormEvent } from 'react';
import { Input } from '../../common';
import { useForm } from '@/app/hooks';
import { useRouter } from 'next/navigation';

type TSearchForm = {
	search: string;
};
type TSearchFormProps = {
	searchTerm?: string;
};
export const SearchForm = ({ searchTerm = '' }: TSearchFormProps) => {
	const { onInputChange, formData } = useForm<TSearchForm>({ search: searchTerm });
	const router = useRouter();
	const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const params = new URLSearchParams({
			term: encodeURIComponent(formData.search),
		});

		router.push(`/search?${params.toString()}`);
	};
	return (
		<form className='w-full' onSubmit={onSubmit}>
			<Input name='search' placeholder='Search' onChange={onInputChange} value={formData.search} />
		</form>
	);
};
