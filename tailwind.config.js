/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#616163",
        customBlue: "#100A42",
        customWhite: "#FFFFFF",
        customeBlack: "#000000",
      },
      fontFamily: {
        'custom': ['CustomFont', 'poppins'], 
      },
      fontSize: {
        'xs': '0.75rem', 
        'sm': '0.875rem', 
        'base': '1rem',    
        'lg': '1.125rem',  
        'xl': '1.25rem',   
        '2xl': '1.5rem',   
        '3xl': '1.875rem', 
        '4xl': '2.25rem',  
        '5xl': '3rem',     
      },
      screens: {
        'xxs': '360px',  
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px',  
        '2xl': '1536px', 
        'xxl': '1440px', 
      },
    },
  },
  plugins: [],
}

