import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import './styles/styles.css';

const CookieBanner = ({ ...otherProps }) => {
	return (
		<CookieConsent
			location='bottom'
			buttonText='OK'
			style={{
				color: '#fff',
				backgroundColor: '#C80C59',
				padding: '10px',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			buttonStyle={{
				backgroundColor: '#ffdf00',
				fontSize: '15px',
				padding: '10px',
				width: '100px',
				borderRadius: '8px',
			}}
			expires={1}
			{...otherProps}>
			<p className='cookie-text'>
				Ta strona używa plików cookie wyłącznie w celach technicznych (np. google reCaptcha). Dowiedz się więcej z{' '}
				<Link to='/polityka-prywatnosci' onClick={scrollToTop} className='cookie-anchor'>
					polityki prywatności
				</Link>
				.
			</p>
		</CookieConsent>
	);
};

export default CookieBanner;
