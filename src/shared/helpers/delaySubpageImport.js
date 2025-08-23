export const delaySubpageImport = (importFunc, delay) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(importFunc());
		}, delay);
	});
};
