/** @type {import('tailwindcss').Config} */
module.exports = {    
  content: [
      './public/index.html',
      './src/**/*.{html,js}',
    ],
    // ...
  theme: {
    extend: {
      colors: {
        primary: "hsl(257, 40%, 49%)",
        secondary: "hsl(300, 69%, 71%)",
      }
    },
    fontFamily: {
      poppins: 'Poppins',
      "open-sans": 'Open Sans',
    }
  },
  plugins: [],
}

