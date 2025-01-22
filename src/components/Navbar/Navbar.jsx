import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavbarItem } from './components/NavbarItem';
import { InstagramAnchor } from './components/InstagramAnchor';
import { navbarItems } from './components/navbarData/NavbarItems';

import NavLogo from '/nietypowa-nav-logo.png';

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const divRef = useRef();

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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

	const handleScroll = () => {
		if (window.scrollY > 60) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const scrollToTop = () => {
		const { current } = divRef;

		if (current !== null) {
			current.scrollIntoView({ behavior: 'smooth' });
		}

		if (window.location.hash) {
			window.history.replaceState('', document.title, window.location.pathname);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => scrollToTop, []);

	return (
		<header className='w-full flex justify-center' ref={divRef}>
			<div
				className={`fixed top-0 w-full 2xl:rounded-b-[32px] h-[80px] flex md:justify-center justify-between items-center py-4 mf:py-2 z-50 transition duration-300 mr-auto tracking-widest ${
					isScrolled ? 'bg-[#c80c5afb]' : 'bg-transparent'
				}`}>
				<div className='md:flex-[0.8] 2xl:flex-[0.5] flex-initial justify-center items-center'>
					<div className='flex items-center mf:mx-2'>
						<img
							src={NavLogo}
							alt='Logo przenoszące na początek strony'
							className='cursor-pointer p-2 mf:p-0 scroll-smooth'
							onClick={scrollToTop}
						/>
					</div>
				</div>
				<nav>
					{isMobile ? (
						<div className='flex relative'>
							<HiMenuAlt4
								fontSize={32}
								className='text-white cursor-pointer mx-2 sm:mx-4'
								onClick={() => setToggleMenu(true)}
							/>
							{(toggleMenu || isAnimating) && (
								<ul
									onAnimationEnd={handleAnimationEnd}
									className={`z-10 fixed top-1 right-1 bottom-1 p-3 w-[80vw] min-[500px]:w-[70vw] shadow-2xl list-none flex flex-col justify-start items-center rounded-md text-white bg-[#C80C59] overflow-y-auto ${
										toggleMenu ? 'animate-slide-in' : 'animate-slide-out'
									}`}>
									<li className='text-xl self-start my-2 mb-6 cursor-pointer'>
										<AiOutlineClose fontSize={28} onClick={handleMenuClose} />
									</li>
									{navbarItems.map(({ title, section }) => (
										<NavbarItem
											key={title}
											title={title}
											section={section}
											classProps={'mb-5'}
											onClick={handleMenuClose}
										/>
									))}
									<InstagramAnchor />
								</ul>
							)}
						</div>
					) : (
						<ul className='text-white flex list-none flex-row justify-between items-center flex-initial 2xl:text-lg'>
							{navbarItems.map(({ title, section }) => (
								<NavbarItem key={title} title={title} section={section} isScrolled={isScrolled} />
							))}
							<InstagramAnchor liStyles='ml-3' isScrolled={isScrolled} />
						</ul>
					)}
				</nav>
			</div>
		</header>
	);
};
