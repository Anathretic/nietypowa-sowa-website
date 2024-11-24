import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { inputData } from '../inputsConfig/inputData';
import { textareaData } from '../inputsConfig/textareaData';
import { FormInput, FormTextarea } from '../components/Inputs';
import { FormLoader } from '../components/FormLoader';
import { MailToButton } from '../components/MailToButton';
import { useContactFormButton } from '../hooks/useContactFormButton';
import { useContactFormInputs } from '../hooks/useContactFormInputs';
import { BsCheck2All } from 'react-icons/bs';

import ContactHeader from '../images/contact-section/contact-header.png';

const Contact = () => {
	const [focused, setFocused] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [recaptchaErrorValue, setRecaptchaErrorValue] = useState('');

	const [values, setValues, handleInputValue] = useContactFormInputs();
	const [buttonText, setButtonText] = useContactFormButton();
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	const refCaptcha = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();

		setIsLoading(true);
		setRecaptchaErrorValue('');
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
						setValues({ username: '', email: '', message: '' });
						setButtonText(<BsCheck2All color='#FFFFFF' fontSize={28} />);
					},
					function () {
						setRecaptchaErrorValue('Coś poszło nie tak..');
					}
				)
				.finally(() => {
					setFocused(false);
					setIsLoading(false);
				});
			return sendMsg;
		} else {
			setIsLoading(false);
			setRecaptchaErrorValue('Nie bądź 🤖!');
		}
	};

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<section id='kontakt' className='flex w-full justify-center items-center max-md:pt-[50px] pt-[40px]'>
			<div className='flex flex-col items-center md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-center items-center flex-col mf:ml-2'>
					<h2 className='w-full max-w-[500px] 2xl:max-w-[725px] text-4xl sm:text-5xl mf:text-6xl py-1 max-rsm:text-left text-center mf:text-left z-10'>
						<img src={ContactHeader} alt='Tytuł sekcji z formularzem kontaktowym' />
					</h2>
					<div className='mf:text-lg text-center mt-5 text-white font-light text-base italic'>
						<br />
						<p className='mb-2'>Wypełnij formularz, a ja na pewno się odezwę i dogadamy wszystkie szczegóły!</p>
						<br />
						<p className='mb-2'>A jeśli chcesz skontaktować się w inny sposób skorzystaj z danych poniżej:</p>
						<br />
						<p className='mb-2 underline underline-offset-4'>
							<span className='not-italic'>E-mail:</span>{' '}
							<MailToButton label='nietypowasowa@gmail.com' mailto='mailto:nietypowasowa@gmail.com' />
						</p>
						<br />
						<p className='mb-2 underline underline-offset-4'>
							<span className='not-italic'>Telefon:</span> +48 577 738 995
						</p>
						<br />
						<p className='mb-2'>
							Pamiętaj, że moja pracownia znajduje się w okolicy{' '}
							<span className='not-italic underline underline-offset-4'>Zamościa!</span>
						</p>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full max-w-[1000px] mf:mt-4 mt-10'>
					<form
						onSubmit={handleSubmit}
						className='px-5 py-2 w-full flex flex-col justify-start items-center mf:mt-10 mf:text-lg'>
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
						<div className={`${isMobile ? 'h-48' : 'h-32'} mt-7 md:ml-0.5 ml-1.5 z-10`}>
							<ReCAPTCHA
								key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
								size={isMobile ? 'compact' : 'normal'}
								sitekey={import.meta.env.VITE_SITE_KEY}
								ref={refCaptcha}
							/>
							<div className={`${isMobile ? 'h-12' : 'h-10 mt-1'} flex items-center justify-center`}>
								<p className='text-[#23A1B4] text-lg font-bold text-center'>{recaptchaErrorValue}</p>
							</div>
						</div>
						<div className='flex justify-center items-center h-28 mt-2 z-10'>
							{isLoading ? (
								<FormLoader />
							) : (
								<button
									type='submit'
									className='flex justify-center bg-[#23A1B4] p-3 w-32 mf:w-48 rounded-full cursor-pointer hover:bg-[#C80C59] transition duration-300 text-white text-lg'>
									{buttonText}
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
