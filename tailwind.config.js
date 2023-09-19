/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./docusaurus.config.js"],
  theme: {
    extend: {
      colors: {
        fontSize: {
          "5xl": "2.5rem",
        },
        brand: {
          900: "#332c05",
          850: "#4d4107",
          800: "#66570a",
          700: "#b29911",
          600: "#f0cd14",
          500: "#ffda18",
          400: "#ffe146",
          300: "#ffe974",
          200: "#fff0a3",
          150: "#fff4ba",
          100: "#fff8d1",
          50: "#fffbe8",
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
        blue: {
          950: "#0c192b",
          900: "#14253D",
        },
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "system-ui"],
    },
    screens: {
      "xs": { max: "576px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
