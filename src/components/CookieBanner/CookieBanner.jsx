import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import './styles/styles.css';

const CookieBanner = ({ ...otherProps }) => {
	return (
		<CookieConsent
			disableStyles={true}
			containerClasses='cookie-banner-container'
			buttonClasses='cookie-banner-button'
			location='bottom'
			buttonText='Zamknij'
			expires={1}
			{...otherProps}>
			<p className='cookie-banner-text'>
				Ta strona używa plików cookie wyłącznie w celach technicznych (np. google reCaptcha). Dowiedz się więcej z{' '}
				<Link to='/polityka-prywatnosci' onClick={scrollToTop} className='cookie-banner-anchor'>
					polityki prywatności
				</Link>
				.
			</p>
		</CookieConsent>
	);
};

export default CookieBanner;
