/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'menu': '100px &fr 100px',
      },
      backgroundImage: {
        'stylish-mesh': "url('../ressources/stylish-mesh-bg.jpg')",
      },
    },
  },
  plugins: [],
}
