import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import emailjs from '@emailjs/browser';
import { useContactFormInputs } from '../../hooks/useContactFormInputs';
import { useContactFormButton } from '../../hooks/useContactFormButton';
import { FormInput, FormReCaptchaV2, FormSubmit, FormTextarea } from './components/FormElements';
import { inputData } from '../../config/inputsConfig/inputData';
import { textareaData } from '../../config/inputsConfig/textareaData';
import { BsCheck2All } from 'react-icons/bs';

import './styles/styles.css';

export const ContactForm = () => {
	const [focused, setFocused] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [reCaptchaErrorValue, setReCaptchaErrorValue] = useState('');

	const [values, setValues, handleInputValue] = useContactFormInputs();
	const [buttonText, setButtonText] = useContactFormButton();

	const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

	const refCaptcha = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();

		setIsLoading(true);
		setReCaptchaErrorValue('');
		const token = await refCaptcha.current.getValue();
		refCaptcha.current.reset();

		const params = {
			...values,
			'g-recaptcha-response': token,
		};

		if (token) {
			const sendMsg = emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(
					function () {
						setValues({ username: '', email: '', phone: '', message: '' });
						setButtonText(<BsCheck2All color='#FFFFFF' fontSize={isMobile ? 21 : 23} />);
					},
					function () {
						setReCaptchaErrorValue('Coś poszło nie tak..');
					}
				)
				.finally(() => {
					setFocused(false);
					setIsLoading(false);
				});
			return sendMsg;
		} else {
			setIsLoading(false);
			setReCaptchaErrorValue('Nie bądź 🤖!');
		}
	};

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<form onSubmit={handleSubmit} className='contact-form'>
			{inputData.map(input => (
				<FormInput
					key={input.id}
					htmlFor={input.name}
					{...input}
					value={values[input.name]}
					onChange={handleInputValue}
					onInvalid={handleFocus}
					focused={focused.toString()}
				/>
			))}
			{textareaData.map(text => (
				<FormTextarea
					key={text.id}
					htmlFor={text.name}
					{...text}
					value={values[text.name]}
					onChange={handleInputValue}
					onInvalid={handleFocus}
					focused={focused.toString()}
				/>
			))}
			<FormReCaptchaV2 refCaptcha={refCaptcha} reCaptchaErrorValue={reCaptchaErrorValue} />
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
		</form>
	);
};
