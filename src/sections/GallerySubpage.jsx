import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';

import GallerySubpageHeader from '../images/gallery-section/gallery-subpage-header.png';

const GallerySubpage = () => {
	return (
		<section className='flex w-full justify-center items-center max-md:pt-[50px] pt-[40px]'>
			<div className='flex flex-col items-center md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-center items-center flex-col mf:ml-2'>
					<h2 className='w-full max-w-[500px] 2xl:max-w-[700px] text-4xl sm:text-5xl mf:text-6xl max-md:pt-4 pt-1 pb-12 max-rsm:text-left text-center mf:text-left z-10'>
						<img
							src={GallerySubpageHeader}
							alt='Tytuł sekcji przedstawijącej galerię zdjęć ilustrujące wykonane prace'
						/>
					</h2>
				</div>
				<div className='scroll-mt-[120px] max-w-[1000px] w-full max-lg:w-11/12 z-10'>
					<div className='image-mosaic w-full'>
						<div
							className='card card-tall card-wide card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/564/1200/800')` }}></div>
						<div
							className='card card-tall card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/566/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/575/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/626/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/667/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/678/800/530')` }}></div>
						<div
							className='card card-tall card-wide card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/564/1200/800')` }}></div>
						<div
							className='card card-tall card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/566/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/575/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/626/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/667/800/530')` }}></div>
						<div
							className='card card-with-bg'
							style={{ backgroundImage: `url('https://picsum.photos/id/678/800/530')` }}></div>
					</div>
				</div>
				<Link
					to='/'
					className='bg-[#23A1B4] mt-16 max-md:py-3 py-2 max-sm:px-12 px-20 text-lg rounded-full hover:bg-[#C80C59] text-white transition duration-300 z-10'
					onClick={scrollToTop}>
					Powrót
				</Link>
			</div>
		</section>
	);
};

export default GallerySubpage;
