/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#b07943",
        },
        secondary: {
          100: "#1ac7ab",
        },
        grey: {
          100: "#e9e9e9",
          200: "#b2b2b2",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    require("tailwindcss-rtl"),
  ],
};
