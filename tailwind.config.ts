import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'graduate':['Graduate'],
      'caveat':['Caveat']
    },
    extend: {
      colors: {
        'envy-green': '#063233',
      },
    }
  },
  plugins: [],
});

export default config;
