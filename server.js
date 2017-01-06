const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
// redirect all https traffic to http (so openWeatherMap api will work)
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next(); // the next() function just processes the request
  }
});
// set app to use Public folders
app.use(express.static('public'));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
// Start server
app.listen(PORT, () => {
  console.log(`The express server is running on port${PORT}`);
});
