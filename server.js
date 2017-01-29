const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// if (process.env.NODE_ENV !== 'production') {
//   const webpackMiddleware = require('webpack-dev-middleware');
//   const webpack = require('webpack');
//   const webpackConfig = require('./webpack.config.js');
//   app.use(webpackMiddleware(webpack(webpackConfig)));
// } else {
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
// }

// Start server
app.listen(PORT, () => {
  console.log(`The express server is running on port${PORT}`);
});
