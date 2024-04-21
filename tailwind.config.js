/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      colors: {
        mainOrange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightgrayishBlue: "hsl(223, 64%, 98%)",
        mainWhite: "hsl(0, 0%, 100%)",
        BlackWithOpacity: "hsl(0, 0%, 0%)",
      },
      screens: {
        btw1: "530px",
        smed: "320px",
      },
    },
  },
  plugins: [],
};
