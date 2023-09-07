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
        primary: {
          base: "#933EFF",
          hover: "#7732D0",
        },
        purple: {
          400: "#A965FF",
        },
        gray: {
          900: "#1B1D20",
          850: "#282B31",
          800: "#353A41",
          700: "#505661",
          600: "#6A7382",
          150: "#DADEE3",
          100: "#E7E9EC",
          50: "#F9F9F9",
        },
        brand: "#933EFF",
        brandMuted: "#AA4EE7",
        brandLight: "#AA67FF",
        dark1: "#0C192B",
        dark2: "#14253D",
        light1: "#E5E6E6",
        light2: "#F9F9F9",
        light3: "#FFFAFA",
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
