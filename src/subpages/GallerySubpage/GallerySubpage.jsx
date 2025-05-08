import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { scrollToTop } from '../../utils/scrollToTopUtils';

import './styles/styles.css';

const GallerySubpage = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Galeria Prac | Nietypowa Sowa</title>
				<meta
					name='description'
					content='Zobacz galerię moich unikalnych prac wykonanych techniką aerografu. Oferuję malowanie motocykli, odzieży oraz innych przedmiotów na zamówienie.'
				/>
				<meta property='og:title' content='Galeria Prac | Nietypowa Sowa' />
				<meta
					property='og:description'
					content='Zobacz galerię moich unikalnych prac wykonanych techniką aerografu. Każda praca to dzieło sztuki.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://nietypowa-sowa.pl/galeria-prac' />
				<link rel='canonical' href='https://nietypowa-sowa.pl/galeria-prac' />
			</Helmet>
			<main>
				<section className='gallery-subpage'>
					<div className='gallery-subpage-container'>
						<div className='gallery-subpage-title-container'>
							<h1 className='gallery-subpage-title'>Galeria Prac</h1>
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
			</main>
		</>
	);
};

export default GallerySubpage;
