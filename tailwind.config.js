/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(238 242 255)',
          100: 'rgb(224 231 255)',
          200: 'rgb(199 210 254)',
          300: 'rgb(165 180 252)',
          400: 'rgb(129 140 248)',
          500: 'rgb(99 102 241)',
          600: 'rgb(79 70 229)',
          700: 'rgb(67 56 202)',
          800: 'rgb(55 48 163)',
          900: 'rgb(49 46 129)',
          950: 'rgb(30 27 75)',
        },
        secondary: {
          50: 'rgb(255 247 237)',
          100: 'rgb(255 237 213)',
          200: 'rgb(254 215 170)',
          300: 'rgb(253 186 116)',
          400: 'rgb(251 146 60)',
          500: 'rgb(249 115 22)',
          600: 'rgb(234 88 12)',
          700: 'rgb(194 65 12)',
          800: 'rgb(154 52 18)',
          900: 'rgb(124 45 18)',
          950: 'rgb(67 20 7)',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },
            code: {
              color: 'var(--tw-prose-code)',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: 'var(--tw-prose-pre-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              overflowX: 'auto',
              fontWeight: '400',
            },
            hr: {
              borderColor: 'var(--tw-prose-hr)',
              borderTopWidth: 1,
            },
            blockquote: {
              color: 'var(--tw-prose-quotes)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              fontStyle: 'italic',
            },
            h1: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '800',
            },
            h2: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 