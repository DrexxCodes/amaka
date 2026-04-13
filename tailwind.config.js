/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        green: {
          brand: '#22C55E',
          dark: '#16A34A',
          light: '#DCFCE7',
        },
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #000',
        'brutal-lg': '6px 6px 0px 0px #000',
        'brutal-xl': '8px 8px 0px 0px #000',
        'brutal-green': '4px 4px 0px 0px #22C55E',
        'brutal-green-lg': '6px 6px 0px 0px #22C55E',
      },
    },
  },
  plugins: [],
}
