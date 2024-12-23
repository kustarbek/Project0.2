/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-bg": "slide-bg 2.5s ease-in-out", // Добавление анимации для фона
      },
      keyframes: {
        "slide-bg": {
          "0%": { "background-size": "120%" }, // Начальный размер фона
          "100%": { "background-size": "100%" }, // Конечный размер фона
        },
      },
    },
  },
  plugins: [],
}
