/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      clashDisplay: ["clash_display"],
    },
    extend: {
      colors: {
        mainBg: "#150E28",
        pinkk: "#D434FE",
      },
    },
  },
  plugins: [],
};
