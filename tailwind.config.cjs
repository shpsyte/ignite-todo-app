/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      black: "#000",
      white: "#fff",
      gray: {
        100: "#F2F2F2",
        200: "#D9D9D9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1A1A1A",
        700: "#0D0D0D",
      },
      danger: {
        100: "#E25858",
      },
      brand: {
        100: "#1E6F9F",
        200: "#4EA8DE",
        300: "#5E60CE",
        400: "#8284FA",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
