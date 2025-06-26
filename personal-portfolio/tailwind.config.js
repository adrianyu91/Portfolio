/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable toggling dark mode via a CSS class
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
