import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import './styles/styles.css';

const Gallery = () => {
	return (
		<section id='galeria' className='gallery'>
			<div className='gallery-container'>
				<div className='gallery-title-container'>
					<h2 className='gallery-title'>Galeria</h2>
				</div>
				<div className='gallery-mosaic-container'>
					<div className='image-mosaic w-full'>
						<div className='card card-tall card-wide card-with-bg gallery-image--first'>
							<span>Pracuję nad tym.. :)</span>
						</div>
						<div className='card card-tall card-with-bg gallery-image--second'>
							<span>Pracuję nad tym.. :)</span>
						</div>
						<div className='card card-with-bg gallery-image--third'>
							<span>Pracuję nad tym.. :)</span>
						</div>
						<div className='card card-with-bg gallery-image--fourth'>
							<span>Pracuję nad tym.. :)</span>
						</div>
						<div className='card card-with-bg gallery-image--fifth'>
							<span>Pracuję nad tym.. :)</span>
						</div>
						<div className='card card-with-bg gallery-image--sixth'>
							<span>Pracuję nad tym.. :)</span>
						</div>
						<div className='card card-wide gallery-image--seventh'>
							<Link to='/galeria-prac' className='gallery-btn' onClick={scrollToTop}>
								Przejdź do galerii
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='gallery-special-block gallery-special-block--left' />
			<div className='gallery-special-block gallery-special-block--right' />
		</section>
	);
};

export default Gallery;
