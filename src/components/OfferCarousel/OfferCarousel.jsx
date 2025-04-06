import { useState } from 'react';
import { SliderControl } from './components/SliderControl';
import { Slide } from './components/Slide';

import './styles/styles.css';

export const OfferCarousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);

	const handlePreviousClick = () => {
		const previous = current - 1;
		setCurrent(previous < 0 ? slides.length - 1 : previous);
	};

	const handleNextClick = () => {
		const next = current + 1;
		setCurrent(next === slides.length ? 0 : next);
	};

	const handleSlideClick = id => {
		if (current !== id) {
			setCurrent(id);
		}
	};

	const wrapperTransform = {
		transform: `translateX(-${(current * 100) / slides.length}%)`,
	};

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
