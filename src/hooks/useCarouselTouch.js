import { useRef, useEffect } from 'react';

export const useCarouselTouch = ({ onSwipeLeft, onSwipeRight }) => {
	const ref = useRef(null);
	const touchStartX = useRef(0);
	const touchStartY = useRef(0);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const minSwipeDistance = 50;

		const handleTouchStart = e => {
			touchStartX.current = e.touches[0].clientX;
			touchStartY.current = e.touches[0].clientY;
		};

		const handleTouchEnd = e => {
			const touchEndX = e.changedTouches[0].clientX;
			const touchEndY = e.changedTouches[0].clientY;

			const deltaX = touchStartX.current - touchEndX;
			const deltaY = touchStartY.current - touchEndY;

			if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
				if (deltaX > 0) onSwipeLeft();
				else onSwipeRight();
			}
		};

		element.addEventListener('touchstart', handleTouchStart);
		element.addEventListener('touchend', handleTouchEnd);

		return () => {
			element.removeEventListener('touchstart', handleTouchStart);
			element.removeEventListener('touchend', handleTouchEnd);
		};
	}, [onSwipeLeft, onSwipeRight]);

	return ref;
};
