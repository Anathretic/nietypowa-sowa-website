import { Link } from 'react-router-dom';

export const MailToButton = ({ mailto, label, className, ...otherProps }) => {
	const handleMailto = e => {
		e.preventDefault();
		window.location.href = mailto;
	};

	return (
		<Link to='#' className={`${className}`} onClick={handleMailto} {...otherProps}>
			{label}
		</Link>
	);
};
