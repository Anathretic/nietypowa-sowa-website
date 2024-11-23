import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaRegCopyright } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import FooterPaintSplatterImage from '../../images/footer-section/footer-paint-splatter-image.png';

export const Footer = () => {
	const [onMouseEnterEffect, setOnMouseEnterEffect] = useState(false);
	const currentYear = new Date().getFullYear();

	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<footer
			className='relative w-full flex md:justify-center justify-between items-center flex-col p-4 text-white'
			onMouseEnter={() => setOnMouseEnterEffect(true)}
			onMouseLeave={() => setOnMouseEnterEffect(false)}
			onTouchMove={() => setOnMouseEnterEffect(true)}>
			<div className='sm:w-[90%] w-full h-[1px] bg-[#23A1B4] mt-20' />
			<div className='sm:w-[90%] w-full flex justify-between items-center my-5 z-10'>
				<div className='flex z-10'>
					<FaRegCopyright className='mx-1 h-auto' />
					<p className={`${isMobile ? 'text-xs' : 'text-sm'} text-center mf:text-base uppercase`}>
						{' '}
						{currentYear} nietypowa sowa
					</p>
				</div>
				<div className='flex flex-end z-10'>
					<Link
						to='/polityka-prywatnosci'
						className={`p-1 pt-[2px] hover:text-[#c80c59] transition duration-300 ${
							onMouseEnterEffect ? 'opacity-100' : 'opacity-0'
						}`}
						onClick={scrollToTop}>
						<MdOutlinePrivacyTip fontSize={isMobile ? 20 : 25} />
					</Link>
				</div>
			</div>
			<img
				className={`absolute bottom-0 right-0 2xl:max-w-[700px] max-sm:max-w-[300px] sm:max-w-[500px] transition duration-300 ${
					onMouseEnterEffect ? 'opacity-0' : 'opacity-100'
				}`}
				src={FooterPaintSplatterImage}
				alt=''
			/>
		</footer>
	);
};
