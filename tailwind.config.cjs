/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        blue: "#3671E9",
        lightGrayText: "#E0E0E0",
        darkGrayText: "#828282",
        darkNavyBlue: "#0D0D2B",
      },
      maxWidth: {
        128: "1180px",
      },
    },
  },
  plugins: [],
};
