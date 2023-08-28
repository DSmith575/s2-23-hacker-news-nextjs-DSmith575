/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#64ff00',
        fontColBlack: '#333',
        radish: '#c75c38',
        darkPinkColor: '#bf4f74',
        greenBlueColor: '#42b0bd',
        lightBlueColor: '#1ecbe1',
        greenBlueCompliment: '#bd4f42',
        grimace: '#a660c5',
        cosmicLatte: '#F7F3E3',
        blush: '#E54F6D',
        burntOrange: '#E07A5F',
        PGray: '#666A86',
        oldRose: '#CD8987',
        teaGreen: '#D3EFBD',
        teaRose: '#DEBAC0',
        munsell: '#348AA7',
        biceBlue: '#006DAA',
        mint: '#36F1CD',
      },
      boxShadow: {
        '3xl': '-20px -20px 30px -15px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
};
