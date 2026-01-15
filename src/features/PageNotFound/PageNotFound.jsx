import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { scrollToTop } from '../../shared/utils/scrollToTopUtils';

import './styles/styles.css';

import NotFoundImg from '../../images/page-not-found/page-not-found-img.svg';

const PageNotFound = () => {
	const currentUrl = window.location.href;

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Strona nie istnieje | Nietypowa Sowa</title>
				<meta
					name='description'
					content='Ups! Wygląda na to, że ta strona nie istnieje. Sprawdź adres lub wróć na stronę główną.'
				/>
				<meta property='og:title' content='Strona nie istnieje | Nietypowa Sowa' />
				<meta property='og:description' content='Nie znaleziono strony. Przekieruj się do mojej oferty.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={currentUrl} />
				<meta name='robots' content='noindex, follow' />
			</Helmet>
			<main>
				<section className='notfound'>
					<div className='notfound-container'>
						<img
							src={NotFoundImg}
							alt='Obrazek przedstawiający błąd 404 dostarczony przez - https://storyset.com/web'
							className='notfound-img'
						/>
						<h1 className='notfound-credits'>Ups! Strony nie znaleziono..</h1>
						<Link to='/' className='notfound-btn' onClick={scrollToTop} aria-label='Powrót na stronę główną'>
							Powrót
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default PageNotFound;
