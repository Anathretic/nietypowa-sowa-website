import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useSlideOptions } from '../../../hooks/useSlideOptions';

export const Slide = ({ slide, current, handleSlideClick }) => {
	const { id, main_title } = slide;
	const slideRef = useRef(null);

	const { handleMouseMove, handleMouseLeave } = useSlideOptions({ slideRef });

	let classNames = 'slide';

	if (current === id) classNames += ' slide--current';
	else if (current - 1 === id) classNames += ' slide--previous';
	else if (current + 1 === id) classNames += ' slide--next';

	return (
		<li
			ref={slideRef}
			className={classNames}
			onClick={() => handleSlideClick(id)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}>
			<div className='slide-image-wrapper'>
				<div className={`slide-image slide-image--${id}`} />
			</div>
			<article className='slide-content'>
				<h3 className='slide-headline'>{main_title}</h3>
				<HashLink smooth to='/#kontakt' className='slide-action btn link-btn'>
					Zamawiam
				</HashLink>
			</article>
		</li>
	);
};
