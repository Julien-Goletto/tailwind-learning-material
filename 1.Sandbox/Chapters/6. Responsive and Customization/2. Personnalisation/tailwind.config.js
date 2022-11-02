/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    // colors: {
    //   'orange': '#ffa500',
    // },
    extend: {
      colors: {
        'orange': '#ffa500',
        'bleu_nuit':{
          700: '#0077b6',
          800: '#023e8a',
          900: '#03045e',
        }
      },
      fontSize: {
        'custom': '70px',
        'clamp-sm': 'clamp(20px, 3vw, 50px)',
      },
      fontFamily: {
        'open-sans': 'open sans',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
