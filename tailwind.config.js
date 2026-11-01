/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0d1017',
        paper: '#fbfbf9',
        accent: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
      },
      maxWidth: {
        content: '1080px',
      },
    },
  },
  plugins: [],
};
