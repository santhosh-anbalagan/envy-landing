import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'graduate': ['Graduate'],
      'caveat': ['Caveat']
    },
    extend: {
      colors: {
        'envy-green': '#063233'
      },
    },
    screens: {
      'xsm': { 'min': '180px', 'max': '440px' },
      'xl': { 'min': '1280px', 'max': '1949px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1950px' },
    }
  },
  plugins: [],
});

export default config;
