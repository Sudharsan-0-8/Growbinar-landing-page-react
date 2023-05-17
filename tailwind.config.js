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
      width:{
        '400':'45%',
        '200':'75%',
      },
      height:{
        '400':'60%',
        '100':'50%',

      },
      right:{
        '4':'75%',
      },
      left:{
        '4':'75%',
      },
      colors: {
        gbviolet: '#7A61FF',
        gbblue: '#008CFF',
        gbgreen: '#0091A040',
        gbgrey:'#808080',
        gblightblue: '#0091D7',
        gborange:'#f97316',
        lightorange:'#FF8E6BCC',
        gbpink:'#FF589B',
        lightgrey:'#F6F6F6',
        greyheader:'#464646',
      }
    },
  },
  plugins: [],
}
