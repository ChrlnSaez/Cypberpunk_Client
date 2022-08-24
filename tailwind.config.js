/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'serif'],
    },
    extend: {},
      colors: {
      CoolGray200: '#e5e7eb',
      CoolGray100: '#f3f4f6',
      Red500: '#ef4444',
      ErrorHoverRed400: '#f87171',
      SuccessGreen400: '#4ade80',
      SuccessGreen300: '#86efac',
      WarningYellow200: '#fef08a',
      WarningHoverYellow100: '#fef9c3',
      PrimaryLightblue900: '#0c4a6e',
      PrimaryHoverBlue400: '#60a5fa',
      SecondaryTeal600: '#0d9488',
      SecondaryHoverTeal400: '#2dd4bf'
    },
  },
  plugins: [],
}
