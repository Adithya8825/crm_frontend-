/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}

=======
  darkMode: 'class', // ✅ Important
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
}
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
