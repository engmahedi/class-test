/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      
      'xsm':'350px',
      'sm':'576px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
    extend: {
      fontFamily: {
        inter:["'Inter', sans-serif"],
        poppin:["'Poppins', sans-serif"],
        lobster:["'Lobster', cursive"],
        manrope:["'Manrope', sans-serif"],
        
      }
    },
    colors: {
      'titleText':'#121212',
      'praText':'#707070',
      'haderbg':'#FAFAFA',
      'btnbg':'#FF5959',
      'btntext':'#FFFFFF',
      'lightPink':'rgba(255, 89, 89, 0.10)',
      'lightGreen':'rgba(79, 157, 166, 0.10)',
      'lightYellow':'#FFF4D6',
      'email':'#D9D9D9',
      'footerbg':'#0B0D17',
      'bordercolor':'#DADADA',
      'fsub':'#D9DBE1',
      
    },
  },
  plugins: [],
}

