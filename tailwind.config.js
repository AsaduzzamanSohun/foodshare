/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": '"Lato", sans-serif',
        "merriweather": '"Merriweather", serif'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('daisyui'),
],
}

