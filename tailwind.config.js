/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#bae1fd',
          300: '#7cc8fc',
          400: '#36acf9',
          500: '#0c90ea',
          600: '#0073c8',
          700: '#005da1',
          800: '#024e85',
          900: '#1a365d',
          950: '#0f1c2e',
        },
        secondary: {
          50: '#fdf8ec',
          100: '#faecc9',
          200: '#f4d88e',
          300: '#eec453',
          400: '#e6b84d',
          500: '#c99b2e',
          600: '#a67c24',
          700: '#8a5f1f',
          800: '#724c1f',
          900: '#603f1e',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#d4473c',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        'heading': ['Georgia', 'Times New Roman', 'serif'],
        'body': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

