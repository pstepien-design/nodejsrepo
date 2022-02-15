const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my website</h1>
  <h2>take a look ${true}</h2>`);
})

app.get('/forecast', (req, res) => {
  res.sendFile(__dirname+ '/public/weather.html')
})


app.listen(8080, () => {
  console.log('The server is running', 8080);
});
