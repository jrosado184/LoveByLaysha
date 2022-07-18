const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      supersm: '200px',
      sm: '390px',
      xr: '414px',
      sm2: '500px',
      md: '700px',
      lg: '1216px',
      desktop: '1429px',
      monitor: '1980px',
    },
    extend: {
      fontFamily: {
        raboto: 'Concert One',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
