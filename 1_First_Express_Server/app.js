const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('this is a get request)');
});
app.post('/', function (req, res) {
  console.log('post request sent');
  res.send('This is a post request');
});

app.listen(3005, () => {
  console.log('app is running');
});
