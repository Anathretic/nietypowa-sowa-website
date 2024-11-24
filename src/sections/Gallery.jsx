import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';

import GallerySplashImage from '../images/gallery-section/gallery-splash-image.png';
import GallerySplashTireImage from '../images/gallery-section/gallery-splash-tire-image.png';
import BlueTapeImage from '../images/gallery-section/gallery-blue-tape-image.svg';
import PinkTapeImage from '../images/gallery-section/gallery-pink-tape-image.svg';

const Gallery = () => {
	return (
		<section className='relative flex flex-col justify-center items-center w-full max-rsm:pb-[8rem] max-sm:pb-[10rem] lg:pb-[24rem] pb-[16rem]'>
			<img
				className='absolute max-rsm:top-[-60px] max-sm:top-[-45px] top-[-110px] w-full max-h-[300px] bg-repeat mb-24 z-10'
				src={PinkTapeImage}
				alt=''
			/>
			<img className='w-full max-h-[60px] bg-repeat mb-24 z-0' src={BlueTapeImage} alt='' />
			<div id='galeria' className='scroll-mt-[120px] max-w-[1000px] w-full max-lg:w-11/12 z-10'>
				<div className='image-mosaic w-full'>
					<div className='card card-tall card-wide card-with-bg max-[540px]:col-span-2'>
						<span>Pracujemy nad tym.. :)</span>
					</div>
					<div className='card card-tall card-with-bg max-[540px]:hidden'>
						<span>Pracujemy nad tym.. :)</span>
					</div>
					<div className='card card-with-bg max-[540px]:col-span-2'>
						<span>Pracujemy nad tym.. :)</span>
					</div>
					<div className='card card-with-bg max-[540px]:hidden'>
						<span>Pracujemy nad tym.. :)</span>
					</div>
					<div className='card card-with-bg max-[540px]:col-span-2'>
						<span>Pracujemy nad tym.. :)</span>
					</div>
					<div className='card card-with-bg max-[540px]:hidden'>
						<span>Pracujemy nad tym.. :)</span>
					</div>
					<div className='card card-wide max-sm:col-span-2 max-[540px]:gap-x-0'>
						<Link
							to='/galeria-prac'
							className='bg-[#23A1B4] max-md:py-3 py-2 max-sm:px-12 px-20 text-lg rounded-full hover:bg-[#C80C59] transition duration-300'
							onClick={scrollToTop}>
							Przejdź do galerii
						</Link>
					</div>
				</div>
				<div className='relative w-full flex flex-col items-center'>
					<img
						className='absolute max-rsm:bottom-[-200px] max-sm:bottom-[-300px] max-md:bottom-[-400px] bottom-[-450px] 2xl:bottom-[-650px] z-0 2xl:max-w-[800px] max-sm:max-w-[300px] sm:max-w-[500px]'
						src={GallerySplashImage}
						alt=''
					/>
					<img className='absolute max-w-[800px] top-[-20px] z-0 hidden mf:block' src={GallerySplashTireImage} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Gallery;
