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
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, setValues, handleInputValue];
};
