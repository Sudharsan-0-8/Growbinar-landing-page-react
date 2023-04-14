/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        gbviolet: '#7A61FF',
        gbblue: '#008CFF',
        gbgreen: '#0091A040'
      }
    },
  },
  plugins: [],
}
