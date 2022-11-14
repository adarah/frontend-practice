/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: '"Inter"'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.jpeg')"
      },
      colors: {
        'footer-link-hover': '#228EC6',
        'content-heading': '#212128',
        'footer-bg': '#15141A',
        'content-bg-alt': '#F5F8FD',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
