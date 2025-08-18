import { useEffect } from 'react';

import NavLogo from '../../../images/logo-images/nietypowa-nav-logo.png';

export const NavbarTitle = ({ divRef }) => {
	const scrollToTop = () => {
		const { current } = divRef;

		if (current !== null) {
			current.scrollIntoView({ behavior: 'smooth' });
		}

		if (window.location.hash) {
			window.history.replaceState('', document.title, window.location.pathname);
		}
	};

	useEffect(() => scrollToTop, []);

	return (
		<div className='navbar-title' onClick={scrollToTop}>
			<div className='navbar-title-box'>
				<div className='navbar-title-text'>
					<img src={NavLogo} alt='Logo przenoszące na początek strony' />
				</div>
			</div>
		</div>
	);
};
