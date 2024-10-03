/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
      },
      keyframes: {
        shoeMovement: {
          "0%, 50%": {
            transform: "rotate(-12deg)",
          },
          "50%, 100%": {
            transform: "rotate(0deg)",
          },
        },
        visible: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        shoeMovement: "shoeMovement 1.5s ease-in-out forwards",
        visible: "visible 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}

