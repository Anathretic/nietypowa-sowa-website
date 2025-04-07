import { memo } from 'react';
import { OfferCarousel } from '../../components/OfferCarousel/OfferCarousel';
import { offerCarouselConfig } from '../../config/offerCarouselConfig/offerCarouselConfig';

import './styles/styles.css';

const Offer = () => {
	const OfferCarouselMemoized = memo(OfferCarousel);

	return (
		<section id='oferta' className='offer'>
			<div className='offer-container'>
				<div className='offer-wrapper'>
					<h2 className='offer-title'>Oferta</h2>
					<OfferCarouselMemoized slides={offerCarouselConfig} />
				</div>
			</div>
			<div className='offer-special-block offer-special-block--left' />
			<div className='offer-special-block offer-special-block--right' />
		</section>
	);
};

export default Offer;
