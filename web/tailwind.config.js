module.exports = {
  // https://tailwindcss.com/docs/dark-mode    -> https://www.youtube.com/watch?v=2IfTD-muRF4
  darkMode: 'class',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          300: '#996DFF',
          500: '#8257E5',
        }
      },
      borderRadius:{
        md: '4px'
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
