/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-base': '#ff284f'
      },
      fontFamily: {
        'red-hat-text': ['Red Hat Text', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

