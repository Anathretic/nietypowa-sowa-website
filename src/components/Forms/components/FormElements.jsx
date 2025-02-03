import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive';
import { FormLoader } from '../../FormLoader';

const inputStyles = 'my-2 w-full rounded-sm outline-none bg-transparent text-white border-none text-sm input-gradient';

export const FormInput = ({ label, htmlFor, onChange, errorMessage, ...inputProps }) => {
	return (
		<div className='w-full flex flex-col justify-center'>
			<label htmlFor={htmlFor} className='text-white mt-5'>
				{label}:
			</label>
			<input className={`p-4 ${inputStyles}`} onChange={onChange} autoComplete='off' {...inputProps} />
			<span className='text-center h-8 rrsm:h-4 font-bold text-[#23A1B4]'>{errorMessage}</span>
		</div>
	);
};

export const FormTextarea = ({ label, htmlFor, onChange, errorMessage, ...textareaProps }) => {
	return (
		<div className='w-full flex flex-col justify-center'>
			<label htmlFor={htmlFor} className='text-white mt-5'>
				{label}:
			</label>
			<textarea
				className={`min-h-[128px] mf:min-h-[182px] max-h-[312px] p-2 ${inputStyles}`}
				onChange={onChange}
				minLength={50}
				maxLength={1500}
				autoComplete='off'
				{...textareaProps}
			/>
			<span className='text-center h-8 rrsm:h-4 font-bold text-[#23A1B4]'>{errorMessage}</span>
		</div>
	);
};

export const FormReCaptchaV2 = ({ refCaptcha, reCaptchaErrorValue }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<div className={`${isMobile ? 'h-48' : 'h-32'} mt-7 md:ml-0.5 ml-1.5 z-10`}>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
			<div className={`${isMobile ? 'h-12' : 'h-10 mt-1'} flex items-center justify-center`}>
				<p className='text-[#23A1B4] text-lg font-bold text-center'>{reCaptchaErrorValue}</p>
			</div>
		</div>
	);
};

export const FormSubmit = ({ isLoading, buttonText }) => {
	return (
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
	);
};
