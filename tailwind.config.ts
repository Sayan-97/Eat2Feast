import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'customTextBlack': '#071629',
        'customYellowColor': '#FFCD51'
      },
      // Gradient Color
      backgroundImage: {
        'custom-gradient': 'linear-gradient(95deg, #FFC700 0.79%, #FF7A00 101%)',
      },
    },
  },
  plugins: [],
}
export default config
