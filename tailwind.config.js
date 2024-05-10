/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './docs/components/**/*.vue',
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/**/*.md'],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
};
