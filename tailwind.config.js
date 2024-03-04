/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'avatar': "url('/src/assets/avatar.png')",
      }
    },
  },
  plugins: [],
}

