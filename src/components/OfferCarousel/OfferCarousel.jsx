import { useState } from 'react';
import { useCarouselOptions } from '../../hooks/useCarouselOptions';
import { SliderControl } from './components/SliderControl';
import { Slide } from './components/Slide';

import './styles/styles.css';

export const OfferCarousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);

	const { handleNextClick, handlePreviousClick, handleSlideClick, wrapperTransform } = useCarouselOptions({
		setCurrent,
		current,
		slides,
	});

	return (
		<div className='slider'>
			<ul className='slider-wrapper' style={wrapperTransform}>
				{slides.map(slide => (
					<Slide key={slide.id} slide={slide} current={current} handleSlideClick={handleSlideClick} />
				))}
			</ul>
			<div className='slider-controls'>
				<SliderControl type='previous' title='Poprzedni slajd' handleClick={handlePreviousClick} />
				<SliderControl type='next' title='Następny slajd' handleClick={handleNextClick} />
			</div>
		</div>
	);
};
