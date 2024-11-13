const inputStyles =
	'my-2 w-full rounded-sm outline-none bg-transparent text-white border-none text-sm input-gradient';

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
