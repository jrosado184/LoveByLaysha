const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      supersm: "200px",
      sm: "390px",
      xr: "414px",
      sm2: "480px",
      md: "700px",
      lg: "900px",
      desktop: "1429px",
      monitor: "1980px",
    },
    extend: {
      fontFamily: {
        raboto: "Concert One",
      },
    },
  },
  plugins: [],
};
