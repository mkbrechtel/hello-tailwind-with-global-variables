/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  safeList: [
    'bg-primary', 'bg-primary-dark', 'bg-primary-light',
    'bg-secondary', 'bg-secondary-dark', 'bg-secondary-light',
    'bg-accent', 'bg-accent-dark', 'bg-accent-light',
    'bg-background', 'bg-background-dark', 'bg-background-light',
    'text-text', 'text-text-dark', 'text-text-light',
    'text-primary', 'text-primary-dark', 'text-primary-light',
    'text-secondary', 'text-secondary-dark', 'text-secondary-light',
    'text-accent', 'text-accent-dark', 'text-accent-light',
    'border-background-dark'
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        // Secondary colors
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        // Accent colors
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },
        // Text colors
        text: {
          DEFAULT: 'var(--color-text)',
          light: 'var(--color-text-light)',
          dark: 'var(--color-text-dark)',
        },
        // Background colors
        background: {
          DEFAULT: 'var(--color-background)',
          light: 'var(--color-background-light)',
          dark: 'var(--color-background-dark)',
        },
      },
    },
  }
}