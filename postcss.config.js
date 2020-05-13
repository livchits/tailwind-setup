const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({ preset: 'default' });
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/*.html'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

process.env.NODE_ENV === 'production'
  ? (module.exports = {
      plugins: [tailwindcss, autoprefixer, purgecss, cssnano],
    })
  : (module.exports = {
      plugins: [tailwindcss],
    });
