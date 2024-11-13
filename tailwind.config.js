/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customTeal: "#00BCA8", // Add your custom color here
      },
    },
  },
  plugins: [],
};
