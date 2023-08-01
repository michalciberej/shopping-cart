/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#000000',
        'background': '#FFFFFF',
        'primary': '#FFD814',
        'secondary': '#e3e6e6',
        'accent': '#232f3e',
        'textD': '#FFFFFF',
        'backgroundD': '#000000',
        'primaryD': '#FFD814',
        'secondaryD': '#171a1a',
        'accentD': '#5a79a0',
      }
    },
  },
  plugins: [],
}

