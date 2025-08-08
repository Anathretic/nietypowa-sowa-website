import { useState } from 'react';
import { useCarouselOptions } from '../../hooks/useCarousel/useCarouselOptions';
import { useCarouselTouch } from '../../hooks/useCarousel/useCarouselTouch';
import { SliderControl } from './components/SliderControl';
import { Slide } from './components/Slide';

import './styles/styles.css';

export const OfferCarousel = ({ slides, formRef }) => {
	const [current, setCurrent] = useState(1);

	const { handleNextClick, handlePreviousClick, handleSlideClick, wrapperTransform } = useCarouselOptions({
		setCurrent,
		current,
		slides,
	});

	const sliderRef = useCarouselTouch({
		onSwipeLeft: handleNextClick,
		onSwipeRight: handlePreviousClick,
	});

	return (
		<div className='slider' ref={sliderRef}>
			<ul className='slider-wrapper' style={wrapperTransform}>
				{slides.map(slide => (
					<Slide key={slide.id} slide={slide} current={current} handleSlideClick={handleSlideClick} formRef={formRef} />
				))}
			</ul>
			<div className='slider-controls-wrapper'>
				<div className='slider-controls'>
					<SliderControl type='previous' title='Poprzedni slajd' handleClick={handlePreviousClick} />
					<SliderControl type='next' title='Następny slajd' handleClick={handleNextClick} />
				</div>
			</div>
		</div>
	);
};
