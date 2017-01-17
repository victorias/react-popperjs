var path = require('path');
var webpack = require('webpack');

const externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'popper.js': {
    root: 'Popper',
    commonjs2: 'Popper',
    commonjs: 'Popper',
    amd: 'Popper'
  }
};

var config = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-popperjs.js',
    sourceMapFilename: 'react-popper.sourcemap.js',
    library: 'ReactPopperJs',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, loader: 'babel-loader' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: externals,
};

module.exports = config;
