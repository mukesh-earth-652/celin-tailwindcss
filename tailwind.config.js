/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '575px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },

    container : {
      center: true,
      'sm': '302px',
      'md': '430px',
      'lg': '575px',
      'xl': '90%',
      '2xl': '90%',
    },


    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },


    extend: {
      color: {
        'primary': '#53514d',
        'secondary': '#7b9645',
        'light': '#fff',
      },
      fontSize: {
        'xs': '0.75rem',    // Extra small
        'sm': '0.875rem',   // Small
        'base': '1rem',     // Base (default size)
        'lg': '1.125rem',   // Large
        'xl': '1.25rem',    // Extra large
        '2xl': '1.5rem',    // 2x Extra large
        '3xl': '1.875rem',  // 3x Extra large
        '4xl': '2.25rem',   // 4x Extra large
        '5xl': '3rem',      // 5x Extra large
        '6xl': '4rem',      // 6x Extra large
        '7xl': '5rem',      // 7x Extra large
      },
    },
  },
  plugins: [],
}

