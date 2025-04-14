import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTopUtils';
import './styles/styles.css';

import NotFoundImg from '../../images/notfound-subpage/notfound-img.svg';

const PageNotFound = () => {
	return (
		<main>
			<section className='notfound'>
				<div className='notfound-container'>
					<img
						src={NotFoundImg}
						alt='Error-404 image by Storyset - https://storyset.com/web'
						className='notfound-img'
					/>
					<h1 className='notfound-credits'>Ups! Strony nie znaleziono..</h1>
					<Link to='/' className='notfound-btn' onClick={scrollToTop} aria-label='Powrót na stronę główną'>
						Powrót
					</Link>
				</div>
			</section>
		</main>
	);
};

export default PageNotFound;
