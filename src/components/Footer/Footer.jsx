import { FaRegCopyright } from 'react-icons/fa';

import './styles/styles.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='footer-bar footer-bar--second' />
			<div className='footer-copyright-box'>
				<FaRegCopyright className='footer-copyright-icon' />
				<p className='footer-company-name'> {currentYear} nietypowa sowa</p>
			</div>
		</footer>
	);
};

export default Footer;
