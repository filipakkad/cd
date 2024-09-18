import Typography from '@tailwindcss/typography';
import { Config } from 'tailwindcss';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat']
      }
    },
  },
  plugins: [
    Typography
  ],
} satisfies Config;

