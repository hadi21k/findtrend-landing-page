/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#A8FF35",
        secondary: "#87D322",
        hover: "#8CC83A",
        "black-2": "#2B2B2B",
        gray: "#8B8B8B",
        "gray-2": "#ADADAD",
        "gray-3": "#F5F5F5",
        "gray-4": "#F1F1F1",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        maybe: ["Maybe But Not Always", "sans-serif"],
      },
    },
  },
  plugins: [],
};
