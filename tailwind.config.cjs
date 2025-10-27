/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {  
      colors: {
  navy: "#0C0D23",
  cream: "#F0EBE5",
  accent: "#FF5EBA",
},
fontFamily: {
  poppins: ["Poppins", "sans-serif"],
},
boxShadow: {
  glow: "0 0 30px rgba(255,94,186,0.3)",
},

    },
  },
  plugins: [],
};
