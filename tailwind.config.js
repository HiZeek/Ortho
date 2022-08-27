/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-rgba': 'rgba(175, 175, 175, 0.15)',
        'yellow-ortho': '#FFDE59',
        'faint-black': 'rgba(23, 22, 26, 0.5)',
        'light-black': 'rgba(0, 0, 0, 0.5)',
      },
      screens: {
        'phone': '400px',
        // => @media (min-width: 400px) { ... }

        'tablet': '768px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
