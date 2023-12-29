/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            transform: 'scale(0)',
          },
          "100%": {
            transform: 'scale(1)',
          },
        },
        Animation : {
          smooth : 'fadeIn 0.5s ease-in-out'
        }
      },
    },
  },
  plugins: [],
};
