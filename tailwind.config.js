/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      titleFont: ["Nunito", "sans-serif"],
      bodyFont: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
