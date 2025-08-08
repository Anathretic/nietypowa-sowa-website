import { useContext, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useContactFormInputs } from '../../hooks/useContact/useContactFormInputs';
import { useContactFormButton } from '../../hooks/useContact/useContactFormButton';
import { useFormSubmit } from '../../hooks/useForm/useFormSubmit';
import { TopicSelectContext } from '../../context/TopicSelectContext';
import { FormInput, FormReCaptchaV2, FormSelect, FormSubmit, FormTextarea } from './components/FormElements';
import { inputData } from '../../config/inputsConfig/inputData';
import { selectData } from '../../config/inputsConfig/selectData';
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

	const { selectedTopic } = useContext(TopicSelectContext);

	const refCaptcha = useRef(null);

	const { handleSubmit } = useFormSubmit({
		setIsLoading,
		setReCaptchaErrorValue,
		refCaptcha,
		values,
		setValues,
		setButtonText,
		setFocused,
		specialIcon: <BsCheck2All color='#FFFFFF' fontSize={isMobile ? 21 : 23} />,
	});

	useEffect(() => {
		if (selectedTopic)
			setValues(prev => ({
				...prev,
				topic: selectedTopic || '',
			}));
	}, [selectedTopic]);

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<form onSubmit={handleSubmit} className='contact-form' id='formularz'>
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
			{selectData.map(select => (
				<FormSelect
					key={select.id}
					htmlFor={select.name}
					{...select}
					value={values[select.name]}
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
