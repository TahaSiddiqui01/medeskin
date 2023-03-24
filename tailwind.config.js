/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        russo: ["Russo One", "sans - serif"],
      },
      colors: {
        primary: "#0064AA",
        primarylight: "#25BCEC",
        primarydark: "#022B4A",
        lightgray: "#F2F6FF",
      },
    },
    screens: {
      xs: "350px",
      sm: "480px",
      tablet: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1450px",
      xxl: "1700px",
      '4xl': "2000px",
    },
    container: {
      center: true,
      screens: {
        mobile: "600px",
        xl: "1350px",
        xxl: "1600px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
