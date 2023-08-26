/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./src/pages/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#99DDFF',
          200: '#8AC7E6',
          300: '#73A6BF',
          400: '#4D6E80',
          500: '#263740',
          'purple': '#B599F2',
          'dark': '#101740',
          'green': '#5ABF61',
          'orange': '#F27405',
          'gray': '#F4F7FC',
          'pink': '#93167a',
          'lightpink': '#ffc0f2'
        },
        'c-lavender': {
          1: '#efe8fb',
          2: '#C4BDF2',
          3: '#D2C4FC'
        },
        'c-blue': {
          1: '#9DC5FC',
          2: '#A0C4F2',
          3: '#7382D9',
          4: '#535bf2'
        }
      },
      backgroundImage: {
        'waves': "url('./src/assets/wave-bg2.png')",
        'waves-vertical': "url('./src/assets/waves-vertical.png')"
      }
    }
  },
  plugins: [],
}

