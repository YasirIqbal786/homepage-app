/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swiper/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      animation: {
        'progress-bar-stripes': 'stripe 1s linear infinite',
        spin: 'spin 8s linear infinite',
      },
      keyframes: {
        stripe: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1rem 0' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
