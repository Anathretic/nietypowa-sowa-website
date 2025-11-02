export const useUrlWithTopic = () => {
	const goToValidHashWithTopic = ({ isScreenLarge }) => {
		const topic = new URLSearchParams(window.location.search).get('topic');
		const pathname = window.location.pathname;

		if (topic) {
			requestAnimationFrame(() => {
				const el = document.querySelector('#formularz');

				if (el) {
					el.scrollIntoView({ behavior: 'smooth' });
					const params = new URLSearchParams();
					params.set('topic', topic);

					const fullUrl = `${pathname}?${params.toString()}${isScreenLarge ? '#kontakt' : '#formularz'}`;

					window.history.replaceState(null, '', fullUrl);
				}
			});
		}
	};

	return { goToValidHashWithTopic };
};
