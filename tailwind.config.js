/** @type {Plugin} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
          skin: {
              base: 'var(--color-text-base)',
              inverted: 'var(--color-text-inverted)',
              muted: 'var(--color-text-muted)',
              'muted-inverted': 'var(--color-text-muted-inverted)'
          }
      },
      backgroundColor: {
        skin: {
            base: 'var(--color-bg-base)',
            inverted: 'var(--color-bg-inverted)',
            'button-base': 'var(--color-button-base)',
            'button-inverted': 'var(--color-button-inverted)',
        }
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}) {
      addUtilities({
        '.custom-class': {
          width: '300px',
          height: '300px',
        },
      })
    })
  ],
  darkMode: 'class'
}
