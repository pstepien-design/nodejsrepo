import express from 'express';

import helmet from 'helmet';
 
const app = express();

app.use(express.static('public'));
app.use('/auth/*', ipLogger);
app.use(helmet());

/* app.get("/clothes", (req, res) =>{
res.sendFile(__dirname + "/public/clothes.html")
}); */

app.get('/room', (req, res, next) => {
  console.log({ data: 'You are in room 1' });
  next();
});

function ipLogger(req, res, next) {
  console.log(req.ip);
  next();
}
app.get('/frontgate', ipLogger, (req, res) => {
  res.send({});
});

app.get('/room', (req, res, next) => {
  res.send({ data: 'You are in room 2' });
});

const isHatchOpen = true;
function allowEscape(req, res, next) {
  if (isHatchOpen) {
    console.log('Go on');
    req.escape = 'Jimmy';
    next();
  } else {
    res.send({ message: 'You are not allowed to pass' });
  }
}

app.get('/escapehatch', allowEscape, (req, res) => {
  res.send({ message: `Congrats ${req.escape}, you have managed to escape!` });
});

app.get('*', (req, res) => {
  res.send('<h1>Not found 404</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('The app is working on', PORT);
});
