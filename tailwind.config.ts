/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          green: {
            50: '#6BAB90',
            90: '#55917F',
          },
          gray: {
            10: '#EEEEEE',
            20: '#A2A2A2',
            30: '#7B7B7B',
            50: '#585858',
            90: '#141414',
          },
          orange: {
            50: '#FBB891',
            90: '#FA7E61'
          },
          blue: {
            70: '#021639',
          },
          yellow: {
            50: '#FFF785',
            90: '#FFF45C'
          },
          pink: {
            50: '#F7789C',
            90: '#F6658E'
          },
          black: {
            90: '#140801'
          }
        },
        backgroundImage: {
          'bg-img-1': "url('/img-1.png')",
          'bg-img-2': "url('/img-2.png')",
          'feature-bg': "url('/feature-bg.png')",
          pattern: "url('/pattern.png')",
          'pattern-2': "url('/pattern-bg.png')",
        },
        screens: {
          xs: '400px',
          '3xl': '1680px',
          '4xl': '2200px',
        },
        maxWidth: {
          '10xl': '1512px',
        },
        borderRadius: {
          '5xl': '40px',
        },
      },
    },
    plugins: [],
  };