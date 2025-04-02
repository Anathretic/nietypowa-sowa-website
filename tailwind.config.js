export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	mode: 'jit',
	theme: {
		extend: {
			screens: {
				rrsm: '315px',
				rsm: '350px',
				mf: '990px',
				ws: '2320px',
			},
			keyframes: {},
			animation: {},
		},
	},
	variants: {
		extend: {},
	},
};
