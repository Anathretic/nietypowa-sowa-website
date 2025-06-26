export const useSlideOptions = ({ slideRef }) => {
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

	const handleSlideBtn = () => {
		document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
	};

	return { handleMouseMove, handleMouseLeave, handleSlideBtn };
};
