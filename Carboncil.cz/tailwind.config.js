/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          carboncil: ['Inter', 'sans-serif'],
          jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  