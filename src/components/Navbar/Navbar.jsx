import { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavbarTitle } from './components/NavbarTitle';
import { NavbarItem } from './components/NavbarItem';
import { InstagramAnchor } from './components/InstagramAnchor';
import { navbarItems } from './components/navbarData/NavbarItems';

import throttle from 'lodash/throttle';
import './styles/styles.css';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	const divRef = useRef();

	const memoizedNavbarItems = useMemo(() => navbarItems, []);

	const handleMenuClose = () => {
		setIsAnimating(true);
		setToggleMenu(false);

		setTimeout(() => {
			setIsAnimating(false);
		}, 480);
	};

	const handleAnimationEnd = () => {
		setIsAnimating(false);
	};

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsScrolled(window.scrollY > 30);
		}, 100);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header ref={divRef}>
			<div className='navbar'>
				<div className={`navbar-container ${isScrolled && 'navbar-container--is-scrolled'}`}>
					<div className='navbar-wrapper'>
						<NavbarTitle divRef={divRef} isScrolled={isScrolled} />
						{isMobile ? (
							<>
								<HiMenuAlt4 className='navbar-mobile-burger-btn' fontSize={32} onClick={() => setToggleMenu(true)} />
								{(toggleMenu || isAnimating) && (
									<nav className='navbar-mobile'>
										<ul
											onAnimationEnd={handleAnimationEnd}
											className={`navbar-mobile-list ${toggleMenu ? 'animate-slide-in' : 'animate-slide-out'}`}>
											<li className='navbar-mobile-exit-icon'>
												<AiOutlineClose fontSize={28} onClick={handleMenuClose} />
											</li>
											{memoizedNavbarItems.map(({ title, section }) => (
												<NavbarItem
													key={title}
													title={title}
													section={section}
													classProps={'navbar-item-margin'}
													onClick={handleMenuClose}
												/>
											))}
											<InstagramAnchor />
										</ul>
									</nav>
								)}
							</>
						) : (
							<nav className='navbar-desktop'>
								<ul className='navbar-desktop-list'>
									{memoizedNavbarItems.map(({ title, section }) => (
										<NavbarItem key={title} title={title} section={section} isScrolled={isScrolled} />
									))}
									<InstagramAnchor isScrolled={isScrolled} />
								</ul>
							</nav>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
