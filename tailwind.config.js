/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': '0px 3px 4px 0px rgba(0, 0, 0, 0.12);',
      },
      colors: {
        white: '#fff',
        'header-black': 'rgba(50, 50, 50, 1)',
      }
    },
  },
  plugins: [],
};