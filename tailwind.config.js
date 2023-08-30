/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docusaurus.config.js"],
  theme: {
    extend: {
      colors: {
        brand: "#923dfe",
      },
    },
  },
  plugins: [],
};
