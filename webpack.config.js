module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '/dist/example.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
};
