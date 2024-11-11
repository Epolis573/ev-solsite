const path = require('path');

module.exports = {
  entry: '/public/_astro/hoisted.aa429c6d.js', // Path to your entry file
  output: {
    filename: 'bundle.js',             // Output bundled file
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