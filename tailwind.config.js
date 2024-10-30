/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        black: {
          1: '#1F1F1F',
          2:"#545454",
        },
       gray: {
          1:'#E5EDF0',
          2: "#EAF5F5",
        },
         green:{
          1:"#206F6A",
          2:"#2179A1",
         }
      },
      boxShadow: {
        userboxshadow: '2px 3px 30px 0px #BACCD429',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}