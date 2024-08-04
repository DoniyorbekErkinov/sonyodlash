module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#003366', // Used for main text, headings, and some buttons
        brightOrange: '#FFA500', // Used for call-to-action buttons and accents
        mediumGray: '#666666', // Used for subheadings and descriptions
        lightGray: '#F5F5F5', // Used for background sections
        white: '#FFFFFF', // Used for main background and clean sections
        lightOrange: '#FFB84D' // Used for button hover effects
      },
      screens: {
        'xs': '480px', // Extra small devices (e.g., phones in portrait mode)
        'sm': '640px', // Small devices (e.g., phones in landscape mode)
        'md': '768px', // Medium devices (e.g., tablets)
        'lg': '1024px', // Large devices (e.g., laptops)
        'xl': '1280px', // Extra large devices (e.g., desktops)
        '2xl': '1536px' // 2X extra large devices (e.g., large desktops)
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
