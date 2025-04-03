import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive';
import { FormLoader } from '../../FormLoader';

export const FormInput = ({ label, htmlFor, onChange, errorMessage, ...inputProps }) => {
	return (
		<div className='form-box'>
			<label htmlFor={htmlFor} className='form-label'>
				{label}:
			</label>
			<input className='form-input' onChange={onChange} autoComplete='off' {...inputProps} />
			<span className='form-input-error'>{errorMessage}</span>
		</div>
	);
};

export const FormTextarea = ({ label, htmlFor, onChange, errorMessage, ...textareaProps }) => {
	return (
		<div className='form-box'>
			<label htmlFor={htmlFor} className='form-label'>
				{label}:
			</label>
			<textarea
				className='form-textarea'
				onChange={onChange}
				minLength={50}
				maxLength={1500}
				autoComplete='off'
				{...textareaProps}
			/>
			<span className='form-textarea-error'>{errorMessage}</span>
		</div>
	);
};

export const FormReCaptchaV2 = ({ refCaptcha, reCaptchaErrorValue }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<div className='form-recaptcha-box'>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
			<div className='form-recaptcha-error'>
				<p>{reCaptchaErrorValue}</p>
			</div>
		</div>
	);
};

export const FormSubmit = ({ isLoading, buttonText }) => {
	return (
		<div className='form-box'>
			{isLoading ? (
				<FormLoader />
			) : (
				<button type='submit' className='form-submit'>
					{buttonText}
				</button>
			)}
		</div>
	);
};
