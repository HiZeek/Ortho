/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-rgba": "rgba(175, 175, 175, 0.15)",
        "yellow-ortho": "#FFDE59",
        "faint-black": "rgba(23, 22, 26, 0.5)",
        "light-black": "rgba(0, 0, 0, 0.5)",
      },
      screens: {
        phone: "250px",
        // => @media (min-width: 250px) { ... }

        tablet: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
            transition: "opacity 300ms ease-in-out, top 1000ms ease-in-out, transform 1000ms ease-in-out",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
            transition: "transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19)",
          },
        },
        "dropdown": {
          "0%": {
            transform: "rotate(0)",
            transition: "all 0.8s",
          },
          "100%": {
            transform: "rotate(90deg)",
            transition: "all 0.8s",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in",
        "dropdown": "dropdown 0.5s"
      },
    },
  },
  plugins: [],
};
