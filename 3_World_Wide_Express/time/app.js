const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname +'/public/time.html');
});
app.listen(8080, () => {
  console.log('The server is running', 8080);
});
