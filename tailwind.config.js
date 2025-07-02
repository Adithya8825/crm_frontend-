/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enables dark mode with 'class' strategy
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      colors: {
        primary: '#2563EB', // Tailwind blue-600
        secondary: '#1E293B', // Tailwind slate-800
      },
    },
  },
  plugins: [], // ✅ Keep this even if empty for future usage
};
