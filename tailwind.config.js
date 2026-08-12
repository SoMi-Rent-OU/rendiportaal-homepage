/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_categories/**/*.md',
    './_products/**/*.md',
    './*.html',
    './*.markdown',
  ],
  theme: {
    container: {
      center: true,
    },
  },
}
