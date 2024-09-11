/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["poppins", "san-serif"],
    },
    extend: {
      colors: {
        primary: "#7D3AFF",
        secondary: "#1A0249",
        background: "#0B031B",
        badge: "#7651C1",
        inputColor: "#231C32",
      },
    },
  },
  plugins: [],
};

