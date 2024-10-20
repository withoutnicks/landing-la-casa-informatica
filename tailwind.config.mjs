/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js'],
	theme: {
		extend: {
			colors: {
				'pattens-blue': {
					50: '#eff8ff',
					100: '#ddf0ff',
					200: '#b8e4ff',
					300: '#79ceff',
					400: '#32b7fe',
					500: '#079ef0',
					600: '#007ece',
					700: '#0064a6',
					800: '#035489',
					900: '#094771',
					950: '#062c4b',
				},
			},
		},
	},
	darkMode: 'media',
	plugins: [require('preline/plugin'), require('tailwindcss-animated')],
};
