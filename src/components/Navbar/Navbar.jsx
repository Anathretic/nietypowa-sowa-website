import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavbarItem } from './components/NavbarItem';
import { InstagramAnchor } from './components/InstagramAnchor';
import { navbarItems } from './components/navbarData/NavbarItems';

import NavLogo from '/nietypowa-nav-logo.png';

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const divRef = useRef();

	const handleScroll = () => {
		if (window.scrollY > 80) {
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
				className={`fixed top-0 w-full 2xl:w-[95%] 2xl:rounded-b-full h-[80px] flex md:justify-center justify-between items-center py-4 mf:py-2 z-50 transition duration-300 mr-auto tracking-widest ${
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
					<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial 2xl:text-lg'>
						{navbarItems.map(({ title, section }) => (
							<NavbarItem key={title} title={title} section={section} isScrolled={isScrolled} />
						))}
						<InstagramAnchor liStyles='ml-5' isScrolled={isScrolled} />
					</ul>
				</nav>
				<div className='flex relative'>
					{toggleMenu || (
						<HiMenuAlt4
							fontSize={32}
							className='text-white md:hidden cursor-pointer mx-2 sm:mx-4'
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<nav>
							<ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md text-white bg-[#C80C59] animate-slide-in'>
								<li className='text-xl self-start my-2 mb-6 cursor-pointer'>
									<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
								</li>
								{navbarItems.map(({ title, section }) => (
									<NavbarItem
										key={title}
										title={title}
										section={section}
										classProps={'mb-5'}
										onClick={() => {
											setToggleMenu(false);
										}}
									/>
								))}
								<InstagramAnchor />
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};
