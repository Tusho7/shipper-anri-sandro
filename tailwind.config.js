/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./src/assets/images/home-page-background.jpg')"
      },
      borderRadius: {
        '18': '1.125rem'
      },
      boxShadow: {
        "custom": "0px 4px 8px rgba(0, 0, 0, 0.25)"  
      },
      textShadow: {
        "custom": "0px 4px 20px rgba(0, 0, 0, 0.20)"  
      }
    },
  },
  plugins: [],
}

