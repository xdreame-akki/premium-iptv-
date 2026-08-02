
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
        background: '#0D1117',
        card: '#161B22',
        'card-border': '#30363D',
        primary: '#58A6FF',
        'primary-hover': '#79C0FF',
        'text-primary': '#C9D1D9',
        'text-secondary': '#8B949E',
      },
    },
  },
  plugins: [],
}
export default config
