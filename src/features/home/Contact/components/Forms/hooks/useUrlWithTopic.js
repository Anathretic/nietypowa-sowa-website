import { useLocation } from 'react-router-dom';

export const useUrlWithTopic = () => {
	const location = useLocation();

	const goToValidHashWithTopic = ({ isScreenLarge }) => {
		const topic = new URLSearchParams(location.search).get('topic');

		if ((location.hash === '#formularz' || location.hash === '#kontakt') && topic) {
			requestAnimationFrame(() => {
				const el = document.querySelector('#formularz');

				if (el) {
					el.scrollIntoView({ behavior: 'smooth' });
					const params = new URLSearchParams();
					params.set('topic', topic);

					const fullUrl = `${location.pathname}?${params.toString()}${isScreenLarge ? '#kontakt' : '#formularz'}`;

					window.history.replaceState(null, '', fullUrl);
				}
			});
		}
	};

	return { goToValidHashWithTopic };
};
