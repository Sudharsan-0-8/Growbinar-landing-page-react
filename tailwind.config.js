/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gbviolet: '#7A61FF',
        gbblue: '#008CFF',
      }
    },
  },
  plugins: [],
}
