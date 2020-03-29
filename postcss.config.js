const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/**/*.html', './**/**/*.svelte'],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
});

const production = process.env.NODE_ENV !== 'development';

module.exports = {
  plugins: [require('tailwindcss'), purgecss]
};
