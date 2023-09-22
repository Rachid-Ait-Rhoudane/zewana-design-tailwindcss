/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/js/*.js"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce_slow 3s infinite",
      },
      keyframes: {
        bounce_slow: {
          "0%, 100%": {
            "transform": "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%" : {
            "transform": "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
      }
    },
  },
  plugins: [],
}

