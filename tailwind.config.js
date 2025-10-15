/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        golden: "#c89b3c", // yellowish gold tone
        yellow: "#fabe17",
        white: "#fefefe",
        graylight: "#f4f4f4",
      },
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
        secondary: ["'Shadow Script'", "cursive"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #fabe17 0%, #c89b3c 100%)",
      },
    },
  },
  plugins: [],
};
