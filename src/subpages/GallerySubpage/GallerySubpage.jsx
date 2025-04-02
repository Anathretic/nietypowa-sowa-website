import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import './styles/styles.css';

const GallerySubpage = () => {
	return (
		<section className='gallery-subpage'>
			<div className='gallery-subpage-container'>
				<div className='gallery-subpage-title-container'>
					<h1 className='gallery-subpage-title'>Galeria</h1>
				</div>
				<div className='gallery-subpage-mosaic-container'>
					<div className='image-mosaic w-full'>
						<div className='card card-tall card-wide card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-tall card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-tall card-wide card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-tall card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
						<div className='card card-with-bg'>
							<span>Pracujemy nad tym.. :)</span>
						</div>
					</div>
				</div>
				<Link to='/' className='gallery-subpage-btn' onClick={scrollToTop}>
					Powrót
				</Link>
			</div>
		</section>
	);
};

export default GallerySubpage;
