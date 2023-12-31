/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/medical-bg.jpg')",
        'stats-bg': "url('/images/stats-bg.jpg')",
        'expertise-bg': "url('/images/expertise/expertise-bg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
