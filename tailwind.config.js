/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        uber: "url('/src/assets/bguber.png')",
        city: "url('/src/assets/bgcity.png')",
      },
    },
  },
  plugins: [],
};
