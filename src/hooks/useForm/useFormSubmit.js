import emailjs from '@emailjs/browser';

export const useFormSubmit = ({
	setIsLoading,
	setReCaptchaErrorValue,
	refCaptcha,
	values,
	setValues,
	setButtonText,
	setFocused,
	specialIcon,
}) => {
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
						setValues({ username: '', email: '', phone: '', topic: '', message: '' });
						setButtonText(specialIcon);
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

	return { handleSubmit };
};
