import { useEffect, useRef, useState } from 'react';

type TUseFormReturn<T> = {
	formData: T;
	onInputChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
	setIndivualField: <I>(field: keyof T, value: I) => void;
	resetForm: () => void;
};

export const useForm = <T>(data: T): TUseFormReturn<T> => {
	const [formData, setFormData] = useState<T>(data);
	const refData = useRef<T>(null);
	useEffect(() => {
		refData.current = data;
	}, []);
	const onChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value, type } = evt.target;
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? value === '1' : value,
		}));
	};
	const setIndivualField = <I>(field: keyof T, value: I) => {
		setFormData(prev => ({
			...prev,
			[field]: value,
		}));
	};
	const resetForm = () => {
		if (refData.current) setFormData(refData.current);
	};
	return { formData, onInputChange: onChange, setIndivualField, resetForm };
};
