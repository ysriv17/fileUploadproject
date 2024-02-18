/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background2.jpg')",
        "main-pattern": "url('/src/assets/background1.jpg')",
        "hero": "url('/src/assets/background3.jpg')",
        "gradient":"linear-gradient(black , #3e3e3e)"
      },
      backgroundPosition:{
        "position-0.23": "0% 20.5%"
      }
    },
  },
  plugins: [],
}

