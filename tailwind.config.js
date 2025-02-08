/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      // If you have a "themes" folder or anywhere else you store React components:
      "./src/themes/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        // Any tailwind theme customizations here
      },
    },
    plugins: [],
  };
  