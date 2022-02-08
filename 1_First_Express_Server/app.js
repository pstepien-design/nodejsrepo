/* const app =require('express')(); */

const express = require('express');
const app = express();

 app.use(express.json());


app.get('/', (req, res) => {
  res.send({ message: "This is a get request" });
});
app.get('/welcome', (req, res) => {
  res.send({ message: "Welcome visitor" });
});
app.post('/mirror', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3005, () => {
  console.log('app is running');
});
