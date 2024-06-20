import type { Config } from 'tailwindcss';
const svgToDataUri = require('mini-svg-data-uri');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      spacing: {
        '0.1': '0.025rem',
        '0.2': '0.05rem',
        '0.3': '0.075rem',
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '1.6': '1.6rem',
        '1.7': '1.7rem',
        '1.8': '1.8rem',
      },

      boxShadow: {
        'blue-lg':
          '0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -2px rgba(59, 130, 246, 0.25)', // Example bluish hue
        'strong-blue-lg':
          '0 10px 15px -3px rgba(29, 78, 216, 0.7), 0 4px 6px -2px rgba(29, 78, 216, 0.5)',
        'light-blue-lg':
          '0 10px 15px -3px rgba(147, 197, 253, 0.5), 0 4px 6px -2px rgba(147, 197, 253, 0.3)',
        black: '0 2px 4px 0 rgba(0, 0, 0, 1)',

        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        crimson: '#bb0a1e',
        bloodorange: '#cc1100',
        blood: '#880808',
        brightblu: '#4cffff',
        diftiko: '#1f7286',
        bone: '#E9e2d6',
        herred: '#f55771',
        tangerinedark: '#f7ad19',
        tangerine: '#f27f0c',
        damntblue: '#429ebd',
        jellybean: '#da614e',
        gold: '#B78428',
        bluesky: '#2596be',
        darkgold: 'cca43b',
        bluegray: '#3e567c',
        lightblue: '#a7bbcb',
        lightgray: '#c0c0c0',
        cream: '#F5F5F5',
        ironside: '#636363',
        obsidian: '#020403',
        shadowpink: '#bfafb2',
        darkredbrown: '#1D0002',
        gravel: '#4E4E4E',
        redishbrown: '#523235',
        palegold: '#E6BE8A',
        goldenbrown: '#e6be8a',
        tradbrown: '#964B00',
        sienna: '#A0522D',
        saddelbrown: '#8B4513',
        chocolate: '#D2691E',
        iridium: '#3F3F3F',
        oranges: '#FFA947',
        tikodark: '#034c52',
        tiko: '#015c63',
        tikolight: '#017075',
        salmondark: '#f48D79',
        salmonmid: '#f4a898',
        salmonlight: '#ffc0b4',
        purplebur: '#630947',
        salmon: '#E76D57',
        blackish: '#201315',
        carafe: '#56382D',
        brownish: '#372C2E',
        yellowish: '#DE9E48',
        theorange: '#e95e10',
        orangish: '#f2833e',
        peach: '#FFE0BD',
        platinum: '#E6E6E6',
        midnight: '#2E364F',
        stella: '#23323f',
        blackrock: '#010127',
        midnightblue: '#003366',
        ghost: '#CDCDCD',
        grandis: '#FFC989',
        porcelain: '#F1F1F1',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'open-sidebar': {
          from: { width: '60px' },
          to: { width: '300px' },
        },
        'close-sidebar': {
          from: { width: '300px' },
          to: { width: '60px' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        blink: {
          '0%, 100%': { borderColor: '#155e75' },
          '50%': { borderColor: '#034c52' },
        },
      },
      animation: {
        'blink-border': 'blink 1.5s infinite',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'open-sidebar': 'open-sidebar 0.2s ease-out',
        'close-sidebar': 'close-sidebar 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-dot-thick': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      );
    },
  ],
};

export default config;
