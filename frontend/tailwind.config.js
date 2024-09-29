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
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(0, 1fr))',
        'max4': 'repeat(4, auto)',
        'footer': 'max-content auto'
      },
      gridTemplateRows: {
        'auto': 'repeat(auto-fill, minmax(20px, 1fr))',
      },
      backgroundImage: {
        'globe': "url('/src/assets/images/icons.png')"
      },
      backgroundPosition: {
        'p': "0 -1860px"
      }
    },
  },
  plugins: [],
}