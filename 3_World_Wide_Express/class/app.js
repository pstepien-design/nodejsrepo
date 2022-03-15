const express = require('express');
const app = express();

const dinosaurrouter = require('./routers/dinosarrouter');
app.use(dinosaurrouter.router);

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to my website</h1>
  <h2>take a look true}</h2>`);
});
app.get('/welcome', (req, res) => {
  res.sendFile(__dirname + '/public/welcome/welcome.html');
});

app.get('/forecast', (req, res) => {
  res.sendFile(__dirname + '/public/weather.html');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log('The server is running', PORT);
});

console.log(PORT);
