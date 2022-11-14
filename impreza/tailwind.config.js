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
      colors: {
        'footer-blue': '#228EC6'
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
