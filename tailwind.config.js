/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/daisyui/dist/**/*.js',
		'node_modules/react-daisyui/dist/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				txtclr: '#8ca5c3',
				bgclr: '#110f2c',
				sectionclr: '#30465c',
				ashen: '#EAECEC',
				cardwhite: '#FEFFFE',
				purplebg: '#5803EC',
			},
		},
	},
	daisyui: {
		themes: ['light'],
	},
	plugins: [require('daisyui')],
};
