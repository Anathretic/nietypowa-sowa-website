import { useContext, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useContactFormInputs } from './hooks/useContactFormInputs';
import { useContactFormButton } from './hooks/useContactFormButton';
import { useFormSubmit } from './hooks/useFormSubmit';
import { useUrlWithTopic } from './hooks/useUrlWithTopic';
import { inputData } from '../../config/inputData';
import { selectData } from '../../config/selectData';
import { textareaData } from '../../config/textareaData';
import { checkboxData } from '../../config/checkboxData';
import { TopicSelectContext } from '../../../../../shared/context/TopicSelectContext';
import {
	CheckboxElement,
	FormInput,
	FormReCaptchaV2,
	FormSelect,
	FormSubmit,
	FormTextarea,
} from './components/FormElements';

import { BsCheck2All } from 'react-icons/bs';

import './styles/styles.css';

export const ContactForm = () => {
	const [focused, setFocused] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [reCaptchaErrorValue, setReCaptchaErrorValue] = useState('');

	const refCaptcha = useRef(null);
	const { selectedTopic, fromSelect, setFromSelect } = useContext(TopicSelectContext);
	const { values, setValues, handleInputValue } = useContactFormInputs();
	const { buttonText, setButtonText } = useContactFormButton();
	const { goToValidHashWithTopic } = useUrlWithTopic();
	const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
	const isScreenLarge = useMediaQuery({ query: '(min-width: 1358px)' });

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

	const handleFocus = () => {
		setFocused(true);
	};

	useEffect(() => {
		if (!selectedTopic) return;
		setValues(prev => ({
			...prev,
			topic: selectedTopic,
		}));

		if (!fromSelect) {
			goToValidHashWithTopic({ selectedTopic, isScreenLarge });
		}
		setFromSelect(false);
	}, [selectedTopic]);

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
					htmlFor={`${select.name}`}
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
			{checkboxData.map(checkbox => (
				<CheckboxElement
					key={checkbox.id}
					htmlFor={checkbox.name}
					{...checkbox}
					checked={values[checkbox.name]}
					onChange={handleInputValue}
					onInvalid={handleFocus}
					focused={focused.toString()}
					errorMessage={focused && !values[checkbox.name] ? checkbox.errorMessage : ''}
				/>
			))}
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
		</form>
	);
};
