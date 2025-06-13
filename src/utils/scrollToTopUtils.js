export const scrollToTop = e => {
	if (e.ctrlKey) return;

	const body = document.querySelector('#root');

	setTimeout(() => {
		body.scrollIntoView();
	}, 50);
};
