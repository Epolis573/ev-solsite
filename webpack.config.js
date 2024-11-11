const path = require('path');

module.exports = {
  entry: '/public/_astro/hoisted.e1f00afd.js', // Path to your entry file
  output: {
    filename: 'bundleabouts.js',             // Output bundled file
    path: path.resolve(__dirname, 'public/_astro') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'production', // or 'development' during testing
};