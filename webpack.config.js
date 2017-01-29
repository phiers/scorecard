const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
// Define base plugins
let plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'], // exclude any duplicate imports already in vendor bundle
  }),
  new HtmlWebpackPlugin({
    template: 'app/index.html',
  }),
];
// Add plugins to be run in production
if (production) {
  plugins = plugins.concat([
    new webpack.optimize.DedupePlugin(),  // won't be necessary in wp2
    new webpack.optimize.OccurenceOrderPlugin(), // also not necessary in 2
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200,
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
    new webpack.DefinePlugin({ // makes var available on window
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]);
}
const VENDOR_LIBS = [
  'firebase', 'lodash.clonedeep', 'react', 'react-dom',
  'react-redux', 'react-router', 'redux', 'redux-logger', 'redux-thunk',
];

// Finally, webpack config
module.exports = {
  entry: {
    foundation: [
      '!!script!jquery/dist/jquery.min.js',
      '!!script!foundation-sites/dist/js/foundation.min.js',
    ],
    bundle: './app/app.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  externals: {
    jquery: 'jQuery',
    foundation: 'Foundation',
  },
  plugins,
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api',
      './app/actions',
      './app/reducers',
      './app/router',
      './app/store',
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
    }],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    ],
  },
  debug: !production,
  devtool: production ? false : 'eval-source-map',
};
