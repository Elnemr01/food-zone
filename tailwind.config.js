/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        btnColor : "#ff4343",
        backColor :"#323334",
      }
    },
  },
  plugins: [],
}

