/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docusaurus.config.js"],
  theme: {
    extend: {
      colors: {
        fontSize: {
          "5xl": "2.5rem",
        },
        purple: {
          400: "#A965FF",
          500: "#933EFF",
          600: "#7732D0",
        },
        gray: {
          950: "#0D0E10",
          900: "#1B1D20",
          850: "#282B31",
          800: "#353A41",
          700: "#505661",
          600: "#6A7382",
          500: "#8590A2",
          400: "#9DA6B5",
          300: "#B6BCC7",
          200: "#CED3DA",
          150: "#DADEE3",
          100: "#E7E9EC",
          50: "#F9F9F9",
        },
        brandLight: "#AA67FF",
        dark1: "#0C192B",
        dark2: "#14253D",
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
