/** @type {import('tailwindcss').Config} */
const formKitTailwind = require('@formkit/themes/tailwindcss');
export default {
  content: [
    './tailwind-theme.js',
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}