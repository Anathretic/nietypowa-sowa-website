import { useContext, useRef } from 'react';
import { useSlideOptions } from '../../../hooks/useSlideOptions';
import { TopicSelectContext } from '../../../context/TopicSelectContext';
import { HashLink } from 'react-router-hash-link';

export const Slide = ({ slide, current, handleSlideClick }) => {
	const { id, main_title } = slide;
	const slideRef = useRef(null);

	const { handleMouseMove, handleMouseLeave } = useSlideOptions({ slideRef });
	const { setSelectedTopic } = useContext(TopicSelectContext);

	let classNames = 'slide';

	if (current === id) classNames += ' slide--current';
	else if (current - 1 === id) classNames += ' slide--previous';
	else if (current + 1 === id) classNames += ' slide--next';

	const handleSlideBtn = () => {
		setSelectedTopic(main_title);
	};

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
				<HashLink smooth to='/#formularz' className='slide-action btn link-btn' onClick={handleSlideBtn}>
					Zamawiam
				</HashLink>
			</article>
		</li>
	);
};
