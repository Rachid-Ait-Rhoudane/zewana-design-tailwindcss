/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/js/*.js"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce_slow 3s infinite",
        "heading-before":"heading_before 500ms linear both",
        "heading-after":"heading_after 500ms linear both",
        "articles-flesh": "flesh 1.5s infinite",
        "flash": "animation_flash 1s linear"
      },
      borderWidth: {
        "tr": "500px"
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
        },
        heading_before: {
          "50%": {
            "left": "0",
            "border-radius": "0"
          },
          "100%": {
            "left": "0",
            "border-radius": "0",
            "height": "100%",
            "width": "50%"
          }
        },
        heading_after: {
          "50%": {
            "right": "0",
            "border-radius": "0"
          },
          "100%": {
            "right": "0",
            "border-radius": "0",
            "height": "100%",
            "width": "50%"
          }
        },
        flesh: {
          "0%, 100%":{
            "transform": "translateX(0)"
          },
          "50%": {
            "transform": "translateX(10px)"
          }
        },
        animation_flash: {
          "100%": {
            "width": "500%",
            "height": "500%"
          }
        }

      }
    },
  },
  plugins: [],
}

