module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
