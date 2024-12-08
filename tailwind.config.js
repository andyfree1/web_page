/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3D59',
          light: '#576CBC',
          dark: '#0B2447'
        },
        accent: {
          DEFAULT: '#A5D7E8',
          light: '#E5E5E5'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s infinite'
      }
    },
  },
  plugins: [],
};