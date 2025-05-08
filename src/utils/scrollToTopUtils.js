export const scrollToTop = () => {
	const body = document.querySelector('#root');

	setTimeout(() => {
		body.scrollIntoView();
	}, 50);
};
