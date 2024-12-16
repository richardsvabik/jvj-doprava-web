/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		container: false,
	},
	// presets: [],
	safelist: [
		'h-32',
        'max-w-md',
        'max-w-lg',
        'max-w-xl',
        'max-w-2xl',
        'max-w-3xl',
        'max-w-4xl',
	],
	theme: {
		extend: {
			colors: {
				primary: {
                    100: '#ffffd3',
                    200: '#f0f4c3',
                    300: '#dcedc8',
                    400: '#c5e1a5',
					500: '#92be55',
                    600: '#7b9f4b',
				},
				secondary: {
					100: '#ebf5df',
					200: '#d4d4aa',
					300: '#bad4aa',
					400: '#95b390',
					500: '#728980',
					600: '#586666',
					700: '#34352f',
					800: '#2f2f27',
				},
				white: {
					DEFAULT: '#fff',
				},
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-20': '20% 20%',
				'pos-100': '100% 100%',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '2400px',
		},
		// spacing: {
		// 	0: '0',
		// 	1: '0.125rem',
		// 	2: '0.25rem',
		// 	3: '0.5rem',
		// 	4: '0.75rem',
		// 	5: '0.825rem',
		// 	6: '1rem',
		// 	7: '1.5rem',
		// 	8: '2.25rem',
		// 	9: '3rem',
		// 	10: '5rem',
		// },
		fontSize: {
			xs: '14px',
			sm: '15px',
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		// container: {
		// 	center: true,
		// 	padding: '1rem',
		// 	screens: {
		// 		sm: '540px',
		// 		md: '680px',
		// 		lg: '900px',
		// 		xl: '1240px', // 1160
		// 		'2xl': '1560px',
		// 		'3xl': '1760px',
		// 	},
		// },
	},
	plugins: [],
}
