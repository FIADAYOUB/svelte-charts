/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-base': '#4caf50',
        'primary-lighten5': '#dcffd6',
        'primary-lighten4': '#beffba',
        'primary-lighten3': '#a2ff9e',
        'primary-lighten2': '#85e783',
        'primary-lighten1': '#69cb69',
        'primary-darken1': '#2d9437',
        'primary-darken2': '#00791e',
        'primary-darken3': '#006000',
        'primary-darken4': '#004700',
        'secondary-base': '#293F54',
        'secondary-lighten2': '#668eb4',
        'secondary-lighten1': '#406283',
        'accent-base': '#e8e8e8',
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
        'paytone': ['Paytone One', 'sans-serif']
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
        '3xl': '0px 2px 10px 0px rgba(58, 53, 65, 0.1)',
        '4xl': '0 1px 3px 0 rgba(0, 0, 0, 0.2),0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        '5xl': '0 10px 15px -3px rgba(0, 0, 0, 0.2),0 4px 6px -2px rgba(0, 0, 0, 0.15)'
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill,minmax(250px,250px))',
      },
    }
  },
  plugins: [],
}

