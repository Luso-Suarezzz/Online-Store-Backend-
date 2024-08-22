/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        azul: "#0F2940",
        marron: "#733703",
        "marron-calro": "#A6550F",
        blanco: "#F2F2F2",
        gris: "#E0E0E0",
        negro: "#202020"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        hanuman: ["Hanuman", "serif"]
      },
      backgroundImage: {
        'fondo': "url('src/assets/Fondo.jpeg')",
      }
    },
  },
  plugins: [],
}

