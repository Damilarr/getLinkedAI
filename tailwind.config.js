/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      clashDisplay: ["clash_display"],
      tommy: ["tommy"],
      unica: ["Unica One", "cursive"],
    },
    extend: {
      colors: {
        mainBg: "#150E28",
        pinkk: "#D434FE",
        borderColor: "#FFFFFF2E",
        purplee: "#A866FD",
        deepPink: "#FF26B9",
      },
    },
  },
  plugins: [],
};
