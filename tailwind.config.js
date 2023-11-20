/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-base': '#5465ff',
        'primary-lighten5': '#f5ebff',
        'primary-lighten4': '#d6ceff',
        'primary-lighten3': '#b6b3ff',
        'primary-lighten2': '#9798ff',
        'primary-lighten1': '#777eff',
        'primary-darken1': '#284de2',
        'primary-darken2': '#0036c5',
        'primary-darken3': '#0022a9',
        'primary-darken4': '#000f8e',
        'secondary-base': '#00063d',
        'secondary-lighten5': '#8379bd',
        'secondary-lighten4': '#6860a1',
        'secondary-lighten3': '#4f4987',
        'secondary-lighten2': '#35326d',
        'secondary-lighten1': '#1b1d55',
        'secondary-darken1': '#000028',
        'secondary-darken2': '#000016',
        'secondary-darken3': '#000000',
        'secondary-darken4': '#000000',
        'accent-base': '#80deea',
        'accent-lighten5': '#ffffff',
        'accent-lighten4': '#f5ffff',
        'accent-lighten3': '#d7ffff',
        'accent-lighten2': '#baffff',
        'accent-lighten1': '#9dfbff',
        'accent-darken1': '#63c2ce',
        'accent-darken2': '#45a7b2',
        'accent-darken3': '#218c98',
        'accent-darken4': '#00727e',
        'accent-dark-base': '#423b56',
        'accent-dark-lighten5': '#c2b8d9',
        'accent-dark-lighten4': '#a79dbd',
        'accent-dark-lighten3': '#8c83a2',
        'accent-dark-lighten2': '#726a88',
        'accent-dark-lighten1': '#5a526e',
        'accent-dark-darken1': '#2b253f',
        'accent-dark-darken2': '#161129',
        'accent-dark-darken3': '#000015',
        'accent-dark-darken4': '#000000',
      },
      fontFamily: {
        'red-hat-text': ['Red Hat Text', 'sans-serif'],
      },
      fontSize: {
        'f1':' 3rem',
        'f2': '2.25rem',
        'f3': '1.5rem',
        'f4': '1.25rem',
        'f5':' 1rem',
        'f6': '.875rem',
        'f7': '.75rem',
        'f8': '.5rem',
      },
      boxShadow:{
        '3xl': '0px 2px 10px 0px rgba(58, 53, 65, 0.1)'
      }
    }
  },
  plugins: [],
}

