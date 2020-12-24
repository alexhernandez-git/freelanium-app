const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
      animation: {
        "animate-spin": "spin 1s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
