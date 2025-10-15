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
        golden: "#ffcf00",
        yellow: "#ffde59",
        white: "#ffffff",
        graylight: "#f4f4f4",
      },
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
        secondary: ["'Shadows Into Light'", "cursive"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #ffde59 0%, #ffcf00 100%)",
      },
    },
  },
  plugins: [],
};
