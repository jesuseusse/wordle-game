/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    colors: {
      primary: '#6AAA64',
      'primary-hover': '#6AAA64',
      secondary: '#CEB02C',
      gray: '#939B9F',
      gray2: '#56575E',
      graylight: '#D3D6DA',
      bgGray1: '#F3F3F3',
      bgGray2: '#D3D6DA',
      letterTouched: '#818181',
      white: {
        DEFAULT: '#FFFFFF',
        100: '#F3F3F3'
      },
      backgroundCard: '#DADCE04D',
      dark: {
        backgroundBody: '#262B3C',
        backgroundCard: 'rgba(218, 220, 224, 0.03)',
        bgGray2: '#565F7E',
        letterTouched: '#818181',
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

