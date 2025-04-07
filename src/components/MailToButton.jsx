import { Link } from 'react-router-dom';

export const MailToButton = ({ mailto, label, ...otherProps }) => {
	const handleMailto = e => {
		e.preventDefault();
		window.location.href = mailto;
	};

	return (
		<Link to='#' onClick={handleMailto} {...otherProps}>
			{label}
		</Link>
	);
};
