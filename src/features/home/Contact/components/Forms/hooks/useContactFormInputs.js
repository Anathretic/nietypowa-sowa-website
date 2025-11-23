import { useState } from 'react';

export const useContactFormInputs = () => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		phone: '',
		topic: '',
		message: '',
		privacy: false,
	});

	const handleInputValue = e => {
		const { name, type, value, checked } = e.target;

		setValues(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));

		if (name === 'topic') {
			const url = new URL(window.location);
			url.searchParams.set('topic', value);
			window.history.replaceState(null, '', url);
		}
	};

	return { values, setValues, handleInputValue };
};
