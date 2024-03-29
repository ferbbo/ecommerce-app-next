
const plugins = [ 'tailwindcss', 'autoprefixer'];
if (process.env.NODE_ENV === 'production') {
    plugins.push([
        "postcss-flexbugs-fixes",
        [
          "postcss-preset-env",
          {
            "autoprefixer": {
              "flexbox": "no-2009"
            },
            "stage": 3,
            "features": {
              "custom-properties": false
            }
          }
        ],
          '@fullhuman/postcss-purgecss',
          {
            content: [
                './src/pages/**/*.{js,jsx,ts,tsx}',
                './src/components/**/*.{js,jsx,ts,tsx}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: ["html", "body"]
          }
        ],);
}
module.exports = {
  plugins
}