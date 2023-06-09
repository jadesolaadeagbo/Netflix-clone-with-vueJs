/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],

  theme: {
    extend: {
      colors:{
        customRed:'rgb(229, 9, 20)',
        customGray:'rgb(45,45,45)',
      },
    },
  },
  plugins: [],
}

