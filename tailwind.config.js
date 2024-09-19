/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      // 'sm': '576px',
      // => @media (min-width: 576px) { ... }
      md: "752px",
      mmd: "1020px",
      // pmd:"870px",
      pmd:"900px",
      sm:"680px"
      // => @media (min-width: 960px) { ... }

      // 'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
