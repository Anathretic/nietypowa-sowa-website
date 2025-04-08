import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

export const Slide = ({ slide, current, handleSlideClick }) => {
	const { id, main_title } = slide;
	const slideRef = useRef(null);

	const handleMouseMove = e => {
		const el = slideRef.current;
		const r = el?.getBoundingClientRect();
		if (r) {
			el?.style.setProperty('--x', (e.clientX - (r.left + Math.floor(r.width / 2))).toString());
			el?.style.setProperty('--y', (e.clientY - (r.top + Math.floor(r.height / 2))).toString());
		}
	};

	const handleMouseLeave = () => {
		if (slideRef.current) {
			slideRef.current.style.setProperty('--x', '0');
			slideRef.current.style.setProperty('--y', '0');
		}
	};

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
				<HashLink to='/#kontakt' className='slide-action btn link-btn'>
					Zamawiam
				</HashLink>
			</article>
		</li>
	);
};
