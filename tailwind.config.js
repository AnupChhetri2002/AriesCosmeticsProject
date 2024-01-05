
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Poppins']
        ,
        'logo2': "AnandaBlack",
        'logo3': "MyFont",
        'boldFont': "BoldFont",
        
      },
      keyframes: {
        waveUp: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(50px)  scale(.7)' },
          '100%': { transform: 'translateY(0px)' },
        },
        waveDown: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'wavingU': 'waveUp 2s infinite',
        'wavingD': 'waveDown 2s infinite',
      },
    },
  },
  
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
