export const useUrlWithTopic = () => {
	const goToValidHashWithTopic = ({ selectedTopic, isScreenLarge }) => {
		if (!selectedTopic) return;

		requestAnimationFrame(() => {
			const el = document.querySelector('#formularz');

			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });

				const params = new URLSearchParams();
				params.set('topic', selectedTopic);

				const fullUrl = `${window.location.pathname}?${params.toString()}${isScreenLarge ? '#kontakt' : '#formularz'}`;
				window.history.replaceState(null, '', fullUrl);
			}
		});
	};

	return { goToValidHashWithTopic };
};
