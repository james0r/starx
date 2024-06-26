const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
      center: true,
      screens: {
        sm: `640px`,
        md: `768px`,
        // lg: `1024px`,
        // xl: `1280px`,
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1480px) { ... }
    },
		extend: {
      colors: {
        'dark-beige': '#B9ADA1',
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        serif: ['Bitter Variable', ...defaultTheme.fontFamily.serif],
      },
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens')
  ],
}
