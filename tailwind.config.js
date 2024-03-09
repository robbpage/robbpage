/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
        colors: {
            'green-dark': '#34e29c',
            'green-light': '#96f1cd'
        },
        fontFamily: {
            oxanium: ['Oxanium', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif']
        }
    },
  },
  plugins: [],
}

