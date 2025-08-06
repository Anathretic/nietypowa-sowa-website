import { useState } from 'react';

import './styles/styles.css';
import './styles/gallery-mosaic.css';

const Gallery = () => {
	const [moreImages, setMoreImages] = useState(false);

	return (
		<section id='galeria' className='gallery'>
			<div className={`gallery-container ${moreImages && 'gallery-container--more-padding'}`}>
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
						{moreImages ? (
							<>
								<div className='card card-tall card-wide card-with-bg gallery-image--eighth'>
									<span>Pracuję nad tym.. :)</span>
								</div>
								<div className='card card-tall card-with-bg gallery-image--nineth'>
									<span>Pracuję nad tym.. :)</span>
								</div>
								<div className='card card-with-bg gallery-image--tenth'>
									<span>Pracuję nad tym.. :)</span>
								</div>
								<div className='card card-with-bg gallery-image--eleventh'>
									<span>Pracuję nad tym.. :)</span>
								</div>
								<div className='card card-with-bg gallery-image--twelfth'>
									<span>Pracuję nad tym.. :)</span>
								</div>
								<div className='card card-with-bg gallery-image--thirteenth'>
									<span>Pracuję nad tym.. :)</span>
								</div>
								<div className='card card-with-bg gallery-image--fourteenth'>
									<span>Pracuję nad tym.. :)</span>
								</div>
							</>
						) : (
							<div className='card card-wide gallery-image--seventh'>
								<button type='button' className='gallery-btn' onClick={() => setMoreImages(true)}>
									Pokaż więcej
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='gallery-special-block gallery-special-block--left' />
			<div className='gallery-special-block gallery-special-block--right' />
		</section>
	);
};

export default Gallery;
