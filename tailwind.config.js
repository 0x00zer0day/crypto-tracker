/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue' : '#2D4263',
        'custom-light-yellow' : '#ECDBBA',
        'custom-orange': '#C84B31',
      },
    },
  },
  plugins: [],
}
