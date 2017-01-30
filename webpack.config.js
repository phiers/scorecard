const webpack = require('webpack');
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line

const production = process.env.NODE_ENV === 'production';
// Define base plugins
let plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

// Add plugins to be run in production
if (production) {
  plugins = plugins.concat([
    // new webpack.optimize.DedupePlugin(),  // won't be necessary in wp2
    new webpack.optimize.OccurenceOrderPlugin(), // also not necessary in 2
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200,
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
    new webpack.DefinePlugin({ // makes var available on window
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new BundleAnalyzerPlugin(),
  ]);
}

// Finally, webpack config
module.exports = {
  entry: {
    foundation: [
      '!!script!jquery/dist/jquery.min.js',
      '!!script!foundation-sites/dist/js/foundation.min.js',
    ],
    bundle: './app/app.jsx',
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: '[name].js',
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
  devtool: !production ? 'eval-source-map' : '',
};
