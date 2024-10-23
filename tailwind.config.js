/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // add the custom font.
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
