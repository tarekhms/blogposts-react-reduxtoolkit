/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      flex: {
        '0-0': '0 0 auto',
        '1-0': '1 0 auto',
      }
    },
  },
  plugins: [],
}