/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        'primary-color':'#f95959',
        'secondary-color':'#fff',
        'third-color':'#393E46',
        'card-color':"#455d7a",
        'card-secondary-color':'#00ADB5',
        'light-card-color':'#FF865E',
        'light-third-color':'#FEF9EF',
        'light-card-secondary-color':'#FEE440'

      }
    },
  },
  plugins: [],
}
