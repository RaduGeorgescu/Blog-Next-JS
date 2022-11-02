/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blackCustom: "#040F0F",
        main1: "#7EB09B",
        main2: "#519E80",
        accent1: "#eee5e9",
        accent2: "#ecbeb4",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
