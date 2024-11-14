import GallerySplashImage from '../images/gallery-splash-image.png';

const Gallery = () => {
	return (
		<section className='flex flex-col justify-center items-center w-full'>
			<h2 id='galeria'>Galeria!</h2>
			<img src={GallerySplashImage} alt='' />
		</section>
	);
};

export default Gallery;
