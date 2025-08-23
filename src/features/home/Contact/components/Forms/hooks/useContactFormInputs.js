import { useState } from 'react';

export const useContactFormInputs = () => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		phone: '',
		topic: '',
		message: '',
	});

	const handleInputValue = e => {
		const { name, value } = e.target;
		setValues(prev => ({ ...prev, [name]: value }));

		if (name === 'topic') {
			const url = new URL(window.location);
			url.searchParams.set('topic', value);
			window.history.replaceState(null, '', url);
		}
	};

	return { values, setValues, handleInputValue };
};
